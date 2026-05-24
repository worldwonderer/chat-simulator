#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC_ROOT = ROOT / 'public'

REQUIRED_FILES = [
    ROOT / 'README.md',
    ROOT / 'package.json',
    ROOT / 'next.config.js',
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
    ROOT / 'components' / 'chat' / 'aiDialogue.js',
    ROOT / 'app' / 'api' / 'ai' / 'chat' / 'route.js',
    ROOT / 'app' / 'api' / 'health' / 'route.js',
    ROOT / 'app' / 'icon.png',
    ROOT / 'lib' / 'ai' / 'deepseek.js',
    ROOT / '.env.example',
    ROOT / 'LICENSE',
    ROOT / 'CONTRIBUTING.md',
    ROOT / 'SECURITY.md',
    ROOT / 'docs' / 'production.md',
    ROOT / 'docs' / 'open-source.md',
    ROOT / 'docs' / 'screenshots' / 'home.png',
    ROOT / 'docs' / 'screenshots' / 'name.png',
    ROOT / 'docs' / 'screenshots' / 'playing.png',
    ROOT / 'docs' / 'screenshots' / 'ending.png',
    ROOT / 'data' / 'girls.json',
    ROOT / 'data' / 'chapters.json',
    ROOT / 'data' / 'scenes.json',
    ROOT / 'data' / 'summary.json',
    ROOT / 'data' / 'tactics.json',
    ROOT / 'scripts' / 'verify_visual_baseline.py',
    ROOT / 'scripts' / 'verify_ai_integration.mjs',
    ROOT / 'public' / 'static-assets' / 'chunks' / '0x.pxwmy6tt~x.css',
    ROOT / 'public' / 'static-assets' / 'chunks' / '0h7l~nyi9rz9m.css',
]

for path in REQUIRED_FILES:
    if not path.exists():
        raise SystemExit(f'Missing required file: {path}')

girls = json.loads((ROOT / 'data' / 'girls.json').read_text())
chapters = json.loads((ROOT / 'data' / 'chapters.json').read_text())
scenes = json.loads((ROOT / 'data' / 'scenes.json').read_text())
summary = json.loads((ROOT / 'data' / 'summary.json').read_text())
tactics = json.loads((ROOT / 'data' / 'tactics.json').read_text())

env_example = (ROOT / '.env.example').read_text()
deepseek_source = (ROOT / 'lib' / 'ai' / 'deepseek.js').read_text()
route_source = (ROOT / 'app' / 'api' / 'ai' / 'chat' / 'route.js').read_text()
client_ai_source = (ROOT / 'components' / 'chat' / 'aiDialogue.js').read_text()
intro_source = (ROOT / 'components' / 'chat' / 'screens' / 'IntroView.jsx').read_text()
playing_source = (ROOT / 'components' / 'chat' / 'screens' / 'PlayingView.jsx').read_text()
phone_shell_source = (ROOT / 'components' / 'chat' / 'PhoneShell.jsx').read_text()
ai_verify_source = (ROOT / 'scripts' / 'verify_ai_integration.mjs').read_text()
package_data = json.loads((ROOT / 'package.json').read_text())
lock_data = json.loads((ROOT / 'package-lock.json').read_text())
layout_source = (ROOT / 'app' / 'layout.jsx').read_text()
health_source = (ROOT / 'app' / 'api' / 'health' / 'route.js').read_text()
readme_source = (ROOT / 'README.md').read_text()
production_doc = (ROOT / 'docs' / 'production.md').read_text()
open_source_doc = (ROOT / 'docs' / 'open-source.md').read_text()
gitignore_source = (ROOT / '.gitignore').read_text()
next_config_source = (ROOT / 'next.config.js').read_text()


if 'turbopack' not in next_config_source or 'root: __dirname' not in next_config_source:
    raise SystemExit('next.config.js must pin Turbopack root to this project')
if package_data.get('license') != 'MIT':
    raise SystemExit('package.json must declare the MIT license')
if package_data.get('homepage') != 'https://chat.vibecoco.ai/':
    raise SystemExit('package.json must point homepage to the production demo URL')
if package_data.get('scripts', {}).get('verify') != 'python3 scripts/check_repository.py && npm run verify:ai && npm run build && python3 scripts/verify_visual_baseline.py':
    raise SystemExit('package.json must expose the full local verification pipeline')
if lock_data.get('packages', {}).get('', {}).get('license') != 'MIT':
    raise SystemExit('package-lock.json root package metadata must be synced with package.json')
if package_data.get('scripts', {}).get('verify:ai') != 'node --no-warnings scripts/verify_ai_integration.mjs':
    raise SystemExit('package.json must expose npm run verify:ai')
