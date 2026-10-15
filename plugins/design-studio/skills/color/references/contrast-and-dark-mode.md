# Contrast and Dark Mode

> **Scope:** The exact WCAG 2.x contrast math and thresholds, what is exempt, where the math misleads, APCA as a secondary check (and its real status), color-vision deficiency, "don't rely on color alone," and how to build and ship dark mode, high-contrast, and forced-colors support.
> **Last verified:** 2026-10 (WCAG 3 draft status, APCA status, browser support)
> **Used by:** accessibility-specialist, color-specialist, ui-designer, design-engineer, design-system-architect, design-critic, social-media-designer, print-ooh-designer, creative-director

This file owns contrast math, APCA, and CVD for the plugin. `accessibility` → `wcag-22-in-practice.md` links here. Scale building and role mapping are in `palettes-and-tonal-scales.md`. Color spaces are in `color-spaces-and-management.md`.

---

## 1. WCAG 2.x contrast math (exact)

### 1.1 Relative luminance (WCAG 2.2 definition [1])

For an sRGB color with 8-bit channels R8, G8, B8:

```
RsRGB = R8/255    GsRGB = G8/255    BsRGB = B8/255

R = RsRGB / 12.92                    if RsRGB <= 0.04045
R = ((RsRGB + 0.055) / 1.055) ^ 2.4  otherwise          (same for G and B)

L = 0.2126 * R + 0.7152 * G + 0.0722 * B
```

- L runs from 0 (darkest black) to 1 (lightest white) [1].
- Before May 2021 the threshold was written as 0.03928. W3C says the change "has no practical effect on the calculations" [1].
- Evaluate in sRGB unless you know another color space will be used [1][2].
- For dithered colors, average the R, G, and B values [1].

### 1.2 Contrast ratio

```
ratio = (L1 + 0.05) / (L2 + 0.05)     L1 = lighter color, L2 = darker color
```

- The range is 1:1 to 21:1 [1].
- **Do not round.** 4.499:1 fails 4.5:1 [2].
- If you specify a text color, you must also specify a background color, and the reverse [1].
- A narrow outline around letters counts as part of the letter. A wide halo counts as background [1].

```js
// WCAG 2.x contrast ratio from two hex strings
const lin = c => (c /= 255) <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
const lum = hex => {
  const [r, g, b] = hex.match(/\w\w/g).map(h => lin(parseInt(h, 16)));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((x, y) => y - x); return (hi + 0.05) / (lo + 0.05); };
// ratio('#2F6FDB', '#FFFFFF') -> 4.75
```

### 1.3 Thresholds

| Criterion | Level | Applies to | Minimum |
|-----------|-------|-----------|---------|
| 1.4.3 Contrast (Minimum) [1] | AA | Text and images of text | **4.5:1**; **3:1** for large-scale text |
| 1.4.6 Contrast (Enhanced) [1] | AAA | Text and images of text | **7:1**; **4.5:1** for large-scale text |
| 1.4.11 Non-text Contrast [1] | AA | UI component boundaries and states, focus indicators, graphical objects needed to understand content | **3:1** against adjacent color(s) |
| 1.4.1 Use of Color [1] | A | Any information conveyed by color | Color must not be the *only* visual means |

**Large-scale text** is at least 18 pt, or 14 pt bold [1]. At 1 pt = 1.333 CSS px [2], that is:
- **≥ 24 px regular**
- **≥ 18.66 px bold** (often written 18.5 or 18.7 px). Some design systems simplify this: Carbon treats text below 24 px as small (see `palettes-and-tonal-scales.md`).

CJK fonts use an equivalent size [1]. Size means the size as delivered, not after the user zooms [1].

**Thin fonts:** fonts "with extraordinarily thin strokes" are harder to read at lower contrast. Anti-aliasing can make thin text render fainter than its CSS color [1][2]. **Apply:** for weights ≤ 300, or text below 14 px, aim well above the minimum (≥ 7:1).

### 1.4 What is exempt

