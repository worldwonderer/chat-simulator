#!/usr/bin/env python3
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_ROOT = ROOT / 'public'

REQUIRED_FILES = [
    ROOT / 'README.md',
    ROOT / 'package.json',
    ROOT / 'app' / 'layout.jsx',
    ROOT / 'app' / 'page.jsx',
    ROOT / 'components' / 'ChatSimulator.jsx',
    ROOT / 'components' / 'chat' / 'screens' / 'IntroView.jsx',
    ROOT / 'components' / 'chat' / 'screens' / 'PlayingView.jsx',
    ROOT / 'components' / 'chat' / 'screens' / 'EndingView.jsx',
    ROOT / 'components' / 'chat' / 'PhoneShell.jsx',
    ROOT / 'components' / 'chat' / 'gameData.js',
    ROOT / 'components' / 'chat' / 'gameEngine.js',
    ROOT / 'components' / 'chat' / 'store.js',
    ROOT / 'data' / 'girls.json',
    ROOT / 'data' / 'chapters.json',
    ROOT / 'data' / 'scenes.json',
    ROOT / 'data' / 'tactics.json',
    ROOT / 'scripts' / 'serve_exact_mirror.sh',
    ROOT / 'scripts' / 'verify_fidelity.py',
    ROOT / 'scripts' / 'verify_source_fidelity.py',
    ROOT / 'docs' / 'cleanup-plan.md',
    ROOT / 'docs' / 'recovery-report.md',
    ROOT / 'mirror' / 'index.html',
]

for path in REQUIRED_FILES:
    if not path.exists():
        raise SystemExit(f'Missing required file: {path}')

girls = json.loads((ROOT / 'data' / 'girls.json').read_text())
chapters = json.loads((ROOT / 'data' / 'chapters.json').read_text())
scenes = json.loads((ROOT / 'data' / 'scenes.json').read_text())
tactics = json.loads((ROOT / 'data' / 'tactics.json').read_text())

if not isinstance(girls, dict) or not girls:
    raise SystemExit('girls.json must be a non-empty object')
if not isinstance(chapters, dict) or not chapters:
    raise SystemExit('chapters.json must be a non-empty object')
if not isinstance(scenes, list) or not scenes:
    raise SystemExit('scenes.json must be a non-empty array')
if not isinstance(tactics, list) or not tactics:
    raise SystemExit('tactics.json must be a non-empty array')

scene_ids = {scene['id'] for scene in scenes}
missing_public_assets: list[str] = []
missing_scene_links: list[str] = []

for girl_id, girl in girls.items():
    avatar = girl.get('avatar', '')
    if not avatar.startswith('/'):
        raise SystemExit(f'{girl_id} avatar must be a public-root path: {avatar}')

    if not (PUBLIC_ROOT / avatar.lstrip('/')).exists():
        missing_public_assets.append(avatar)

    first_scene = girl.get('firstScene')
    if first_scene not in scene_ids:
        missing_scene_links.append(f'{girl_id}.firstScene -> {first_scene}')

for scene in scenes:
    auto_next = scene.get('autoNext')
    if auto_next and auto_next not in scene_ids:
        missing_scene_links.append(f"{scene['id']}.autoNext -> {auto_next}")

    for choice in scene.get('choices', []):
        next_scene = choice.get('nextScene')
        if next_scene and next_scene not in scene_ids:
            missing_scene_links.append(f"{scene['id']}.{choice.get('id', '?')} -> {next_scene}")

if missing_public_assets:
    raise SystemExit('Missing public assets: ' + ', '.join(sorted(set(missing_public_assets))))

if missing_scene_links:
    preview = ', '.join(missing_scene_links[:10])
    raise SystemExit(f'Broken scene links detected ({len(missing_scene_links)}): {preview}')

print('Repository structure check: PASS')
print(
    json.dumps(
        {
            'required_files_checked': len(REQUIRED_FILES),
            'girls': len(girls),
            'chapters': len(chapters),
            'scenes': len(scenes),
            'tactics': len(tactics),
            'validated_scene_links': len(scene_ids),
        },
        ensure_ascii=False,
        indent=2,
    )
)
