# CC Safety Net documentation

This repository contains the public documentation site for CC Safety Net, published with [Mintlify](https://mintlify.com).

It is **not** the product repository. Product code, tests, `SECURITY.md`, and the changelog live in [`kenryu42/cc-safety-net`](https://github.com/kenryu42/cc-safety-net). This repository only contains pages that describe that product. A behavior change belongs in the product repository first; this repository follows it.

## Prerequisites

The toolchain is pinned. Match these versions exactly:

| Tool | Version | Pinned in |
| --- | --- | --- |
| Node.js | `24.18.0` | `.node-version` |
| Bun | `1.3.14` | `package.json` `packageManager` |
| Mint CLI | `4.2.598` | `package.json` `devDependencies` |

Mint does not support Node 25 or newer. On an unsupported Node it prints an error and exits nonzero before validating anything, so always select the pinned version first:

```bash
nvm use          # reads .node-version
node --version   # v24.18.0
```

## Install

Install from the committed lockfile so everyone resolves the same Mint build:

```bash
make install     # bun install --frozen-lockfile
```

This installs Mint into `node_modules/`. Every command in this repository uses that repository-local binary. There is deliberately no fallback to a globally installed `mint`; if the local install is missing, `make check` fails with an actionable error rather than silently using an unpinned CLI.

## Preview locally

```bash
make preview
```

The preview serves at `http://localhost:3000`.

Local preview does not prove hosted behavior. The production site is served under a `/docs` path prefix supplied by hosting, and search, redirects, and navigation behave differently there. Anything that depends on the deployed environment must be confirmed in a hosted preview.

## The required check

```bash
make check
```

This is the single required gate. It runs, against the repository-local Mint CLI:

```bash
mint validate
mint broken-links --check-anchors --check-redirects --check-snippets
mint a11y
```

Any nonzero Mint exit fails the gate. No output is filtered or parsed to decide whether a failure is safe to ignore.

External link checking (`--check-external`) is deliberately excluded, because remote failures are not deterministic and would make the gate flaky.

## Content layout

| Path | Contents |
| --- | --- |
| `docs.json` | Navigation, theme, and site configuration |
| `index.mdx`, `introduction.mdx`, `installation.mdx`, `quickstart.mdx` | Landing and onboarding pages |
| `configuration/` | Modes, policy, environment, custom rules, status line, recovery |
| `reference/` | Blocked/allowed commands, CLI, audit log, explain trace, glossary |
| `guides/` | Concepts, comparisons, integration, limits, troubleshooting |
| `assets/` | Logos, integration marks, and images |
| `contributing.mdx`, `security.mdx` | Project pages |
| `*.md` at the root | Planning and research notes; not published |

## Page conventions

- Every page needs `title` and `description` frontmatter. `sidebarTitle` overrides the navigation label.
- Use sentence case for headings and navigation labels. Preserve exact casing for product names, commands, flags, environment variables, paths, and rule identifiers.
- Use root-relative internal links (`/installation`, not `/docs/installation`). The `/docs` prefix belongs to hosting configuration, never to authored links.
- Tag every code block with a language.
- Adding a page means adding it to `docs.json`; an unlinked page is invisible.
- Heading text determines anchor slugs. The mode headings in `configuration/modes.mdx` carry environment variables including an `=` character, and inbound links depend on those exact slugs. Changing such a heading means updating its inbound links in the same change. The anchor check will catch a miss.

## Publishing

Deployment is code-based: merging to the default branch publishes. There is no dashboard-authored content to reconcile.

Because publishing is automatic, a passing `make check` is necessary but not sufficient. Review the hosted preview before merging anything that changes navigation, routes, or landing-page structure.

## Source of truth for product claims

Documentation claims about product behavior must be verified against the product repository, in this order:

1. Current implementation plus focused behavioral tests
2. Current source `SECURITY.md`, configuration schema, and `CONTRIBUTING.md`
3. Source `docs/`
4. Source `README.md`, only where it agrees with the implementation
5. Existing pages on this site

The product `README.md` is the weakest source: it has contained confirmed drift from the implementation. Never promote a claim from an existing page or a source README over the code and its tests.
