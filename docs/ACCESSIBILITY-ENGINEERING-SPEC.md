# IWAG V2 Accessibility Engineering Specification

**Status:** Research-backed engineering baseline  
**Formal project target:** WCAG 2.2 Level A (all applicable Level A success criteria)  
**Additional engineering ambition:** Track Level AA criteria as voluntary improvements; do not claim Level AA conformance.  
**Snapshot:** 2026-11-24

## 1. Purpose and conformance model

IWAG V2 treats accessibility as a system property, not a cosmetic feature or diagnosis-specific mode. This document translates all applicable WCAG 2.2 Level A criteria into implementation and validation requirements. It also tracks Level AA criteria as voluntary engineering improvements, then adds evidence-informed cognitive accessibility, neuroinclusive interaction, and disability-inclusive co-design recommendations.

Requirement labels:
- **MUST — formal target:** required by an applicable WCAG 2.2 Level A success criterion.
- **SHOULD — enhancement:** Level AA criteria and evidence-informed project recommendations beyond the declared Level A target.
- **MAY — implementation option:** one possible technique; equivalent methods are acceptable if the outcome conforms and is validated.
- **MAY — implementation option:** one possible technique; equivalent methods are acceptable if the outcome conforms and is validated.

WCAG 2.2 Level AA means meeting **all Level A and all Level AA success criteria**. Do not claim AA based on a subset, automated score, or one tested template. Consider every page, state, responsive presentation, and complete process in the declared scope.

The W3C WCAG Recommendation is normative. W3C Understanding documents and techniques are informative examples, not exclusive implementation recipes. W3C COGA guidance is supplemental, not a separate WCAG A/AA requirement set.

## 2. WCAG 2.2 A/AA coverage register

The Level A rows are the formal release scope and each applicable criterion must have implementation evidence and a repeatable test. Level AA rows are tracked as enhancements and must not silently change the formal target.

### 2.1 Perceivable

| Criterion | Level | Engineering requirement |
|---|---:|---|
| 1.1.1 Non-text Content | A | Purpose-equivalent text alternatives for informative images, icons, controls and non-text content; decorative content hidden from assistive technology; complex charts get equivalent data or description. |
| 1.2.1 Audio-only and Video-only (Prerecorded) | A | Provide the required alternative for prerecorded audio-only and video-only media. |
| 1.2.2 Captions (Prerecorded) | A | Synchronized captions for prerecorded synchronized media, subject to exceptions. |
| 1.2.3 Audio Description or Media Alternative (Prerecorded) | A | Audio description or complete text media alternative where required. |
| 1.3.1 Info and Relationships | A | Expose structure and relationships programmatically: headings, lists, tables, labels, groups and regions. Prefer native HTML. |
| 1.3.2 Meaningful Sequence | A | Programmatic reading order preserves meaning when sequence matters. |
| 1.3.3 Sensory Characteristics | A | Instructions do not rely only on shape, color, size, location, orientation or sound. |
| 1.3.4 Orientation | AA | Do not restrict portrait/landscape unless essential. |
| 1.3.5 Identify Input Purpose | AA | Programmatically identify common personal-data field purposes where applicable. |
| 1.4.1 Use of Color | A | Color is never the only visual means of conveying information, action, status or distinction. |
| 1.4.2 Audio Control | A | Pause/stop or independent volume control for qualifying automatically playing audio lasting more than three seconds. |
| 1.4.3 Contrast (Minimum) | AA | Text contrast at least 4.5:1, or 3:1 for large text, subject to exceptions. |
| 1.4.10 Reflow | AA | Preserve information and functionality without two-dimensional scrolling at 320 CSS px width for vertically scrolling content or 256 CSS px height for horizontally scrolling content, except content that genuinely requires two dimensions. |
| 1.4.11 Non-text Contrast | AA | Visual information needed to identify controls, states and meaningful graphics has at least 3:1 contrast against adjacent colors, subject to exceptions. |
| 1.4.12 Text Spacing | AA | User-applied line, paragraph, letter and word spacing overrides do not cause content or functionality loss. |
| 1.4.13 Content on Hover or Focus | AA | Applicable additional content is dismissible, hoverable and persistent. |

### 2.2 Operable

