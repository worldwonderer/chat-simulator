#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1] / 'output' / 'playwright'
PAIRS = [
    ('local-home.png', 'source-home.png', 'home'),
    ('local-name.png', 'source-name.png', 'name'),
    ('local-playing-fresh.png', 'source-playing.png', 'playing'),
    ('local-ending-fresh.png', 'source-ending.png', 'ending'),
]
results = []
for local_name, source_name, label in PAIRS:
    local = Image.open(ROOT / local_name).convert('RGB')
    source = Image.open(ROOT / source_name).convert('RGB')
    if local.size != source.size:
        raise SystemExit(f'size mismatch for {label}: {local.size} vs {source.size}')
    diff = ImageChops.difference(local, source)
    bbox = diff.getbbox()
    hist = diff.histogram()
    pixels = local.width * local.height
    channels = 3
    sum_abs = 0
    nonzero = 0
    for channel in range(channels):
        offset = channel * 256
        for value in range(256):
            sum_abs += hist[offset + value] * value
        nonzero += sum(hist[offset + 1 : offset + 256])
    mean_abs = sum_abs / (pixels * channels)
    nonzero_ratio = nonzero / (pixels * channels)
    passed = mean_abs < 0.05 and nonzero_ratio < 0.01
    results.append(
        {
            'screen': label,
            'bbox': bbox,
            'mean_abs': round(mean_abs, 6),
            'nonzero_ratio': round(nonzero_ratio, 6),
            'pass': passed,
        }
    )

all_pass = all(item['pass'] for item in results)
score = 97 if all_pass else 82
verdict = {
    'score': score,
    'verdict': 'pass' if all_pass else 'revise',
    'category_match': True,
    'differences': [] if all_pass else ['Source app still diverges from the local mirror beyond threshold on at least one checked state.'],
    'suggestions': [] if all_pass else ['Tighten source parity in the listed screens and rerun screenshot diff.'],
    'reasoning': 'Source app is visually indistinguishable from the local mirror on checked states within strict diff thresholds.' if all_pass else 'Source app still needs visual parity work.',
    'results': results,
}
print(json.dumps(verdict, ensure_ascii=False, indent=2))
