# Type Scale, Measure, and Rhythm

> **Scope:** How to size, space, and stack type: modular scales, fluid type with `clamp()`, line length, leading, tracking, paragraph spacing, hierarchy, vertical rhythm, numeric figures, and line-breaking controls, with ready-to-use token sets.
> **Last verified:** 2026-10 (browser support for `text-box`, `text-wrap`, `clamp()`, `lh`/`rlh`, `widows`/`orphans`; Apple HIG and Material 3 values)
> **Used by:** typographer, ui-designer, editorial-designer, design-system-architect, design-engineer, design-critic

Related files: `anatomy-and-classification.md` (x-height, metrics vocabulary), `pairing-and-selection.md` (choosing faces), `web-and-variable-fonts.md` (loading, `size-adjust`, optical sizing), `legibility-by-medium.md` (minimum sizes per medium). Grids and spacing systems live in `layout-composition` → `grid-systems.md` and `hierarchy-balance-whitespace.md`. WCAG text rules in practice live in `accessibility` → `wcag-22-in-practice.md`.

---

## 1. Modular scales

**Rule.** Pick one base size (usually body text) and one ratio. Every other size is `base × ratio^n`, where n is a whole number (positive for headings, negative for small text). Tim Brown's definition: "A modular scale is a sequence of numbers that relate to one another in a meaningful way" [1].

### 1.1 Named ratios

The musical names come from the interval ratios of a just-intoned scale. They are the defaults in the `modularscale` tools by Tim Brown and Scott Kellum [2].

| Name | Interval ratio | Decimal | Character |
|---|---|---|---|
| Minor second | 15:16 | 1.067 | Barely distinguishable steps. Dense data UI only. |
| Major second | 8:9 | 1.125 | Subtle. Compact UI, long-form text with many heading levels. |
| Minor third | 5:6 | 1.2 | Workhorse for product UI. |
| Major third | 4:5 | 1.25 | UI with clearer hierarchy; marketing pages. |
| Perfect fourth | 3:4 | 1.333 | Editorial, marketing, blogs. |
| Augmented fourth | 1:√2 | 1.414 | Editorial with strong headlines. |
| Perfect fifth | 2:3 | 1.5 | Display-led layouts, landing pages. |
| Golden section | 1:1.618 | 1.618 | Posters, covers, very few steps. |

(The tools also define minor sixth 1.6, major sixth 1.667, minor seventh 1.778, major seventh 1.875, octave 2 and larger [2].)

### 1.2 Step tables at base 16px

Computed as `16 × ratio^n`, rounded to 2 decimals. Round to whole pixels (or to your 4px grid) when you turn steps into tokens.

| Step n | 1.125 | 1.2 | 1.25 | 1.333 | 1.5 |
|---|---|---|---|---|---|
| −2 | 12.64 | 11.11 | 10.24 | 9.00 | 7.11 |
| −1 | 14.22 | 13.33 | 12.80 | 12.00 | 10.67 |
| **0 (base)** | **16.00** | **16.00** | **16.00** | **16.00** | **16.00** |
| 1 | 18.00 | 19.20 | 20.00 | 21.33 | 24.00 |
| 2 | 20.25 | 23.04 | 25.00 | 28.43 | 36.00 |
| 3 | 22.78 | 27.65 | 31.25 | 37.90 | 54.00 |
| 4 | 25.63 | 33.18 | 39.06 | 50.52 | 81.00 |
| 5 | 28.83 | 39.81 | 48.83 | 67.34 | 121.50 |
| 6 | 32.44 | 47.78 | 61.04 | 89.76 | 182.25 |

Read the table this way: with a 1.5 ratio, step −2 is 7px, which is unusable. Large ratios run out of usable small steps and large ratios explode at the top. Small ratios give many close sizes.

### 1.3 Choosing a ratio by medium

| Context | Ratio | Why |
|---|---|---|
| Dense product UI, dashboards, admin tools | 1.125–1.2 | Many levels (table header, label, caption, body, section title) must fit in small space. |
| General app UI, design systems | 1.2–1.25 | Clear hierarchy without giant headings on mobile. |
| Editorial web, blogs, documentation | 1.25–1.333 (mobile) up to 1.333–1.414 (desktop) | Headlines need presence; fewer levels in body content. |
| Marketing / landing pages | 1.333–1.5 | Hero type carries the page. |
| Posters, covers, OOH | 1.5–1.618 or no scale | Two or three sizes total; contrast matters more than a progression. |

**Apply.**
- **UI/app:** Use a modest ratio and then hand-tune to the 4px grid. Platform type ramps are themselves hand-tuned, not strict modular scales. Apple's iOS Large (default) ramp runs 11, 12, 13, 15, 16, 17, 20, 22, 28, 34pt [15]. Material 3 runs 11, 12, 14, 16, 22, 24, 28, 32, 36, 45, 57sp [16].
- **Web/editorial:** Use a smaller ratio on small viewports and a larger one on wide viewports. Fluid type (section 2) does this automatically.
- **Print/editorial:** Classic printers' sizes (6, 7, 8, 9, 10, 11, 12, 14, 16, 18, 21, 24, 36, 48, 60, 72pt) are a traditional scale that predates modular-scale tools. Use whichever produces clean steps for your grid.
- **Social/OOH:** Skip the scale. Pick a headline size that reads at the viewing distance and a secondary size roughly half of it or less (see `media-specs` → `out-of-home.md`).

