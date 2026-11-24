import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const root = new URL("../../../../", import.meta.url);
const read = (relative) => readFile(new URL(relative, root), "utf8");

test("expected route baseline is unique and has 30 entries", async () => {
  const manifest = JSON.parse(await read("compiler/iwagc/config/expected-routes.json"));
  assert.equal(manifest.version, 1);
  assert.equal(manifest.routes.length, 30);
  assert.equal(new Set(manifest.routes).size, manifest.routes.length);
  assert.ok(manifest.routes.includes("/"));
  assert.ok(manifest.routes.includes("/404.html"));
});

test("expected route baseline matches Rust required-route validation", async () => {
  const manifest = JSON.parse(await read("compiler/iwagc/config/expected-routes.json"));
  const rust = await read("compiler/iwagc/src/main.rs");
  const rootBlock = rust.match(/let mut required = vec!\[([\s\S]*?)\];/);
  const localeBlock = rust.match(/for locale in \[([\s\S]*?)\] \{\s*for route in \[([\s\S]*?)\]/);
  assert.ok(rootBlock, "Rust root route list must exist");
  assert.ok(localeBlock, "Rust locale and route lists must exist");
  const quoted = (value) => [...value.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
  const expected = quoted(rootBlock[1]).map((route) => "/" + route);
  for (const locale of quoted(localeBlock[1])) {
    for (const route of quoted(localeBlock[2])) expected.push("/" + locale + "/" + route);
  }
  assert.deepEqual([...manifest.routes].sort(), expected.sort());
});

test("accessibility report exposes expected-route coverage separately", async () => {
  const scanner = await read("compiler/iwagc/scripts/accessibility-report.mjs");
  assert.match(scanner, /missingExpectedRoutes/);
  assert.match(scanner, /unexpectedRoutes/);
  assert.match(scanner, /expectedRouteCoverage: routeCoverage/);
  assert.match(scanner, /conformanceClaim: false/);
});
