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
  assert.match(website, /Draft standards for respectful use of this independent information website/);
  assert.match(page, /This Code of Conduct describes expected behaviour when using the V2 website/);
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


test("Vercel security headers preserve deployment opt-out", async () => {
  const config = JSON.parse(await read("vercel.json"));
  assert.equal(config.git.deploymentEnabled, false);
  const headers = config.headers.flatMap((entry) => entry.headers);
  const values = new Map(headers.map(({ key, value }) => [key, value]));
  for (const key of ["Content-Security-Policy-Report-Only", "X-Content-Type-Options", "Referrer-Policy", "X-Frame-Options", "Permissions-Policy", "Strict-Transport-Security"]) {
    assert.ok(values.has(key), `Missing security header: ${key}`);
  }
  assert.match(values.get("Content-Security-Policy-Report-Only"), /frame-ancestors 'none'/);
  assert.doesNotMatch(values.get("Content-Security-Policy-Report-Only"), /report-uri|report-to/);
});


test("event content records preserve explicit source provenance", async () => {
  const [schema, english, indonesian] = await Promise.all([
    read("src/content.config.ts"),
    read("src/content/events/en/iwag-2027.md"),
    read("src/content/events/id/iwag-2027.md")
  ]);
  assert.match(schema, /sourceUrl: z\.string\(\)\.url\(\)\.optional\(\)/);
  assert.match(schema, /sourceReviewedAt: z\.coerce\.date\(\)\.optional\(\)/);
  for (const content of [english, indonesian]) {
    assert.match(content, /sourceUrl: "https:\/\/iwag\.furries\.id\/en\/updates\/2026-11-15-venue-reveal\//);
    assert.match(content, /sourceReviewedAt: 2026-11-25/);
  }
});