**Limit.**
- A ratio is a starting point, not a law. Round to the grid and adjust steps that look wrong.
- No ratio has a measured effect on comprehension or preference. Musical names are mnemonic only; claims that "harmonic" or golden-ratio scales are perceived as more pleasing are unsupported **[E3]**.
- A single ratio across all viewports either makes mobile headings too large or desktop headings too timid. Use two ratios or fluid type.

---

## 2. Fluid type with `clamp()`

**Rule.** Let size grow linearly with viewport width between a minimum and a maximum: `font-size: clamp(MIN, PREFERRED, MAX)`, where PREFERRED is `intercept(rem) + slope(vw)`. Always include a `rem` term and keep `MAX ≤ 2.5 × MIN`.

### 2.1 Formula

Given a minimum size `Smin` at viewport `Vmin` and a maximum `Smax` at viewport `Vmax` (sizes in rem, viewports in px, root 16px):

```
Vmin_rem  = Vmin / 16
Vmax_rem  = Vmax / 16
slope     = (Smax - Smin) / (Vmax_rem - Vmin_rem)
intercept = Smin - slope × Vmin_rem            (in rem)
preferred = intercept rem + (slope × 100) vw
```

Check: at `Vmin`, 1vw = Vmin/100 px, so `intercept + slope × Vmin_rem = Smin`. At `Vmax` it equals `Smax`.

### 2.2 Precomputed values (360px → 1280px)

| Min → Max (rem) | Max/Min | Declaration |
|---|---|---|
| 1 → 1.125 | 1.13 | `clamp(1rem, 0.9511rem + 0.2174vw, 1.125rem)` |
| 1.125 → 1.25 | 1.11 | `clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem)` |
| 1.25 → 1.5 | 1.20 | `clamp(1.25rem, 1.1522rem + 0.4348vw, 1.5rem)` |
| 1.5 → 2 | 1.33 | `clamp(1.5rem, 1.3043rem + 0.8696vw, 2rem)` |
| 1.75 → 2.5 | 1.43 | `clamp(1.75rem, 1.4565rem + 1.3043vw, 2.5rem)` |
| 2 → 3.5 | 1.75 | `clamp(2rem, 1.4130rem + 2.6087vw, 3.5rem)` |
| 2.25 → 4.5 | 2.00 | `clamp(2.25rem, 1.3696rem + 3.9130vw, 4.5rem)` |
| 2.5 → 6 | 2.40 | `clamp(2.5rem, 1.1304rem + 6.0870vw, 6rem)` |

`clamp()` is supported in Chrome 79, Firefox 75, and Safari 13.1 and later [19] (verified 2026-10).

### 2.3 Why vw-only fails WCAG 1.4.4, and how to fix it

- **SC 1.4.4 Resize Text (AA):** "Except for captions and images of text, text can be resized without assistive technology up to 200 percent without loss of content or functionality" [3].
- **The problem.** Browser zoom shrinks the CSS viewport, so `vw` values do not grow with zoom. Text set in `5vw` stays the same size at every zoom level. W3C lists this as failure **F94**: "incorrect use of viewport units to resize text" [3][4].
- **Partial fix: add rem.** In `clamp(1rem, 0.9rem + 0.43vw, 1.25rem)`, the rem parts scale with zoom and with the user's default font size, but the vw part does not. If the vw share is large, zooming to 500% can still fail to double the text. Barvian shows a `clamp()` heading that reached only about 1.67× at 500% zoom [4].
- **The 2.5× rule.** Browsers zoom to at most 500%. If `MAX ≤ 2.5 × MIN`, then `5 × MIN ≥ 2 × MAX`, so text can always reach 200% of its 100%-zoom size. This holds in modern browsers [4]. The same rule applies to stepped responsive type set with media queries [4].
- **Test.** Zoom to 200% (and to 500% for any fluid style) at several window widths and measure the rendered text. DevTools does not show zoomed values [4].

```css
/* Accessible fluid heading: rem + vw, max/min = 2.0 */
h1 { font-size: clamp(2.25rem, 1.3696rem + 3.9130vw, 4.5rem); }

/* Fails F94: no rem term, never grows with zoom */
h1 { font-size: 6vw; }
```

**Apply.**
- **Web/editorial:** Fluid headings, fixed or nearly fixed body (body range 1 → 1.125rem is enough). Butterick puts optimal web body size at 15–25px and print body at 10–12pt [5].
- **UI/app:** Most product UI does not need fluid type. Use fixed tokens and change them at one or two breakpoints.
- **Design tools:** Document the min and max sizes as two frames (mobile and desktop) so handoff shows the range.

