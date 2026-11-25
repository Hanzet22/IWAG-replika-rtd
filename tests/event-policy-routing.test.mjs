import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const route = await readFile(new URL("../src/pages/[lang]/[page].astro", import.meta.url), "utf8");
const eventData = await readFile(new URL("../src/data/legal.ts", import.meta.url), "utf8");
const websiteData = await readFile(new URL("../src/data/website-legal.ts", import.meta.url), "utf8");
const navigation = await readFile(new URL("../src/data/legal-navigation.ts", import.meta.url), "utf8");

test("all four V1 event rewrites have substantive English and Indonesian content", () => {
  const expected = [["coc", "Code of Conduct", "Kode Etik"], ["terms", "Terms and Conditions", "Syarat dan Ketentuan"], ["privacy", "Privacy Policy", "Kebijakan Privasi"], ["policy", "Other Policies", "Kebijakan Lainnya"]];
  for (const [key, enTitle, idTitle] of expected) {
    const start = eventData.indexOf("\"" + key + "\": {");
    assert.notEqual(start, -1, "missing event rewrite: " + key);
    const next = eventData.indexOf("\n  },", start);
    const record = eventData.slice(start, next === -1 ? eventData.length : next);
    assert.ok(record.includes("\"title\": \"" + enTitle + "\""), "missing English " + key + " title");
    assert.ok(record.includes("\"title\": \"" + idTitle + "\""), "missing Indonesian " + key + " title");
    assert.ok((record.match(/"heading":/g) ?? []).length >= 6, key + " should contain substantive section headings in both languages");
    assert.ok((record.match(/"body": \[/g) ?? []).length >= 6, key + " should contain substantive body sections in both languages");
  }
  assert.match(eventData, /V1-DERIVED EVENT-POLICY RECONSTRUCTIONS/);
  assert.doesNotMatch(eventData, /Do not import this module into public website routes/);
});

test("dedicated event routes render event data from the event rewrite source", () => {
  for (const [slug, key] of [["event-coc", "coc"], ["event-terms", "terms"], ["event-privacy", "privacy"], ["event-other-policies", "policy"]]) assert.match(route, new RegExp("\"" + slug + "\":\\s*\"" + key + "\""));
  assert.match(route, /import \{ legalPolicies \} from "\.\.\/\.\.\/data\/legal"/);
  assert.match(route, /eventPolicy\.sections\.map/);
  assert.match(route, /eventPolicyLinks\.filter/);
});

test("website policies remain a separate V2 document family", () => {
  assert.match(route, /websiteLegalPolicies\[policySlug\]/);
  assert.match(route, /websitePolicy\.sections\.map/);
  assert.match(websiteData, /export const websiteLegalPolicies/);
  assert.match(navigation, /Website Ruleset/);
  assert.match(navigation, /eventPolicyLinks/);
});
