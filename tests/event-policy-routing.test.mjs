import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const route = await readFile(new URL("../src/pages/[lang]/[page].astro", import.meta.url), "utf8");
const eventData = await readFile(new URL("../src/data/legal.ts", import.meta.url), "utf8");
const websiteData = await readFile(new URL("../src/data/website-legal.ts", import.meta.url), "utf8");
const navigation = await readFile(new URL("../src/data/legal-navigation.ts", import.meta.url), "utf8");

test("event policy routes are explicitly mapped to V1 reconstructed source data", () => {
  for (const [slug, key] of [["event-coc", "coc"], ["event-terms", "terms"], ["event-privacy", "privacy"], ["event-other-policies", "policy"]]) {
    assert.match(route, new RegExp('"' + slug + '":\\s*"' + key + '"'));
  }
  assert.match(route, /import \{ legalPolicies \} from "\.\.\/\.\.\/data\/legal"/);
  assert.match(route, /eventPolicy\.sections\.map/);
  assert.match(eventData, /EVENT-LEVEL DRAFT TEMPLATE DATA ONLY/);
});

test("website policy routes remain backed by website-only policy data", () => {
  assert.match(route, /websiteLegalPolicies\[policySlug\]/);
  assert.match(route, /websitePolicy\.sections\.map/);
  assert.match(websiteData, /export const websiteLegalPolicies/);
  assert.match(navigation, /Website Ruleset/);
  assert.match(navigation, /eventPolicyLinks/);
});