**Limit.**
- Keep min sizes at or above the body minimums in `legibility-by-medium.md`.
- Do not apply fluid sizing to UI chrome (buttons, inputs). It causes misalignment with fixed-height components.

---

## 3. Line length (measure)

**Rule.** Set body text at **45–75 characters per line** (including spaces), aiming near 66. In multi-column layouts aim for **40–50**. Never exceed **80** for accessible body text (40 for CJK).

| Source | Recommendation | Type of evidence |
|---|---|---|
| Bringhurst, via Rutter | "Anything from 45 to 75 characters is widely regarded as a satisfactory length of line" for a single-column page in a serif text face; "The 66-character line (counting both letters and spaces) is widely regarded as ideal"; "For multiple column work, a better average is 40 to 50 characters" [6] | Craft tradition **[E2]** |
| Emil Ruder (via Baymard) | 50–60 characters including spaces [9] | Craft tradition **[E2]** |
| Baymard Institute | 50–75 characters; users fatigue on lines over ~100 characters [9] | Practitioner usability research **[E2]** |
| WCAG 2.2 SC 1.4.8 (AAA) | A mechanism is available so that "Width is no more than 80 characters or glyphs (40 if CJK)" [8] | Standard **[E2]** |

### 3.1 What the research actually says

- On screen, **longer lines (around 100 characters) are often read faster** than short lines (25 characters), but readers **rate around 55 characters as easiest** to read. Perceived ease does not match measured speed (Dyson & Kipping 1998, reviewed in [7]) **[E1]**.
- Dyson & Haselgrove (2001) found **better comprehension at 55 characters per line than at 100**, with no speed-accuracy trade-off (reviewed in [7]) **[E1]**, though from a single lab.
- Bernard et al. (2002) found no differences in reading time or efficiency between 45, 76, and 132 characters (reviewed in [7]).
- Dyson's review concludes that **characters per line**, not physical width, is the variable that matters, and that the evidence base is small, technology-dependent, and slow to replicate [7].

**Corrected reading:** 45–75 characters is a well-founded convention that balances reading speed, comprehension, and preference. It is not a measured optimum with a sharp edge. Moderate lines (around 55–65) are the safe default **[E1/E2]**. Very long lines (above about 100) tire readers and hurt comprehension. Very short lines (below about 30) cause too many line breaks and hyphens.

### 3.2 Implementation

```css
.prose { max-width: 66ch; }      /* ch = width of "0"; roughly 60-75 real characters in most Latin text faces */
.prose--columns { column-width: 22em; column-gap: 2em; }   /* about 40-50 characters per column */
```

- `ch` is the width of the zero glyph. Average Latin text with spaces is narrower than "0" in most faces, so `66ch` often yields about 70–80 actual characters. Count a sample paragraph and adjust (`60ch`–`70ch`).
- Set measure in `ch` or `em`, never in px, so it scales with font size and zoom.

**Apply.**
- **Web/app:** Constrain article bodies, help text, and long descriptions. Let tables, code, and data use the full width.
- **Print/editorial:** Books 60–70 characters; magazine columns 40–50; newspaper columns are often narrower (about 30–40), which is acceptable for short news paragraphs.
- **Social/OOH:** Measure is set by the composition. Keep lines short (often 15–30 characters) because the viewing time is short.

**Limit.** Narrow measure plus justified text causes rivers and uneven spacing; use ragged-right below about 40 characters. WCAG 1.4.8 also asks that a mechanism exists for text not to be justified [8].

---

## 4. Leading (line height)

**Rule.** Body text: **1.4–1.6** of the font size on screen, 1.2–1.45 in print. Increase leading as measure grows, x-height grows, or contrast drops. Decrease it as size grows. Always use **unitless** `line-height` in CSS.

| Text role | Line height (unitless) | Notes |
|---|---|---|
| Display (≥ 48px) | 0.95–1.1 | Check that ascenders and descenders do not collide. |
| Headings (24–48px) | 1.1–1.3 | |
| Subheads, lead paragraphs (18–24px) | 1.3–1.4 | |
| Body on screen (14–20px) | 1.4–1.6 | MDN recommends at least 1.5 for main paragraph content [11]. |
| Body in print (9–12pt) | 1.2–1.45 | Butterick: 120–145% of the point size [12]. |
| Small UI text, captions (11–13px) | 1.3–1.5 | M3 Body small: 12/16sp (1.33) [16]; HIG Caption 1: 12/16pt (1.33) [15]. |
| Single-line UI labels, buttons | 1–1.25, or fixed px equal to the component's text box | Not running text, so 1.5 is not required. |

**Platform reference values:**
- **iOS** Large (default): Body 17/22pt (1.29), Footnote 13/18 (1.38), Large Title 34/41 (1.21) [15]. Apple: "If you need to display three or more lines of text, avoid tight leading even in areas where height is limited" [15].
- **Material 3:** Body large 16/24sp (1.5), Body medium 14/20sp (1.43), Display large 57/64sp (1.12) [16].

