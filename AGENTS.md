# Documentation project instructions

## About this project

- This is a documentation site built on [Mintlify](https://mintlify.com)
- Pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Use the Mintlify MCP server, `https://mcp.mintlify.com`, to edit content and settings via MCP
- Use the Mintlify docs MCP server, `https://www.mintlify.com/docs/mcp`, to query information about using Mintlify via MCP

## Terminology

- ALWAYS run `make check` to verify changes (runs `mint validate && mint broken-links && mint a11y`).

## Style preferences

- read DESIGN.md PRODUCT.md

## Tests
NO NEED TO DO TDD FOR THIS PROJECT. DO NOT WRITE ANY TESTS AT ALL.