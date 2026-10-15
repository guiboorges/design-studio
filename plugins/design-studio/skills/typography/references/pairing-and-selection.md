# Typeface Selection, Pairing, and Licensing

> **Scope:** A step-by-step procedure for choosing typefaces from brief to test; pairing logic and role mapping; 20 verified pairings (free and commercial) with reasons; font licensing by use (desktop, web, app, broadcast, logo, OFL, variable fonts) and its traps; and the common myths about pairing and legibility.
> **Last verified:** 2026-10 (Google Fonts catalog and FAQ, foundry license pages, font-file measurements)
> **Used by:** typographer, ui-designer, editorial-designer, design-system-architect, design-engineer, creative-director, design-critic, social-media-designer, print-ooh-designer

How to use this file: follow section 1 for any new type decision and record the result in the spec template at the end of it. Use sections 2 to 4 to build or critique a pairing. Check section 5 before shipping anything that embeds, hosts, or distributes font files. Anatomy terms (x-height, aperture, contrast) and the legibility audit are in `anatomy-and-classification.md`. Sizes, scales, and line height are in `scale-and-rhythm.md`. Loading, `@font-face`, subsetting, and variable-font CSS are in `web-and-variable-fonts.md`. Medium minimums are in `legibility-by-medium.md`. Classic commercial faces and their free alternatives are in `design-history` → `masters-type-designers.md` ("Choosing a classic").

Evidence note: most pairing advice is practitioner craft. It is graded **[E3]** where it is taste or convention, **[E2]** where it is documented consensus (for example Google Fonts Knowledge, foundry design intent), and **[E1]** only where reading research supports it. Licensing statements are facts from the named license documents, not grades.

---

## 1. Selection procedure: brief to test

Do the steps in order. Steps 3, 6, and 7 are hard gates: a typeface that fails them is out, however good it looks. Google Fonts' own checklist warns against choosing on emotional response alone; check technical suitability early [4][5].

| Step | Question | How to decide | Gate / output |
|------|----------|---------------|---------------|
| **1. Brief** | What must the type do and say? | Extract: product or publication type, audience, tone words (3 max), existing brand type, content types (prose, data, code, UI labels, legal). | List of roles needed (section 3). |
| **2. Medium** | Where will it be read? | Screen (density, OS rendering, dark mode), print (paper, process, dot gain), video and broadcast, OOH, packaging. Name the reading situation: paragraph, small visual angle, or glance [23]. | Medium list per role. |
| **3. Language support** | Which scripts and languages, now and in two years? | Include user names, addresses, and legal text. Check script subsets and real strings (`anatomy-and-classification.md` section 7). Google recommends at least Western European, ideally Central/Eastern European, Vietnamese, and African language support for Latin [3]. | **Gate:** every role covers every required script, or a harmonized companion is chosen. |
| **4. Sizes** | Smallest and largest size per role? | Small text needs larger x-height, open apertures, lower contrast, looser spacing. Display can use higher contrast and tighter spacing. Prefer families with optical sizes or an `opsz` axis [6]. | Size range per role (e.g. UI 12–16px, display 32–96px). |
| **5. Voice** | What should it feel like? | Shortlist 3–5 candidates by category and voice (`anatomy-and-classification.md` section 6). Associations are cultural and shift over time [5]. **[E3]** | Shortlist with one-line rationale each. |
| **6. Family depth** | Does the family have what the content needs? | Weights, true italics, small caps, figure sets, OpenType features, widths, optical sizes (section 1.1). Minimum: regular, italic, bold, bold italic [3]. | **Gate:** all required features present in the actual font files you will ship [4]. |
| **7. Licensing** | Can we legally use it everywhere we need to? | Map each use (desktop, web, app, ePub, broadcast, ads, logo, OEM) to a license (section 5). Check who holds the license: agency or client [4]. | **Gate:** license per use, owner, and cost recorded. |
| **8. Test** | Does it work with real content? | Run the anatomy audit (`anatomy-and-classification.md` section 4). Proof real copy at real sizes on target devices and paper. Compare 2–3 finalists side by side at matched x-height. | Final choice plus proof screenshots or PDFs. |

### 1.1 Family-depth checklist (step 6)