**Why longer lines need more leading.** On the return sweep the eye must find the start of the next line. Longer lines make that sweep longer and less accurate, so they need more interlinear space (Bouma 1980, cited in [7]) **[E2]**. Older studies found double spacing read slightly faster than single spacing on screens (Kolers et al. 1981; Kruk & Muter 1984, reviewed in [7]) **[E1]**, though Dyson notes no recent studies of finer-grained spacing [7]. Rello, Pielot & Marcos (2016) tested spacings from 0.8× to 1.4× the browser default. Spacing did not significantly change reading time, but the smallest and largest spacings went with weaker comprehension (secondary report [21]) **[E1, single study]**.

**WCAG.** SC 1.4.12 (AA) does not require any spacing, but content must not break when users set line height to 1.5 × font size, paragraph spacing to 2 ×, letter spacing to 0.12 ×, and word spacing to 0.16 × [10]. Do not use fixed-height containers for text. SC 1.4.8 (AAA) asks for line spacing of at least 1.5 within paragraphs [8].

```css
body  { font-size: 1rem; line-height: 1.5; }   /* unitless: children recompute from their own font-size */
h1    { line-height: 1.1; }
/* Avoid: line-height: 1.5em or 150% on a parent - children inherit the parent's computed px value */
```

MDN: a unitless number "is the preferred way to set line-height and avoid unexpected results due to inheritance"; `em` and `%` values compute to a fixed length that children inherit [11]. `line-height: normal` is roughly 1.2 and depends on the font [11].

**Apply.**
- **UI/app:** Snap line heights to the 4px grid (16/24, 14/20, 12/16) as Material does [16].
- **Web/editorial:** Use 1.5–1.6 for long articles; reduce to 1.4 for large-x-height sans at short measure.
- **Print:** Express leading in points (10/13, 9.5/12.5) and lock body to a baseline grid (section 9).
- **Social/OOH:** Tight leading (0.9–1.1) for headline blocks; check that descenders do not touch the next line's capitals.

**Limit.** Leading can be too loose as well as too tight. In Rello et al., both the tightest (0.8× the browser default) and loosest (1.4× the default) spacings went with weaker comprehension [21]. Very loose leading also breaks paragraphs into visually separate lines.

---

## 5. Tracking (letter spacing)

**Rule.** Track **tighter as size grows**, **looser as size shrinks**, and **always loosen all-caps and small caps**. Express tracking in `em` so it scales with size.

| Situation | `letter-spacing` | Source / note |
|---|---|---|
| Display type ≥ 48px (most text faces) | −0.01em to −0.03em | Large sizes look loose because text faces are spaced for small sizes. |
| Headings 24–48px | 0 to −0.02em | |
| Body | 0 | Do not track body text. Lowercase "ordinarily doesn't need letterspacing" [13]. |
| Small text < 12px / below about 9pt in print | +0.01em to +0.03em | Butterick: typographers sometimes add tracking to lowercase under about 9 points [13]. |
| All caps and small caps | +0.05em to +0.12em | Butterick: "5–12% extra letterspacing to text in all caps or small caps" [13]. |
| Labels, overlines (caps, 11–14px) | +0.06em to +0.1em | M3 Label medium/small: 12–11sp with 0.5sp tracking (about +0.04em) [16]. |

**Font-specific values beat rules.** Apple's SF tracking table is the opposite at large sizes. Because the system font switches to tighter display designs, its recommended tracking goes from +0.41pt at 6pt, through −0.43pt at 17pt, to +0.38pt at 28pt and 0 at 80pt [15]. Variable fonts with an optical-size axis (see `web-and-variable-fonts.md`) build some of this in. Always check the foundry's guidance before adding tracking.

```css
h1        { letter-spacing: -0.02em; }
.overline { text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.75rem; }
```

**Apply.**
- **UI/app:** Caps labels and tabs need tracking. Never set negative tracking below 14px.
- **Web/editorial:** Tighten big serif and sans headlines slightly. Track small caps in running text by about 5%.
- **Print:** Use the layout application's tracking in 1/1000 em units: −10 to −30 for display, +50 to +120 for caps.
- **Social/OOH:** Tight headline tracking is a common brand signature. Check legibility at the smallest reproduction size (thumbnail, distance).

**Limit.** Tracking does not fix bad kerning. Users may override spacing to 0.12em (WCAG 1.4.12) [10], so do not depend on tight tracking to fit text into a fixed width.

---

## 6. Paragraph spacing

**Rule.** Separate paragraphs **either** with a first-line indent **or** with space between paragraphs. Do not use both.

