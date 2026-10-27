# Expressive Web Pattern Catalog

> **Scope:** The techniques that make award-level sites feel alive. For each one: what it is, when the brief earns it, how to build it, what it costs, the reduced-motion and phone fallback, and where we saw it.
> **Last verified:** 2026-10 (library APIs: see `build-and-qa.md` §1 for versions and support dates).
> **Used by:** ui-designer, creative-director, art-director, design-critic

## How to use this file

- Choose **one signature pattern** (the moment people will describe) and **two to four supporting patterns**. Five
  signature patterns on one page is noise (`SKILL.md` rule 3).
- Every pattern here has a **Fallback** line. It is not optional. Build the fallback in the same pass as the pattern,
  inside `gsap.matchMedia()` or `@media (prefers-reduced-motion: reduce)` (`build-and-qa.md` §3).
- Code assumes the base setup in `build-and-qa.md` §2 (Lenis synced to GSAP ScrollTrigger, fonts loaded before
  splitting). Plain CSS or vanilla JS is used where it is enough.
- "Seen in" points to `field-study-2026-10.md` entries (§3.x).
- **Cost** uses three levels. **Low** is CSS or a few lines of JS with no layout cost. **Medium** is GSAP or a canvas,
  needing care on phones. **High** is WebGL, large assets, or a custom renderer, needing a performance budget and a
  quality toggle.

Index: A. Scroll (1–7) · B. Type (8–12) · C. Image and shape (13–18) · D. Cursor and hover (19–22) ·
E. Entry, transition, sound, time (23–28)

---

## A. Scroll

### 1. Smooth scroll with inertia
- **What:** wheel input is eased (lerped) so the page glides and decelerates. This is the "expensive feel" floor on
  10/13 sites.
- **When:** any expressive site with scroll-linked motion. Skip it for long reading, docs, or app UI.
- **Build:** Lenis, synced to ScrollTrigger (`build-and-qa.md` §2). Keep native scrolling (Lenis does). Never build a
  virtual scroller that breaks find-in-page, anchors, or the scrollbar unless the whole site is a canvas.
- **Cost:** Low.
- **Fallback:** Lenis 1.3.26+ turns itself off under reduced motion (`respectReducedMotion`, default true); on older
  versions, don't start it. Touch devices keep native momentum (Lenis default).
- **Seen in:** most entries.

### 2. Pinned chapter
- **What:** a section sticks while its content changes (steps, counter "01 / 03"), then releases.
- **When:** a sequence of 3–5 steps or chapters that belong together. Never pin the first screen and hide the
  navigation (NN/g scrolljacking finding, `visual-styles` → `immersive-3d-webgl.md`).
- **Build:** prefer CSS `position: sticky` inside a tall wrapper. Drive progress with a ScrollTrigger on the wrapper
  (`scrub: true`), or with CSS `animation-timeline: view()` as enhancement (not Baseline yet; `build-and-qa.md` §1).
- **Cost:** Low to Medium.
- **Fallback:** under reduced motion, unpin and stack the chapters as normal sections, all visible.
- **Seen in:** Forge 3.8, Nick Ho 3.11.

### 3. Vertical wheel → horizontal track
- **What:** scrolling down moves a row of items sideways, sometimes as an infinite loop.
- **When:** the content is a sequence or archive (projects, collections, timeline), and there are at least 6 items.
- **Build:** pin a wrapper and tween the track's `x` to `-(track.scrollWidth - innerWidth)` with `scrub: 1`. For an
  infinite loop, duplicate the items and wrap `x` with `gsap.utils.wrap`. Keep each item a real link in DOM order.
- **Cost:** Medium.
- **Fallback:** on reduced motion and on touch screens narrower than 768 px, use a native horizontal scroller
  (`overflow-x: auto; scroll-snap-type: x mandatory`) or a vertical list.
- **Seen in:** Brandon Yasin 3.1, A24 3.7 (as a 3D carousel), Maria Vasilyeva 3.13 (playhead).

