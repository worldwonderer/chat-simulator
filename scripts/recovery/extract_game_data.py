#!/usr/bin/env python3
from __future__ import annotations

import json
import re
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'extracted'
CHUNK = ROOT / 'extracted' / 'module-96566.raw.js'


def extract_balanced(text: str, start: int, open_char: str) -> str:
    pairs = {'{': '}', '[': ']'}
    close_char = pairs[open_char]
    depth = 0
    i = start
    in_string = None
    escape = False
    while i < len(text):
        ch = text[i]
        if in_string:
            if escape:
                escape = False
            elif ch == '\\':
                escape = True
            elif ch == in_string:
                in_string = None
        else:
            if ch in ('"', "'", '`'):
                in_string = ch
            elif ch == open_char:
                depth += 1
            elif ch == close_char:
                depth -= 1
                if depth == 0:
                    return text[start : i + 1]
        i += 1
    raise ValueError(f'unbalanced expression starting at {start}')


def eval_js_expr(expr: str):
    js = f"const data = ({expr}); console.log(JSON.stringify(data, null, 2));"
    proc = subprocess.run(['node', '-e', js], capture_output=True, text=True)
    if proc.returncode != 0:
        raise RuntimeError(proc.stderr)
    return json.loads(proc.stdout)


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    text = CHUNK.read_text(errors='replace')
    girls_marker = text.find('i={lin:{')
    if girls_marker == -1:
        raise ValueError('girls marker not found')
    girls_expr = extract_balanced(text, text.find('{', girls_marker), '{')

    chapter_marker = text.find('r={1:"第一天 · 试探"')
    if chapter_marker == -1:
        raise ValueError('chapter marker not found')
    chapters_expr = extract_balanced(text, text.find('{', chapter_marker), '{')

    tactics_marker = text.find('c=[{name:"Love Bombing"')
    if tactics_marker == -1:
        raise ValueError('tactics marker not found')
    tactics_expr = extract_balanced(text, text.find('[', tactics_marker), '[')

    scenes_marker = text.find('l=[{id:"scene_01"')
    if scenes_marker == -1:
        raise ValueError('scenes marker not found')
    scenes_expr = extract_balanced(text, text.find('[', scenes_marker), '[')

    girls = eval_js_expr(girls_expr)
    chapters = eval_js_expr(chapters_expr)
    tactics = eval_js_expr(tactics_expr)
    scenes = eval_js_expr(scenes_expr)

    assets = sorted(set(re.findall(r'"(/[^"\\]+\.(?:png|jpg|jpeg|gif|webp|svg))"', text)))

    (OUT / 'girls.json').write_text(json.dumps(girls, ensure_ascii=False, indent=2) + '\n')
    (OUT / 'chapters.json').write_text(json.dumps(chapters, ensure_ascii=False, indent=2) + '\n')
    (OUT / 'tactics.json').write_text(json.dumps(tactics, ensure_ascii=False, indent=2) + '\n')
    (OUT / 'scenes.json').write_text(json.dumps(scenes, ensure_ascii=False, indent=2) + '\n')
    summary = {
        'girls_count': len(girls),
        'chapters_count': len(chapters),
        'tactics_count': len(tactics),
        'scenes_count': len(scenes),
        'asset_paths': assets,
    }
    (OUT / 'summary.json').write_text(json.dumps(summary, ensure_ascii=False, indent=2) + '\n')

    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
