# Security Policy

## Supported versions

The `main` branch is the only supported line.

## Reporting a vulnerability

Please report security issues privately to the project maintainers instead of opening a public issue. Include:

- affected route or file path
- reproduction steps
- expected impact
- any relevant request/response metadata with secrets removed

## Secret handling

- DeepSeek credentials must be stored in deployment environment variables only.
- The browser calls the local backend route `/api/ai/chat`; it must never call DeepSeek directly.
- Do not commit `.env`, `.env.local`, API keys, logs, or generated bundles.
- The production AI route enforces an origin allowlist, request-size limits, rate limiting, upstream timeouts, and `Cache-Control: no-store` responses.