| Need | What to verify | CSS / tool check | Why |
|------|---------------|------------------|-----|
| **Weights** | At least 400 and 700, plus the extra weights your hierarchy uses. A variable `wght` axis gives intermediate values [3]. | Look at the font's weight range (Google Fonts specimen; `fvar` table). | Missing weights get synthesized (faux bold), which looks smeared. |
| **True italics** | A drawn italic, not a slanted roman. Some families have none: Space Grotesk ships no italic on Google Fonts [11]. | Check for italic files or an `ital`/`slnt` axis. | Missing italics are rendered as faux italic; a secondary typeface is a valid fix [1]. |
| **Small caps** | Real `smcp` (and `c2sc` for all-small-caps). Use for acronyms of three or more letters in running text, with some added tracking [6]. | `font-variant-caps: all-small-caps;` If the font lacks the feature, browsers synthesize them from capitals [9], which look too light [6]. | Faux small caps look thin and mismatched. |
| **Figures** | Four kinds: proportional lining, proportional oldstyle, tabular lining, tabular oldstyle. Many fonts have only one [7]. | `font-variant-numeric: tabular-nums` (`tnum`), `oldstyle-nums` (`onum`), `lining-nums` (`lnum`), `proportional-nums` (`pnum`) [8]. | Tabular lining for tables, prices, timers, and anything that must align or changes in place; proportional lining is the safe default; oldstyle flows better in prose [7]. |
| **Fractions, ordinals, slashed zero** | `frac`, `ordn`, `zero` [8]. | `font-variant-numeric: diagonal-fractions slashed-zero;` | Recipes, specs, codes, IDs. |
| **Case-sensitive forms** | `case` raises punctuation for all-caps setting. | `font-feature-settings: "case" 1;` on all-caps labels. | Hyphens and brackets sit too low in caps without it. |
| **Stylistic sets / alternates** | `ss01`–`ss20`, `cv01`–`cv99`; e.g. single-story a, open digits, disambiguated I/l. | `font-feature-settings: "ss01" 1;` | Fix a homoglyph or tune voice without changing family. |
| **Widths** | Condensed for headlines and tables; avoid condensed for glance reading [`anatomy-and-classification.md` section 2]. | `wdth` axis or separate width families. | Fits long headlines and dense tables without changing family. |
| **Optical sizes** | Text and display cuts, or an `opsz` axis. Small sizes get less contrast, looser spacing, taller x-height [6]. | `font-optical-sizing: auto;` (default) with an `opsz` variable font. | One family covers caption to poster. |
| **Language** | See step 3. | Real strings. | Fallback glyphs look broken [3]. |

Feature presence in some popular free fonts, read from the Google Fonts font files (default roman; italics may differ). Verified 2026-10 [13].

| Font | `tnum` | `onum` | `lnum` | `smcp` | `zero` | `frac` | `case` | Variable axes |
|------|--------|--------|--------|--------|--------|--------|--------|---------------|
| Inter | yes | no | no | no | yes | yes | yes | opsz 14–32, wght 100–900 |
| Source Serif 4 | yes | yes | yes | yes | yes | yes | yes | opsz 8–60, wght 200–900 |
| Source Sans 3 | no | yes | no | yes | yes | yes | yes | wght 200–900 |
| IBM Plex Sans | no | yes | yes | no | yes | yes | no | wght 100–700, wdth 75–100 |
| Literata | yes | yes | yes | yes | yes | yes | yes | opsz 7–72, wght 200–900 |
| Merriweather | yes | yes | yes | yes | yes | yes | yes | opsz 18–144, wdth 87–112, wght 300–900 |
| Roboto | yes | yes | yes | yes | no | yes | no | wght 100–900, wdth 75–100 |
| Noto Sans | yes | yes | yes | yes | yes | yes | yes | wght 100–900, wdth 62–100 |
| Work Sans | yes | yes | yes | yes | yes | yes | yes | wght 100–900 |
| Geist | yes | no | no | no | no | yes | yes | wght 100–900 |
| Newsreader | yes | no | no | no | no | no | yes | opsz 6–72, wght 200–800 |
| EB Garamond | yes | yes | yes | yes | no | yes | yes | wght 400–800 |
| Libre Franklin | no | no | no | no | no | yes | no | wght 100–900 |

"No" means the feature tag is absent from that file. The default figures may still be tabular or lining by design, so test alignment with real numbers before adding a second family for data.

```css
/* Data, prices, timers, table columns */
.num, td, .price, .countdown { font-variant-numeric: tabular-nums lining-nums; }

/* Running text in a font with oldstyle figures */
.prose { font-variant-numeric: oldstyle-nums proportional-nums; }

/* Acronyms in running text: real small caps if the font has them */
abbr { font-variant-caps: all-small-caps; letter-spacing: 0.04em; }

/* All-caps labels: case-sensitive punctuation */
.overline { text-transform: uppercase; letter-spacing: 0.08em; font-feature-settings: "case" 1; }

/* Stop the browser faking bold/italic the family doesn't have */
.brand-display { font-synthesis: none; }
```

Values for `letter-spacing` above are starting points; tune by eye and see `scale-and-rhythm.md`.

### 1.2 Type spec template (record the decision)

```yaml
type_system:
  reading_situations: [paragraph, glance]          # per Beier & Thiessen 2026
  scripts: [latin, latin-ext, cyrillic]
  roles:
    display: { family: "Source Serif 4", opsz: auto, weights: [600, 700], sizes: "32-72px" }
    text:    { family: "Source Serif 4", weights: [400, 400i, 700], sizes: "17-20px" }
    ui:      { family: "Source Sans 3", weights: [400, 600], sizes: "13-16px" }
    data:    { family: "Source Code Pro", features: [tnum, zero], sizes: "13-14px" }
  features: { small_caps: real, figures: "oldstyle in prose, tabular lining in tables" }
  license:
    source: "Google Fonts / SIL OFL 1.1"
    uses: [desktop, web-self-hosted, app-bundled]
    holder: "client"
  tests: { anatomy_audit: pass, devices: ["iPhone 15", "Pixel 8", "1080p Windows"], print_proof: n/a }
```

