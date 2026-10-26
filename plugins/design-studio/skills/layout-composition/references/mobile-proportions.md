# Mobile Proportions

> **Scope:** How big things should be on a phone, relative to each other and to the screen: type, buttons, heroes, chrome, rows, margins, spacing, and radii, for native apps (iOS, Android) and phone web. It also gives the rules for turning a desktop design into a phone design.
> **Last verified:** 2026-10 (platform docs read, iOS 27.0 simulator measured, and 11 live pages measured on 2026-10-26)
> **Used by:** ui-designer, creative-director, design-critic, typographer, social-media-designer, accessibility-specialist

## How to use this file

Values below fall into three kinds, and each row says which one it is:
- **Doc**: written in Apple's or Google's guidelines, API docs, or token source.
- **Measured**: what the system or a live page renders. Apple publishes no point heights for iOS buttons, bars, or rows, so these come from a probe app on the iOS 27.0 simulator [20]. Phone-web values come from apple.com and four other sites at 390×844 and 1440×900 [21]. The evidence is in `dev/research/mobile-proportions-2026-10/` in the repo.
- **Rule (ours)**: a synthesis from Doc and Measured values. Treat it as a strong default, not a platform law.

On an iPhone, 1 CSS px = 1 pt (Safari reports the logical width, e.g. 390 or 402). Native-app values and phone-web values are therefore directly comparable.

Related files: platform type ramps, targets, and safe areas are in `media-specs` → `digital-platforms.md`. Breakpoints, safe-area CSS, and navigation by size are in `responsive-layout.md`. Spacing tokens are in `grid-systems.md` §7. Type scales and `clamp()` are in `typography` → `scale-and-rhythm.md`.

---

## 1. The principle: re-proportion, never shrink

A phone screen is not a small desktop. Best-in-class teams change each element by a **different** factor [21]:

- **Big type shrinks hard.** Apple's 80 px desktop headlines become 40–48 px on a phone (×0.5–0.6).
- **Reading text barely moves.** Body stays at 16–17 px, and only secondary copy drops from 17 to 14 px.
- **Controls stay about the same size**, because fingers don't shrink. Apple's web CTA goes from 44 to 36 px, while other sites keep the same height.
- **Spacing shrinks less than type.** Section gaps end up at about ×0.75 and card padding at about ×0.7.
- **Radii don't scale at all.** Apple's card radius stays 18 or 28 and its buttons stay pills.

So a uniform scale-down (or a `vw`-only headline) is wrong in both directions. It leaves headlines too big and makes text and targets too small. Apple's phone tier uses only these sizes: **48 / 40 / 32 / 28 / 24 / 21 / 19 / 17 / 14 / 12 px**. None is above 48 [21].

**Hierarchy on a phone comes from weight, color, position, and grouping more than from size** [E2]. The HIG says to "use style — not size — to visually distinguish the preferred choice" [1], and that hierarchy "should be expressed through layout and grouping" [10].

---

## 2. The phone budget (quick reference)

Design a phone screen to these numbers. Each row gives native iOS, Android (Material 3), and phone web.

