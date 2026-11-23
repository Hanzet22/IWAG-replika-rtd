# IWAG V2 Graphics and Motion Policy

## 1. Baseline

The website is an information and event-guide experience, not a graphics benchmark. Content, navigation, forms and essential actions must remain usable with JavaScript disabled and without Canvas, WebGL, WebGPU or WebAssembly.

Rendering preference order:
1. Semantic HTML and CSS.
2. Static SVG for vector illustrations and diagrams.
3. Canvas 2D for explicitly activated, bounded custom graphics.
4. WebGL2 or WebGPU only for a justified workload after measurement.

## 2. Current optional graphics lab

- SVG is rendered by default.
- Canvas is activated only after a user action.
- The optional Canvas preview is capped at 30 fps.
- The animation stops when the document is hidden, the lab leaves the viewport, or reduced-motion is enabled.
- The preview does not create a WebGL rendering loop.
- WebGL2 is only capability-probed and its context is released immediately.
- WebGPU is only checked for API exposure; no adapter or device is requested.

## 3. Motion requirements

- No autoplay or continuous decorative animation on initial page load.
- Respect both `prefers-reduced-motion` and the user's explicit reduced-motion setting.
- User controls must be visible, keyboard-operable and reversible.
- Stop animation work when the document is hidden or component is offscreen.
- Avoid flashes, rapid luminance changes, parallax, forced scroll effects and motion-only communication.
- Provide a static representation of every visual state.

## 4. Java and browser boundary

Java is not a native browser animation runtime. Browser animation belongs to CSS, JavaScript/TypeScript, SVG, Canvas, WebGL or WebGPU. The inspected V1/V2 source inventory contains no Java files, and a JVM runtime would add no justified value to this static site. Java is therefore excluded unless a separate build-time or service requirement is identified.

## 5. Low-end device evaluation matrix

Before setting numeric performance budgets, collect baselines on representative low-end and mid-range Android devices. Include:
- initial and repeat navigation;
- cold cache and warm cache;
- constrained network and CPU throttling;
- reduced-motion enabled and disabled;
- graphics lab unused, activated, paused and offscreen.

Record:
- LCP, INP and CLS;
- JavaScript and CSS transfer sizes;
- image and font transfer sizes;
- long tasks and main-thread blocking;
- memory/heap observations;
- Canvas frame cadence and dropped frames;
- GPU context/device creation and release;
- battery and thermal behavior where measurement is available.

Do not treat desktop Lighthouse scores as a substitute for real-device evaluation. Do not invent a performance budget before a baseline exists.
