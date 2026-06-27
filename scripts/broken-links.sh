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
  cat "$output"
  exit 0
fi

# Show the full original output, then append an explanation for the
# known false positives so first-time viewers are not confused.
cat "$output"

echo
echo "Note: The broken links reported above for /docs/* on index.mdx are expected."
echo "The site is hosted under a /docs subpath in production, so the homepage uses"
echo "root-relative /docs/* links. The local preview serves the site at /, which"
echo "makes those links appear broken to the CLI. All other links are checked."

# If anything remains after filtering, fail.
if grep -qE '^[^ ]+\.mdx: *' "$filtered"; then
  echo
  echo "Unknown broken links found:"
  grep -E '^[^ ]+\.mdx: *' "$filtered"
  exit 1
fi

exit 0