| Criterion | Level | Engineering requirement |
|---|---:|---|
| 2.1.1 Keyboard | A | All functionality works through a keyboard interface, except where the underlying function requires path-dependent input. |
| 2.1.2 No Keyboard Trap | A | Focus can always move away from a component using the keyboard interface. |
| 2.1.4 Character Key Shortcuts | A | Single-character shortcuts can be turned off, remapped, or are active only when the relevant component has focus, subject to exceptions. |
| 2.2.1 Timing Adjustable | A | Users can turn off, adjust or extend time limits where required, subject to exceptions. |
| 2.2.2 Pause, Stop, Hide | A | Provide pause, stop, hide or frequency control for qualifying moving, blinking, scrolling or updating content. |
| 2.3.1 Three Flashes or Below Threshold | A | No content flashes more than three times per second unless below defined thresholds. |
| 2.4.1 Bypass Blocks | A | Provide a mechanism to bypass repeated blocks, such as skip links or landmarks. |
| 2.4.2 Page Titled | A | Each page has a title describing its topic or purpose. |
| 2.4.3 Focus Order | A | Focus order preserves meaning and operability. |
| 2.4.4 Link Purpose (In Context) | A | Link purpose is determinable from link text or programmatic context. |
| 2.4.5 Multiple Ways | AA | More than one way to locate pages within a set, except process steps and results. |
| 2.4.6 Headings and Labels | AA | Headings and labels describe topic or purpose. |
| 2.4.7 Focus Visible | AA | Keyboard focus has a visible indicator in at least one mode. |
| 2.4.11 Focus Not Obscured (Minimum) | AA | A focused component is not entirely hidden by author-created content. |
| 2.5.1 Pointer Gestures | A | Multipoint or path-based gestures have a single-pointer alternative unless essential. |
| 2.5.2 Pointer Cancellation | A | Pointer actions follow the criterion's down-event cancellation, abort, undo or completion rules. |
| 2.5.3 Label in Name | A | Accessible names of controls containing visible text include that text. |
| 2.5.4 Motion Actuation | A | Motion-operated functionality also has conventional controls; motion response can be disabled, subject to exceptions. |
| 2.5.7 Dragging Movements | AA | Author-implemented dragging has a single-pointer alternative that does not require dragging, unless essential or user-agent controlled. Keyboard equivalence alone may not satisfy this. |
| 2.5.8 Target Size (Minimum) | AA | Pointer targets are at least 24 × 24 CSS px or meet a defined spacing/other exception. |

### 2.3 Understandable

| Criterion | Level | Engineering requirement |
|---|---:|---|
| 3.1.1 Language of Page | A | Programmatically identify the page's default human language. |
| 3.1.2 Language of Parts | AA | Identify language changes within content programmatically where required. |
| 3.2.1 On Focus | A | Receiving focus does not trigger an unexpected context change. |
| 3.2.2 On Input | A | Changing a control does not trigger an unexpected context change unless users were advised. |
| 3.2.3 Consistent Navigation | AA | Repeated navigation occurs in the same relative order across a page set, unless user-initiated. |
| 3.2.4 Consistent Identification | AA | Components with the same function are identified consistently. |
| 3.2.6 Consistent Help | A | Repeated help mechanisms occur in the same relative order across a page set, within criterion scope. |
| 3.3.1 Error Identification | A | Automatically detected input errors are identified and described in text. |
| 3.3.2 Labels or Instructions | A | Labels or instructions are provided when user input is required. |
| 3.3.3 Error Suggestion | AA | Provide known correction suggestions unless doing so compromises security or purpose. |
| 3.3.4 Error Prevention (Legal, Financial, Data) | AA | Covered consequential submissions have reversibility, checking/correction, or review/confirmation. |
| 3.3.7 Redundant Entry | A | Previously entered information in the same process is auto-populated or selectable unless re-entry is essential, security-related or invalid. |
| 3.3.8 Accessible Authentication (Minimum) | AA | Do not require a cognitive-function test in an authentication step unless an allowed alternative or assistance mechanism is available, subject to exceptions. |

### 2.4 Robust

| Criterion | Level | Engineering requirement |
|---|---:|---|
| 4.1.2 Name, Role, Value | A | Controls expose correct accessible name, role, state and value; changes are programmatically available. |
| 4.1.3 Status Messages | AA | Status messages can be programmatically determined and announced without focus movement where applicable. |

Maintain a project matrix with criterion, templates/components, implementation evidence, automated check, manual test, assistive technology/browser, result, defect reference, reviewer and date. Mark a criterion not applicable only with a reason tied to its scope.

## 3. Cross-cutting engineering requirements

