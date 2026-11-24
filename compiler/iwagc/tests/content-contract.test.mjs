import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const read = (relative) => readFileSync(fileURLToPath(new URL(relative, import.meta.url)), "utf8");

test("populated information pages have explicit non-placeholder summaries", () => {
  const page = read("../../../src/pages/[lang]/[page].astro");
  for (const route of ["updates", "participate", "location", "links", "policy", "join-iwag-team"]) {
    assert.ok(page.includes(route + ":") || page.includes('"'+route+'":'), "missing page summary: " + route);
  }
  assert.match(page, /pageSummaries\[englishFallback \? "en" : lang\]/);
});

test("policy drafts preserve explicit non-operative status", () => {
  const legal = read("../../../src/data/legal.ts");
  assert.match(legal, /DRAFTING ONLY — NOT OFFICIAL — NOT VERIFIED — NOT APPROVED — NOT IN FORCE/);
  assert.match(legal, /HANYA DRAFTING — BUKAN RESMI — BELUM DIVERIFIKASI — BELUM DISETUJUI — BELUM BERLAKU/);\n  assert.match(legal, /PP 17 of 2025/);\n  assert.match(legal, /Permenkomdigi No. 9 of 2026/);\n  assert.match(legal, /Child Safety & Protection/);
});

test("policy drafts include both English and Indonesian operational safeguards", () => {
  const legal = read("../../../src/data/legal.ts");
  for (const phrase of [
    "Consent, boundaries and media",
    "Children and safeguarding",
    "Infrastructure verification and data minimisation",
    "Persetujuan, batas pribadi dan media",
    "Anak dan perlindungan",
    "Verifikasi infrastruktur dan minimisasi data"
  ]) assert.ok(legal.includes(phrase), "missing policy section: " + phrase);
});

test("Rust build report identifies the actual AOT controller/backend boundary", () => {
  const rust = read("../src/main.rs");
  assert.match(rust, /ahead-of-time static production compilation/);
  assert.match(rust, /ahead-of-time-static/);
  assert.match(rust, /active-build-controller-and-validator/);
  assert.match(rust, /specialist_backend/);
});

test("CSS keeps visited action links legible and supports narrow reflow", () => {
  const css = read("../../../src/styles/reconstruction.css");
  assert.match(css, /a\.action-link:visited/);
  assert.match(css, /@media \(max-width: 30rem\)/);
  assert.match(css, /@media \(forced-colors: active\)/);
});

test("shared layout emits canonical and social metadata", () => {
  const layout = read("../../../src/layouts/BaseLayout.astro");
  assert.match(layout, /<link rel="canonical"/);
  assert.match(layout, /property="og:title"/);
  assert.match(layout, /property="og:url"/);
  assert.match(layout, /canonicalPath = currentPath === "\/coc"/);
});

test("Vercel baseline response headers are configured", () => {
  const config = read("../../../vercel.json");
  for (const header of ["X-Content-Type-Options", "Referrer-Policy", "X-Frame-Options", "Permissions-Policy", "Strict-Transport-Security"]) {
    assert.ok(config.includes(header), "missing response header: " + header);
  }
});


test("Active Compiler enforces the supported Node LTS range and locked Cargo resolution", () => {
  const rust = read("../src/main.rs");
  const manifest = read("../../../iwag.compiler.toml");
  const pkg = JSON.parse(read("../../../package.json"));
  assert.match(manifest, /node_minimum = "22\.23\.4"/);
  assert.match(manifest, /node_maximum_exclusive = "23\.0\.0"/);
  assert.match(rust, /node_maximum_exclusive/);
  assert.match(rust, /version_below/);
  for (const [name, command] of Object.entries(pkg.scripts)) {
    if (command.startsWith("cargo run ")) assert.match(command, /^cargo run --locked /, "Cargo lock enforcement missing from " + name);
  }
});

test("Child Safety & Protection draft is routed and remains non-operative", () => {
  const legal = read("../../../src/data/legal.ts");
  const page = read("../../../src/pages/[lang]/[page].astro");
  const rust = read("../src/main.rs");
  assert.match(legal, /child-safety/);
  assert.match(legal, /DRAFTING ONLY — NOT OFFICIAL — NOT VERIFIED — NOT APPROVED — NOT IN FORCE/);
  assert.match(page, /"child-safety"/);
  assert.match(rust, /child-safety\/index\.html/);
});