```js
const mm = gsap.matchMedia();
mm.add("(prefers-reduced-motion: no-preference) and (min-width: 768px)", () => {
  const track = document.querySelector(".track");
  gsap.to(track, {
    x: () => -(track.scrollWidth - innerWidth),
    ease: "none",
    scrollTrigger: { trigger: ".track-wrap", pin: true, scrub: 1,
      end: () => "+=" + (track.scrollWidth - innerWidth), invalidateOnRefresh: true },
  });
});
```

### 4. Scroll-scrubbed object
- **What:** one object travels or transforms in exact sync with scroll (a car drives down the calendar, a playhead
  moves along a track). The object *is* the scroll indicator.
- **When:** the subject has a vehicle, tool, or pointer (a car, a pen, a needle, a ball). This is the strongest cheap
  signature pattern.
- **Build:** ScrollTrigger with `scrub: 0.5–1` on transform only (`y`, `x`, `rotation`), or `motionPath` along an SVG
  path. Use a `<video>` scrubbed by `currentTime` only with all-keyframe encoding (otherwise it stutters).
- **Cost:** Low to Medium.
- **Fallback:** a static object at its final position.
- **Seen in:** Nick Ho 3.11, Maria Vasilyeva 3.13.

### 5. Camera path through a scene
- **What:** scroll moves a 3D camera through a world, and each chapter frames a different view.
- **When:** the subject is a place or object worth exploring (a building, a product, a brand world). It must earn its
  weight (`immersive-3d-webgl.md`).
- **Build:** Three.js. Store chapter camera poses (position plus target) and interpolate with a scrubbed timeline
  (`scrub: 1`). Damp per frame (`lerp 0.06–0.12`). Keep all text in the DOM over the canvas.
- **Cost:** High.
- **Fallback:** under reduced motion, cut between chapter stills (rendered images) with a crossfade ≤ 200 ms. Low
  quality mode: DPR 1, no post-processing.
- **Seen in:** Emotion 3.2, Belgrade Arbor 3.5, Overworld 3.10 (mouse drift instead of scroll).

### 6. Reading reveal (word-by-word scrub)
- **What:** a large paragraph starts dim, and words brighten in reading order as you scroll.
- **When:** one manifesto or positioning paragraph per page, 20–60 words. Never on body text.
- **Build:** split into words, set base `opacity: 0.25` (keep contrast ≥ 3:1 for large text even in the dim state, so
  it stays readable), and tween to 1 with `stagger` under a scrubbed ScrollTrigger (`start: "top 80%"`,
  `end: "bottom 40%"`).
- **Cost:** Low.
- **Fallback:** full opacity, no split.
- **Seen in:** Belgrade Arbor 3.5.

### 7. Progress indicator
- **What:** a thin bar, chapter counter, or moving object that shows where you are.
- **When:** any page with pinned or horizontal sections, which hide the scrollbar's meaning.
- **Build:** `scaleX` driven by ScrollTrigger `onUpdate: self => bar.style.transform = \`scaleX(${self.progress})\``, or
  CSS `animation-timeline: scroll(root)`.
- **Cost:** Low.
- **Fallback:** keep it. It's information, not decoration. Just don't animate it.
- **Seen in:** Forge 3.8, Belgrade Arbor 3.5, Nick Ho 3.11.

---

## B. Type

### 8. Line mask reveal
- **What:** each line of a headline slides up from behind an invisible mask.
- **When:** the hero headline and chapter titles. Not every heading, because a reveal on every section is a slop tell
  (`ai-slop` → motion).
- **Build:** split into lines with masks (GSAP SplitText `mask: "lines"`) after fonts load. Then
  `gsap.from(lines, { yPercent: 110, duration: 0.9, ease: "expo.out", stagger: 0.08 })`. Re-split on resize
  (`autoSplit`). SplitText's default `aria: "auto"` keeps the accessible name on the parent, but it drops nested link semantics,
  so never split text that contains links (`build-and-qa.md` §1).
- **Cost:** Low.
- **Fallback:** text visible at rest, no split. Text must never depend on JS to become visible.
- **Seen in:** Emotion 3.2, Forge 3.8, Nick Ho 3.11.

### 9. Blur-to-sharp word assembly
- **What:** words appear one by one, each starting small, transparent, and blurred, then resolving to sharp.
- **When:** cinematic, luxury, and automotive heroes, used once per page.
- **Build:** split words, then `from { opacity: 0, filter: "blur(12px)", scale: 0.9 }`, 0.8–1.2 s, `expo.out`,
  stagger 0.12–0.2. `filter: blur` is expensive: limit it to one line of large type and remove the filter at the end.
