# Neuroinclusive Life-Sciences Evidence Map

**Project:** IWAG V2  
**Updated:** 2026-11-24  
**Purpose:** Evidence map for inclusive, accessible public-facing technology and health-information design. This is research documentation, not clinical guidance.

## 1. Scope

For this work, "people with special needs" is operationalized as **neurodivergent people and people with cognitive, intellectual, developmental, sensory, and other disabilities**. The scope includes autistic people, people with ADHD, dyslexia, dyspraxia and related neurodevelopmental profiles where the cited research covers them.

This is a research scope, not a label to assign to any individual. No diagnosis, ability, preference, or support need should be inferred from a person's behavior, device use, or browsing. These populations are heterogeneous; diagnosis labels do not predict one universal interface preference.

The project should distinguish:
- life-sciences and health-services evidence about people, health access, measurement, and research participation;
- HCI/accessibility evidence about interaction, information architecture, and interface evaluation;
- standards and normative guidance, which are not the same as empirical evidence.

## 2. Evidence synthesis

A new Undermind deep literature search reviewed the scholarly landscape and returned **303 relevant papers**. Its synthesis identifies several recurring findings:

1. **Inclusion is a research-validity issue as well as an equity issue.** Disability-related eligibility exclusions, inaccessible procedures, and failure to record disability status can make evidence less representative and limit evaluation of who benefits.
2. **Accessible procedures are preferable to categorical exclusion.** The literature supports individualized access planning, supported decision-making, flexible communication, and transparent justification of eligibility criteria. It does not support assuming that a diagnosis automatically removes decision-making capacity.
3. **Consent is a process, not merely a signature.** Accessible information, additional processing time, advance materials, multiple communication formats, and optional support people can help participants understand and decide. Support should facilitate the person's own decision rather than replace it.
4. **Measurement requires adaptation and validation.** Self-report, proxy report, and standard instruments are not interchangeable. Wording, response scales, administration mode, and support needs can affect validity; adapted measures should be tested with the people expected to use them.
5. **Participation should include power-sharing.** Disabled and neurodivergent people should be involved as co-researchers, advisors, and participants across design, recruitment, data collection, interpretation, and dissemination—not only consulted at the end.
6. **The evidence base is uneven.** Much of the health and clinical literature focuses on intellectual/developmental disability and autism in high-income countries. Evidence is comparatively thinner for ADHD, dyslexia, dyspraxia, intersectional populations, and low- and middle-income settings. Findings from one group or country must not be generalized automatically.

The review mapped guidance and studies; it did not establish that every proposed accommodation has experimentally proven effectiveness. Treat recommendations as evidence-informed design requirements to evaluate, not universal prescriptions.

## 3. Full-text papers reviewed

- [Jo26] Grace Jo et al., *Equitable inclusion of people with disabilities in clinical trials: a scoping review* (2026), BMJ Open. DOI: https://doi.org/10.1136/bmjopen-2025-108550. Rapid scoping review of 69 documents published 2019–2025. It maps eight areas: planning, recruitment, consent, data collection, analysis, reporting, ethics oversight, and disabled people as researchers/stakeholders. The review did not formally grade the evidence and includes guidance/grey literature, so its recommendations are not comparative-effectiveness findings.
- [Nic20b] C. Nicolaidis et al., *Creating Accessible Survey Instruments for Use with Autistic Adults and People with Intellectual Disability: Lessons Learned and Recommendations* (2020), Autism in Adulthood. DOI: https://doi.org/10.1089/aut.2019.0074. Describes academic-community partnerships and iterative adaptation of measures. Emphasizes co-design, plain language where appropriate, definitions/examples, visual response supports, and psychometric evaluation.
- [Dun23] M. Dunn et al., *Equitable and accessible informed healthcare consent process for people with intellectual disability: a systematic literature review* (2023), BMJ Quality & Safety. DOI: https://doi.org/10.1136/bmjqs-2023-016113. Relevant to consent barriers and supports; individual decision-making and accessible information must remain central.
- [Fle21] S. Fletcher-Watson et al., *Inclusive Practices for Neurodevelopmental Research* (2021), Current Developmental Disorders Reports. DOI: https://doi.org/10.1007/s40474-021-00227-z. Reviews inclusive research models, community partnership, intersectionality, empowerment, and knowledge exchange.
- [Man23] M. Manalili et al., *From Puzzle to Progress: How Engaging With Neurodiversity Can Improve Cognitive Science* (2023), Cognitive Science. DOI: https://doi.org/10.1111/cogs.13255. Argues that cognitive science should engage neurodiversity as cognitive diversity rather than treating it only as deficit or dysfunction.
- [Dwy22] P. Dwyer, *The Neurodiversity Approach(es): What Are They and What Do They Mean for Researchers?* (2022), Human Development. DOI: https://doi.org/10.1159/000523723. Discusses the scope and contested meanings of neurodiversity approaches and recommends studying individuals together with their contexts, strengths, challenges, and lived experience.

