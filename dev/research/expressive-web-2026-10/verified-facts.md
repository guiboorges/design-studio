# Verified facts: expressive / award-level web tech (pass of 2026-10-27)

All items verified 2026-10 (on 2026-10-27) against the sources listed for each one. Registry and GitHub data came straight from the npm registry JSON (`registry.npmjs.org/<pkg>`) and the GitHub REST API (`gh api`). Browser support came from MDN browser-compat-data **8.1.7** (data.json, timestamp 2026-10-22) and web-features **3.44.0** (2026-10-22), the datasets behind MDN and caniuse Baseline. Current stable browsers per BCD on that date were Chrome 156 (2026-10-20), Firefox 158 (2026-10-13; 159 listed as beta, dated 2026-10-27), and Safari 27 (2026-09-14).

---

## 1. GSAP licensing and version (VERIFIED)
- GSAP is free, including for commercial use. That covers core and every former Club "bonus" plugin. The pricing page names SplitText, ScrollSmoother, MorphSVG, DrawSVG, Inertia, ScrambleText, Physics2D, PhysicsProps, CustomBounce, CustomWiggle, MotionPathHelper, GSDevTools, Flip, Observer, Draggable, ScrollTrigger and MotionPath. Webflow funds it. The 3.13 release post ("Thanks to Webflow GSAP is now 100% FREE… even for commercial use") says Club GSAP is going away and the bonus plugins have moved into the main GitHub repo.
- **Since 3.13.0**: published to npm on 2025-04-30. The blog post is dated April 29, 2025. The Standard License took effect April 30, 2025 and was last modified May 30, 2025.
- **Restriction still in force**: the license is the "Standard 'no charge' license", **not MIT**. Using GSAP in no-code visual animation builders that compete with Webflow needs Webflow's prior written consent. The license text puts it as "any implementation and/or use of GSAP Products in tools that allow users to build visual animations without code…". It also forbids reverse engineering to build competing products and removing notices, and Webflow can terminate the license on a breach. The FAQ says AI-generated GSAP code is not a Prohibited Use.
- **Latest version: 3.15.0**, published to npm 2026-04-13. Earlier: 3.14.0 on 2025-12-08 and 3.13.0 on 2025-04-30.
- Sources: https://gsap.com/standard-license · https://gsap.com/blog/3-13/ · https://gsap.com/pricing/ · https://registry.npmjs.org/gsap

## 2. GSAP SplitText (rewritten in 3.13) (VERIFIED)
- The docs call 3.13.0 a "major rewrite": about half the size, with 14 new features. `aria`, `mask`, `autoSplit` and `onSplit` are all new in 3.13.
- `aria`, default `"auto"`: puts an `aria-label` with the original text on the split element and `aria-hidden` on the line, word and char children. Nested element semantics (links, for example) are **not** preserved. `"hidden"` hides the element and its children from screen readers. `"none"` adds nothing. For nested links the docs suggest `aria: "none"` plus a screen-reader-only duplicate of the text.
- `mask`, values `"lines" | "words" | "chars"`: wraps each piece in an extra clipping element, so you get reveal-from-mask without writing your own wrappers. Only one type can be masked at a time. The wrappers are in `.masks` and their class names get a `-mask` suffix.
- `autoSplit: true` reverts and re-splits when fonts finish loading, or when the element's width changes and lines are being split. Build the animation inside `onSplit(self)` and **return** the tween or timeline. SplitText then carries its progress over to the new split.
- Font caveat: splitting before web fonts load can misalign lines or cause layout shift. SplitText logs a `console.warn` if you split before fonts load without `autoSplit`. Fix it with `document.fonts.ready.then(...)` or with `autoSplit` + `onSplit`.
- Source: https://gsap.com/docs/v3/Plugins/SplitText/