- **Cost:** Medium (paint cost).
- **Fallback:** opacity-only fade ≤ 200 ms, or none.
- **Seen in:** Forge 3.8, Cartier 3.6 (whole image blur-to-sharp).

### 10. Mixed-face statement
- **What:** one sentence set in two or three typefaces (condensed serif, heavy grotesk, mono), so the type itself
  carries the brand.
- **When:** studios, portfolios, and editorial brands where typographic skill is the product. Needs a type system, not
  random switching: assign each face a meaning (for example, serif for the claim and grotesk for the proof).
- **Build:** inline `<span class="f-serif">` and similar. Align to the grid. Keep the sentence readable as plain text
  for screen readers (no visual-only words).
- **Cost:** Low. Licensing for three faces (`typography` → licensing).
- **Fallback:** none needed.
- **Seen in:** Signal-A 3.4, Emotion 3.2 (italic word), Cartier 3.6 (italic articles).

### 11. Edge-to-edge wordmark
- **What:** the brand name set so it spans the full viewport width, cropped by nothing.
- **When:** the hero or the footer of a brand with a strong name. Pairs with tiny metadata.
- **Build:** fit with JS (measure at 100 px and scale `font-size` to `innerWidth / width * 100`) or SVG text with
  `textLength`. Don't use `vw` font-size alone, because the width varies by face.
- **Cost:** Low.
- **Fallback:** none. On phones, check that the word still reads at ~390 px wide; stack or abbreviate if not.
- **Seen in:** Format 3.3, OFFF 3.9.

### 12. Marquee
- **What:** an infinite horizontal band of text or logos.
- **When:** sparingly, and only for a brand wordmark or a real live feed. Logo tickers and news-style bars read as AI
  slop (`ai-slop` → components).
- **Build:** duplicate the content and use a CSS `@keyframes` translateX of −50%. Pause on hover and focus. An
  accessible pause control is required if it runs longer than 5 s (WCAG 2.2.2, `accessibility`).
- **Cost:** Low.
- **Fallback:** static row.
- **Seen in:** Signal-A 3.4 (wordmark in alternating styles).

---

## C. Image and shape

### 13. Shape mask from the subject
- **What:** images are cut into one shape taken from the subject (facade cell, product silhouette, logo geometry),
  reused everywhere.
- **When:** whenever the subject has a distinctive shape. This is the single most reliable "it belongs to this brand"
  device.
- **Build:** SVG `<clipPath clipPathUnits="objectBoundingBox">` from the real geometry, applied with
  `clip-path: url(#shape)`, or a CSS `polygon()`. Animate the mask, not the image, for reveals.
- **Cost:** Low.
- **Fallback:** none needed; it's static.
- **Seen in:** Belgrade Arbor 3.5, Format 3.3.

### 14. Clip-path morph between shapes
- **What:** a frame changes shape as you scroll (rectangle to circle to triangle).
- **When:** the subject is about form, format, or transformation.
- **Build:** tween `clip-path` between polygons **with the same number of points** (pad the circle as a 32–64-point
  polygon), or use `circle()`/`inset()` within one function type. Use a scrubbed ScrollTrigger.
- **Cost:** Low to Medium.
- **Fallback:** the final shape, static.
- **Seen in:** Format 3.3.

### 15. Curtain or wipe handoff
- **What:** one section lifts, slides, or wipes off to reveal the next one, instead of the next one simply scrolling
  up.
- **When:** at a change of mood (dark to light, product to people), at most 2–3 times per page.
- **Build:** the next section is `position: sticky` underneath, and the current one animates
  `clip-path: inset(0 0 100% 0)` scrubbed. Or use CSS `view()` timelines.
- **Cost:** Low.
- **Fallback:** normal stacking.
- **Seen in:** Belgrade Arbor 3.5.

### 16. Blurred echo background
- **What:** the same photo appears twice: sharp in a card, and enlarged and blurred as the full-bleed background.
  Depth and color harmony without new assets.