Other high-relevance references identified by the review include [Plo22], [Mcd22], [Koo22], [Nic19], [Sim24], [Rio16], [Cam23], and [Sha23]. Their metadata and DOI links are preserved in the Undermind workspace.

## 4. Data-source map

| Source | Best use | Important limits |
|---|---|---|
| Undermind Life Sciences Literature | Semantic discovery, citation-aware deep reviews, full-text PDF reading, paper organization | Coverage depends on indexed scholarly corpus and PDF access; search relevance is not a quality rating |
| Europe PMC | Biomedical literature, PubMed/MEDLINE records, PMC full text, preprints, article annotations, DOI/PMID/PMCID, license and retraction metadata | Full-text reuse depends on each article's license; metadata/abstract coverage differs from full-text availability |
| PubMed / PMC | Authoritative biomedical citation and abstract search; PMC open-access full text | Search syntax and indexing can return records whose electronic and issue publication dates differ; check record dates carefully |
| ClinicalTrials.gov | Trial registry records, eligibility, locations, status, outcomes, and posted results | Registry records are not proof of effectiveness; posted results may be absent, incomplete, or not peer-reviewed |
| CDC PLACES | U.S. county/place/tract/ZCTA modeled adult estimates, including disability and cognition measures | U.S.-only, adults aged 18+, modeled estimates; not a global dataset and not individual-level information |
| Orphadata | Rare-disease nomenclature, epidemiology, and gene associations when a rare-disease question is explicitly in scope | Not a general neurodiversity database; do not conflate neurodivergence with rare disease |
| Open Targets / NCBI Gene / UniProt | Molecular or target-level biomedical questions where a specific gene, protein, or disease mechanism is relevant | Not appropriate for inferring a person's diagnosis, preferences, or support needs |

### Provider capabilities discovered

Firecrawl Alexandria's life-sciences catalogue exposes structured capabilities for:
- Europe PMC: `publications/search`, `publications/get`, `publications/full_text`, `publications/annotations`
- PubMed/PMC: `publications/search`, `publications/article`, `publications/full_text`, `publications/related`
- ClinicalTrials.gov: `clinical-trials/search`, `clinical-trials/study`, `clinical-trials/study_dates`
- CDC PLACES: `prevalence/search`, including `DISABILITY`, `COGNITION`, `HEARING`, `MOBILITY`, `SELFCARE`, and `VISION` measures
- Orphadata: `rare-diseases/search`, `rare-diseases/epidemiology`, and `rare-diseases/genes`
- Open Targets, NCBI Gene, UniProt, GEO, gnomAD, and other molecular datasets for appropriately scoped biomedical questions

The CDC PLACES data source is U.S.-specific. Do not use its values as estimates for Indonesia or a global population. For a global or Indonesian estimate, locate a suitable source with a matching geography, age range, definition, and methodology before calculating or comparing prevalence.

## 5. Implementation implications for IWAG V2

These are design hypotheses and evaluation requirements, not diagnosis-based personalization rules:

- Keep core content understandable and navigable without JavaScript.
- Use consistent page structure, descriptive labels, clear headings, predictable navigation, and recoverable errors.
- Offer user-controlled adjustments where they help: text size, spacing, contrast, motion, and content presentation. Make changes reversible and provide reset.
- Avoid autoplay, nonessential motion, flashing, and sensory-heavy effects; respect reduced-motion settings.
- Provide multiple ways to find information, including search and clear category navigation.
- Support keyboard use, visible focus, zoom/reflow, screen readers, plain-language summaries, and accessible alternatives for complex content.
- Do not force one “neuroinclusive mode” or assume that all autistic, ADHD, dyslexic, or intellectually disabled users want the same settings.
- Evaluate with disabled and neurodivergent participants, including people with different communication and support needs. Record recruitment, sample, task, and limitations; do not substitute automated checks or simulated disability for participant evaluation.

