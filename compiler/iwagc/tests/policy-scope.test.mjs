import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const root = new URL("../../../", import.meta.url);
const read = (relative) => readFile(new URL(relative, root), "utf8");

test("public legal routes render website policy data, never event policy data", async () => {
  const [page, legacy, website, index] = await Promise.all([
    read("src/pages/[lang]/[page].astro"),
    read("src/data/legal.ts"),
    read("src/data/website-legal.ts"),
    read("src/data/legal-navigation.ts")
  ]);

  assert.match(page, /from "\.\.\/\.\.\/data\/website-legal"/);
  assert.match(page, /from "\.\.\/\.\.\/data\/legal-navigation"/);
  assert.doesNotMatch(page, /import\s+\{[^}]*legalPolicies[^}]*\}\s+from\s+"\.\.\/\.\.\/data\/legal"/);
  assert.match(page, /websitePolicy\.sections\.map/);
  assert.doesNotMatch(page, /policy\.sections\.map/);

  assert.match(legacy, /^\/\/ EVENT-LEVEL DRAFT TEMPLATE DATA ONLY/m);
  assert.match(legacy, /attendees, guests, staff, volunteers/);
  assert.match(website, /This Code of Conduct describes expected behaviour when using the V2 website/);
  assert.match(website, /This draft applies only to access to and use of this independent informational website/);
  assert.match(index, /legalPolicySlugs/);
});

test("public policy index is explicitly website-only", async () => {
  const page = await read("src/pages/[lang]/[page].astro");
  assert.match(page, /V2 website policies/);
  assert.match(page, /Kebijakan situs V2/);
  assert.match(page, /They do not regulate IWAG event attendance, tickets, badges, venues, hotels, dealers, staff, or volunteers/);
  assert.doesNotMatch(page, /Reconstructed event rules/);
  assert.doesNotMatch(page, /Rekonstruksi aturan acara/);
});
