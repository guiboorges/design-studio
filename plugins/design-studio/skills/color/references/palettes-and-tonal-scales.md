# Palettes and Tonal Scales

> **Scope:** How to build a product or brand palette: start from brand hues, add neutrals, generate 10–12-step tonal scales in OKLCH, map the steps to semantic roles and component tokens for light and dark modes, and export them as tokens. Also covers how the main reference systems build their scales, data-visualization palettes, brand proportions, and print vs. screen palettes.
> **Last verified:** 2026-10 (reference-system docs, Tailwind v4.3, DTCG 2025.10)
> **Used by:** color-specialist, design-system-architect, ui-designer, design-engineer, creative-director, editorial-designer, print-ooh-designer, social-media-designer, design-critic

Related files: `color-theory.md` (hue relationships, harmony), `color-spaces-and-management.md` (OKLCH, P3, CMYK, ICC, gamut mapping), `contrast-and-dark-mode.md` (contrast formulas, APCA, CVD, dark mode). Color meaning and emotion live in `cognitive-psychology` → `color-psychology.md`. Per-style palettes live in `visual-styles`.

---

## 1. The procedure at a glance

| Step | Output | Rule of thumb |
|------|--------|---------------|
| 1. Brand hues | 1 primary hue, 0–2 secondary/accent hues | Record each as hex **and** OKLCH. Check the primary against white and black first (section 7). |
| 2. Neutrals | One gray scale, tinted or pure | Tint with the primary hue at chroma 0.004–0.016, or use pure gray (chroma 0). |
| 3. Tonal scales | 10–12 steps per hue | Fix the hue. Set lightness (L) per step from a shared ladder. Taper chroma toward both ends. Shift hue only for yellows, oranges, and some blues. |
| 4. Status hues | success, warning, danger, info scales | Build them on the same L ladder so equal steps give similar contrast. |
| 5. Semantic roles | primary, on-primary, surface, on-surface, outline, success… | Map roles to steps separately for light and dark mode. Verify every text/background pair. |
| 6. Component tokens | `button-primary-bg`, `input-border`… | Components point to roles, never straight to raw steps. |
| 7. Export | DTCG JSON → CSS, iOS, Android, Figma variables | One file per mode, same token names in each. |

The three-tier structure (primitive → semantic → component) is the norm across Material, Carbon, Spectrum, and Radix-based systems. Carbon names tokens by element, role, and optional state (`$background-hover`, `$text-primary`), keeps names constant across themes, and changes only the values [9]. **[E2]**

---

## 2. Brand hues

**Rule:** Pick the primary from the brand, then test it as a UI color before building on it.

1. Convert the brand hex to OKLCH (L, C, H). Any CSS Color 4 tool works, and the conversion matrices are public [1].
2. Compute its WCAG 2 contrast against white and against black (formula in `contrast-and-dark-mode.md`).
   - **≥ 4.5:1 with white:** usable as a filled button with white text and as link text on white.
   - **3:1 to 4.5:1 with white:** white text only at large sizes. Use a darker step for small-text buttons.
   - **< 3:1 with white** (most yellows, oranges, light greens, cyans): use dark text on it. Spectrum requires black text on its yellow, orange, chartreuse, and celery [11]. Radix designs Sky, Mint, Lime, Yellow, and Amber step 9 for dark foreground text [6].
3. Decide whether the exact brand hex has to appear in the UI. If it does, anchor the scale so that one step is exactly the brand color (the worked example anchors step 600). If it doesn't, let the ladder pick the nearest step and keep the brand hex for marketing.
4. Secondary and accent hues get the same treatment. Keep each hue at least about 30° of OKLCH hue away from the status hues (red ≈ 25–30°, amber ≈ 70–85°, green ≈ 145–155°). Otherwise "brand accent" and "error" read as the same thing.

**Apply:** UI/web as above. Print and OOH: the brand hue also needs a spot (Pantone) and CMYK spec (section 10). Social: the primary often appears as a large field, where contrast with overlaid text matters more than the scale.
**Limit:** A brand color that fails with both white and black (mid-lightness, ~3:1 each way, e.g. a saturated mid-orange) can still be a fill or an illustration color. Never use it for text, icons, or the only signal of state.

---

## 3. Neutrals: tinted vs. pure gray

