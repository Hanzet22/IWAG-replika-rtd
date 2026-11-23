import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const outputRoot = path.resolve(process.cwd(), process.argv[2] ?? "dist");
const origin = "https://iwag-v2.invalid";
const errors = [];
let checked = 0;

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.isFile()) files.push(full);
  }
  return files;
}

function publicUrlForFile(file) {
  const relative = path.relative(outputRoot, file).split(path.sep).join("/");
  const publicPath = relative.endsWith("index.html")
    ? "/" + relative.slice(0, -"index.html".length)
    : "/" + relative;
  return new URL(publicPath, origin);
}

async function resolveLocalReference(raw, base, owner, kind) {
  const value = raw.trim();
  if (!value || value.startsWith("#") === false && /^(?:data:|blob:|mailto:|tel:|javascript:|https?:|\/\/)/i.test(value)) return;
  let url;
  try {
    url = new URL(value, base);
  } catch {
    errors.push(`${owner}: invalid ${kind} reference "${value}"`);
    return;
  }
  if (url.origin !== origin) return;
  let pathname;
  try { pathname = decodeURIComponent(url.pathname); }
  catch { errors.push(`${owner}: malformed URL encoding in "${value}"`); return; }

  let target = path.resolve(outputRoot, "." + pathname);
  if (target !== outputRoot && !target.startsWith(outputRoot + path.sep)) {
    errors.push(`${owner}: reference escapes output root "${value}"`);
    return;
  }
  try {
    let metadata = await stat(target);
    if (metadata.isDirectory()) {
      target = path.join(target, "index.html");
      metadata = await stat(target);
    }
  } catch {
    if (!path.extname(target)) {
      target = path.join(target, "index.html");
    }
    try {
      const metadata = await stat(target);
      if (!metadata.isFile()) throw new Error("not a file");
    } catch {
      errors.push(`${owner}: missing local ${kind} target "${value}"`);
      return;
    }
  }

  if (kind === "href" && url.hash && path.extname(target).toLowerCase() === ".html") {
    const anchor = decodeURIComponent(url.hash.slice(1));
    const targetHtml = await readFile(target, "utf8");
    if (anchor && !new RegExp(`(?:id|name)=[\"']${anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\    if (anchor && !new RegExp(`(?:id|name)=[\"']${anchor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\"']`).test(htmlText ?? "")) {")}[\"']`).test(targetHtml)) {
      errors.push(`${owner}: missing fragment target "${value}"`);
      return;
    }
  }
  checked += 1;
}

async function main() {
  const allFiles = await walk(outputRoot);
  const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
  const cssFiles = allFiles.filter((file) => file.endsWith(".css"));

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const base = publicUrlForFile(file);
    const relative = path.relative(outputRoot, file);
    const attrs = /\b(href|src|poster)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
    for (const match of html.matchAll(attrs)) {
      await resolveLocalReference(match[2] ?? match[3] ?? "", base, relative, match[1].toLowerCase());
    }
  }

  for (const file of cssFiles) {
    const css = await readFile(file, "utf8");
    const base = publicUrlForFile(file);
    const relative = path.relative(outputRoot, file);
    const urls = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/gi;
    for (const match of css.matchAll(urls)) {
      await resolveLocalReference(match[1] ?? match[2] ?? match[3] ?? "", base, relative, "css-url");
    }
  }

  console.log(`[iwagc:routes] scanned ${htmlFiles.length} HTML and ${cssFiles.length} CSS files; checked ${checked} local references`);
  if (errors.length) {
    for (const error of errors.slice(0, 60)) console.error("[iwagc:routes] " + error);
    if (errors.length > 60) console.error(`[iwagc:routes] ${errors.length - 60} additional issues omitted`);
    console.error(`[iwagc:routes] failed with ${errors.length} broken local references`);
    process.exitCode = 1;
  } else {
    console.log("[iwagc:routes] no broken local references found");
  }
}

main().catch((error) => {
  console.error("[iwagc:routes] validator failed:", error);
  process.exitCode = 1;
});