| Exempt | Source | Notes |
|--------|--------|-------|
| Text in a logo or brand name ("logotypes") | 1.4.3 [1] | Only the logo itself. A tagline set in brand type next to it is not exempt. |
| Text in an **inactive** UI component (disabled) | 1.4.3, 1.4.11 [1][2][3] | Keep it legible anyway. Disabled ≠ invisible. |
| Pure decoration; text not visible to anyone; text incidental to a picture with significant other visual content | 1.4.3 [1] | Example: a storefront sign in a photo |
| Component appearance set by the browser and not modified by the author | 1.4.11 [1][3] | The browser's default focus ring is exempt but "must still be visible" [3] |
| Graphics where a particular presentation is essential (flags, photos, heat maps) | 1.4.11 [3] | Logos are exempt unless used as controls [3] |
| Component boundaries, when something else identifies the control | 1.4.11 [3] | A text button doesn't need a 3:1 container if its label identifies it [3] |

For gradients, test the least-contrasting area [3].

**Apply (by medium):**
- **UI/web:** check every text/background pair in every state (default, hover, focus, selected, error) and in both modes.
- **Social:** text on images needs a scrim or text box. Test the worst spot behind the text.
- **OOH/print:** WCAG doesn't legally apply to print, but its ratios are a sound floor. Viewing distance and size matter more (`media-specs` → `out-of-home.md`).

**Limit:** Passing the ratio is necessary, not sufficient. Size, weight, line length, and the surrounding colors all affect legibility.

---

## 2. Known flaws of the WCAG 2 math

The formula is simple and legally referenced, but it doesn't track perception well in some regions [10]. All numbers below were computed in this pass, with WCAG 2.2 math for the ratios and APCA-W3 0.0.98G-4g constants for Lc.

| Case | WCAG 2 ratio | APCA Lc | What goes wrong |
|------|--------------|---------|-----------------|
| `#767676` text on black `#000000` | 4.62:1 (passes AA) | −30.1 | Dark-on-dark pairs pass WCAG 2 while being hard to read. APCA puts Lc 30 at the "absolute minimum for other text" [9]. Somers argues WCAG 2 "far overstates contrast for dark colors" [10]. |
| `#767676` on white vs. white on `#767676` | 4.54:1 both ways | 71.6 vs. −77.0 | WCAG 2 is symmetric and ignores polarity (dark-on-light vs. light-on-dark). APCA is not. |
| White on orange `#F26B1D` | 3.05:1 (fails for body text) | −61.8 | White on saturated mid-oranges and mid-blues often *looks* more legible than black. WCAG fails it, APCA rates it higher. |
| Black on orange `#F26B1D` | 6.90:1 (passes) | 47.6 | WCAG prefers black text, while APCA rates it lower than white. The two models disagree. |
| White on `#3B82F6` (mid blue) | 3.68:1 (fails) | −69.4 | Same pattern as orange. |
| Dark-mode secondary text `#9FA3AB` on `#12161C` | 7.17:1 (AAA) | −51.4 | "AAA" by WCAG 2, yet below APCA's Lc 60 for content text [9]. |

**Evidence grade:** the claim that WCAG 2 misjudges dark colors and ignores polarity is argued mainly by APCA's author, with charts and the math above [10]. Independent peer-reviewed validation of APCA's model was not found in this pass. **[E3]** The polarity effect itself is well supported (section 6.3). **[E1]**

**What to do:**
- **Conformance still means WCAG 2.** WCAG 2.2 is the current W3C Recommendation (12 December 2024) [1], and legal requirements reference WCAG 2.x (`accessibility` → `legal-and-testing.md`).
- **Where the models disagree:**
  - For a filled button (say, orange), don't pick between black and white text by eye. Darken the fill until **white passes 4.5:1**, or use black text that passes both checks. Computed example: lowering only OKLCH L on `#F26B1D` reaches 4.50:1 at `#C85200` (`oklch(58.4% 0.167 44.9)`, Lc −75.9). That is the bare minimum, so go a little darker, e.g. `#C2410C` at 5.18:1.
  - In dark mode, don't stop at 4.5:1. Push body text to ≥ 7:1 **and** APCA |Lc| ≥ 75.

---

## 3. APCA (Accessible Perceptual Contrast Algorithm)

### 3.1 What it is

APCA predicts "lightness contrast" (Lc) for self-illuminated displays [7]. Unlike WCAG 2:
- **Polarity is built in.** Dark text on a light background gives a **positive** Lc. Light text on a dark background gives a **negative** Lc. The source code says reverse polarity "intentionally returns a negative number" [8].
- **Range:** about **+106** (black on white) to **−108** (white on black) [7]. Computed in this pass: black on white = Lc 106.0, white on black = Lc −107.9.
- **Size and weight are part of the model.** The minimum Lc depends on font size and weight, through lookup tables [9].
- **Current public version:** APCA-W3 **0.0.98G-4g**. The library version is 0.1.9 beta. It is licensed to W3C/AGWG "with specific limitations and exclusions" [7][8].