if package_data.get('dependencies', {}).get('next') != '16.2.6':
    raise SystemExit('package.json must pin next to the verified build version 16.2.6')
if package_data.get('overrides', {}).get('postcss') != '8.5.15':
    raise SystemExit('package.json must override postcss to the audited patched version 8.5.15')
if 'DEEPSEEK_MODEL=deepseek-v4-flash' not in env_example:
    raise SystemExit('.env.example must document DEEPSEEK_MODEL=deepseek-v4-flash')
if 'DEEPSEEK_API_KEY=' not in env_example:
    raise SystemExit('.env.example must document DEEPSEEK_API_KEY')

if 'APP_PUBLIC_URL=https://chat.vibecoco.ai' not in env_example or 'AI_ALLOWED_ORIGINS=https://chat.vibecoco.ai' not in env_example:
    raise SystemExit('.env.example must document production origin settings')
if 'NEXT_PUBLIC_DEEPSEEK' in env_example:
    raise SystemExit('.env.example must not suggest browser-exposed DeepSeek variables')
if 'DEEPSEEK_API_KEY' not in health_source or 'deepseekConfigured' not in health_source or '.trim()' not in health_source:
    raise SystemExit('Health route must report DeepSeek configuration without exposing secrets')
if 'metadataBase' not in layout_source or '/favicon.ico' not in layout_source or '/apple-touch-icon.png' not in layout_source:
    raise SystemExit('Layout metadata must configure production URL and icons')
if 'https://chat.vibecoco.ai/' not in readme_source or 'MIT' not in readme_source:
    raise SystemExit('README must document the production demo URL and MIT license')
if 'docs/screenshots/home.png' not in readme_source or 'docs/screenshots/playing.png' not in readme_source:
    raise SystemExit('README must include project screenshots')
if 'DEEPSEEK_API_KEY' not in production_doc or 'deepseek-v4-flash' not in production_doc:
    raise SystemExit('Production docs must document server-only DeepSeek configuration')
if 'production + local defaults' in production_doc:
    raise SystemExit('Production docs must not describe localhost origins as production defaults')
if 'localhost is rejected by default when `NODE_ENV=production`' not in production_doc:
    raise SystemExit('Production docs must document that localhost origins are development-only defaults')

if 'MIT License' not in (ROOT / 'LICENSE').read_text():
    raise SystemExit('Open source files must include an MIT license')
if 'What is included' not in open_source_doc or 'What is intentionally excluded' not in open_source_doc:
    raise SystemExit('Open source notes must document included and excluded project contents')
if 'Vercel project `chat-vibecoco-ai`' not in production_doc or 'main` branch triggers the production deployment automatically' not in production_doc:
    raise SystemExit('Production docs must document Vercel Git auto-deploy from main')
if 'output/visual-baseline/current-*.png' not in gitignore_source or 'output/visual-current/' not in gitignore_source:
    raise SystemExit('.gitignore must exclude generated visual screenshots')
tracked_current = [
    p for p in (ROOT / 'output' / 'visual-baseline').glob('current-*.png')
    if p.exists()
]
if tracked_current:
    raise SystemExit('Generated current visual screenshots must not be present in the repository tree: ' + ', '.join(str(p.relative_to(ROOT)) for p in tracked_current))
if 'sk-' in env_example:
    raise SystemExit('.env.example must not contain a real API key')
if 'deepseek-v4-flash' not in deepseek_source:
    raise SystemExit('DeepSeek client must default to deepseek-v4-flash')
if 'https://api.deepseek.com' not in deepseek_source or 'chat/completions' not in deepseek_source:
    raise SystemExit('DeepSeek client must target the OpenAI-compatible DeepSeek chat completions endpoint')
if 'thinking: { type: "disabled" }' not in deepseek_source:
    raise SystemExit('DeepSeek client must disable thinking mode for direct chat-bubble replies')
if 'createDeepSeekChatCompletion' not in route_source:
    raise SystemExit('AI route must call the DeepSeek completion client')
if '/api/ai/chat' not in client_ai_source:
    raise SystemExit('Client AI dialogue helper must call the local AI route')
if 'function readLastPlayedGirl()' not in intro_source or 'function writeLastPlayedGirl(girlId)' not in intro_source:
    raise SystemExit('Intro start flow must use safe localStorage helpers so blocked storage cannot prevent game start')
if 'window.localStorage.getItem(LAST_PLAYED_GIRL_KEY)' not in intro_source or 'window.localStorage.setItem(LAST_PLAYED_GIRL_KEY, girlId)' not in intro_source:
    raise SystemExit('Intro start flow must keep LAST_PLAYED_GIRL persistence behind safe helper functions')
