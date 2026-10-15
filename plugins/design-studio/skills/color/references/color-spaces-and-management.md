# Color Spaces and Color Management

> **Scope:** Which color spaces to author in (sRGB, Display P3, Rec. 2020, Adobe RGB, CIELAB/LCh, OKLab/OKLCH, HCT), modern CSS color syntax with support data and fallbacks, gamut mapping, converting and specifying brand colors across screen, print, and environments, and print color management (ICC profiles, ink limits, rich black, soft proofing, spot vs. process, Pantone).
> **Last verified:** 2026-10 (browser support, Pantone and Adobe product status, ICC registry data)
> **Used by:** color-specialist, design-engineer, design-system-architect, print-ooh-designer, editorial-designer, ui-designer, creative-director, social-media-designer

Related: color vocabulary and classic theory in `color-theory.md`; building tonal scales in `palettes-and-tonal-scales.md`; contrast math, APCA, dark mode, and color-vision deficiency in `contrast-and-dark-mode.md`; press specs, bleed, and file preparation in `media-specs` → `print-production.md`; billboards and signage in `media-specs` → `out-of-home.md`.

---

## 1. RGB display spaces

**Rule:** Author UI and web color in sRGB with an OKLCH description. Use Display P3 only as a progressive enhancement. Use Adobe RGB only in photo and print-prep pipelines that ask for it. Treat Rec. 2020 as a video and HDR container, not a design target.

| Space | Origin | White point | Transfer | Gamut (share of CIE 1931 xy) | Where it lives |
|---|---|---|---|---|---|
| sRGB | Proposed by HP and Microsoft in 1996; IEC 61966-2-1:1999 [12] | D65 [12] | Piecewise curve close to gamma 2.2 [12] | Same primaries as Rec. 709: 35.9% [14] | Web default, most images, most screens |
| Display P3 | Apple's D65 variant of DCI-P3; 2015 iMac was the first consumer computer with a built-in wide-gamut display [13] | D65 (about 6504 K) [13] | sRGB curve [13] | DCI-P3 primaries: 53.6% [14]; about 25% larger than sRGB in area, about 50% in volume [13] | Apple devices, many recent phones and laptops, CSS `color(display-p3 ...)` |
| Adobe RGB (1998) | Adobe, 1998 [15] | D65 [15] | Gamma 563/256 ≈ 2.2, no linear segment [15] | 52.1% [14][15]; extra range mostly in cyan-greens [15] | Photography, print prep; "designed to encompass most of the colors achievable on CMYK color printers" [15] |
| Rec. 2020 (ITU-R BT.2020) | ITU, 2012; current BT.2020-2 (2015) [14] | D65 [14] | Defined for SDR; HDR uses Rec. 2100 (PQ, HLG) with the same primaries [14] | 75.8% [14] | UHD video, HDR; CSS `color(rec2020 ...)` |

Gamut percentages describe 2D chromaticity area, not what any particular display shows. Few displays reach full Rec. 2020.

**Apply**
- UI / web: sRGB hex or OKLCH for tokens. Add P3 values for brand accents and illustrations where vividness matters (Section 4).
- Social: Platforms recompress uploads. Export images in sRGB with an embedded profile unless the platform documents P3 support [unverified per platform; check `media-specs` → `social-formats.md`].
- Print: Edit photos in Adobe RGB or a larger space if the pipeline is managed, then convert to the printer's CMYK profile at the end (Section 8).
- Digital OOH: Ask the media owner for the screen's color space and peak brightness; default to sRGB.

**Limit:** A wide-gamut file shown in an unmanaged app, or with its profile stripped, looks dull or oversaturated. Always embed or tag profiles.

---

## 2. Perceptual spaces: CIELAB/LCh, OKLab/OKLCH, HCT

