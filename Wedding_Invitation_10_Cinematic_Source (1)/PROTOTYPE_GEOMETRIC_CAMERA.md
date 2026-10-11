# Prototype 03 — Geometric Camera

This is the quality-bar prototype for the next rework pass. The design is built around one clear idea: the invitation is a camera viewfinder that resolves the couple's names into focus.

## 3-second storyboard

| Time | Visual state | UX meaning |
|---|---|---|
| 0.0–0.25s | A quiet teal-black field, an oblique perspective grid and one gold viewfinder hold the screen. Context is centred above the visual; the focus control is centred in the lower safe zone. | The visitor understands one visual system and one action. |
| 0.25–1.4s | The visitor presses the focus control. Planes dolly and straighten; the frame locks; the crosshair holds rather than spinning. | One physical action produces one understandable response. |
| 1.4–2.64s | The aperture reaches focus and creates one short exposure. The names are the first frame that develops. | The emotional message has a clean stage after the mechanical action. |
| 2.64–3.0s | The final exposure fades directly into the invitation body. | The intro and site feel like one sequence. |

## Layout contract

- Desktop: context sits in a centred top reading band; the viewfinder is the centre of gravity; the control stays bottom-centre.
- Portrait mobile: the grid and viewfinder remain in the visual centre; context stays in the top safe band; the control has a 60px hit target in the bottom safe area.
- Short landscape: the grid is reduced, while the context and control retain their vertical separation.
- The action label and prompt are outside the decorative button, so editable text never inherits an absolute position from a motif.

## What changed from the old version

- “L & N” is no longer the oversized primary title; the couple's names are exposed only after the focus action.
- The old collection of diamond/perspective shapes is replaced by one frame, one aperture and one crosshair.
- The CTA now says `Bấm để khóa nét`, which describes the interaction instead of a generic camera click.
- Animation uses a controlled dolly, lock and exposure sequence rather than a float or door-like opening.