---

## 2. Pairing logic

### 2.1 First ask: do you need a second typeface?

Explore the primary family first: weights, styles, widths, optical sizes, plus size, case, and tracking. Add a secondary typeface only when it does something the primary cannot [1][2]. **[E2]** Valid reasons [1]:

1. **Changing context:** data, code, footnotes, or asides that need a different texture.
2. **Augmenting personality:** the primary is too serious (or too playful) for part of the brand.
3. **Missing weights, widths, or styles:** for example no italic, so text would be faux-italicized.
4. **Missing features:** for example language support needed in body copy.

### 2.2 Structure before style

The core tension is distinction versus harmony: faces that are too similar look like a mistake; faces that differ in everything compete [1]. **[E2]**

| Principle | Rule | Check |
|-----------|------|-------|
| **Contrast structure, not just style** | Differ clearly on one or two axes (serif vs sans, contrast, width, weight role), match on the rest. | Side by side, can a non-designer tell which is which within a second? If not, they are too close. |
| **Match proportions** | "Sibling" faces share x-height, contrast, width, and mood; "cousins" share two or three; "distant relatives" share one [1]. **[E3]** | Compare x-height/em (`anatomy-and-classification.md` section 1). Within ±0.02 is a close match. |
| **Match stroke weight at the sizes used together** | Regular text in face A should look as dark as regular text in face B. | Set a paragraph of each at the real size and squint. |
| **Shared construction or period** | Pairs from the same designer or foundry often share a recognizable "hand", though this is a generalization to check, not assume [29]. Pairs from the same historical period share cultural cues [5]. If the primary evokes a period, continue it unless contrast is intended [5]. **[E3]** | Note stress angle, terminals, and aperture in both. |
| **Superfamily first** | A superfamily (serif, sans, slab, mono sharing one skeleton) shares spacing, proportions, motifs, and usually x-height; you can swap fonts without disrupting layout [2][6]. **[E2]** | Look for "Sans/Serif/Mono" siblings before searching elsewhere. |
| **When in doubt, serif + sans** | Jason Santa Maria's default, quoted by Google Fonts: pair a serif and a sans for nearly guaranteed variation [1]. **[E3]** | A starting point, not a rule (see myths). |

**When x-heights don't match.** Mismatched x-heights are fine when the faces never meet at the same size (display vs text). When they share a line (inline code, mixed-script text, a sans label inside serif prose), scale one: `size_B = size_A × xA / xB`, or use `font-size-adjust: from-font` (Baseline 2024) [10].

### 2.3 How many families

| Count | When | Typical roles |
|-------|------|---------------|
| 1 | Most apps, dashboards, design systems, and many brands, especially with a variable family that has optical sizes and widths | Everything; hierarchy from size, weight, case, color |
| 2 | Editorial products, marketing sites, brands that need a distinct display voice | Display + text, or text + mono |
| 3 | Publications or products with prose, UI, and data or code | Display/text serif + UI sans + mono |
| 4+ | Rare: magazines with section-specific display faces, multi-script products (a script-specific companion per language) | Each with a documented role |

"Never more than 2–3 families" is a rule of thumb, not research. **[E3]** The defensible test is the one in 2.1: each family must have a job no other family can do [1][2]. **[E2]** Script-specific companions (Arabic, Devanagari, CJK) do not count against the budget. [E3]

---

## 3. Role mapping

| Role | Requirements | Feature checks | Free examples (verified on Google Fonts) [11] |
|------|-------------|---------------|----------------------------------------------|
| **Display** (headlines, hero, posters, covers) | Distinct voice; tight spacing tolerable; higher contrast acceptable; display optical size if available | Weight range for emphasis; `case`; kerning quality at large sizes | Fraunces, Playfair Display, Bodoni Moda, Instrument Serif, DM Serif Display, Bebas Neue |
| **Text** (long reading) | Comfortable texture at 16–20px screen or 9–12pt print; true italic; oldstyle figures a plus | `onum`, `smcp`, italics, text optical size | Source Serif 4, Literata, Newsreader, Merriweather, EB Garamond (print-leaning, small x-height) |
| **UI** (labels, buttons, forms, nav) | Large x-height, open apertures, distinct I/l/1, 12–16px, many weights; avoid high-contrast bold [26] | `tnum`, `zero` or `ss` to disambiguate, `case` | Inter, Roboto, IBM Plex Sans, Source Sans 3, Noto Sans, Public Sans, Atkinson Hyperlegible Next |
| **Data** (tables, charts, prices, KPIs) | Tabular lining figures, clear 0/O and 1/l | `tnum`, `lnum`, `zero`, `frac` | Inter (tnum, zero), Roboto, Work Sans; a mono for dense tables |
| **Code / mono** | Monospaced; only monospaced fonts should be considered for code [4] | Distinct 0/O, 1/l/I; optional coding ligatures | JetBrains Mono, IBM Plex Mono, Source Code Pro, Geist Mono, Roboto Mono |
| **Caption / legal** | Smallest size in the system; caption optical size; open apertures | `opsz` at small values | Source Serif 4 at low opsz, Inter, Literata at low opsz |
| **Overlines / labels in caps** | Tracked caps that don't shout; `case` | `case`, `c2sc` | The UI sans with tracking |

