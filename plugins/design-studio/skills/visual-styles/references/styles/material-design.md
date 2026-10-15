# Material Design

> **Scope:** Google's design system across three generations: Material 1 (2014), Material 3 / Material You (2021), and Material 3 Expressive (2025). Covers its visual signature and how to use it as a style.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

| Date | Version | What changed |
|------|---------|--------------|
| Jun 25, 2014 (Google I/O) | **Material Design (M1)**, codename "Quantum Paper," led by Matías Duarte [1]. | Three principles [2]: **Material is the metaphor** ("a unifying theory of a rationalized space and a system of motion"); **Bold, graphic, intentional** (print-design elements "create hierarchy, meaning, and focus"); **Motion provides meaning** ("Motion is meaningful and appropriate, serving to focus attention and maintain continuity"). Based on paper and ink. Duarte: "Material has physical surfaces and edges" [1]. Shipped with Android 5.0 Lollipop, adding card-like sheets, shadows for depth, and animation to the flat trend [3]. |
| Late 2010s (exact year [unverified]) | Material Design 2 | Google begins using Google Sans (a size-optimized Product Sans) [1]. |
| May 18, 2021 (Google I/O) | **Material You / Material 3**, with Android 12. | "We rethought the entire experience, from the colors to the shapes, light and motion." The system extracts dominant and complementary hues from the user's wallpaper and applies them across the UI [4]. Dynamic color is "the key part of Material You" and is available on Android 12+ [5]. |
| May 13, 2025 (The Android Show: I/O Edition) | **Material 3 Expressive**, with Android 16 and Wear OS 6 [1][6]. | "More natural, springy animations," updated dynamic color themes, emphasized type styles, responsive components, and shape morphing [6]. Rollout to Pixel 6+ and Pixel Tablet began in September 2025 [1]. Google describes it as research-backed (see Fits / Avoid) [7]. |

**Cultural reason:** Google needed one coherent language across Android, the web, and its own apps after years of inconsistency. Material 1 answered flat design's lack of signifiers with a physical metaphor of paper, elevation, and shadow [3]. Material You made personalization the core idea, with color derived from the user's own wallpaper [4]. Expressive pushed for emotional engagement ("Expressive design makes you feel something") while warning that "no amount of emotion can compensate for a lack of clarity" [7].

## Visual DNA

**M1 (2014):**
- Paper surfaces at distinct elevations with realistic, light-sourced shadows.
- Bold primary and accent colors, full-bleed imagery, and large app bars.
- Roboto, with a type scale based on 12, 14, 16, 20, and 34 [8]. Buttons were Medium 14sp in all caps [8].
- An 8dp baseline grid, 16dp mobile margins, a 72dp keyline for content next to icons, and touch targets of at least 48dp [9].
- Floating action button (FAB): "represents the primary action," shaped as a circled icon floating above the UI. The touch ripple "expands outwards" [19].

**M3 / Material You (2021):**
- Tonal palettes generated from one seed color (or from the wallpaper). Surfaces are tinted instead of shadowed (tonal elevation) [10].
- Reworked shapes, light, and motion for a more personal tone [4]. Default components use larger corner radii (see the shape scale below).