### 3.2 Use-case levels ("APCA in a Nutshell" [9])

| \|Lc\| | Use |
|------|-----|
| 90 | Preferred for body text (e.g., 18 px/300, 14 px/400). Also a suggested **maximum** for very large or bold text |
| 75 | Minimum for body text columns (24 px/300, 18 px/400, 16 px/500, 14 px/700) |
| 60 | Minimum for other content text (24 px/400, 21 px/500, 18 px/600, 16 px/700) |
| 45 | Headlines (36 px regular, 24 px bold), fine-detail pictograms |
| 30 | Absolute minimum for any text (placeholder, disabled), large solid icons |
| 15 | Absolute minimum for non-text that must be seen (dividers). Treat anything below as invisible |

These sizes assume a reference font like Helvetica/Arial with an x-height ratio of about 0.52 [9]. A "Bronze simple mode" uses fixed thresholds without lookup tables [9]. Radix designs its steps 11 and 12 to reach Lc 60 and Lc 90 on step 2 [11].

### 3.3 Status (verified 2026-10, do not overclaim)

- **WCAG 3.0 is a W3C Working Draft** (latest: 10 September 2026) [5].
- Its text-contrast requirement reads "@@[contrast measure to be determined]", with the editor's note: "**The contrast algorithm used in WCAG 3 is yet to be determined.**" The draft assumes the algorithm "will include a size/weight factor" and flags that a separate requirement may be needed for red/green CVD [5].
- **APCA is not in the current WCAG 3 draft.** It appeared in earlier drafts as exploratory content and was removed in the **July 2023** draft, because exploratory content without working group support is dropped after six months [6].
- Commentators expect WCAG 3 to be years away, possibly 2030 at the earliest [6].
- Even APCA's author says "nobody should drop WCAG 2 conformance based on a draft" [6].
- Marketing claims that a tool uses "the WCAG 3 contrast algorithm" are wrong as of this date.

### 3.4 How to use APCA as a secondary check

1. **Pass WCAG 2 first.** It is the conformance requirement.
2. Then run APCA for the cases WCAG 2 handles poorly:
   - dark mode text (target |Lc| ≥ 75 for body, ≥ 60 for UI labels)
   - thin or small type
   - very high-contrast pairs, where Lc above 90 on large bold text may be harsh
3. If a pair passes WCAG 2 but fails your APCA target, improve it. Nothing stops you from exceeding the minimum.
4. If a pair fails WCAG 2 but passes APCA (white on orange), **change the colors** so both pass. Or document the deviation and accept the legal risk knowingly. Roselli recommends choosing colors that also conform to WCAG 2 [6].

**Apply:** the worked example in `palettes-and-tonal-scales.md` shows both columns for every role pair.
**Limit:** APCA's Lc values are signed. A "60" from one tool may be "−60" in another, so compare absolute values against the table.

---

## 4. Color vision deficiency (CVD)

### 4.1 Types and prevalence

| Type | Affected cone | Effect | Prevalence notes |
|------|---------------|--------|------------------|
| Deuteranomaly / deuteranopia (deutan) | M ("green") weak / absent | Red-green confusion | The most common form; up to about 6% of males in some populations [13] |
| Protanomaly / protanopia (protan) | L ("red") weak / absent | Red-green confusion; reds look darker | About 1% of males in European populations [13] |
| Tritanomaly / tritanopia (tritan) | S ("blue") | Blue-yellow confusion | Below 0.01%; affects both sexes equally [13] |
| Achromatopsia / monochromacy | All or most | Little or no color | Rare [15] |

**Headline numbers:**
- **About 8% of men and about 0.4% of women** of European ancestry have red-green deficiency. In men of Chinese and Japanese ethnicity the rate is 4–6.5% [12].
- A 2025 review gives "up to 8% of men of Northern European descent" and about 0.5% of women [13]. Birch's 2012 review says 0.4% for women [12].
- Okabe & Ito give 8% of Caucasian, 5% of Asian, and 4% of African males [14].
- The US National Eye Institute says "about 1 in 12 men" [15].
- **Red-green CVD accounts for about 95% of congenital cases** [13]. **[E1]**

**Apply:** in a 250-person audience, expect more than ten people with CVD [14]. Treat CVD as a mainstream design condition, not an edge case.

