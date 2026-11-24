import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import "./accessibility-report.mjs";

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
  if (!value || /^(?:data:|blob:|mailto:|tel:|javascript:|https?:|\/\/)/i.test(value)) return;
  let url;
  try {
    url = new URL(value, base);
  } catch {
    errors.push(owner + ": invalid " + kind + ' reference "' + value + '"');
    return;
  }
  if (url.origin !== origin) return;

  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    errors.push(owner + ': malformed URL encoding in "' + value + '"');
    return;
  }

  let target = path.resolve(outputRoot, "." + pathname);
  if (target !== outputRoot && !target.startsWith(outputRoot + path.sep)) {
    errors.push(owner + ': reference escapes output root "' + value + '"');
    return;
  }

  try {
    const metadata = await stat(target);
    if (metadata.isDirectory()) target = path.join(target, "index.html");
  } catch {
    if (!path.extname(target)) target = path.join(target, "index.html");
  }

  try {
    const metadata = await stat(target);
    if (!metadata.isFile()) throw new Error("not a file");
  } catch {
    errors.push(owner + ': missing local ' + kind + ' target "' + value + '"');
    return;
  }

  if (kind === "href" && url.hash && target.toLowerCase().endsWith(".html")) {
    let fragment;
    try { fragment = decodeURIComponent(url.hash.slice(1)); }
    catch {
      errors.push(owner + ': malformed fragment in "' + value + '"');
      return;
    }
    if (fragment) {
      const targetHtml = await readFile(target, "utf8");
      const targetIds = new Set([
        ...[...targetHtml.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]),
        ...[...targetHtml.matchAll(/<a\b[^>]*\bname\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1])
      ]);
      if (!targetIds.has(fragment)) {
        errors.push(owner + ': missing fragment target "' + value + '"');
        return;
      }
    }
  }

  checked += 1;
}

function parseSrcset(value) {
  const candidates = [];
  let index = 0;
  while (index < value.length) {
    while (index < value.length && /[\s,]/.test(value[index])) index += 1;
    if (index >= value.length) break;
    const start = index;
    const isData = value.slice(index, index + 5).toLowerCase() === "data:";
    while (index < value.length && !/\s/.test(value[index]) && (isData || value[index] !== ",")) index += 1;
    const url = value.slice(start, index).trim();
    if (url) candidates.push(url);
    while (index < value.length && value[index] !== ",") index += 1;
    if (value[index] === ",") index += 1;
  }
  return candidates;
}

