---
name: expressive-web
description: Use whenever a task asks for an award-level, Awwwards or FWA-style, immersive, cinematic, interactive, or "wow" website, landing page, portfolio, campaign or launch microsite, brand experience, or for scroll animation, scroll storytelling, page transitions, smooth scroll, GSAP, Lenis, Three.js or WebGL scenes, cursor effects, kinetic headlines, or sound on the web, and when critiquing why a site feels flat or lifeless. Contains: a first-hand field study of 13 Awwwards Sites of the Day (Oct 2026) with measured stacks, easings, type, and color; the five ingredients that make a site feel alive; a concept-to-mechanic method; motion tokens; a catalog of 28 patterns (smooth scroll, pinned chapters, horizontal tracks, scrubbed objects, camera paths, line and blur reveals, shape masks, clip-path morphs, cursor labels and previews, reveal layers, entry gates, view transitions, color floods, sound, morphing hero objects), each with code, cost, and a reduced-motion and phone fallback; the verified 2026 stack (GSAP, SplitText, Lenis, Three.js, View Transitions, scroll-driven CSS); performance budgets; and a QA method for checking motion in a real browser.
user-invocable: false
---

# Expressive Web

This skill is for sites whose job is to be remembered: launches, brand experiences, portfolios, studios, luxury,
culture, events, the work that wins Site of the Day. It sits on top of the foundations (`layout-composition`,
`typography`, `color`, `accessibility`) and never replaces them. For task flows (checkout, dashboards, docs,
government, health), don't use it: there, motion only confirms actions (`ai-slop` → motion).

What we learned from 13 current winners (`field-study-2026-10.md`): **the effects are not the point.** Every site that
felt alive turned its subject into a way of moving, and spent its boldness on one moment. Eight of the thirteen had no
full 3D scene at all.

## The five ingredients of a site that feels alive

| # | Ingredient | Test | If missing |
|---|---|---|---|
| 1 | **Concept becomes mechanic** | Can you finish "This site is a ___, so scrolling ___"? | Effects with no story. Generic. |
| 2 | **One signature moment** | Would a visitor describe one specific thing afterward? | Five effects, none remembered. |
| 3 | **Continuous response** | Does something answer every input (wheel, pointer, click) within 100 ms? | The page feels dead between actions. |
| 4 | **Choreography** | Do elements enter in a set order, with one house easing and a reason? | Everything fades up as it enters: slop. |
| 5 | **Authored type and real assets** | Is the display face licensed or custom, and are the images of the real subject? | Template look, whatever the motion. |

## Non-negotiable rules

1. **Concept before effects.** Write the concept sentence and its mechanic before choosing any library. The subject
   decides how you move through it: paper morphs into formats, a playhead runs over a track, films become discs, a
   logo becomes terrain. Use the table below, and run the `ai-slop` anti-default procedure.
2. **One signature moment, 2–4 supporting patterns, everything else quiet.** Choose from `pattern-catalog.md`. A
   section that reveals itself just because it entered the viewport is not choreography.
3. **One house easing and one duration scale.** Every winner applied one dominant curve to most of its transitions
   (46–482 elements per site). Use the motion tokens below.
4. **Content lives in the DOM and is visible without JavaScript.** Motion is an enhancement. Text in a canvas has a DOM
   twin, every link is a real link, and nothing waits for an animation to become readable.
5. **Build the reduced-motion path and the phone choreography in the same pass.** They are not cleanup. Only 4 of 12
   measured winners had any reduced-motion CSS. Closing that gap is where we beat them. Phones get their own
   choreography (fewer pins, native scroll, no hover), not a shrunken desktop (`build-and-qa.md` §3–4).
6. **Performance is part of the design.** Budget it before you build: Core Web Vitals "good", 60 fps on a mid-range
   phone, DPR capped at 2, 3D lazy-loaded after first paint, a quality toggle for WebGL (`build-and-qa.md` §4).
