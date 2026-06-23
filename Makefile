.PHONY: check

check:
	mint validate && mint broken-links && mint a11y
