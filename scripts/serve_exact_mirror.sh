#!/usr/bin/env bash
set -euo pipefail
ROOT="/Users/pite/Work/recovery-what.arksec.net-2026-04-08/mirror"
PORT="${1:-4173}"
echo "Serving exact mirror from $ROOT on http://127.0.0.1:$PORT"
exec python3 -m http.server "$PORT" --directory "$ROOT"
