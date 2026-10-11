# Intro storyboard and UX contract — 10 concepts

Each opening is a three-second, tap-led miniature ritual — not a floating cover or a generic fade-in. The one actionable element is always centred; its editable action label and prompt sit directly below it. Context remains in the safe top band, and only the pair's names become the focal point before the page hand-off.

Concept 03 (Geometric Camera) and 09 (Astrolabe Promise) are retained as approved. The other eight were rebuilt around a different material and physical cause.

| # | Physical cause | 0–1s | 1–2s | 2–3s |
|---:|---|---|---|---|
| 01 | **Prism + wedding rings** | A small prism and two independent ring tracks are visible. | The prism locks; both rings travel toward the same point from opposite arcs. | Their overlap creates a caustic flash; the names hold at the point of light before the site opens. |
| 02 | **Cyanotype contact print** | A specimen sheet rests between two botanical press rails. | Rails compress then release; a dew-led blue contact print develops around the plants. | A specimen label stabilises and the names resolve in its clear centre. |
| 03 | **Geometric focus lock** | Perspective planes hold an oblique viewfinder. | Planes straighten, crosshair locks and aperture reaches focus. | A short exposure makes the names the first readable frame. |
| 04 | **Origami washi** | A single square of fibred washi waits with two visible crease lines. | Its two halves fold on their own axes and become opposing crane wings. | The quiet negative space between wings becomes the names. |
| 05 | **Wax-resist marbling** | A wax seal holds pigment away from the paper centre. | The seal splits and coloured marbling cells are pulled outward by surface tension. | The dry centre becomes readable; the names arrive inside the completed marbling orbit. |
| 06 | **Tide-pool mirror** | A shell rests on a still oval tide pool. | The shell opens and concentric currents expand from it. | The pool turns like a mirror; its reflection clears for the names. |
| 07 | **Super 8 film transport** | A fixed film gate, take-up reels and an exposed film frame are visible. | The actual strip moves in stepped sprocket increments through the stationary gate. | A shutter flicker and small burn-through land on the final frame, then reveal the names. |
| 08 | **Giấy dó projection theatre** | Three handmade-paper panels sit deliberately out of registration around a lightbox. | The lamp focuses and the panels slide into one precise printed stage. | Sen / trầu cau cut-outs align under the beam; the names appear on the lit paper. |
| 09 | **Astrolabe conjunction** | Two stars sit apart on plotted orbits. | Each travels its own path to one coordinate. | Their conjunction lights the names and page hand-off. |
| 10 | **Seoul metro through rain** | A wet city window holds neon, drops and a distant train line. | A metro train travels behind the glass; its luminous band pulls the fog sideways. | A clear ribbon remains at the centre for the names before the site opens. |

## Responsive contract

- One real keyboard/touch button stays at the visual centre in all ten openings: 68px desktop, 72px mobile, with `touch-action: manipulation`.
- The title never competes with a navigation bar. Portrait mobile centres the final title; the top reading band respects safe-area insets and short landscape trims only supporting prompt text.
- All intro wording remains editable in `#wedding-config`: `introKicker`, `introAction`, `introPrompt`, and `introReveal`.
- The runtime starts hand-off at 2.64s and completes it at 3.0s. `prefers-reduced-motion` skips choreography and presents the final readable title state.
