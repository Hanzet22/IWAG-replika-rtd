import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { parse } from "parse5";

const outputRoot = path.resolve(process.cwd(), process.argv[2] ?? "dist");
const reportRoot = path.resolve(process.cwd(), ".iwag-build");
const expectedManifestPath = path.resolve(process.cwd(), "compiler/iwagc/config/expected-routes.json");
const localeLanguages = new Map([["en", "en"], ["id", "id"], ["en-sg", "en-SG"], ["ms-my", "ms-MY"]]);
const rules = [
  ["IWAG-A11Y-HTML-LANG", "3.1.1", "A", "Root document language is missing", "Set a valid lang attribute on the html element."],
  ["IWAG-A11Y-PAGE-TITLE", "2.4.2", "A", "Document title is missing or empty", "Provide a descriptive, non-empty document title."],
  ["IWAG-A11Y-IMAGE-ALT", "1.1.1", "A", "Image alternative text attribute is missing", "Provide an alt attribute; use an empty value only when the image is intentionally decorative."],
  ["IWAG-A11Y-LINK-NAME-REVIEW", "2.4.4", "A", "Link may not expose a discernible purpose", "Review the computed accessible name and link purpose in context."],
  ["IWAG-A11Y-BUTTON-NAME-REVIEW", "4.1.2", "A", "Button may not expose an accessible name", "Review the computed accessible name, role, and state."],
  ["IWAG-A11Y-FORM-NAME-REVIEW", "4.1.2", "A", "Form control may not expose an accessible name", "Review associated labels and the computed accessible name."],
  ["IWAG-A11Y-ARIA-REFERENCE", "4.1.2", "A", "ARIA ID reference points to a missing element", "Ensure every referenced ID exists in the same document."],
  ["IWAG-HTML-PARSE-ERROR", null, null, "HTML parser reported a parse error", "Review malformed or non-conforming HTML around the reported source location."],
  ["IWAG-HTML-DUPLICATE-ID", null, null, "Duplicate HTML id attribute", "Give each id a unique value within the document."]
];
const ruleMap = new Map(rules.map(([id, wcag, level, title, help]) => [id, { id, wcag, level, title, help }]));
const findings = [];
const pages = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) continue;
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (entry.isFile() && entry.name.toLowerCase().endsWith(".html")) files.push(full);
  }
  return files;
}

function attributesOf(node) {
  return new Map((node.attrs ?? []).map(({ name, value }) => [name.toLowerCase(), value]));
}

function attr(node, name) {
  return attributesOf(node).get(name.toLowerCase()) ?? null;
}

function childrenOf(node) {
  if (node.tagName === "template" && node.content) return node.content.childNodes ?? [];
  return node.childNodes ?? [];
}

function isElement(node) {
  return Boolean(node && typeof node.tagName === "string");
}

function isHidden(node) {
  return isElement(node) && (node.attrs?.some(({ name, value }) =>
    name === "hidden" || (name === "aria-hidden" && value.toLowerCase() === "true")
  ) ?? false);
}

function textContent(node, includeHidden = false) {
  if (!node || (!includeHidden && isHidden(node))) return "";
  if (node.nodeName === "#text") return node.value ?? "";
  if (isElement(node) && ["script", "style", "template", "noscript"].includes(node.tagName)) return "";
  return childrenOf(node).map((child) => textContent(child, includeHidden)).join(" ").replace(/\s+/g, " ").trim();
}

function walkNodes(root) {
  const nodes = [];
  const pending = [...(root.childNodes ?? [])].reverse();
  while (pending.length) {
    const node = pending.pop();
    nodes.push(node);
    const children = childrenOf(node);
    for (let index = children.length - 1; index >= 0; index -= 1) pending.push(children[index]);
  }
  return nodes;
}

function locationOf(node) {
  const location = node?.sourceCodeLocation;
  return {
    startLine: location?.startLine ?? 1,
    startColumn: location?.startCol ?? 1,
    startOffset: location?.startOffset ?? 0
  };
}

