import { readFile } from "node:fs/promises";

const index = await readFile("index.mdx", "utf8");
const css = await readFile("custom.css", "utf8");

const requiredIndexSnippets = [
  'className="cc-overview"',
  "<h1>CC Safety Net docs</h1>",
  'className="cc-overview-callout"',
  'className="cc-overview-terminal"',
  'className="cc-terminal-output"',
  "<h2>Supported Coding CLI</h2>",
  'className="cc-cli-grid"',
];

const forbiddenIndexSnippets = [
  'className="cc-home-hero"',
  'className="cc-terminal-proof"',
  'className="cc-overview-try-nav"',
  'className="cc-overview-code-tabs"',
  "Try protection decisions",
  "Available docs",
  "Available coding CLIs",
  "cc-overview-card-title",
  "cc-overview-card-desc",
  "Stop destructive shell commands before they run.",
];

const requiredCssSnippets = [
  '--cc-font-sans: "GT Standard", sans-serif;',
  '--cc-font-mono: "GT Standard Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;',
  ".cc-overview-header",
  ".cc-overview-callout",
  ".cc-overview-terminal",
  ".cc-cli-grid",
  ".cc-cli-placeholder",
  "grid-template-columns: repeat(3, minmax(0, 1fr));",
];

for (const snippet of requiredIndexSnippets) {
  if (!index.includes(snippet)) {
    throw new Error(`index.mdx missing overview layout snippet: ${snippet}`);
  }
}

for (const snippet of forbiddenIndexSnippets) {
  if (index.includes(snippet)) {
    throw new Error(`index.mdx still contains landing-page layout snippet: ${snippet}`);
  }
}

for (const snippet of requiredCssSnippets) {
  if (!css.includes(snippet)) {
    throw new Error(`custom.css missing overview layout snippet: ${snippet}`);
  }
}

console.log("Docs home uses the overview layout.");
