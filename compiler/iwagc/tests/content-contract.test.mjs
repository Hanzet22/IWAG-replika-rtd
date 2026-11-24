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
  assert.ok(page.includes('pageSummaries[englishFallback ? "en" : lang]'));
});

test("policy drafts preserve explicit non-operative status", () => {
  const legal = read("../../../src/data/legal.ts");
  assert.ok(legal.includes("DRAFTING ONLY — NOT OFFICIAL — NOT VERIFIED — NOT APPROVED — NOT IN FORCE"));
  assert.ok(legal.includes("HANYA DRAFTING — BUKAN RESMI — BELUM DIVERIFIKASI — BELUM DISETUJUI — BELUM BERLAKU"));
  assert.ok(legal.includes("PP 17 of 2025"));
  assert.ok(legal.includes("Permenkomdigi No. 9 of 2026"));
  assert.ok(legal.includes("Child Safety & Protection"));
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
  assert.ok(rust.includes("ahead-of-time static production compilation"));
  assert.ok(rust.includes("ahead-of-time-static"));
  assert.ok(rust.includes("active-build-controller-and-validator"));
  assert.ok(rust.includes("specialist_backend"));
});

test("CSS keeps visited action links legible and supports narrow reflow", () => {
  const css = read("../../../src/styles/reconstruction.css");
  assert.ok(css.includes("a.action-link:visited"));
  assert.ok(css.includes("@media (max-width: 30rem)"));
  assert.ok(css.includes("@media (forced-colors: active)"));
});

test("shared layout emits canonical and social metadata", () => {
  const layout = read("../../../src/layouts/BaseLayout.astro");
  assert.ok(layout.includes('<link rel="canonical"'));
  assert.ok(layout.includes('property="og:title"'));
  assert.ok(layout.includes('property="og:url"'));
  assert.ok(layout.includes('canonicalPath = currentPath === "/coc"'));
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
  assert.ok(manifest.includes('node_minimum = "22.23.4"'));
  assert.ok(manifest.includes('node_maximum_exclusive = "23.0.0"'));
  assert.ok(rust.includes("node_maximum_exclusive"));
  assert.ok(rust.includes("version_below"));
  for (const [name, command] of Object.entries(pkg.scripts)) {
    if (command.startsWith("cargo run ")) assert.ok(command.startsWith("cargo run --locked "), "Cargo lock enforcement missing from " + name);
  }
});

test("Child Safety & Protection draft is routed and remains non-operative", () => {
  const legal = read("../../../src/data/legal.ts");
  const page = read("../../../src/pages/[lang]/[page].astro");
  const rust = read("../src/main.rs");
  assert.ok(legal.includes("child-safety"));
  assert.ok(legal.includes("DRAFTING ONLY — NOT OFFICIAL — NOT VERIFIED — NOT APPROVED — NOT IN FORCE"));
  assert.ok(page.includes('"child-safety"'));
  assert.ok(rust.includes('child-safety/index.html'));
});

test("Child Safety & Protection has a Malay translation", () => {
  const legal = read("../../../src/data/legal.ts");
  assert.ok(legal.includes("Perlindungan Kanak-kanak"));
  assert.ok(legal.includes("saluran laporan keselamatan kanak-kanak"));
  const page = read("../../../src/pages/[lang]/[page].astro");
  assert.ok(page.includes('lang === "ms-my" && page !== "child-safety"'));
});