| Medium | Method | Value |
|---|---|---|
| Web/app running text | Space after | 0.75–1em (`margin-block: 0 1em`), or one line height for strict rhythm. |
| Print books, long-form editorial | First-line indent, no space | 1em to one line height; no indent after headings (traditional convention). |
| Magazines, reports | Either; indent in body columns, space in sidebars and captions | |
| UI cards, lists | Spacing tokens (8/12/16px) rather than text margins | |
| Headings | More space above than below (for example 1.5–2× above, 0.5× below) | This ties each heading to the text it introduces (proximity; see `cognitive-psychology` → `gestalt.md`). |

WCAG 1.4.12 requires layouts to survive paragraph spacing of 2 × font size [10]. WCAG 1.4.8 (AAA) asks for paragraph spacing at least 1.5 × the line spacing [8].

```css
.prose p + p        { margin-block-start: 1em; }
.book p + p         { text-indent: 1em; margin: 0; }
.prose h2           { margin-block: 2em 0.5em; }
```

---

## 7. Hierarchy techniques

**Rule.** Build hierarchy with the fewest variables that work. Change one or two properties per level, and keep **3–4 text levels in content** (for example title, section heading, body, caption). A full product type ramp may define 10–15 named styles, but a single screen should use only a few.

| Lever | Strength | Use for | Watch out |
|---|---|---|---|
| Size | Strongest | Headings, display | Large jumps need fewer levels. |
| Weight | Strong | Headings at the same size as body, labels, emphasis | Avoid hairline weights for small text (HIG advises against Ultralight, Thin, Light) [15]. |
| Color / tone | Medium | Secondary text, metadata | Lower contrast must still pass WCAG (see `color` → `contrast-and-dark-mode.md`). |
| Case (caps, small caps) | Medium | Overlines, labels, short headings | Only for short strings: caps "are suitable for headings shorter than one line" [14]. Track them (section 5). |
| Space | Medium (cumulative) | Grouping heading with its content | Space above a heading signals a new section. |
| Typeface contrast (serif plus sans) | Medium | Editorial voice | See `pairing-and-selection.md`. |
| Style (italic) | Weak | Inline emphasis, titles of works | Weak as a level marker. |
| Position / indentation | Weak | Nested lists, outlines | |

**Reference ramps.**
- Apple iOS: 11 text styles (Large Title, Title 1–3, Headline, Body, Callout, Subhead, Footnote, Caption 1–2), each with an emphasized weight [15].
- Material 3: 15 styles in 5 roles (Display, Headline, Title, Body, Label × Large/Medium/Small) [16].

**Procedure (squint test).** Blur the layout or view it at 25%. You should see the intended number of levels. If two levels look equal, increase one lever. If more levels appear than you designed, remove a lever.

**Apply.**
- **UI/app:** Size plus weight plus color covers almost everything. Reserve caps for labels and overlines.
- **Web/editorial:** Size for headlines; weight or italic for decks and standfirsts; small caps or caps for kickers.
- **Print:** Fewer sizes, more space and weight. A classic book needs only body, heading, and small caps.
- **Social/OOH:** Two levels: headline and everything else. A third level is usually unreadable at viewing distance.

**Limit.** Using every lever at once (big, bold, colored, caps) on one element flattens hierarchy because everything shouts. Platform guidance: "maintain the relative hierarchy and visual distinction of text elements when people adjust text sizes" [15].

---

## 8. Numeric figures

**Rule.** Use **tabular lining figures** wherever numbers are compared vertically or change in place (tables, prices in lists, timers, counters, financial data). Use **proportional figures** in running text and headlines. Use **oldstyle figures** only in text faces designed for them, mainly in long-form serif text.

| Value | OpenType feature | Use |
|---|---|---|
| `lining-nums` | `lnum` | Figures sit on the baseline at cap height. UI, tables, all-caps settings. |
| `oldstyle-nums` | `onum` | Some figures (3, 4, 7, 9) descend. Running text in books and editorial. |
| `proportional-nums` | `pnum` | Figures have varied widths. Running text, headlines. |
| `tabular-nums` | `tnum` | Figures share one width so they align. Tables, timers, prices. |
| `diagonal-fractions` | `frac` | Recipes, measurements. |
| `stacked-fractions` | `afrc` | Stacked fractions. |
| `ordinal` | `ordn` | 1st, 2nd. |
| `slashed-zero` | `zero` | Code, serial numbers, IDs. |

Source: MDN [20]. `font-variant-numeric` works in Chrome 52, Firefox 34, and Safari 9.1 and later [19]. It only works if the font contains the feature; check the font's feature list.

```css
table, .price, .timer, .stat  { font-variant-numeric: tabular-nums lining-nums; }
.prose                        { font-variant-numeric: proportional-nums oldstyle-nums; } /* only if the face has onum */
code, .serial                 { font-variant-numeric: slashed-zero; }
```

**Apply.**
- **UI/app:** Set `tabular-nums` on any element whose number updates live (countdowns, stock tickers). Otherwise the text jitters as widths change.
- **Print:** Align figures in tables right or on the decimal point.
- **Limit.** Tabular figures in headlines look gappy ("1" gets a wide slot). Use proportional there.

---

## 9. Vertical rhythm and baseline grids

