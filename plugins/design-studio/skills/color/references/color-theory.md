# Color Theory for Practice

> **Scope:** The working vocabulary and classic theory of color (hue/chroma/lightness, color models and wheels, Itten, Albers, harmonies, temperature, weight, proportion, Bezold, Munsell), turned into procedures an agent can apply to a palette.
> **Last verified:** 2026-10
> **Used by:** color-specialist, creative-director, ui-designer, design-system-architect, editorial-designer, print-ooh-designer, social-media-designer, design-critic

What colors *mean* (emotion, culture, brand associations) is covered in `cognitive-psychology` → `color-psychology.md`; it is not repeated here. Contrast math, APCA, and color-vision deficiency live in `contrast-and-dark-mode.md`. Building tonal scales and palettes lives in `palettes-and-tonal-scales.md`. Color spaces, CSS color syntax, and print conversion live in `color-spaces-and-management.md`.

---

## 1. The three dimensions: hue, chroma, lightness

**Rule:** Describe and adjust every color on three independent axes. Pick the lightness first (it carries hierarchy and legibility), then the chroma (how loud), then the hue (identity).

| Dimension | Plain meaning | Synonyms you will meet | Measure it in |
|---|---|---|---|
| Hue | Which color family: red, yellow, blue... | color, tint family | OKLCH `h` (degrees), Munsell hue (5R, 10YR...) |
| Chroma | How far from gray; colorfulness | saturation (loosely), intensity, purity | OKLCH `C` (0 to about 0.32 in sRGB; higher in P3), Munsell chroma |
| Lightness | How light or dark it looks | value (Munsell, painters), tone (Material HCT), brightness (loosely) | OKLCH `L` (0–100%), CIE L* (0–100), Munsell value (0–10) |

"Saturation" in HSL/HSV is a ratio inside the RGB cube, not perceived colorfulness. "Chroma" is the perceptual term. Use "chroma" when you mean "how vivid it looks."

### Why HSL "lightness" lies

HSL lightness is the mean of the largest and smallest gamma-encoded RGB channels. The CSS Color 4 specification says HSL lightness does not match perceived lightness across hues. Its example: `#00F` (blue) and `#FF0` (yellow) both have HSL L = 50%, yet in CIE Lab blue is L 29.6% and yellow is L 97.6% [1].

Every fully saturated HSL hue at L 50%, with perceptual lightness computed in OKLCH using Ottosson's published formulas [2] (computed for this file):

| HSL | Hex | OKLCH L | OKLCH C | OKLCH h | Looks |
|---|---|---|---|---|---|
| hsl(0 100% 50%) | #FF0000 | 62.8% | 0.258 | 29.2 | mid |
| hsl(60 100% 50%) | #FFFF00 | 96.8% | 0.211 | 109.8 | almost white |
| hsl(120 100% 50%) | #00FF00 | 86.6% | 0.295 | 142.5 | light |
| hsl(180 100% 50%) | #00FFFF | 90.5% | 0.155 | 194.8 | very light |
| hsl(240 100% 50%) | #0000FF | 45.2% | 0.313 | 264.1 | dark |
| hsl(300 100% 50%) | #FF00FF | 70.2% | 0.322 | 328.4 | mid-light |

Same "L 50%", perceived lightness from 45% to 97%. That spread is why a palette built by rotating HSL hue at fixed S/L has uneven contrast, and why "+10% lightness" in HSL does different things to blue and to yellow [15].

**Apply**
- UI / web: Never build tokens, tints, or state colors (hover, disabled) by editing HSL L. Use OKLCH `L` (see `color-spaces-and-management.md` and `palettes-and-tonal-scales.md`).
- All media: Before comparing two colors for "same weight," compare OKLCH L or CIE L*, not HSL L or HSV V.
- Grayscale check: convert the layout to grayscale (or set chroma to 0 in OKLCH). If the hierarchy disappears, it was carried by hue alone.

**Limit:** OKLCH L and CIE L* are models of average observers under set viewing conditions. They do not account for surround (see Albers, Section 4), size, or the observer's color vision.

---

## 2. Color models and which wheel to use

Three wheels are in common use. They put different colors opposite each other, so "complementary" depends on the wheel [3].