## 3. gsap.matchMedia() for reduced motion (VERIFIED)
- This is the documented way to branch animations by media query, reduced motion included. Conditions syntax:
  ```js
  const mm = gsap.matchMedia();
  mm.add({
    isDesktop: "(min-width: 800px)",
    isMobile: "(max-width: 799px)",
    reduceMotion: "(prefers-reduced-motion: reduce)"
  }, (context) => {
    const { isDesktop, reduceMotion } = context.conditions;
    gsap.to(".box", { rotation: isDesktop ? 360 : 180, duration: reduceMotion ? 0 : 2 });
    return () => { /* custom cleanup only */ };
  });
  ```
- Animations and ScrollTriggers created inside the handler are reverted automatically when a condition stops matching. The handler re-runs when any condition toggles, including a live change to the OS reduced-motion setting. `mm.revert()` tears everything down. Animations created later, in event handlers for example, should go through `context.add()`.
- Source: https://gsap.com/docs/v3/GSAP/gsap.matchMedia()/

## 4. Lenis (VERIFIED)
- Package: **`lenis`** (`npm i lenis`, `import Lenis from 'lenis'`). The old `@studio-freight/lenis` is deprecated on npm ("has been renamed to 'lenis'"), and its last version was 1.0.42 (2024-03-17).
- **Latest: 1.3.27**, released 2026-10-15. MIT license. Repo: github.com/darkroomengineering/lenis, owned by the **darkroomengineering** org (darkroom.engineering, the former Studio Freight). Homepage lenis.dev.
- Documented GSAP ScrollTrigger sync, still current in the README:
  ```js
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);
  ```
  `autoRaf: boolean` (default `false`) runs Lenis's own rAF loop. Do not combine it with the GSAP ticker approach: use one or the other ("use `autoRaf: true` or manually call `lenis.raf(time)`").
- **Reduced motion**: since **v1.3.26 (2026-08-05)** Lenis honors `prefers-reduced-motion` itself through `respectReducedMotion: true` (the default). With reduce set, `lerp` is forced to 1 (no smoothing) and programmatic and anchor scrolls jump instantly. Lenis keeps running so WebGL/DOM sync still works, and it picks up the preference live. Read `lenis.prefersReducedMotion` in your own code. Older versions (≤1.3.25) did not do this, so pin ≥1.3.26 or gate Lenis yourself.
- Caveats from the README: Lenis runs on native scroll, so **`position: sticky`, anchor links and accessibility keep working**. Nested scroll containers need configuration: either `allowNestedScroll: true`, which checks the DOM tree on every scroll event and can be slow, or `data-lenis-prevent` (variants `-wheel`, `-touch`, `-vertical`, `-horizontal`). CSS scroll-snap is unsupported, so use `lenis/snap`. Safari caps it at 60fps (30fps in low-power mode). Smooth scroll stops over iframes because they don't forward wheel events. `position: fixed` can lag on pre-M1 macOS Safari. `syncTouch` may misbehave on iOS < 16.
- Sources: https://github.com/darkroomengineering/lenis (README, raw README) · https://github.com/darkroomengineering/lenis/releases · https://registry.npmjs.org/lenis · https://registry.npmjs.org/@studio-freight/lenis

## 5. Three.js (VERIFIED)
- **Latest release: r186**, published to GitHub 2026-09-24 (npm `three@0.186.1`, also 2026-09-24). r185 came out 2026-07-01.
- **WebGPURenderer**: imported from `three/webgpu`. It tries WebGPU first and **falls back automatically to a WebGL 2 backend**. `forceWebGL: true` forces WebGL 2. Initialization is async, so use `setAnimationLoop()` or `await renderer.init()`.
- The official manual says: "**The renderer itself is still in an experimental state** although its maturity level has been greatly improved." Depending on the scene, some features may be missing or `WebGLRenderer` may perform better. `ShaderMaterial`, `RawShaderMaterial`, `onBeforeCompile()` and `EffectComposer` are **not supported**: port them to TSL / node materials and the new post-processing stack. `WebGLRenderer` is still maintained and "the recommended choice for pure WebGL 2 applications", but it will get no larger new features.
- Sources: https://github.com/mrdoob/three.js/releases/tag/r186 · https://threejs.org/docs/pages/WebGPURenderer.html · manual source `manual/pages/webgpurenderer.html` in github.com/mrdoob/three.js (dev branch), published at https://threejs.org/manual/#en/webgpurenderer · https://registry.npmjs.org/three

