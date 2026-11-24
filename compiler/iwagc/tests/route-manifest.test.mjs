import { parse } from "parse5";
import { readFile } from "node:fs/promises";
import test from "node:test";
import assert from "node:assert/strict";

const root = new URL("../../../", import.meta.url);
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
  const expected = quoted(rootBlock[1]).map((route) => route === "index.html" ? "/" : "/" + route);
  for (const locale of quoted(localeBlock[1])) {
    for (const route of quoted(localeBlock[2])) expected.push(route === "index.html" ? "/" + locale + "/" : "/" + locale + "/" + route);
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

test("parse5 corrects malformed HTML and preserves source locations", () => {
  const parseErrors = [];
  const document = parse("<!doctype html><p id=first>Alpha<p id=second>Beta</div>", {
    sourceCodeLocationInfo: true,
    onParseError(error) { parseErrors.push(error); }
  });
  const pending = [...document.childNodes];
  const paragraphs = [];
  while (pending.length) {
    const node = pending.pop();
    if (node.tagName === "p") paragraphs.push(node);
    pending.push(...(node.childNodes ?? []));
  }
  assert.equal(paragraphs.length, 2);
  assert.ok(paragraphs.every((node) => Number.isInteger(node.sourceCodeLocation?.startLine)));
  assert.ok(parseErrors.length > 0);
});

test("parse5 lockfile isolates entities major versions without breaking existing consumers", async () => {
  const lock = JSON.parse(await read("package-lock.json"));
  assert.equal(lock.packages[""].dependencies.parse5, "8.1.1");
  assert.equal(lock.packages["node_modules/parse5"].version, "8.1.1");
  assert.equal(lock.packages["node_modules/parse5/node_modules/entities"].version, "9.0.0");
  assert.equal(lock.packages["node_modules/entities"].version, "7.0.1");
  assert.equal(lock.packages["node_modules/dom-serializer/node_modules/entities"].version, "4.5.0");
});
