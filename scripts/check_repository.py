#!/usr/bin/env python3
from __future__ import annotations
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REQUIRED_FILES = [
    ROOT / 'README.md',
    ROOT / 'RECOVERY_REPORT.md',
    ROOT / 'docs' / 'cleanup-plan.md',
    ROOT / 'scripts' / 'serve_exact_mirror.sh',
    ROOT / 'scripts' / 'verify_fidelity.py',
    ROOT / 'scripts' / 'verify_recovered_source_fidelity.py',
    ROOT / 'mirror' / 'index.html',
    ROOT / 'recovered-app' / 'components' / 'RecoveredChatSimulator.jsx',
    ROOT / 'recovered-app' / 'package.json',
]

COUNTS = {
    'girls': 5,
    'tactics': 10,
    'scenes': 336,
    'chapters': 6,
}

for path in REQUIRED_FILES:
    if not path.exists():
        raise SystemExit(f'Missing required file: {path}')

loaded = {
    'girls': json.loads((ROOT / 'extracted' / 'girls.json').read_text()),
    'tactics': json.loads((ROOT / 'extracted' / 'tactics.json').read_text()),
    'scenes': json.loads((ROOT / 'extracted' / 'scenes.json').read_text()),
    'chapters': json.loads((ROOT / 'extracted' / 'chapters.json').read_text()),
}

for key, expected in COUNTS.items():
    actual = len(loaded[key]) if not isinstance(loaded[key], dict) else len(loaded[key].keys())
    if actual != expected:
        raise SystemExit(f'Unexpected {key} count: {actual} != {expected}')

print('Repository structure check: PASS')
print(json.dumps({
    'required_files_checked': len(REQUIRED_FILES),
    'counts': {key: (len(loaded[key]) if not isinstance(loaded[key], dict) else len(loaded[key].keys())) for key in COUNTS},
}, ensure_ascii=False, indent=2))
