.PHONY: check install preview

MINT := ./node_modules/.bin/mint

$(MINT):
	@echo "error: the repository-local Mint CLI is missing." >&2
	@echo "Run 'bun install --frozen-lockfile' with the Node version in .node-version." >&2
	@exit 1

install:
	bun install --frozen-lockfile

preview: $(MINT)
	bun run preview

check: $(MINT)
	bun run check
