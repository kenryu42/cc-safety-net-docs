.PHONY: check install preview drift sitemap

MINT := ./node_modules/.bin/mint

$(MINT):
	@echo "error: the repository-local Mint CLI is missing." >&2
	@echo "Run 'bun install --frozen-lockfile' with the Node version in .node-version." >&2
	@exit 1

install:
	bun install --frozen-lockfile

preview: $(MINT)
	bun run preview

# Root sitemap.xml overrides Mintlify's generated one to add hreflang
# alternates; regenerate after any navigation change in docs.json.
sitemap:
	bun scripts/generate-sitemap.ts

check: $(MINT)
	bun scripts/generate-sitemap.ts --check
	bun run check

# Read-only. Lists the source commits the docs have not absorbed, oldest first.
# SOURCE-SYNC.json records the last source commit the docs reflect.
drift:
	@src=$$(jq -r .path SOURCE-SYNC.json); \
	sha=$$(jq -r .sha SOURCE-SYNC.json); \
	branch=$$(jq -r .branch SOURCE-SYNC.json); \
	if ! git -C "$$src" rev-parse --quiet --verify "$$sha^{commit}" >/dev/null; then \
	  echo "error: source repo not found at $$src, or sha $$sha is unknown there." >&2; exit 1; \
	fi; \
	count=$$(git -C "$$src" rev-list --count "$$sha..$$branch"); \
	if [ "$$count" -eq 0 ]; then \
	  echo "Docs are current with $$branch at $$sha."; \
	else \
	  echo "Docs are synced to $$sha; $$count commit(s) on $$branch are not absorbed:"; \
	  echo; \
	  git -C "$$src" log --oneline --reverse "$$sha..$$branch"; \
	  echo; \
	  echo "Files touched:"; \
	  git -C "$$src" diff --stat "$$sha..$$branch" -- ':!tests' ':!*.lock' | tail -1; \
	  echo; \
	  echo "Inspect one commit:  git -C $$src show <sha>"; \
	  echo "Breaking changes:    make drift | grep '!:'"; \
	fi