function addFinding({ ruleId, route, locale, node, confidence = "confirmed", note, parserLocation }) {
  const rule = ruleMap.get(ruleId);
  const location = parserLocation
    ? { startLine: parserLocation.startLine ?? 1, startColumn: parserLocation.startCol ?? 1, startOffset: parserLocation.startOffset ?? 0 }
    : locationOf(node);
  const element = isElement(node)
    ? node.tagName + (attr(node, "id") ? "#" + attr(node, "id") : "")
    : null;
  const fingerprint = createHash("sha256").update([ruleId, route, element ?? "", location.startLine, location.startColumn].join("|")).digest("hex");
  findings.push({
    ruleId, route, locale, wcag: rule.wcag, wcagLevel: rule.level,
    severity: confidence === "confirmed" && rule.level === "A" ? "error" : "warning",
    confidence, evaluationSource: "parse5-generated-html",
    message: rule.title, help: rule.help, note: note ?? null, element,
    location: { startLine: location.startLine, startColumn: location.startColumn },
    fingerprint
  });
}

function accessibleName(node, idMap) {
  const ariaLabel = attr(node, "aria-label");
  if (ariaLabel?.trim()) return ariaLabel.trim();

  const labelledBy = attr(node, "aria-labelledby");
  if (labelledBy?.trim()) {
    const value = labelledBy.split(/\s+/).map((id) => textContent(idMap.get(id))).filter(Boolean).join(" ").trim();
    if (value) return value;
  }

  const title = attr(node, "title");
  if (title?.trim()) return title.trim();

  if (node.tagName === "img") return attr(node, "alt") ?? "";
  if (node.tagName === "input") {
    const type = (attr(node, "type") ?? "text").toLowerCase();
    if (["button", "submit", "reset"].includes(type)) return attr(node, "value") ?? "";
    if (type === "image") return attr(node, "alt") ?? "";
  }
  return textContent(node);
}

function inspectPage(file, html) {
  const relative = path.relative(outputRoot, file).split(path.sep).join("/");
  const route = relative === "index.html"
    ? "/"
    : relative.endsWith("/index.html")
      ? "/" + relative.slice(0, -"/index.html".length) + "/"
      : "/" + relative;
  const firstSegment = relative.split("/")[0];
  const locale = localeLanguages.has(firstSegment) ? firstSegment : "root";
  pages.push({ route, locale, file: relative });

  const parseErrors = [];
  const document = parse(html, {
    sourceCodeLocationInfo: true,
    onParseError(error) { parseErrors.push(error); }
  });
  const nodes = walkNodes(document).filter(isElement);
  const htmlElement = nodes.find((node) => node.tagName === "html");
  const head = nodes.find((node) => node.tagName === "head");
  const title = head ? walkNodes(head).find((node) => isElement(node) && node.tagName === "title") : null;

  const lang = htmlElement ? attr(htmlElement, "lang") : null;
  if (!lang?.trim()) {
    addFinding({ ruleId: "IWAG-A11Y-HTML-LANG", route, locale, node: htmlElement });
  } else if (lang.trim().toLowerCase() === "und") {
    addFinding({ ruleId: "IWAG-A11Y-HTML-LANG", route, locale, node: htmlElement, confidence: "review-required", note: "The language is marked undetermined; verify the predominant human language." });
  } else if (localeLanguages.has(locale) && lang.toLowerCase() !== localeLanguages.get(locale).toLowerCase()) {
    addFinding({ ruleId: "IWAG-A11Y-HTML-LANG", route, locale, node: htmlElement, confidence: "review-required", note: "The lang value differs from the locale route prefix; verify the page's predominant human language." });
  }

  if (!title || !textContent(title)) {
    addFinding({ ruleId: "IWAG-A11Y-PAGE-TITLE", route, locale, node: title ?? head ?? htmlElement });
  }

  const idMap = new Map();
  const duplicateIds = new Set();
  for (const node of nodes) {
    const id = attr(node, "id");
    if (!id) continue;
    if (idMap.has(id)) {
      if (!duplicateIds.has(id)) {
        addFinding({ ruleId: "IWAG-HTML-DUPLICATE-ID", route, locale, node, confidence: "review-required", note: "Duplicate id value: " + id });
        duplicateIds.add(id);
      }
    } else {
      idMap.set(id, node);
    }
  }

  for (const node of nodes) {
    if (node.tagName === "img" && attr(node, "alt") === null) {
      addFinding({ ruleId: "IWAG-A11Y-IMAGE-ALT", route, locale, node });
    }

    const role = (attr(node, "role") ?? "").toLowerCase().split(/\s+/)[0];
    const isLink = (node.tagName === "a" && attr(node, "href") !== null)
      || (node.tagName === "area" && attr(node, "href") !== null)
      || role === "link";
    const isButton = node.tagName === "button" || role === "button";
    if (isLink && !accessibleName(node, idMap)) {
      addFinding({ ruleId: "IWAG-A11Y-LINK-NAME-REVIEW", route, locale, node, confidence: "review-required" });
    }
    if (isButton && !accessibleName(node, idMap)) {
      addFinding({ ruleId: "IWAG-A11Y-BUTTON-NAME-REVIEW", route, locale, node, confidence: "review-required" });
    }

    const controlRoles = new Set(["checkbox", "radio", "switch", "slider", "spinbutton", "combobox", "listbox", "textbox", "searchbox"]);
    const isNativeControl = ["input", "select", "textarea"].includes(node.tagName);
    const inputType = node.tagName === "input" ? (attr(node, "type") ?? "text").toLowerCase() : "";
    if (node.tagName === "input" && inputType === "hidden") continue;
    if (isNativeControl || controlRoles.has(role)) {
      const id = attr(node, "id");
      const explicitLabel = nodes.some((candidate) =>
        candidate.tagName === "label" && attr(candidate, "for") === id && Boolean(textContent(candidate))
      );
      const wrappingLabel = (() => {
        let parent = node.parentNode;
        while (parent) {
          if (isElement(parent) && parent.tagName === "label") return Boolean(textContent(parent));
          parent = parent.parentNode;
        }
        return false;
      })();
      const name = accessibleName(node, idMap);
      if (!name && !explicitLabel && !wrappingLabel) {
        addFinding({ ruleId: "IWAG-A11Y-FORM-NAME-REVIEW", route, locale, node, confidence: "review-required" });
      }
    }

    for (const attribute of node.attrs ?? []) {
      if (!["aria-labelledby", "aria-describedby", "aria-controls", "aria-owns", "aria-details", "aria-errormessage", "aria-activedescendant", "aria-flowto"].includes(attribute.name)) continue;
      for (const id of attribute.value.split(/\s+/).filter(Boolean)) {
        if (!idMap.has(id)) {
          addFinding({ ruleId: "IWAG-A11Y-ARIA-REFERENCE", route, locale, node, note: attribute.name + " references missing id " + id });
        }
      }
    }
  }

  for (const error of parseErrors) {
    addFinding({
      ruleId: "IWAG-HTML-PARSE-ERROR", route, locale, node: null, confidence: "review-required",
      note: "HTML parse error code: " + error.code,
      parserLocation: { startLine: error.startLine, startCol: error.startCol, startOffset: error.startOffset }
    });
  }
}