### 4.2 Simulation tools

- **Chrome DevTools → Rendering → Emulate vision deficiencies:** Blurred vision, Reduced contrast, Protanopia, Deuteranopia, Tritanopia, Achromatopsia [17]. These are dichromacy (complete loss) simulations, so the milder anomalous forms look less extreme in reality.
- The Machado, Oliveira & Fernandes (2009) model handles normal vision, anomalous trichromacy, and dichromacy in one framework, and was validated with CVD participants [16]. Prefer simulators that implement a validated model and offer severity levels.
- **Procedure:**
  1. Simulate deuteranopia and protanopia, then convert to grayscale.
  2. If two meaningfully different items become indistinguishable, add a non-color cue.
  3. For charts, use CVD-safe palettes (`palettes-and-tonal-scales.md`, section 9).

### 4.3 Don't rely on color alone (WCAG 1.4.1)

The rule: "Color is not used as the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element" [1]. **[E2]**

| Situation | Color-only (fails) | Fix |
|-----------|-------------------|-----|
| Form errors | Red border only | Red border + error icon + text message ("Enter a date in DD/MM/YYYY") [4] |
| Required fields | Red label | Asterisk or "(required)" text |
| Inline links | Blue text, no underline, low difference from body text | Underline, **or** ≥ 3:1 between link color and surrounding text (technique G183 [4]). Body `#20242B` + link `#1A59C1` = 2.40:1 → needs an underline. Link `#2F6FDB` = 3.28:1 → G183 met (still 4.75:1 on white). |
| Status badges | Green/amber/red dots | Dot + icon shape (check / triangle / octagon) + label |
| Charts | Series by hue only | Direct labels, markers or dash patterns, position; CVD-safe palette |
| Selected tab or card | Color change only | Add weight, underline bar, check mark, or border thickness |
| Maps / heat maps | Red–green ramp | Lightness-based sequential or blue–orange diverging ramp; values on hover or in a table |

**Limit:** A 3:1 link-to-text difference satisfies the technique, but underlines remain the most robust affordance. G183 itself suggests underline or bold as an additional cue [4].

---

## 5. High contrast, forced colors, and user preferences

### 5.1 `prefers-contrast`

Values: `no-preference`, `more`, `less`, `custom`. `custom` matches the user-chosen palette of `forced-colors: active` [30]. Baseline widely available since May 2022 [30].

```css
@media (prefers-contrast: more) {
  :root {
    /* primitives from palettes-and-tonal-scales.md, section 8.1 */
    --color-on-surface-variant: var(--gray-900);  /* secondary text gets primary-level contrast */
    --color-outline: var(--gray-700);              /* borders become stronger */
  }
}
```

Apple notes that turning on Increase Contrast in Dark Mode can *reduce* contrast between dark text and dark backgrounds in some places. Test those combinations [18].

### 5.2 Forced colors (Windows contrast themes)

`@media (forced-colors: active)` matches when the browser enforces a user palette, such as Windows High Contrast / contrast themes [29]. Baseline widely available since September 2022 [29].

**What happens:**
- `color`, `background-color`, `border-color`, `outline-color`, `text-decoration-color`, `column-rule-color`, and SVG `fill`/`stroke` are replaced with system colors.
- `box-shadow` and `text-shadow` become `none`.
- Non-`url()` `background-image` (gradients) becomes `none`.
- `color-scheme` becomes `light dark` [29].
- The system color is chosen from **native element semantics**, so a `div role="button"` does not get `ButtonText` [29].

**System colors you can use:** `Canvas`, `CanvasText`, `LinkText`, `VisitedText`, `ActiveText`, `ButtonFace`, `ButtonText`, `ButtonBorder`, `Field`, `FieldText`, `Highlight`, `HighlightText`, `SelectedItem`, `SelectedItemText`, `Mark`, `MarkText`, `GrayText`, `AccentColor`, `AccentColorText`. Some browsers return fixed values for `AccentColor` to limit fingerprinting [31].

```css
.button { border: 0; box-shadow: 0 0 0 1px var(--color-outline); }
@media (forced-colors: active) {
  .button { border: 1px solid ButtonText; }   /* shadow-drawn border would vanish */
  .icon   { fill: currentColor; }             /* icons follow the forced text color */
  :focus-visible { outline: 2px solid Highlight; }
}
```

