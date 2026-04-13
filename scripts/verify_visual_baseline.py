#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1] / 'output' / 'visual-baseline'
PAIRS = [
    ('current-home.png', 'baseline-home.png', 'home'),
    ('current-name.png', 'baseline-name.png', 'name'),
    ('current-playing.png', 'baseline-playing.png', 'playing'),
    ('current-ending.png', 'baseline-ending.png', 'ending'),
]
results = []
for current_name, baseline_name, label in PAIRS:
    current = Image.open(ROOT / current_name).convert('RGB')
    baseline = Image.open(ROOT / baseline_name).convert('RGB')
    if current.size != baseline.size:
        raise SystemExit(f'size mismatch for {label}: {current.size} vs {baseline.size}')
    diff = ImageChops.difference(current, baseline)
    bbox = diff.getbbox()
    hist = diff.histogram()
    pixels = current.width * current.height
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
    'differences': [] if all_pass else ['Current app render still diverges from the stored visual baseline beyond threshold on at least one checked state.'],
    'suggestions': [] if all_pass else ['Tighten source parity in the listed screens and rerun screenshot diff.'],
    'reasoning': 'Current app output is visually indistinguishable from the stored baseline on checked states within strict diff thresholds.' if all_pass else 'Current app output still needs visual parity work.',
    'results': results,
}
print(json.dumps(verdict, ensure_ascii=False, indent=2))
