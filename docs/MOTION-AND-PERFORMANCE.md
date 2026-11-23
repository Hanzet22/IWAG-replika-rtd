# Motion and performance policy

Updated: 2026-11-23

## Design rule

The default experience is quiet, readable, and stable. Motion is optional decoration, never a carrier of essential information or a requirement for navigation.

## Motion requirements

- No automatically playing decorative video, parallax, animated background, particle field, or continuous scroll effect.
- No flashing content or rapid high-contrast transitions.
- Honour `prefers-reduced-motion: reduce` and remove nonessential transitions and animations.
- Any future user-started animation must provide a visible pause/stop control and must not hide information while paused.
- Stop animation work when a component leaves the viewport or the document becomes hidden.
- Avoid smooth scrolling, auto-advancing carousels, hover-only controls, and motion-triggered navigation.
- Provide captions and transcripts for relevant audio/video; do not require speech to use the site.

## Low-end device budgets

Project targets, not WCAG conformance criteria:
- Prefer zero JavaScript on informational pages.
- Keep initial route JavaScript below 30 KB compressed when a feature requires it.
- Keep critical CSS near or below 20 KB compressed.
- Prefer initial page transfer below 250 KB excluding user-requested media.
- Use system fonts by default and local subsetted fonts only when justified.
- Set intrinsic media dimensions; lazy-load below-the-fold images.
- Avoid large blur filters, backdrop filters, oversized shadows, unbounded DOM lists, unnecessary canvas, and persistent GPU contexts.
- Defer optional enhancements until interaction or idle time.
- Avoid background polling and third-party scripts in the public shell.

## GPU policy

WebGL and WebGPU are optional enhancement paths only. A static/CSS fallback must remain available. Capability detection is not a guarantee that the device can sustain a workload. Respect reduced motion and provide a user-visible way to disable the effect. Release GPU resources when the enhancement is removed or the page is left.

## Accessibility and neurodiversity

- Use predictable layouts and consistent controls.
- Avoid unexpected content movement, autoplay, flashing, and unnecessary animation.
- Keep information available in text; do not rely on sound, colour, gesture, or timing alone.
- Keep headings descriptive, paragraphs short, and actions explicit.
- Do not force timed interactions or speech-based contact.
- Let users choose a stable theme and retain the preference locally without creating an identity profile.

## Performance evidence

A future release should be evaluated on representative low-end Android hardware and constrained networks. Lighthouse or automated audits are useful signals, not substitutes for manual keyboard, screen-reader, TalkBack, zoom, and real-device review.
