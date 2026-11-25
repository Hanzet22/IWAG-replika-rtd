import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const root = new URL("../../../", import.meta.url);
const read = (relative) => readFile(new URL(relative, root), "utf8");

function quotedValues(source) {
  return [...source.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
}

test("every legal policy slug has a generated page route", async () => {
  const [legal, page] = await Promise.all([
    read("src/data/legal.ts"),
    read("src/pages/[lang]/[page].astro")
  ]);

  const slugBlock = legal.match(/export const legalPolicySlugs = \[([^\]]+)\] as const;/);
  const pageKeysBlock = page.match(/const pageKeys = \[([\s\S]*?)\] as const;/);

  assert.ok(slugBlock, "legalPolicySlugs must remain an explicit source of truth");
  assert.ok(pageKeysBlock, "the localized page route list must remain explicit");

  const policySlugs = quotedValues(slugBlock[1]);
  const pageKeys = new Set(quotedValues(pageKeysBlock[1]));

  assert.ok(policySlugs.length > 0, "at least one legal policy route must exist");
  for (const slug of policySlugs) {
    assert.ok(pageKeys.has(slug), `Missing localized static route for legal policy: ${slug}`);
    assert.ok(legal.includes(`"${slug}": {`), `Missing policy content record: ${slug}`);
  }
});

test("legal document renderer retains the independent-draft status banner", async () => {
  const page = await read("src/pages/[lang]/[page].astro");

  const legalPagesBlock = page.match(/const legalPages = \[([\s\S]*?)\];/);
  assert.ok(legalPagesBlock, "legal page classification must remain explicit");
  assert.match(legalPagesBlock[1], /"policy"/, "the policy index must be classified as legal");
  assert.match(legalPagesBlock[1], /\.\.\.legalPolicySlugs/, "all legal policy slugs must inherit legal status");

  assert.match(page, /const isLegal = legalPages\.includes\(page\);/);
  assert.match(page, /\{isLegal && <aside class="notice legal-draft-banner"/);
  assert.match(page, /INDEPENDENT DRAFT — NOT AN OFFICIAL IWAG POLICY — NOT APPROVED BY THE ORGANISER — NOT IN FORCE\./);
  assert.match(page, /DRAF INDEPENDEN — BUKAN KEBIJAKAN RESMI IWAG — BELUM DISETUJUI PENYELENGGARA — BELUM BERLAKU\./);
  assert.match(page, /has not been verified, adopted, or approved by the IWAG organiser/);
  assert.match(page, /belum diverifikasi, diadopsi, atau disahkan oleh badan penyelenggara IWAG/);
});
