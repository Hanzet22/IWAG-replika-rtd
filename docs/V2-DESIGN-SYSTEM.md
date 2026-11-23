# IWAG V2 — Independent Design System

**Status:** Working design specification  
**Scope:** Global visual language, interaction patterns, and accessibility foundations  
**Relationship to V1:** V1 is a research reference only. This system defines a distinct V2 identity, information architecture, and interaction model.

## 1. Product principles

1. **Content first.** Essential information is HTML text and semantic structure, not an image, canvas, GPU layer, or animation.
2. **Predictability over novelty.** Navigation, controls, terminology, and feedback remain consistent across routes.
3. **User control.** Users can change text scale, theme, contrast, motion, and content spacing. Do not infer disability or attention state.
4. **Low sensory demand by default.** No autoplaying decorative animation, flashing, parallax, animated backgrounds, surprise audio, or auto-advancing content.
5. **Progressive enhancement.** SVG/HTML are the baseline. Canvas, WebGL, WebGPU, Houdini, Vue islands, and WASM are optional and must not gate content.
6. **No color-only meaning.** Pair color with text, shape, icon, pattern, or position.
7. **Graceful recovery.** Errors explain what happened, what can be done next, and preserve user-entered information when feasible.
8. **Respect individual variation.** ADHD, autism, photosensitivity, color-vision differences, low vision, and aging are not uniform user profiles. Provide optional settings instead of stereotypes.

## 2. Visual foundations

### Color roles

Use semantic roles, not one-off colors:

- `--canvas`: page background
- `--surface` / `--surface-raised`: content surfaces
- `--text`: primary text
- `--muted`: secondary text; never use for essential instructions unless contrast is verified
- `--border`: boundaries and grouping
- `--link` / `--link-visited`: navigation and visited state
- `--accent` / `--accent-contrast`: primary action and brand emphasis
- `--focus`: visible keyboard focus
- `--notice`: informational surfaces

Every theme must be evaluated for text, links, visited links, controls, focus, disabled, selected, error, and notice states. Dynamic accent input must not be allowed to make essential text or focus indicators low contrast. Color must never be the sole status cue.

### Typography

- Use Alan Sans/system sans-serif for long-form body text and functional labels.
- Keep Amarna for selected display headings; use Capo Sfogliato, Sekuya, and Starveler only for decorative/editorial moments where they do not carry essential instructions.
- Use relative units, comfortable line-height, and a readable measure; permit user text scaling and browser zoom.
- Avoid all-caps body copy, long italic passages, justified paragraphs, and text embedded in images.
- Ensure language-specific glyph coverage and sensible system fallbacks before using a local font on a translated route.
- Never force a single text size or font choice as the only readable option.

### Layout and spacing

- Use a centered, fluid content container with a readable text measure.
- Build page hierarchy with clear headings, short sections, descriptive subheadings, and meaningful whitespace.
- Keep navigation location and component behavior stable.
- Use responsive grids that collapse to a single column without clipping at narrow widths or high zoom.
- Do not use horizontal scrolling for ordinary text content.
- Keep controls large enough to identify and operate; the current shared baseline uses a 44px minimum height for primary navigation and common controls. Verify the final rendered size of every interactive target.

## 3. V2 information architecture

The primary navigation is task-oriented rather than a flat inventory of legacy pages:

- **Home:** orientation and the current event snapshot.
- **Discover:** event overview and dated event information.
- **Plan your visit:** one starting point for venue, travel, and participation.
- **Community:** project context, team contributions, and community resources.
- **Updates:** dated announcements and the historical archive.

Supporting pages such as accessibility, legal drafts, brand resources, and detailed guides remain reachable through contextual links and the footer. This is a V2 navigation model; it does not attempt to reproduce the V1 page menu or route hierarchy. The implementation adds `/plan-your-visit/` and `/community/` landing routes while retaining detailed routes for direct links and source traceability.

## 4. Interaction model

- Links navigate; buttons perform actions. Do not make non-interactive text or decorative containers behave like controls.
- Label controls visibly and programmatically. Do not rely on placeholder text as the only label.
- State the consequence of a control before activation when it is not obvious.
- Keep focus visible and in a logical order; do not move focus unexpectedly.
- Use native HTML disclosure, select, button, and link patterns where they fit.
- Avoid gesture-only interactions, hover-only information, hidden menus as the only route, and auto-advancing carousels.
- Provide clear empty, loading, success, and error states in text.
- Avoid time limits. If a future task genuinely needs one, explain why and provide a way to extend it where applicable.
- Preserve user input after recoverable errors.

## 5. Cognitive accessibility

The design should reduce unnecessary memory, attention, and decision demands:

