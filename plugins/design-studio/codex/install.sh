#!/usr/bin/env bash
# Install design-studio pieces that a Codex plugin cannot bundle.
#   ./install.sh                  copy the 9 specialist agents to ~/.codex/agents/
#   ./install.sh --project DIR    copy them to DIR/.codex/agents/ instead
#   ./install.sh --skills         also link the skills into ~/.agents/skills/ (only if you don't install the plugin)
#   ./install.sh --agents-md      also add the routing note to ~/.codex/AGENTS.md (idempotent, between markers)
#   ./install.sh --force          overwrite existing agent files that differ
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PLUGIN="$(dirname "$HERE")"
DEST="$HOME/.codex/agents"; SKILLS=0; AGENTSMD=0; FORCE=0
while [ $# -gt 0 ]; do
  case "$1" in
    --project) DEST="$2/.codex/agents"; shift 2 ;;
    --skills) SKILLS=1; shift ;;
    --agents-md) AGENTSMD=1; shift ;;
    --force) FORCE=1; shift ;;
    -h|--help) sed -n 2,7p "$0"; exit 0 ;;
    *) echo "unknown option: $1" >&2; exit 1 ;;
  esac
done
mkdir -p "$DEST"
for f in "$HERE"/agents/*.toml; do
  t="$DEST/$(basename "$f")"
  if [ -e "$t" ] && ! cmp -s "$f" "$t" && [ "$FORCE" -eq 0 ]; then
    echo "skip $(basename "$f"): a different file exists (use --force)"; continue
  fi
  cp "$f" "$t"; echo "agent  $t"
done
if [ "$SKILLS" -eq 1 ]; then
  mkdir -p "$HOME/.agents/skills"
  for d in "$PLUGIN"/skills/*/; do
    n="$(basename "$d")"; t="$HOME/.agents/skills/$n"
    if [ -e "$t" ] && [ ! -L "$t" ]; then echo "skip skill $n: $t exists and is not a link"; continue; fi
    ln -sfn "${d%/}" "$t"; echo "skill  $t -> ${d%/}"
  done
fi
if [ "$AGENTSMD" -eq 1 ]; then
  f="$HOME/.codex/AGENTS.md"; mkdir -p "$(dirname "$f")"; touch "$f"
  if grep -q "design-studio:start" "$f"; then echo "AGENTS.md already has the design-studio note"; else
    printf '\n' >> "$f"; cat "$HERE/AGENTS.snippet.md" >> "$f"; echo "added routing note to $f"; fi
fi
echo "Done. Restart Codex to load the changes."