**Apply by medium**
- **UI/app:** one variable UI sans plus a mono covers almost every product. Add a display face only for marketing surfaces.
- **Web editorial:** text serif with optical sizes + UI sans for navigation and metadata.
- **Print/editorial:** text serif with real small caps and oldstyle figures; a sans for captions, tables, and furniture.
- **Social:** one heavy display face plus the brand text face; set at phone glance size; check the platform's own UI overlays.
- **OOH and packaging:** one display face at a weight that survives distance and substrate; legal and nutrition text needs a separate, highly legible text face.

---

## 4. Twenty verified pairings

All free faces exist on Google Fonts and sit in the google/fonts `ofl` directory (SIL Open Font License 1.1), verified 2026-10 [11]. Commercial families were verified on the foundries' own catalog pages [19][20]. x-heights are x-height ÷ em measured from the default font instance [13]. Reasons that describe structure or the designer's stated intent are facts; claims about mood are **[E3]**.

| # | Pairing | Roles | License | Why it works | Watch out |
|---|---------|-------|---------|--------------|-----------|
| 1 | **Source Serif 4 + Source Sans 3 + Source Code Pro** | Text/display serif, UI sans, code/data | OFL | Source Serif was designed to complement Source Sans by matching letter proportions and typographic color [12]; Google Fonts uses Source as its superfamily example [6]; x-heights 0.475 / 0.478 [13]. Serif has `opsz` 8–60. | Source Sans 3's file has no `tnum` tag [13]; test table figures or use Source Code Pro for data. |
| 2 | **IBM Plex Sans + Plex Serif + Plex Mono** (+ Plex Sans Arabic, Devanagari, Hebrew, JP, KR, Thai) | UI, editorial, code; multi-script | OFL | Designed as one international family; "work well independently, and even better together" [12]. Identical x-height (0.516) and cap height (0.698) across all three [13]. Script companions exist on Google Fonts [11]. | Plex Serif and Mono are static files on Google Fonts (no variable axes) [11]; Plex Sans weights stop at 700. |
| 3 | **Merriweather + Merriweather Sans** | Text serif + UI/headings sans | OFL | Google Fonts lists it as a within-family pairing [2]; x-heights 0.555 / 0.557 [13]. | Very large x-height looks big: set 1–2px smaller than usual. |
| 4 | **Roboto + Roboto Serif + Roboto Mono** | UI, reading, code | OFL | Roboto Serif is built for comfortable reading "even for app interfaces," with `opsz`, `wdth`, `GRAD` axes [12]; x-heights 0.528 / 0.508 [13]. | Roboto is widely used as a platform default, so its voice is generic. **[E3]** |
| 5 | **Inter + JetBrains Mono** | UI + code | OFL | Inter is designed for screens with a tall x-height and includes slashed zero and tabular figures [12][13]; JetBrains Mono's x-height (0.550) nearly equals Inter's (0.546), so inline code needs no size hack [13]. | Inter has no oldstyle figures or small caps [13]; pair with a serif if you need bookish text. |
| 6 | **Geist + Geist Mono** | UI + code | OFL | Shared metrics (x-height 0.530, cap height 0.710) [13]; same design team [11]. | Strong association with developer-tool marketing. **[E3]** No `zero` in Geist sans [13]. |
| 7 | **Libre Baskerville + Libre Franklin** | Text/headline serif + sans | OFL | Same foundry (Impallari Type) [11]; equal x-height 0.530 [13]. Libre Baskerville is tuned for 16px body text on screen [12]; Libre Franklin interprets Benton's 1912 Franklin Gothic [12]. Classic American news voice. **[E3]** | Libre Baskerville has only 400–700 [11]; Libre Franklin's file has no `tnum` [13]. |
| 8 | **Playfair Display + Gelasio** | Display serif + text serif | OFL | The designer's own guidance: Playfair Display "can accompany Georgia or Gelasio for body text" [12]. A serif + serif pair separated by contrast and role. | Playfair hairlines fail at small sizes and reversed out [26]; no Greek [11]. |
| 9 | **Newsreader + Inter** | Long-form reading + UI chrome | OFL | Newsreader is designed for continuous on-screen reading, with `opsz` 6–72 [11][12]; Inter handles navigation and metadata. | x-heights differ (0.426 vs 0.546) [13]; never set both at the same size on one line. Scale Newsreader about 1.28× or use `font-size-adjust`. |
| 10 | **Fraunces + Work Sans** | Display + text/UI | OFL | Fraunces is a display "Old Style" soft serif with `opsz`, `SOFT`, `WONK` axes [12]; Work Sans mid weights are optimized for screen text at 14–48px [12]. x-heights 0.482 / 0.500 [13]. Warm, retro-friendly voice. **[E3]** | Keep Fraunces' wonky alternates to headlines. |
| 11 | **Bodoni Moda + Jost** | Fashion display + text/labels | OFL | Same designer (Owen Earl, indestructible type*) [11][12]. Didone display with optical sizes 6–96 plus a 1920s-German-inspired geometric sans [12]. Equal x-height 0.460 [13]. Fashion-editorial voice. **[E3]** | Jost's small x-height is weak for dense UI; Bodoni Moda's hairlines at small sizes. |
| 12 | **DM Serif Display + DM Sans** | Poster display + text/UI | OFL | Same foundry (Colophon) [11]. DM Serif Display is a high-contrast transitional for super-sized settings, with DM Serif Text for smaller sizes [12]. | DM Serif Display has one weight (plus italic) and Latin-only coverage [11]. |
| 13 | **Instrument Serif + Instrument Sans** | Condensed display + text/UI | OFL | Made for one brand; identical x-height 0.510 [13]. Instrument Serif is a condensed display face for large sizes [12]. | Instrument Serif has one weight [11]. |
| 14 | **Space Grotesk + Space Mono** | Display/UI + mono accents | OFL | Space Grotesk is a proportional variant based on Space Mono and keeps its idiosyncratic details [12]. | Space Grotesk has no italics on Google Fonts [11]; Latin only. |
| 15 | **Noto Sans + Noto Serif + Noto Sans Arabic / Devanagari / JP / SC / KR** | Global UI and text across scripts | OFL | Noto is designed to be visually harmonious across scripts, with compatible heights and stroke thicknesses [28]; it covers more than 1,000 languages and over 150 writing systems [14]. | Generic voice. **[E3]** Tall scripts need more line height: Noto Sans Arabic's line box is 2.11 em vs 1.36 em for Noto Sans [13]. |
| 16 | **Atkinson Hyperlegible Next + Atkinson Hyperlegible Mono** | UI/text + mono | OFL | Family credited to the Braille Institute and Applied Design Works [11]; a matching mono exists, so code and IDs share the UI face's proportions. | No independent legibility study for this family was opened for this file; run the anatomy audit rather than relying on the name. |
| 17 | **Tiempos Headline + Tiempos Text + Söhne (+ Söhne Mono)** (Klim) | Editorial display and text + UI sans + data | Commercial | Klim sells Tiempos in Fine, Headline, and Text cuts and Söhne with Mono, Schmal (narrow), and Breit (wide) variants [20]: size-specific serif cuts plus a grotesque with width and mono options. One foundry, one license scheme [17]. | License each use separately (desktop, web, app, ads, broadcast) [17]. |
| 18 | **Publico + Graphik** (Commercial Type) | News display/text + UI sans | Commercial | Publico spans Banner, Headline, Text, and Text Mono (7 families, 80 styles); Graphik has 8 widths (144 styles). Graphik International adds Arabic, Armenian, Bangla, Devanagari, Georgian, Hebrew, Tamil, and Thai [19]. | Commercial Type's license forbids third-party font hosting services and use with generative AI [18]. |
| 19 | **Lyon Display + Lyon Text + Atlas Grotesk + Atlas Typewriter** (Commercial Type) | Editorial serif + sans + mono | Commercial | Display and text cuts of the serif; Atlas pairs a grotesque with a typewriter mono [19]. Lyon International adds Arabic and Hebrew [19]. | Same license terms as #18 [18]. |
| 20 | **Domaine Display + Domaine Text + Domaine Sans** (Klim) | Display, text, sans in one superfamily | Commercial | Domaine Display comes in Narrow and Condensed widths; Domaine Sans in Fine, Display, and Text cuts [20], so one superfamily covers display to text. | Strong, stylish display voice; overkill for UI-only products. **[E3]** |

