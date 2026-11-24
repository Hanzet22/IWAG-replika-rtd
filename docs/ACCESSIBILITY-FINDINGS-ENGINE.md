# IWAG Accessibility Findings Engine

**Status:** Initial generated-output diagnostics implemented  
**Owner:** Rust `iwagc` build orchestration with a Node.js scanning helper  
**Formal target:** WCAG 2.2 Level A  
**Level AA:** Optional engineering enhancements only

## 1. Purpose and boundary

The Active Compiler runs an accessibility diagnostics pass against the complete generated static HTML output after Astro/Vite has emitted the site. The scan enumerates generated HTML files directly, rather than relying only on a hand-maintained list of expected routes. It records route and locale coverage and writes machine-readable JSON and SARIF 2.1.0 reports.

The Rust executable remains the project build controller. The first scanner implementation is a Node.js helper invoked by the existing Rust-controlled output-validation stage. It is not represented as a Rust-native HTML parser or a replacement for Astro/Vite.

## 2. Current implementation

Entry point: `compiler/iwagc/scripts/validate-output.mjs`  
Scanner: `compiler/iwagc/scripts/accessibility-report.mjs`

The scanner currently checks or flags:

| Rule | WCAG mapping | Confidence |
|---|---|---|
| Missing root `html[lang]` | 3.1.1, Level A | Confirmed when absent |
| Missing or empty document title | 2.4.2, Level A | Confirmed when absent/empty; title quality remains human-reviewed |
| Missing `img[alt]` attribute | 1.1.1, Level A | Confirmed when absent; meaningfulness is not inferred |
| Empty link name candidate | 2.4.4, Level A | Review required |
| Empty button name candidate | 4.1.2, Level A | Review required |
| Form control naming candidate | 4.1.2, Level A | Review required |
| Broken ARIA ID reference | 4.1.2, Level A | Confirmed structural reference issue |
| Duplicate HTML ID | HTML quality diagnostic | Warning; not asserted as a standalone WCAG criterion |

The scanner writes:

- `.iwag-build/accessibility-report.json` — route/locale coverage, findings, confidence, evidence, limitations and summary.
- `.iwag-build/accessibility.sarif` — SARIF 2.1.0 output with stable rule IDs, generated-file locations and fingerprints.

The scanner is diagnostic and does not independently fail the build. Existing output validation continues to enforce its existing route, link, language, title and structural invariants. Review-required findings are not silently promoted to confirmed WCAG failures.

## 3. Route and locale coverage

The scan discovers every generated `.html` file beneath the configured output directory, including static paths expanded from dynamic Astro routes and localized route variants. It reports per-locale page counts for `en`, `id`, `en-sg` and `ms-my`, plus each generated route and its generated file path.

This is output coverage, not proof that every intended source route was expected to exist. A future manifest stage should compare generated routes against an explicit route/locale expectation manifest and report missing expected pages separately from accessibility findings.

## 4. Evidence model

Each finding records:

- stable rule ID;
- generated route, locale and element hint;
- WCAG success criterion and level where applicable;
- severity separate from confidence;
- evaluation source (`automated-generated-html`);
- line and column in the generated HTML;
- stable fingerprint;
- concise remediation guidance.

The report separates confirmed structural observations from heuristic candidates requiring review. A present attribute is not proof that its content is meaningful.

## 5. Known limitations

The initial scanner uses bounded HTML source inspection and is not a WHATWG-compliant parser. It does not construct the browser accessibility tree or calculate computed accessible names. Its heuristics can miss malformed or complex markup and can produce false positives.

It does not establish:

- meaningful alternative text or link purpose;
- correct accessible names after CSS/ARIA computation;
- keyboard operability, focus order, focus visibility or state transitions;
- screen-reader or Android TalkBack behavior;
- contrast, text resizing, reflow or forced-colors behavior;
- media captions, transcripts or audio descriptions;
- whether content language is semantically correct;
- usability or neuroinclusive quality.

Parser research compared Rust html5ever/scraper with Node parse5. The scanner now uses the pinned parse5 8.1.1 parser, which follows the WHATWG HTML Living Standard and can attach source-code locations to parsed nodes. Its entities 9 dependency is isolated beneath parse5 in the lockfile so existing Vue and dom-serializer consumers retain their compatible entities 7 and 4 branches.

## 6. Conformance and human evaluation

Automated findings are supporting evidence only. They are not a conformance claim, certification, or substitute for human evaluation. Manual keyboard review, screen-reader testing, zoom/reflow checks, visual review and evaluation by people with relevant lived experience remain separate work.

The formal target remains WCAG 2.2 Level A. Level AA findings may be tracked as voluntary enhancements and must not silently change the release baseline. No green CI run or empty automated report may be presented as proof of WCAG conformance.

## 7. Research references

- [W3C WCAG 2.2](https://www.w3.org/TR/WCAG22/)
- [W3C selecting web accessibility evaluation tools](https://www.w3.org/WAI/test-evaluate/tools/selecting/)
- [W3C WCAG-EM 2.0](https://www.w3.org/TR/wcag-em/)
- [OASIS SARIF 2.1.0 plus Errata 01](https://docs.oasis-open.org/sarif/sarif/v2.1.0/sarif-v2.1.0.html)
- [Astro Integration API](https://docs.astro.build/en/reference/integrations-reference/)
- [parse5 parser options and source locations](https://parse5.js.org/interfaces/parse5.ParserOptions.html)
- [parse5 project and WHATWG HTML parser implementation](https://github.com/inikulin/parse5)

Astro's `astro:build:done` integration hook exposes generated page pathnames, the output directory and emitted assets. This remains a future integration option; the current post-build helper already runs after Astro output validation.