- **When:** product chapters with one strong image each.
- **Build:** background `<img>` with `filter: blur(40px) brightness(0.6)` and `transform: scale(1.2)` (to hide blurred
  edges). Or pre-blur the asset at build time: cheaper on phones.
- **Cost:** Low with a pre-blurred asset, Medium with a live `filter`.
- **Fallback:** none needed.
- **Seen in:** Forge 3.8.

### 17. Image distortion on hover or scroll (WebGL)
- **What:** images ripple, bend, or shift RGB as you hover or scroll fast (velocity-driven).
- **When:** art and fashion portfolios where image feel matters, and only if it fits the subject (water, fabric,
  sound).
- **Build:** a Three.js or OGL plane per image synced to its DOM rect, with a shader uniform fed by scroll velocity or
  pointer. Keep the DOM `<img>` for accessibility and LCP, and fade it out once the GL plane is ready.
- **Cost:** High.
- **Fallback:** plain DOM image. Disable it on touch and under reduced motion.
- **Seen in:** Emotion 3.2 (headline refraction).

### 18. Grain and noise overlay
- **What:** a subtle moving film grain over everything, which kills the sterile CG and flat-UI feel.
- **When:** dark, cinematic, and luxury stages.
- **Build:** cheap version: a fixed `::after` with an SVG `feTurbulence` data URI at `opacity: 0.04–0.08`, stepping
  `background-position` with `steps(6)` at about 8 fps. A canvas noise shader only if already in WebGL.
- **Cost:** Low (CSS), Medium (canvas).
- **Fallback:** a static grain.
- **Seen in:** Forge 3.8.

---

## D. Cursor and hover

### 19. Contextual cursor label
- **What:** a small label follows the pointer and says what a click will do ("CHOOSE A STONE", "DISCOVER", "PLAY").
- **When:** when the click target is an image or 3D object with no visible text. It replaces missing affordance; it
  never replaces the accessible name.
- **Build:** a fixed element following the pointer with lerp (`x += (targetX - x) * 0.15` per frame) and
  `pointer-events: none`. Text changes on `pointerenter` of `[data-cursor="Discover"]`. Keep the system cursor visible
  or use a high-contrast custom one.
- **Cost:** Low.
- **Fallback:** hidden on touch (`@media (hover: none)`). The label text also exists as the element's accessible name.
- **Seen in:** Cartier 3.6, Signal-A 3.4.

### 20. Cursor-following preview in lists
- **What:** hovering a row in a text list shows that item's image near the pointer, swapping per row.
- **When:** project, product, or menu lists where text-first is the right layout but images sell.
- **Build:** one fixed preview element. On row `pointerenter`, swap its `src` (preload all) and move it with lerp.
  Add a small rotation from the pointer velocity for life.
- **Cost:** Low.
- **Fallback:** on touch, show a thumbnail inside each row.
- **Seen in:** Signal-A 3.4, Overworld 3.10 (image band behind the row).

### 21. Reveal layer under cursor or scroll
- **What:** the pointer or scroll erases the top image to show a second layer (sketch under product, past under
  present, X-ray).
- **When:** the subject has a meaningful hidden layer (craft drawing, ingredients, structure).
- **Build:** a canvas mask, drawing soft radial blobs at pointer positions that decay over time, or a CSS
  `mask-image: radial-gradient()` at `--x/--y`. Use a watercolor or brush texture for organic edges.
- **Cost:** Medium.
- **Fallback:** a toggle or a side-by-side comparison slider (keyboard operable).
- **Seen in:** Cartier 3.6.

### 22. Hand-drawn annotation
- **What:** an ink circle, underline, or arrow draws itself around the thing you hover or reach.
- **When:** editorial, culture, and personal brands. It signals that a human is choosing, which is the opposite of
  AI slop.
- **Build:** an SVG path drawn from a real pen stroke (not a perfect ellipse). Animate `stroke-dashoffset` from the
  path length to 0 in 0.5–0.7 s, ease-out.
- **Cost:** Low.
- **Fallback:** a static stroke, or none.
- **Seen in:** A24 3.7, Maria Vasilyeva 3.13 (handwritten labels), Signal-A (underline).

---

## E. Entry, transition, sound, time