**Rule.** Choose a base unit (4px on screen, or the body leading in print). Make every line height and vertical margin a multiple of it. In print, lock body text to a baseline grid. On the web, use a 4px or 8px soft grid and trim text boxes so type aligns to it.

### 9.1 Procedure

1. Body: 16px / 24px line height. Base unit = 4px (or 8px, or the full 24px for strict rhythm).
2. Every text style's line height is a multiple of 4: 12/16, 14/20, 16/24, 20/28, 24/32, 32/40, 48/56.
3. Vertical spacing tokens are multiples of 4 (4, 8, 12, 16, 24, 32, 48, 64).
4. Headings whose line height is not a multiple of the body leading take extra margin so the following text returns to the grid (print).
5. Use `text-box` (below) so the visible type, not the invisible half-leading, touches the grid.

### 9.2 `text-box-trim` / `text-box` (CSS Inline Layout)

CSS line boxes include half-leading and font ascent/descent space above and below the glyphs. That space makes text look off-center in buttons and misaligned on grids. `text-box-trim` removes it; `text-box-edge` says where to cut; `text-box` sets both [17].

```css
/* Trim to cap height on top and alphabetic baseline on bottom */
.button-label, h1, .card-title { text-box: trim-both cap alphabetic; }
```

| Feature | Chrome | Firefox | Safari |
|---|---|---|---|
| `text-box-trim` / `text-box-edge` (block containers) | 133 | 154 | 18.2 |
| `text-box-trim` on inline elements | No | 154 | 26.5 (partial) |
| `text-box-edge: ideographic` | No | 154 | No |

Source: MDN browser-compat-data [19]. MDN marks the feature **Baseline 2026, newly available** [17] (verified 2026-10). Older browsers ignore it, so layouts must still look acceptable untrimmed (progressive enhancement).

### 9.3 Line-height units

`lh` (the element's line height) and `rlh` (the root's line height) let spacing follow the leading: `margin-block-end: 1rlh`. Support: `lh` in Chrome 109, Firefox 120, Safari 16.4; `rlh` in Chrome 111, Firefox 120, Safari 16.4 [19]. `cap` (cap height) is supported in Chrome 118, Firefox 97, and Safari 17.2 [19].

**Apply.**
- **UI/app:** The 4px grid plus `text-box` trimming on buttons, chips, and badges gives optically centered labels.
- **Web/editorial:** Strict baseline grids break with images, embeds, and user font changes. Use a soft 4px or 8px rhythm instead.
- **Print/editorial:** Lock body to the baseline grid in InDesign/Affinity. Allow captions and sidebars to use a half-line or their own grid. Multi-column text should line up across columns.
- **Social/OOH:** Not relevant beyond optical alignment of headline blocks.

**Limit.** Pixel-perfect baseline rhythm is not a usability requirement and has no measured reading effect **[E3]**. It is a craft quality that pays off most in multi-column print. Do not let it override WCAG 1.4.12 (user spacing overrides will break any rigid grid) [10].

---

## 10. Line breaking: widows, orphans, `text-wrap`

**Terms.** A **widow** (in common web usage, a "runt") is a single short word alone on the last line of a paragraph or heading. In print, a widow is a paragraph's last line stranded at the top of a page or column, and an **orphan** is a first line stranded at the bottom.

| Tool | What it does | Support (verified 2026-10) |
|---|---|---|
| `text-wrap: balance` | Balances characters per line. Applies only to short blocks: six lines or fewer in Chromium, ten or fewer in Firefox [18]. | Chrome 114, Firefox 121, Safari 17.5 [19] |
| `text-wrap: pretty` | Normal wrapping with a slower algorithm that favors better layout, such as fewer orphans [18]. | Chrome 117, Safari 26; **not supported in Firefox** [19] |
| `text-wrap-style` (longhand) | Same values as a longhand. | Chrome 130, Firefox 124 (no `pretty`), Safari 17.5 [19] |
| `widows`, `orphans` | Minimum lines kept at the top or bottom of a fragment (pages, columns, regions). | Chrome 25, Safari 1.3; **not supported in Firefox** [19] |
| `hyphens: auto` | Automatic hyphenation (requires correct `lang`). | Chrome 88, Firefox 6, Safari 5.1 for `auto`, with language coverage varying by browser [19] |
| `hanging-punctuation` | Hangs quotes and punctuation into the margin. | Safari only [19] |

```css
h1, h2, h3, blockquote, figcaption { text-wrap: balance; }
.prose p                           { text-wrap: pretty; hyphens: auto; }
.prose                             { widows: 2; orphans: 2; }   /* paged media and multicolumn */
```

**Apply.**
- **UI/app:** Balance headings and short card titles. Do not balance body text (it is ignored past the line limit anyway).
- **Web/editorial:** `pretty` on paragraphs is a free improvement where supported; others fall back to normal wrapping.
- **Print:** Fix widows and orphans by editing copy, adjusting tracking by ±5 to 10 units, or rebreaking, never by changing leading on one page.
- **Social/OOH:** Break headline lines by hand at phrase boundaries.