| Model | Primaries | Mixing | Where it is physically true | Complement of blue | Complement of red | Use it for |
|---|---|---|---|---|---|---|
| RYB (artist) | Red, yellow, blue | Subtractive (paint), approximate | Traditional pigment teaching; not a precise physical model | Orange | Green | Talking with painters and illustrators; reading Itten, older design books; paint and craft media |
| RGB (light) | Red, green, blue | Additive: R+G+B = white | Screens, projectors, LED signage | Yellow | Cyan | Anything shown on a screen; digital OOH |
| CMY(K) (ink) | Cyan, magenta, yellow (+ black) | Subtractive: C+M+Y ≈ dark brown-black, so K is added | Process printing | Yellow (CMY wheel shares the RGB/CMY circle) | Cyan | Print production, separations, ink limits |
| Perceptual (OKLCH, Munsell) | None (hue is an angle or a named step) | Not a mixing model | Describes appearance | Roughly opposite angle; see note | Roughly opposite angle | Harmony math, scales, consistent lightness |

Painters use RYB, printers use CMY, and RGB is an additive circle whose complements, such as red and cyan, are not the same as pigment complements [3]. RGB and CMY share one circle: each additive primary is opposite a subtractive one [3].

**Note on perceptual complements:** In OKLCH, `h + 180` is a geometric opposite in a perceptual space. It will not exactly match the RYB, RGB, or Munsell complement. That is fine: there is no single "true" complement. Pick the wheel for the task and say which one you used.

**Apply**
- UI / web: Use OKLCH hue angles for harmony math; RGB wheel only to explain screen mixing.
- Print / packaging: Think in CMYK for what can print, but choose and judge relationships in a perceptual space, then check the CMYK result in a soft proof (`color-spaces-and-management.md`).
- Illustration / editorial art direction: RYB vocabulary is what illustrators expect ("push it toward orange").
- OOH: Digital billboards are RGB; printed vinyl and paper posters are CMYK or spot. The same brand color needs both (see the brand spec in `color-spaces-and-management.md`).

**Limit:** None of the wheels shows lightness or gamut. Two colors "opposite" on a wheel can differ wildly in lightness (blue vs. yellow, Section 1), which matters more for legibility than the hue angle.

---

## 3. Itten: seven contrasts

Johannes Itten taught the Bauhaus preliminary course (1919–1922) [4]. *Kunst der Farbe* was published in 1961 by Otto Maier, Ravensburg [5]; the English edition is *The Art of Color*. His 12-hue color sphere developed Adolf Hölzel's color wheel [4]; it was first published in 1921, and the 12-part color circle familiar from design books is dated 1961 [5].

**The seven contrasts** (names vary slightly across translations; Wikipedia lists hue, value, temperature, complements, simultaneous, saturation, extension [4]; worqx.com gives similar headings [6]):

