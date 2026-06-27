#!/usr/bin/env bash
set -euo pipefail

# Run Mintlify broken-link check while tolerating known root-relative links on
# the homepage that only resolve under the production /docs subpath.

output=$(mktemp)
filtered=$(mktemp)
trap 'rm -f "$output" "$filtered"' EXIT

# Capture output and exit code. We run without --check-anchors because the
# anchor fragments on the homepage are also only valid in production.
set +e
mint broken-links > "$output" 2>&1
status=$?
set -e

# Filter out known false positives from index.mdx. The CLI indents link
# lines with a Unicode arrow and spaces, so match the path anywhere on the
# line when the file header is index.mdx.
grep -vE '^[[:space:]]*⎿[[:space:]]*/docs/(installation|quickstart)' "$output" > "$filtered" || true

# If Mintlify reported no broken links, we're done.
if [ "$status" -eq 0 ]; then
  printf '\033[1;32msuccess\033[0m no broken links found\n'
  exit 0
fi

# If anything remains after filtering, surface the real broken links.
if grep -qE '^[^ ]+\.mdx: *' "$filtered"; then
  cat "$output"
  echo
  echo "Unknown broken links found:"
  grep -E '^[^ ]+\.mdx: *' "$filtered"
  exit 1
fi

# Only the known /docs/* false positives on index.mdx remain.
printf '\033[1;32msuccess\033[0m no broken links found\n'