**Limit.** `balance` can make a heading narrower than its container, which can look wrong in left-aligned layouts with adjacent elements. Check it.

---

## 11. Ready-to-use token sets

### 11.1 UI product (app, SaaS, dashboard)

Ratio about 1.2, hand-tuned to the 4px grid. Fixed sizes (no fluid). rem assumes a 16px root.

```css
:root {
  /* font sizes */
  --font-size-2xs: 0.6875rem;  /* 11px  - legal, badges (minimum) */
  --font-size-xs:  0.75rem;    /* 12px  - captions, helper text */
  --font-size-sm:  0.875rem;   /* 14px  - secondary text, table cells, dense UI body */
  --font-size-md:  1rem;       /* 16px  - body, inputs (16px+ avoids iOS Safari zoom-on-focus) */
  --font-size-lg:  1.125rem;   /* 18px  - lead text, card titles */
  --font-size-xl:  1.25rem;    /* 20px  - section titles */
  --font-size-2xl: 1.5rem;     /* 24px  - page titles (mobile) */
  --font-size-3xl: 1.875rem;   /* 30px  - page titles (desktop) */
  --font-size-4xl: 2.25rem;    /* 36px  - hero / empty-state titles */

  /* line heights (unitless; each lands on a 4px multiple at its paired size) */
  --line-height-2xs: 1.4545;   /* 11/16 */
  --line-height-xs:  1.3333;   /* 12/16 */
  --line-height-sm:  1.4286;   /* 14/20 */
  --line-height-md:  1.5;      /* 16/24 */
  --line-height-lg:  1.5556;   /* 18/28 */
  --line-height-xl:  1.4;      /* 20/28 */
  --line-height-2xl: 1.3333;   /* 24/32 */
  --line-height-3xl: 1.2;      /* 30/36 */
  --line-height-4xl: 1.1111;   /* 36/40 */

  /* tracking */
  --letter-spacing-tight:  -0.01em;  /* 24px and up */
  --letter-spacing-normal: 0;
  --letter-spacing-caps:   0.06em;   /* uppercase labels */

  /* weights */
  --font-weight-regular: 400;
  --font-weight-medium:  500;
  --font-weight-semibold: 600;
  --font-weight-bold:    700;

  --measure: 66ch;
}
```

The 16px input note: iOS Safari zooms the page when an input with a font size below 16px receives focus. This is widely reported developer behavior, not confirmed in Apple documentation [unverified].

### 11.2 Editorial site (magazine, blog, long-form)

Base 18–20px body, ratio rising from about 1.25 (mobile) to about 1.333+ (desktop) through `clamp()` between 360px and 1280px. Every max/min ratio is ≤ 2.5 (WCAG 1.4.4, section 2.3).

```css
:root {
  --font-size-caption: 0.875rem;                                    /* 14px fixed */
  --font-size-small:   1rem;                                        /* 16px fixed */
  --font-size-body:    clamp(1.125rem, 1.0761rem + 0.2174vw, 1.25rem);   /* 18 -> 20px */
  --font-size-lead:    clamp(1.25rem, 1.1522rem + 0.4348vw, 1.5rem);     /* 20 -> 24px */
  --font-size-h4:      clamp(1.25rem, 1.1522rem + 0.4348vw, 1.5rem);     /* 20 -> 24px */
  --font-size-h3:      clamp(1.5rem, 1.3043rem + 0.8696vw, 2rem);        /* 24 -> 32px */
  --font-size-h2:      clamp(1.75rem, 1.4565rem + 1.3043vw, 2.5rem);     /* 28 -> 40px */
  --font-size-h1:      clamp(2.25rem, 1.3696rem + 3.9130vw, 4.5rem);     /* 36 -> 72px */
  --font-size-display: clamp(2.5rem, 1.1304rem + 6.0870vw, 6rem);        /* 40 -> 96px, ratio 2.4 */

  --line-height-body:    1.6;
  --line-height-lead:    1.45;
  --line-height-heading: 1.15;
  --line-height-display: 1.0;
  --line-height-caption: 1.4;

  --letter-spacing-display: -0.025em;
  --letter-spacing-heading: -0.01em;
  --letter-spacing-smallcaps: 0.05em;

  --measure-body: 65ch;
  --measure-caption: 45ch;
  --paragraph-space: 1em;
}

.prose          { font-size: var(--font-size-body); line-height: var(--line-height-body);
                  max-width: var(--measure-body); font-variant-numeric: proportional-nums; text-wrap: pretty; }
.prose h1, .prose h2, .prose h3 { line-height: var(--line-height-heading); text-wrap: balance; }
```

---

## 12. Common mistakes

