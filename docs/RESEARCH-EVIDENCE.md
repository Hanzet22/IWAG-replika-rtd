# IWAG V2 Research Evidence

**Research date:** 23 November 2026  
**Purpose:** Inform a greenfield, multilingual community-event information website with low-end device support and user-controlled accessibility.

## 1. Neuroinclusive and cognitive accessibility

An existing Undermind literature review in the IWAG V2 research workspace searched a broad scholarly corpus and returned 322 relevant candidates. Its summary was based on abstracts and metadata; it was not a full-text appraisal of all 322 papers.

Key sources:

- [Development of the AASPIRE Web Accessibility Guidelines for Autistic Web Users (2019)](https://doi.org/10.1089/aut.2018.0020) — community-based participatory design and evaluation; supports involving autistic users rather than assuming a universal preference.
- [The State of Web Accessibility for People with Cognitive Disabilities: A Rapid Evidence Assessment (2022)](https://doi.org/10.3390/bs12020026) — review of interventions and lived barriers; supports combining standards with user involvement and evaluation.
- [Impact of animated objects on autistic and non-autistic users (2022)](https://doi.org/10.1145/3510458.3513007) — evidence relevant to limiting irrelevant animation and offering user control; sample and context limitations matter.
- [Accessible Web Design for Older Adults: Challenges and Solutions (2025)](https://doi.org/10.1145/3763243) — systematic review of barriers, improvements and evaluation approaches.
- [Designing for Colour Vision Deficiency: A Scoping Review (2025)](https://doi.org/10.1145/3663547.3746370) — highlights redundant encoding and the limits of relying on contrast ratios or simulation alone.
- [Beyond (Type)Face Value: A Systematic Literature Review of Typography Legibility and Readability (2026)](https://doi.org/10.34314/nm4n3852) — indicates that no single typeface or size is best for everyone and familiarity may matter.

Implementation implications:
- stable navigation, clear labels, visible focus and recoverable errors;
- calm defaults with explicit, reversible user controls;
- no automatic diagnosis or behavior-based personalization;
- text scaling, spacing and theme controls;
- redundant status cues beyond color;
- meaningful image alternatives and semantic structure;
- testing with people with varied access needs.

These findings do not establish one universal design for ADHD, autism, photosensitivity, color-vision differences, low vision or aging. Do not describe any palette or layout as universally suitable for a diagnosis.

## 2. Motion and graphics performance

Firecrawl's indexed research corpus surfaced:

- [A Cross-Device and Cross-OS Benchmark of Modern Web Animation Systems (2026)](https://doi.org/10.3390/jimaging12010045) — compares DOM/CSS, SVG, Canvas and WebGL animation under varying object counts and devices. Its abstract reports that DOM-based approaches remain stable at lower object counts, Canvas handles larger scenes, and WebGL scales better for very large scenes. Treat this as workload-specific evidence, not a universal ranking.
- [JavaScript Dead Code Identification, Elimination, and Empirical Assessment (2023)](https://arxiv.org/abs/2308.16729) — supports removing unused JavaScript to reduce transfer and execution costs.
- [The Web for Under-Powered Mobile Devices: Lessons learned from Google Glass (2015)](https://arxiv.org/abs/1507.01677) — illustrates how complexity can worsen load time and energy use on constrained hardware; device context is dated but the constraint remains relevant.
- [Web Performance with Android's Battery-Saver Mode (2020)](https://arxiv.org/abs/2003.06477) — supports measuring under CPU throttling and battery-constrained conditions.

Implementation implications:
- HTML/SVG first; Canvas/WebGL/WebGPU only when a measured use case warrants them.
- no initial GPU contexts, animation loops or decorative autoplay;
- stop work when offscreen and release graphics resources;
- reduce JavaScript and unused dependencies;
- test under CPU throttling and constrained network conditions;
- use static fallbacks and user-activated enhancements.

## 3. Compiler and styling integration evidence

Official documentation and package metadata reviewed:

- [Astro Vue integration](https://docs.astro.build/en/guides/integrations-guide/vue/) and [Astro Islands](https://docs.astro.build/en/concepts/islands/) support static HTML with separately hydrated interactive components.
- [Panda CSS for Astro](https://panda-css.com/docs/get-started/astro) documents the `@pandacss/vite` integration, generated styling and source transforms.
- [StyleX Vite integration](https://stylexjs.com/docs/learn/installation/vite) documents compile-time StyleX CSS extraction into Vite output.
- [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4) documents its Vite integration and build-time CSS generation.
- Current pinned CSS package versions selected for the branch: Panda CSS 2.6.0 and StyleX 0.19.2. Package versions and peer compatibility must be rechecked during dependency updates.

## 4. Evidence limitations

- Literature search results include abstracts and metadata; full-text appraisal was not completed for every paper.
- One benchmark does not establish the best renderer for every device, browser, GPU or animation workload.
- Device-level performance must be measured on the actual target matrix.
- WCAG guidance is necessary but does not prove cognitive accessibility or universal usability.
- Research findings inform hypotheses and design decisions; they do not replace participatory evaluation.