**Rules:**
1. Use `forced-colors` for small repairs only, not as a second design [29].
2. Don't draw meaning with `box-shadow`, background gradients, or background images alone. They disappear.
3. Use `forced-color-adjust: none` only for content where color *is* the content, such as color swatches or charts [29].
4. Test with DevTools "Emulate CSS media feature forced-colors" [17], and on Windows if possible.

---

## 6. Dark mode

### 6.1 Principles

| Principle | Rule | Source / grade |
|-----------|------|----------------|
| **Not an inversion** | Remap roles. Dark palettes use "dimmer background colors and brighter foreground colors," and these "aren't necessarily inversions of their light counterparts" | Apple HIG [18] **[E2]** |
| **Separate tokens per mode** | Same role names, different values. Never reuse a light-mode step in dark mode without re-checking. In the worked example, brand 600 drops from 4.75:1 to 3.82:1 on the dark canvas | Computed |
| **Elevation = lighter surface** | Higher layers get lighter, because shadows don't read on dark backgrounds | Apple base vs. elevated backgrounds [18]; MDC: "Shadows are less effective… Material surfaces become lighter… at higher elevations" [19] **[E2]** |
| **Dark gray canvas, not pure black** | Material's baseline dark background is `#121212`: "dark grey instead of black, which increases visibility for shadows and also reduces eye strain for light text" | MDC [19][20]. The eye-strain claim is a vendor assertion. **[E2/E3]** |
| **Lighter, less saturated accents** | Use lighter steps of the brand hue (Material: primary tone 80 in dark vs. 40 in light [21]). Saturated mid-tones on near-black are hard to read and fail contrast | Material, Apple **[E2]** |
| **Off-white text** | Use near-white (e.g., `#EAEDF2`, 15.5:1 on `#12161C`) for body text instead of `#FFFFFF` at 18–21:1 | Practice; see 6.3 for the evidence **[E3]** |
| **Respect the system setting** | Avoid an app-only appearance switch. People expect apps to follow the system choice, and may think the app is broken if it doesn't | Apple HIG [18] **[E2]** |

### 6.2 Surface elevation values

**Material 3 dark surface tones** (tone = CIELAB L*; standard contrast) [21]:

| Role | Lowest | Surface / dim | Low | Container | High | Highest | Bright |
|------|--------|---------------|-----|-----------|------|---------|--------|
| Tone | 4 | 6 | 10 | 12 | 17 | 22 | 24 |
| Neutral gray equivalent (computed) | `#0E0E0E` | `#131313` | `#1B1B1B` | `#1F1F1F` | `#2A2A2A` | `#353535` | `#393939` |

The real M3 colors are tinted by the neutral palette. The grays here are achromatic equivalents for orientation.

**Material 2 / MDC elevation overlays** (legacy, replaced in current MDC by tonal surface colors [19]):
- Overlay alpha = `(4.5 × ln(1 + elevation_dp) + 2) / 100` [20].
- The overlay color is `elevationOverlayColor`, which is `colorPrimary` in current MDC [19].
- Computed with a white overlay on `#121212`:

| Elevation (dp) | 0 | 1 | 2 | 4 | 8 | 12 | 24 |
|----------------|---|---|---|---|---|----|----|
| Overlay alpha | 0% | 5.1% | 6.9% | 9.2% | 11.9% | 13.5% | 16.5% |
| Result | `#121212` | `#1E1E1E` | `#222222` | `#282828` | `#2E2E2E` | `#323232` | `#393939` |
| `#E0E0E0` text on it | 14.19:1 | 12.63 | 12.05 | 11.17 | 10.29 | 9.71 | 8.75 |

**Rule for your own scale:**
1. Use 3–5 surface levels between OKLCH L ≈ 15% and 35%. In the worked example these are `#12161C` (L 20%), `#20242B` (26%), and `#33373D` (33.5%).
2. Check that body text still clears 7:1 on the highest level.
3. Add a 1 px outline (≥ 3:1 if it marks an interactive edge) where elevation alone separates interactive surfaces.

### 6.3 Pure black and pure white: what the evidence says