| Mistake | Fix |
|---|---|
| Choosing a ratio, then using every step | Use 4–6 steps in practice; delete unused tokens. |
| Viewport-only font sizes (`font-size: 4vw`) | Fails WCAG 1.4.4 (F94). Use `clamp()` with a rem term and max ≤ 2.5 × min [3][4]. |
| `line-height` in px or em on containers | Use unitless values [11]. |
| Full-width paragraphs on desktop (120+ characters) | `max-width: 60–70ch` [6][9]. |
| Same line height for display and body | Display 0.95–1.15, body 1.4–1.6. |
| All-caps labels without tracking | Add +0.05 to +0.12em [13]. |
| Negative tracking on small text | Only tighten at 24px and above. |
| Proportional figures in tables or timers | `font-variant-numeric: tabular-nums` [20]. |
| Fixed-height text containers | Breaks under WCAG 1.4.12 spacing overrides and 200% zoom [10]. |
| Depending on `text-wrap: pretty` or `text-box` for layout correctness | Treat both as progressive enhancement; Firefox lacks `pretty` [19]. |
| Indents and paragraph space together | Pick one. |
| Golden-ratio scales sold as "proven harmonious" | Ratios are aesthetic choices with no measured reading benefit **[E3]**. |

---

## Sources

[1] Brown, T. (2011, May 3). *More Meaningful Typography*. A List Apart. https://alistapart.com/article/more-meaningful-typography/
[2] Brown, T., & Kellum, S. (n.d.). *modularscale-sass: README and ratio variables*. GitHub. https://github.com/modularscale/modularscale-sass (accessed 2026-10)
[3] W3C. (2023). *Understanding Success Criterion 1.4.4: Resize Text*. WCAG 2.2 Understanding. https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html
[4] Barvian, M. (2023, November 7). *Addressing Accessibility Concerns With Using Fluid Type*. Smashing Magazine. https://www.smashingmagazine.com/2023/11/addressing-accessibility-concerns-fluid-type/
[5] Butterick, M. (n.d.). *Point size*. Practical Typography. https://practicaltypography.com/point-size.html
[6] Rutter, R. (n.d.). *Choose a comfortable measure* (2.1.2), quoting Bringhurst, R., *The Elements of Typographic Style*. The Elements of Typographic Style Applied to the Web. https://webtypography.net/2.1.2
[7] Dyson, M. C. (2004). How physical text layout affects reading from screen. *Behaviour & Information Technology, 23*(6), 377–393. (Reviews Dyson & Kipping 1998; Dyson & Haselgrove 2001; Bernard et al. 2002; Kolers et al. 1981; Kruk & Muter 1984; Bouma 1980.) Copy opened at https://stu.westga.edu/~ssynan1/literacy/Dyson.pdf
[8] W3C. (2023). *Understanding Success Criterion 1.4.8: Visual Presentation*. https://www.w3.org/WAI/WCAG22/Understanding/visual-presentation.html
[9] Scott, E. (2022, May 10). *Readability: The Optimal Line Length*. Baymard Institute. https://baymard.com/blog/line-length-readability
[10] W3C. (2023). *Understanding Success Criterion 1.4.12: Text Spacing*. https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html
[11] MDN Web Docs. (n.d.). *line-height*. https://developer.mozilla.org/en-US/docs/Web/CSS/line-height (accessed 2026-10)
[12] Butterick, M. (n.d.). *Line spacing*. Practical Typography. https://practicaltypography.com/line-spacing.html
[13] Butterick, M. (n.d.). *Letterspacing*. Practical Typography. https://practicaltypography.com/letterspacing.html
[14] Butterick, M. (n.d.). *All caps*. Practical Typography. https://practicaltypography.com/all-caps.html
[15] Apple. (n.d.). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography (accessed 2026-10)
[16] Google / AndroidX. (n.d.). *TypeScaleTokens.kt* (Material 3 type scale tokens). https://github.com/androidx/androidx/blob/androidx-main/compose/material3/material3/src/commonMain/kotlin/androidx/compose/material3/tokens/TypeScaleTokens.kt (accessed 2026-10)
[17] MDN Web Docs. (n.d.). *text-box-trim*. https://developer.mozilla.org/en-US/docs/Web/CSS/text-box-trim (accessed 2026-10)
[18] MDN Web Docs. (n.d.). *text-wrap*. https://developer.mozilla.org/en-US/docs/Web/CSS/text-wrap (accessed 2026-10)
[19] MDN. (2026). *browser-compat-data* (css/properties/text-box-trim, text-box-edge, text-wrap, text-wrap-style, font-variant-numeric, widows, orphans, hyphens, hanging-punctuation; css/types/length, clamp). GitHub. https://github.com/mdn/browser-compat-data (accessed 2026-10)
[20] MDN Web Docs. (n.d.). *font-variant-numeric*. https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric (accessed 2026-10)
[21] Clark, S. (2023, April 7). *Best font size and line spacing* (summary of Rello, L., Pielot, M., & Marcos, M.-C. (2016). Make It Big! The Effect of Font Size and Line Spacing on Online Readability. *CHI '16*, 3637–3648). BYU Editing Research (secondary source). https://editingresearch.byu.edu/2023/04/07/best-font-size-and-line-spacing/
