#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import subprocess
from collections import deque
from pathlib import Path
from urllib.parse import urljoin, urlparse, urldefrag

try:
    from bs4 import BeautifulSoup
except Exception:
    BeautifulSoup = None

BASE = 'https://what.arksec.net/'
HOST = urlparse(BASE).netloc
ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'mirror'
LOG = ROOT / 'docs' / 'recovery' / 'mirror-log.json'
FAIL = ROOT / 'docs' / 'recovery' / 'mirror-failures.json'

TEXT_EXTS = {'.html', '.htm', '.js', '.mjs', '.css', '.json', '.txt', '.xml', '.map'}
ASSET_EXTS = {
    '.js', '.mjs', '.css', '.png', '.jpg', '.jpeg', '.gif', '.webp', '.svg', '.ico',
    '.woff', '.woff2', '.ttf', '.otf', '.eot', '.json', '.map', '.mp3', '.wav', '.mp4',
}
URL_ATTRS = [('script', 'src'), ('link', 'href'), ('img', 'src'), ('source', 'src'), ('audio', 'src'), ('video', 'src')]

QUOTED_PATH_RE = re.compile(r'''["'`](\/[^"'`\\\n\r]+)["'`]''')
CSS_URL_RE = re.compile(r'url\(([^)]+)\)')


def norm_url(url: str, base_url: str = BASE) -> str | None:
    if not url:
        return None
    url = url.strip()
    if not url or url.startswith(('data:', 'blob:', 'javascript:', 'chrome-extension:')):
        return None
    full = urljoin(base_url, url)
    full = urldefrag(full)[0]
    parsed = urlparse(full)
    if parsed.scheme not in {'http', 'https'}:
        return None
    if parsed.netloc != HOST:
        return None
    return full


def rel_path_for_url(url: str) -> Path:
    parsed = urlparse(url)
    path = parsed.path or '/'
    if path.endswith('/') or path == '':
        path = path + 'index.html' if path.endswith('/') else '/index.html'
    return Path(path.lstrip('/'))


def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)


def parse_headers(header_path: Path):
    headers = header_path.read_text(errors='replace') if header_path.exists() else ''
    content_type = None
    status = None
    for line in headers.splitlines():
        if line.startswith('HTTP/'):
            parts = line.split()
            if len(parts) >= 2 and parts[1].isdigit():
                status = int(parts[1])
        elif line.lower().startswith('content-type:'):
            content_type = line.split(':', 1)[1].strip().split(';', 1)[0].strip().lower()
    return status, content_type


def download(url: str):
    rel = rel_path_for_url(url)
    dest = OUT / rel
    ensure_parent(dest)
    header_path = dest.with_suffix(dest.suffix + '.headers')
    if dest.exists() and header_path.exists():
        status, content_type = parse_headers(header_path)
        return {
            'url': url,
            'path': str(dest.relative_to(ROOT)),
            'status': status,
            'content_type': content_type,
            'bytes': dest.stat().st_size if dest.exists() else 0,
            'cached': True,
        }, None
    cmd = [
        'curl', '-fsSL', '--retry', '4', '--retry-delay', '1', '--retry-all-errors',
        '--connect-timeout', '8', '--max-time', '20', '--http1.1', '-D', str(header_path), '-o', str(dest), url,
    ]
    proc = subprocess.run(cmd, capture_output=True, text=True)
    if proc.returncode != 0:
        if dest.exists():
            dest.unlink(missing_ok=True)
        header_path.unlink(missing_ok=True)
        return None, {'url': url, 'error': proc.stderr.strip() or proc.stdout.strip(), 'path': str(dest.relative_to(ROOT))}
    status, content_type = parse_headers(header_path)
    return {
        'url': url,
        'path': str(dest.relative_to(ROOT)),
        'status': status,
        'content_type': content_type,
        'bytes': dest.stat().st_size if dest.exists() else 0,
    }, None


def looks_text(path: Path, content_type: str | None) -> bool:
    if content_type and (content_type.startswith('text/') or 'javascript' in content_type or 'json' in content_type or 'xml' in content_type):
        return True
    return path.suffix.lower() in TEXT_EXTS


def extract_from_html(text: str, current_url: str):
    urls = set()
    if BeautifulSoup is not None:
        soup = BeautifulSoup(text, 'html.parser')
        for tag, attr in URL_ATTRS:
            for element in soup.find_all(tag):
                value = element.get(attr)
                normalized = norm_url(value, current_url)
                if normalized:
                    urls.add(normalized)
    for match in re.findall(r'''(?:src|href)=["']([^"']+)["']''', text, flags=re.I):
        normalized = norm_url(match, current_url)
        if normalized:
            urls.add(normalized)
    return urls


def keep_path_string(value: str) -> bool:
    if value.startswith('/_next/static/'):
        return True
    suffix = Path(urlparse(value).path).suffix.lower()
    return suffix in ASSET_EXTS


def extract_from_js(text: str, current_url: str):
    urls = set()
    for value in QUOTED_PATH_RE.findall(text):
        if keep_path_string(value):
            normalized = norm_url(value, current_url)
            if normalized:
                urls.add(normalized)
    return urls


def extract_from_css(text: str, current_url: str):
    urls = set()
    for raw in CSS_URL_RE.findall(text):
        value = raw.strip().strip('"\'')
        normalized = norm_url(value, current_url)
        if normalized:
            urls.add(normalized)
    for match in re.findall(r'@import\s+["\']([^"\']+)["\']', text):
        normalized = norm_url(match, current_url)
        if normalized:
            urls.add(normalized)
    return urls


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    ensure_parent(LOG)
    ensure_parent(FAIL)
    queue = deque([BASE])
    seen = set()
    downloaded = []
    failures = []

    while queue:
        url = queue.popleft()
        if url in seen:
            continue
        seen.add(url)
        info, err = download(url)
        if err:
            failures.append(err)
            continue
        downloaded.append(info)
        path = ROOT / info['path']
        if not looks_text(path, info.get('content_type')):
            continue
        try:
            text = path.read_text(errors='replace')
        except Exception as exc:
            failures.append({'url': url, 'path': str(path.relative_to(ROOT)), 'error': f'read failed: {exc}'})
            continue

        if path.suffix.lower() in {'.html', '.htm'}:
            found = extract_from_html(text, url)
        elif path.suffix.lower() in {'.css'}:
            found = extract_from_css(text, url)
        else:
            found = extract_from_js(text, url)

        for found_url in sorted(found):
            if found_url not in seen:
                queue.append(found_url)

    LOG.write_text(json.dumps(downloaded, ensure_ascii=False, indent=2))
    FAIL.write_text(json.dumps(failures, ensure_ascii=False, indent=2))
    print(
        json.dumps(
            {
                'downloaded': len(downloaded),
                'failed': len(failures),
                'out_dir': str(OUT.relative_to(ROOT)),
                'log': str(LOG.relative_to(ROOT)),
                'failures_log': str(FAIL.relative_to(ROOT)),
            },
            ensure_ascii=False,
            indent=2,
        )
    )


if __name__ == '__main__':
    main()