| Claim | Evidence | Grade |
|-------|----------|-------|
| Dark text on light (positive polarity) gives better reading performance than light on dark | Buchner & Baumgartner (2007): proofreading consistently better in positive polarity, independent of ambient light (darkness vs. office lighting) [22]. Piepenbrock et al. (2013): the advantage holds for both younger and older adults [23]. Piepenbrock et al. (2014): smaller pupils and better proofreading with positive polarity, consistent with a display-luminance explanation [24] | **[E1]** |
| Light text on pure black "halates" (blurs or glows) for people with astigmatism | Asserted by accessibility practitioners (Level Access, 2020: "avoid using white text on pure black backgrounds") [25]. No controlled study testing astigmatism × polarity was found in this pass. A larger pupil with dark displays [24] makes the mechanism plausible, but that is an inference, not a test | **[E3]** |
| Dark mode reduces eye strain | Vendor claims (MDC [19]). Buchner & Baumgartner found no differences in self-reported eyestrain, headache, or fatigue between polarities [22] | **[E3]** |
| Dark mode saves power on OLED | Vendor claim (MDC [19]). Plausible for mostly-black pixels; size depends on content and brightness | **[E2]** |

**Corrected reading:**
- Offer dark mode as a **preference and context** feature (low light, media viewing, user choice), not as a legibility upgrade.
- Default long-form reading to light mode unless the user or OS asks for dark.
- In dark mode, avoid the 21:1 extreme. A near-black canvas (L ≈ 15–20%) with off-white text (13–16:1) keeps strong contrast without the harshest pairing.
- None of this is a WCAG requirement. It's a hedge against an unproven but cheap-to-avoid risk.

### 6.4 Images, illustrations, icons, shadows

- **Photos:** Apple suggests that when a content image has a white background, you consider "slightly darkening the image to prevent the background from glowing" [18]. Practice in CSS:
  ```css
  @media (prefers-color-scheme: dark) { img:not([data-keep]) { filter: brightness(0.9); } }
  ```
  Exempt product photos where color accuracy matters.
- **Illustrations and icons:** make separate light and dark assets when one asset doesn't work in both. Apple's example: an icon that needs an outline only on dark backgrounds [18].
  ```html
  <picture>
    <source srcset="hero-dark.png" media="(prefers-color-scheme: dark)">
    <img src="hero-light.png" alt="…">
  </picture>
  ```
  Embedded SVG (via `<img>`) can react to `prefers-color-scheme` based on the parent's `color-scheme` [26]. Inline SVG should use `currentColor`.
- **Shadows:** keep them, but don't rely on them. Pair them with a lighter surface step and an optional 1 px border [19].
- **Brand logos:** supply a dark-mode version (reversed or lightened). Logos are exempt from contrast rules [3], but an invisible logo is still a failure of craft.
- **Charts:** re-pick data colors for dark backgrounds. Sequential ramps invert (high = light).

### 6.5 Implementation (web)

```html
<meta name="color-scheme" content="light dark">
```

```css
:root {
  color-scheme: light dark;   /* native form controls, scrollbars, canvas follow the mode */
  --surface: light-dark(#FFFFFF, #20242B);
  --on-surface: light-dark(#20242B, #EAEDF2);
}
/* Fallback for engines without light-dark() */
@media (prefers-color-scheme: dark) {
  :root { --surface: #20242B; --on-surface: #EAEDF2; }
}
```

| Feature | What it does | Support (verified 2026-10) |
|---------|--------------|----------------------------|
| `prefers-color-scheme: light \| dark` | Detects the OS/browser preference | Baseline widely available since Jan 2020 [26] |
| `color-scheme` property and `<meta name="color-scheme">` | Tells the browser which schemes the page supports, so it themes canvas, form controls, and scrollbars. The meta tag prevents a flash of the wrong scheme while the page loads. `only light` opts out of Chrome's auto dark theme | Baseline widely available since Jan 2022 [27] |
| `light-dark(a, b)` | Picks a value by the used color scheme. Requires `color-scheme: light dark` | Baseline 2024 (May 2024) [28] |
| Chrome "auto dark mode" | Automatically darkens light-only sites | Emulate in DevTools to see what users may get [17] |

**User toggle:** if you offer an in-page toggle (common on the web, discouraged inside Apple-platform apps [18]), set `color-scheme` on `:root` to `light` or `dark` from the toggle. Persist the choice, and default to the system setting.

**Apply (by medium):**
- **iOS/macOS:** use semantic system colors and asset-catalog color sets with light and dark variants [18].
- **Android:** use `Theme.Material3.DayNight` with `values-night` overrides [19].
- **Social/OOH/print:** no dark mode. But social posts are often viewed inside dark-mode apps, so test the post's edges on a dark feed (a white-background image becomes a glowing rectangle).

