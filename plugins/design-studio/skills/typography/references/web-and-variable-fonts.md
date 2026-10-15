# Web Fonts, Variable Fonts, and App Fonts

> **Scope:** How to ship type on the web and in apps: formats, `@font-face`, `font-display`, preload, subsetting, hosting and privacy, layout-shift-free fallbacks, system font stacks, variable fonts and optical sizing, performance budgets, color fonts, icons, and bundling fonts in iOS/Android apps.
> **Last verified:** 2026-10 (browser support tables, Google Fonts API behavior, Web Almanac figures, Apple/Android docs). Legal note on the Munich ruling reflects reporting checked 2026-10.
> **Used by:** design-engineer, typographer, ui-designer, design-system-architect, creative-director

Related files: `scale-and-rhythm.md` (sizes, leading, `text-box`), `legibility-by-medium.md` (minimum sizes), `pairing-and-selection.md` (choosing families), `anatomy-and-classification.md` (metrics vocabulary: ascender, descender, x-height). Platform type ramps and touch targets: `media-specs` → `digital-platforms.md`.

---

## 1. Formats

**Rule.** Ship **WOFF2 only** for the web. Bram Stein, quoted by web.dev: "Use only WOFF2 and forget about everything else" [1].

| Format | Use | Support (first version) |
|---|---|---|
| WOFF2 | Default for all web fonts. Brotli compression, about 30% smaller than WOFF [1]. | Chrome 36, Firefox 39, Safari 10 [2] |
| WOFF | Legacy fallback only. Not needed for current browsers. | Chrome 6, Firefox 3.5, Safari 5.1 [2] |
| TTF / OTF | Desktop installs and app bundles (iOS accepts .ttf and .otf [15]). Do not serve uncompressed on the web. | |
| EOT, SVG fonts | Obsolete. | SVG fonts: Safari only [2] |

Usage: 81% of desktop and 78% of mobile sites serve WOFF2 (HTTP Archive 2024) [3].

---

## 2. `@font-face` template

```css
@font-face {
  font-family: "Brand Sans";
  src: url("/fonts/brand-sans-var-latin.woff2") format("woff2");
  font-weight: 100 900;          /* range = variable font; single value = static file */
  font-style: normal;
  font-display: swap;            /* see section 3 */
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC,
                 U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193,
                 U+2212, U+2215, U+FEFF, U+FFFD;   /* "latin" range as served by Google Fonts, 2026-10 [4] */
}
@font-face {
  font-family: "Brand Sans";
  src: url("/fonts/brand-sans-var-italic-latin.woff2") format("woff2");
  font-weight: 100 900;
  font-style: italic;
  font-display: swap;
}

body { font-family: "Brand Sans", "Brand Sans Fallback", system-ui, sans-serif; }
```

Notes:
- Same `font-family` name, different `font-style`/`font-weight` descriptors: the browser picks the right file. Do not create separate family names like "Brand Sans Bold". That breaks `<strong>` and synthesizes fake bold.
- Use `format("woff2")`. The spec also defines `tech()` hints (`variations`, `palettes`, `color-COLRv1`, `features-opentype`, and others) [5]. `tech()` is supported in Chrome 108, Firefox 107, and Safari 17 [2]. Variable fonts render correctly with plain `format("woff2")` in every browser that supports variations [6].
- Inline the `@font-face` rules in the HTML `<head>` (critical CSS). Do not inline the font files themselves (base64), because large inlined resources delay the document [1].

---

## 3. `font-display`: FOIT vs FOUT

**Terms.** **FOIT** (flash of invisible text): text is hidden while the font loads. **FOUT** (flash of unstyled text): text shows in a fallback font, then swaps. A swap that changes text size or line breaks causes **layout shift (CLS)**.

The font display timeline has three periods: **block** (invisible fallback), **swap** (visible fallback, swap when loaded), and **failure** (fallback for good) [7].

