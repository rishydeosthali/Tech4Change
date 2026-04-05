#!/usr/bin/env bash
# Run once from Terminal (not from Cursor if git fails there):
#   chmod +x push-to-github.sh && ./push-to-github.sh
set -euo pipefail
cd "$(dirname "$0")"

REPO_URL="https://github.com/rishydeosthali/Tech4Change.git"

if ! command -v git >/dev/null 2>&1; then
  echo "git not found. Install Xcode Command Line Tools:  xcode-select --install"
  exit 1
fi

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  git init -b main
fi

git branch -M main 2>/dev/null || true

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "$REPO_URL"
else
  git remote add origin "$REPO_URL"
fi

git add -A
if git diff --cached --quiet; then
  echo "Nothing to commit (working tree clean or no changes staged)."
else
  git commit -m "Static Vite for Vercel; remove Express server"
fi

echo "Pushing to origin main..."
if ! git push -u origin main; then
  echo ""
  echo "Push failed. If GitHub already has commits on main, run:"
  echo "  git pull origin main --rebase"
  echo "  git push -u origin main"
  echo "(use --allow-unrelated-histories on pull only if you mean to merge two separate roots)"
  exit 1
fi