7. **Usability is 30% of the Awwwards grade.** Navigation always reachable, no scrolljack on the first screen, gates
   skippable by keyboard, sound off until chosen. Judges reward creativity, but people still need to find the
   contact button (`design-history` → `web-creators-studios-awards.md`).
8. **Watch the motion, don't assume it.** Screenshots show states, not feel. Record or frame-sample the signature
   moment in a real browser, then tune timing with the user. Feel is the part they must judge with you
   (`build-and-qa.md` §6).

## Method: brief to signature site

1. **Subject inventory.** List the subject's object, place, material, ritual, notation, and sense (sound, texture,
   light). Where can the real assets come from?
2. **Concept and mechanic.** Write "This site is a ___, so ___ does ___." Pick from the table or invent one. Check:
   would another client in the category land on the same idea? If yes, go back to step 1.
3. **Choreography map.** Write 5–8 scenes. For each: what's on screen, what moves, the trigger (load, scroll, hover,
   click), the duration, and the handoff to the next scene. Mark the signature moment and the quiet scenes.
4. **Tokens.** Motion (below), type (three voices, `typography`), and color (monochrome + one accent taken from the
   subject, contrast checked in every state, `color`).
5. **Asset plan.** Say what's real (photos, renders, recordings), what's drawn, what's rendered (Blender, for objects
   that must match across states or angles), and what's generated (Higgsfield images, video, 3D, and audio, with an OK
   before spending credits and disclosure per `ai-slop`). Give each asset a file-size budget. Tools and tested recipes
   are in `creative-director` → `references/tool-map.md`.
6. **Prototype the signature moment first,** alone on one page, with draft assets (a Blender render or placeholder
   marked as such) if the real ones don't exist yet. Publish it so the user can open it, and tune easing and timing
   with them before building the rest. A direction delivered only as text is not finished.
7. **Build the site** with fallbacks in the same pass (`pattern-catalog.md` Fallback lines).
8. **QA** with `build-and-qa.md` §6, then the sign-off below.

## Concept → mechanic (precedents from the field study)

| If the subject is… | The mechanic can be… | Precedent |
|---|---|---|
| An archive or a sequence | Vertical wheel drives a horizontal or infinite track | Brandon Yasin (3.1) |
| Sound or music | A playhead crossing a timeline; items "hit" like beats | Maria Vasilyeva (3.13) |
| A physical medium (discs, books, cards, film) | The content becomes the object; flip, spin, or stack it | A24 (3.7) |
| A place or building | The camera travels through it; its shape becomes the image mask | Belgrade Arbor (3.5) |
| A logo or mark with geometry | The mark becomes the world or the terrain | Overworld (3.10) |
| A property (format, size, shape, rhythm) | Scroll changes that property (clip-path morph) | Format (3.3) |
| A choice with color identity | Choose one item; its color floods into the next view | Cartier (3.6) |
| A craft with a hidden layer | The pointer or scroll erases the surface to show the layer under it | Cartier (3.6) |
| A vehicle, tool, or pointer | One object travels with scroll and is the progress bar | Nick Ho (3.11) |
| A profession with its own notation | The site is drawn in that notation (drafting, DAW, pit wall) | Heron (3.12) |
| An abstract service (agency, AI, finance) | One morphing hero object changes form per chapter | Emotion (3.2) |
| Typography or craft as the product | Mixed-face statements; each list item in its own face | Signal-A (3.4) |
| An event or culture with strong photos | Hard-cut photo cycling plus one collision lockup | OFFF (3.9) |

