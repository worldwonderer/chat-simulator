# Production Deployment

Demo: <https://chat.vibecoco.ai/>

## Vercel Git deployment

The Vercel project `chat-vibecoco-ai` is connected to `worldwonderer/chat-simulator`. A push to the `main` branch triggers the production deployment automatically. The Next.js frontend and `app/api/*` backend routes deploy together as one Vercel project.

## Architecture

```text
Browser UI -> Next.js app -> /api/ai/chat -> DeepSeek API
```

The browser never receives `DEEPSEEK_API_KEY`. It only posts bounded context to the local backend route. The route validates payload size and origin, applies in-memory rate limiting, calls DeepSeek with `deepseek-v4-flash`, and returns only the generated chat-bubble text.

## Required environment variables

| Variable | Required | Default | Notes |
| --- | --- | --- | --- |
| `DEEPSEEK_API_KEY` | yes | none | Server-only key. Do not prefix with `NEXT_PUBLIC_`. |
| `DEEPSEEK_MODEL` | no | `deepseek-v4-flash` | Model used by the server proxy. |
| `DEEPSEEK_BASE_URL` | no | `https://api.deepseek.com` | Must be HTTPS. |
| `DEEPSEEK_TIMEOUT_MS` | no | `8000` | Upstream timeout. |
| `APP_PUBLIC_URL` | recommended | `https://chat.vibecoco.ai` in docs | Added to API origin allowlist. |
| `AI_ALLOWED_ORIGINS` | recommended | production + local defaults | Comma-separated extra origins. |
| `AI_MAX_REQUEST_BODY_BYTES` | no | `16384` | Rejects oversized AI payloads. |
| `AI_RATE_LIMIT_WINDOW_MS` | no | `60000` | Rate-limit window per client IP. |
| `AI_RATE_LIMIT_MAX_REQUESTS` | no | `30` | Set `0` to disable in-memory limit. |

## Verification

```bash
python3 scripts/check_repository.py
npm run verify:ai
npm run build
python3 scripts/verify_visual_baseline.py
npm audit --omit=dev
```

`npm run verify:ai` uses a mocked DeepSeek fetch and checks:

- `/api/ai/chat` calls `https://api.deepseek.com/chat/completions`
- model is `deepseek-v4-flash`
- thinking mode is disabled for direct bubble replies
- authorization comes from `DEEPSEEK_API_KEY`
- production origin is allowed, unknown origins are rejected
- oversized payloads are rejected
- `/api/health` responds successfully

## Clone-size policy

The repository keeps source, story data, public assets, and baseline screenshots. Generated files are excluded:

- `node_modules/`
- `.next/`
- `.env*` except `.env.example`
- `output/visual-baseline/current-*.png`
- `output/visual-current/`

Current screenshots can be regenerated locally for strict pixel diffs; they are not committed.