- One clear page purpose and one primary action where practical.
- Use familiar terms and predictable labels.
- Put important information in the page, not only in tooltips or transient notices.
- Break long information into meaningful sections without hiding essential context.
- Make the current location and next step apparent.
- Keep global controls in consistent locations and provide a visible reset-to-defaults action for preferences.
- Avoid competing banners, autoplay, animated decoration, unnecessary prompts, and clutter.
- Explain uncommon terms and abbreviations.
- Provide concrete examples where abstract wording may be unclear.
- Use descriptive error messages with a recovery action.
- Allow users to control presentation rather than automatically classifying their behavior.

These are inclusive design heuristics, not claims that one layout works for every neurodivergent person. Validate with people who have varied access needs.

## 6. Motion and photosensitivity safeguards

- No decorative motion starts automatically.
- No flashing or strobing effects; do not use rapid color alternation.
- No parallax, scroll-triggered movement, animated gradients, or auto-advancing content in the default experience.
- Respect the operating-system `prefers-reduced-motion` setting and the in-product Reduce motion preference.
- Reduced motion removes nonessential transitions and animations; it must not remove information or feedback.
- Any future essential motion needs a documented rationale, an alternative presentation, and review against the full WCAG 2.2 requirements.
- Avoid autoplaying audio/video. If media is later added, give users immediate pause/stop controls and appropriate captions/transcripts.

## 7. Color vision, contrast, and system preferences

- Statuses use text labels and/or shape/icon patterns in addition to color.
- Links remain distinguishable from surrounding text without relying on hue alone.
- Charts and maps require labels, patterns, or a data-table alternative.
- High-contrast mode uses system color roles where possible and strengthens boundaries and focus.
- Forced-colors mode must preserve semantic controls and focus.
- Theme selection must not override browser or OS accessibility settings unexpectedly.
- Do not describe a palette as universally autism-friendly, ADHD-friendly, or photosensitivity-safe.

## 8. Images, icons, and alternative text

- Informative images need concise alt text that communicates their purpose or relevant information.
- Functional images describe the action or destination, not their appearance alone.
- Complex diagrams need a nearby text explanation or data equivalent.
- Decorative images use empty alt text (`alt=""`) or are hidden from assistive technology when implemented as CSS decoration.
- Do not repeat adjacent captions verbatim in alt text unless the image conveys additional information.
- Do not place essential text inside raster images.
- Icons that convey meaning need an accessible name; decorative icons are hidden from the accessibility tree.
- Do not infer personal attributes from an image or write alt text that speculates about identity.

## 9. Component contract

Every reusable component must document:

- purpose and appropriate semantic element;
- required accessible name/label;
- keyboard behavior and focus behavior;
- states (default, hover, focus, active, disabled, selected, error);
- text and color contrast expectations;
- reduced-motion behavior;
- narrow-screen and 200–400% zoom behavior;
- loading/error/empty behavior where relevant;
- alt-text or text-equivalent requirements for media.

A component is not complete because it looks correct in one screenshot.

## 10. Current implementation mapping

| Area | Current implementation | Remaining work |
|---|---|---|
| Base typography | Alan Sans body, Amarna headings, three optional display/editorial faces | Verify glyph coverage, line wrapping, and readability on all locale routes |
| Themes | System, Light, Black, Super Black, AMOLED Black, Dynamic | Audit every semantic state and dynamic accent combinations |
| User controls | Text scale, contrast, motion, spacing, theme | Verify persistence, no-JS fallback, keyboard operation, and high-zoom layout |
| Motion | Reduced-motion media query and user preference | Audit every page/component for any nonessential animation |
| Navigation | Task-oriented Home, Discover, Plan your visit, Community, and Updates navigation; semantic footer nav and skip link | Validate route naming, current-page indication, mobile and zoom behavior |
| Graphics | SVG baseline and opt-in graphics capability lab | Keep graphics optional; test context loss and reduced-motion behavior |
| Images | Existing content assets | Audit every image for meaningful alt, empty decorative alt, or equivalent text |
| Components | Existing Astro/CSS components | Inventory and document component contracts before expanding patterns |

## 11. Verification and evidence

- Map each applicable WCAG 2.2 Level A criterion to the routes/components and evidence that supports it.
- Test keyboard-only navigation, visible focus, screen readers, TalkBack, browser zoom, text resizing, forced colors, and reduced motion.
- Test on small screens and low-end Android hardware.
- Conduct usability sessions with disabled users where feasible; compensate and obtain informed consent appropriately.
- Record issues and fixes. Automated tools are regression aids, not conformance certification.
- Do not claim WCAG conformance until the full applicable criteria have been evaluated with sufficient evidence.

## 12. Research basis and limitations