---

## 7. Contrast checklist

- [ ] Every text/background pair computed with the WCAG 2 formula, without rounding, in **every state** and **both modes**.
- [ ] Body text ≥ 4.5:1 (target ≥ 7:1 for long reading); large text (≥ 24 px, or ≥ 18.66 px bold) ≥ 3:1.
- [ ] Thin weights (≤ 300) and text < 14 px exceed the minimum by a clear margin.
- [ ] Input borders, checkboxes, toggles, focus indicators, and meaningful icons/chart marks ≥ 3:1 against adjacent colors.
- [ ] Text on images: worst-case region tested; scrim or box added.
- [ ] No information conveyed by color alone (errors, links, status, charts, selection).
- [ ] CVD simulation (deuteranopia, protanopia, grayscale) shows no lost distinctions.
- [ ] Dark mode: separate role values; body text ≥ 7:1 **and** APCA |Lc| ≥ 75; no reused light-mode accent steps.
- [ ] Dark mode: near-black canvas and off-white text; elevation by lighter surfaces; images and logos checked.
- [ ] `color-scheme` + meta tag set; `prefers-color-scheme` / `light-dark()` used for tokens.
- [ ] `prefers-contrast: more` strengthens secondary text and borders.
- [ ] `forced-colors: active`: borders replace shadows, icons use `currentColor`, focus visible, no meaning lost.
- [ ] APCA used only as a secondary check; WCAG 2.2 conformance documented.

## Common mistakes

- **Rounding up.** 4.48:1 is not 4.5:1 [2].
- **Checking against white only.** Real backgrounds are tinted canvases, cards, hover states, and images.
- **Treating "large text" as "headings."** It is defined by size and weight (≥ 24 px, or ≥ 18.66 px bold), not by role [1][2].
- **Assuming disabled means invisible.** It's exempt from the ratio, but people still need to see that the control exists.
- **Shipping white text on amber/orange/light-blue fills** because "it looks fine." It fails WCAG 2 (e.g., 3.05:1 on `#F26B1D`). Darken the fill.
- **Claiming APCA is "the WCAG 3 algorithm."** The WCAG 3 draft says the algorithm is "yet to be determined" [5].
- **Dropping WCAG 2 for APCA.** That isn't conformance [6].
- **Inverting the light palette for dark mode** instead of remapping roles [18].
- **Pure `#FFFFFF` on `#000000` for long text in dark mode.** Halation is unproven [E3], but cheap to avoid.
- **Using the light-mode brand color as dark-mode link text** (3.82:1 in the worked example).
- **Elevation by shadow only in dark mode** [19].
- **Meaning drawn with `box-shadow` or gradients,** which vanish in forced-colors mode [29].
- **`div role="button"` styled as a button.** It won't get `ButtonText` in forced colors [29]. Use `<button>`.
- **Red/green as the only status distinction.** About 8% of men of European ancestry will struggle [12].
- **Testing CVD only with dichromat simulators** and assuming milder anomalous trichromats see the same.

## Sources