| Space | Axes | Built from | Strength | Weakness | Use for |
|---|---|---|---|---|---|
| CIELAB (CIE 1976 L*a*b*) / LCh | L* lightness, a* green–red, b* blue–yellow; LCh = polar form | CIE standard; CSS `lab()` and `lch()` use a D50 white [1] | Industry standard for measurement, ICC profile connection space [23], print tolerances (ΔE) | Predicts hue poorly, especially blues; blending white with blue drifts toward purple [2][18] | Print measurement, spectrophotometer readings, ICC workflows |
| OKLab / OKLCH | L (0–1), a, b; OKLCH = L, C (chroma), h (hue angle) | Björn Ottosson, 2020; optimized on CAM16-generated data and IPT hue data [2] | Designed so lightness, chroma, and hue are perceived as independent; better hue uniformity than CIE LCH [1][2] | Max chroma differs by hue and lightness; many L/C/h combinations are outside sRGB [18] | Tokens, tonal scales, harmonies, interpolation, CSS |
| HCT (Material) | Hue, chroma, tone | Hue and chroma from CAM16; tone from L* [16] | Tone predicts contrast: a tone difference of 40 guarantees WCAG contrast ≥ 3.0 and 50 guarantees ≥ 4.5 [17] | Not in CSS; needs the Material Color Utilities library | Material 3 dynamic color, Android theming, tone-based scales |

### Why OKLCH is better for scales

1. **Lightness is predictable across hues.** In HSL, "+10% lightness" does different things to blue and purple, and different hues at the same HSL L have very different real lightness [18]. Same OKLCH L means roughly the same perceived lightness, so a "500" step lands at similar contrast for every hue.
2. **Hue stays put.** CIE LCH shifts blues toward purple as chroma or lightness changes; OKLCH was designed to fix that [2][18]. Blue tints stay blue.
3. **Chroma is honest.** HSL stretches every hue to the same "100% saturation." OKLCH shows the real space, so you can see that yellow can be very chromatic only when light, and blue only when darker [18].
4. **It reaches P3.** Hex, `rgb()`, and `hsl()` cannot express P3 colors; `oklch()` can [18].
5. **It is the CSS gamut-mapping space.** All CSS gamut-mapping algorithms reduce chroma at constant lightness and hue in OKLCH [1].

OKLCH syntax: `oklch(L C h / alpha)`. L is 0–1 or 0%–100%. C is a number from 0 up; in practice it does not exceed 0.5, and `100%` means 0.4 (not 1). h is degrees [3]. One just-noticeable difference is an OKLCH difference of 0.02 [1].

**Apply**
- Design systems: Store tokens as OKLCH with hex fallbacks. Generate scales by stepping L and easing C toward the ends (`palettes-and-tonal-scales.md`).
- Android / Material: Use HCT tone steps for accessible pairs (tone difference 50 for body text) [17].
- Print QA: Specify tolerances in CIELAB ΔE, which is what printers and spectrophotometers report.

**Limit:** OKLCH is a model of average perception for colors seen against typical surrounds. It ignores context effects (`color-theory.md`, Albers) and does not replace a contrast check.

---

## 3. CSS Color 4 and 5: syntax and support

Support data from caniuse, verified 2026-10.

| Feature | Example | Chrome / Edge | Firefox | Safari (macOS / iOS) | Global usage | Notes |
|---|---|---|---|---|---|---|
| `oklch()` | `oklch(62% 0.19 255)` | 111 | 113 | 15.4 | 95.12% [8] | Baseline widely available since May 2023 [3] |
| `color()` with predefined spaces | `color(display-p3 0.17 0.69 0.11)` | 111 | 113 | 15 (partial 10.1–14.1) | 95.26% [9] | Display and OS must support the space [9] |
| `color-mix()` | `color-mix(in oklch, var(--a) 70%, white)` | 111 | 113 | 16.2 | 94.79% [10] | Baseline since May 2023; interpolation space defaults to `oklab` if omitted [4] |
| Relative color syntax | `oklch(from var(--brand) calc(l + 0.1) c h)` | 131 (partial 119–130) | 133 (partial 128–132) | 18.0 (partial 16.4–17.x) | 93.45% (88.09% full + 5.36% partial) [11] | Early Safari required `deg` units in hue math [5] |
| `@media (color-gamut: p3)` | values `srgb`, `p3`, `rec2020` | yes | yes | yes | — | Baseline widely available since Feb 2023 [6] |
| `@media (dynamic-range: high)` | values `standard`, `high` | yes | yes | yes | — | Baseline since May 2022; tests capability, not whether HDR is active [7] |

