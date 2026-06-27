.PHONY: check

check:
	mint validate && ./scripts/broken-links.sh && mint a11y