### 23. Entry gate
- **What:** a first screen that asks for one choice before the experience: sound on or off, cookie consent, or a
  content choice ("choose a stone").
- **When:** the choice matters to the experience (sound is the product, the experience is heavy, or consent is
  legally required anyway). A gate with nothing to choose is just a slow preloader.
- **Build:** a full-screen layer with two equal buttons (equal visual weight for accept and reject, which some
  regulators require for consent; `cognitive-psychology` → dark patterns). Preload during the gate. The gate's click
  is also the user gesture that unlocks audio (`build-and-qa.md` §5).
- **Cost:** Low.
- **Fallback:** keyboard focusable buttons, and a skip link to content. Remember the choice (`localStorage`).
- **Seen in:** Emotion 3.2, Overworld 3.10, Forge 3.8, Cartier 3.6.

### 24. Page transitions
- **What:** navigating keeps continuity: the clicked image grows into the next page's hero, or the old page wipes off.
- **When:** multi-page sites where the click target and the destination share an element (thumbnail to hero).
- **Build:** CSS View Transitions (same-document `document.startViewTransition()`, or cross-document
  `@view-transition { navigation: auto; }` with shared `view-transition-name`). Cross-document transitions don't work in Firefox
  yet, so treat them as enhancement. Use Swup or Taxi only if a router is essential (Barba is dormant since 2024;
  `build-and-qa.md` §1).
- **Cost:** Low (View Transitions) to Medium (Swup or Taxi).
- **Fallback:** reduced motion: `::view-transition-group(*) { animation-duration: 0s; }` or a 150 ms crossfade.
- **Seen in:** Emotion 3.2 (view transitions), Heron 3.12 (Barba), A24 3.7 (disc slides into detail).

### 25. Color flood
- **What:** the chosen item's color expands to fill the screen, then the next view resolves inside that color.
- **When:** choices that have a color identity (stones, flavors, product variants, team colors).
- **Build:** a fixed circle at the click point with `clip-path: circle(0 at x y)` to `circle(150% at x y)`, 0.8–1.2 s,
  `expo.inOut`. Blur the incoming image from 20 px to 0.
- **Cost:** Low to Medium.
- **Fallback:** a 150 ms crossfade.
- **Seen in:** Cartier 3.6.

### 26. Live environmental theming
- **What:** the palette, light, or content follows a real-world variable: local time, season, weather, live data.
- **When:** the variable means something for the brand (hospitality, travel, a personal site, a live event).
- **Build:** compute a theme token set from the hour (`new Date().getHours()`) and set CSS custom properties on
  `:root`. Check contrast for **every** theme state, not only the default (`color`).
- **Cost:** Low.
- **Fallback:** none needed; it's static per visit.
- **Seen in:** Brandon Yasin 3.1 (time-of-day palette and draggable clock), live clocks on Signal-A 3.4 and Format 3.3.

### 27. Sound design
- **What:** ambient bed plus UI sounds on hover and click.
- **When:** the brand is audio, games, film, or an event. Elsewhere it's a liability.
- **Build:** Howler or Web Audio. Start only after a user gesture (autoplay policy). Keep a visible mute toggle in a
  fixed corner, remember the choice, keep UI sounds short and clearly quieter than the ambient bed, and never make sound the only carrier of
  information.
- **Cost:** Medium (assets, mixing).
- **Fallback:** off by default, with sound only after an explicit opt-in.
- **Seen in:** Emotion 3.2, Overworld 3.10, Cartier 3.6.

### 28. Morphing protagonist
- **What:** one hero object (a particle cloud, a blob, a logo) changes form per chapter: the story's main character.
- **When:** abstract offerings (agencies, AI, finance) that lack a physical object, to give the narrative one thing to
  follow.
- **Build:** Three.js `Points` with N target position buffers (sampled from meshes or the logo SVG). Interpolate per
  chapter progress in the vertex shader. Keep N ≤ 50k on phones.
- **Cost:** High.
- **Fallback:** a static render of each chapter's form.
- **Seen in:** Emotion 3.2.

## Sources

Pattern observations come from `field-study-2026-10.md` [1–14 there]. Library behavior, browser support, and
accessibility requirements are cited in `build-and-qa.md` and in `accessibility` → `motion-media-and-forms.md`.