| # | Contrast | What it is | Procedure to apply to a palette | Typical use |
|---|---|---|---|---|
| 1 | Contrast of hue | Undiluted hues side by side; strongest with primaries | Pick 3+ hues far apart on the wheel at high chroma | Kids' brands, sports, festival posters, data categories |
| 2 | Light-dark (value) contrast | Differences in lightness | Set an L ladder first (e.g., OKLCH L 20 / 50 / 95). Test in grayscale | Hierarchy, legibility, every interface |
| 3 | Cold-warm contrast | Warm (red-orange) against cool (blue-green) hues | Pair one warm with one cool at similar L to get tension without value change | Food vs. tech cues, foreground/background separation |
| 4 | Complementary contrast | Opposite hues; mixed as paint, they neutralize to gray | Use the complement for the one thing that must pop; keep it small (see #7) | Call-to-action, sale badges, sports kits |
| 5 | Simultaneous contrast | The eye "generates" the complement of a color in its neighbors; a gray next to red looks greenish | Check every key color on every background it will sit on (Albers exercises, Section 4) | Neutral grays in UI; skin tones on colored backdrops |
| 6 | Contrast of saturation | Pure color against dulled versions of itself or grays | Hold hue and L, drop chroma for the supporting areas, keep one saturated accent | Luxury and editorial palettes; dashboards |
| 7 | Contrast of extension (proportion) | Area balance; lighter colors need less area to balance darker ones | Give light, high-chroma colors small areas and dark, low-chroma colors large areas | Accent sizing, 60-30-10 style splits (Section 8) |

**Contrast of extension: the numbers.** Itten reports "light values" for the six primaries and secondaries, attributed to Goethe, in the sequence 9:8:6:3:4:6. A 2017 spectrophotometric study found the qualitative ordering held but the quantities differed from Itten's sequence, and argued the values may come from Schopenhauer rather than Goethe [7]. The commonly cited mapping is yellow 9, orange 8, red 6, violet 3, blue 4, green 6, with harmonious areas inversely proportional (yellow:violet area about 1:3) [unverified against Itten's text; the study's abstract lists the order differently [7]]. **[E3]** Use the idea (balance area against lightness and chroma), not the integers.

**Apply**
- UI: Contrast 2 does the work (hierarchy, states). Contrast 4 or 6 marks the primary action. Contrast 5 is why a neutral gray card on a saturated brand background can look tinted: tint the gray slightly toward the background hue to cancel it, or check it in context.
- Brand: Name which contrast the identity relies on (e.g., "hue contrast, two complements, equal L"). That becomes a rule the guideline can enforce.
- Print / editorial: Contrast 6 (one saturated accent on muted fields) survives uncoated stock better than contrast 1, because uncoated paper lowers chroma anyway.
- Social: Thumbnails at small size keep only contrasts 2 and 4. Test at 25% zoom.
- OOH: Viewing time is short and distance long; rely on contrast 2 first, then 4. Hue contrast at equal lightness disappears at a distance and for many color-deficient viewers (see `contrast-and-dark-mode.md`).

**Limit:** Itten's system is a teaching framework, not a perceptual model. He also tied palettes to personality "season types," which later inspired seasonal color analysis [4]. Treat that as folklore. **[E3]** His claims that specific contrasts are "harmonious" are aesthetic positions, not measured effects (Section 6).

---

## 4. Albers: color is relative

Josef Albers taught at the Bauhaus (from 1922), at Black Mountain College (1933–1949), and headed Yale's design department from 1950 [9]. *Interaction of Color* was published by Yale University Press in 1963 as a limited silkscreen edition with 150 plates; a paperback followed in 1971 and a 50th-anniversary edition in 2013 [8]. Albers argued that color "is almost never seen as it really is" and that "color deceives continually" [9]. The book's themes include color relativity, intensity, and temperature; vibrating and vanishing boundaries; the illusion of transparency; and reversed grounds [8].

The core lesson for practice: **a color has no fixed appearance. Its look depends on its neighbors, its area, and the light.** Design every color in context, never as an isolated swatch.

### Exercises an agent can run on a palette

These follow Albers's studio method (the book's exercises are built from cut colored paper). Run them in Figma, in code, or in a quick HTML page.

| Exercise | Albers effect | Procedure | Pass / fail signal |
|---|---|---|---|
| A. One color, two looks | Relativity / simultaneous contrast | Put the same swatch (e.g., the brand neutral) on the lightest and darkest backgrounds it will be used on, side by side | If the two instances look like different colors, the neutral is not neutral in this system. Adjust it, or give it one approved background per context |
| B. Two colors, one look | "Subtraction" of color by the ground | Take two slightly different swatches (e.g., two grays 3–5 OKLCH L apart, or two tints of a hue). Find backgrounds that make them look identical | Proves that close tokens collapse in context. If your token scale has steps that collapse on real backgrounds, merge them |
| C. Background audit | Reversed grounds | For each text or icon color, view it on every allowed surface token | Any pair that looks muddy or vibrates goes into the "do not combine" list in the guideline |
| D. Vibrating edge test | Vibrating boundaries | Put two high-chroma complements at equal lightness side by side (e.g., red on green at the same OKLCH L) | Visible flicker or edge glow means: never use this pair for text or thin lines; separate with a neutral border or change L |
| E. Transparency illusion | Illusion of transparency | Choose a third color for the overlap of two shapes, between them in L and hue | Use for overlapping chart areas, layered cards, and overprint effects without real alpha |
| F. Area swap | Quantity / extension | Render the palette as 60/30/10 bars, then swap which color has the 60 | If the brand reads as a different brand after the swap, document the proportion as part of the identity |