**M3 Expressive (2025):**
- Bolder use of color, shape, size, motion, and containment [7].
- Larger key actions (e.g., an enlarged Send button), floating toolbars, and new progress indicators [7].
- Spring-based motion [6][11] and emphasized type styles [6][12].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | Roboto (Material's long-standing Android typeface [8]); Google Sans in Google's own products [1]; brand font via theming (`fontFamily`) [12]. | Default M3 family on each platform not re-verified in this pass. |
| Typography: M3 scale | Display L/M/S 57/45/36sp; Headline L/M/S 32/28/24sp; Title L 22sp, Title M/S 16/14sp Medium; Body L/M/S 16/14/12sp; Label L/M/S 14/12/11sp Medium [12]. | Expressive adds "Emphasized" variants with heavier weights (e.g., Display L Emphasized = Medium 57sp; Title M Emphasized = Bold 16sp) [12]. |
| Typography: weights | Regular 400 and Medium 500 baseline; Bold in Emphasized styles [12]. | |
| Typography: letter-spacing | Inherit tracking from the platform text-style tokens (`TextAppearance.Material3.*`, Compose `Typography`) rather than hand-setting it. | Exact per-style tracking values not verified in this pass [unverified]. |
| Color: structure | Seed color → tonal palettes (primary, secondary, tertiary, neutral, neutral-variant, error) → roles (primary, on-primary, primary-container, surface, on-surface, outline, etc.) for light and dark. Use dynamic color on Android 12+ with a static fallback [5][10]. | Dynamic color is "designed to meet accessibility standards for color contrast" [5], but custom role overrides must be re-checked. |
| Color: baseline values | Primary (P-40) `#6750A4` oklch(49.6% 0.130 293.7), white on-primary 6.44:1. Primary container (P-90) `#EADDFF`. Dark primary (P-80) `#D0BCFF`, 10.02:1 on `#1D1B20`. Surface (N-99) `#FFFBFF`. On-surface (N-10) `#1D1B20`, 16.66:1 on surface [13]. | These are M3 baseline (purple) reference tokens. M2's old default was `#6200EE` [14]. |
| Radius (shape scale) | None 0; Extra-small 4dp; Small 8dp; Medium 12dp; Large 16dp; Large-increased 20dp; Extra-large 28dp; Extra-large-increased 32dp; Extra-extra-large 48dp; Full 50% [15]. | Tokens as published in Material Components for Android (2026-10). |
| Borders | `outline` role for text-field and outlined-button strokes, 1dp; `outline-variant` for decorative dividers. | |
| Shadows / elevation | Levels 0, 1, 3, 6, 8, 12dp [16]. In M3, elevation is shown mainly by surface tint/tone; shadows are used sparingly [10]. | |
| Spacing / grid | 4dp/8dp grid; 16dp mobile margins; 48dp minimum touch target [9]. | M1 metrics still apply as defaults. |
| Imagery & iconography | Material Symbols (variable: fill, weight, grade, optical size); bold, flat illustration; full-bleed photography. | |
| Motion (easing/duration) | Standard `cubic-bezier(0.2, 0, 0, 1)`; Emphasized decelerate `cubic-bezier(0.05, 0.7, 0.1, 1)`; Emphasized accelerate `cubic-bezier(0.3, 0, 0.8, 0.15)`. Durations: short 50–200ms, medium 250–400ms, long 450–600ms, extra-long 700–1000ms [11]. | |
| Motion (springs, Expressive) | Fast spatial: damping 0.9, stiffness 1400. Default spatial: 0.9 / 700. Slow spatial: 0.9 / 300. Effects (color/opacity): damping 1.0, stiffness 3800 / 1600 / 800 [11]. | Spatial springs may overshoot slightly; effects springs don't. |
| Texture / effects | Ripple / state layers (hover, focus, pressed overlays at low opacity of the content color). No noise or glass. | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| Android 5.0 Lollipop | 2014 | First Material release: cards, shadows, animation [3]. |
| Android 12 / Pixel UI with Material You | 2021 | Wallpaper-based dynamic color [4]. |
| Android 16 and Wear OS 6 with M3 Expressive | 2025 | Springs, shape morphing, emphasized type [6]. |
| Google Photos, Fitbit, Gmail adopting Expressive choices | Announced 2025 | Named by Google as next to adopt [6]. |

## Fits / Avoid

**Fits:** Android apps (native feel), cross-platform products wanting a documented open system, enterprise and admin tools needing comprehensive components, teams without a mature in-house design system, personalization-forward consumer apps.

**Avoid / adapt:** iOS-first products (they will feel non-native; see `apple-style.md`); luxury or editorial brands where Material's recognizability reads as "default Google"; brands with strict color identity (dynamic color will override it unless you opt out).

**Evidence on people:**
- Google reports 46 studies with more than 18,000 participants for M3 Expressive. Participants spotted key UI elements "up to four times faster," preference peaked at 87% among 18–24-year-olds, and adults 45+ located key elements about as fast as younger users. Google also reports failures: dropping a familiar list pattern and removing text labels from actions hurt usability, and "a strong minority" preferred calmer designs [7]. **[E3]** These are vendor-reported results without published methods or peer review. "Up to" figures are best cases.
- M1's shadows-as-signifiers approach is NN/g's example of "flat 2.0" done right [17]. **[E2]**

**Accessibility risks:** custom dynamic-color overrides breaking contrast; tonal elevation alone (without shadow or outline) failing to separate surfaces for low-vision users; springy, morphing motion for vestibular-sensitive users (respect reduced-motion settings) [18]; M1's all-caps buttons for dyslexic readers [unverified as measured effect].

**When it ages badly:** M1-era heavy drop shadows, FABs on every screen, and over-animated hero transitions. Generic default purple (`#6750A4`) apps signal "unthemed template."

**Limit:** Dynamic color personalizes the UI. It must never change semantic colors (error, success) or brand-critical marks in ways that confuse meaning.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Use the official component libraries (Compose Material 3, MDC Android, Material Web) and theme with tokens. Don't redraw components [5]. |
| Website | Material for web apps and dashboards. For marketing pages, borrow the tonal palette and shape scale, not the app chrome. |
| Social post | Big rounded shapes, tonal color blocks, playful morphing shapes (Expressive), Google Sans–like type. |
| Print / editorial | M1's "bold, graphic, intentional" principle came from print [2]. Use flat color plates, strong grid, and paper metaphor. |
| Billboard | One large shape-cropped image and a single headline in a tonal color field. |

## Common mistakes

- Mixing M2 and M3 components (sharp 4dp buttons next to pill buttons).
- Hard-coding hex values instead of color roles, which breaks dark theme and dynamic color.
- Using shadow *and* tonal tint at high levels everywhere, so everything floats.
- Removing labels from icon actions for "expressiveness." Google's own research found this hurt usability [7].
- Overusing springs on large surfaces (use slow springs or standard easing for full-screen transitions [11]).

## Pairs well with / Related styles

- **Ancestors:** `flat-design.md`, `swiss-international.md` (print grid, bold type).
- **Contrasts:** `apple-style.md` (the other platform language), `skeuomorphism.md` (Material is a *metaphor* of paper, not an imitation).
- **Combines with:** `bento-grid.md` (cards on a modular grid), `maximalism.md` (Expressive's bolder shapes and colors move toward it).

## Sources

[1] Wikipedia contributors. (n.d.). *Material Design*. Wikipedia. https://en.wikipedia.org/wiki/Material_Design (secondary source; accessed 2026-10)
[2] Google. (2014). *Introduction – Material design* (Material 1 guidelines, archived by Google; no longer maintained). https://m1.material.io/material-design/introduction.html
[3] Wikipedia contributors. (n.d.). *Flat design*. Wikipedia. https://en.wikipedia.org/wiki/Flat_design (secondary source; accessed 2026-10)
[4] Samat, S. (2021, May 18). *Android 12 Beta: Designed for you*. Google, The Keyword. https://blog.google/products/android/android-12-beta/
[5] Android Developers. (n.d.). *Material Design 3 in Compose*. https://developer.android.com/develop/ui/compose/designsystems/material3
[6] Google. (2025, May 13). *Android and Wear OS are getting a big refresh*. The Keyword. https://blog.google/products/android/material-3-expressive-android-wearos-launch/
[7] Google Design. (n.d.). *Expressive Design: Google's UX Research*. https://design.google/library/expressive-material-design-google-research
[8] Google. (2014). *Typography – Style* (Material 1 guidelines). https://m1.material.io/style/typography.html
[9] Google. (2014). *Metrics & keylines – Layout* (Material 1 guidelines). https://m1.material.io/layout/metrics-keylines.html
[10] Material Components for Android. (n.d.). *Color theming* (docs/theming/Color.md). GitHub. https://github.com/material-components/material-components-android/blob/master/docs/theming/Color.md
[11] Material Components for Android. (n.d.). *Motion* (docs/theming/Motion.md). GitHub. https://github.com/material-components/material-components-android/blob/master/docs/theming/Motion.md
[12] Material Components for Android. (n.d.). *Typography* (docs/theming/Typography.md). GitHub. https://github.com/material-components/material-components-android/blob/master/docs/theming/Typography.md
[13] Material Web. (n.d.). *md-ref-palette tokens* (tokens/versions/v0_192/_md-ref-palette.scss). GitHub. https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-ref-palette.scss
[14] Material Components for Android. (n.d.). *colors.xml* (default M2 colors). GitHub. https://github.com/material-components/material-components-android/blob/master/lib/java/com/google/android/material/color/res/values/colors.xml
[15] Material Components for Android. (n.d.). *Shape* (docs/theming/Shape.md). GitHub. https://github.com/material-components/material-components-android/blob/master/docs/theming/Shape.md
[16] Material Web. (n.d.). *md-sys-elevation tokens* (tokens/versions/v0_192/_md-sys-elevation.scss). GitHub. https://github.com/material-components/material-web/blob/main/tokens/versions/v0_192/_md-sys-elevation.scss
[17] Moran, K. (2015, September 27). *Flat Design: Its Origins, Its Problems, and Why Flat 2.0 Is Better for Users*. Nielsen Norman Group. https://www.nngroup.com/articles/flat-design/
[18] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[19] Google. (2014). *Buttons: Floating Action Button – Components* (Material 1 guidelines). https://m1.material.io/components/buttons-floating-action-button.html