### 3.1 Semantics and components — MUST
- Use native HTML before ARIA; do not recreate native semantics unnecessarily.
- Keep DOM order aligned with meaningful reading and focus order; CSS rearrangement must not make programmatic sequence misleading.
- Every form control has a persistent programmatic label; placeholder text is not a label.
- Group related inputs with fieldset/legend or equivalent semantics.
- Use real table header relationships; do not use layout tables for page structure.
- Custom widgets implement their complete keyboard pattern, name/role/state/value and announcements.
- Expose status and error feedback programmatically; do not communicate only through color, motion or transient toast.

### 3.2 Keyboard and focus — MUST
- Complete every core journey without a pointer.
- Prefer native links and buttons; avoid positive tabindex.
- Never remove visible focus. Provide a high-contrast focus style.
- Keep focused controls at least partially visible around sticky headers/footers, drawers, dialogs, banners and overlays.
- Manage modal focus entry, containment and return. Never create keyboard traps.
- Escape should close dismissible overlays where appropriate without unexpectedly discarding work.

### 3.3 Responsive layout, text and contrast — MUST
- Test 320 CSS px width and 400% browser zoom for vertically scrolling pages.
- Do not clip text in fixed-height containers. Allow labels, buttons, headings and long tokens/URLs to wrap or remain available.
- Measure contrast in default, hover, focus, selected, error, disabled and other meaningful states.
- Essential meaning is not encoded solely by color, icon, spatial position or sound.
- Text-spacing overrides must not hide controls, overlap content or clip information.

### 3.4 Motion and sensory load — MUST + SHOULD
- Meet 2.2.2, 2.3.1 and 2.5.4 wherever applicable.
- **IWAG SHOULD:** avoid nonessential autoplay, parallax, looping decorative motion, flashing, sudden transitions and sound effects.
- **IWAG SHOULD:** respect the reduced-motion user preference and allow control over nonessential animation.
- 2.3.3 Animation from Interactions is Level AAA, not A/AA. Reduced-motion support is an IWAG recommendation, not a false AA claim.

### 3.5 Forms, errors and authentication — MUST
- Preserve valid input after validation or server errors.
- Identify errors in text, associate messages with controls, and provide an error summary or equivalent navigation for complex forms.
- Explain expected formats before submission; give known safe correction suggestions.
- Avoid repeated entry; use appropriate autocomplete and autofill.
- For consequential actions, provide review/confirm/correct, reversibility or input checking as required.
- Permit password managers and paste. Do not make puzzle CAPTCHA or manual transcription the only login route. Every multi-factor step must have a compliant path.

## 4. Cognitive accessibility and neuroinclusive interaction — SHOULD

This section is an IWAG inclusion baseline informed by W3C COGA supplemental guidance and peer-reviewed research. It is not a claim that every item is a WCAG A/AA criterion or that one interface suits every neurotype.

- Make each page and task purpose clear. Use descriptive titles, meaningful headings, progress indicators for multi-step tasks and current-location cues.
- Use familiar words and consistent interaction patterns. Explain jargon and abbreviations; avoid ambiguous labels, unexplained icons and novelty interactions.
- Put the main point first. Chunk long content into meaningful sections, short paragraphs and steps without withholding information needed for informed decisions.
- Reduce memory demands: preserve entries, show progress and prior choices, provide review screens and avoid requiring users to remember details across pages.
- Reduce avoidable distraction and interruption. Avoid unsolicited pop-ups, unexpected context changes and unnecessary time pressure.
- Make errors understandable and recoverable. Explain what happened and what can be done next; preserve progress.
- Offer user-controlled text size, spacing, contrast and motion options where practical. Make settings reversible and discoverable; do not require diagnosis disclosure.
- Do not assume autistic people, people with ADHD, dyslexia, intellectual, sensory or motor disabilities share the same preferences or abilities.
- Do not infer diagnosis, support needs or cognitive capacity from browsing behavior, writing, device signals or analytics.
- Do not create a diagnosis-based “special mode” as the only accessible route. Core functionality must remain accessible without personalization.

## 5. Disability-inclusive co-design and human validation — SHOULD

Evidence cautions against treating automated audits or expert-only reviews as substitutes for real user participation.