## 6. CSS scroll-driven animations (VERIFIED, Firefox is borderline)
- `animation-timeline: scroll()` / `view()` first supported in: **Chrome 115, Edge 115, Safari 26 (macOS and iOS), Firefox 159**. In BCD 8.1.7, Firefox 159 has status "beta" with release date 2026-10-27, so it ships on today's date. Before that, Firefox had it only behind a flag.
- **Not Baseline**: web-features 3.44.0 has `scroll-driven-animations` at `baseline: false`, with Firefox not yet counted. It should become Baseline "newly available" once Firefox 159 is stable and the data updates. Re-check on caniuse. caniuse shows 87.84% global usage.
- In practice, treat it as progressive enhancement behind `@supports (animation-timeline: scroll())` and gate it with `prefers-reduced-motion`.
- Sources: https://caniuse.com/mdn-css_properties_animation-timeline_scroll · MDN BCD 8.1.7 (`css.properties.animation-timeline.scroll` / `.view`) · web-features 3.44.0 (`scroll-driven-animations`)

## 7. View Transitions API (VERIFIED)
- **Same-document** (`document.startViewTransition`): Chrome/Edge 111, Safari 18 (macOS and iOS), Firefox 144. **Baseline newly available since 2025-10-14.** The options object form (`{update, types}`) is in Chrome 125, Safari 18.2 and Firefox 147, and has been Baseline (low) since 2026-01-13.
- **Cross-document** (`@view-transition { navigation: auto; }`): Chrome/Edge 126, Safari 18.2 (macOS and iOS), **Firefox not supported** (bug 1860854). `pageswap`/`pagereveal` are in Chrome 123–124 and Safari 18.2. **Not Baseline.**
- Sources: MDN BCD 8.1.7 (`api.Document.startViewTransition`, `css.at-rules.view-transition`) · web-features 3.44.0 (`view-transitions`, `cross-document-view-transitions`)

## 8. Page-transition libraries (VERIFIED)
- **Barba.js** (`@barba/core`): last release **2.10.3 on 2024-08-12**. The last commit was 2024-08-12 and the last repo push 2024-12-02. The repo isn't archived, but it has had no release in more than two years, so treat it as dormant.
- **Swup**: **4.10.0 on 2026-09-03**, actively maintained (pushed 2026-10-06). MIT.
- **Taxi.js** (`@unseenco/taxi`, repo craftedbygc/taxi): npm **2.0.0 on 2026-09-27**. The latest GitHub release *entry* is still 1.8.0 (2025-02-08), but the repo was pushed 2026-09-27. BSD-3-Clause. Maintained.
- Native alternative: cross-document View Transitions (item 7) for Chromium and Safari.
- Sources: https://registry.npmjs.org/@barba/core · https://github.com/barbajs/barba · https://registry.npmjs.org/swup · https://github.com/swup/swup/releases · https://registry.npmjs.org/@unseenco/taxi · https://github.com/craftedbygc/taxi

## 9. Motion, formerly Framer Motion (VERIFIED)
- "Framer Motion is now Motion." Package **`motion`**, **MIT** license. Vanilla JS imports from `motion`, React from `motion/react`, and Vue uses the separate `motion-v` package. **Latest npm: 14.7.0**, published 2026-10-27. Repo: github.com/motiondivision/motion.
- Scroll-linked animation **without React**: `import { scroll } from "motion"; scroll(progress => …)`. When an `animate()` animation is passed to `scroll()`, browsers with ScrollTimeline run it hardware-accelerated. `useScroll` is the React hook (`import { useScroll } from "motion/react"`), which returns `scrollX`, `scrollY`, `scrollXProgress` and `scrollYProgress`. It is accelerated through ScrollTimeline for opacity, transform, clipPath and filter where supported.
- Sources: https://github.com/motiondivision/motion · https://motion.dev/docs/scroll · https://motion.dev/docs/react-use-scroll · https://registry.npmjs.org/motion