| Value | Block period | Swap period | Behavior | Use for |
|---|---|---|---|---|
| `auto` | Browser default | Browser default | Most browsers behave like `block` (about 3s timeout) [5]. | Do not rely on it. |
| `block` | Short (3s recommended) [5] | Infinite | FOIT up to 3s, then fallback, then swap. | Only small text that is meaningless in a fallback (the spec's example is badly designed icon fonts) [5]. |
| `swap` | Extremely small (≤ 100ms recommended) [5] | Infinite | Immediate fallback, swaps whenever the font arrives (FOUT, possible CLS). | Brand headlines and logotypes where the font must appear [1]. |
| `fallback` | Extremely small (≤ 100ms) | Short (3s) [5] | Swaps only if loaded within about 3s; else keeps fallback for the page's lifetime. | Body text where the font is desired but optional [5]. |
| `optional` | Extremely small (≤ 100ms) | None | Uses the font only if it is already available (cached or very fast); never swaps. No font-swap CLS [1]. | Body text on performance-critical pages [1]. |

web.dev: `optional` "delays text render no more than 100ms" and avoids font-swap layout shift; `auto`, `block`, `swap`, and `fallback` can all cause layout shifts [1]. HTTP Archive 2024: 44% of desktop and 45% of mobile pages use `swap` [3].

**Decision procedure.**
1. Body text: `optional` if you can accept first-visit fallback; else `fallback` or `swap` plus a metric-matched fallback (section 6).
2. Headlines and brand display type: `swap` plus preload plus metric-matched fallback.
3. Never `block` for paragraphs.

---

## 4. Preload and connection hints

**Rule.** Preload only the one or two font files used above the fold (usually body regular and the headline weight). Preloading every weight steals bandwidth from images and scripts [1].

```html
<!-- Self-hosted: preload the critical file (crossorigin is required for fonts, even same-origin) -->
<link rel="preload" href="/fonts/brand-sans-var-latin.woff2" as="font" type="font/woff2" crossorigin>

<!-- Third-party (e.g. Google Fonts): preconnect to both origins -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

- Font files are fetched in CORS mode, so preloads and preconnects for font files need `crossorigin`. Without it the browser downloads the font twice [1].
- Preload ignores `unicode-range`. A preloaded file is always downloaded, so preload only the subset you know the page uses [1].
- HTTP Archive 2024: only 11% of pages preload fonts [3].

---

## 5. Subsetting and `unicode-range`

**Rule.** Remove glyphs you do not need, split large character sets by script, and declare each file's `unicode-range` so browsers download only the files whose characters appear on the page [1].

- Latin fonts have roughly 100 to 1,000 glyphs; CJK fonts can exceed 10,000 [1].
- Google Fonts already serves per-script subsets (latin, latin-ext, cyrillic, greek, vietnamese, and others) with `unicode-range` (verified 2026-10) [4].
- Google Fonts' `text=` parameter returns a font with only the listed characters, which can cut size by up to 90%. It is useful for a logo or a single headline [8].
- Tools named by web.dev: glyphhanger and subfont [1]. fontTools' `pyftsubset` is the common command-line subsetter:

```bash
pyftsubset BrandSans-Var.ttf \
  --unicodes="U+0000-00FF,U+0131,U+0152-0153,U+2000-206F,U+20AC,U+2122,U+2212" \
  --layout-features='*' --flavor=woff2 \
  --output-file=brand-sans-var-latin.woff2
```

(`--flavor=woff2` requires the Python `brotli` package.)

**Limit.**
- Check the license. Many commercial licenses restrict subsetting or modification; web.dev says to confirm the license allows subsetting and self-hosting [1].
- Do not subset away characters your content needs: names with diacritics (ł, ő, ș), curly quotes, en/em dashes, the euro sign, the minus sign (U+2212), and non-breaking spaces. User-generated content needs at least latin-ext.

---

## 6. Layout-shift-free fallbacks: `size-adjust` and metric overrides

**Rule.** Define a local fallback face whose metrics are tuned to match the web font, so the swap does not move text.

| Descriptor | Does | Support |
|---|---|---|
| `size-adjust` | Scales the fallback's glyphs (and metrics) by a percentage to match the web font's width. | Chrome 92, Firefox 92, Safari 17 [2] |
| `ascent-override` | Sets the height above the baseline. | Chrome 87, Firefox 89; Safari: Technology Preview only [2] |
| `descent-override` | Sets the depth below the baseline. | Same as above [2] |
| `line-gap-override` | Sets the font's line gap (external leading). | Same as above [2] |
| `font-size-adjust` (property) | Matches x-heights across fallback fonts. | Chrome 127, Firefox 3, Safari 16.4; `from-font` keyword in Chrome 127, Firefox 118, Safari 17 [2] |

(Support verified 2026-10 against MDN browser-compat-data.)

```css
/* Metric-matched local fallback (values are illustrative; compute them for your font) */
@font-face {
  font-family: "Brand Sans Fallback";
  src: local("Arial");
  size-adjust: 104.5%;
  ascent-override: 92%;
  descent-override: 24%;
  line-gap-override: 0%;
}
body { font-family: "Brand Sans", "Brand Sans Fallback", sans-serif; }
```

web.dev's example builds a Roboto fallback from local Arial with `size-adjust: 100.06%`, and from Arimo with `size-adjust: 99.94%` [9]. Compute values with a calculator (web.dev links Malte Ubl's "Seamless swap" generator) [9] or with framework tooling that generates fallbacks automatically. Never copy override percentages from another font.

**Limit.**
- Safari ignores the `*-override` descriptors (verified 2026-10), so vertical metrics may still shift there. `size-adjust` alone fixes most width-driven reflow.
- `local()` depends on what is installed. Provide two or three fallbacks: Arial (Windows/macOS), Arimo or Liberation Sans (Linux/ChromeOS), Roboto (Android).

---

## 7. Self-hosting vs Google Fonts (and other CDNs)

| Factor | Self-host | Google Fonts API |
|---|---|---|
| Privacy | No third-party request; no visitor IP sent to another company. | Each visitor's browser connects to Google servers, which receive the IP address. |
| Performance | One origin, HTTP/2, your cache policy. Only reliably faster if you serve from a CDN with HTTP/2 [1]. | Extra connections (preconnect helps). Web Almanac data has shown third-party fonts rendering faster in some cases, so measure before switching [1]. |
| Control | Your own subsetting, `font-display`, fallbacks, versions. | Automatic per-script subsetting and `unicode-range` [4]; `display=` parameter [8]. |
| Licensing | Check the license allows web self-hosting. | Google Fonts families use SIL OFL 1.1 (most), Apache 2, or the Ubuntu Font License, all of which allow redistribution, so you can download and self-host them [10]. |

**GDPR: the 2022 Munich ruling.** On 20 January 2022 the Landgericht München I (Munich Regional Court, case 3 O 17493/20) ordered a website operator to pay a visitor **€100** in non-material damages. The site loaded Google Fonts from Google's servers, which transmitted the visitor's IP address to Google without consent. The court treated the IP address as personal data and threatened a fine of up to €250,000 for repeat violations. It noted that the fonts could have been hosted locally [11] (secondary summary by a German chamber of commerce; verified 2026-10). The ruling triggered a wave of mass demand letters in Germany, some of which the IHK describes as suspected abuse [11]. It is a first-instance decision and does not bind other courts. This is not legal advice.

**Practical rule.** For sites with EU visitors, **self-host** fonts (including Google Fonts families) or load third-party fonts only after consent. HTTP Archive 2024: about 70% of sites self-host at least some fonts, while Google Fonts is used on about 57% of desktop and 48% of mobile sites [3].

Google Fonts CSS API syntax, if you do use it [8]:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;1,8..60,400&display=swap" rel="stylesheet">
```

Axes are listed alphabetically (`ital,opsz,wght`), and ranges use `..` [8].

---

## 8. System font stacks

**Rule.** Use the OS UI font for product UI when brand allows. It costs zero bytes, matches the platform, and supports Dynamic Type-like scaling in native contexts.

| Stack | CSS | Notes |
|---|---|---|
| System UI | `font-family: system-ui, sans-serif;` | `system-ui` is supported in Chrome 56, Firefox 92, and Safari 11 [2]. It resolves to the OS UI font: San Francisco, Segoe UI, Roboto, or a Linux desktop font such as Ubuntu, Cantarell, or Noto Sans [12]. |
| Neo-grotesque | `font-family: Inter, Roboto, 'Helvetica Neue', 'Arial Nova', 'Nimbus Sans', Arial, sans-serif;` | From Modern Font Stacks [12]. |
| Humanist sans | `font-family: Seravek, 'Gill Sans Nova', Ubuntu, Calibri, 'DejaVu Sans', source-sans-pro, sans-serif;` | [12] |
| Transitional serif | `font-family: Charter, 'Bitstream Charter', 'Sitka Text', Cambria, serif;` | Good free-of-cost reading serif [12]. |
| Old-style serif | `font-family: 'Iowan Old Style', 'Palatino Linotype', 'URW Palladio L', P052, serif;` | [12] |
| Monospace code | `font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, 'DejaVu Sans Mono', monospace;` | `ui-monospace` resolves only in Safari (13.1+); other browsers skip to the next name [2][12]. |

Stacks are from the Modern Font Stacks project, checked 2026-10 [12]. The `ui-serif`, `ui-sans-serif`, and `ui-rounded` generic names are Safari-only [2].

**Limit.** System fonts differ by OS, so line breaks and text widths vary across platforms. Do not design pixel-tight layouts around one of them. For CJK, rely on `system-ui` or explicit per-language stacks with the `lang` attribute, not a Latin font name.

---

## 9. Variable fonts

**Rule.** One variable file replaces many static weights and widths. Use the high-level CSS properties for registered axes, and `font-variation-settings` only for custom axes or explicit `opsz` values [6].

### 9.1 Registered axes (OpenType)

| Tag | Name | Range (spec) | CSS property | Example |
|---|---|---|---|---|
| `wght` | Weight | 1–1000; Regular = 400 [13] | `font-weight` | `font-weight: 375;` |
| `wdth` | Width | > 0, percent of normal; Regular = 100 [13] | `font-stretch` (and the newer `font-width`) | `font-stretch: 87.5%;` |
| `slnt` | Slant | > −90 to < +90 degrees, counter-clockwise; Regular = 0 [13] | `font-style: oblique <angle>` | `font-style: oblique 10deg;` (= `"slnt" -10`) [6] |
| `ital` | Italic | 0–1; Regular = 0 [13] | `font-style: italic` | Pair with `font-synthesis: none` [6] |
| `opsz` | Optical size | > 0, in typographic points; 10–16 recommended for text "Regular" [13] | `font-optical-sizing: auto \| none` | Automatic by font size |

- **Slant sign.** The `slnt` axis counts counter-clockwise, so a normal forward lean is negative in `font-variation-settings`. CSS `oblique 14deg` equals `"slnt" -14` [6][13]. Prefer `font-style`.
- **Custom axes** use four uppercase letters (for example `GRAD` grade, `CASL` casual). Registered tags are lowercase, and tags are case-sensitive [6][13].
- `font-width` is supported only in Firefox 155 and Safari 18.4; Chrome does not support it (verified 2026-10) [2]. Use `font-stretch`, which works everywhere.

### 9.2 `@font-face` for a variable font

```css
@font-face {
  font-family: "Brand Var";
  src: url("/fonts/brand-var.woff2") format("woff2");
  font-weight: 100 900;           /* declare the axis range so the browser does not clamp to 400 */
  font-stretch: 75% 125%;
  font-style: oblique -12deg 0deg;   /* if the font has a slnt axis from -12 to 0 */
  font-display: swap;
}
```

MDN: "Supplying value ranges for `font-weight`, `font-stretch`, and `font-style` will keep the browser from attempting to render an axis outside that range" [6].

### 9.3 `font-variation-settings` vs high-level properties

| | High-level (`font-weight`, `font-stretch`, `font-style`, `font-optical-sizing`) | `font-variation-settings` |
|---|---|---|
| Cascade | Each property inherits independently. | One declaration holds all axes. Changing one axis means redeclaring all of them [6]. |
| Fallback fonts | Also apply to static fallbacks. | Ignored by non-variable fallbacks. |
| Validation | Invalid values rejected. | Does "not block you from supplying an invalid value" [6]. |
| Use for | `wght`, `wdth`, `slnt`, `ital`, automatic `opsz` | Custom axes (`GRAD`), forcing a specific `opsz` value |

Pattern for custom axes using custom properties, so one axis can change without redeclaring the others [6]:

```css
:root { --grad: 0; }
.text { font-variation-settings: "GRAD" var(--grad); }
@media (prefers-color-scheme: dark) { :root { --grad: -50; } }  /* lighter grade on dark backgrounds; check the font's GRAD range */
```

Grade changes stroke weight without changing glyph widths, so text does not reflow [6]. This makes `GRAD` useful for hover states and dark-mode compensation.

### 9.4 Optical sizing

- `font-optical-sizing: auto` (the default) lets the browser set `opsz` from the font size. The spec says browsers should supply an `opsz` value "close to the used value for font-size", and must clamp it to the font's supported range [5]. Supported in Chrome 79, Firefox 62, and Safari 13.1 [2].
- `font-optical-sizing` accepts only `auto` or `none`. To force a value, use `font-variation-settings: "opsz" 36` [6].
- Apple's system fonts use dynamic optical sizes that interpolate continuously between Text and Display designs [14].

**Apply.**
- **Web/UI:** Leave `auto` on. Big headlines get display-optimized shapes (tighter spacing, finer details) and small text gets sturdier shapes, without extra files.
- **Editorial:** Pick families with an `opsz` axis (for example Source Serif 4, Fraunces, Roboto Flex) when you use one family from captions to headlines.
- **Print/design tools:** Most tools expose `opsz` as a slider or auto setting. Match it to the set point size.

### 9.5 When a variable font is not worth it

- Variable files are larger than one static file. They pay off when you use **three or more** styles of one family [1].
- Usage: about 33% of desktop and 34% of mobile sites use variable fonts (HTTP Archive 2024) [3].

---

## 10. Performance budgets

No standard body sets a font byte budget; web.dev gives none [1]. Use these working targets, adapted from observed data:

| Metric | Target | Reference point |
|---|---|---|
| Font files on first view | ≤ 2–4 | Each extra file is a request competing with LCP resources. |
| Per file (Latin subset, WOFF2) | ≤ 30–50 KB | Median font file is 39 KB (desktop and mobile, HTTP Archive 2024) [3]. Inter variable, wght 100–900, latin subset from Google Fonts measured 48 KB (2026-10). |
| Total font bytes, first view | ≤ 100–150 KB | Working target, not a standard. |
| Families | ≤ 2 (plus mono if needed) | Also a design constraint (see `pairing-and-selection.md`). |
| Preloaded files | 1–2 | [1] |

**Procedure.**
1. Inventory: list every family, weight, and style the design actually uses.
2. Collapse three or more weights into one variable file; drop unused italics.
3. Subset per script; add `unicode-range`.
4. Preload the LCP text's font; inline `@font-face`.
5. Pick `font-display` per role (section 3); add a metric-matched fallback (section 6).
6. Measure CLS and LCP in the field. Lab tools miss cached-font behavior.

---

## 11. Color fonts

| Format | Chrome | Firefox | Safari | Notes |
|---|---|---|---|---|
| COLRv0 (flat layered colors) | 53 | 31 | 11.1 | Safe baseline [2] |
| **COLRv1** (gradients, compositing, compact) | **98** | **107** | **No** | Safari does not support it (verified 2026-10) [2] |
| OpenType-SVG | No | 31 | 12.1 | [2] |
| sbix (Apple bitmap) | 66 | No | 9.1 | [2] |
| CBDT/CBLC (Google bitmap) | 66 | No | No | [2] |

Palettes: `font-palette` and `@font-palette-values` work in Chrome 101, Firefox 107, and Safari 15.4 [2].

```css
/* Serve COLRv1 where supported; tech() lets other browsers skip to the next source */
@font-face {
  font-family: "Brand Color";
  src: url("/fonts/brand-colrv1.woff2") format("woff2") tech(color-COLRv1),
       url("/fonts/brand-colrv0.woff2") format("woff2") tech(color-COLRv0);
}
@font-palette-values --brand-dark { font-family: "Brand Color"; base-palette: 1; }
.logo-word { font-family: "Brand Color"; font-palette: --brand-dark; }
```

Usage: about 0.05% of pages (HTTP Archive 2024) [3]. Use color fonts for display type, emoji sets, and brand moments, never for body text. Provide a monochrome fallback and check contrast for every palette (see `color` → `contrast-and-dark-mode.md`).

---

## 12. Icon fonts vs SVG

**Rule.** Use SVG icons (inline or sprite). web.dev recommends replacing icon fonts with SVG [1].

| Issue | Icon font | SVG |
|---|---|---|
| Fallback | If the font fails or is blocked, users see random letters or boxes. The CSS spec's own example of a badly designed icon font maps a printer icon to "P" [5]. | Renders or is absent; no wrong glyphs. |
| `font-display` | Needs `block`, which hides icons up to about 3s [5]. | No font loading. |
| Accessibility | Glyphs may be read aloud as characters, and user font overrides can replace icons [unverified in this pass; widely reported practitioner concern]. | `aria-hidden="true"` for decorative icons, or `role="img"` plus `aria-label` / `<title>` for meaningful ones. |
| Color and detail | One color per glyph (unless a color font). | Multi-color, strokes, animation. |
| Rendering | Text anti-aliasing; sub-pixel blurriness on some sizes. | Crisp at any size. |

**Exception:** On iOS, SF Symbols are a system icon font-like resource designed to align with text weights and Dynamic Type [14]. Use them natively in apps; they are not a web icon font.

---

## 13. App fonts (iOS and Android)

Platform ramps, density units, and touch targets: `media-specs` → `digital-platforms.md`. This section covers bundling and scaling only.

### 13.1 iOS / iPadOS

1. Add `.ttf` or `.otf` files to the Xcode project and make sure they are members of the app target [15].
2. Register them in Info.plist under **Fonts provided by application** (`UIAppFonts`), listing each file name with extension [15]. macOS uses `ATSApplicationFontsPath` [16].
3. Reference the font by its PostScript name, which rarely matches the file name [15][16].
4. **Support Dynamic Type with custom fonts.**
   - UIKit: create the font at the size suited to the Large (default) setting, then scale it with `UIFontMetrics` `scaledFont(for:)`, and set `adjustsFontForContentSizeCategory = true` [17].
   - SwiftUI: `Font.custom("MyFont", size: 17, relativeTo: .body)`; `custom(_:size:)` scales relative to body by default [16].
5. Do not embed system fonts; use the system font APIs (`.default`, `.serif` for New York) [14].

Apple's default body size is 17pt on iOS/iPadOS (minimum 11pt) [14]. Custom fonts must also respond to accessibility settings such as Bold Text [14]. Keep truncation low at large sizes: "aim to display as much useful text at the largest accessibility font size as you do at the largest standard font size" [14].

### 13.2 Android

1. Put font files in `res/font/` (the directory must be named `font`) and optionally define a `<font-family>` XML that maps weights and styles [18].
2. Fonts in XML require Android 8.0 (API 26), or Support Library 26 for API 16+ [18]. In Compose, load them with `FontFamily(Font(R.font.x, FontWeight.Normal))`.
3. Downloadable fonts (Google Fonts provider) avoid bundling but add a network dependency.
4. **Size all text in `sp`, never `dp`.** sp "is the same size as a dp, by default, but it resizes based on the user's preferred text size. Never use sp for layout sizes" [19].
5. Android 14 supports font scaling up to **200%** with a non-linear curve, so large text grows less than small text. Define `lineHeight` in sp, or text "looks cramped" when scaled. Test at 200% [20].

**Apply (both platforms).** Test every screen at the largest accessibility text size. Let rows grow in height, wrap labels to multiple lines, and switch horizontal layouts to vertical when text is large.

**Limit.** Check the font license for app embedding. Desktop and web licenses often exclude apps.

---

## 14. Common mistakes

| Mistake | Fix |
|---|---|
| Serving TTF/OTF or WOFF to browsers | WOFF2 only [1]. |
| Separate family names per weight ("Brand Bold") | One family name, weight and style descriptors. |
| `font-display: block` (or default) on body text | `optional`, `fallback`, or `swap` plus metric-matched fallback [1][5]. |
| Preloading every weight | Preload 1–2 critical files [1]. |
| Preload without `crossorigin` | Font is fetched twice [1]. |
| Loading Google Fonts from Google's servers on EU sites without consent | Self-host (OFL allows it) [10][11]. |
| Variable font without `font-weight: 100 900` range in `@font-face` | Declare ranges [6]. |
| `font-variation-settings: "wght" 700` for bold | `font-weight: 700` [6]. |
| Positive `slnt` value for a forward lean | Use `font-style: oblique 10deg` or `"slnt" -10` [6][13]. |
| COLRv1 with no fallback | Add COLRv0 or monochrome source; Safari lacks COLRv1 [2]. |
| Icon fonts | SVG [1]. |
| `dp` for Android text, fixed-size custom fonts on iOS | `sp`; `UIFontMetrics` / `relativeTo:` [17][19]. |
| Copying `size-adjust` values from another font | Compute per font pair [9]. |
| Subsetting away diacritics, dashes, or the euro sign | Use script subsets plus typographic punctuation ranges. |

---

## Sources

[1] Hempenius, K., & Pollard, B. (2022). *Best practices for fonts*. web.dev. https://web.dev/articles/font-best-practices (last updated 2022-10-04)
[2] MDN. (2026). *browser-compat-data* (css/at-rules/font-face, font-palette-values; css/properties/font-family, font-optical-sizing, font-palette, font-size-adjust, font-variation-settings, font-width). GitHub. https://github.com/mdn/browser-compat-data (accessed 2026-10)
[3] Stein, B., & Berret, C. (2024). *Fonts*. Web Almanac 2024, HTTP Archive. https://almanac.httparchive.org/en/2024/fonts
[4] Google Fonts. (2026). CSS response for `https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap` (latin `unicode-range`), fetched 2026-10.
[5] W3C. (2026, September 13). *CSS Fonts Module Level 4* (Working Draft): `font-display`, `src` `tech()`, `font-optical-sizing`. https://www.w3.org/TR/css-fonts-4/
[6] MDN Web Docs. (n.d.). *Variable fonts guide*. https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_fonts/Variable_fonts_guide (accessed 2026-10)
[7] MDN Web Docs. (n.d.). *font-display*. https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display (accessed 2026-10)
[8] Google. (n.d.). *CSS API update (css2)*. Google Fonts for developers. https://developers.google.com/fonts/docs/css2 (accessed 2026-10)
[9] Argyle, A. (2021). *CSS size-adjust for @font-face*. web.dev. https://web.dev/articles/css-size-adjust (last updated 2021-06-09)
[10] Google. (n.d.). *google/fonts README* (licenses: OFL, Apache 2, UFL; redistribution and self-hosting). GitHub. https://github.com/google/fonts (accessed 2026-10)
[11] Bergische IHK. (n.d.). *Google Fonts* (summary of LG München I, judgment of 20.01.2022, Az. 3 O 17493/20). https://www.ihk.de/bergische/recht-und-steuern/wettbewerbsrecht/google-fonts-5646176 (secondary source; accessed 2026-10)
[12] Modern Font Stacks. (n.d.). *README*. GitHub. https://github.com/system-fonts/modern-font-stacks (accessed 2026-10)
[13] Microsoft. (2024). *OpenType Design-Variation Axis Tag Registry* (OpenType 1.9.1) and axis pages for `wght`, `wdth`, `slnt`, `ital`, `opsz`. https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg
[14] Apple. (n.d.). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography (accessed 2026-10)
[15] Apple. (n.d.). *Adding a custom font to your app*. Apple Developer Documentation (UIKit). https://developer.apple.com/documentation/uikit/adding-a-custom-font-to-your-app
[16] Apple. (n.d.). *Applying custom fonts to text*. Apple Developer Documentation (SwiftUI). https://developer.apple.com/documentation/swiftui/applying-custom-fonts-to-text
[17] Apple. (n.d.). *Scaling fonts automatically*. Apple Developer Documentation (UIKit). https://developer.apple.com/documentation/uikit/scaling-fonts-automatically
[18] Android Developers. (n.d.). *Fonts in XML*. https://developer.android.com/develop/ui/views/text-and-emoji/fonts-in-xml
[19] Android Developers. (n.d.). *Support different pixel densities*. https://developer.android.com/training/multiscreen/screendensities
[20] Android Developers. (n.d.). *Android 14 features and APIs: Non-linear font scaling to 200%*. https://developer.android.com/about/versions/14/features