- W3C, [WCAG 2.2](https://www.w3.org/TR/WCAG22/): normative, technology-neutral accessibility success criteria. The project's stated engineering target remains Level A; additional guidance here is design practice, not a silent change to AA.
- W3C, [Cognitive Accessibility](https://www.w3.org/WAI/cognitive): explains how WAI standards address cognitive accessibility and where additional guidance is useful.
- W3C, [Understanding Animation from Interactions](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html): explains motion-related user needs and the Level AAA criterion; this document adopts conservative motion defaults as a design choice, not a claim that AAA is required.
- UK Department for Education, [Cognitive accessibility guidelines](https://accessibility.education.gov.uk/guidelines/coga): practical guidance on consistency, findability, plain language, focus, error recovery, and user adaptation.
- Raymaker et al., [Development of the AASPIRE Web Accessibility Guidelines for Autistic Web Users](https://pmc.ncbi.nlm.nih.gov/articles/PMC6485264/), 2019: community-based participatory development and evaluation with autistic users. Findings should inform options and evaluation, not stereotypes.
- Johansson, Steel, and Gustavsson, [An ICF core set for designing cognitive web accessibility](https://link.springer.com/article/10.1007/s10209-025-01262-y), 2025: a framework connecting cognitive accessibility needs to design considerations.
- Giesen and Breuninger, [Web Design for People on the Autism Spectrum: A Mixed-Methods Study on Digital Barriers](https://dl.acm.org/doi/10.1145/3820253.3831390), 2026: recent mixed-methods work on sensory and cognitive barriers; interpret sample and study limitations and validate locally.

### Evidence review notes

The completed literature search is stored in the Undermind workspace [IWAG V2 Neuroinclusive Design System Evidence](https://app.undermind.ai/projects/5fd9c991-5e52-43b6-b939-69b359b5aa51?path=%2FIWAG%20V2%20Neuroinclusive%20Design%20System%20Evidence). Its summary is based on available abstracts and metadata, not full-text review of every paper. The following findings are useful design inputs, with the stated limitations:

- The rapid evidence assessment by Gartland et al. synthesizes 45 papers and identifies a varied evidence base and recurring cognitive-accessibility barriers. This supports a layered approach: apply established accessibility requirements, then validate specific patterns with users rather than treating a checklist as proof. DOI: 10.3390/bs12020026.
- Borg et al.'s systematic search/review found substantial variation in diagnoses, methods, and reported needs across 29 studies. This cautions against a single universal cognitive-accessibility profile. DOI: 10.1007/s10209-014-0351-6.
- Raymaker et al.'s AASPIRE work used community-based participatory design and evaluated its website with 170 autistic adults. Its practical recommendations include consistent navigation, clear labels, reduced visual clutter, and concise concrete language. This is a useful example of participatory evaluation, not a universal template. DOI: 10.1089/aut.2018.0020.
- Eraslan et al.'s eye-tracking study involved 19 autistic and 19 non-autistic participants and found that visual complexity and poor distinguishability affected task experience. Its sample and tasks are limited; use it to justify testing clutter and hierarchy, not to claim all autistic users process pages identically. DOI: 10.1007/s10209-020-00708-9.
- Alzahrani et al. studied irrelevant animated objects with autistic and non-autistic participants and reported task-performance and distraction effects. This supports removing nonessential animation by default, while still offering user choice. DOI: 10.1145/3510458.3513007.
- Hu and Feng's information-search study involved 23 people with cognitive disabilities. Search was preferred in that study, while broad navigation produced more failures; the result supports making content findable and offering search where the content volume justifies it, not replacing navigation in every context. DOI: 10.1145/2729981.
- Geddes et al.'s scoping review of 113 papers found that color-accessibility tools often focus on simulation and contrast while giving less attention to redundant encoding and alternative color selection. Therefore, V2 must pair color with labels, shape, patterns, or text. DOI: 10.1145/3663547.3746370.
- Chiriboga-Casanova et al.'s systematic review of older-adult web accessibility research identified many distinct barriers, improvements, and evaluation methods, and emphasizes heterogeneity within older populations. This supports adaptable text, clear controls, and testing rather than age-based assumptions. DOI: 10.1145/3763243.
- Ho Sang and Petrarca's 2026 typography review covered 42 empirical studies and reported that no single font or size optimizes readability for everyone. This supports scalable text, user/browser preferences, and familiar readable defaults. DOI: 10.34314/nm4n3852.
- Jordan and Vanderheiden's photosensitive-epilepsy guideline analysis describes differences and gaps among existing international guidance. Reduced-motion support is not a substitute for avoiding hazardous flashing patterns and reviewing media against applicable seizure-safety guidance. DOI: 10.1145/3694790.

These studies differ in sample size, methods, populations, and strength of evidence. Abstract-level summaries do not replace full-paper appraisal. No single palette, font, spacing, or interaction pattern should be represented as a medical intervention or universal preference. The strongest project-level safeguard is user control plus direct evaluation with diverse users.
