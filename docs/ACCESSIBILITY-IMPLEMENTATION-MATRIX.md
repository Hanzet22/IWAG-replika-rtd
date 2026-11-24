# IWAG V2 Accessibility Implementation Matrix

**Snapshot:** 2026-11-24  
**Branch:** `v2/greenfield-global-reconstruction`  
**Formal target:** WCAG 2.2 Level A only  
**Evidence status:** Source inspection and repository documentation; no conformance claim.

This matrix separates implemented source-level foundations from verified outcomes. A component existing in source does not mean its behavior has passed manual accessibility testing.

## 1. Shared application shell

| Area | Source evidence | Current implementation | Evidence status | Remaining validation |
|---|---|---|---|---|
| Document structure | `src/layouts/BaseLayout.astro` | Document language, title, description, semantic header, navigation, main and footer | Source inspected | Inspect generated HTML on every route and locale |
| Bypass repeated content | `BaseLayout.astro`, `reconstruction.css` | Skip link to `#main`; main landmark has programmatic focus target | Source inspected | Keyboard and screen-reader confirmation |
| Navigation | `BaseLayout.astro` | Desktop primary navigation; native `details/summary` mobile disclosure; current page uses `aria-current` | Source inspected | Keyboard, 320px reflow, zoom and TalkBack |
| Localization | `src/i18n/locales.ts`, `src/i18n/ui.ts` | English, Indonesian, English (Singapore), and Malay locale routing; page language metadata and fallback notice | Source inspected | Verify language of parts and translation quality on every route |
| User preferences | `BaseLayout.astro`, `src/scripts/preferences.ts` | Theme, accent, text scale, contrast, motion, density and expanded text spacing controls; local preference storage and reset | Source inspected | Test storage-disabled mode, reset, keyboard labels and all visual states |
| Typography | `src/styles/reconstruction.css`, `public/fonts/`, `docs/FONT-LICENSING.md` | Self-hosted fonts with system fallbacks; no remote font dependency in the shared shell | Source inspected | Confirm generated requests and glyph coverage in all locales |
| Focus and controls | `reconstruction.css` | Global `:focus-visible` outline; base controls have a 44px minimum height | Source inspected | Contrast, clipping, focus obscuration and target-size checks in rendered states |
| Motion | `reconstruction.css`, `preferences.ts` | System and user reduced-motion rules; transitions/animations are reduced | Source inspected | Inspect all route animations and moving/auto-updating content |
| Forced colors | `reconstruction.css` | Forced-colors border and focus rules | Source inspected | Test Windows High Contrast / forced-colors mode |
| Responsive layout | `reconstruction.css` | Narrow-screen layout rules and flexible content grids | Source inspected | Test 320 CSS px, 200% text resize and 400% browser zoom |

## 2. Interactive components

| Component | Source evidence | Current implementation | Evidence status | Remaining validation |
|---|---|---|---|---|
| Contrast checker | `src/components/ContrastChecker.vue` | User-triggered calculation; Rust/WASM when available and JavaScript fallback; result uses a status region | Source inspected | Keyboard, screen reader, invalid input, color input and fallback behavior |
| Graphics capability lab | `src/components/GraphicsCapabilityLab.vue` | Static SVG baseline; optional user-triggered Canvas; WebGL/WebGPU capability detection | Previously documented source implementation | Confirm no automatic GPU work, reduced-motion behavior, resource cleanup and fallback |
| Native mobile menu | `BaseLayout.astro` | Browser-native disclosure without a custom JavaScript menu system | Source inspected | TalkBack and keyboard operation on actual devices |

The contrast calculator is a two-color calculation aid, not a site-wide WCAG audit or certification tool.

A source-template scan of the shared homepage, generic page, nested article and 404 templates found one authored `h1` in each template. The generic and nested content templates contain no inline `img` or `form` elements; links are authored with visible or data-driven text, and the inspected templates do not open external links in new tabs. This is a source-level finding only: inspect generated DOM output and every route for actual rendered names, heading order and content-specific media.

## 3. Generated output and compiler checks

