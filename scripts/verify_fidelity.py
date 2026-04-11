#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1] / 'output' / 'playwright'
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
        nonzero += sum(hist[offset + 1 : offset + 256])
    mean_abs = sum_abs / (pixels * channels)
    nonzero_ratio = nonzero / (pixels * channels)
    results.append(
        {
            'screen': label,
            'bbox': bbox,
            'mean_abs': round(mean_abs, 6),
            'nonzero_ratio': round(nonzero_ratio, 6),
            'pass': bbox is None,
        }
    )

all_pass = all(item['pass'] for item in results)
verdict = {
    'score': 100 if all_pass else 88,
    'verdict': 'pass' if all_pass else 'revise',
    'category_match': True,
    'differences': [] if all_pass else ['Screenshots differ; inspect diff metrics in results'],
    'suggestions': [] if all_pass else ['Re-capture local mirror after matching missing assets/scripts'],
    'reasoning': 'Remote and local mirror screenshots are pixel-identical on checked states.' if all_pass else 'Remote and local mirror diverge on at least one checked state.',
    'results': results,
}
print(json.dumps(verdict, ensure_ascii=False, indent=2))