if "catch {\n    return null;\n  }" not in intro_source or 'persistence is optional' not in intro_source:
    raise SystemExit('Intro safe localStorage helpers must swallow blocked-storage errors and continue')
if "localStorage.getItem('LAST_PLAYED_GIRL')" in intro_source or "localStorage.setItem('LAST_PLAYED_GIRL'" in intro_source:
    raise SystemExit('Intro start flow must not directly call localStorage with string keys')
if 'timeLabel,' not in playing_source or '<StatusBar time={timeLabel} />' not in playing_source:
    raise SystemExit('Playing view must pass scene timeLabel into StatusBar instead of showing only real clock time')
if 'maxWidth: "calc(100vw - 64px)"' not in phone_shell_source or 'maxHeight: "calc(100svh - 64px)"' not in phone_shell_source:
    raise SystemExit('Phone shell must cap the fixed device frame to avoid overflowing small mobile viewports')
if 'deepseek-v4-flash' not in ai_verify_source or 'https://api.deepseek.com/chat/completions' not in ai_verify_source:
    raise SystemExit('AI integration verifier must assert the DeepSeek model and endpoint')
if "thinkingType !== 'disabled'" not in ai_verify_source:
    raise SystemExit('AI integration verifier must assert disabled thinking mode')

if not isinstance(girls, dict) or not girls:
    raise SystemExit('girls.json must be a non-empty object')
if not isinstance(chapters, dict) or not chapters:
    raise SystemExit('chapters.json must be a non-empty object')
if not isinstance(scenes, list) or not scenes:
    raise SystemExit('scenes.json must be a non-empty array')
if not isinstance(summary, dict):
    raise SystemExit('summary.json must be an object')
if not isinstance(tactics, list) or not tactics:
    raise SystemExit('tactics.json must be a non-empty array')

scene_ids = {scene['id'] for scene in scenes}
missing_public_assets: list[str] = []
missing_scene_links: list[str] = []
implicit_silent_choices: list[str] = []
bad_public_image_types: list[str] = []


def public_image_type(path: Path) -> str:
    header = path.read_bytes()[:12]
    if header.startswith(b'\x89PNG\r\n\x1a\n'):
        return 'png'
    if header.startswith(b'\xff\xd8\xff'):
        return 'jpg'
    if header.startswith(b'\x00\x00\x01\x00'):
        return 'ico'
    return 'unknown'


for public_path in PUBLIC_ROOT.iterdir():
    if not public_path.is_file():
        continue
    suffix = public_path.suffix.lower()
    if suffix not in {'.png', '.jpg', '.jpeg', '.ico'}:
        continue
    detected_type = public_image_type(public_path)
    expected_type = 'jpg' if suffix in {'.jpg', '.jpeg'} else suffix.lstrip('.')
    if detected_type != expected_type:
        bad_public_image_types.append(f'{public_path.relative_to(ROOT)} is {detected_type}, expected {expected_type}')

for asset_path in summary.get('asset_paths', []):
    if isinstance(asset_path, str) and asset_path.startswith('/') and not (PUBLIC_ROOT / asset_path.lstrip('/')).exists():
        missing_public_assets.append(asset_path)

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

        reply_source = choice['replyText'] if choice.get('replyText') is not None else choice.get('text', '')
        if not isinstance(reply_source, str):
            reply_source = ''
        rendered_reply = reply_source.replace('{name}', '李雷')
        rendered_reply = re.sub(r'^[（(][^）)]+[）)]\s*', '', rendered_reply)
        rendered_reply = re.sub(r'\s*[（(][^）)]+[）)]$', '', rendered_reply).strip()
        if not rendered_reply and choice.get('replyText') != '':
            implicit_silent_choices.append(f"{scene['id']}.{choice.get('id', '?')}")

if missing_public_assets:
    raise SystemExit('Missing public assets: ' + ', '.join(sorted(set(missing_public_assets))))

if bad_public_image_types:
    raise SystemExit('Public image extensions must match file signatures: ' + '; '.join(bad_public_image_types))

if missing_scene_links:
    preview = ', '.join(missing_scene_links[:10])
    raise SystemExit(f'Broken scene links detected ({len(missing_scene_links)}): {preview}')

if implicit_silent_choices:
    preview = ', '.join(implicit_silent_choices[:10])
    raise SystemExit(f'Choices that render no player bubble must declare replyText=\"\" ({len(implicit_silent_choices)}): {preview}')

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