1. Invite people with relevant lived experience to define problems and success criteria, not only test finished screens.
2. Include varied access needs, communication methods, assistive technologies, devices and intersecting experiences. One participant is not a proxy for a population.
3. Ask participants what accommodations they want. Offer accessible materials, flexible pacing, breaks, communication formats and familiar/remote testing environments.
4. Give participants real influence. Record what changed because of their input, disagreements and unresolved barriers.
5. Budget fair compensation and access support as project governance.
6. Use realistic multi-page tasks and complete journeys, not only isolated prototype screens.
7. Measure task completion, comprehension, errors, recovery, time pressure, help requests and reported barriers; do not reduce evaluation to speed or preference ratings.
8. Treat consent as accessible and ongoing. Support the participant's own decision-making; do not presume incapacity from diagnosis.
9. Report participation and influence at an appropriate aggregate level with privacy protections.

Human validation does not itself prove WCAG conformance. Technical conformance does not prove a task is understandable or usable. IWAG needs both.

## 6. Privacy and personalization guardrails

- Do not collect diagnosis, disability status, medical history or other sensitive health information merely to personalize presentation.
- Prefer local, user-controlled accessibility preferences that can be changed or reset without account registration.
- If sensitive data is necessary for a defined research purpose, require documented purpose, informed consent, minimization, access controls, retention/deletion rules, security review and jurisdiction-specific legal review.
- Never use disability or health data for advertising, behavioral targeting, discriminatory ranking or unrelated eligibility decisions.
- Do not infer disability or neurotype from click patterns, time-on-page, typing or device characteristics.
- IWAG is not a diagnostic or treatment service.

## 7. Validation protocol

### Automated/static checks
Use tools to find likely defects, not to declare conformance. Check semantics, accessible names, duplicate IDs, ARIA relationships, form labels, contrast, headings/landmarks, media alternatives and source-level regressions. Manually triage all findings and record false positives/negatives.

### Manual technical checks
- Keyboard-only: complete core journeys with Tab, Shift+Tab, Enter, Space, Escape and widget-appropriate arrow keys.
- Screen readers: test at least one desktop and one mobile screen-reader/browser combination in the supported platform matrix.
- Zoom/reflow: 200% text resize where applicable, 400% browser zoom, 320 CSS px viewport and text-spacing overrides.
- Contrast: inspect all meaningful states.
- Focus: inspect visibility, order, traps, restoration and obscuration.
- Pointer: test target size/spacing, cancellation, gestures and drag alternatives.
- Motion: test pause/stop/hide, reduced motion and device-motion alternatives.
- Forms/authentication: test empty, malformed, boundary, server-rejected and successful states; verify recovery and input preservation.
- Media: inspect captions, transcripts, audio descriptions and alternatives as applicable.

### Human task validation
Recruit participants with access needs relevant to each critical journey. Provide accommodations and do not request unnecessary health information. Use realistic tasks on the actual application or a representative environment. Record completion/correctness, confusion, navigation loss, context changes, errors/recovery, comprehension, assistive technology/device, accommodations and participant-reported barriers. A small qualitative sample is contextual evidence, not population prevalence or universal proof.

## 8. Release acceptance gate

A release is eligible for accessibility acceptance only when:
- [ ] Every applicable WCAG 2.2 Level A criterion maps to affected templates/components and evidence.
- [ ] No known Level A failure remains in a critical journey.
- [ ] Level AA findings are recorded as voluntary enhancements with priority and owner; they are not used to imply an AA conformance claim.
- [ ] Automated findings are manually triaged.
- [ ] Keyboard-only and screen-reader journeys are completed.
- [ ] Reflow, zoom, contrast, focus, pointer, motion, forms and authentication are manually checked where applicable.
- [ ] Critical journeys receive human validation with participants whose access needs are relevant.
- [ ] Findings include criterion/recommendation, impact, reproduction, severity, owner and retest evidence.
- [ ] Exceptions cite the exact normative exception; “hard to implement” is not an exception.
- [ ] No sensitive health/disability data collection or diagnosis inference was introduced without approved purpose and safeguards.
- [ ] Accessibility statement and conformance claim describe tested scope, date, limitations and contact route accurately.

CI/CD may automate repeatable checks, but pipeline status is not the definition of completion. A green pipeline does not establish accessibility; an unrelated red check does not invalidate completed research. Acceptance is based on the evidence above.

## 9. Evidence and sources

