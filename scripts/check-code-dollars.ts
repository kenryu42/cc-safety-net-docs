// Mintlify parses text between two `$` signs as inline math, even with
// `latex: false`, when it sits inside an HTML tag such as <code>. The result
// is a garbled formula that cannot wrap. Text inside a JSX string literal,
// <code>{"-Recurse:$false"}</code>, is left alone, so require that form.
import { Glob } from "bun";

const offenders: string[] = [];
for await (const path of new Glob("**/*.mdx").scan(".")) {
  if (path.startsWith("node_modules/") || path.startsWith("cc-safety-net-wiki/")) continue;
  const lines = (await Bun.file(path).text()).split("\n");
  lines.forEach((line, i) => {
    for (const [, body] of line.matchAll(/<code>(.*?)<\/code>/g)) {
      if (body.includes("$") && !/^\{.*\}$/.test(body)) {
        offenders.push(`${path}:${i + 1}: <code>${body}</code>`);
      }
    }
  });
}

if (offenders.length) {
  console.error("Write <code> text containing `$` as <code>{\"...\"}</code>, or Mintlify renders it as math:");
  for (const o of offenders) console.error(`  ${o}`);
  process.exit(1);
}