export async function runAccessibilityReport() {
  const htmlFiles = (await walk(outputRoot)).sort();
  for (const file of htmlFiles) inspectPage(file, await readFile(file, "utf8"));

  const localeCoverage = Object.fromEntries([...localeLanguages.keys()].map((locale) => [
    locale, pages.filter((page) => page.locale === locale).length
  ]));
  let expectedManifest = null;
  try {
    expectedManifest = JSON.parse(await readFile(expectedManifestPath, "utf8"));
  } catch (error) {
    if (error?.code !== "ENOENT") throw error;
  }
  if (expectedManifest && (!Array.isArray(expectedManifest.routes) || new Set(expectedManifest.routes).size !== expectedManifest.routes.length)) {
    throw new Error("Expected-route manifest must contain a unique routes array.");
  }
  const actualRoutes = new Set(pages.map((page) => page.route));
  const expectedRoutes = new Set(expectedManifest?.routes ?? []);
  const missingExpectedRoutes = [...expectedRoutes].filter((route) => !actualRoutes.has(route)).sort();
  const unexpectedRoutes = [...actualRoutes].filter((route) => expectedManifest && !expectedRoutes.has(route)).sort();
  const routeCoverage = {
    manifest: expectedManifest ? path.relative(process.cwd(), expectedManifestPath).split(path.sep).join("/") : null,
    expectedCount: expectedManifest?.routes?.length ?? null,
    actualCount: pages.length,
    missingExpectedRoutes,
    unexpectedRoutes,
    complete: expectedManifest ? missingExpectedRoutes.length === 0 : null
  };

  const summary = {
    compiler: "iwagc", reportVersion: 2, generatedAt: new Date().toISOString(),
    outputRoot: path.relative(process.cwd(), outputRoot),
    parser: { name: "parse5", standard: "WHATWG HTML Living Standard", sourceCodeLocationInfo: true },
    formalTarget: "WCAG 2.2 Level A", levelAA: "optional-enhancement-only", conformanceClaim: false,
    coverage: { htmlPagesScanned: pages.length, routes: pages.map(({ route, locale }) => ({ route, locale })), localePageCounts: localeCoverage, expectedRouteCoverage: routeCoverage },
    findings: {
      total: findings.length,
      confirmed: findings.filter((item) => item.confidence === "confirmed").length,
      reviewRequired: findings.filter((item) => item.confidence !== "confirmed").length,
      byRule: Object.fromEntries(rules.map(([id]) => [id, findings.filter((item) => item.ruleId === id).length]))
    },
    limitations: [
      "The parser builds an HTML5 DOM and source locations; this scanner does not compute the browser accessibility tree or the full Accessible Name and Description Computation algorithm.",
      "CSS visibility, generated content, shadow DOM, browser state, keyboard behavior, screen-reader output, contrast, zoom, captions, and user experience require separate evaluation.",
      "A present alt attribute, label reference, ARIA attribute, or title does not prove that its content is meaningful.",
      "Findings are diagnostic candidates, not a WCAG conformance verdict. Human review and assistive-technology testing remain required."
    ],
    pages, results: findings
  };

  const sarifRules = rules.map(([id, wcag, level, title, help]) => ({
    id, shortDescription: { text: title }, fullDescription: { text: title + ". " + help },
    help: { text: help, markdown: help },
    helpUri: wcag === "3.1.1" ? "https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html"
      : wcag === "2.4.2" ? "https://www.w3.org/WAI/WCAG22/Understanding/page-titled.html"
      : wcag === "1.1.1" ? "https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"
      : wcag === "2.4.4" ? "https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html"
      : wcag === "4.1.2" ? "https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html"
      : "https://html.spec.whatwg.org/",
    defaultConfiguration: { level: level === "A" ? "error" : "warning" },
    properties: { wcagSuccessCriterion: wcag, wcagLevel: level, target: level === "A" ? "formal" : "diagnostic" }
  }));
  const sarif = {
    version: "2.1.0", $schema: "https://json.schemastore.org/sarif-2.1.0.json",
    runs: [{
      tool: { driver: { name: "IWAG Active Compiler Accessibility Scanner", semanticVersion: "0.2.0", informationUri: "https://github.com/Hanzet22/IWAG-replika-rtd", rules: sarifRules } },
      invocations: [{ executionSuccessful: true, properties: { parser: "parse5", formalTarget: "WCAG 2.2 Level A", conformanceClaim: false } }],
      results: findings.map((item) => ({
        ruleId: item.ruleId, level: item.severity, kind: item.confidence === "confirmed" ? "fail" : "review",
        message: { text: item.message + " on " + item.route + (item.note ? " — " + item.note : "") },
        locations: [{ physicalLocation: {
          artifactLocation: { uri: pages.find((page) => page.route === item.route)?.file ?? (item.route.replace(/^\//, "") || "index.html"), uriBaseId: "%DISTROOT%" },
          region: { startLine: item.location.startLine, startColumn: item.location.startColumn }
        }}],
        partialFingerprints: { primaryLocationLineHash: item.fingerprint },
        properties: { wcagSuccessCriterion: item.wcag, wcagLevel: item.wcagLevel, confidence: item.confidence, evaluationSource: item.evaluationSource, element: item.element }
      })),
      originalUriBaseIds: { "%DISTROOT%": { uri: path.relative(process.cwd(), outputRoot).split(path.sep).join("/") + "/" } }
    }]
  };

  await mkdir(reportRoot, { recursive: true });
  await writeFile(path.join(reportRoot, "accessibility-report.json"), JSON.stringify(summary, null, 2) + "\n", "utf8");
  await writeFile(path.join(reportRoot, "accessibility.sarif"), JSON.stringify(sarif, null, 2) + "\n", "utf8");
  console.log("[iwagc:a11y] parser: parse5 (WHATWG HTML); scanned " + pages.length + " generated HTML routes across " + Object.values(localeCoverage).filter(Boolean).length + " locales");
  console.log("[iwagc:a11y] " + findings.length + " findings (" + summary.findings.confirmed + " confirmed, " + summary.findings.reviewRequired + " review required)");
  console.log("[iwagc:a11y] expected routes: " + (routeCoverage.expectedCount ?? "not configured") + "; missing: " + missingExpectedRoutes.length + "; unexpected: " + unexpectedRoutes.length);
  console.log("[iwagc:a11y] reports: .iwag-build/accessibility-report.json and .iwag-build/accessibility.sarif");
  console.log("[iwagc:a11y] diagnostic only; this report does not establish WCAG conformance.");
}
