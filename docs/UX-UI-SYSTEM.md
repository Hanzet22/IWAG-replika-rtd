# IWAG V2 Global UX/UI System

## 1. Product principles

1. **Content first:** essential event and visitor information is semantic HTML, not a canvas or JavaScript-only view.
2. **Predictability:** navigation, labels, page hierarchy and interaction outcomes remain consistent.
3. **User control:** themes, accent, text scale, contrast, spacing and motion are explicit, reversible preferences.
4. **Progressive enhancement:** the core site remains readable and navigable without optional graphics APIs.
5. **Low-resource defaults:** small client payloads, local assets, bounded motion and no unnecessary runtime dependencies.
6. **No assumed user profile:** preferences are not inferred from diagnosis, behavior or device fingerprinting.

## 2. Global information architecture

Primary navigation:
- Home
- Discover / Events
- Plan your visit
- Community
- Updates

Secondary navigation lives in page content and footer. Legal drafts are separated from operational event information. Nested pages expose breadcrumbs so users can move to a parent topic without relying on browser back history.

The root route renders the English homepage directly. It does not show a language-choice interstitial or timed redirect. Language changes are explicit user actions and retain the current route where a matching localized route exists.

## 3. Page templates

- **Home:** event summary, date and venue facts, key routes, short FAQ and latest updates.
- **Landing pages:** concise purpose statement followed by task-oriented cards.
- **Event index:** event cards with clear date, location and status.
- **Event detail:** title, summary, structured date/venue/format/access information and source-aware registration status.
- **Article/update:** publication date, summary, readable article body, related routes and historical-context warnings where needed.
- **Policy draft:** unmistakable draft status, scope, sections and unresolved operator/legal questions.
- **Reference guide:** task-based headings, numbered steps, tables that remain horizontally navigable, and source links.
- **404:** direct recovery path to the homepage without a timed redirect.

## 4. Layout and responsive behavior

- One centered content system with a wider site frame and a readable text measure.
- Flexible navigation that wraps instead of requiring hover or a desktop-only menu.
- Cards use auto-fit grids and collapse to one column on narrow screens.
- Tables and preformatted content have bounded horizontal overflow.
- Controls use a minimum target height of 44 CSS pixels where practical.
- Content must reflow at narrow widths and browser zoom without requiring two-dimensional page scrolling, except for genuinely tabular data.
- No fixed-height text containers that clip enlarged content.

## 5. Type and visual hierarchy

- Alan Sans is the body/UI family; Amarna is reserved for display headings.
- System sans-serif fallbacks are always declared.
- Fonts are self-hosted and use `font-display: swap`.
- Text scale and content spacing can be increased without changing the underlying content.
- Heading hierarchy follows document structure; visual size never substitutes for semantic heading levels.
- Meaning is never communicated by color alone.

## 6. Interaction and accessibility

- A visible-on-focus skip link moves to the main content.
- Primary and footer navigation use semantic landmarks and explicit accessible names.
- The active route uses `aria-current="page"`.
- Nested routes expose an ordered breadcrumb trail with the current page identified.
- All controls have visible labels or accessible names.
- Focus indicators remain visible across themes and forced-colors mode.
- Reduced motion follows both the operating-system preference and the explicit site preference.
- Details/summary disclosures are native, keyboard-operable controls.
- User preferences are local display settings, not account or behavioral analytics.
- Every optional graphic has a static SVG or text fallback.

## 7. Motion and graphics

- No autoplay, decorative animation loop or GPU context on initial load.
- Canvas preview starts only after a direct user action and is capped at 30 fps.
- It stops when hidden, offscreen or when reduced motion is enabled.
- WebGL2 capability checks release their context.
- WebGPU detection does not request an adapter or device.
- CSS Houdini typed properties are progressive enhancements; unsupported browsers receive ordinary CSS values.
- Avoid flashing, rapid luminance changes, parallax and motion-only status communication.

## 8. Performance model

- Astro static output is the default.
- Vue is used only for scoped interactive islands.
- Tailwind, Panda and StyleX are build-time styling tools; they do not justify shipping three runtime styling systems.
- JavaScript is loaded only for actual interactions.
- Images and fonts are local where licensing and provenance permit.
- No third-party analytics, session replay or advertising scripts are introduced.
- Numeric budgets are set only after representative device baselines are measured.

## 9. Validation gates

A route is not considered complete until it has:
- content and link review;
- keyboard-only navigation;
- screen-reader and Android TalkBack review;
- zoom and narrow viewport reflow review;
- light/dark/high-contrast/reduced-motion review;
- localization and document-language review;
- asset provenance and meaningful alternative-text review;
- low-end and mid-range Android performance measurements;
- user evaluation with people who have varied access needs.

The current branch establishes shared foundations and templates; it is not yet a complete route-by-route validation or WCAG conformance claim.
