# IWAG V2 Performance Measurement Plan

## Goal

Keep core content, navigation and essential actions responsive on low-end and mid-range mobile devices. Do not optimize only for desktop Lighthouse scores.

## Primary outcome metrics

| Metric | What it indicates | Measurement |
|---|---|---|
| Largest Contentful Paint (LCP) | Main content becomes visible | Per-route lab runs and representative device runs |
| Interaction to Next Paint (INP) | Responsiveness to user interaction | Field-like interaction traces and lab interaction scenarios |
| Cumulative Layout Shift (CLS) | Visual stability during load and interaction | Per-route layout-shift recording |

Use the 75th percentile where there is a valid, representative sample. Do not claim field performance from one desktop run or one CI build.

## Driver metrics

- Initial JavaScript transfer and parsed/executed bytes.
- CSS transfer and generated rule count.
- Font, image and media transfer sizes.
- Number of requests and critical-path requests.
- Hydrated island count and hydration strategy.
- Long tasks and main-thread blocking time.
- Image decode time and layout shifts.
- Canvas frame cadence, dropped frames and animation duration.
- GPU context/device creation and resource release.
- Memory/heap observations and battery/thermal behavior where measurable.

## Guardrails

- All primary content and navigation must work without JavaScript.
- No graphics API is required to view or use the site.
- Reduced-motion preferences must suppress animation.
- Animation must stop when hidden or offscreen.
- No new tracking or analytics is introduced just to measure performance.
- No accessibility or readability regression may be traded for a faster score.
- A route that becomes smaller but harder to navigate is not an optimization success.

## Device and network matrix

Measure at least one low-end and one mid-range Android device, with browser/version recorded. Include:
- cold cache and warm cache;
- normal and constrained network;
- CPU throttling;
- first page load and repeat navigation;
- reduced-motion enabled and disabled;
- optional graphics unused, activated, paused and offscreen.

Use the same route and interaction scenario when comparing revisions.

## Target-setting policy

Do not invent numeric project-specific budgets before collecting a baseline. After the first representative measurements:
1. record baseline distributions;
2. identify the largest contributors;
3. set per-route budgets for JS, CSS, media and main-thread work;
4. define a regression tolerance and review process;
5. repeat measurements on the same device matrix.

Core Web Vitals guidance may be used as an external reference, but the project must also report actual target-device results and access-task guardrails.

## Privacy

Do not add analytics, session replay, fingerprinting or behavioral profiling. Prefer local lab testing and user-supplied performance traces. Any future real-user measurement requires a verified operator, privacy review, minimization and clear user notice.


## Decision-oriented KPI model

Primary outcome KPIs:
1. **Core Web Vitals pass rate by route/device cohort:** share of representative page loads meeting the current good thresholds for LCP, INP and CLS. This is a quality signal, not the sole definition of success.
2. **Essential task completion rate:** proportion of moderated test participants who can find event dates, venue, travel guidance and policy status without assistance. Record by task and access needs; do not infer disability from telemetry.
3. **Task completion time:** time to complete those same information-finding tasks, interpreted alongside success and user-reported confidence.

Drivers:
- initial JS/CSS/font/image bytes;
- number of hydrated islands and main-thread long tasks;
- number of requests and critical-path resources;
- memory use and optional graphics frame cadence.

Guardrails:
- no regression in keyboard or screen-reader task completion;
- no route or essential content requires JavaScript/GPU/WASM;
- no motion preference is overridden;
- no privacy-invasive instrumentation is added;
- no readability, translation or content accuracy trade-off is accepted for a faster metric.

Targets remain unset until representative baseline measurements and moderated task observations exist. Do not optimize for a single composite score or reward faster completion when users are failing tasks.


## First CI output baseline (24 November 2026)

At commit `06c8a9dfb4bb47a370176c48b9adf9b27db99570`, the Rust Active Compiler reported:

| Output measure | Baseline |
|---|---:|
| Generated HTML pages | 298 |
| Generated CSS files | 1 |
| Generated JavaScript files | 4 |
| Generated images | 0 |
| Generated fonts | 5 |
| Generated files | 318 |
| Raw output footprint | 2,460,461 bytes |
| Local HTML/CSS references checked | 7,111 |
| Broken local references | 0 |
| Required root/locale routes checked | 30 |
| CI build duration | 4,600 ms |

This is a build-runner baseline, not a browser/device benchmark. The raw footprint is not compressed transfer size. It does not measure LCP, INP, CLS, CPU, memory, battery, thermal behavior or real-user task completion. Repeat the measurements after meaningful changes and on representative Android devices.
