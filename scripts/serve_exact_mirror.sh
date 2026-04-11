#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
MIRROR_ROOT="$PROJECT_ROOT/mirror"
PORT="${1:-4173}"

echo "Serving exact mirror from $MIRROR_ROOT on http://127.0.0.1:$PORT"
exec python3 -m http.server "$PORT" --directory "$MIRROR_ROOT"