**Syntax notes that trip people up**
- Relative color channels are plain numbers: `calc(l + 0.1)` works, `calc(l + 10%)` is invalid. Hue resolves to a number, so `calc(h + 180)` needs no unit [5].
- If `/ alpha` is omitted in relative syntax, alpha comes from the origin color, not 100% [5].
- `color-mix()` in a polar space defaults to `shorter hue`; use `longer hue`, `increasing hue`, or `decreasing hue` to control the path [4].
- `color-mix()` percentages that do not add to 100% are normalized; if they add to less than 100%, the result gets that alpha [4].
- Custom properties do not work inside `@supports` tests; test with a literal such as `red` [5].

```css
/* Tints, shades, and states from one token */
:root {
  --brand: oklch(55% 0.15 250);
  --brand-hover:  oklch(from var(--brand) calc(l - 0.06) c h);
  --brand-subtle: color-mix(in oklch, var(--brand) 12%, white);
  --brand-muted:  oklch(from var(--brand) l calc(c * 0.4) h);
}
```

---

## 4. Gamut mapping and fallback strategy

**What happens to an out-of-gamut color.** CSS keeps the authored value; for `oklch()`, the computed value only clamps L, C, and H, and gamut mapping happens at render time [1]. The spec's algorithms reduce chroma at constant lightness and hue in OKLCH [1]. In practice, as of September 2025 Chrome and Safari clip channels instead, which is fast but can shift hue [18]. [Current browser behavior unverified in this pass.] So do not rely on the browser to map well. Author colors that are in gamut for each target.

**Strategy**
1. Design the color in OKLCH.
2. Check it against sRGB and P3 with a gamut-aware tool: oklch.com shows P3 and Rec. 2020 boundaries and computes the "closest fallback (by chroma) in sRGB" [20]; Color.js offers `inGamut("srgb")` and `toGamut({space: "srgb"})` using the CSS algorithm by default [19].
3. Ship an sRGB value for everyone and a P3 value inside a gamut query.

