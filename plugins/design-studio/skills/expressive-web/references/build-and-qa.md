# Build and QA for Expressive Sites

> **Scope:** The verified 2026 stack for award-level sites, the base setup, the reduced-motion and phone strategy, performance budgets, loading and audio rules, and how to check motion in a real browser before showing it.
> **Last verified:** 2026-10 (all library and browser facts verified 2026-10-27; evidence in `dev/research/expressive-web-2026-10/verified-facts.md`).
> **Used by:** ui-designer, creative-director, design-critic

## 1. Stack (verified 2026-10)

| Need | Choose | Facts that matter | Source |
|---|---|---|---|
| Timelines, scroll-linked motion | **GSAP 3.15.0** + ScrollTrigger | Free for commercial use, **including all former Club plugins** (SplitText, ScrollSmoother, MorphSVG, DrawSVG…) since 3.13.0 (2025-04-30). The license is GSAP's "Standard no-charge" license, not MIT. It forbids use inside no-code visual animation builders that compete with Webflow. Latest 3.15.0 (2026-04-13). | [1][2][3] |
| Splitting text | GSAP **SplitText** (3.13 rewrite) | `aria: "auto"` (default) puts an `aria-label` on the parent and `aria-hidden` on the pieces, but it doesn't keep nested link semantics, so don't split text that contains links. `mask: "lines" \| "words" \| "chars"` wraps each piece in a clipping mask. `autoSplit: true` re-splits on resize and font load: put the animation in `onSplit` and **return** it so it is reverted and rebuilt. Splitting before fonts load warns in the console: await `document.fonts.ready` or use `autoSplit`. | [4] |
| Branching by preference and size | `gsap.matchMedia()` | Documented way to branch for reduced motion: `mm.add({ reduceMotion: "(prefers-reduced-motion: reduce)" }, ctx => ctx.conditions.reduceMotion …)`. Animations created inside revert when the query stops matching. | [5] |
| Smooth scroll | **Lenis 1.3.x** (package `lenis`) | `@studio-freight/lenis` is deprecated. Maintained by darkroom.engineering. Latest 1.3.27 (2026-10-15). **Since 1.3.26 (2026-08-05) it honors `prefers-reduced-motion` by itself** (`respectReducedMotion: true` by default); older versions don't. Sync with ScrollTrigger as in §2, or use `autoRaf: true`, never both. `position: sticky` works. Caveats: nested scroll areas need `allowNestedScroll` or `data-lenis-prevent`; no CSS scroll-snap (use `lenis/snap`); iframes swallow wheel events; Safari is capped at 60 fps. | [6][7] |
| Real-time 3D | **Three.js r186** (npm `three@0.186.x`) | `WebGPURenderer` falls back to WebGL 2 automatically, but the manual still calls it experimental, and it doesn't support `ShaderMaterial`, `onBeforeCompile`, or `EffectComposer`. **Default to `WebGLRenderer`** for production unless you need WebGPU-only features. | [8][9] |
| Page transitions | **View Transitions API** | Same-document `document.startViewTransition()`: Chrome 111, Safari 18, Firefox 144; Baseline (newly available) since 2025-10-14. Cross-document `@view-transition { navigation: auto; }`: Chrome 126, Safari 18.2, **not Firefox**; not Baseline, so treat it as progressive enhancement. | [10] |
| Transition libraries | Swup 4.10 or Taxi 2.0 if a router is essential | Barba.js is dormant (last release 2.10.3, 2024-08-12). Swup is active (4.10.0, 2026-09-03), and so is Taxi (`@unseenco/taxi` 2.0.0, 2026-09-27). | [11][12][13] |
| CSS scroll-driven animation | `animation-timeline: scroll()` / `view()` | Chrome and Edge 115, Safari 26. Firefox 159 was listed as beta on 2026-10-27 (shipping not confirmed). **Not Baseline yet** (web-features 3.44.0). Use it for progress bars and simple reveals with a static fallback; use ScrollTrigger for anything essential. | [14] |
| React-free alternative | **Motion** (package `motion`, MIT) | `scroll()` from `"motion"` works without React; `useScroll` is the React hook from `"motion/react"`. Fine for product UI; GSAP is the award-site norm (4/13 vs 0/13 in the field study). | [15][16] |
| Custom easings in CSS | `linear()` and `@property` | `linear()` is Baseline widely available (2026-06-11), so spring-like curves work in pure CSS. `@property` is Baseline (2024-07-09), so custom properties like `--progress` animate. | [14] |
| Audio | Howler.js 2.2.4 or raw Web Audio | Howler's latest release is 2023-09-19, and the project is in low maintenance, but it is stable and still common (Overworld). | [17] |

