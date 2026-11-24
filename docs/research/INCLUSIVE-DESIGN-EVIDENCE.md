# IWAG V2 — Inclusive Design Evidence Notes

**Research snapshot:** 24 November 2026  
**Purpose:** Translate relevant disability-inclusion and accessibility research into cautious design and evaluation requirements for a public-information website.  
**Boundary:** This is supporting research, not a clinical guideline, legal opinion, WCAG conformance report, or substitute for direct participation by disabled users.

## 1. Evidence hierarchy and applicability

The sources below span systematic reviews, empirical HCI work, practice guidelines and participatory research. They do not all test public event websites. Apply each source only to the question it actually studied:

- Research on accessible surveys informs wording, context and response options, but is not automatically a tested website-wide checklist.
- Healthcare informed-consent research informs clarity, communication choice, time and autonomy, but does not establish the legal consent requirements for this website.
- Digital-health and eHealth co-design reviews inform the process of involving users; healthcare-system findings should not be represented as direct website performance measurements.
- Public health website accessibility research is closer to public-information websites, but its context and sample still limit generalisation.

## 2. Practical design requirements

### 2.1 Content and language

- Use short, direct sentences and one main idea per sentence.
- Prefer concrete wording over idioms, figurative expressions, vague pronouns, double negatives and unexplained abbreviations.
- Define technical terms where they first appear; add a glossary or contextual explanation for terms users may not know.
- State dates, time zones, locations, status and uncertainty explicitly. Avoid vague time words such as “soon” when a date is not known.
- Preserve meaning when simplifying; do not change legal or event facts merely to make the text shorter.
- Provide a clear summary before long detail, but keep the complete source information available.