The existing implementation status records a previous raw output baseline of 298 HTML files, one CSS file, four JavaScript files, five fonts, 2,460,461 total bytes and 7,111 local references checked. This is a historical baseline, not a fresh build result for this snapshot.

The Rust Active Compiler currently documents output checks for document language/title, main landmark, skip link, duplicate IDs, image-alt attribute presence, named SVGs/buttons/form controls, local references, same-site fragments, route manifests and output accounting. These checks are useful regression signals, but cannot determine whether:

- alternative text communicates the image's purpose;
- a link's purpose is understandable in context;
- headings and labels accurately describe content;
- contrast passes in every theme and interactive state;
- a control works with keyboard and assistive technology;
- captions, transcripts or audio descriptions are adequate;
- a complete user journey is understandable and recoverable.

## 4. Level A acceptance work still outstanding

No criterion is marked conformant solely from source inspection. Complete the following against actual generated routes and relevant content:

- [ ] Map every applicable Level A criterion to route templates, components and content types.
- [ ] Review informative/decorative image alternatives and complex visual equivalents.
- [ ] Inspect all prerecorded audio/video and provide applicable captions, transcripts or alternatives.
- [ ] Verify semantic relationships, headings, labels, tables, lists and reading sequence.
- [ ] Complete keyboard-only journeys and verify no keyboard traps.
- [ ] Review character-key shortcuts, timing, moving content, flashing and motion actuation where applicable.
- [ ] Verify skip navigation, page titles, focus order and link purpose across all route families.
- [ ] Review pointer gestures and provide single-pointer alternatives where required.
- [ ] Verify language metadata and language changes within content.
- [ ] Review all forms, errors, instructions and programmatic name/role/value behavior.
- [ ] Test representative desktop and mobile screen-reader/browser combinations, including Android TalkBack.
- [ ] Record defects, affected criteria, reproduction steps, owner, retest evidence and date.

## 5. Voluntary Level AA enhancement tracking

Level AA criteria are listed in `WCAG-2.2-AA-COMPLETE-CRITERIA-REGISTER.md` for completeness and may be implemented as product improvements. Current source contains some related foundations (scalable text, flexible layout, visible focus, theme controls and large control heights), but no Level AA criterion is marked passed in this matrix. Prioritize contrast, reflow, text spacing, focus visibility/obscuration, consistent navigation, target size and accessible authentication if those features enter scope.

## 6. Neuroinclusive and disability-inclusive validation

- [ ] Conduct co-design with people who have relevant lived experience before treating interface assumptions as universal.
- [ ] Offer participant-selected accommodations, accessible materials, flexible pacing and communication alternatives.
- [ ] Evaluate comprehension, task success, error recovery, navigation loss, interruption and participant-reported barriers—not speed alone.
- [ ] Do not infer diagnoses or support needs from analytics or device signals.
- [ ] Do not collect sensitive health/disability data for presentation preferences; keep preferences local and user-controlled unless a separately approved purpose exists.

## 7. Scope and claim control

- The formal project conformance target remains WCAG 2.2 Level A.
- Level AA and AAA criteria are optional engineering improvements unless a future decision explicitly changes the target.
- Automated tools and Rust compiler output checks do not establish conformance.
- Documentation, literature reviews and successful builds do not replace manual evaluation.
- A public accessibility statement must describe the actual tested scope, known limitations, review date and a verified support channel.
- CI/CD status does not define completion and must not be used as a reason to stop unrelated engineering work.

## 8. Primary references

- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- W3C WAI, [Involving Users in Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/involving-users/).
- Astro, [Framework Components](https://docs.astro.build/en/guides/framework-components/).
- Astro, [View Transitions and accessibility](https://docs.astro.build/en/guides/view-transitions/).
- IWAG V2, [Accessibility Engineering Specification](./ACCESSIBILITY-ENGINEERING-SPEC.md).
- IWAG V2, [Neuroinclusive Life Sciences Evidence](./NEUROINCLUSIVE-LIFE-SCIENCES-EVIDENCE.md).