**Apply**
- UI: Run A and C on every theme (light, dark, high contrast). Run B on the neutral scale before shipping tokens.
- Brand: Ship approved background pairings, not only swatches. Many brand books show swatches on white only; Albers shows why that is not enough.
- Print / packaging: Run A on the real substrate. Kraft board, uncoated cream stock, and metallized film all shift perceived color.
- Social / OOH: Run A with the real photo or environment behind the color: a sky, a street, a feed of other posts.

**Limit:** Albers's effects are perceptual facts (simultaneous contrast and assimilation are well documented). His book is a teaching method, not a source of numeric rules. Do not cite it for formulas.

---

## 5. Bezold effect (assimilation)

**Rule:** When a color is broken into small, interleaved areas (thin lines, small pattern, small type), it moves *toward* its neighbors (assimilation). In large adjacent areas, colors move *away* from each other (contrast).

Wilhelm von Bezold (1837–1907) noticed the effect while trying to change a rug design by changing only one color. Interleaving small areas of color produces an assimilation ("spreading") effect similar to optical mixing; large adjacent areas produce contrast instead [12].

**Apply**
- UI / web: A brand color used for thin lines, small icons, or 12–14px text looks different from the same color as a large fill. Approve small-scale uses at real size.
- Pattern and texture: Changing the outline or grout color of a pattern (black vs. white) shifts the perceived fill color. Use this to recolor a pattern without touching the fills.
- Print / packaging: Fine linework and small type on a colored ground assimilate. Specify a slightly stronger color for small elements, or test with a printed proof.
- Social: Patterned backgrounds in thumbnails assimilate into one average color at small size. Check at feed size.
- OOH: At distance, every fine pattern averages (assimilates) into one color. Design for the averaged color.

**Limit:** The direction (assimilation vs. contrast) depends on the size of the elements relative to viewing distance. Test at the real size and distance.

---

## 6. Harmonies: starting heuristics, not laws

**Rule:** Use harmony schemes to generate candidates quickly. Then choose by lightness structure, chroma, proportion, and the job. A scheme never guarantees a pleasing result.

| Scheme | Hues | OKLCH recipe (from base hue h) | Character | Good for |
|---|---|---|---|---|
| Monochromatic | 1 | h, vary L and C | Calm, controlled | Product UI, luxury, editorial |
| Analogous | 2–4 neighbors | h−30, h, h+30 | Cohesive, low tension | Illustration, backgrounds, lifestyle |
| Complementary | 2 opposite | h, h+180 | High tension; needs one dominant | CTAs, sports, posters |
| Split-complementary | 1 + 2 flanking its opposite | h, h+150, h+210 | Contrast with less clash | Brand palettes with an accent pair |
| Triadic | 3 evenly spaced | h, h+120, h+240 | Lively, playful | Kids, games, data categories |
| Tetradic (rectangle / square) | 4 | Rectangle h, h+60, h+180, h+240. Square h, h+90, h+180, h+270 | Rich, hard to balance | Large systems with many categories; illustration |

Ready-to-use CSS, built with relative color syntax (support and fallback in `color-spaces-and-management.md`):

```css
:root {
  --base:    oklch(55% 0.15 250);
  --comp:    oklch(from var(--base) l c calc(h + 180));
  --split-1: oklch(from var(--base) l c calc(h + 150));
  --split-2: oklch(from var(--base) l c calc(h + 210));
  --tri-1:   oklch(from var(--base) l c calc(h + 120));
  --tri-2:   oklch(from var(--base) l c calc(h + 240));
  --ana-1:   oklch(from var(--base) l c calc(h - 30));
  --ana-2:   oklch(from var(--base) l c calc(h + 30));
}
```

Holding `l` and `c` fixed while rotating `h` keeps perceived lightness and colorfulness roughly constant, which HSL cannot do (Section 1). But the maximum chroma available differs by hue and lightness, so some rotated colors fall outside sRGB and will be clipped or mapped. Check each result in a gamut-aware picker [15].