| Element | Native iOS (pt) | Material 3 compact (dp) | Phone web, marketing (CSS px) | Phone web app / PWA / dashboard (CSS px) |
|---|---|---|---|---|
| Largest text on a normal screen | **34** Large Title, top-level screen only [3][5]. Measured [20] | 22 small app bar title; 28–36 in medium/large flexible app bars [22] | Hero **32–48**, median 40 [21] | **28–34** (Rule: follow the native title, not the marketing hero) |
| Body / reading text | **17** [3] | 16 Body Large / 14 Body Medium [22] | **16–17**; secondary copy 14 [21] | **16** (≥ 16 also avoids input zoom in iOS Safari; see `scale-and-rhythm.md` §11.1) |
| Largest : body ratio | **2 : 1** | ~1.4–2.25 : 1 | **~2.5 : 1** (40/16) up to ~2.8 : 1 (48/17) | ~2 : 1 |
| Primary button height | **50** (`.large`, capsule) [20] | **40** default (S), 56 for an emphasized M [22] | **36** Apple pill; 40–44 elsewhere; **never above 44** on the sites measured [21] | **44–50** |
| Default in-content button | **34** (`.regular`) [20] | 40 | 36 | 36–44 |
| Button label | 17, same as body; the large size adds padding, not type [20] | 14 (S), 16 (M) [22] | **14** Apple, 16 others [21] | 15–17 |
| Prominent (filled) buttons per view | **1–2** [1] | Filled "ideally for only one action on a page" [23] | 1–2 per screenful [21] | 1 |
| Touch target | 44×44 minimum hit region; the visible control can be smaller [1] | 48×48 [24] | 24×24 WCAG AA; aim for 44 | 44 |
| Side margin | **16** up to 402 pt wide, **20** from 420 pt [20] | **16** [25] | **16–24**: Apple's content column is 87.5% of the width (= 24 at 390) [21] | 16–20 |
| List row (1 line / 2 lines) | **53 / 69** inset-grouped; never under 44 [20] | **56 / 72** (88 for 3 lines) [22] | n/a | 48–56 / 64–72 |
| Top chrome | Safe area 62 + large-title bar 106 = **168 (19% of 874)**; 116 when the title collapses [20] | App bar 64; flexible 112–152 when expanded [22] | Apple nav 48 (44 on desktop) [21] | 48–64 |
| Bottom navigation | Tab bar frame 83, floating capsule ~62 tall [20] | Navigation bar **64** (80 is the old, "no longer recommended" size) [22] | Rare on marketing pages | Tab bar 56–64 + `safe-area-inset-bottom` |
| Content area at rest | **~71%** of the screen height (77% when the title collapses) [20] | ~70% (64 + 64 of chrome on ~800–900 dp) | n/a | ≥ 65% |
| Distinct type sizes in view | System text styles; usually 3–4 per screen (Rule) | 3–4 (Rule) | **3** in the first viewport (range 2–5) [21] | 3–4 |
| Card padding | 16–20 (Rule from the margins) | 16 [22] | **~28** (16–32); ×0.7 of desktop [21] | 16–20 |
| Card / container radius | Concentric: inner = outer − padding; capsules = height ÷ 2 [10][11] | Shape scale 12 / 16 / 28 [22] | **18 or 28**, the same as desktop [21] | 12–20, the same as desktop |
| Gap between page sections | Grouped-list section spacing ~17–38 [20] | — | Apple padding **112** (desktop 144), ×0.75 [21] | 24–32 between groups (Rule; `grid-systems.md` §7) |

