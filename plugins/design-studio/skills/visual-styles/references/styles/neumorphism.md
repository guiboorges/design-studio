# Neumorphism

> **Scope:** "Soft UI": monochrome surfaces where elements appear extruded from or pressed into the background using paired light and dark shadows. Popular 2019–2021, with serious accessibility problems.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Trigger:** In late 2019, Alexander Plyuto posted a mobile banking app mockup with soft, extruded elements on Dribbble [1][2]. Michał Malewicz writes that the shot by "alexplyuto" gained "over 3000 likes" and that its skeuomorphic switches and colorful components "made it work" [3]. Wikipedia instead reports about 3,000 *views* [1], so the exact figure is uncertain. Shot title and exact date: [unverified] (Dribbble blocked automated access during this pass).
- **Name:** Per Malewicz, Jason Kelley proposed "Neuomorphism" in the shot's comments, and Malewicz "decided to skip the 'o'" to get "Neumorphism" [3]. Wikipedia credits Jason Kelly (spelled differently) with coining it in 2019 as a blend of "neo" and "skeuomorphism" [1]. Malewicz's article popularized the term [3].
- **Precursors and adjacent uses:** Huawei's HarmonyOS interface for the Honor Vision smart TV (launched August 2019) used similar soft light-and-shadow effects. macOS Big Sur (Nov 12, 2020) featured some neumorphic elements without adopting the style fully [1].
- **Decline:** Adoption declined by 2021, and glassmorphism became more popular in the early and mid-2020s [1]. Malewicz's own 2021 update notes the style's state problems [3].
- **Cultural reason:** It was a Dribbble-native reaction to years of flat design: a way to bring back tactility (a "middle ground between skeuomorphism and flat design" [1]) without photoreal textures. It is visually striking in static mockups, which suited showcase platforms better than shipped products.

## Visual DNA

- Element color equals background color. Shape is defined **only** by a light shadow on one side and a dark shadow on the other [1][3].
- Monochromatic or pastel palette, low contrast, subtle shadows: Toptal's three "common characteristics" [2].
- Two states: **extruded** (outer shadows) for resting and **pressed** (inset shadows) for active or selected.
- Rounded rectangles and circles with large radii.
- Sparse accents: one saturated color for the active state, progress, or toggles.
- The background "cannot be fully black or fully white." It needs a slight tint so both shadows show [3].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | Rounded or geometric sans (Nunito, Poppins, SF Pro Rounded, Inter). | |
| Typography: scale | 1.2 ratio; body 16px; numerals large (dashboards, players). | |
| Typography: weights | 500–700. Avoid 300. Text sits on a mid-light background with reduced contrast headroom. | |
| Typography: letter-spacing | 0 to +0.01em. | |
| Color: structure | One background tone + darker and lighter shadow tones derived from it + dark text + one accent. | |
| Color: example values | Background `#E0E5EC` oklch(92.0% 0.011 256.7); dark shadow `#A3B1C6` oklch(75.6% 0.034 258.4); light shadow `#FFFFFF`; text `#31344B` oklch(33.3% 0.041 278.2) (9.63:1 on bg); muted text `#6B7280` (3.82:1, **fails** 4.5:1 for body); accent `#4F46E5` oklch(51.1% 0.230 277.0) (4.97:1 on bg; white on accent 6.29:1). | Shadow tones against the background are only 1.72:1 (dark) and 1.27:1 (light), so the shape edges fail the 3:1 non-text contrast requirement [4]. |
| Radius | 12–24px for cards; 50% for round buttons. | |
| Borders | None (signature). **Accessible variant:** add a 1px border at ≥3:1 (e.g. `#6E7B90` on `#E0E5EC` = 3.39:1) to interactive controls. | |
| Shadows (extruded) | `box-shadow: 9px 9px 16px rgb(163 177 198 / 0.6), -9px -9px 16px rgb(255 255 255 / 0.5);` | Two shadows separated by a comma, "one at negative values while the other at positive" [3]. |
| Shadows (pressed) | `box-shadow: inset 6px 6px 10px rgb(163 177 198 / 0.6), inset -6px -6px 10px rgb(255 255 255 / 0.5);` | Malewicz: "This pressed state has too little contrast to signify a difference" [3]. Add color, icon fill, or outline changes. |
| Spacing / grid | 8px base, generous padding (24–32px) so shadows don't collide. | |
| Imagery & iconography | Simple line icons in the text color; filled icons and accent color for active state. | |
| Motion | 150–200ms ease-out when switching extruded and pressed states. | |
| Texture / effects | None besides shadows. Optional very soft background gradient (≤3% lightness change). | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| Alexander Plyuto, mobile banking app concept (Dribbble) | Late 2019 | The shot credited with starting the trend [1][3]. |
| Honor Vision TV, HarmonyOS UI (Huawei) | 2019 | Shipping product with similar soft light and shadow [1]. |
| macOS Big Sur (some controls) | 2020 | Partial neumorphic elements in a major OS [1]. |