**Single-file prototypes and published pages** (CDN): `https://cdn.jsdelivr.net/npm/gsap@3.15.0/dist/gsap.min.js`,
`…/ScrollTrigger.min.js`, `…/SplitText.min.js`, `https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.min.js` (sets
`window.Lenis`) and `…/lenis.css`. All checked to resolve on 2026-10-27. Pin exact versions. Artifact pages need
versions at least two weeks old, so use Lenis 1.3.26, not 1.3.27, until 2026-10-29.

## 2. Base setup

```js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger, SplitText);

// 1. Smooth scroll, synced to ScrollTrigger. Lenis >= 1.3.26 stays off under reduced motion by itself.
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// 2. Never split or measure before the real fonts are in.
await document.fonts.ready;

// 3. Every animation lives inside matchMedia, so reduced motion and phones get their own path.
const mm = gsap.matchMedia();
mm.add(
  {
    motion: "(prefers-reduced-motion: no-preference)",
    desktop: "(min-width: 768px) and (hover: hover)",
  },
  (ctx) => {
    const { motion, desktop } = ctx.conditions;
    if (!motion) return; // the static layout is the reduced-motion design

    SplitText.create(".js-lines", {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      onSplit: (self) =>
        gsap.from(self.lines, { yPercent: 110, duration: 0.9, ease: "expo.out", stagger: 0.08 }),
    });

    if (desktop) {
      // pinned chapters, horizontal tracks, cursor followers: desktop-only patterns
    }
  }
);
```

**House easing in GSAP terms.** `expo.out` ≈ `cubic-bezier(0.16, 1, 0.3, 1)`, `quart.inOut` ≈ `(0.77, 0, 0.18, 1)`.
Declare the curves once (`gsap.defaults({ ease: "expo.out", duration: 0.9 })` and CSS custom properties `--ease-out`
etc.) so CSS transitions and GSAP tweens share them.