### One-family systems (no pairing)

| Family | Why it can stand alone | Source |
|--------|----------------------|--------|
| Literata | `opsz` 7–72, weights 200–900, italics, small caps, all four figure sets; designed as a headline, paragraph, and caption toolbox; Latin, Greek, Cyrillic | [11][12][13] |
| Inter | `opsz` 14–32, weights 100–900, italics, tabular figures, slashed zero, many stylistic sets | [11][13] |
| Roboto Flex / Roboto Serif | Many parametric axes (width, grade, optical size) | [11][12] |
| IBM Plex Sans | Widths 75–100, weights 100–700, many script companions | [11] |

Hierarchy in a one-family system comes from size, weight, width, case, tracking, and color [1].

---

## 5. Licensing

A font license sets what you may do with the font files. Price scales with usage volume or type: desktop users, website visitors, app embedding [6]. Using a font implies accepting its license; keep a copy of the license for every font you hold [6].

### 5.1 License by use

| Use | Free fonts from Google Fonts (OFL, Apache, UFL) | Typical foundry license (Klim; Commercial Type) | Adobe Fonts (subscription) |
|-----|-----------------------------------------------|---------------------------------------------|---------------------------|
| **Desktop design and print** | Allowed, including commercial products and sold products [14]. | Desktop license per number of users; covers print, marketing, and (Klim) logos and ePub embedding [17]. Commercial Type: printed and image materials, non-editable documents [19]. | Covered for personal and commercial use [16]. |
| **Logo / wordmark** | Allowed: "you can use Google Fonts within any logo" [14]. Artwork made with an OFL font is yours; no extra license needed [15]. | Klim: covered by Desktop [17]. Check other foundries; some sell separate trademark terms. | Logos covered [16]. |
| **Website** | Allowed via the Google Fonts API or self-hosted [14]. | Klim Web: priced by page views or unique users [17]. Commercial Type: unique monthly visitors aggregated across all licensed domains; the license addresses exceeding the cap for three consecutive months (§2.5) [18]. | Via an Adobe Fonts web project [16]. |
| **Self-hosting web fonts** | Allowed; when served from your own server Google receives no visitor data [14]. | Commercial Type: third-party font hosting services are prohibited; files must be stored and served from the same devices and location [18]. | **Not included:** self-hosting requires an additional license from the foundry [16]. |
| **Mobile / desktop app embedding** | Allowed; when bundling an OFL font you must comply with the license (include it, respect Reserved Font Names) [15]. | Klim App: by monthly active users or total downloads [17]. Commercial Type: app attachment covers iOS, Windows Mobile, and Android formats [18]. | **Not included:** embedding fonts in app UI requires additional licensing [16]. |
| **PDF / ePub** | Embedding in documents is allowed; it does not change the document's license [15]. | Klim Desktop includes ePub embedding [17]. Commercial Type sells editable-PDF embedding and ePub as separate items [19]. | Embedding in PDFs for viewing and printing is covered [16]. |
| **Broadcast, film, video** | Output is not subject to the OFL [15]; use freely. | Klim Broadcast: by production budget or audience size. Klim Advertising (paid TV, online, social video ads): by monthly impressions and requires a Desktop license [17]. | In-house or commercial video content covered [16]. |
| **Hardware / OEM** | Allowed with license compliance [15]. | Klim OEM: by number of devices [17]. | Not listed; ask the foundry. |
| **Modifying the font** | Allowed under OFL conditions; modified versions may not use Reserved Font Names; changing format or subsetting counts as modification [15]. | Generally prohibited; Commercial Type allows webfont subsetting as the main exception [19]. | Not covered. |
| **Selling the font itself** | Not allowed on its own [15]. | Not allowed. | Not allowed. |
| **Sharing files with contractors, printers** | Allowed (redistribution permitted with the license) [14][15]. | Commercial Type: contractors only while providing services to you; printers must destroy copies after the job [18]. Klim Web/App: share only with developers or third-party services [17]. | Not stated on the page opened; check Adobe's licensing FAQ. |
| **AI training / generative AI tools** | OFL has no AI clause; the general OFL terms apply. | Commercial Type expressly prohibits use of the font software with generative or other AI, including as training data [18]. | Check current terms. |