Evidence: accessible survey adaptation work identifies confusing vocabulary, long or convoluted sentences, figurative language, unclear context and response ambiguity as practical barriers. It recommends community review, cognitive interviews and pilot testing rather than assuming one wording works for everyone. [[Nic20b]](https://doi.org/10.1089/aut.2019.0074)

### 2.2 Choice and control

- Keep user preferences such as theme, text size, spacing and reduced motion under explicit user control.
- Do not make one visual, sensory or communication preference the default assumption for every disabled person.
- Offer more than one way to understand key information where practical: concise text, headings, examples, captions and meaningful alternative text.
- Do not force a person to disclose a diagnosis to use basic accessibility features.
- Avoid dark patterns, forced time pressure and unnecessary steps.

Evidence: accessible consent literature supports adapting communication and information formats to the individual, allowing time and checking understanding. Support persons should be optional and should not replace the person's own choices. This evidence comes from healthcare consent contexts and should be transferred to websites cautiously. [[Dun23]](https://doi.org/10.1136/bmjqs-2023-016113) [[Bec25]](https://doi.org/10.1089/aut.2024.0263)

### 2.3 Predictability and interaction

- Keep navigation, page titles, headings and control labels consistent.
- Make keyboard focus visible and preserve logical focus order.
- Ensure skip links, landmarks, headings and link purpose are understandable without visual layout.
- Provide clear feedback after actions; never rely only on colour, animation, hover or sound.
- Respect reduced-motion preferences and avoid autoplay.
- Test actual interaction states, not only static HTML.

Evidence: participatory research guidance recommends advance materials, clear agendas, predictable communication, time to process, multiple participation modes and accessible feedback. These are process recommendations, not proof that one interface works for all people. [[Nic19]](https://doi.org/10.1177/1362361319830523)

### 2.4 Co-design and evaluation

- Involve disabled people in the design and review process, not only as final-stage testers.
- State whether participation is consultation, collaboration or shared decision-making.
- Make participation accessible: provide materials in advance, allow asynchronous feedback and offer clear ways to comment.
- Record what feedback changed and what did not change, with reasons.
- Do not treat one participant as representative of an entire diagnosis or disability group.
- Include different communication and support preferences; avoid assuming all users want a support person or the same response format.

Evidence: participatory guidelines emphasise clear roles, power-sharing, communication choice, trust and feedback loops. A scoping review of inclusive eHealth design found 17 eligible studies from 10,639 screened records; user involvement was often stronger during design/development than during implementation, showing a continuing evidence gap. [[Nic19]](https://doi.org/10.1177/1362361319830523) [[vanCalis23]](https://doi.org/10.2196/45819)

## 3. Evaluation plan for IWAG V2

### Automated and source-level checks

- Route coverage and canonical metadata.
- Language metadata and translation fallback.
- Missing image alternatives, duplicate IDs, missing titles and landmarks.
- Local link and fragment resolution.
- Reduced-motion CSS, forced-colors and high-contrast styles.
- Security and dependency diagnostics kept separate from accessibility findings.

### Manual evaluation

- Keyboard-only navigation on representative page types and every interactive preference control.
- Screen-reader checks with a declared browser/OS/assistive-technology baseline.
- Mobile TalkBack checks for navigation, headings, labels and focus.
- Zoom and reflow at 200% and 400% where applicable.
- Contrast and non-text contrast review for normal, hover, focus, visited, high-contrast and forced-colors states.
- Motion review with reduced-motion enabled.
- Content review for plain language, translations, status dates and meaningful link names.
- User review with people who have varied access needs, with accessible participation methods.

WCAG-EM 2.0 recommends defining the evaluation scope and accessibility-support baseline, exploring the product, selecting a representative sample that covers common views, essential functionality and technologies, and including a random sample. If the product is small enough, evaluate all views instead of sampling. The current automated diagnostic does not perform this full methodology. Source: https://www.w3.org/TR/wcag-em-2/

## 4. Evidence limitations

- The accessible survey paper draws on two closely related partnerships and explicitly warns against assuming all autistic adults or people with intellectual disability share the same preferences.
- The accessible informed-consent review synthesises 23 heterogeneous studies; much of the evidence is UK-based, and people with higher support needs are underrepresented.
- The inclusive eHealth scoping review found limited evidence on implementation and organisational context.
- The digital accessibility study of public health authority websites concerns a specific public-health context, not event information websites.
- An empirical cognitive-engagement study involved 20 participants; it is useful as a signal, not a universal causal estimate.
- None of these studies establishes that the IWAG V2 site conforms to WCAG or satisfies any particular law.

## 5. Selected references

1. Nicolaidis C, et al. *Creating Accessible Survey Instruments for Use with Autistic Adults and People with Intellectual Disability: Lessons Learned and Recommendations.* Autism in Adulthood. 2020. https://doi.org/10.1089/aut.2019.0074
2. Dunn M, et al. *Equitable and accessible informed healthcare consent process for people with intellectual disability: a systematic literature review.* BMJ Quality & Safety. 2024. https://doi.org/10.1136/bmjqs-2023-016113
3. Beck K, et al. *Guidelines for the Creation of Accessible Consent Materials and Procedures: Lessons from Research with Autistic People and People with Intellectual Disability.* Autism in Adulthood. 2025. https://doi.org/10.1089/aut.2024.0263
4. Nicolaidis C, et al. *AASPIRE Practice-Based Guidelines for the Inclusion of Autistic Adults in Research as Co-Researchers and Study Participants.* Autism. 2019. https://doi.org/10.1177/1362361319830523
5. van Calis JFE, et al. *Toward Inclusive Approaches in the Design, Development, and Implementation of eHealth in the Intellectual Disability Sector: Scoping Review.* Journal of Medical Internet Research. 2023. https://doi.org/10.2196/45819
6. Dror AA, et al. *United by Hope, Divided by Access: Country Mapping of COVID-19 Information Accessibility and Its Consequences on Pandemic Eradication.* Frontiers in Medicine. 2021. https://doi.org/10.3389/fmed.2020.618337
7. Ekin M, et al. *Impact of web accessibility on cognitive engagement in individuals without disabilities: Evidence from a psychophysiological study.* PLOS ONE. 2025. https://doi.org/10.1371/journal.pone.0328552
8. W3C. *WCAG Evaluation Methodology (WCAG-EM) 2.0.* 2026. https://www.w3.org/TR/wcag-em-2/

## 6. Release decision

Use these findings to guide content, interaction and testing priorities. Do not claim that the site is “neurodivergent certified”, medically validated, disability-approved or WCAG-conformant. A meaningful evaluation requires transparent methods and participation by people with varied access needs.
