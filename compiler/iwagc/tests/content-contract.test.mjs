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
  assert.match(legal, /HANYA DRAFTING — BUKAN RESMI — BELUM DIVERIFIKASI — BELUM DISETUJUI — BELUM BERLAKU/);
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
