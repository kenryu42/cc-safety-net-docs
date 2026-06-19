import { readFile } from "node:fs/promises";

const requiredDocsConfig = {
  appearance: {
    default: "dark",
    strict: true,
  },
  colors: {
    primary: "#34d399",
    light: "#5ee8b5",
    dark: "#f3f1db",
  },
  background: {
    color: {
      dark: "#091c1e",
    },
  },
  favicon: "/assets/favicon.svg",
  logo: {
    light: "/assets/cc-safety-net-header-logo-light.svg",
    dark: "/assets/cc-safety-net-header-logo-dark.svg",
  },
};

const requiredHeaderLogoWordmark = {
  x: "76",
  y: "-18",
  width: "500",
  height: "132",
};

const requiredCssTokens = [
  "--cc-void-teal: #091c1e;",
  "--cc-abyss-black: #070a0a;",
  "--cc-rail-line: #dfe0c11f;",
  "--cc-rail-line-strong: #dfe0c13d;",
  "--cc-bone-ink: #f3f1db;",
  "--cc-body-muted: #b8b9a1;",
  "--cc-panel-teal: #0d2426;",
  "--cc-card-teal: #102b2d;",
  "--cc-guard-green: #34d399;",
  "--cc-block-red: #ff6b6b;",
];

function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    throw new Error(`${label}: expected ${expected}, received ${actual ?? "undefined"}`);
  }
}

const docs = JSON.parse(await readFile("docs.json", "utf8"));

assertEqual(docs.appearance?.default, requiredDocsConfig.appearance.default, "appearance.default");
assertEqual(docs.appearance?.strict, requiredDocsConfig.appearance.strict, "appearance.strict");
assertEqual(docs.colors?.primary, requiredDocsConfig.colors.primary, "colors.primary");
assertEqual(docs.colors?.light, requiredDocsConfig.colors.light, "colors.light");
assertEqual(docs.colors?.dark, requiredDocsConfig.colors.dark, "colors.dark");
assertEqual(docs.background?.color?.dark, requiredDocsConfig.background.color.dark, "background.color.dark");
assertEqual(docs.favicon, requiredDocsConfig.favicon, "favicon");
assertEqual(docs.logo?.light, requiredDocsConfig.logo.light, "logo.light");
assertEqual(docs.logo?.dark, requiredDocsConfig.logo.dark, "logo.dark");

for (const logoPath of Object.values(requiredDocsConfig.logo)) {
  const logo = await readFile(logoPath.slice(1), "utf8");

  if (!logo.includes('data-source="favicon.svg"')) {
    throw new Error(`${logoPath} must include favicon.svg in the header logo.`);
  }

  if (!logo.includes('data-source="cc-safety-net-wordmark-logo.svg"')) {
    throw new Error(`${logoPath} must include cc-safety-net-wordmark-logo.svg in the header logo.`);
  }

  const wordmarkPattern = new RegExp(
    `data-source="cc-safety-net-wordmark-logo\\.svg"[^>]* x="${requiredHeaderLogoWordmark.x}"[^>]* y="${requiredHeaderLogoWordmark.y}"[^>]* width="${requiredHeaderLogoWordmark.width}"[^>]* height="${requiredHeaderLogoWordmark.height}"`
  );

  if (!wordmarkPattern.test(logo)) {
    throw new Error(`${logoPath} must use the larger header wordmark geometry.`);
  }
}

const css = await readFile("custom.css", "utf8");

for (const token of requiredCssTokens) {
  if (!css.includes(token)) {
    throw new Error(`custom.css missing token: ${token}`);
  }
}

const style = await readFile("style.css", "utf8");

if (!style.includes('@import url("/custom.css");')) {
  throw new Error('style.css must import "/custom.css" for Mintlify CSS discovery.');
}

console.log("Mintlify theme matches DESIGN.md tokens.");