All foundry statements verified 2026-10 on the pages cited. Terms change: read the current EULA before each project.

### 5.2 What the OFL means in practice

The SIL Open Font License 1.1 covers almost all Google Fonts; a few use Apache 2.0 or the Ubuntu Font License [14]. In the google/fonts repository, 2,007 family directories sit under `ofl`, 44 under `apache` (including Roboto Slab), and 5 under `ufl` (the Ubuntu families), checked 2026-10 [11]. The live catalog lists 1,950 families [11].

| You want to | OFL answer |
|-------------|-----------|
| Use in a logo, poster, product, or packaging | Yes. No extra license; you remain the author of the artwork [15]. |
| Use commercially, in a product that is sold | Yes [14][15]. |
| Embed in a PDF or document | Yes; document license unaffected [15]. |
| Bundle in an app, game, or software, including commercial software | Yes, if you comply with the license terms [15]. |
| Sell the font alone or as a "font pack" | No [15]. |
| Modify, convert to WOFF2, or subset | Allowed, but it is a Modified Version: you may not use any Reserved Font Name for it [15]. |
| Release a derivative font | Only under the OFL, and not sold by itself [15]. |
| Credit the designer | Not required, but appreciated [15]. |

### 5.3 Variable fonts

- **Free:** variable fonts on Google Fonts carry the same open-source license as the static ones [11][14].
- **Commercial:** check whether the variable files are included in the license you buy. Klim lists variable formats (OTF, TTF) under Desktop, Test, Advertising, Broadcast, and OEM licenses, and WOFF2 for Web [17]. Commercial Type's license does not mention variable fonts; ask the foundry [18].
- A variable font replaces many static styles in one file. Confirm the license covers all the instances you will use, not just the styles you "bought" as statics. [unverified as a general foundry rule; check each EULA]

### 5.4 Common licensing traps