## 6. Data analytics boundary

The Data analytics capability is suited to analyzing structured datasets, metrics, and reproducible statistical work when a relevant data source is available. It is not itself a biomedical literature index or life-sciences database. No suitable connected population dataset was available for this research run, so no prevalence calculation or cross-country statistical comparison is claimed. Use Data only when a defined, source-backed dataset is available and the analysis question specifies its population, geography, measures, and time period.

## 7. Research workspaces

- Neuroinclusive website/accessibility evidence (existing): https://app.undermind.ai/projects/5fd9c991-5e52-43b6-b939-69b359b5aa51?path=%2FIWAG%20V2%20Neuroinclusive%20Design%20System%20Evidence
- Life-sciences and disability inclusion evidence (new): https://app.undermind.ai/projects/4cebd149-585b-4eb9-ab48-9b57a1610903?path=%2FNeurodivergent%20and%20Disability%20Inclusive%20Life%20Sciences%20Research

## 8. Guardrails and open questions

- Never infer or assign a diagnosis from website interactions, device signals, writing style, or observed behavior.
- Do not treat group-level studies as an individual's profile or preference.
- Do not use health or disability data for advertising, ranking, or behavioral targeting.
- Do not collect sensitive health or disability data on the public site without a verified purpose, consent model, data minimization plan, retention policy, and legal review.
- Do not publish medical claims or treatment advice from this design evidence.
- Before adding country-level prevalence claims, verify the exact source, population definition, age range, geography, year, and uncertainty.
- Real accessibility validation still requires disabled participants and assistive-technology evaluation; research synthesis does not establish WCAG conformance or usability.

## 9. Accessibility engineering synthesis (2026-11-24)

A dedicated engineering specification translates the evidence into an implementation and validation baseline:
- [ACCESSIBILITY-ENGINEERING-SPEC.md](./ACCESSIBILITY-ENGINEERING-SPEC.md) — WCAG 2.2 A/AA coverage register, component requirements, cognitive-accessibility recommendations, co-design protocol, privacy guardrails, manual/automated validation, and release acceptance criteria.

Additional cross-source evidence screened during this run:
- Raymaker DM et al. (2020), *Development of the AASPIRE Web Accessibility Guidelines for Autistic Web Users*. DOI: https://doi.org/10.1089/aut.2018.0020.
- Gartland S et al. (2022), *The State of Web Accessibility for People with Cognitive Disabilities: A Rapid Evidence Assessment*. 45 included papers; the authors caution that few studies convincingly tested intervention effectiveness. DOI: https://doi.org/10.3390/bs12020026.
- Henni SH et al. (2022), scoping review of disability-related digital health usability and participation. 25 included sources; reported barriers span perceivability, operability, navigation, input, understandability and predictability. DOI: https://doi.org/10.1186/s12889-021-12393-1.
- Ara J et al. (2023), systematic review of accessibility engineering in web evaluation, covering 92 primary studies. DOI: https://doi.org/10.1007/s10209-023-00967-2.
- Xu Z et al. (2025), scoping review of inclusive/adaptive human-AI interaction design for neurodivergent users. DOI: https://doi.org/10.1080/17483107.2025.2579822.
- Tranter H et al. (2026), disability stakeholder involvement in digital mental-health usability testing. DOI: https://doi.org/10.3389/fdgth.2026.1833693.

### Database query limitations

PubMed's focused title/abstract query returned 46 records (20 on the first page); record relevance still requires screening. Europe PMC's broader query included tangential results. A broad ClinicalTrials.gov condition search returned many clinical/observational studies unrelated to website accessibility; these records are not accessibility evidence and must not be presented as such. CDC PLACES was not used for prevalence because its estimates are US-adult/geography specific, not Indonesian or global. No Data Analytics population statistic was calculated because no appropriate connected dataset was available.

### Interpretation rule

WCAG 2.2 A/AA is the normative conformance floor. Life Sciences and HCI evidence informs user needs, participation, cognitive access, and validation methods. COGA is supplemental guidance, not a separate WCAG success-criteria set. User testing and automated tools complement each other; neither alone proves both conformance and usability.
