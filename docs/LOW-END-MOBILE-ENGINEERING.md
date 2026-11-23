# Low-End Mobile Engineering Decisions

**Scope:** IWAG V2 static multilingual event and information website  
**Updated:** 24 November 2026  
**Status:** Evidence-informed implementation guidance; target-device measurements remain pending

## 1. Engineering conclusion

The primary performance strategy is to avoid work rather than move the same work to a different runtime. IWAG V2 should deliver complete semantic HTML first, use the smallest amount of JavaScript needed for real interactions, keep DOM mutation bounded, and make graphics opt-in. Rust is a build controller, not a browser runtime. WebAssembly, Canvas, WebGL and WebGPU are not performance defaults.

## 2. What the research supports

### Mobile cost is not only network transfer

Mobile browser performance studies find that device capability and browser computation can dominate the experience on constrained phones. Mobile browsing can be particularly sensitive to CPU and memory pressure [Nej16, Das18, Qaz20]. Field studies also show that real mobile networks introduce variability that a single laboratory run cannot represent [Raj19].

### Reduce unnecessary JavaScript, but preserve behavior

Muzeel's evaluation on 200 pages and three Android phones found that removing unobserved JavaScript functions improved page-load time by 25–30% in its tested setup, with gains varying by page, device and network [Kup22]. The paper also reports cases where automated interaction discovery missed behavior. SlimWeb reduced JavaScript resources selectively, with conservative handling of unknown scripts and a user recovery path; its reported results came from its own page corpus, proxy/plugin architecture and low-end devices [Cha21].

**IWAG decision:** do not blanket-strip scripts or blindly tree-shake runtime behavior. Keep the site static by construction, then audit the small set of actual scripts and preserve every tested user interaction and locale-specific route.

### JavaScript can cost memory outside the JS heap

JS Capsules found that much JavaScript-attributed memory was outside V8 itself, including compositor and allocator memory, and that dynamic JS/DOM interactions had substantially higher memory costs than static DOM interactions in its measured Chrome/Android setup [Nas23].

**IWAG decision:** prefer server/build-time HTML generation, keep interactive islands small, avoid repeated DOM reconstruction, and measure total process memory where tooling permits rather than relying only on JavaScript heap snapshots.

### Energy optimization requires controlled experiments

A review of 44 mobile-web energy studies found CPU use, wireless communication and display behavior to be recurring energy factors. It did not pool a universal percentage saving because devices, browsers, measurement tools and workloads differed too much [Dor23b].

**IWAG decision:** bound animations, stop work when hidden/offscreen, respect reduced motion, avoid unnecessary network requests, and do not claim battery savings without a controlled device experiment.

## 3. Application rules

1. **HTML first:** dates, venue, travel guidance, policy status and article content must be present without JavaScript.
2. **Progressive enhancement:** preferences and optional graphics may enhance the page, but the navigation and reading path remain functional without JavaScript.
3. **Hydrate by exception:** use Vue only where static HTML and small native controls are insufficient. Choose hydration timing according to user value; do not hydrate below-the-fold decoration on initial load.
4. **Bound DOM work:** avoid large client-rendered lists and repeated layout-affecting mutations.
5. **No automatic GPU startup:** do not create WebGL contexts or request WebGPU adapters during initial page load.
6. **WASM on demand:** load the contrast module only after a direct user request, with a JavaScript fallback.
7. **Typography fallback:** use font-display: swap, preload only genuinely critical fonts, and keep system-font fallbacks.
8. **Responsive assets:** if images are introduced, provide intrinsic dimensions, appropriate responsive sources and lazy loading for below-the-fold content.
9. **Network restraint:** avoid third-party scripts, remote fonts, tracking and unnecessary origin connections.
10. **Accessible interaction:** native links, buttons, disclosure widgets, visible focus, keyboard access and reduced-motion support are part of performance quality—not optional polish.

## 4. Implemented in this continuation

- Repaired seven literal escaped-newline sequences in the global stylesheet's breadcrumb block so the selectors are parsed as separate CSS rules.
- Added a native details/summary mobile navigation disclosure for viewports at or below 54rem; it works without JavaScript and retains explicit current-page semantics.
- Preserved the current URL query string and fragment when the user changes locale.
- Extended the Rust-invoked output validator to inspect local srcset candidates and local HTML fragment references.
- Added generation of .iwag-build/route-manifest.json from the actual generated HTML routes, outside the public dist/ directory.

## 5. Validation still required

- Check the mobile disclosure at 320 CSS px, 200% and 400% zoom, keyboard-only, and Android TalkBack.
- Confirm the desktop navigation remains visible above the breakpoint and the mobile disclosure replaces it below the breakpoint.
- Review all local fragment links and srcset candidates in the generated output report.
- Measure representative low-end and mid-range Android devices under cold/warm cache and constrained networks.
- Capture LCP, INP, CLS, JavaScript transfer/parse/execute cost, CPU, memory and battery/thermal observations where available.
- Compare user task completion for finding event dates, venue, transport and policy status.

## 6. Sources

- [Astro Islands architecture](https://docs.astro.build/en/concepts/islands/) — static HTML by default and component-level client hydration.
- [Astro styling and CSS](https://docs.astro.build/en/guides/styling/) — scoped and global CSS behavior.
- [MDN Web Performance best practices](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Performance/Best_practices).
- [web.dev: Techniques to make a web app load fast, even on a feature phone](https://web.dev/articles/load-faster-like-proxx) — older but useful measured low-resource case study; not a current device benchmark.