**Procedure: turn a scheme into a usable palette**
1. Generate candidates with a scheme.
2. Assign roles: one dominant, one or two supporting, one accent.
3. Separate the roles in lightness (at least one role near L 20–30% and one near L 90–97% for text and surfaces).
4. Lower chroma on the large areas; keep the highest chroma for the smallest area (Itten's extension, Section 3).
5. Run Albers exercises A and C (Section 4).
6. Check contrast pairs in `contrast-and-dark-mode.md`.

### What the evidence says about "harmony"

- Schloss and Palmer (2011) separated three judgments about color pairs: preference for the pair, harmony of the pair, and preference for a figure color on a ground. Both pair preference and harmony rose as hue *similarity* increased. Preference also depended strongly on how much people liked each color and on lightness contrast. Pairs of highly contrasting hues were generally judged neither preferable nor harmonious, but a figure color was preferred more as its hue contrast with the background increased [10]. **[E1]** (peer-reviewed; one lab, 48 observers, so treat as one strong study rather than settled law.)
- The same paper notes its data run against Itten's idea that colors mixing to gray are harmonious: paint-complement pairs were rated less harmonious than neighboring-hue pairs [10]. **[E1]** (same caveat)
- Claims that complementary, triadic, or tetradic schemes are inherently "pleasing" or "balanced" have no measured support beyond such studies. **[E3]**

**Corrected reading:** Similar hues tend to be judged harmonious as a pair. Contrasting hues work best as *figure on ground* (an accent on a field), not as two equal partners. That is a research-backed reason for "one dominant, one accent."

**Apply**
- UI: Monochromatic or analogous for the system plus one complementary accent for primary actions.
- Brand: Use a scheme to explore. Justify the final palette by roles, lightness ladder, and proportion, not by the scheme name.
- Data visualization: Triadic and tetradic sets give distinct categories, but categorical palettes must be checked for lightness separation and color-vision deficiency (`contrast-and-dark-mode.md`).
- Print / OOH: Complementary pairs at equal lightness vibrate (Albers exercise D). Separate them in L or with a neutral keyline.

**Limit:** Harmony judgments vary with culture, context, and the object being colored. "Pleasing" is not the brief. Legibility, distinctiveness, and fit to the brand idea come first.

---

## 7. Temperature, advancing and receding, visual weight

### Color temperature (two meanings)

| Meaning | Scale | Notes |
|---|---|---|
| Artistic "warm/cool" | Reds, oranges, yellows feel warm; blues, blue-greens feel cool | A convention. Some hues (greens, violets, magentas) flip depending on neighbors (Itten contrast 3) |
| Light source correlated color temperature | Kelvin | Physically inverted vs. the art terms: higher K looks bluer ("cooler"). sRGB and Display P3 use the D65 white point, about 6504 K [13] |

**Apply**
- UI: Warm or cool the neutral scale slightly (OKLCH C 0.005–0.02 toward a hue) to match the brand. Pure gray (C 0) next to a saturated brand color often looks tinted toward the complement (simultaneous contrast).
- Photography and social: Keep the color temperature of photos consistent across a grid or carousel. Mixed white balance reads as inconsistent.
- Print: Paper white is part of the temperature. Cream stock warms everything.

### Advancing and receding

Warm colors are often said to come forward and cool colors to recede. The related optical effect, chromostereopsis, makes flat red and blue appear at different depths. It is mainly caused by chromatic aberration in the eye, and it varies by person: many see red in front of blue, some see the reverse, some see no effect [11]. **[E2]** for the optical effect existing; **[E3]** for the general design claim that warm colors "advance."

**Apply**
- Avoid saturated red text on saturated blue (or the reverse). The depth effect makes it vibrate and tiring to read.
- To push an element forward, rely on lightness contrast, size, and overlap first. Temperature is a weak, inconsistent cue.
- In OOH and signage, do not depend on "advancing" color for priority.

### Visual weight

Craft heuristic: on a light ground, darker, more saturated, and warmer areas feel "heavier" and pull attention; on a dark ground, lighter and more saturated areas do. Balance a small heavy area against a large light one. **[E3]** (widely taught, not quantified in sources opened for this file). For attention and scanning evidence, see `cognitive-psychology` → `attention-and-scanning.md`. For layout balance, see `layout-composition` → `hierarchy-balance-whitespace.md`.

**Limit:** Weight depends on the ground. The same accent is "heavy" on white and "light" on black.

---

## 8. Proportion: the 60-30-10 "rule"

**What it is:** Use one dominant color for about 60% of the area, a secondary for about 30%, and an accent for about 10%. Web-design adaptations map 60% to backgrounds (often a neutral), 30% to a secondary color, and 10% to the call-to-action accent [14].

**Origin and evidence (myth check):**
- The rule is described as originating in interior design [14]. No inventor, date, or study was found in this research pass.
- Some practitioners tie it to the golden section. 60/30/10 is not the golden ratio (about 61.8/38.2), so that link is a loose analogy, not a derivation. See `layout-composition` for golden-ratio myths.
- No peer-reviewed evidence was found that 60-30-10 produces more pleasing or effective designs than other splits. **[E3]**

**Corrected reading:** The useful idea is *unequal* areas with a clear dominant and a small accent. That matches Itten's contrast of extension (Section 3) and the figure-on-ground finding in Section 6. The exact numbers are arbitrary.

| Context | Practical split | Why |
|---|---|---|
| Product UI | 80–90% neutrals, 5–15% brand, 1–5% accent and status | Content and controls need calm surfaces; status colors need to stand out |
| Marketing page | 60–70% neutral, 20–30% brand, 5–10% accent | Brand needs presence; CTA needs isolation |
| Editorial / magazine | Paper and black text dominate; color is under 10% except on covers and openers | Long reading |
| Social post | Often inverted: brand color at 50–70% for recognition in the feed | Recognition in a thumbnail |
| OOH | One dominant field color, one high-contrast type color, at most one accent | Seconds of viewing at distance |

**Limit:** Counting pixel area ignores lightness and chroma. A 10% neon accent can outweigh a 60% muted field. Judge by visual weight, not by percentage.

---

## 9. Munsell: the original perceptual system

Albert H. Munsell worked on his system from 1898 and published it in *A Color Notation* in 1905. It separates hue, value, and chroma into dimensions intended to be perceptually uniform and independent. It has five principal hues (R, Y, G, B, P) and five intermediates, giving 10 hue families each divisible into 10 steps. Value runs from 0 (black) to 10 (white). Chroma is measured outward from the neutral axis with no fixed upper limit. Notation is hue value/chroma, for example `5P 5/10`. The Optical Society of America's renotation experiments in the 1940s produced the notations of the modern *Munsell Book of Color* [13].

**Why it still matters**
- It is the model behind "value" and "chroma" as design vocabulary, and the ancestor of CIELAB and OKLCH thinking: chroma limits differ by hue and value, so color solids are lumpy, not round.
- Physical Munsell chips are still used in soil science, art education, and some product color specification.

**Apply**
- Briefs: Say "same value, lower chroma" rather than "a bit more muted." It is precise and maps directly to OKLCH L and C.
- Palette review: Plot candidates by L and C, as Munsell does. Clusters show redundant colors; gaps show missing roles.
- Physical products and environments: For paint and architecture, NCS and RAL are more common specification systems than Munsell (`color-spaces-and-management.md`).

**Limit:** Munsell notation is not used in web or print production files. Convert to a digital space for implementation.

---

## 10. Quick procedures

**Audit an existing palette (10 minutes)**
1. List every color with OKLCH L, C, h.
2. Sort by L. Check that text and surface roles are far apart in L (contrast pairs: `contrast-and-dark-mode.md`).
3. Sort by C. The highest-chroma colors should have the smallest areas.
4. Grayscale test. Hierarchy must survive.
5. Albers exercises A and C on real backgrounds.
6. Note the contrast types in use (Itten). If more than three compete, simplify.

**Create a palette from one brand color**
1. Convert the brand color to OKLCH.
2. Generate one scheme (Section 6) from its hue.
3. Assign roles and areas (Section 8, corrected reading).
4. Build tonal scales for each role (`palettes-and-tonal-scales.md`).
5. Test in context (Albers), at size (Bezold), and in grayscale.

---

## Common mistakes

| Mistake | Why it fails | Fix |
|---|---|---|
| Building tints and states by editing HSL lightness | HSL L is not perceived lightness; yellow at L 50% is near-white, blue at L 50% is dark [1] | Edit OKLCH L |
| Rotating HSL hue to make a "harmonious" set | Lightness and chroma jump between hues | Rotate OKLCH h with fixed L and C, then gamut-check |
| Saying "complementary" without naming the wheel | Blue's complement is orange (RYB), yellow (RGB), or something in between (OKLCH) | State the wheel or space used |
| Treating harmony schemes as proof of quality | Research finds similar hues judged more harmonious; contrasting hues work as figure on ground [10] | Use schemes as generators; justify by roles and lightness |
| Equal areas of two complements | Vibrates and competes; no dominant | One dominant, one accent (Itten extension; 60-30-10 corrected reading) |
| Approving swatches on white only | Colors change with their surround (Albers) | Approve pairs and backgrounds |
| Using the same color for a large fill and for fine text or lines | Assimilation (Bezold) shifts small elements | Check small uses at real size; adjust if needed |
| Red text on blue (or blue on red) at similar lightness | Chromostereopsis and vibration [11] | Separate in lightness or add a neutral keyline |
| Citing 60-30-10 or Itten's 9:8:6 values as research | No supporting studies found; Itten's figures are disputed [7] | Present as heuristics **[E3]** |
| Using "warm advances, cool recedes" as a hierarchy tool | The effect varies between people [11] | Use lightness, size, and position |

---

## Sources

[1] Atkins, T., Lilley, C., & Verou, L. (Eds.). (2026, Oct 9). *CSS Color Module Level 4* (W3C Candidate Recommendation Draft). W3C. https://www.w3.org/TR/css-color-4/

[2] Ottosson, B. (2020, Dec 23). *A perceptual color space for image processing*. https://bottosson.github.io/posts/oklab/

[3] Wikipedia contributors. *Color wheel*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Color_wheel (accessed 2026-10)

[4] Wikipedia contributors. *Johannes Itten*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Johannes_Itten (accessed 2026-10)

[5] Wikipedia-Autoren. *Johannes Itten*. Wikipedia, German edition (secondary source). https://de.wikipedia.org/wiki/Johannes_Itten (accessed 2026-10)

[6] Color Worqx. *Itten's color contrasts*. Secondary source. https://www.worqx.com/color/itten.htm

[7] Di Tommaso, A., Garro, V., Gueli, A. M., Martusciello, S., & Pasquale, S. (2017). Colour quantity contrast in Itten's theory: Spectrophotometry for verifying statements. *Cultura e Scienza del Colore*, 8. https://jcolore.gruppodelcolore.it/ojs/index.php/CCSJ/article/view/ccsj.i82017.02

[8] Yale University Press. *Interaction of Color: 50th Anniversary Edition* (Albers, J.; foreword by N. F. Weber). Publisher page. https://yalebooks.yale.edu/book/9780300179354/interaction-of-color/

[9] Wikipedia contributors. *Josef Albers*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Josef_Albers (accessed 2026-10)

[10] Schloss, K. B., & Palmer, S. E. (2011). Aesthetic response to color combinations: Preference, harmony, and similarity. *Attention, Perception, & Psychophysics*, 73. https://pmc.ncbi.nlm.nih.gov/articles/PMC3037488

[11] Wikipedia contributors. *Chromostereopsis*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Chromostereopsis (accessed 2026-10)

[12] Wikipedia contributors. *Bezold effect*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Bezold_effect (accessed 2026-10)

[13] Wikipedia contributors. *Munsell color system*. Wikipedia (secondary source). https://en.wikipedia.org/wiki/Munsell_color_system (accessed 2026-10). D65 temperature: Wikipedia contributors, *Display P3* (secondary source). https://en.wikipedia.org/wiki/Display_P3

[14] Brunton, P. (2022, Jun 21). *How to choose colors for a website using the 60-30-10 color rule*. Practitioner blog. https://paigebrunton.com/blog/60-30-10-color-rule-for-web-designers/

[15] Sitnik, A., & Turner, T. (2025, Sep 17). *OKLCH in CSS: why we moved from RGB and HSL*. Evil Martians. https://evilmartians.com/chronicles/oklch-in-css-why-quit-rgb-hsl