| Trap | Why it bites | Prevention |
|------|-------------|-----------|
| Using an Adobe Fonts font in an app or self-hosted site | Not covered by the subscription [16]. | Buy the foundry's app or self-hosting license, or choose another face. |
| Visitor or pageview caps on web licenses | Klim meters by page views or unique users [17]; Commercial Type by unique monthly visitors across all domains [18]. Traffic growth breaks compliance. | Record current traffic at purchase; review yearly. |
| Uploading font files to a third-party host or CDN | Prohibited by some EULAs [18]. | Serve from your own infrastructure if the license says so. |
| Feeding commercial fonts to AI tools | Some EULAs prohibit use with generative AI [18]. | Keep commercial font files out of AI pipelines unless the license allows it. |
| The agency holds the license, not the client | Client cannot legally use files after handover [4]. | License in the client's name or transfer as the EULA permits. |
| Desktop license only, then the design ships as a website, app, or ad | Each use is a separate license [17][19]. | Map every use in step 7 before design starts. |
| "Free for personal use" fonts from download sites | Not cleared for commercial use; provenance often unclear. | Use Google Fonts, foundry-issued free fonts, or licensed commercial fonts. |
| Modifying an OFL font and keeping its name | Reserved Font Names forbid it [15]. | Rename modified versions; note that subsetting and format conversion count as modification [15]. |
| Embedding Google Fonts via the API in privacy-sensitive products | Visitors' browsers send their IP address, requested URL, and user agent/referrer to Google [14]. | Self-host; Google then receives no visitor data [14]. Self-hosting means managing updates, file size, and browser optimization yourself [14]. |

---

## 6. Common myths

| Myth | Corrected reading | Grade |
|------|------------------|-------|
| "Never pair two sans serifs (or two serifs)." | The real rule is distinction with harmony [1]. Same-genre pairs work when roles and structure differ: Playfair Display with Gelasio (designer-recommended) [12]; a grotesque sans with its mono sibling; a condensed display sans with a humanist text sans. Serif + sans is a "when in doubt" default, not a law [1]. | [E3] for the rule; [E2] for the corrected reading |
| "Serifs are more readable in print; sans serifs are more readable on screen." | Fonts differing only in serifs showed no reading-speed difference; a tiny threshold gain is explained by the extra spacing serifs add [21]. Stroke contrast interacts with serifs [22]. A 2026 review concludes there is no single most legible typeface; it depends on the reading situation [23]. Choose by medium, size, and anatomy, not by serif presence. | [E1] against the myth |
| "There is one objectively most readable font." | In a study of 16 common fonts with hundreds of crowdsourced adults, reading speed differed by 35% between a reader's fastest and slowest fonts without affecting comprehension; the best font varied by individual: "one font does not fit all" [24]. | [E1] |
| "The font people prefer is the one they read best in." | Preference did not predict reading effectiveness [24]. Children's font preference was unrelated to reading performance [25]. Don't use preference surveys as legibility evidence. | [E1] |
| "Dyslexia fonts improve reading." | OpenDyslexic and Dyslexie produced no improvement in rate or accuracy in controlled studies [25][27]. Detail: `cognitive-psychology` → `audience-and-culture.md` §6.3. | [E1] against the myth |
| "Use at most two (or three) fonts." | A heuristic. The defensible test is whether each family has a job the others can't do [1][2]. Script companions don't count. | [E3] |
| "Matched x-heights are mandatory." | Required only when faces share a line or size. Display and text faces can differ; Google Fonts shows a pairing where generous ascenders and descenders compensate for unmatched x-height [1]. | [E3] |
| "Free fonts can't be used commercially." | Google Fonts can be used commercially, in logos, and in sold products [14]. Quality varies; audit like any font. | Fact |
| "OFL means public domain." | You can't sell the font alone, and modified versions must drop Reserved Font Names [15]. | Fact |
| "If I bought the font, I can use it anywhere." | Licenses are split by use: desktop, web, app, ads, broadcast, OEM [17][19]. | Fact |
| "Helvetica (or any neo-grotesque) is neutral." | A modernist claim, not a measured effect; see `design-history` → `masters-type-designers.md`. | [E3] |

## Sources

[1] Google Fonts. (n.d.). *Pairing typefaces*. Google Fonts Knowledge (quotes Jason Santa Maria, *On Web Typography*, and Jessica Hische, "Upping Your Type Game"). https://fonts.google.com/knowledge/choosing_type/pairing_typefaces

[2] Google Fonts. (n.d.). *Pairing typefaces within a family & superfamily*. Google Fonts Knowledge. https://fonts.google.com/knowledge/choosing_type/pairing_typefaces_within_a_family_superfamily

[3] Google Fonts. (n.d.). *Choosing reliable typefaces*. Google Fonts Knowledge. https://fonts.google.com/knowledge/choosing_type/choosing_reliable_typefaces

[4] Google Fonts. (n.d.). *A checklist for choosing type*. Google Fonts Knowledge. https://fonts.google.com/knowledge/choosing_type/a_checklist_for_choosing_type

[5] Google Fonts. (n.d.). *Emotive considerations for choosing typefaces* and *Making sense of typographic classifications*. Google Fonts Knowledge. https://fonts.google.com/knowledge/choosing_type/emotive_considerations_for_choosing_typefaces ; https://fonts.google.com/knowledge/introducing_type/making_sense_of_typographic_classifications

[6] Google Fonts. (n.d.). *Google Fonts Knowledge: Glossary* (entries: superfamily, small caps, optical sizes, numerals/figures, licensing). CC BY-SA. https://fonts.google.com/knowledge/glossary (source files: https://github.com/google/fonts/tree/main/cc-by-sa/knowledge/glossary/terms)

