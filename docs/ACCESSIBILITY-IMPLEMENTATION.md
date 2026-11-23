# Accessibility implementation plan

Updated: 2026-11-23

## Conformance target

The stated target is WCAG 2.2 Level A only. This document does not claim the preview conforms. Accessibility is evaluated per template and content type, not by framework choice.

## Implemented in the source foundation

- Semantic document structure and a main landmark.
- Skip link to the main content.
- Native links, buttons, and select controls.
- Document language metadata per locale.
- Visible keyboard focus styling.
- Text labels for theme and language controls.
- Text-based route/status information.
- Reduced-motion stylesheet.
- Forced-colors support.
- System font fallback and responsive layout.
- No audio, autoplay video, WebGL, or WebGPU requirement in core pages.

## Required before release

- Keyboard-only review of every route and interactive component.
- Screen-reader review with at least one desktop screen reader and Android TalkBack.
- Heading hierarchy, accessible names, link purpose, form labels, errors, and status-message review.
- Contrast and non-colour-only meaning review for every theme.
- Zoom/reflow review, including narrow viewport and long translated strings.
- Caption and transcript review for all published media.
- Deaf and non-speaking access: text contact route, written questions, no speech-only registration or support, clear response expectations.
- Event-specific access details: step-free access, quiet space, accessible toilets, seating, captioning/interpreting availability, and support contact only where verified.
- Review with disabled users or representative accessibility specialists before a conformance statement.

## Beyond the formal target

The product may adopt additional usability improvements such as larger touch targets, stronger contrast, visible focus, and generous text spacing. These are product quality choices and must not be used to silently relabel the conformance target as WCAG Level AA.

## Reporting

A public accessibility statement must identify the target, known limitations, last review date, supported contact alternatives, and a process for reporting barriers. Do not publish a contact address until it is confirmed and monitored.
