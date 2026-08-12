/**
 * Generates the root sitemap.xml with hreflang alternates from docs.json.
 *
 * Mintlify serves a root sitemap.xml as an override of its generated one, but
 * emits no hreflang annotations itself, so this generator derives the
 * translation groups from the navigation trees: every language must expose the
 * same logical page set, and each URL entry lists all language versions plus
 * an x-default pointing at English.
 *
 * Usage:
 *   bun scripts/generate-sitemap.ts          # write sitemap.xml
 *   bun scripts/generate-sitemap.ts --check  # fail if sitemap.xml is stale
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const BASE = 'https://ccsafetynet.com/docs';
const X_DEFAULT_LANGUAGE = 'en';
const OUTPUT = 'sitemap.xml';

type LanguageNav = { language: string; groups: unknown };

function collectPagePaths(node: unknown): string[] {
  if (typeof node === 'string') return [node];
  if (Array.isArray(node)) return node.flatMap(collectPagePaths);
  if (node && typeof node === 'object')
    return Object.entries(node).flatMap(([key, value]) =>
      key === 'pages' || key === 'groups' ? collectPagePaths(value) : [],
    );
  return [];
}

/** "ja/guides/dashboard" -> "guides/dashboard"; English paths carry no prefix. */
function logicalKey(language: string, pagePath: string): string {
  if (language === X_DEFAULT_LANGUAGE) return pagePath;
  const prefix = `${language}/`;
  if (!pagePath.startsWith(prefix))
    throw new Error(`${language} navigation entry "${pagePath}" lacks the ${prefix} prefix`);
  return pagePath.slice(prefix.length);
}

/** Deployed URL for a logical page in one language; "index" maps to the tree root. */
function pageUrl(language: string, key: string): string {
  const root = language === X_DEFAULT_LANGUAGE ? BASE : `${BASE}/${language}`;
  return key === 'index' ? root : `${root}/${key}`;
}

const docs = JSON.parse(readFileSync('docs.json', 'utf-8')) as {
  navigation: { languages: LanguageNav[] };
};
const languages = docs.navigation.languages.map((entry) => entry.language);
if (!languages.includes(X_DEFAULT_LANGUAGE))
  throw new Error(`docs.json navigation has no "${X_DEFAULT_LANGUAGE}" language tree`);

const keysByLanguage = new Map(
  docs.navigation.languages.map((entry) => [
    entry.language,
    collectPagePaths(entry.groups).map((path) => logicalKey(entry.language, path)),
  ]),
);

const englishKeys = keysByLanguage.get(X_DEFAULT_LANGUAGE) ?? [];
if (new Set(englishKeys).size !== englishKeys.length)
  throw new Error('duplicate page paths in the English navigation');
for (const [language, keys] of keysByLanguage) {
  const missing = englishKeys.filter((key) => !keys.includes(key));
  const extra = keys.filter((key) => !englishKeys.includes(key));
  if (missing.length > 0 || extra.length > 0)
    throw new Error(
      `${language} navigation is out of sync with English` +
        (missing.length > 0 ? `; missing: ${missing.join(', ')}` : '') +
        (extra.length > 0 ? `; extra: ${extra.join(', ')}` : ''),
    );
}

const urlEntries = languages.flatMap((language) =>
  englishKeys.map((key) => {
    const alternates = [
      ...languages.map(
        (altLanguage) =>
          `    <xhtml:link rel="alternate" hreflang="${altLanguage}" href="${pageUrl(altLanguage, key)}"/>`,
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${pageUrl(X_DEFAULT_LANGUAGE, key)}"/>`,
    ];
    return [`  <url>`, `    <loc>${pageUrl(language, key)}</loc>`, ...alternates, `  </url>`].join(
      '\n',
    );
  }),
);

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...urlEntries,
  '</urlset>',
  '',
].join('\n');

if (process.argv.includes('--check')) {
  const current = existsSync(OUTPUT) ? readFileSync(OUTPUT, 'utf-8') : '';
  if (current !== xml) {
    console.error(
      `${OUTPUT} is stale: the navigation in docs.json changed. Run "make sitemap" and commit the result.`,
    );
    process.exit(1);
  }
  console.log(`${OUTPUT} matches docs.json (${languages.length * englishKeys.length} URLs).`);
  process.exit(0);
}

writeFileSync(OUTPUT, xml);
console.log(
  `Wrote ${OUTPUT}: ${languages.length * englishKeys.length} URLs across ${languages.length} languages, ${englishKeys.length} pages each.`,
);