[7] Google Fonts. (n.d.). *Understanding numerals*. Google Fonts Knowledge. https://fonts.google.com/knowledge/introducing_type/understanding_numerals

[8] MDN Web Docs. (2026). *font-variant-numeric*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric (Baseline widely available since January 2020; verified 2026-10)

[9] MDN Web Docs. (2026). *font-variant-caps*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-caps (verified 2026-10)

[10] MDN Web Docs. (2026). *font-size-adjust*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust (Baseline 2024; verified 2026-10)

[11] Google Fonts. (2026). *Font catalog metadata* (families, designers, weights, italics, axes, subsets). Retrieved 2026-10 from https://fonts.google.com/metadata/fonts; license directories (`ofl`, `apache`, `ufl`) counted in https://github.com/google/fonts on 2026-10.

[12] Google Fonts. (2026). *Family descriptions* (DESCRIPTION.en_us.html for Bodoni Moda, DM Serif Display, Fraunces, IBM Plex Sans, Instrument Serif, Inter, Jost, Libre Baskerville, Libre Franklin, Literata, Newsreader, Playfair Display, Public Sans, Roboto Serif, Source Serif 4, Space Grotesk, Work Sans). https://github.com/google/fonts/tree/main/ofl

[13] Font-file measurements made for this file (2026-10) with fontTools 4.60 on files from https://github.com/google/fonts: x-height and cap height from glyph bounds at the default instance; OpenType feature tags from GSUB/GPOS; line box from hhea ascent and descent.

[14] Google Fonts. (2026). *Frequently asked questions* (commercial use, logos, any surface, language support/Noto, privacy and the Web API, self-hosting). https://fonts.google.com/faq (verified 2026-10)

[15] SIL International. (n.d.). *OFL-FAQ: Frequently asked questions about the SIL Open Font License (OFL)* (§§1.1, 1.1.1, 1.2–1.6, 1.11–1.13, 1.15, 1.17, 1.20, 2.1, 2.2, 2.6, 2.10, 3.1, 3.3, 5.1–5.4). https://openfontlicense.org/ofl-faq/

[16] Adobe. (2026). *Adobe Originals* foundry page, licensing section ("The full Adobe Fonts library is cleared for both personal and commercial use"; additional licensing for app embedding and self-hosting). Adobe Fonts. https://fonts.adobe.com/foundries/adobe (verified 2026-10)

[17] Klim Type Foundry. (2026). *Licences*. https://klim.co.nz/licences/ (verified 2026-10)

[18] Commercial Type. (2026). *License agreement* (§§2(b)(iv), 4, 8, 10; Attachment §§1.1, 2.4, 2.5, 2.7, 11.1). https://commercialtype.com/license (verified 2026-10)

[19] Commercial Type. (2026). *Catalog* and licensing summary. https://commercialtype.com/catalog (verified 2026-10)

[20] Klim Type Foundry. (2026). *Fonts* (retail catalog). https://klim.co.nz/fonts/ (verified 2026-10)

[21] Arditi, A., & Cho, J. (2005). Serifs and font legibility. *Vision Research*, 45(23), 2926–2933. https://doi.org/10.1016/j.visres.2005.06.013

[22] Minakata, K., & Beier, S. (2022). The dispute about sans serif versus serif fonts: An interaction between the variables of serif and stroke contrast. *Acta Psychologica*. https://doi.org/10.1016/j.actpsy.2022.103623

[23] Beier, S., & Thiessen, M. (2026). Applying cognitive and perceptual science to typeface choices. *Ergonomics*. https://doi.org/10.1080/00140139.2025.2541255

[24] Wallace, S., Bylinskii, Z., Dobres, J., Kerr, B., Berlow, S., Treitman, R., Kumawat, N., Arpin, K., Miller, D. B., Huang, J., & Sawyer, B. D. (2022). Towards individuated reading experiences: Different fonts increase reading speed for different individuals. *ACM Transactions on Computer-Human Interaction*, 29(4), Article 38. https://doi.org/10.1145/3502222

[25] Kuster, S. M., van Weerdenburg, M., Gompel, M., & Bosman, A. M. T. (2018). Dyslexie font does not benefit reading in children with or without dyslexia. *Annals of Dyslexia*, 68(1), 25–42. https://doi.org/10.1007/s11881-017-0154-6

[26] Beier, S., & Oderkerk, C. A. T. (2021). High letter stroke contrast impairs letter recognition of bold fonts. *Applied Ergonomics*. https://doi.org/10.1016/j.apergo.2021.103499

[27] Wery, J. J., & Diliberto, J. A. (2017). The effect of a specialized dyslexia font, OpenDyslexic, on reading rate and accuracy. *Annals of Dyslexia*, 67(2), 114–127. https://doi.org/10.1007/s11881-016-0127-1

[28] Google Fonts. (n.d.). *Language support in fonts*. Google Fonts Knowledge. https://fonts.google.com/knowledge/using_type/language_support_in_fonts

[29] Google Fonts. (n.d.). *Pairing typefaces by the same type designer or type foundry*. Google Fonts Knowledge. https://fonts.google.com/knowledge/choosing_type/pairing_typefaces_by_the_same_type_designer_or_type_foundry
