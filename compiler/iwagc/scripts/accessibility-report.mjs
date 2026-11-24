import { createHash } from "node:crypto";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const outputRoot = path.resolve(process.cwd(), process.argv[2] ?? "dist");
const reportRoot = path.resolve(process.cwd(), ".iwag-build");
const localeLanguages = new Map([["en", "en"], ["id", "id"], ["en-sg", "en-SG"], ["ms-my", "ms-MY"]]);
const rules = [
  ["IWAG-A11Y-HTML-LANG", "3.1.1", "A", "Root document language is missing", "Set a valid lang attribute on the html element."],
  ["IWAG-A11Y-PAGE-TITLE", "2.4.2", "A", "Document title is missing or empty", "Provide a descriptive, non-empty document title."],
  ["IWAG-A11Y-IMAGE-ALT", "1.1.1", "A", "Image alternative text attribute is missing", "Provide an alt attribute; use an empty value only when the image is intentionally decorative."],
  ["IWAG-A11Y-LINK-NAME-REVIEW", "2.4.4", "A", "Link may not expose a discernible purpose", "Review the computed accessible name and link purpose in context."],
  ["IWAG-A11Y-BUTTON-NAME-REVIEW", "4.1.2", "A", "Button may not expose an accessible name", "Review the computed accessible name, role, and state."],
  ["IWAG-A11Y-FORM-NAME-REVIEW", "4.1.2", "A", "Form control may not expose an accessible name", "Review associated labels and the computed accessible name."],
  ["IWAG-A11Y-ARIA-REFERENCE", "4.1.2", "A", "ARIA ID reference points to a missing element", "Ensure every referenced ID exists in the same document."],
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

function getAttribute(attributes, name) {
  const escaped = name.replace(/[.*+?^$()|[\]\\]/g, "\\$&");
  const match = attributes.match(new RegExp("(?:^|\\s)" + escaped + "\\s*=\\s*(?:\"([^\"]*)\"|'([^']*)'|([^\\s>]+))", "i"));
  return match ? (match[1] ?? match[2] ?? match[3] ?? "") : null;
}

function stripMarkup(value) {
  return value.replace(/<!--[\s\S]*?-->/g, " ")
    .replace(/<(script|style|template)\b[^>]*>[\s\S]*?<\/\1>/gi, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ").replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<").replace(/&gt;/gi, ">")
    .replace(/&quot;|&#34;/gi, "\"").replace(/&#39;|&apos;/gi, "'")
    .replace(/\s+/g, " ").trim();
}

function lineColumn(source, offset) {
  const before = source.slice(0, offset);
  return { startLine: before.split("\n").length, startColumn: offset - before.lastIndexOf("\n") };
}

function addFinding({ ruleId, route, locale, source, offset, element, confidence = "confirmed", note }) {
  const rule = ruleMap.get(ruleId);
  const location = lineColumn(source, offset);
  const fingerprint = createHash("sha256").update([ruleId, route, element ?? ""].join("|")).digest("hex");
  findings.push({
    ruleId, route, locale, wcag: rule.wcag, wcagLevel: rule.level,
    severity: confidence === "confirmed" && rule.level === "A" ? "error" : "warning",
    confidence, evaluationSource: "automated-generated-html",
    message: rule.title, help: rule.help, note: note ?? null, element: element ?? null,
    location, fingerprint
  });
}

function inspectPage(file, html) {
  const relative = path.relative(outputRoot, file).split(path.sep).join("/");
  const route = relative.endsWith("index.html") ? "/" + relative.slice(0, -"index.html".length) : "/" + relative;
  const firstSegment = relative.split("/")[0];
  const locale = localeLanguages.has(firstSegment) ? firstSegment : "root";
  pages.push({ route, locale, file: relative });

  const htmlOpen = html.match(/<html\b([^>]*)>/i);
  const lang = htmlOpen ? getAttribute(htmlOpen[1], "lang") : null;
  if (!lang?.trim()) {
    addFinding({ ruleId: "IWAG-A11Y-HTML-LANG", route, locale, source: html, offset: htmlOpen?.index ?? 0, element: "html" });
  } else if (localeLanguages.has(locale) && lang.toLowerCase() !== localeLanguages.get(locale).toLowerCase()) {
    addFinding({
      ruleId: "IWAG-A11Y-HTML-LANG", route, locale, source: html, offset: htmlOpen.index,
      element: "html", confidence: "review-required",
      note: "The lang value differs from the locale route prefix; verify the page's predominant human language."
    });
  }

  const title = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i);
  if (!title || !stripMarkup(title[1])) {
    addFinding({ ruleId: "IWAG-A11Y-PAGE-TITLE", route, locale, source: html, offset: title?.index ?? 0, element: "title" });
  }

  const ids = new Map();
  for (const match of html.matchAll(/\bid\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
    const id = match[1] ?? match[2] ?? "";
    if (!id) continue;
    if (ids.has(id)) addFinding({ ruleId: "IWAG-HTML-DUPLICATE-ID", route, locale, source: html, offset: match.index, element: "#" + id });
    else ids.set(id, true);
  }

  for (const match of html.matchAll(/<img\b([^>]*)>/gi)) {
    if (getAttribute(match[1], "alt") === null) {
      addFinding({ ruleId: "IWAG-A11Y-IMAGE-ALT", route, locale, source: html, offset: match.index, element: "img" });
    }
  }

  for (const match of html.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
    const attrs = match[1];
    const text = stripMarkup(match[2]);
    const namedBy = getAttribute(attrs, "aria-label") || getAttribute(attrs, "aria-labelledby") || getAttribute(attrs, "title");
    if (!text && !namedBy) addFinding({ ruleId: "IWAG-A11Y-LINK-NAME-REVIEW", route, locale, source: html, offset: match.index, element: "a", confidence: "review-required" });
  }

  for (const match of html.matchAll(/<button\b([^>]*)>([\s\S]*?)<\/button>/gi)) {
    const attrs = match[1];
    const text = stripMarkup(match[2]);
    const namedBy = getAttribute(attrs, "aria-label") || getAttribute(attrs, "aria-labelledby") || getAttribute(attrs, "title");
    if (!text && !namedBy) addFinding({ ruleId: "IWAG-A11Y-BUTTON-NAME-REVIEW", route, locale, source: html, offset: match.index, element: "button", confidence: "review-required" });
  }

  for (const match of html.matchAll(/<(input|select|textarea)\b([^>]*)>/gi)) {
    const tag = match[1].toLowerCase();
    const attrs = match[2];
    if (tag === "input" && getAttribute(attrs, "type")?.toLowerCase() === "hidden") continue;
    const id = getAttribute(attrs, "id");
    const explicitName = getAttribute(attrs, "aria-label") || getAttribute(attrs, "aria-labelledby");
    const safeId = id ? id.replace(/[.*+?^$()|[\]\\]/g, "\\$&") : "";
    const hasForLabel = id && new RegExp("<label\\b[^>]*\\bfor\\s*=\\s*([\"'])" + safeId + "\\1", "i").test(html);
    const before = html.slice(Math.max(0, match.index - 1200), match.index);
    const wrappedLabel = /<label\b[^>]*>[\s\S]*$/i.test(before) && !/<\/label\s*>[\s\S]*$/i.test(before);
    if (!explicitName && !hasForLabel && !wrappedLabel) {
      addFinding({ ruleId: "IWAG-A11Y-FORM-NAME-REVIEW", route, locale, source: html, offset: match.index, element: tag, confidence: "review-required" });
    }
  }

  for (const match of html.matchAll(/\baria-(?:labelledby|describedby|controls|owns|details|errormessage)\s*=\s*(?:"([^"]*)"|'([^']*)')/gi)) {
    const idsValue = match[1] ?? match[2] ?? "";
    for (const id of idsValue.split(/\s+/).filter(Boolean)) {
      if (!ids.has(id)) addFinding({ ruleId: "IWAG-A11Y-ARIA-REFERENCE", route, locale, source: html, offset: match.index, element: "[idref=" + id + "]" });
    }
  }
}

export async function runAccessibilityReport() {
  const htmlFiles = (await walk(outputRoot)).sort();
  for (const file of htmlFiles) inspectPage(file, await readFile(file, "utf8"));

  const localeCoverage = Object.fromEntries([...localeLanguages.keys()].map((locale) => [
    locale, pages.filter((page) => page.locale === locale).length
  ]));
  const summary = {
    compiler: "iwagc", reportVersion: 1, generatedAt: new Date().toISOString(),
    outputRoot: path.relative(process.cwd(), outputRoot),
    formalTarget: "WCAG 2.2 Level A", levelAA: "optional-enhancement-only", conformanceClaim: false,
    coverage: { htmlPagesScanned: pages.length, routes: pages.map(({ route, locale }) => ({ route, locale })), localePageCounts: localeCoverage },
    findings: {
      total: findings.length,
      confirmed: findings.filter((item) => item.confidence === "confirmed").length,
      reviewRequired: findings.filter((item) => item.confidence !== "confirmed").length,
      byRule: Object.fromEntries(rules.map(([id]) => [id, findings.filter((item) => item.ruleId === id).length]))
    },
    limitations: [
      "This lightweight scanner is not a WHATWG HTML parser and does not compute the browser accessibility tree.",
      "A present alt attribute, label reference, ARIA attribute, or title does not prove that its accessible name or text is meaningful.",
      "CSS visibility, generated names, shadow DOM, interactive state, keyboard behavior, screen-reader output, contrast, zoom, captions, and user experience require separate evaluation.",
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
      tool: { driver: { name: "IWAG Active Compiler Accessibility Scanner", semanticVersion: "0.1.0", informationUri: "https://github.com/Hanzet22/IWAG-replika-rtd", rules: sarifRules } },
      invocations: [{ executionSuccessful: true, properties: { formalTarget: "WCAG 2.2 Level A", conformanceClaim: false } }],
      results: findings.map((item) => ({
        ruleId: item.ruleId, level: item.severity, kind: item.confidence === "confirmed" ? "fail" : "review",
        message: { text: item.message + " on " + item.route + (item.note ? " — " + item.note : "") },
        locations: [{ physicalLocation: {
          artifactLocation: { uri: item.route.replace(/^\//, "") || "index.html", uriBaseId: "%DISTROOT%" },
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
  console.log("[iwagc:a11y] scanned " + pages.length + " generated HTML routes across " + Object.values(localeCoverage).filter(Boolean).length + " locales; " + findings.length + " findings (" + summary.findings.confirmed + " confirmed, " + summary.findings.reviewRequired + " review required)");
  console.log("[iwagc:a11y] reports: .iwag-build/accessibility-report.json and .iwag-build/accessibility.sarif");
  console.log("[iwagc:a11y] diagnostic only; this report does not establish WCAG conformance.");
}
\n