## Motion tokens (defaults; tune per brand)

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` (expo-out) | Things that enter or respond. The dominant curve on most winners. |
| `--ease-in-out` | `cubic-bezier(0.77, 0, 0.18, 1)` (quart in-out) | Things that travel A → B: page transitions, carousels, camera moves. |
| `--ease-ui` | `cubic-bezier(0.32, 0.72, 0, 1)` | Micro feedback: hover, press, toggles. |
| `--dur-micro` | 150–250 ms | Hover, press, cursor label. |
| `--dur-ui` | 300–450 ms | Menus, panels, list swaps. |
| `--dur-reveal` | 600–900 ms | Headline lines, image reveals, section handoffs. |
| `--dur-scene` | 1.2–2 s | Gate exit, color flood, camera move between chapters. |
| Stagger | 40–120 ms per item | Lines 80, words 40–60, cards 100–120. Cap the total at about 1 s. |
| Scroll scrub | `scrub: 0.5–1` | Smooths scroll-linked motion without lag. |
| Follow lerp | 0.08–0.15 per frame | Cursor followers, camera damping. |

**Mood multipliers:** luxury and culture are slower (Cartier about 0.9 s, Maria Vasilyeva 1.4 s), and sport and
automotive are shorter and harder (Forge, Nick Ho 0.5–0.6 s with steep ease-out). Change the duration and keep the
curve.

## Ambition tiers (choose before building)

| Tier | Stack | Typical signature | Precedents | Cost |
|---|---|---|---|---|
| 1. Crafted DOM | CSS + Lenis (+ GSAP) | Type reveals, masks, clip-path morph, pinned chapters, cursor labels | Format, Signal-A, Forge, Cartier, OFFF, Brandon Yasin | Days |
| 2. DOM + light canvas | Tier 1 + 2D canvas or one small WebGL effect | Grain, reveal layer, image distortion, playhead | Forge, Maria Vasilyeva, Heron | 1–2 weeks |
| 3. Real-time world | Three.js scene behind the DOM | Camera path, morphing particles, 3D objects | Emotion, Belgrade Arbor, Overworld, A24, Nick Ho | Weeks; needs a 3D asset pipeline |

Start at the lowest tier that delivers the concept. Tier 3 needs real 3D assets (modeled, scanned, or generated with
Higgsfield `generate_3d`) and a quality toggle.

## Sign-off: the alive test (in addition to the creative-director checklist)

- [ ] Concept sentence and mechanic written, and they pass the "another client" test.
- [ ] Exactly one signature moment; supporting patterns ≤ 4; no fade-up-on-enter on every section.
- [ ] One house easing; durations from the token scale.
- [ ] All content and navigation in the DOM, visible with JS disabled; links are links; headings in order.
- [ ] Reduced-motion path tested (emulated in DevTools): no scroll-linked motion, no parallax, no auto-play.
- [ ] Phone choreography tested at 390 px: native scroll, no hover-only info, CTA reachable (`mobile-proportions.md`).
- [ ] Budgets met: LCP, INP, CLS "good"; no long frames during the signature moment; DPR ≤ 2; quality toggle on 3D.
- [ ] Gate (if any) is keyboard operable and skippable, with sound off by default and a visible mute toggle.
- [ ] Contrast checked in every animated state, including dim reading-reveal text and type over moving images.
- [ ] The signature moment was watched running (recording or frame samples) and its timing approved by the user.

## Reference files — when to open

| File | Open when |
|---|---|
| `references/field-study-2026-10.md` | Setting the direction of an expressive site; needing a precedent for a mechanic; checking what winners measurably share (stack, easing, type, color, chrome); explaining to a client why a direction works. |
| `references/pattern-catalog.md` | Choosing and building the signature and supporting patterns: what, when, code, cost, fallback, and precedent for 28 techniques. |
| `references/build-and-qa.md` | Setting up the stack (verified versions and browser support), base Lenis + GSAP setup, the reduced-motion and phone strategy, performance budgets, loading, audio policy, and the QA method for motion in a real browser. |

Related: `visual-styles` → `immersive-3d-webgl.md` and `kinetic-typography.md` (style recipes),
`accessibility` → `motion-media-and-forms.md` (WCAG 2.2.2, 2.3.1, 2.3.3), `ai-slop` (motion tells),
`design-history` → `web-creators-studios-awards.md` (how juries score).