| Option | OKLCH chroma | Looks | Use when | Risk |
|--------|--------------|-------|----------|------|
| Pure gray | 0 | Neutral, technical, print-like | Data-heavy UIs, editorial, photo-centric products (gray doesn't fight images) | Can feel cold next to a warm brand |
| Cool-tinted (blue/slate) | 0.004–0.016 at H 250–265 | Crisp, "software" | Blue/violet brands | Looks blue next to warm photos |
| Warm-tinted (sand/stone) | 0.004–0.016 at H 60–90 | Soft, paper-like | Warm brands, lifestyle, editorial | Can look dirty or yellowed on poorly calibrated screens |
| Brand-tinted | Primary hue, chroma 0.004–0.016 | Cohesive | Most product UIs | Over-tinting (chroma above ~0.02) makes text look colored |

Reference systems ship both kinds. Tailwind v4.3 has nine neutral-leaning families. `neutral-500` is `oklch(55.6% 0 0)` (pure), and `gray-500` is `oklch(55.1% 0.027 264.364)` (cool-tinted) [8]. Radix ships six grays: Gray, Mauve, Slate, Sage, Olive, and Sand [7].

**Rule:** Taper neutral chroma at the light end (0.004 at L 97%). Barely tinted near-whites read as "off" rather than "tinted." Keep text-level neutrals (L ≤ 35%) at chroma ≤ 0.016.
**Limit:** Tinted neutrals change hue under CVD simulation and in print conversions. Check that gray text doesn't look colored on the actual output.

---

## 4. Tonal scales in OKLCH

### 4.1 Why OKLCH

OKLCH is the polar form of Oklab (Ottosson, 2020). L is perceived lightness, C is chroma, and H is the hue angle [1]. Equal steps in L look roughly equally spaced across hues, and hue holds steadier than in HSL or CIELAB. Ottosson notes that CIELAB's largest issue is "its inability to predict hue. In particular blue hues are predicted badly", and that blends of white with blue in CIELAB, CIELUV, and HSV "all show hue shifts towards purple" [1]. HSV/HSL-style models are not perceptual: in a constant-value HSV sweep, "yellow, magenta and cyan appear much lighter than red and blue" [1]. Tailwind v4 defines its whole default palette in OKLCH [8]. Color-space details and gamut mapping are in `color-spaces-and-management.md`.

### 4.2 The procedure

1. **Choose the step count.**
   - 11 steps (50, 100…900, 950) match Tailwind [8] and most engineering expectations.
   - 12 steps with fixed jobs match Radix [6] (section 5.2).
   - The worked example uses 12: Tailwind's 11 plus a `975` step for dark-mode canvases.
2. **Fix a shared lightness ladder** for every hue. All palettes then share "step = lightness = approximate contrast." The example ladder:

   | Step | 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950 | 975 |
   |------|----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|
   | OKLCH L (%) | 97.5 | 94.5 | 89 | 81 | 71.5 | 63.5 | 56.1 | 49 | 41.5 | 33.5 | 26 | 20 |

   Space the steps more finely at the light end, where small L changes are visible on large surfaces, and more widely in the middle. If the brand color must be a step, move the nearest step's L to the brand's L (here 600 = 56.1%).
3. **Keep the hue fixed** at the brand hue.
4. **Taper chroma toward both ends.** Peak chroma sits at the brand's own lightness. Above the peak the example uses `C = Cpeak × (1 − d)^0.8`, where d is the distance from the peak to white (0–1). Below the peak it uses `C = Cpeak × (1 − 0.55·d²)`. The light-end taper does the most work: without it, light tints come out neon (light greens and cyans have a lot of sRGB gamut at high L).
5. **Gamut-map each step.** If L, C, H falls outside sRGB, reduce C at fixed L and H until it fits. The CSS Color 4 gamut-mapping approach does the same thing, with a perceptual tolerance (see `color-spaces-and-management.md`). If you ship Display P3, generate a second set with a P3 gamut limit and serve it with `@media (color-gamut: p3)`.
6. **Apply hue shifts where needed:**
   - **Yellows, ambers, and oranges:** at constant hue, the dark steps turn olive or khaki. "Dark yellow" doesn't exist as a perceived color, so dark steps read as brown-green. Rotate the dark steps toward orange/red (lower H) by 15–30°. The example amber goes from H 80 at step 300 to H 50 at step 950.
   - **Blues:** OKLCH keeps blue steadier than LCH/Lab [1]. If you generate in CIELAB/LCH or HSL, expect light blues to drift purple, and compensate by lowering H by about 5–10° in the light steps. Check by eye.
   - **Reds:** dark reds at constant hue can look brown. Some systems rotate slightly toward crimson (higher H) in the darks. This is a matter of taste.
   - **Greens:** usually fine at constant hue. Very light greens may need a small shift toward yellow (lower H) to avoid looking minty.
7. **Verify, don't assume.** Equal L does **not** give equal WCAG contrast across hues. In the example, step 600 gives 4.75:1 (blue), 4.30:1 (green), 4.77:1 (amber), and 5.16:1 (red) with white. That's because WCAG luminance weights green at 0.7152 while OKLCH L is a perceptual estimate [12]. Always compute the ratio for each pair you actually use.

**Apply:** UI/web: generate once, store as primitives, and never hand-edit single steps without re-checking contrast. Print: tonal scales become tint percentages of a spot color or CMYK builds, not OKLCH steps (section 10).
**Limit:** The ladder gives a starting point, not a guarantee. Thin fonts, small sizes, and anti-aliasing need more contrast than the formula suggests [13].

---

## 5. How the reference systems build their scales

### 5.1 Comparison

| System | Steps | Color model | How steps are set | Role layer | Dark mode |
|--------|-------|-------------|-------------------|-----------|-----------|
| **Material 3** | Tones 0–100. Standard palettes use 0, 10, 20…90, 95, 99, 100, plus surface tones such as 4, 6, 12, 17, 22, 24, 87, 92, 94, 96, 98 | HCT: hue and chroma from CAM16, tone = CIELAB L* [2] | Tone is L*, so contrast between two tones is predictable for any hue | Roles (primary, on-primary, primary-container, surface-container…) map to tones per mode [3][4] | Same palettes, different tones per role |
| **Radix Colors** | 12 steps, each with a defined job | Hand-tuned, plus P3 and alpha variants [7] | Designed so steps 11 and 12 reach APCA Lc 60 and Lc 90 on step 2 [6] | Step number = role (section 5.2) | A matching dark scale; switched with a class [7] |
| **Tailwind CSS v4** | 11: 50, 100…900, 950 [8] | OKLCH | Hand-tuned values, 26 families (17 chromatic, 9 neutral-leaning) [8] | None built in; teams add semantic variables | Author's job (`dark:` variant or variables) |
| **IBM Carbon** | 10 grades per hue (10–100) plus black and white [9] | Hand-tuned | Contrast by counting grade steps between colors (table in docs) [9] | Tokens: element-role-state, e.g. `$text-primary` [9] | Four themes: White, Gray 10 (light), Gray 90, Gray 100 (dark) [9] |
| **Adobe Spectrum / Leonardo** | Indices like 100–1600 (per docs images) [11] | Generated with Leonardo from key colors and target contrast ratios [11] | Contrast-first: you specify ratios, and Leonardo finds the color [10] | Text/icon tokens "guaranteed to meet or exceed WCAG contrast minimums" on background layers [11] | Regenerated against a dark background lightness |

### 5.2 Radix 12-step jobs (verbatim roles from the docs [6])

| Step | Job |
|------|-----|
| 1 | App background |
| 2 | Subtle background |
| 3 | UI element background (default) |
| 4 | Hovered UI element background |
| 5 | Active / selected UI element background |
| 6 | Subtle borders and separators (non-interactive) |
| 7 | UI element border (interactive) |
| 8 | Hovered UI element border, stronger borders, focus rings |
| 9 | Solid backgrounds. "The purest step", the highest chroma |
| 10 | Hovered solid backgrounds |
| 11 | Low-contrast text |
| 12 | High-contrast text |

**Apply:** Radix's job table is a good default even when you generate your own scale. It answers "which step for a hover state?" without debate.

### 5.3 Material 3 tone-to-role map (standard contrast)

From the Material Color Utilities source. The `Scheme` class is deprecated in favor of `DynamicScheme`, but the core tone mapping is the same [3][4].

| Role | Light tone | Dark tone |
|------|-----------|-----------|
| primary / on-primary | 40 / 100 | 80 / 20 |
| primary-container / on-primary-container | 90 / 10 | 30 / 90 |
| surface | 98 | 6 |
| surface-container lowest / low / default / high / highest | 100 / 96 / 94 / 92 / 90 | 4 / 10 / 12 / 17 / 22 |
| surface-dim / surface-bright | 87 / 98 | 6 / 24 |
| on-surface | 10 | 90 |
| outline / outline-variant | 50 / 80 | 60 / 30 |
| error / on-error | 40 / 100 | 80 / 20 |

Material adds three more contrast levels (−1, 0.5, 1.0) that move these tones. For example, dark surface-container-highest goes 22 → 26 → 30 [4][5].

**Tone → contrast** (computed from tone = L*, using the WCAG luminance formula; valid for any hue):

| Tone | 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 100 |
|------|---|----|----|----|----|----|----|----|----|----|----|-----|
| vs white | 21.0 | 17.1 | 13.1 | 9.35 | 6.46 | 4.48 | 3.17 | 2.30 | 1.70 | 1.29 | 1.13 | 1.0 |
| vs black | 1.0 | 1.23 | 1.60 | 2.25 | 3.25 | 4.68 | 6.62 | 9.15 | 12.3 | 16.3 | 18.5 | 21.0 |

So primary T40 with white text is 6.46:1, and dark-mode primary T80 with on-primary T20 is 7.72:1. Note that **T50 vs white is 4.48:1, which fails 4.5:1.** A tone difference of 50 is not quite enough, and you need a gap of about 51+.

**Dynamic color:** Material can derive all five key palettes (primary, secondary, tertiary, neutral, neutral variant) plus error from one seed color, such as a wallpaper, and regenerate the scheme [2]. **Apply:** when a product needs user- or content-driven theming, use the library rather than reimplementing HCT.

### 5.4 Leonardo (contrast-first generation)

```js
import { Theme, Color, BackgroundColor } from '@adobe/leonardo-contrast-colors';

const gray = new BackgroundColor({ name: 'gray', colorKeys: ['#cacaca'], ratios: [2, 3, 4.5, 8] });
const blue = new Color({ name: 'blue', colorKeys: ['#5CDBFF', '#0000FF'], ratios: [3, 4.5] });
const theme = new Theme({ colors: [gray, blue], backgroundColor: gray, lightness: 97 });
// Dark mode: same colors, regenerate with e.g. lightness: 8
```

Options: interpolation `colorspace` (LCH, LAB, CAM02, HSL, HSLuv, HSV, RGB), a Theme-level `contrast` multiplier, and `saturation` 0–100 [10]. Outputs usually land slightly **above** the target ratio because of RGB rounding [10]. **Apply:** use contrast-first generation when a product must offer a high-contrast mode or user-adjustable contrast. You regenerate with a higher `contrast` instead of hand-picking a second palette.

---

## 6. Semantic roles

| Role | Job | Contrast target (WCAG 2) |
|------|-----|--------------------------|
| `primary` | Main action fill, key accents | ≥ 3:1 vs adjacent surface if the fill is the only button boundary [14] |
| `on-primary` | Text/icons on primary | ≥ 4.5:1 (text); ≥ 3:1 (icons) |
| `primary-container` / `on-primary-container` | Tonal buttons, selected chips, highlights | ≥ 4.5:1 between the pair |
| `background` | App canvas | — |
| `surface`, `surface-raised`, `surface-sunken` | Cards, sheets, menus, wells | Distinguishable from background; borders carry the 3:1 if needed |
| `on-surface` | Body text | ≥ 4.5:1; aim ≥ 7:1 for long reading |
| `on-surface-variant` | Secondary text, captions | ≥ 4.5:1 |
| `outline` | Input borders, interactive boundaries | ≥ 3:1 vs adjacent color [14] |
| `outline-variant` | Decorative dividers | None (decorative) |
| `success`, `warning`, `danger`, `info` (+ `on-` and `-container`) | Status | Same as primary. Never color alone (`contrast-and-dark-mode.md`) |
| `focus` | Focus ring | ≥ 3:1 vs adjacent colors [14] |
| `disabled` | Inactive controls and text | Exempt from 1.4.3 and 1.4.11 [13][14], but keep it legible |

---

## 7. Worked example: one brand hex → full system

**Input:** brand `#2F6FDB` = `oklch(56.1% 0.178 260.3)`. It gives 4.75:1 with white and 4.42:1 with black.

**How the numbers were computed:**
- OKLCH ↔ sRGB uses Ottosson's published Oklab matrices [1], with the sRGB transfer function.
- Out-of-gamut steps were mapped by reducing chroma at fixed L and H (binary search).
- Hex values are rounded to 8 bits.
- Contrast ratios use the WCAG 2.2 relative-luminance formula (sRGB linearization threshold 0.04045, coefficients 0.2126 / 0.7152 / 0.0722) and `(L1 + 0.05) / (L2 + 0.05)` [12].
- APCA Lc values use the APCA-W3 0.0.98G-4g constants. They are shown for reference only (see `contrast-and-dark-mode.md`).
- All values were computed in this research pass, not copied from a tool.

### 7.1 Brand scale (H 260.3, peak C 0.178 at L 56.1%)

| Step | OKLCH | Hex | vs white | vs black |
|------|-------|-----|----------|----------|
| 50 | `oklch(97.5% 0.012 260.3)` | `#F2F7FF` | 1.08 | 19.52 |
| 100 | `oklch(94.5% 0.026 260.3)` | `#E3EEFF` | 1.17 | 17.94 |
| 200 | `oklch(89.0% 0.054 260.3)` | `#C7DCFF` | 1.39 | 15.11 |
| 300 | `oklch(81.0% 0.091 260.3)` | `#9FC2FC` | 1.81 | 11.60 |
| 400 | `oklch(71.5% 0.126 260.3)` | `#74A3F1` | 2.54 | 8.25 |
| 500 | `oklch(63.5% 0.154 260.3)` | `#5188E6` | 3.49 | 6.01 |
| **600 (brand)** | `oklch(56.1% 0.178 260.3)` | `#2F6FDB` | 4.75 | 4.42 |
| 700 | `oklch(49.0% 0.175 260.3)` | `#1A59C1` | 6.48 | 3.24 |
| 800 | `oklch(41.5% 0.166 260.3)` | `#0543A3` | 8.98 | 2.34 |
| 900 | `oklch(33.5% 0.139 260.3)` | `#00307C` | 12.25 | 1.71 |
| 950 | `oklch(26.0% 0.108 260.3)` | `#001F57` | 15.75 | 1.33 |
| 975 | `oklch(20.0% 0.083 260.3)` | `#00123A` | 18.30 | 1.15 |

Steps 50–200 are gamut-limited: the taper asked for more chroma than sRGB allows at that L, so chroma was clipped.

### 7.2 Neutral scale (brand-tinted, H 260.3)

| Step | OKLCH | Hex | vs white | vs black |
|------|-------|-----|----------|----------|
| 50 | `oklch(97.5% 0.004 260.3)` | `#F5F7F9` | 1.07 | 19.55 |
| 100 | `oklch(94.5% 0.007 260.3)` | `#EAEDF2` | 1.17 | 17.89 |
| 200 | `oklch(89.0% 0.012 260.3)` | `#D6DBE3` | 1.39 | 15.10 |
| 300 | `oklch(81.0% 0.012 260.3)` | `#BCC1C9` | 1.81 | 11.61 |
| 400 | `oklch(71.5% 0.012 260.3)` | `#9FA3AB` | 2.53 | 8.30 |
| 500 | `oklch(63.5% 0.012 260.3)` | `#868B92` | 3.43 | 6.12 |
| 600 | `oklch(56.1% 0.012 260.3)` | `#71757C` | 4.63 | 4.54 |
| 700 | `oklch(49.0% 0.012 260.3)` | `#5C6167` | 6.25 | 3.36 |
| 800 | `oklch(41.5% 0.012 260.3)` | `#484C52` | 8.64 | 2.43 |
| 900 | `oklch(33.5% 0.012 260.3)` | `#33373D` | 11.97 | 1.75 |
| 950 | `oklch(26.0% 0.014 260.3)` | `#20242B` | 15.57 | 1.35 |
| 975 | `oklch(20.0% 0.014 260.3)` | `#12161C` | 18.15 | 1.16 |

### 7.3 Status scales (same L ladder; selected steps)

| Step | Green H 150 | Amber H 80 → 47 (hue-shifted) | Red H 27 |
|------|-------------|-------------------------------|----------|
| 100 | `#DDF4E1` | `#FFEAC7` | `#FFE6E3` |
| 300 | `#95D2A1` (1.75 vs W) | `#F7B31A` `oklch(81% 0.163 80)` (1.84 vs W) | `#FFA69B` |
| 400 | `#61BA77` | `#D99300` | `#F4786D` |
| 600 | `#008D3F` (4.30 vs W) | `#A46400` (4.77) | `#D42325` (5.16) |
| 700 | `#007433` (5.92) | `#8C4F00` (6.49) | `#B70012` (6.95) |
| 900 | `#00431A` | `#572800` | `#6C0006` |
| 975 | `#001D07` | `#290C00` | `#320001` |

**Hue-shift effect on amber:** at constant H 80, step 700 is `#7E5900` (olive-brown). With the shift (H 62.8) it is `#8C4F00` (amber-brown). Contrast barely moves (6.33 vs. 6.49 with white), but the color reads as "warning" instead of "khaki."

### 7.4 Role mapping with computed contrast

**Light mode**

| Role pair | Background | Foreground | WCAG 2 | APCA Lc | Verdict |
|-----------|------------|------------|--------|---------|---------|
| background / on-background | neutral 50 `#F5F7F9` | neutral 950 `#20242B` | 14.50:1 | 97.6 | AAA |
| surface / on-surface | white `#FFFFFF` | neutral 950 | 15.57:1 | 102.5 | AAA |
| surface / on-surface-variant | white | neutral 700 `#5C6167` | 6.25:1 | 81.2 | AA (AAA large) |
| background / on-surface-variant | neutral 50 | neutral 700 | 5.82:1 | 76.2 | AA |
| surface / outline (input border) | white | neutral 500 `#868B92` | 3.43:1 | 61.8 | Passes 1.4.11 |
| background / outline | neutral 50 | neutral 500 | 3.19:1 | 56.9 | Passes 1.4.11, thin margin |
| surface / outline-variant (divider) | white | neutral 200 `#D6DBE3` | 1.39:1 | 19.0 | Decorative only |
| primary / on-primary | brand 600 `#2F6FDB` | white | 4.75:1 | −78.0 | AA |
| primary-hover / on-primary | brand 700 `#1A59C1` | white | 6.48:1 | −86.6 | AA |
| surface / link (brand 600) | white | brand 600 | 4.75:1 | 72.5 | AA |
| background / link (brand 600) | neutral 50 | brand 600 | **4.43:1** | 67.6 | **Fails AA**: use brand 700 (6.03:1) on tinted canvases |
| primary-container / on-primary-container | brand 100 `#E3EEFF` | brand 900 `#00307C` | 10.47:1 | 86.5 | AAA |
| danger / on-danger | red 600 `#D42325` | white | 5.16:1 | −79.1 | AA |
| surface / danger text | white | red 700 `#B70012` | 6.95:1 | 81.3 | AA |
| success / on-success | green 600 `#008D3F` | white | **4.30:1** | −74.6 | **Fails AA for small text**: use green 700 |
| success / on-success (fixed) | green 700 `#007433` | white | 5.92:1 | −84.2 | AA |
| warning / on-warning | amber 300 `#F7B31A` | neutral 950 | 8.47:1 | 66.1 | AAA |
| warning with white text | amber 300 | white | 1.84:1 | −38.3 | Fails, so never use it |
| surface / warning text | white | amber 700 `#8C4F00` | 6.49:1 | 81.8 | AA |
| *-container / on-*-container (green, amber, red) | 100 | 900 | 9.96–10.78:1 | 85–87 | AAA |
| surface / disabled text | white | neutral 400 `#9FA3AB` | 2.53:1 | 49.6 | Exempt (inactive) [13] |

**Dark mode** (separate mapping, not an inversion)

| Role pair | Background | Foreground | WCAG 2 | APCA Lc | Verdict |
|-----------|------------|------------|--------|---------|---------|
| background / on-background | neutral 975 `#12161C` | neutral 100 `#EAEDF2` | 15.46:1 | −95.1 | AAA |
| surface / on-surface | neutral 950 `#20242B` | neutral 100 | 13.27:1 | −93.2 | AAA |
| surface-raised / on-surface | neutral 900 `#33373D` | neutral 100 | 10.20:1 | −89.0 | AAA |
| background / on-surface-variant | neutral 975 | neutral 400 `#9FA3AB` | 7.17:1 | **−51.4** | WCAG AAA, but APCA rates it weak for body text (section 4 of `contrast-and-dark-mode.md`). Use neutral 300 for long text. |
| background / outline | neutral 975 | neutral 600 `#71757C` | 3.92:1 | −28.6 | Passes 1.4.11 |
| surface / outline | neutral 950 | neutral 600 | 3.36:1 | −26.8 | Passes 1.4.11 |
| primary / on-primary | brand 300 `#9FC2FC` | brand 950 `#001F57` | 8.70:1 | 66.3 | AAA |
| primary (400) / white text | brand 400 `#74A3F1` | white | 2.54:1 | −54.8 | Fails WCAG; use dark on-primary |
| background / link | neutral 975 | brand 300 | 10.02:1 | −68.0 | AAA |
| background / brand 600 reused from light mode | neutral 975 | brand 600 | **3.82:1** | −28.3 | **Fails**: the classic "same token in both modes" bug |
| primary-container / on-primary-container | brand 800 `#0543A3` | brand 100 | 7.67:1 | −82.5 | AAA |
| danger / on-danger | red 400 `#F4786D` | red 975 `#320001` | 6.83:1 | 50.2 | AA |
| background / danger text | neutral 975 | red 300 `#FFA69B` | 9.66:1 | −66.2 | AAA |
| success / on-success | green 400 `#61BA77` | green 975 | 7.46:1 | 55.5 | AAA |
| warning / on-warning | amber 300 | amber 975 `#290C00` | 9.96:1 | 68.3 | AAA |

Elevation steps: 975 → 950 is 1.17:1, and 950 → 900 is 1.30:1. That's enough to separate layers visually. These surfaces carry no meaning that must meet 1.4.11, but give interactive surfaces an outline if their edge matters.

### 7.5 Lessons from the example

- Moving a role from one surface to another changes its contrast. Link 600 passes on white and fails on neutral 50.
- The same step in two hues does not give the same contrast. Green 600 fails where blue 600 passes.
- Dark mode needs its own steps: light-mode brand 600 drops to 3.82:1 on the dark canvas.
- White text on mid-light fills fails WCAG 2 even when it looks fine. Dark mode flips on-colors to dark (brand 950 on brand 300).

---

## 8. Component tokens and code

### 8.1 CSS (roles per mode, components point to roles)

```css
:root {
  color-scheme: light dark;
  /* primitives (excerpt) */
  --blue-100: #E3EEFF; --blue-300: #9FC2FC; --blue-600: #2F6FDB; --blue-700: #1A59C1;
  --blue-800: #0543A3; --blue-900: #00307C; --blue-950: #001F57;
  --gray-50: #F5F7F9; --gray-100: #EAEDF2; --gray-400: #9FA3AB; --gray-500: #868B92;
  --gray-600: #71757C; --gray-700: #5C6167; --gray-900: #33373D; --gray-950: #20242B; --gray-975: #12161C;

  /* semantic roles: light | dark */
  --color-background:        light-dark(var(--gray-50),  var(--gray-975));
  --color-surface:           light-dark(#FFFFFF,         var(--gray-950));
  --color-on-surface:        light-dark(var(--gray-950), var(--gray-100));
  --color-on-surface-variant:light-dark(var(--gray-700), var(--gray-400));
  --color-outline:           light-dark(var(--gray-500), var(--gray-600));
  --color-primary:           light-dark(var(--blue-600), var(--blue-300));
  --color-on-primary:        light-dark(#FFFFFF,         var(--blue-950));
  --color-primary-container: light-dark(var(--blue-100), var(--blue-800));
  --color-on-primary-container: light-dark(var(--blue-900), var(--blue-100));
  --color-link:              light-dark(var(--blue-700), var(--blue-300));

  /* component tokens */
  --button-primary-bg: var(--color-primary);
  --button-primary-fg: var(--color-on-primary);
  --input-border:      var(--color-outline);
}
```

`light-dark()` only works when `color-scheme` includes `light dark`. It has been Baseline since May 2024 [23][24]. For older browsers, put the dark values in `@media (prefers-color-scheme: dark)` instead.

### 8.2 DTCG token JSON

The Design Tokens Community Group published the **Format Module 2025.10** and **Color Module 2025.10** as stable "Final Community Group Report"s on 2025-10-28. They are explicitly "not a W3C Standard nor … on the W3C Standards Track" [15][16][17]. A color `$value` is an object with:
- `colorSpace` (required; one of `srgb`, `srgb-linear`, `hsl`, `hwb`, `lab`, `lch`, `oklab`, `oklch`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `xyz-d65`, `xyz-d50`)
- `components` (required)
- optional `alpha` (default 1)
- optional `hex` fallback [16]

For `oklch`, L is **0–1** (not a percentage), C is ≥ 0, and H is in degrees [0, 360). A component may be `"none"` [16]. References use curly braces `"{group.token}"` and resolve to the target's `$value` [17]. Recommended file extensions are `.tokens` / `.tokens.json`, and the media type is `application/design-tokens+json` [17].

```json
{
  "color": {
    "$type": "color",
    "blue": {
      "600": {
        "$value": { "colorSpace": "oklch", "components": [0.561, 0.178, 260.3], "hex": "#2f6fdb" },
        "$description": "Brand primary. 4.75:1 with white."
      },
      "700": { "$value": { "colorSpace": "oklch", "components": [0.49, 0.175, 260.3], "hex": "#1a59c1" } }
    },
    "gray": {
      "950": { "$value": { "colorSpace": "oklch", "components": [0.26, 0.014, 260.3], "hex": "#20242b" } }
    }
  },
  "role": {
    "$type": "color",
    "primary":    { "$value": "{color.blue.600}" },
    "on-surface": { "$value": "{color.gray.950}" }
  }
}
```

Keep one role file per mode (`light.tokens.json`, `dark.tokens.json`) with identical role names. Tools then swap files, not names. The modes/theming mechanism beyond the 2025.10 modules was not verified in this pass. Check designtokens.org before relying on a resolver format [15].

---

## 9. Data-visualization palettes

| Type | Data | Build rule | Ready-made |
|------|------|-----------|-----------|
| **Categorical (qualitative)** | Unordered categories | Vary hue; keep L and C similar-ish so no category looks "more" [20]. Practitioner guidance: past about 6–8 hues, categories get hard to tell apart, so group, facet, or label directly. [E2] | Okabe-Ito (8 + gray) [18][19]; ColorBrewer Set2/Dark2 (CVD-safe only at 3 classes) [21] |
| **Sequential** | Ordered low → high | Lightness changes monotonically, light = low, dark = high (on light backgrounds) [20]. A single hue or a hue ramp (yellow → blue). | ColorBrewer Blues, YlGnBu… (all 18 sequential schemes flagged colorblind-safe, 3–9 classes) [21]; viridis-type maps |
| **Diverging** | Ordered with a meaningful midpoint (0, mean, target) | Light neutral middle, two hues darkening toward both ends, symmetric in L [20] | ColorBrewer RdBu, PuOr, BrBG, PiYG, PRGn, RdYlBu (flagged CVD-safe at all class counts) [21] |

**ColorBrewer facts** (from the scheme data file [21]):
- 9 diverging schemes (3–11 classes), 8 qualitative (3–8, 3–9, or 3–12 classes), and 18 sequential (3–9 classes; YlOrRd 3–8).
- Each scheme carries colorblind, print, photocopy, and LCD flags.
- **RdYlGn and Spectral are rated only "maybe" CVD-safe at 3–5 classes and unsafe above that**, yet they remain popular defaults. Prefer RdBu or PuOr.
- ColorBrewer is by Cynthia Brewer, built by Axis Maps; the method follows Brewer's mapping guidelines (1994) [20][21].

**Okabe-Ito palette** (Okabe & Ito, 2002/2008 [18]; hex values from R's `palette.colors()` [19]). Contrast was computed in this pass.

| Name | Hex | OKLCH | vs white | vs `#12161C` |
|------|-----|-------|----------|--------------|
| Black | `#000000` | `oklch(0% 0 0)` | 21.00 | 1.16 |
| Orange | `#E69F00` | `oklch(75.3% 0.158 76.8)` | 2.25 | 8.06 |
| Sky blue | `#56B4E9` | `oklch(73.5% 0.117 236.2)` | 2.31 | 7.86 |
| Bluish green | `#009E73` | `oklch(62.0% 0.130 165.5)` | 3.42 | 5.30 |
| Yellow | `#F0E442` | `oklch(90.2% 0.172 105.0)` | 1.32 | 13.72 |
| Blue | `#0072B2` | `oklch(53.2% 0.131 244.0)` | 5.19 | 3.50 |
| Vermillion | `#D55E00` | `oklch(62.1% 0.170 47.5)` | 3.87 | 4.69 |
| Reddish purple | `#CC79A7` | `oklch(67.9% 0.118 346.3)` | 3.06 | 5.93 |
| Gray (R addition) | `#999999` | `oklch(68.3% 0 0)` | 2.85 | 6.37 |

**Apply:**
- On white, orange, sky blue, yellow, and gray fall below the 3:1 that 1.4.11 asks of meaningful graphic parts [14]. Add a dark outline to marks, use them only for large areas, or switch to a dark chart background, where most pass.
- Label lines and bars directly instead of relying on a legend.
- Rainbow ("jet") and red-green maps distort data through uneven lightness and are unreadable for many CVD viewers. Crameri et al. (2020) recommend perceptually uniform scientific color maps instead [22]. **[E1]**
- In dark mode, keep the same hue order but re-pick the lightness. Sequential ramps reverse: low = dark, high = light on a dark background.
- This section covers palette choice only. For chart form and data-ink principles, see `design-history` → `masters-digital-ux.md` (Tufte, with the research caveats).

**Limit:** "Colorblind-safe" flags assume typical dichromacy models. Always pair color with a second channel (shape, pattern, label, position) for anything that matters (WCAG 1.4.1).

---

## 10. Brand proportions and print vs. screen

### 10.1 Proportions

- **Myth: "60-30-10 is a rule."** It's an interior-decorating heuristic (dominant / secondary / accent). No study was found that supports it as an optimum for UI or brand work. **[E3]** Corrected reading: in product UI, neutrals make up most of the pixels (surfaces and text), and the brand hue is kept for primary actions, selection, and focus. That's how Material maps roles to neutral vs. primary palettes [3]. The exact share follows from the content, not a ratio. See `color-theory.md` (section 8) for the full 60-30-10 discussion and contrast of extension.
- **Rule for product UI:** one primary action color per view. If everything is brand-colored, nothing stands out as the main action (see `cognitive-psychology` → `attention-and-scanning.md`).
- **Marketing, social, and OOH** can flip the proportions. A full-bleed brand field with white or black type is common. Check the type/field pair at the actual size (`media-specs` → `out-of-home.md` for viewing distance).

### 10.2 Print vs. screen

| Concern | Screen | Print |
|---------|--------|-------|
| Source of truth | sRGB hex / OKLCH; optional P3 variant | Spot (e.g., Pantone) and/or a CMYK build per paper stock |
| Tonal scale | Discrete OKLCH steps | Screen tints of the spot/CMYK color (e.g., 10–100%). Dark steps need added black or a second ink. |
| Gamut | Saturated RGB blues, greens, cyans, and oranges often fall outside CMYK | Choose the print color by proof, not by converting hex |
| Dark mode | Separate mapping | Not applicable; paper is the "surface" |

**Rule:** specify the brand color per medium: Pantone (coated / uncoated), CMYK (per stock), RGB/hex, and OKLCH. Approve each against a physical proof. Conversion settings, ICC profiles, and ink limits are in `color-spaces-and-management.md` and `media-specs` → `print-production.md`.

---

## 11. Checklist

- [ ] Brand hex recorded as hex + OKLCH; contrast vs. white and black known.
- [ ] Neutral choice (pure / tinted) made deliberately, chroma ≤ 0.016 at text steps.
- [ ] All scales share one L ladder; chroma tapered; out-of-gamut steps mapped by chroma reduction.
- [ ] Yellow/amber/orange dark steps hue-shifted; blues checked for purple drift.
- [ ] Every text/background **pair actually used** computed (not just step vs. white).
- [ ] Separate light and dark role mappings; no raw step used in both modes without re-checking.
- [ ] Status colors have `-container` and `on-` variants and never carry meaning alone.
- [ ] Components reference roles, not primitives.
- [ ] Tokens exported in DTCG 2025.10 format with hex fallbacks.
- [ ] Data-viz palette matched to data type; CVD-checked; marks ≥ 3:1 or outlined.
- [ ] Print specs (spot/CMYK) chosen by proof.

## Common mistakes

- **Generating scales in HSL.** Equal HSL/HSV lightness gives very different perceived lightness by hue (yellow vs. blue) [1]. Use OKLCH.
- **Assuming the same step means the same contrast across hues.** Green 600 at 4.30:1 vs. blue 600 at 4.75:1 in the example. Compute every pair.
- **Assuming tone 50 passes 4.5:1 with white.** It's 4.48:1.
- **Neon tints.** No chroma taper at the light end gives `#C1FFCC`-type greens. Taper toward white.
- **Olive "dark yellow."** Constant-hue amber darks look khaki. Shift the hue toward orange.
- **Reusing light-mode tokens in dark mode** (brand 600 on the dark canvas = 3.82:1).
- **White text on yellow/amber/orange fills** (amber 300 + white = 1.84:1).
- **Links checked on white but placed on a tinted canvas** (4.75 → 4.43:1).
- **Over-tinted neutrals** that make body text look colored.
- **Too many status hues that overlap the brand** (a red brand next to a red "danger").
- **Rainbow / RdYlGn / Spectral for data** that CVD viewers must read [21][22].
- **Converting the screen hex to CMYK and calling it the print color.**
- **Treating DTCG as a W3C Standard.** It's a stable community-group report [16].

## Sources

[1] Ottosson, B. (2020, updated 2021-01-25). *A perceptual color space for image processing*. https://bottosson.github.io/posts/oklab/
[2] Material Foundation. (n.d.). *Material Color Utilities* (README; HCT "based on CAM16 x L*"; dynamic color). GitHub. https://github.com/material-foundation/material-color-utilities (accessed 2026-10)
[3] Material Foundation. (n.d.). *scheme.ts* (deprecated `Scheme` class; light/dark tone mapping). GitHub. https://github.com/material-foundation/material-color-utilities/blob/main/typescript/scheme/scheme.ts (accessed 2026-10)
[4] Material Foundation. (n.d.). *color_spec_2021.ts* (surface-container tones, contrast curves). GitHub. https://github.com/material-foundation/material-color-utilities/blob/main/typescript/dynamiccolor/color_spec_2021.ts (accessed 2026-10)
[5] Material Foundation. (2023). *contrast_curve.ts* (contrast levels −1, 0, 0.5, 1). GitHub. https://github.com/material-foundation/material-color-utilities/blob/main/typescript/dynamiccolor/contrast_curve.ts
[6] Radix UI. (n.d.). *Understanding the scale*. Radix Colors. https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale (accessed 2026-10)
[7] Radix UI. (n.d.). *Radix Colors*. https://www.radix-ui.com/colors (accessed 2026-10)
[8] Tailwind Labs. (n.d.). *Colors* (Tailwind CSS v4.3 docs). https://tailwindcss.com/docs/colors (verified 2026-10)
[9] IBM. (n.d.). *Color overview*. Carbon Design System. https://carbondesignsystem.com/elements/color/overview/ (accessed 2026-10)
[10] Adobe. (n.d.). *Leonardo* and *@adobe/leonardo-contrast-colors README*. GitHub. https://github.com/adobe/leonardo ; https://github.com/adobe/leonardo/blob/main/packages/contrast-colors/README.md (accessed 2026-10)
[11] Adobe. (n.d.). *Color system*. Spectrum. https://spectrum.adobe.com/page/color-system/ (accessed 2026-10)
[12] W3C. (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*, W3C Recommendation 12 December 2024 (definitions: relative luminance, contrast ratio). https://www.w3.org/TR/WCAG22/
[13] W3C. (n.d.). *Understanding SC 1.4.3 Contrast (Minimum)*. https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[14] W3C. (n.d.). *Understanding SC 1.4.11 Non-text Contrast*. https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[15] Design Tokens Community Group. (n.d.). *Technical reports* (2025.10 stable, 2025-10-28). https://www.designtokens.org/technical-reports/ (verified 2026-10)
[16] Design Tokens Community Group. (2025). *Design Tokens Color Module 2025.10*, Final Community Group Report, 28 October 2025. https://www.designtokens.org/TR/2025.10/color/
[17] Design Tokens Community Group. (2025). *Design Tokens Format Module 2025.10*, Final Community Group Report, 28 October 2025. https://www.designtokens.org/TR/2025.10/format/
[18] Okabe, M., & Ito, K. (2002; modified 2008). *Color Universal Design (CUD): How to make figures and presentations that are friendly to colorblind people*. https://jfly.uni-koeln.de/color/
[19] R Core Team. (n.d.). *grDevices colorstuff.R* (`palette.colors()`, "Okabe-Ito" hex values). https://github.com/wch/r-source/blob/trunk/src/library/grDevices/R/colorstuff.R
[20] Brewer, C. A. / Axis Maps. (n.d.). *ColorBrewer: Learn more about schemes*. https://colorbrewer2.org/learnmore/schemes_full.html
[21] Axis Maps. (n.d.). *colorbrewer* repository (`colorbrewer_schemes.js` class counts and colorblind/print/copy/screen flags). GitHub. https://github.com/axismaps/colorbrewer
[22] Crameri, F., Shephard, G. E., & Heron, P. J. (2020). The misuse of colour in science communication. *Nature Communications, 11*, 5444. https://doi.org/10.1038/s41467-020-19160-7
[23] MDN contributors. (n.d.). *light-dark()*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark (verified 2026-10)
[24] MDN contributors. (n.d.). *color-scheme*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme (verified 2026-10)