### Normative and official guidance
- W3C, [Web Content Accessibility Guidelines (WCAG) 2.2](https://www.w3.org/TR/WCAG22/).
- W3C, [Understanding WCAG 2.2](https://www.w3.org/WAI/WCAG22/Understanding/).
- W3C, [Making Content Usable for People with Cognitive and Learning Disabilities](https://www.w3.org/TR/coga-usable/). Supplemental guidance, not a WCAG Recommendation.
- W3C WAI, [Involving Users in Evaluating Web Accessibility](https://www.w3.org/WAI/test-evaluate/involving-users/).
- W3C, [WCAG-EM 2.0 Note/Editor's Draft](https://www.w3.org/TR/2026/DNOTE-wcag-em-2-20260205/). Verify publication status before treating it as finalized normative guidance.

### Peer-reviewed research
- Raymaker DM et al. (2020), *Development of the AASPIRE Web Accessibility Guidelines for Autistic Web Users*, Autism in Adulthood. [DOI: 10.1089/aut.2018.0020](https://doi.org/10.1089/aut.2018.0020).
- Gartland S et al. (2022), *The State of Web Accessibility for People with Cognitive Disabilities: A Rapid Evidence Assessment*, Behavioral Sciences. [DOI: 10.3390/bs12020026](https://doi.org/10.3390/bs12020026). Review of 45 papers; few convincingly tested intervention effectiveness, so do not overstate efficacy.
- Henni SH et al. (2022), *The experiences, needs and barriers of people with impairments related to usability and accessibility of digital health solutions...*, BMC Public Health. [DOI: 10.1186/s12889-021-12393-1](https://doi.org/10.1186/s12889-021-12393-1). Review of 25 sources; reports barriers in perceivability, operability, navigation, input, understandability and predictability; supports early and ongoing participation. Language and date limits constrain generalization.
- Ara J et al. (2023), *Accessibility engineering in web evaluation process: a systematic literature review*, Universal Access in the Information Society. [DOI: 10.1007/s10209-023-00967-2](https://doi.org/10.1007/s10209-023-00967-2). Review of 92 primary studies.
- Xu Z et al. (2025), *A scoping review of inclusive and adaptive human-AI interaction design for neurodivergent users*. [DOI: 10.1080/17483107.2025.2579822](https://doi.org/10.1080/17483107.2025.2579822). Developing evidence; not universal effectiveness proof.
- Tranter H et al. (2026), *Inclusive design in digital mental health: stakeholders with disabilities must be central to usability testing*, Frontiers in Digital Health. [DOI: 10.3389/fdgth.2026.1833693](https://doi.org/10.3389/fdgth.2026.1833693). Recent evidence on disabled stakeholder involvement; assess context before generalizing.

### Evidence limitations and data boundaries
- Life Sciences literature is not a substitute for WCAG or HCI engineering evidence. Use it to understand people, access barriers and inclusive research; use W3C for normative conformance.
- Evidence is uneven across disability groups, ages, countries, languages and technologies. Reviews may include descriptive work and small qualitative samples.
- ClinicalTrials.gov records describe registered studies, not proof of efficacy or web accessibility.
- CDC PLACES is US adult population-estimate data; do not use it as an Indonesian or global prevalence estimate.
- Europe PMC and PubMed may differ in electronic and issue publication dates. Verify dates, versions, licenses and retraction status per record.

## 10. Life Sciences database run notes

- **Europe PMC:** used to discover and cross-check biomedical, health-services and disability-inclusive design literature. Full-text reuse depends on each article's license.
- **PubMed/PMC:** used to cross-check indexed literature and canonical PMID/PMCID/DOI metadata. A citation record is not itself a full-text license.
- **ClinicalTrials.gov:** queried, but broad condition-based results include treatment and observational studies unrelated to web accessibility. Do not treat these as accessibility evidence; use the registry only for a specifically scoped research-participation or digital-accessibility trial question.
- **CDC PLACES:** provider contract reviewed, but not used for prevalence because it is US-only and no US-specific population question was needed.
- **Data analytics:** no prevalence or population comparison was computed because no suitable connected, scoped dataset was available. Do not manufacture statistics from literature search counts.

## 11. Change control

When WCAG, browser/assistive-technology behavior or research changes:
1. Verify current normative W3C text and publication status.
2. Identify affected criteria and templates.
3. Update this register and validation evidence.
4. Record source, date, scope and uncertainty.
5. Review implementation impact before changing conformance claims.

**Core principle:** WCAG 2.2 Level A is the declared conformance target for this project. Level AA and AAA criteria may be adopted as stronger engineering improvements, but are not the formal target unless a later project decision explicitly changes it. Lived-experience evidence helps IWAG V2 build beyond the technical floor in ways that are understandable, usable and respectful.
