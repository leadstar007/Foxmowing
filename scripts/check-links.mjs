import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, relative } from "node:path";

const root = new URL("../dist/client/", import.meta.url).pathname;
if (!existsSync(root)) throw new Error("Static build output is missing. Run pnpm build first.");
const html = [];
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
  const path = join(dir, entry.name);
  if (entry.isDirectory()) walk(path); else if (entry.name.endsWith(".html")) html.push(path);
});
walk(root);
const routes = new Set(html.map((file) => {
  const rel = relative(root, file).replace(/\\/g, "/");
  return rel === "index.html" ? "/" : `/${rel.replace(/\/index\.html$/, "")}`;
}));
const knownDynamic = [/^\/api\//, /^\/manus-storage\//];
const failures = [];
for (const file of html) {
  const source = readFileSync(file, "utf8");
  for (const match of source.matchAll(/href=["']([^"'#?]+)["']/g)) {
    const href = match[1];
    if (!href.startsWith("/") || href.startsWith("//") || knownDynamic.some((pattern) => pattern.test(href))) continue;
    const normal = href.length > 1 ? href.replace(/\/$/, "") : href;
    if (!routes.has(normal) && !existsSync(join(root, href.replace(/^\//, "")))) failures.push(`${relative(root, file)} -> ${href}`);
  }
}
if (failures.length) {
  console.error(`Broken internal links (${failures.length}):\n${failures.join("\n")}`);
  process.exit(1);
}
console.log(`Checked ${html.length} HTML files and found no unresolved internal links.`);