Worked example (values computed with Ottosson's formulas [2] and the CSS chroma-reduction idea [1]): `oklch(65% 0.26 145)` is a vivid green outside sRGB but inside P3. The sRGB color at the same L and h with maximum chroma is `oklch(65% 0.204 145)`, about `#00AD2F`. In P3 it is about `color(display-p3 0.17 0.691 0.114)`.

```css
/* 1. Everyone: sRGB-safe value (hex for the oldest engines, then OKLCH) */
:root {
  --accent: #00AD2F;
  --accent: oklch(65% 0.204 145);
}

/* 2. Wide-gamut screens: more chroma at the same lightness and hue */
@media (color-gamut: p3) {
  :root {
    --accent: oklch(65% 0.26 145);
  }
}

/* 3. Optional: explicit P3 for tools or engines that prefer color() */
@supports (color: color(display-p3 0 0 0)) {
  @media (color-gamut: p3) {
    :root { --accent: color(display-p3 0.17 0.691 0.114); }
  }
}
```

The double declaration works because an engine that cannot parse `oklch()` drops that declaration and keeps the hex. Keep L and h identical between the sRGB and P3 values so contrast stays the same; only chroma changes.

**Apply**
- UI: Never put text-critical colors only in P3. Contrast must pass with the sRGB fallback (`contrast-and-dark-mode.md`).
- Brand: Record both the sRGB and the P3 value in the guideline (Section 7).
- Images: Export P3 images only when tagged; untagged P3 pixels are read as sRGB and look wrong.
- Figma: Files can use a P3 color profile, so OKLCH P3 colors can be used there [20]. Confirm the file's profile before handing off values.

**Limit:** P3 boosts chroma, mainly greens, reds, and oranges. It does not make dark or light colors more vivid where the gamut is narrow anyway.

---

## 5. Screens: wide gamut, HDR, dark mode

| Topic | Rule | Why |
|---|---|---|
| Wide-gamut displays | Treat sRGB as the floor and P3 as an enhancement | Not all screens and not all apps are color managed |
| HDR | Do not design UI color for HDR. Use `dynamic-range: high` only for media (video, hero imagery) | The query reports device capability, not whether HDR is active, and "high" is decided by the user agent [7] |
| Rec. 2020 | Use only when the video pipeline is Rec. 2020 / Rec. 2100 | Rec. 2100 uses Rec. 2020 primaries with HDR transfer functions [14] |
| White point | sRGB and P3 share D65 [12][13]. OS features that warm the display (night modes, ambient adaptation) shift what users see; never approve brand color on a display with such a mode on | Shifts every color toward warm |
| Dark mode | A dark theme is not an inverted light theme. Re-pick L for every role; reduce chroma of large areas; avoid pure white text on pure black for long reading | Full rules, values, and evidence: `contrast-and-dark-mode.md` |
| Calibration | Approve color on a calibrated display in a dim, neutral room; compare with at least one typical consumer phone | Most viewers will not have calibrated screens |

---

## 6. Converting brand colors: why every conversion is approximate

**Rule:** Hex, OKLCH, CMYK, Pantone, RAL, and NCS describe colors in different systems with different gamuts. Converting between them is a judgment, not arithmetic. Choose a *source of truth* per medium and match visually under controlled light.

| From → To | Exact? | Why not | How to do it |
|---|---|---|---|
| Hex ↔ OKLCH | Yes (within rounding) | Both are sRGB-based math | Any CSS tool; round L to 0.1%, C to 0.001, h to 0.1 |
| OKLCH (P3) → hex | No | P3 colors outside sRGB must be mapped | Chroma reduction at constant L and h (Section 4) |
| RGB → CMYK | No | CMYK gamut depends on ink, paper, press, and profile; vivid RGB blues, greens, and oranges are out of CMYK gamut | Convert with the printer's ICC profile and a chosen rendering intent; soft proof (Section 8) |
| CMYK → RGB | Mostly | CMYK on a given profile is mostly inside sRGB, but the same CMYK numbers look different on different profiles | Convert using the same profile the CMYK was made for |
| Pantone → CMYK | No | Many spot inks are outside the process gamut; Pantone's Color Bridge guide shows each spot next to its "closest" CMYK match [28] | Use Color Bridge values for the matching paper (coated or uncoated); approve on press |
| Pantone → RGB/hex | No | Spot inks on paper are reflective; screens emit light | Use Pantone's published RGB/HTML values as a start [28], then adjust visually |
| Any → RAL / NCS | No | Paint systems have discrete chips and different gamuts | Choose the nearest physical chip under daylight-equivalent light |

**The paper matters.** The same Pantone number looks different on coated and uncoated stock, which is why Pantone sells both, and why the Color Bridge guide is printed on coated and uncoated stocks aligned to the GRACoL references CRPC6 and CRPC3 [28].

---

## 7. How to specify a brand color in a guideline

**Rule:** Specify one color as a family of values, each tied to a medium and a condition. Name the primary source of truth (usually the Pantone spot for print brands, or the sRGB/OKLCH value for digital-first brands).

Template (values in angle brackets come from the conversion workflow in Section 8, not from a calculator):

| Field | Value | Condition / note |
|---|---|---|
| Name | Brand Blue | |
| Source of truth | `<Pantone XXXX C>` or `oklch(...)` | State which one wins in a dispute |
| sRGB hex | `#0057B8` | Web, apps, office documents |
| RGB | 0 87 184 | Office apps that ask for RGB |
| OKLCH (sRGB) | `oklch(47.4% 0.169 257.2)` | CSS tokens; computed from the hex [2] |
| OKLCH / P3 (optional) | `<oklch(47.4% C+ 257.2)>` | Wide-gamut screens; same L and h |
| CMYK coated | `<C M Y K>` + profile name, e.g. PSO Coated v3 (FOGRA51) or GRACoL 2013 (CRPC6) | Converted from the source of truth with the named profile |
| CMYK uncoated | `<C M Y K>` + profile name, e.g. PSO Uncoated v3 (FOGRA52) or GRACoL 2013 Uncoated (CRPC3) | Different numbers from coated, on purpose |
| Pantone coated | `<XXXX C>` | Formula Guide coated |
| Pantone uncoated | `<XXXX U>` | Formula Guide uncoated; may be a different number than the C match |
| RAL / NCS | `<RAL XXXX>` / `<NCS S XXXX-XXXX>` | Paint, signage, interiors, vehicles, environments |
| Vinyl / film | `<manufacturer + code>` | OOH, vehicle wraps, window graphics |
| Tolerance | e.g. ΔE00 ≤ 2–3 vs. the source of truth [unverified as an industry norm; agree with the printer] | Measured under D50 viewing for print |
| Approved backgrounds | List | See `color-theory.md` Albers exercises |

**Environmental systems**
- **RAL:** Three collections: RAL CLASSIC (four-digit codes, e.g., RAL 1000 "Green beige"), RAL DESIGN SYSTEM plus (e.g., RAL 000 15 00), and RAL EFFECT (e.g., RAL 110-1) [33]. Common for coatings, product design, and architecture.
- **NCS:** Notation such as `S 1050-Y90R`: 10 blackness, 50 chromaticness, hue 90% yellow toward red, with whiteness the remainder (40). Based on six elementary colors (white, black, red, yellow, green, blue). The NCS 1950 standard set has 1,950 colors [34]. It is the reference norm for color designation in Sweden, Norway, Spain, and South Africa and is used for interior and textile trend forecasting [34].

**Apply**
- Brand books: Always list CMYK per paper type and name the profile. A CMYK number without a profile is incomplete.
- OOH: Give printers the Pantone and the CMYK for the stated substrate; give sign makers RAL or NCS plus a physical sample.
- Digital: Hex plus OKLCH, with the P3 enhancement if used.

**Limit:** No single number reproduces a color everywhere. Approve physical proofs for each new substrate.

---

## 8. Print color management

### ICC profiles you will meet (verified 2026-10)

An ICC profile describes how a device or printing condition reproduces color relative to a profile connection space, usually CIELAB or CIEXYZ [23]. In print, the profile stands for a *printing condition* (standard, paper, press type), defined by characterization data such as FOGRA51.

| Profile (common name) | Characterization data | Standard / region | Paper | TAC (total area coverage) | Max K |
|---|---|---|---|---|---|
| PSO Coated v3 | FOGRA51 | ISO 12647-2:2013; Europe | Premium coated | 300% | 96% [21] |
| PSO Uncoated v3 (FOGRA52) | FOGRA52 | ISO 12647-2:2013; Europe | Wood-free uncoated white | 300% | 96% [21] |
| Coated FOGRA39 (VIGC variants; ISO Coated v2 by ECI is the widely used older profile) | FOGRA39 | ISO 12647-2:2004/Amd 1; Europe, legacy | Type 1 coated | 300% or 260% in the VIGC registry versions [21]; ECI also ships an "ISO Coated v2 300%" variant [22] | 100% [21] |
| GRACoL 2013 | CRPC6 (CGATS21) | Idealliance, ISO DIS 15339-2; US | Premium coated | 320% | 100% [21] |
| GRACoL 2013 Uncoated | CRPC3 | Idealliance; US | Uncoated | 280% | 100% [21] |
| SWOP 2013 C3 | CRPC5 | Idealliance; US publication | Grade #3 | 300% | 100% [21] |
| Japan Color 2011 Coated | Japan Color 2011 | ISO 12647-2:2004; Japan | Type 1 coated | 350% | 80% [21] |
| eciCMYK v2 | FOGRA59 | ECI CMYK exchange space (2021) | Exchange space, not a press | — | — [22] |
| PSO SC-B paper v3 | FOGRA54 | Heatset web on SC-B paper | Super calendered | — | — [22] |

Notes:
- ISO Coated v2 (ECI) is widely described as based on FOGRA39 [unverified on the ECI page opened in this pass, which lists it without naming its data set [22]].
- Other ink-limit figures exist. A Wikipedia summary says rich-black ink should not exceed 240% "on normal papers" [24], and a printer guide says to keep rich black under about 240% on most commercial stocks [25]. Those are conservative rich-black limits, lower than the profile TACs above. **Always use the printer's stated limit.**
- GRACoL 2006 and SWOP 2006 profiles also exist in the registry; prefer the 2013 versions for new US work [21].

### Rendering intents

| Intent | What it does | Use for |
|---|---|---|
| Relative colorimetric | Keeps in-gamut colors, clips out-of-gamut ones, adjusts for paper white; default on many systems [23] | Logos, flat brand colors, most graphic design |
| Perceptual | Compresses the whole gamut to keep gradations; also shifts in-gamut colors [23] | Photographs with many out-of-gamut colors |
| Saturation | Preserves vividness over hue accuracy [23] | Business charts; rarely for brand work |
| Absolute colorimetric | Keeps source colors exactly, including paper white simulation [23] | Proofing one press condition on another |

### Soft proofing procedure

Soft proofing simulates on screen how colors will print under a profile and intent before converting [23].

1. Calibrate the display and view in a dim, neutral room.
2. Ask the printer for the profile (or the characterization data and TAC) and the paper.
3. In the layout or image app, set up a custom proof with that profile and the intended rendering intent. Turn on paper color and black ink simulation if the app offers them.
4. Turn on the gamut warning. Fix out-of-gamut brand colors by choosing an in-gamut alternative you approve, not by letting the conversion decide.
5. Convert to the output profile at export (PDF/X), or deliver RGB with an embedded profile only if the printer asks for an RGB workflow.
6. Order a contract proof for color-critical jobs.

### Rich black

| Recipe (C/M/Y/K) | Total | Source | Use |
|---|---|---|---|
| 60 / 40 / 40 / 100 | 240% | 4OVER4 "standard neutral" [25] | Large black areas, US commercial print |
| 50 / 50 / 50 / 100 | 250% | Wikipedia "typical" [24] | Same |
| 60 / 0 / 0 / 100 | 160% | 4OVER4 "cool" [25] | Cool, deep blacks |
| 70 / 35 / 40 / 100 | 245% | Wikipedia "cool" [24] | Cool blacks |
| 40 / 60 / 40 / 100 | 240% | 4OVER4 "warm" [25] | Warm blacks |
| 35 / 60 / 60 / 100 | 255% | Wikipedia "warm" [24] | Warm blacks |
| 0 / 0 / 0 / 100 | 100% | [25] | Body text, small type, thin lines |
| 100 / 100 / 100 / 100 | 400% | Registration only [25] | Crop and registration marks. Never in artwork |

Rules: small text and fine lines stay K100 only, to avoid misregistration fringes [25]. Keep rich black within the printer's limit and inset the CMY under K slightly from the edge of knockout type if the printer recommends it. Ask the printer for their house rich black.

### Spot vs. process

| | Process (CMYK) | Spot |
|---|---|---|
| How | Dots of four inks blended by the eye | One premixed ink printed in its own run, with its own plate [26] |
| Strength | Photos, many colors, lower cost for full color | Consistency across presses, runs, and suppliers; metallics, fluorescents, out-of-gamut brand colors; security inks [26] |
| Cost | Fixed four plates | Each spot adds ink, plate, and press-time cost [26] |
| Use when | Full-color work, short runs, digital print | Logo-critical packaging, one- or two-color jobs, brand colors that CMYK cannot hit |

Other spot systems besides Pantone include Toyo, DIC, HKS, and RAL; a color in one system may have no equivalent in another [26].

### Pantone (verified 2026-10)

- **Pantone Matching System (PMS) Formula Guide:** Coated and uncoated set with 2,614 spot colors, including 224 new colors; listed at $248 [27]. "C" and "U" after a number refer to coated and uncoated paper.
- **Color Bridge guide:** Shows each of 2,587 spots next to its closest CMYK match, with RGB and HTML values; printed on coated and uncoated stocks aligned to CRPC6 and CRPC3; listed at $482 [28].
- **Pantone Connect:** Pantone's digital library on web, mobile, and as an Adobe Creative Cloud extension [29].
- **Adobe removal (2022):** Adobe announced in late 2021 that the pre-loaded Pantone libraries would leave Photoshop, Illustrator, InDesign, Adobe Color, and Capture [30][31]. The phase-out began with updates after August 16, 2022. Three books remained: Pantone+ CMYK Coated, Pantone+ CMYK Uncoated, and Pantone+ Metallics Coated [32]. Other spot colors require Pantone Connect. In InDesign, placed Photoshop files with spot channels from removed books render gray or black [32].
- **Pricing history:** Premium was reported at $7.99/month in 2021 [30]; $59.99/year or $7.99/month in August 2022 [32]; Print21 reported about $85/year for the unlimited version in February 2022 [31]. Current pricing [unverified 2026-10]; check connect.pantone.com.

**Apply**
- Keep Pantone names in brand files even without Connect; printers mix ink by name. Document Pantone numbers in the guideline so files are not the only record.
- When a legacy file shows spot colors as black, re-link the swatches through Connect or redefine them, then check the separations before sending to print.

---

## 9. Conversion workflow

| Step | Digital-first brand (source of truth = sRGB/OKLCH) | Print-first brand (source of truth = Pantone) |
|---|---|---|
| 1. Define | Pick in OKLCH; store hex + OKLCH (+ P3 if used) | Pick from the Formula Guide under D50 light, coated and uncoated |
| 2. Screen values | Done in step 1 | Start from Pantone's RGB/HTML values [28]; adjust on a calibrated screen to match the printed chip; record hex + OKLCH |
| 3. CMYK coated | Convert from sRGB with the coated profile (e.g., PSO Coated v3 or GRACoL 2013), relative colorimetric; soft proof; adjust by hand if the hue shifts | Use the Color Bridge coated value [28]; verify with the target profile |
| 4. CMYK uncoated | Repeat with the uncoated profile (PSO Uncoated v3 or GRACoL 2013 Uncoated) | Color Bridge uncoated value [28] |
| 5. Pantone | Find the nearest C and U matches visually in the guides; they may be different numbers | Done in step 1 |
| 6. Environments | Match RAL / NCS chips physically to the approved print or screen reference | Same |
| 7. Approve | Contract proof on each paper; screen check on at least two devices | Press check for the first run |
| 8. Record | Write every value with its condition into the guideline (Section 7) | Same |

---

## Common mistakes

| Mistake | Consequence | Fix |
|---|---|---|
| Picking CMYK in Photoshop from an RGB hex with whatever CMYK working space is set | Numbers belong to an unknown profile; another printer gets a different color | Convert with the named profile of the actual printing condition and record it |
| One CMYK value for coated and uncoated | Uncoated prints darker and duller; brand looks inconsistent | Separate values per paper (Section 7) |
| Treating Pantone → CMYK as exact | Out-of-gamut spots look flat in process | Use Color Bridge values, approve on press, or print the spot |
| Ignoring TAC | Set-off, slow drying, cracking at folds | Stay within the profile and printer limit; let the profile's GCR handle conversion |
| Rich black on small text | Color fringes from misregistration | K100 for small type and thin lines [25] |
| Using registration black (400%) in artwork | Ink overload | Use the printer's rich black [25] |
| Editing tokens in HSL | Uneven lightness across hues | Edit OKLCH L [18] |
| Shipping only P3 colors | Wrong or clipped color on sRGB screens; contrast may fail | sRGB fallback first, P3 in `@media (color-gamut: p3)` |
| Trusting the browser to gamut-map | Clipping can shift hue [18] | Author in-gamut values per target |
| Stripping ICC profiles on export | Colors shift between apps and devices | Embed sRGB or P3 profile; convert, don't assign |
| Approving color on an uncalibrated or night-mode screen | Warm or cool cast distorts decisions | Calibrated display, neutral room, night modes off |
| Specifying a brand color as a hex only | Print, signage, and paint suppliers guess | Full specification family (Section 7) |
| Assuming old Adobe files keep Pantone swatches | Spots render black or gray after the 2022 removal [32] | Re-link through Pantone Connect; record Pantone numbers in the guideline |

---

## Sources

[1] Atkins, T., Lilley, C., & Verou, L. (Eds.). (2026, Oct 9). *CSS Color Module Level 4* (W3C Candidate Recommendation Draft). W3C. https://www.w3.org/TR/css-color-4/

[2] Ottosson, B. (2020, Dec 23). *A perceptual color space for image processing*. https://bottosson.github.io/posts/oklab/

[3] MDN Web Docs. *oklch()*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/oklch (accessed 2026-10)

[4] MDN Web Docs. *color-mix()*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/color-mix (accessed 2026-10)

[5] MDN Web Docs. *Using relative colors*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Colors/Using_relative_colors (accessed 2026-10)

[6] MDN Web Docs. *color-gamut*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut (accessed 2026-10)

[7] MDN Web Docs. *dynamic-range*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/dynamic-range (accessed 2026-10)

[8] Can I use. *CSS property: color: oklch()*. https://caniuse.com/mdn-css_types_color_oklch (accessed 2026-10)

[9] Can I use. *CSS color() function*. https://caniuse.com/css-color-function (accessed 2026-10)

[10] Can I use. *color-mix()*. https://caniuse.com/mdn-css_types_color_color-mix (accessed 2026-10)

[11] Can I use. *CSS Relative color syntax*. https://caniuse.com/css-relative-colors (accessed 2026-10)

[12] Wikipedia contributors. *sRGB*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/SRGB (accessed 2026-10)

[13] Wikipedia contributors. *Display P3*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Display_P3 (accessed 2026-10)

[14] Wikipedia contributors. *Rec. 2020*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Rec._2020 (accessed 2026-10)

[15] Wikipedia contributors. *Adobe RGB color space*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Adobe_RGB_color_space (accessed 2026-10)

[16] Material Foundation. *Color spaces* (Material Color Utilities concepts). GitHub. https://github.com/material-foundation/material-color-utilities/blob/main/concepts/color_spaces.md

[17] Material Foundation. *Contrast for accessibility* (Material Color Utilities concepts). GitHub. https://github.com/material-foundation/material-color-utilities/blob/main/concepts/contrast_for_accessibility.md

[18] Sitnik, A., & Turner, T. (2025, Sep 17). *OKLCH in CSS: why we moved from RGB and HSL*. Evil Martians. https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl

[19] Color.js. *Gamut mapping*. https://colorjs.io/docs/gamut-mapping (accessed 2026-10)

[20] Sitnik, A., & Shamin, R. *OKLCH Color Picker & Converter*. Evil Martians. https://oklch.com/ (accessed 2026-10)

[21] International Color Consortium. *ICC Profile Registry*. https://registry.color.org/profile-registry/ (accessed 2026-10)

[22] European Color Initiative (ECI). *Downloads*. https://www.eci.org/en/downloads (accessed 2026-10)

[23] Wikipedia contributors. *Color management*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Color_management (accessed 2026-10)

[24] Wikipedia contributors. *Rich black*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Rich_black (accessed 2026-10)

[25] 4OVER4. *Rich black explained: the CMYK recipe for deep solid blacks*. Printer guide. https://www.4over4.com/.well-known/okf/guide/rich-black-explained-the-cmyk-recipe.md (accessed 2026-10)

[26] Wikipedia contributors. *Spot color*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Spot_color (accessed 2026-10)

[27] Pantone. *Formula Guide Set, Coated & Uncoated (GP1601C)*. Product page. https://www.pantone.com/products/graphics/formula-guide-coated-uncoated (accessed 2026-10)

[28] Pantone. *Color Bridge Guide Set, Coated & Uncoated (GP6102C)*. Product page. https://www.pantone.com/products/graphics/color-bridge-guide-set-coated-uncoated (accessed 2026-10)

[29] Pantone. *Pantone Connect*. https://www.pantone.com/pantone-connect (accessed 2026-10)

[30] Shell, J. (2021, Dec 21). *Adobe to remove PANTONE color libraries*. Keypoint Intelligence. https://keypointintelligence.com/keypoint-blogs/adobe-to-remove-pantone-color-libraries

[31] Robinson, W. (2022, Feb 2). *Adobe to dump Pantone from Creative Cloud*. Print21. https://www.print21.com.au/commercial/adobe-to-dump-pantone-from-creative-cloud

[32] Ruvo, C. (2022, Aug 29). *Free access to Pantone color libraries in Adobe Creative Cloud is ending*. ASI Central. https://members.asicentral.com/news/newsletters/promogram/august-2022/free-access-to-pantone-color-libraries-in-adobe-creative-cloud-is-ending/

[33] RAL. *All RAL colours*. https://www.ral-farben.de/en/all-ral-colours (accessed 2026-10)

[34] Wikipedia contributors. *Natural Color System*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Natural_Color_System (accessed 2026-10)