## Fits / Avoid

**Fits:** concept and showcase work; physical-device metaphors (smart-home remotes, audio players, calculators) where few large controls are on screen; decorative non-interactive cards; brand illustration.

**Avoid:** forms, data-dense dashboards, anything requiring clear state communication, products serving older or low-vision users, and any product with legal accessibility obligations, unless you use the accessible variant.

**Evidence on people:**
- The core technique gives figure and background the same color, so "there's no contrast to measure" for the element edge [3]. Computed values for a typical palette are 1.27–1.72:1, below the WCAG 3:1 minimum for identifying UI components and states [4]. **[E2]**
- Practitioners widely report low readability and difficulty identifying buttons, icons, and forms, and that strictly monochrome palettes can cause problems for people with color-vision deficiencies [2]. **[E2]**
- Pressed-versus-unpressed states are hard to perceive. Even the term's popularizer says so [3]. **[E2]**
- No controlled usability study of neumorphism was found in this pass. Treat stronger claims as **[E3]**.

**Accessibility risks:** fails non-text contrast for boundaries and states [4]; muted text grays drift below 4.5:1 [5]; focus indicators get lost (add a visible ≥3:1 focus ring) [4]; disabled vs enabled is indistinguishable.

**When it ages badly:** quickly. It is strongly associated with 2020 Dribbble shots and reads as a dated trend in shipped products.

**Limit:** Never use shadow-only boundaries for interactive controls in production. Add borders, color, or icon changes so state and affordance survive at 3:1.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Only the accessible variant: neumorphic containers with bordered, color-coded controls and explicit states. |
| Website | Decorative hero mockups or illustration panels; keep navigation and forms conventional. |
| Social post | Works well as a static visual. Soft 3D shapes on pastel grounds, large numerals. |
| Print / editorial | Translates poorly. Subtle shadows flatten in print. Use real emboss or deboss instead. |
| Billboard | Avoid. The low-contrast shading disappears at distance. |

## Common mistakes

- Pure white or pure black backgrounds, where one shadow vanishes [3].
- Shadow-only buttons with no label contrast or border.
- Inset vs outset as the only state signal [3].
- Using colored shadows that don't derive from the background hue, which looks muddy.
- Stacking neumorphic elements densely, so shadows overlap and edges blur.

## Pairs well with / Related styles

- **Parents:** `skeuomorphism.md` and `flat-design.md` (it sits between them) [1].
- **Successor trend:** `glassmorphism.md` [1]. **Soft-3D sibling:** `claymorphism.md`.
- **Safer alternatives:** `material-design.md` (tonal elevation with defined states), `minimalism.md` with flat 2.0 signifiers.

## Sources

[1] Wikipedia contributors. (n.d.). *Neumorphism*. Wikipedia. https://en.wikipedia.org/wiki/Neumorphism (secondary source; accessed 2026-10)
[2] Osinusi, K. (last updated 2024, September 18). *Neumorphic UI design: The new trend in UI design* (title as listed by Wikipedia). Toptal Design Blog. https://www.toptal.com/designers/ui/neumorphic-ui-design
[3] Malewicz, M. (n.d., with 2021 update). *Neumorphism in user interfaces*. Hype4 Academy. https://hype4.academy/articles/design/neumorphism-in-user-interfaces
[4] W3C. (2023). *Understanding SC 1.4.11 Non-text Contrast* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[5] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
