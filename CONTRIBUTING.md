# Contributing

Thanks for improving Chat Simulator. This repository is a production Next.js app with a small server-side AI proxy, so changes should stay reviewable and verified.

## Development setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `DEEPSEEK_API_KEY` only in local or deployment environment variables. Never commit real keys, `.env.local`, generated screenshots, build output, or dependency folders.

## Before opening a PR

Run the same gates used by maintainers:

```bash
python3 scripts/check_repository.py
npm run verify:ai
npm run build
python3 scripts/verify_visual_baseline.py
```

For dependency changes, also run:

```bash
npm audit --omit=dev
```

## Change guidelines

- Keep the mobile chat UI/UX visually stable unless the issue explicitly requests UI work.
- Route all DeepSeek calls through `/api/ai/chat`; frontend code must never import server AI helpers or read DeepSeek keys.
- Preserve scripted story flow. AI text should be anchored to `targetLine` and fall back to original script text on failure.
- Keep clone size small: do not commit `.next/`, `node_modules/`, `output/visual-baseline/current-*.png`, or ad-hoc generated assets. Reuse the compressed screenshots in `docs/screenshots/` for README visuals.
- Add story data through `data/girls.json`, `data/scenes.json`, and `public/` assets, then run repository checks.