## 10. Core Web Vitals "good" thresholds (VERIFIED)
- **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1**, measured at the **75th percentile** of page loads and segmented by mobile and desktop. The page says "Last updated 2024-10-31", so the thresholds have not changed since INP replaced FID in 2024.
- Source: https://web.dev/articles/vitals

## 11. Long Animation Frames API (LoAF) (VERIFIED)
- `PerformanceObserver` with `{ type: 'long-animation-frame', buffered: true }`. A frame is "long" above 50 ms. Useful fields: `duration`, `blockingDuration`, `renderStart`, `styleAndLayoutStart`, and `scripts[]` (attribution for scripts over 5 ms: `invoker`, `sourceURL`, `sourceFunctionName`, …).
- Support: **Chrome/Edge 123+ only** (origin trial in Chrome 116–122). **Not in Firefox or Safari.** BCD marks it experimental. **Not Baseline.** So it works for QA in Chromium (DevTools and RUM) but can't measure Safari or Firefox jank.
- Sources: https://developer.chrome.com/docs/web-platform/long-animation-frames · MDN BCD 8.1.7 (`api.PerformanceLongAnimationFrameTiming`) · web-features 3.44.0 (`long-animation-frames`)

## 12. `@property` and `linear()` easing (VERIFIED)
- **`@property`** (registered custom properties, which make gradients and custom properties animatable): Chrome/Edge 85, Safari 16.4, Firefox 128. **Baseline newly available since 2024-07-09.** It is not yet "widely available": by the 30-month rule that comes around 2027-01.
- **`linear()` easing** (piecewise-linear, for spring and bounce curves in pure CSS): Chrome/Edge 113, Safari 17.2, Firefox 112. **Baseline widely available since 2026-06-11** (newly available since 2023-12-11).
- Sources: MDN BCD 8.1.7 (`css.at-rules.property`, `css.types.easing-function.linear-function`) · web-features 3.44.0 (`registered-custom-properties`, `linear-easing`)

## 13. Howler.js and autoplay policy (VERIFIED)
- **Howler.js: latest 2.2.4 (2023-09-19)**, MIT, about 25.4k stars. The last commit was a README update on 2025-11-23 and there are 420 open issues. It still works and is widely used, but it is in low-maintenance mode with no release in about three years.
- **Autoplay (MDN)**: audible media is generally allowed to autoplay only if it is muted or at volume 0, the user has interacted with the site (click, tap, key), the site is allowlisted, or an iframe was granted the `autoplay` Permissions-Policy. Web Audio `start()` outside a user-input handler is subject to the same rules. `navigator.getAutoplayPolicy("mediaelement" | "audiocontext")` returns `allowed`, `allowed-muted` or `disallowed`. `play()` rejects with `NotAllowedError` when blocked. Safari needs `playsinline` for inline video autoplay.
- **Chrome**: "Muted autoplay is always allowed." Sound is allowed after the user interacts with the domain, when the desktop Media Engagement Index threshold is met, or when the site is installed as a PWA or added to the home screen. Web Audio has been covered since Chrome 71: "If an AudioContext is created before the document receives a user gesture, it will be created in the 'suspended' state, and you will need to call resume() after the user gesture."
- Design rule for award sites: start muted, and offer an explicit sound toggle that creates or resumes the AudioContext (Howler's `Howler.ctx`) inside the click handler.
- Sources: https://registry.npmjs.org/howler · https://github.com/goldfire/howler.js · https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay · https://developer.chrome.com/blog/autoplay

---

### Unverified / caveats
- Nothing on the list is fully unverified. Two items have caveats:
  - (a) Firefox 159 support for scroll-driven animations comes from BCD's beta entry dated 2026-10-27. Confirm it shipped and that Baseline status has flipped before calling it Baseline.
  - (b) Motion's version jump to 14.x is taken as-is from the npm registry. I did not open a changelog.
- Budget used: 1 web search. Everything else came from direct fetches of primary pages, the npm registry and the GitHub API.