[1] W3C. (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*, W3C Recommendation 12 December 2024 (SC 1.4.1, 1.4.3, 1.4.6, 1.4.11; definitions of relative luminance, contrast ratio, large scale). https://www.w3.org/TR/WCAG22/
[2] W3C. (n.d.). *Understanding SC 1.4.3 Contrast (Minimum)*. https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[3] W3C. (n.d.). *Understanding SC 1.4.11 Non-text Contrast*. https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[4] W3C. (n.d.). *Understanding SC 1.4.1 Use of Color* and *Technique G183: Using a contrast ratio of 3:1 with surrounding text…*. https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html ; https://www.w3.org/WAI/WCAG22/Techniques/general/G183
[5] W3C. (2026). *W3C Accessibility Guidelines (WCAG) 3.0*, W3C Working Draft 10 September 2026. https://www.w3.org/TR/wcag-3.0/ (verified 2026-10)
[6] Roselli, A. (2026, April 10; updated April 13). *WCAG3 Contrast as of April 2026*. https://adrianroselli.com/2026/04/wcag3-contrast-as-of-april-2026.html
[7] Somers, A. / Myndex. (n.d.). *apca-w3* repository README (version 0.0.98G-4g; library 0.1.9 beta; license). GitHub. https://github.com/Myndex/apca-w3 (accessed 2026-10)
[8] Somers, A. (2019–2022). *apca-w3.js* source (constants; polarity sign). https://github.com/Myndex/apca-w3/blob/master/src/apca-w3.js
[9] Somers, A. / Myndex. (n.d.). *APCA in a Nutshell*. https://git.apcacontrast.com/documentation/APCA_in_a_Nutshell.html
[10] Somers, A. (2022). *Why APCA as a New Contrast Method?* Myndex. https://git.apcacontrast.com/documentation/WhyAPCA.html
[11] Radix UI. (n.d.). *Understanding the scale*. https://www.radix-ui.com/colors/docs/palette-composition/understanding-the-scale
[12] Birch, J. (2012). Worldwide prevalence of red-green color deficiency. *Journal of the Optical Society of America A, 29*(3), 313–320. https://doi.org/10.1364/JOSAA.29.000313 (abstract via PubMed, PMID 22472762)
[13] Almustanyir, A. (2025). A global perspective of color vision deficiency: Awareness, diagnosis, and lived experiences. *Healthcare, 13*(16), 2031. https://pmc.ncbi.nlm.nih.gov/articles/PMC12385717/ (review; secondary for Birch figures)
[14] Okabe, M., & Ito, K. (2002; modified 2008). *Color Universal Design (CUD): How to make figures and presentations that are friendly to colorblind people*. https://jfly.uni-koeln.de/color/
[15] National Eye Institute. (n.d.). *Color blindness*. https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness (accessed 2026-10)
[16] Machado, G. M., Oliveira, M. M., & Fernandes, L. A. F. (2009). A physiologically-based model for simulation of color vision deficiency. *IEEE Transactions on Visualization and Computer Graphics, 15*(6), 1291–1298. https://doi.org/10.1109/TVCG.2009.113
[17] Google. (n.d.). *Discover issues with rendering performance / Apply effects* and *Emulate CSS media features*. Chrome DevTools docs. https://developer.chrome.com/docs/devtools/rendering/apply-effects ; https://developer.chrome.com/docs/devtools/rendering/emulate-css (verified 2026-10)
[18] Apple. (n.d.). *Dark Mode*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/dark-mode (verified 2026-10)
[19] Material Components for Android. (n.d.). *Dark theme* (docs/theming/Dark.md). GitHub. https://github.com/material-components/material-components-android/blob/master/docs/theming/Dark.md (accessed 2026-10)
[20] Material Components for Android. (n.d.). *ElevationOverlayProvider.java* (overlay formula) and *color/res/values/colors.xml* (`design_dark_default_color_background` #121212). GitHub. https://github.com/material-components/material-components-android
[21] Material Foundation. (n.d.). *color_spec_2021.ts* (dark surface tones). GitHub. https://github.com/material-foundation/material-color-utilities/blob/main/typescript/dynamiccolor/color_spec_2021.ts
[22] Buchner, A., & Baumgartner, N. (2007). Text–background polarity affects performance irrespective of ambient illumination and colour contrast. *Ergonomics, 50*(7), 1036–1063. https://doi.org/10.1080/00140130701306413
[23] Piepenbrock, C., Mayr, S., Mund, I., & Buchner, A. (2013). Positive display polarity is advantageous for both younger and older adults. *Ergonomics, 56*(7), 1116–1124. https://doi.org/10.1080/00140139.2013.790485
[24] Piepenbrock, C., Mayr, S., & Buchner, A. (2014). Smaller pupil size and better proofreading performance with positive than with negative polarity displays. *Ergonomics, 57*(11), 1670–1677. https://doi.org/10.1080/00140139.2014.948496
[25] Level Access. (2020, June 30). *Accessibility for people with astigmatism*. https://www.levelaccess.com/blog/accessibility-for-people-with-astigmatism/ (practitioner source)
[26] MDN contributors. (n.d.). *prefers-color-scheme*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme (verified 2026-10)
[27] MDN contributors. (n.d.). *color-scheme*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/color-scheme (verified 2026-10)
[28] MDN contributors. (n.d.). *light-dark()*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark (verified 2026-10)
[29] MDN contributors. (n.d.). *forced-colors*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors (verified 2026-10)
[30] MDN contributors. (n.d.). *prefers-contrast*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast (verified 2026-10)
[31] MDN contributors. (n.d.). *<system-color>*. MDN Web Docs. https://developer.mozilla.org/en-US/docs/Web/CSS/system-color (verified 2026-10)