function validateHtmlBasics(html, owner) {
  if (!/<html\b[^>]*\blang\s*=\s*["'][^"']+["']/i.test(html)) {
    errors.push(owner + ": root html element is missing a language attribute");
  }
  if (!/<title\b[^>]*>[\s\S]*?\S[\s\S]*?<\/title>/i.test(html)) {
    errors.push(owner + ": document title is missing or empty");
  }
  if (!/<main\b[^>]*\bid\s*=\s*["']main["']/i.test(html)) {
    errors.push(owner + ": main landmark with id=main is missing");
  }
  if (!/<a\b[^>]*class\s*=\s*["'][^"']*\bskip-link\b[^"']*["'][^>]*href\s*=\s*["']#main["']/i.test(html)
      && !/<a\b[^>]*href\s*=\s*["']#main["'][^>]*class\s*=\s*["'][^"']*\bskip-link\b/i.test(html)) {
    errors.push(owner + ": skip link to main content is missing");
  }
  if (/<meta\b[^>]*http-equiv\s*=\s*["']refresh["']/i.test(html)) {
    errors.push(owner + ": meta refresh redirect is prohibited");
  }
  if (/redirecting to website|click here if not redirected/i.test(html)) {
    errors.push(owner + ": legacy redirect interstitial text is prohibited");
  }
  if (/<video\b[^>]*\bautoplay\b/i.test(html)) {
    errors.push(owner + ": autoplay video is prohibited");
  }

  const ids = [...html.matchAll(/\bid\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]);
  const seen = new Set();
  for (const id of ids) {
    if (seen.has(id)) errors.push(owner + ': duplicate id "' + id + '"');
    seen.add(id);
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (!/\balt\s*=\s*["'][^"']*["']/i.test(match[1])) {
      errors.push(owner + ": image is missing an alt attribute");
    }
  }
  for (const match of html.matchAll(/<svg\b([^>]*)>/gi)) {
    const attrs = match[1];
    if (/\brole\s*=\s*["']img["']/i.test(attrs)
        && !/\baria-label(?:ledby)?\s*=/i.test(attrs)) {
      errors.push(owner + ": meaningful SVG image is missing an accessible name");
    }
  }
  for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
    const attrs = match[1];
    const content = match[2].replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").trim();
    if (!content && !/\baria-label(?:ledby)?\s*=/i.test(attrs)) {
      errors.push(owner + ": button is missing an accessible name");
    }
  }
  const labels = new Set([...html.matchAll(/<label\b[^>]*\bfor\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]));
  for (const match of html.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)) {
    const attrs = match[2];
    if (match[1].toLowerCase() === "input" && /\btype\s*=\s*["']hidden["']/i.test(attrs)) continue;
    const id = attrs.match(/\bid\s*=\s*["']([^"']+)["']/i)?.[1];
    if (!/\baria-label(?:ledby)?\s*=/.test(attrs) && !(id && labels.has(id))) {
      errors.push(owner + ": " + match[1].toLowerCase() + " control is missing a programmatic label");
    }
  }
}

async function main() {
  const allFiles = await walk(outputRoot);
  const htmlFiles = allFiles.filter((file) => file.endsWith(".html"));
  const cssFiles = allFiles.filter((file) => file.endsWith(".css"));

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    const relative = path.relative(outputRoot, file);
    validateHtmlBasics(html, relative);
    const base = publicUrlForFile(file);
    const attrs = /\b(href|src|poster|srcset)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi;
    for (const match of html.matchAll(attrs)) {
      const rawValue = match[2] ?? match[3] ?? "";
      if (match[1].toLowerCase() === "srcset") {
        for (const candidate of parseSrcset(rawValue)) {
          await resolveLocalReference(candidate, base, relative, "srcset");
        }
      } else {
        await resolveLocalReference(rawValue, base, relative, match[1].toLowerCase());
      }
    }
  }

  const routes = htmlFiles
    .map((file) => publicUrlForFile(file).pathname)
    .sort((a, b) => a.localeCompare(b));
  const manifestDirectory = path.resolve(process.cwd(), ".iwag-build");
  await mkdir(manifestDirectory, { recursive: true });
  await writeFile(
    path.join(manifestDirectory, "route-manifest.json"),
    JSON.stringify({ generatedAt: new Date().toISOString(), routeCount: routes.length, routes }, null, 2) + "\n",
    "utf8"
  );
  await writeFile(path.join(manifestDirectory, "route-count.txt"), String(routes.length), "utf8");

  for (const file of cssFiles) {
    const css = await readFile(file, "utf8");
    const base = publicUrlForFile(file);
    const relative = path.relative(outputRoot, file);
    const urls = /url\(\s*(?:"([^"]*)"|'([^']*)'|([^)]*))\s*\)/gi;
    for (const match of css.matchAll(urls)) {
      await resolveLocalReference(match[1] ?? match[2] ?? match[3] ?? "", base, relative, "css-url");
    }
  }

  console.log("[iwagc:routes] scanned " + htmlFiles.length + " HTML and " + cssFiles.length + " CSS files; checked " + checked + " local references and basic accessibility invariants; route manifest: .iwag-build/route-manifest.json (" + routes.length + " routes)");
  if (errors.length) {
    for (const error of errors.slice(0, 60)) console.error("[iwagc:routes] " + error);
    if (errors.length > 60) console.error("[iwagc:routes] " + (errors.length - 60) + " additional issues omitted");
    console.error("[iwagc:routes] failed with " + errors.length + " output validation issues");
    process.exitCode = 1;
  } else {
    console.log("[iwagc:routes] no broken local references found");
  }
}

main().catch((error) => {
  console.error("[iwagc:routes] validator failed:", error);
  process.exitCode = 1;
});