**Global CSS safety net** (keeps CSS transitions and keyframes honest when JS fails or for non-GSAP motion):

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
  ::view-transition-group(*), ::view-transition-old(*), ::view-transition-new(*) {
    animation-duration: 0s !important;
  }
}
```

## 3. Reduced motion is a design, not a switch-off

What to keep and what to remove under `prefers-reduced-motion: reduce` (WCAG 2.3.3 and 2.2.2 context:
`accessibility` → `motion-media-and-forms.md` §1):

| Keep | Replace | Remove |
|---|---|---|
| All content visible at rest; color, type, layout, images | Line and word reveals → visible text, or an opacity fade ≤ 200 ms | Smooth-scroll inertia (Lenis does this itself from 1.3.26) |
| Hover color and underline changes (no movement) | Camera paths → still renders per chapter, with a crossfade ≤ 200 ms | Parallax, scroll-scrubbed transforms, pinning |
| Progress indicators (static update) | Color flood or page wipe → 150 ms crossfade | Auto-playing video loops, marquees, rotating 3D (or a visible pause) |
| Sound toggle and gate choice | Horizontal track → native scroller or vertical list | Cursor followers and velocity effects |

Also offer the choice in the interface for 3D sites. A "Reduce motion / Low quality" toggle next to the sound toggle
lets people who don't set an OS preference opt out (precedent: Emotion's settings panel; Bruno Simon's quality
setting, `visual-styles` → `immersive-3d-webgl.md`).

## 4. Phones and performance

### 4.1 Phone choreography (different, not smaller)

- **Native scroll** (Lenis leaves touch alone by default). No pinning longer than one screen. No horizontal tracks
  driven by vertical scroll. Use native `scroll-snap` carousels instead.
- **No hover.** Every cursor label, preview, and reveal needs a touch equivalent (`@media (hover: none)`): a visible
  thumbnail, a tap state, or a toggle.
- **One signature moment survives,** usually simplified (fewer particles, DPR 1.5, no post-processing, a pre-rendered
  video loop instead of a live scene).
- Proportion the type and chrome with `layout-composition` → `mobile-proportions.md`. Display type that is 120 px on
  desktop is not 120 px × 0.3 on a phone. Use the phone budget.

### 4.2 Budgets

| Budget | Target | Status |
|---|---|---|
| LCP | ≤ 2.5 s at p75 | Core Web Vitals "good" [18] |
| INP | ≤ 200 ms at p75 | Core Web Vitals "good" [18] |
| CLS | ≤ 0.1 at p75 | Core Web Vitals "good" [18] |
| Frame time during the signature moment | No long animation frames (> 50 ms) on a mid-range phone; aim for 60 fps (16.7 ms frames) | LoAF definition [19]; 60 fps is a house target |
| Device pixel ratio for WebGL | Cap at 2 (1.5 on phones) | Practice, `immersive-3d-webgl.md` |
| 3D assets | glTF with Draco or meshopt geometry and KTX2 textures; lazy-load after first paint | Practice, `immersive-3d-webgl.md` |

### 4.3 Loading

- **The LCP element is a real DOM image or text, never the canvas.** Show the hero still (a poster render) at once,
  then fade the live scene in when it is ready.
- A preloader only blocks while the gate is showing (the gate is the preloader). Otherwise load progressively, and
  show a percentage only for loads over about 2 s.
- Lazy-load Three.js, models, and audio with dynamic `import()` after the first paint, or during the gate.
- Split text and start reveals only after `document.fonts.ready`, so lines don't re-wrap mid-animation.

## 5. Audio rules

- Browsers allow muted autoplay. Sound needs a user interaction first, and an `AudioContext` created before a
  gesture starts `suspended` and must be resumed after one [20][21]. An entry gate's "Enter with sound" click is that
  gesture.
- Default to silent. Show a persistent, labeled mute toggle in a fixed corner, remember the choice, and never carry
  information by sound alone.

## 6. QA: check the motion before showing it

Screenshots catch states, not feel. Run all of these on the signature moment, then show the user a recording.

1. **Step-scroll capture.** In Chrome (claude-in-chrome or `agent-browser`), dispatch synthetic wheel events in steps
   (Lenis and virtual scrollers respond to them, and `window.scrollTo` may not), wait for the motion to settle, and
   screenshot each step. This is the method used for the field study:

   ```js
   window.wheel = async (dy, steps = 10) => {
     for (let i = 0; i < steps; i++) {
       const t = document.elementFromPoint(innerWidth / 2, innerHeight / 2) || document.body;
       t.dispatchEvent(new WheelEvent("wheel", { deltaY: dy / steps, bubbles: true, cancelable: true,
         clientX: innerWidth / 2, clientY: innerHeight / 2 }));
       await new Promise((r) => setTimeout(r, 16));
     }
   };
   await wheel(900); // then wait ~1.5 s and take a screenshot
   ```

2. **Frame sampling.** Record an element's computed transform and opacity on every frame during the moment, to check
   the curve, the duration, and the stagger order against the tokens:

   ```js
   const el = document.querySelector(".hero .js-lines"), out = [], t0 = performance.now();
   (function sample() {
     const s = getComputedStyle(el);
     out.push([Math.round(performance.now() - t0), s.transform, s.opacity]);
     if (performance.now() - t0 < 1500) requestAnimationFrame(sample); else console.table(out);
   })();
   ```

3. **Jank.** In Chrome and Edge 123+, observe long animation frames during the moment [19]:

   ```js
   new PerformanceObserver((l) => l.getEntries().forEach((e) =>
     console.log("LoAF", Math.round(e.duration), "ms", e.scripts?.[0]?.sourceURL))
   ).observe({ type: "long-animation-frame", buffered: true });
   ```

4. **Reduced motion.** Emulate it (DevTools → Rendering → "Emulate CSS media feature prefers-reduced-motion", or
   CDP `Emulation.setEmulatedMedia`) and step-scroll again. Everything must be visible and still.
5. **No-JS and slow network.** Disable JavaScript: is all content readable and every link working? Throttle to
   "Fast 4G": is the hero visible within the LCP budget?
6. **Phone.** 390 px wide with touch emulation (`agent-browser set device "iPhone 14"`, or a 390 px iframe page
   served over http, because headless Chrome has a minimum window width). Check native scroll, tap equivalents, and
   the phone budget.
7. **Show it running.** Record a short GIF of the signature moment (claude-in-chrome `gif_creator`), or publish the
   prototype as a page, and ask the user to judge timing and easing. Tune with them in two or three rounds. Feel is
   theirs to approve.

## Sources

[1] GreenSock. (2025). *GSAP 3.13 release*. https://gsap.com/blog/3-13/ (accessed 2026-10-27)
[2] GreenSock. *Standard "No Charge" GSAP License*. https://gsap.com/standard-license (accessed 2026-10-27)
[3] npm registry. *gsap*. https://registry.npmjs.org/gsap (accessed 2026-10-27)
[4] GreenSock. *SplitText docs*. https://gsap.com/docs/v3/Plugins/SplitText/ (accessed 2026-10-27)
[5] GreenSock. *gsap.matchMedia()*. https://gsap.com/docs/v3/GSAP/gsap.matchMedia() (accessed 2026-10-27)
[6] darkroom.engineering. *Lenis* (README and releases). https://github.com/darkroomengineering/lenis and https://github.com/darkroomengineering/lenis/releases (accessed 2026-10-27)
[7] npm registry. *lenis*; *@studio-freight/lenis* (deprecated). https://registry.npmjs.org/lenis, https://registry.npmjs.org/@studio-freight/lenis (accessed 2026-10-27)
[8] three.js. *Release r186*. https://github.com/mrdoob/three.js/releases/tag/r186 (accessed 2026-10-27)
[9] three.js. *WebGPURenderer* (docs and manual). https://threejs.org/docs/pages/WebGPURenderer.html, https://threejs.org/manual/#en/webgpurenderer (accessed 2026-10-27)
[10] MDN browser-compat-data 8.1.7 and web-features 3.44.0, *View Transitions API* entries (same-document and cross-document), read 2026-10-27.
[11] Barba.js. https://github.com/barbajs/barba; npm https://registry.npmjs.org/@barba/core (accessed 2026-10-27)
[12] Swup. *Releases*. https://github.com/swup/swup/releases (accessed 2026-10-27)
[13] Taxi. https://github.com/craftedbygc/taxi; npm https://registry.npmjs.org/@unseenco/taxi (accessed 2026-10-27)
[14] Can I use / MDN BCD. *animation-timeline: scroll()*. https://caniuse.com/mdn-css_properties_animation-timeline_scroll; web-features 3.44.0 entries for scroll-driven animations, `linear()`, `@property` (accessed 2026-10-27)
[15] Motion. *scroll()*. https://motion.dev/docs/scroll; *useScroll*. https://motion.dev/docs/react-use-scroll (accessed 2026-10-27)
[16] Motion. https://github.com/motiondivision/motion; npm https://registry.npmjs.org/motion (accessed 2026-10-27)
[17] Howler.js. https://github.com/goldfire/howler.js; npm https://registry.npmjs.org/howler (accessed 2026-10-27)
[18] web.dev. *Web Vitals*. https://web.dev/articles/vitals (updated 2024-10-31; accessed 2026-10-27)
[19] Chrome for Developers. *Long Animation Frames API*. https://developer.chrome.com/docs/web-platform/long-animation-frames (accessed 2026-10-27)
[20] MDN. *Autoplay guide for media and Web Audio APIs*. https://developer.mozilla.org/en-US/docs/Web/Media/Guides/Autoplay (accessed 2026-10-27)
[21] Chrome for Developers. *Autoplay policy in Chrome*. https://developer.chrome.com/blog/autoplay (accessed 2026-10-27)
