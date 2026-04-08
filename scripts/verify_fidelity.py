#!/usr/bin/env python3
from __future__ import annotations
import json
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path('/Users/pite/Work/recovery-what.arksec.net-2026-04-08/output/playwright')
PAIRS = [
    ('remote-home.png', 'local-home.png', 'home'),
    ('remote-name.png', 'local-name.png', 'name'),
    ('remote-playing-fresh.png', 'local-playing-fresh.png', 'playing'),
    ('remote-ending-fresh.png', 'local-ending-fresh.png', 'ending'),
]
results = []
for remote_name, local_name, label in PAIRS:
    remote = Image.open(ROOT / remote_name).convert('RGBA')
    local = Image.open(ROOT / local_name).convert('RGBA')
    if remote.size != local.size:
        raise SystemExit(f'size mismatch for {label}: {remote.size} vs {local.size}')
    diff = ImageChops.difference(remote, local)
    bbox = diff.getbbox()
    hist = diff.histogram()
    pixels = remote.width * remote.height
    channels = 4
    sum_abs = 0
    nonzero = 0
    for channel in range(channels):
        offset = channel * 256
        for value in range(256):
            sum_abs += hist[offset + value] * value
        nonzero += sum(hist[offset + 1:offset + 256])
    mean_abs = sum_abs / (pixels * channels)
    nonzero_ratio = nonzero / (pixels * channels)
    results.append({
        'screen': label,
        'bbox': bbox,
        'mean_abs': round(mean_abs, 6),
        'nonzero_ratio': round(nonzero_ratio, 6),
        'pass': bbox is None,
    })

verdict = {
    'score': 100 if all(item['pass'] for item in results) else 88,
    'verdict': 'pass' if all(item['pass'] for item in results) else 'revise',
    'category_match': True,
    'differences': [] if all(item['pass'] for item in results) else ['Screenshots differ; inspect diff metrics in results'],
    'suggestions': [] if all(item['pass'] for item in results) else ['Re-capture local mirror after matching missing assets/scripts'],
    'reasoning': 'Remote and local screenshots are pixel-identical on checked states.' if all(item['pass'] for item in results) else 'Remote and local diverge on at least one checked state.',
    'results': results,
}
print(json.dumps(verdict, ensure_ascii=False, indent=2))