**Figma frame:** design at **402×874** (iPhone 17 / 17 Pro / 18 Pro). Stress-test at **375×667** (iPhone SE, the narrowest and shortest phone iOS 27 supports) and **440×956** (Pro Max) [18][19]. For Android, use 412×915 dp or 360×800 dp [unverified as "most common"; pick the client's analytics].

---

## 3. Desktop → phone translation table

This is what Apple's own CSS does: 212 `typography-*` tokens at three tiers, >1068 px (L), 735–1068 px (M), and ≤734 px (S) [21]. Use it when a desktop design exists and the phone version needs real values.

| Desktop size (px) | Phone size | Factor | Examples (desktop → phone) |
|---|---|---|---|
| ≥ 96 | 40–48 | ×0.4–0.5 | `headline-standalone` 96 → 48 |
| 64–88 | **40** (32–48) | **×0.5** | `hero-headline` 80 → 40; `page-header-title` 80 → 48; `headline-elevated` 64 → 40 |
| 48–56 | **32** (28–48) | ×0.57 | `tile-headline` 56 → 32; `section-header-headline` 56 → 28; `headline` 48 → 32 |
| 32–40 | 24 | ×0.75 | `callout` 32 → 24; `headline-reduced` 40 → 28 |
| 24–28 | 21 | ×0.75 | `feature-card-headline` 28 → 21; `tile-subhead` 28 → 19 |
| 19–21 | 17 | ×0.8 | `intro` 21 → 19; `body-elevated` 21 → 17 |
| 17 | 17 for reading copy, 14 for secondary copy | ×1.0 / ×0.82 | `body` 17 → 17; card copy 17 → 14 |
| ≤ 14 | the same | ×1.0 | `caption` 12 → 12 |

The tablet tier (M) sits about one step below desktop (e.g. 80 → 64, 56 → 48).

**Other properties**

| Property | Desktop → phone | Source |
|---|---|---|
| Headline line height | ~1.05 at 80 → ~1.08–1.125 at 32–48 | Measured [21] |
| Headline tracking | −0.015em at 80 → ~0 at 40; small text −0.016 to −0.022em | Measured [21] |
| Headline weight | 600 at every size; Apple doesn't go lighter as type shrinks | Measured [21] |
| CTA height / label | 44 / 17 → 36 / 14 (×0.82) on Apple; ×0.92–1.0 elsewhere | Measured [21] |
| Section padding | 144 → 112; 160 → 96 | Measured [21] |
| Card padding | 48 → 32; 40 → 28 (×0.7) | Measured [21] |
| Radius | unchanged | Measured [21] |
| Nav bar | 44 → 48 (taller for touch) | Measured [21] |
| Layout | Re-flows: two columns stack, bottom-left text moves to top-centre, price/buy moves into a bottom bar | Measured [21] |

**In code**, define the tiers as tokens (`--type-hero: 80px` → `40px` at ≤734px) or use `clamp()` with the **phone value as the minimum**: `font-size: clamp(2.5rem, 1.2rem + 4vw, 5rem)` gives 40 → 80. Keep a `rem` term so zoom works (`scale-and-rhythm.md` §2.3). **In Figma**, put type sizes and spacing in a variable collection with **Desktop / Tablet / Phone modes** so the phone frame takes the phone values, rather than resizing text by hand.

---

## 4. Native app screens

### 4.1 Anatomy of an iPhone screen (402×874 pt, measured [20])

| Band | pt | Share of height |
|---|---|---|
| Status bar + Dynamic Island (top safe area) | 62 (47 on the 17e, 68 on the Air) | 7% |
| Navigation bar with the large title | 106 → 54 when collapsed | 12% → 6% |
| Content | 623 at rest, 677 when the title collapses | **71% → 77%** |
| Tab bar (incl. the 34 pt home indicator) | 83 | 9.5% |

About 11–12 one-line rows fit in the content zone. A primary 50 pt button is about the height of one row.

### 4.2 Rules

1. **No hero in an app screen.** The top-level screen title is the 34 pt Large Title, which collapses on scroll [5]. Content starts right below it. Keep the title under 15 characters [5]. Screens deeper in the stack use the inline title. Exceptions are onboarding, empty states, and paywalls. Even there, the measured web pattern (§5) is the ceiling: one 32–40 pt headline, with an image doing the visual work.
2. **Content takes center stage.** Controls float on the Liquid Glass layer above the content. Use the scroll-edge effect, not solid bars [2][10][12]. Every element must earn its place [13].
3. **Buttons:**
   - Use the system sizes: 34 pt for in-content actions and 50 pt (`.large`) for the one primary action of a flow [20].
   - Use **one or two prominent buttons per view** [1]. Put the primary action in a toolbar as a single `.prominent` item on the trailing side [5].
   - A full-width button is for the bottom of onboarding, a sheet, or a form. Make it a capsule with the side margin on each side ("a capsule with extra margin" [10]), never edge-to-edge. In SwiftUI, `buttonSizing(.flexible)` spans the container: 370 pt on a 402 pt phone [9][20]. Apple's only explicit "span the width" rule is for watchOS [1].
   - The label stays at body size (17 pt). A bigger button gets more padding, not bigger type [20].
4. **Rows, not cards, for lists.** Inset-grouped rows are 53 pt (1 line) or 69 pt (title + subtitle) [20]. Keep row text short and move long text to a detail view [7].
5. **Sheets** have medium (about half the screen) and large detents, a grabber when resizable, and Cancel leading / Done trailing [6].
6. **Tab bar:**
   - It floats at the bottom [4].
   - Use fewer tabs and avoid the More tab. The old "3–5 tabs" rule isn't in the current HIG; "five or fewer" appears only for customizable iPad tab bars [4].
   - Keep screen-specific actions such as checkout with their content, not in the tab bar [10].
7. **Shapes are concentric.** A nested radius = parent radius − padding. Capsules are half their height [10][11].
8. **Type:**
   - Use the text styles (Large Title, Title 1–3, Headline, Body, and down) so Dynamic Type works [3].
   - Add a level with the bold trait instead of inventing a new size [3].
   - Avoid Ultralight, Thin, and Light [3].
   - iOS 26 made alert and onboarding text bolder and left-aligned [10].

### 4.3 Material 3 equivalents (compact < 600 dp)

- **Buttons** (M3 Expressive [22]):

  | Size | Height (dp) | Label |
  |---|---|---|
  | XS | 32 | 14 sp |
  | **S** (default) | **40** | 14 sp |
  | M | 56 | 16 sp |
  | L | 96 | 24 sp |
  | XL | 136 | 32 sp |

  **L and XL are emphasis sizes with no compact-screen guidance** [23]. On a phone, use S by default and M for a single hero action. Never use L or XL as a row of CTAs.
- **FAB:** medium (80) on phones; only one per screen, at the lower right [26].
- **Bars:** the top app bar is 64, and the navigation bar is 64. Use 1–2 actions in the app bar [22][27].
- **List rows:** 56 / 72 / 88, with 16 side padding [22].
- **Margins:** 16 [25]. Keep text to 40–60 characters per line on compact [25].

---

## 5. Phone web: heroes and landing pages

Measured on apple.com (7 pages) plus Stripe, Linear, Vercel, and Nike, on 2026-10-26 [21]:

| Metric | Phone median (range) | Desktop median (range) |
|---|---|---|
| Hero headline | **40** (32–48) | 64 (44–88) |
| Headline phone ÷ desktop | **0.59** overall; Apple 0.50 | — |
| Hero text block, share of the first viewport | **20%** (13–28% when there is an image) | 16% |
| Hero block with an image, share of the first viewport | 59–100% (median 69%); the **image** fills it, not the type | 77–100% |
| Header-style hero (title only, no image) | 33–42% of the first viewport | 37–43% |
| CTA | **36** pill with a 14 px label (Apple); 40–44 elsewhere | 44 / 17 (Apple) |
| CTA full width | No on 8/10 sites. Stripe and Vercel stack full-width 40–44 px buttons with an 8–12 gap | No |
| Type sizes in the first viewport | **3** | 4 |
| Section gap | ~×0.75 of desktop | — |

**Rules for a phone hero:**
1. Headline 32–48 px. **Default to 40.** Use 48 only for a one- or two-word page title.
2. Text block ≤ ~30% of the first viewport. If the hero is taller, the extra height is **image or product**, not bigger type, padding, or buttons.
3. At most 2 CTAs. Use pills (36–44 px tall, 14–17 px labels) side by side, or full-width stacked with the page margin when the labels are long. Never make CTAs taller than 44–50 px.
4. Three type sizes in the first view: headline, one supporting size, and one CTA/caption size.
5. Re-flow, don't shrink: stack columns, move text to the top, and move persistent purchase actions into a bottom bar.

---

## 6. Reach and placement

| Claim | Reading | Grade |
|---|---|---|
| People hold phones in many ways and switch often: one-handed 49%, cradled 36%, two-handed 15% (780 people observed in 2013) [14] | Design for all grips, not one thumb | [E2] large sample, informal observation |
| The classic "thumb zone" heat map | Its author later said his reach drawings came from informal sampling "and should be ignored", and called the thumb-sweep chart "well-known, but incorrect" [14][15] | **[E3] don't use as a rule** |
| People prefer to look at and tap the center; accuracy is about 7 mm at the center vs about 12 mm at the corners [15] | Primary content in the middle band; navigation and actions along the top and bottom edges | [E2] |
| "it tends to be easier and more comfortable for people to reach a control when it's located in the middle or bottom area of the display" [8] | Put frequent actions low; top corners stay fine for Back and Done | [E2] platform guidance |
| Every element has an opportunity cost on a small screen; decorative images just lengthen pages [16][17] | A tall decorative hero pushes the task below the fold | [E2] |

---

## 7. Common mistakes (the oversized-mobile tells)

| Mistake | What it looks like | Do instead |
|---|---|---|
| Desktop hero shrunk by width | 56–72 px headlines on a 390 px screen; a 4-line headline; `font-size: 6vw` | 32–48 px (default 40). Use the translation table (§3) |
| Giant buttons | 56–64 px tall, bold 18–20 px labels, full-width on every section | 50 pt (iOS primary), 40–44 (web/Android). Label at body size or 14 |
| Every button prominent | 3–4 filled buttons on one screen | 1–2 prominent; the rest tinted, bordered, or text [1][23] |
| Edge-to-edge buttons | Full-width with 0–8 px side margins | A capsule inset by the 16–24 page margin [10] |
| Desktop padding kept | 48–64 px card padding, leaving a narrow text column | 16–32 (×0.7 of desktop) |
| A hero in an app screen | A 40–60 pt welcome headline plus an illustration above the content of a daily-use screen | The 34 pt Large Title, then content |
| Size ladder too steep | 5–6 type sizes in one view, every level bigger | 3–4 sizes; add levels with weight and color |
| Size used as hierarchy everywhere | Everything big, so nothing stands out | Style and position: one prominent element, others quiet [1] |
| Body shrunk | 13–14 px reading text "to fit" | 16–17 reading text; 14 only for secondary copy |
| Radius scaled | Card radius halved on the phone | Keep the radius; adjust padding |
| Chrome bloat | Header + banner + tabs + filter bar taking 35–40% of the height | Keep total chrome ≤ ~30% (iOS: 29% at rest) |

---

## 8. Procedure: proportion a phone screen

1. **Pick the platform family** (native iOS, Android, phone web marketing, or phone web app) and take its column from §2.
2. **Set the frame and margins:** 402×874 with 16 margins (20 at ≥420), or 390 CSS px with 16–24 margins.
3. **Set the type ramp** for the phone, not from the desktop: largest size (34 app / 40 web hero), body 16–17, secondary 14, caption 12. Check that the first view has 3–4 sizes.
4. **Place the chrome** (top bar, bottom navigation, safe areas) and check that content gets ≥ 65–70% of the height.
5. **Choose the primary action:** one prominent button (34/50 pt iOS, 40/56 dp Android, 36–44 px web), placed in the toolbar or bottom area. Everything else is secondary in style.
6. **Lay out the content** in rows and groups (53–56 rows, 16–20 card padding, 24–32 between groups).
7. **Translate any desktop value** with §3. Never copy a desktop number to the phone unchanged unless it is ≤17 px text, a radius, or a target.
8. **Check** at 375×667 and 440×956, at 200% text size (Dynamic Type / browser zoom), and with the §7 list. Measure two things in the screenshot: the height of the largest text and of the primary button. If either breaks the §2 budget, fix it before showing.

**Apply.** Put the phone budget in the spec line before building: "Phone: 402×874, margin 16, title 34/body 17, primary 50 capsule ×1, rows 53, 3 sizes in view."
**Limit.** These are calibrated on Apple and a handful of top sites in 2026-10. Brands with a deliberate expressive voice (fashion, editorial, kinetic type) may break the hero ceiling on purpose. Write down why and still keep body, targets, and margins on budget. No platform publishes a hero-height or sizes-per-screen number; those are measured medians, not laws.

---

## Sources

[1] Apple. (2025, updated Dec 16). *Buttons*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/buttons
[2] Apple. (2026, updated Sep 9). *Layout*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/layout
[3] Apple. (2025, updated Dec 16). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography
[4] Apple. (n.d., accessed 2026-10-26). *Tab bars*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/tab-bars
[5] Apple. (n.d., accessed 2026-10-26). *Toolbars*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/toolbars
[6] Apple. (n.d., accessed 2026-10-26). *Sheets*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/sheets
[7] Apple. (2023). *Lists and tables*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/lists-and-tables
[8] Apple. (n.d., accessed 2026-10-26). *Designing for iOS*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/designing-for-ios
[9] Apple. (n.d.). *ControlSize* and *buttonSizing(_:)*. SwiftUI documentation. https://developer.apple.com/documentation/swiftui/controlsize ; https://developer.apple.com/documentation/swiftui/view/buttonsizing(_:)
[10] Apple. (2025). *Get to know the new design system* (WWDC25 session 356). https://developer.apple.com/videos/play/wwdc2025/356/
[11] Apple. (n.d.). *ConcentricRectangle*. SwiftUI documentation. https://developer.apple.com/documentation/swiftui/concentricrectangle
[12] Apple. (2025). *Meet Liquid Glass* (WWDC25 session 219). https://developer.apple.com/videos/play/wwdc2025/219/
[13] Apple. (2026, Jun 8). *Design principles*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/design-principles
[14] Hoober, S. (2013, February). *How Do Users Really Hold Mobile Devices?* UXmatters. https://www.uxmatters.com/mt/archives/2013/02/how-do-users-really-hold-mobile-devices.php
[15] Hoober, S. (2017, March). *Design for Fingers, Touch, and People, Part 1*. UXmatters. https://www.uxmatters.com/mt/archives/2017/03/design-for-fingers-touch-and-people-part-1.php
[16] Budiu, R. (2015, Apr 19). *Mobile User Experience: Limitations and Strengths*. Nielsen Norman Group. https://www.nngroup.com/articles/mobile-ux/
[17] Budiu, R. (2023, Jan 1). *The State of Mobile User Experience*. Nielsen Norman Group. https://www.nngroup.com/articles/state-mobile-ux/
[18] Apple. (2025–2026). *iPhone 17*, *iPhone Air*, *iPhone 17e*, *iPhone 18 Pro* technical specifications (pixels and ppi; points derived at @3x and confirmed in the simulator [20]). https://www.apple.com/iphone-17/specs/ ; https://www.apple.com/iphone-air/specs/ ; https://www.apple.com/iphone-17e/specs/ ; https://www.apple.com/iphone-18-pro/specs/
[19] Apple. (2026). *iOS 27* (compatible devices). https://www.apple.com/os/ios/ ; Apple Support. *iPhone SE (3rd generation) — Tech Specs*. https://support.apple.com/en-us/111866
[20] Design Studio research. (2026, Oct 26). *iOS layout probe*: UIKit + SwiftUI app on the iOS 27.0 simulator (Xcode 27.1; iPhone 17e, 17, Air, 18 Pro Max) at the default text size. Source and logs: `dev/research/mobile-proportions-2026-10/probe/`. iOS 26 values were not measured separately.
[21] Design Studio research. (2026, Oct 26). *Phone (390×844) vs desktop (1440×900) measurements* of apple.com (home, /iphone/, /iphone-18-pro/, /airpods/, /airpods-pro/, /shop/buy-iphone, /apple-music/), stripe.com, linear.app, vercel.com, nike.com, plus Apple's 212 `typography-*` CSS tokens. Headless Chromium with an iPhone preset (not real Safari). Notes and scripts: `dev/research/mobile-proportions-2026-10/measured.md`.
[22] Google / AOSP. (2026, accessed Oct 26). *Compose Material3 design tokens* (Button*, Fab*, AppBar*, NavigationBar*, List, Shape, TypeScale tokens). https://github.com/androidx/androidx/tree/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens
[23] Google. (n.d., accessed 2026-10-26). *Buttons: Overview* and *Guidelines*. Material Design 3. https://m3.material.io/components/buttons/overview ; https://m3.material.io/components/buttons/guidelines
[24] Google. (n.d., accessed 2026-10-26). *Lists: Specs*. Material Design 3. https://m3.material.io/components/lists/specs
[25] Google. (n.d., accessed 2026-10-26). *Breakpoints: Compact* and *Window size classes*. Material Design 3. https://m3.material.io/foundations/layout/applying-layout/compact ; https://m3.material.io/foundations/layout/applying-layout/window-size-classes
[26] Google. (n.d., accessed 2026-10-26). *FAB: Guidelines*. Material Design 3. https://m3.material.io/components/floating-action-button/guidelines
[27] Google. (n.d., accessed 2026-10-26). *App bars: Guidelines*. Material Design 3. https://m3.material.io/components/app-bars/guidelines
