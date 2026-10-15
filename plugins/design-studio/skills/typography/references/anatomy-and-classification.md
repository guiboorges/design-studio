# Letter Anatomy and Typeface Classification

> **Scope:** The parts of a letterform and the vertical metrics that predict how a typeface behaves at a given size and medium; the formal classification systems (Vox-ATypI, BS 2961) and their 2021 retirement; the practical categories designers use, with verified reference faces; and what to check before using a typeface for non-Latin scripts.
> **Last verified:** 2026-10 (Google Fonts catalog counts, family metadata, font-file measurements, ATypI status)
> **Used by:** typographer, ui-designer, editorial-designer, design-system-architect, design-engineer, creative-director, design-critic, print-ooh-designer, social-media-designer

How to use this file: read sections 1 to 4 when you must judge whether a specific typeface will survive the job (small UI text, signage, low-quality print, glance reading). Read sections 5 and 6 when you need vocabulary to brief, search, or justify a choice. Read section 7 whenever the text is not English-only. The selection procedure and pairings live in `pairing-and-selection.md`. Type size, line height, and scale live in `scale-and-rhythm.md`. Medium-specific minimum sizes live in `legibility-by-medium.md`. Letter height versus viewing distance lives in `media-specs` → `out-of-home.md`. Typeface histories and designer biographies live in `design-history` → `masters-type-designers.md`.

Evidence note: anatomy terms are definitions, so they carry no grade. Claims about how a feature affects reading are graded. Most controlled legibility research isolates one feature (aperture, contrast, width, serifs) in fonts drawn for the experiment. Real typefaces change many features at once, so treat the findings as directional rules for choosing between candidates, not as a ranking of named fonts.

---

## 1. Vertical metrics: the part that decides apparent size

Every font is drawn on an em square. `font-size: 16px` sets the em, not the visible letters. Two fonts at the same font size can look very different in size because their x-heights differ [1][2].

| Term | Definition | Why it matters for selection |
|------|-----------|------------------------------|
| **Baseline** | The invisible line letters sit on. Line height and x-height are measured from it [1]. | Mixed fonts (text + icon font, Latin + Arabic, sans + mono) must share a visual baseline, or inline elements bounce. Check baseline alignment in a mixed line before approving a pair. |
| **x-height** | Height of lowercase letters without ascenders or descenders, measured from baseline to the flat top of x, excluding overshoot [1]. | The main predictor of apparent size. A large x-height looks bigger and survives small sizes better. Small optical sizes are drawn with taller x-heights for this reason [1]. |
| **Cap height** | Height of flat-topped capitals (H, E) from the baseline. Usually slightly below ascender height [1]. | Governs all-caps labels, buttons, signage, and how caps align with icons. Use the cap height, not the em, to center text in buttons. |
| **Ascender / descender** | Strokes rising above x-height (b, d, h) or falling below the baseline (g, p) [1]. | Long extenders mean a smaller x-height at the same em, so text looks smaller and more literary. If one line's descenders touch the next line's ascenders, the line height is too tight [1]. |
| **Overshoot** | Round and pointed letters (o, O, A, v) extend slightly past the baseline, x-height, or cap height so they look the same size as flat letters [1]. | A sign that the font was drawn with optical care. Do not "fix" overshoot when aligning type to a grid or icon. Align to the flat letters. |

### Measured x-heights of common free typefaces

The ratio x-height ÷ em tells you how big a font will look at a given font size. Values below were measured from the default instance of each font file in the google/fonts repository (glyph bounding box of x and H, divided by units per em) [16][18]. Verified 2026-10.

| Typeface | x-height / em | cap height / em | x / cap | Reads as |
|----------|---------------|-----------------|---------|----------|
| EB Garamond | 0.405 | 0.653 | 0.62 | Small, literary |
| Crimson Pro | 0.420 | 0.573 | 0.73 | Small |
| Newsreader | 0.426 | 0.670 | 0.64 | Small (opsz default) |
| Bodoni Moda | 0.460 | 0.750 | 0.61 | Small, long caps |
| Jost | 0.460 | 0.700 | 0.66 | Small, Futura-like |
| Source Serif 4 | 0.475 | 0.670 | 0.71 | Medium |
| Source Sans 3 | 0.478 | 0.660 | 0.72 | Medium |
| Fraunces | 0.482 | 0.700 | 0.69 | Medium |
| Space Grotesk | 0.486 | 0.700 | 0.69 | Medium |
| Atkinson Hyperlegible Next | 0.496 | 0.668 | 0.74 | Medium |
| Lora | 0.500 | 0.700 | 0.71 | Medium |
| Work Sans | 0.500 | 0.660 | 0.76 | Medium |
| Literata | 0.507 | 0.700 | 0.72 | Medium-large |
| Roboto Serif | 0.508 | 0.710 | 0.72 | Medium-large |
| Instrument Serif / Sans | 0.510 | 0.720 | 0.71 | Medium-large |
| Playfair Display | 0.515 | 0.708 | 0.73 | Medium-large |
| IBM Plex Sans / Serif / Mono | 0.516 | 0.698 | 0.74 | Medium-large |
| Montserrat | 0.517 | 0.700 | 0.74 | Medium-large |
| Public Sans | 0.517 | 0.723 | 0.72 | Medium-large |
| DM Sans | 0.526 | 0.700 | 0.75 | Large |
| Roboto | 0.528 | 0.711 | 0.74 | Large |
| Geist / Geist Mono | 0.530 | 0.710 | 0.75 | Large |
| Libre Baskerville | 0.530 | 0.770 | 0.69 | Large (tuned for screen) |
| Libre Franklin | 0.530 | 0.742 | 0.71 | Large |
| Open Sans | 0.535 | 0.714 | 0.75 | Large |
| Noto Sans | 0.536 | 0.714 | 0.75 | Large |
| Inter | 0.546 | 0.728 | 0.75 | Large |
| JetBrains Mono | 0.550 | 0.730 | 0.75 | Large |
| Merriweather | 0.555 | 0.743 | 0.75 | Very large |

**Apply**
- **Size equivalence formula.** To make font B look as big as font A at size S: `S_B = S_A × (xA ÷ xB)`. Example: Inter 16px (0.546) next to EB Garamond needs about 16 × 0.546 ÷ 0.405 ≈ 21.6px for the same lowercase size.
- **CSS.** `font-size-adjust` normalizes fallback and mixed fonts to a target x-height (`ex-height`, default) or cap height (`cap-height`). `from-font` reads the metric from the first available font. Baseline 2024 (newly available since July 2024), verified 2026-10 [22]. Details and fallback stacks: `web-and-variable-fonts.md`.
- **UI and small text.** Prefer x-height ≥ about 0.50 of the em for 11–14px UI text (a working threshold drawn from the table above, not a research cutoff). [E3] Libre Baskerville's own description says it was given a taller x-height, wider counters, and less contrast than the 1941 ATF Baskerville to work at 16px on screen [17]. That is the general recipe for screen text faces. [E2]
- **Print and editorial.** Small x-height faces (Garamond-type) are traditional for books. They need larger point sizes or more generous line spacing to read at the same comfort level as a large-x-height face. Set them 1–2pt larger than a sans you are matching.
- **Fluent range.** Vision research finds reading speed is near maximum across x-heights of about 0.2° to 2° of visual angle, which at 40cm is about 1.4mm to 14mm [11]. **[E1]** Convert medium-specific minimums in `legibility-by-medium.md`.

**Limit**
- x-height is a proxy, not a guarantee. Width, spacing, and aperture also change legibility (section 2). Do not choose a face on x-height alone.
- Very large x-heights shorten ascenders and descenders, which can make b/d/h/n and p/q/g/y harder to tell apart in some designs. Check word shapes, not just letters.
- Variable fonts with an `opsz` axis change their x-height and contrast with size. Measure at the size you will use.

---

## 2. Letter structure: what fails at small sizes, at a glance, and for low vision

| Term | Definition | Why it matters for selection |
|------|-----------|------------------------------|
| **Counter** | The enclosed or partly enclosed white space inside a letter: closed in o, d; open in c, u [1]. | Small counters fill in at small sizes, on low-resolution screens, on absorbent paper, and in bold weights. |
| **Aperture** | The opening of a partly closed counter: the gap in c, e, a, s, and the top of t, f. Not a glossary term at Google Fonts; standard usage in legibility research [4]. | Closed apertures impair letter recognition (section below). Open apertures are the most consistent anatomical feature for small text and glance reading. |
| **Bowl** | The curved stroke that encloses a counter (b, d, p, q, o). | Bowl shape separates b/d/p/q and o/a/e. Geometric faces with near-circular bowls make these letters look more alike. |
| **Stem** | The main vertical stroke [2]. | Stem weight sets the font's color (darkness) on the page. |
| **Stroke contrast** | Difference between thick and thin parts of strokes. Monolinear faces have low contrast; serif faces tend to have more. Display optical sizes usually have more contrast than text sizes [1]. | High contrast loses its thin strokes at small sizes, on screens, in reversed-out text, and in print with dot gain. |
| **Stress (axis)** | The angle along which thick and thin parts are distributed. Slanted axes come from the broad-nib pen; vertical axes from the pointed pen (Noordzij's model) [1]. | Diagonal stress reads as humanist and calligraphic; vertical stress as rational and modern (Didone, transitional). Low-contrast faces may show no visible axis [1]. Use stress to decide whether two faces belong to the same family of construction. |
| **Terminal** | How a stroke ends: ball, flared, sheared, serifed, or plain [1]. | Terminals carry much of a face's voice and also affect legibility [1]. Ball terminals read as bookish or friendly. Horizontal terminals close apertures (common in grotesques). |
| **Spur** | A small projection, typically at the bottom right of G or the junction of b. | A spur helps separate G from C and O. Check it in all-caps labels and signage. |
| **Ink trap** | A notch cut into a junction so ink pooling does not clog the joint. Today mostly stylistic, but still used in small optical sizes and makes corners look sharper; bold weights at small sizes benefit most [1][2]. | Choose faces with real ink traps for very small text on poor substrates (newsprint, thermal receipts, cheap packaging). At display size they are a style signal. |
| **Overshoot** | See section 1. | |

### What the research says about these features

| Feature | Finding | Grade | Rule for selection |
|---------|---------|-------|--------------------|
| **Closed apertures** | Letters a, c, e, r, s, t, f drawn with closed apertures were harder to identify in the parafovea (2° from fixation) than open variants of the same serif font [4]. | [E1] (controlled experiment; single font family) | For UI, signage, captions, and anything read at a glance, reject faces whose c, e, a, s nearly close. |
| **Stroke contrast (bold)** | In bold weights, an extreme-contrast font impaired letter recognition compared with low and medium contrast; low and medium did not differ [5]. | [E1] | Avoid high-contrast bold (fashion Didones, "luxury" serifs) for UI labels, buttons, and short glance text. Use them for display. |
| **Contrast × serifs** | Sans serifs with low contrast performed better than sans with high contrast. Among serif fonts, the pattern reversed in one sensitivity measure [6]. In 19 patients with low vision, low contrast with serifs gave lower size thresholds than low contrast without serifs [7]. | [E1] (small samples; fonts made for the study) | For low-vision audiences, pick low-contrast faces first; serifs are not the problem. Test with the actual audience when it matters (healthcare, government). |
| **Serifs alone** | Fonts differing only in serif size: 5% serifs were slightly more legible at threshold, likely because serifs add spacing; reading speed showed no serif effect [10]. | [E1] | Do not choose serif vs sans on legibility grounds. Choose on voice, medium, and family depth. See myths in `pairing-and-selection.md`. |
| **Letter width** | Wider letter shapes (Helvetica Neue Extended vs Standard vs Condensed) improved letter recognition in the parafovea and periphery [8]. Ultra Condensed Univers changed eye movements, but readers adjusted and reading speed did not differ [9]. | [E1] | For glance reading (dashboards, car UI, signage, OOH), avoid condensed text faces. Condensed is acceptable for headlines read with focused attention. |
| **Overall** | A 2026 review of letter crowding, serifs, spacing, weight, and width concludes there is no single most legible typeface; legibility depends on the reading situation (paragraph, small visual angle, glance) [12]. | [E1] (review) | Name the reading situation before choosing (section 4). |

**Apply**
- **UI/app:** large x-height, open apertures, low-to-medium contrast, distinct I/l/1 and 0/O. Inter, for example, includes a slashed-zero feature (`zero`) to separate 0 from O [17][18].
- **Web long-form:** any well-made text face works; contrast matters less at 16–20px on high-density screens. Prefer a text optical size if the family has one.
- **Print/editorial:** higher contrast is acceptable in body text at 9–12pt on good paper. On newsprint or uncoated stock, choose lower contrast and real ink traps.
- **Social:** text is read on a phone at a glance over imagery. Use wide-ish, open-aperture sans at heavy weights; avoid hairline serifs over photos.
- **OOH and signage:** glance reading at distance. Open apertures and normal-to-wide width matter most [4][8]. Size by distance in `media-specs` → `out-of-home.md`.

**Limit**
- Most of these studies use letters drawn for the experiment, short exposures, and small samples. Effects on normal paragraph reading are smaller than effects at threshold or in the periphery [9][10][12].
- Distinctiveness can be overdone. Making letters very different from each other (mixed case shapes, irregular slants) hurt word recognition in one study (mixed case was the damaging factor; preprint, not peer reviewed) [25]. [E3] Distinct details should still belong to one coherent design.

---

## 3. Serifs and spacing

### Serif types (vocabulary)

| Serif type | Description | Typical in | Selection note |
|-----------|-------------|-----------|----------------|
| Bracketed | Serif joins the stem with a curved fillet | Humanist (old style), transitional | Warm, bookish; survives small sizes and rough printing well. |
| Unbracketed / hairline | Thin, flat serif with no bracket | Didone | Elegant at display size; disappears at small sizes and in reversed text. |
| Slab | Heavy, rectangular serif close to stem weight, low contrast [1] | Slab serif / Egyptian / Clarendon | Robust on poor substrates and screens; reads mechanical or friendly depending on terminals. |
| Wedge / glyphic | Triangular or incised ending | Glyphic, inscriptional (Cinzel, Albertus) | Monumental voice; usually caps-only display. |
| Flared | Stroke widens toward the end without a distinct serif | Flared sans (Optima-type) | Sits between serif and sans; good for headings, cosmetics, institutions. |

### Sidebearings, kerning, and tracking

| Term | Definition | Rule |
|------|-----------|------|
| **Sidebearings (spacing)** | The space the type designer builds into each glyph on its left and right. Left and right are often intentionally unequal. A "well-spaced" font has consistent spacing suited to its intended size [1]. | Spacing is set by the designer for an intended size range. Text faces are spaced looser than display faces. Do not use a display cut for small text. |
| **Kerning** | Adjustment of space between two specific glyphs. Kerning pairs (usually class-based) are stored in the font [1]. | Keep the font's kerning on. Browsers enable it by default; `font-kerning: none` disables it [1]. Manual kerning is for logotypes and large headlines only. |
| **Tracking (letter-spacing)** | Uniform spacing applied to a whole run of text. CSS calls it `letter-spacing` [1]. | Add positive tracking to all-caps and small caps; use negative tracking only at display sizes [1]. Some software disables ligatures when tracking is applied [1]. |

**Apply**
- Kerning vs tracking is the most common vocabulary error in briefs and critiques [1]. Use the right word in critique notes.
- Test a candidate face with its worst pairs: `AV`, `To`, `Ty`, `LT`, `f)` `"A`, `r,`, `7.`. Poor kerning shows up immediately in headlines.
- Tracking values for caps, labels, and display: `scale-and-rhythm.md`.

**Limit**
- A badly spaced free font can't be fixed with global tracking. Reject it.

---

## 4. Anatomy audit: a 10-minute procedure for any candidate typeface

Run this before approving a face for body text, UI, or signage. Set each test string at the real size, on the real medium (device, paper, screen brightness), in the weights you will use.

1. **Name the reading situation.** Paragraph reading, small visual angle, or glance reading [12]. Each step below weighs differently per situation.
2. **Homoglyphs.** Set `Il1 0Oo rn m cl d` and `S5 B8 Z2 G6`. I, l, and 1 must be distinguishable, especially in sans faces [23]. **[E2]** Mandatory for codes, passwords, gate numbers, product SKUs, and data tables.
3. **Apertures.** Set `ceasr tf` at the smallest size. Reject if c and e nearly close [4]. **[E1]**
4. **x-height.** Compare x-height/em with the table in section 1. For 11–14px UI, prefer ≥ 0.50.
5. **Contrast.** Set the boldest and the lightest weights you plan to use at the smallest size. Thin strokes must stay visible; bold must not clog counters [5].
6. **Width.** For glance and peripheral reading, avoid condensed text weights [8].
7. **Reversed out.** Set white text on your darkest background. Light weights and hairlines thin out further when reversed.
8. **Spacing and kerning.** Set the worst pairs above at display size; set a paragraph at text size and look for uneven color.
9. **Figures and punctuation.** Check figure styles, slashed zero, fractions, and quote marks you will need (feature list in `pairing-and-selection.md`).
10. **Language coverage.** Set the actual names, addresses, and languages in your content (section 7).

Record results in a short table (pass / fail / note) in the design rationale so reviewers can check the decision.

---

## 5. Formal classification systems and their status

### Vox-ATypI (1954; adopted by ATypI 1962; de-adopted 2021)

- **Origin.** Devised in 1954 by Maximilien Vox, a French writer, illustrator, and typography historian who later co-founded ATypI [13]. ATypI adopted it in 1962 [13].
- **Structure.** Nine Latin-script classes based on traits such as serifs and stroke axis [13]. Later revisions added a single "Non-Latin" heading for all other scripts [13], and Gaelic was added at the ATypI AGM in Dublin on 12 September 2010 (secondary source) [15].
- **National standards derived from it.** German DIN 16518 (1964), British BS 2961:1967, and French NF Q60-007 (1977), some with modifications [14]. BS 2961:1967 adapted the system and subdivided Lineale into Grotesque, Neo-grotesque, Geometric, and Humanist [13][15].
- **2021 de-adoption.** At a regular online meeting on 18 March 2021, the ATypI board of directors passed two resolutions: one formalized the de-adoption of Vox-ATypI and withdrew ATypI's endorsement; the other directed a working group to study new classification systems that can cover the world's writing systems [13]. The public announcement is dated 27 April 2021 on atypi.org [13]. One secondary source gives 21 April 2021 [14]. The reasons given: the system covers only Latin and does not represent ATypI's global membership [13]. It was a board decision, not a membership vote [13].
- **Replacement.** ATypI named none. As of August 2023, a foundry analysis found little evidence of work on a replacement and noted that Vox-ATypI remains the de facto reference vocabulary [14]. Status not re-checked beyond what the ATypI announcement says; treat "no official replacement" as current unless a newer ATypI source says otherwise.

| Group | Class (English name) | Defining traits | Classic examples [15] |
|-------|----------------------------------|-----------------|----------------------|
| Classicals | Humanist / Venetian | Diagonal stress, low contrast, slanted e crossbar, bracketed serifs | Centaur, Cloister, Adobe Jenson |
| Classicals | Garalde (Aldine) | More contrast than Venetian, diagonal stress, refined bracketed serifs | Bembo, Garamond, Palatino |
| Classicals | Transitional | Near-vertical stress, more contrast, sharper serifs | Baskerville, Century Schoolbook, Times New Roman |
| Moderns | Didone | Vertical stress, extreme contrast, hairline unbracketed serifs | Bodoni, Didot, Walbaum |
| Moderns | Mechanistic (slab serif) | Low contrast, heavy slab serifs | Clarendon, Rockwell |
| Moderns | Lineal (sans serif) | No serifs; BS 2961 subdivides into Grotesque, Neo-grotesque, Geometric, Humanist | Helvetica, Futura, Gill Sans |
| Calligraphics | Glyphic | Carved, chiseled or flared endings; often caps-focused | Albertus, Trajan |
| Calligraphics | Script | Imitates joined handwriting | Mistral, Shelley |
| Calligraphics | Graphic | Drawn, not written, letterforms | Banco, Klang |
| Added later | Blackletter | Broken (gothic) script styles: Textura, Fraktur, Schwabacher, Rotunda | Fraktur families |
| Added later | Gaelic, Non-Latin | Catch-alls added to a Latin-only system | — |

**Apply**
- Use the class names as shared vocabulary in briefs and critiques ("a Garalde with low contrast", "a neo-grotesque with open apertures"). Pair them with section 2 traits, which predict behavior better than the class label.
- Do not present Vox-ATypI as the current official standard. Say "the Vox-ATypI classes (de-adopted by ATypI in 2021) still provide the common vocabulary."

**Limit**
- Historical classes describe ancestry, not function. Typefaces that fit a historical style need not come from that period [1][3]. Many modern faces mix traits (a humanist skeleton with Didone contrast), and foundries rarely file their fonts by Vox class [14].
- The system says nothing useful about non-Latin scripts. CJK has its own style categories (section 7) [20].

---

## 6. Practical categories designers actually use

Font libraries filter by loose genres (serif, sans serif, slab, monospace, script, handwriting, display). These are not clearly delineated or mutually exclusive: a monospaced slab or a display script both exist [3]. Use the table as a starting map, then run the anatomy audit (section 4).

Free faces were verified to exist on Google Fonts and to sit in the `ofl` (SIL Open Font License) directory of the google/fonts repository (Roboto Slab is Apache 2.0) [16][17], verified 2026-10. Classic faces are commercial unless stated.

Voice columns describe cultural associations. These are practitioner beliefs and conventions, not measured effects, and they shift by audience, region, and decade [24]. **[E3]** unless marked otherwise.

| Category | Construction markers | Classic reference faces | Free reference faces (Google Fonts) | Voice / associations [E3] | Best uses | Risks |
|----------|---------------------|-------------------------|-------------------------------------|---------------------------|-----------|-------|
| **Humanist / old-style serif** (Venetian, Garalde) | Diagonal stress, moderate contrast, bracketed serifs, small x-height, pen-derived forms [1] | Garamond, Bembo, Jenson [15] | EB Garamond, Spectral, Sorts Mill Goudy (Google Fonts lists all three as humanist serif) [1] | Literary, traditional, warm, scholarly | Books, long-form editorial, cultural institutions, wine and craft packaging | Small x-height looks small on screens; can feel dated or "default literary"; thin details at small UI sizes |
| **Transitional serif** | Near-vertical stress, higher contrast, more symmetry [1] | Baskerville, Times New Roman, Century Schoolbook [15] | Source Serif 4 (transitional, after Fournier) [17]; Merriweather; PT Serif [1]; Libre Baskerville (screen-tuned Baskerville) [17] | Established, credible, institutional | News, reports, academic, legal, screen reading (screen-tuned cuts) | Times-like faces read as "unstyled default"; check text optical size |
| **Didone (Modern)** | Vertical stress, extreme contrast, hairline unbracketed serifs [1] | Bodoni, Didot, Walbaum [15] | Bodoni Moda (optical sizes 6–96) [16][17]; Playfair Display (its own description says transitional; Google Fonts' glossary puts it at the Didone end) [1][17]; Abril Fatface (Didone-based titling) [17] | Luxury, fashion, editorial glamour | Magazine mastheads, fashion, beauty, display headlines | Hairlines vanish at small sizes, on screens, reversed out, and in bold [5]; never for UI body text |
| **Slab serif** (Egyptian, Clarendon) | Low contrast, serifs near stem weight; skeleton close to sans [1] | Clarendon, Rockwell [15] | Roboto Slab (Apache 2.0) [16]; Zilla Slab (Mozilla, based on Typotheque's Tesla) [17] | Sturdy, mechanical, friendly, Americana (Clarendon), tech (geometric slabs) | Headlines, packaging, signage, low-quality print, e-readers | Monotonous in long text if very geometric; heavy slabs crowd at small sizes |
| **Grotesque** | Early sans: some contrast, irregular or idiosyncratic forms, often closed apertures, double-story g [1] | Akzidenz-Grotesk, Franklin Gothic, Monotype Grotesque [15] | Libre Franklin (interpretation of the 1912 Benton classic) [17]; Archivo (late-19th-century American grotesque) [17]; Work Sans (based on early grotesques) [17] | Industrial, editorial, honest, slightly raw | News headlines, posters, branding with grit | Closed apertures at small sizes [4]; quirks distract in long UI text |
| **Neo-grotesque** | Refined mid-20th-century sans: uniform, horizontal terminals, tight apertures [1] | Helvetica, Univers [15] | Space Grotesk, Work Sans (both given as neo-grotesque examples by Google Fonts) [1] | Neutral, corporate, Swiss, modern (neutrality is a modernist claim, not a measured effect; see `design-history` → `masters-type-designers.md`) | Corporate identity, wayfinding systems, UI, posters | Horizontal terminals close apertures; can look generic; confusable I/l |
| **Geometric sans** | Built from circles, triangles, and straight lines, with optical corrections [1] | Futura, Century Gothic, ITC Avant Garde [15] | DM Sans, Poppins, Raleway [1]; Jost (inspired by 1920s German sans) [17] | Modern, clean, optimistic, startup, Bauhaus | Logos, headlines, short UI labels, fashion | Repeated similar round shapes can hinder readability; Google Fonts calls them less ideal for body text [1] [E2]; single-story a and round o/a/d/b confusion |
| **Humanist sans** | Pen-influenced proportions, open apertures, some stroke modulation, often a true italic [1] | Gill Sans, Frutiger, Optima [15] | Merriweather Sans, Cabin [1] | Friendly, clear, approachable, public-service | UI, wayfinding, healthcare, government, long screen text | Can look soft or bland; Gill Sans-type faces have quirky forms |
| **Monospace** | Every glyph has the same advance width | Courier, Letter Gothic [15] | JetBrains Mono, IBM Plex Mono, Source Code Pro [16] | Technical, code, typewriter, raw | Code, terminals, data tables, technical labels, brutalist styling | Uneven texture in prose; wide; "i" and "m" distortions. Only monospaced fonts should be considered for code [24] [E2] |
| **Script** | Joined or semi-joined handwriting forms | Mistral, Shelley [15] | Dancing Script, Great Vibes, Pacifico (Google Fonts "Handwriting") [16] | Personal, festive, romantic, artisanal | Invitations, packaging accents, short display words | Unreadable in all caps and in long text; overused scripts look cheap; poor at small sizes |
| **Display** | Drawn for large sizes: extreme weight, width, contrast, or novelty | — | Abril Fatface, Bebas Neue, Anton (Google Fonts "Display") [16][17] | Depends on the face: loud, retro, sporty, editorial | Headlines, posters, social graphics, packaging | Spacing and details tuned for big sizes fail small; often one weight and limited language support |
| **Blackletter** | Broken strokes, dense texture: Textura, Fraktur, Schwabacher, Rotunda, Bastarda [1] | Fraktur families [15] | UnifrakturMaguntia (after a 1901 Fraktur) [17]; UnifrakturCook; Pirata One (gothic textura simplified for screen) [17] | Medieval, ecclesiastical, heavy metal, newspaper mastheads, German heritage; in some contexts, extremist associations (check audience) | Mastheads, beer and spirits labels, music, tattoo, certificates | Low legibility for modern readers; strong and sometimes unwanted cultural baggage |
| **Glyphic / inscriptional** | Carved, chiseled, or Roman-capital forms | Trajan, Albertus [15] | Cinzel (first-century Roman inscriptions) [17] | Monumental, classical, epic, prestige | Film titles, memorials, institutions, luxury | Caps-only use; cliché in film and luxury |

**Apply**
- Brief with two coordinates: the category (vocabulary) plus the anatomy traits (behavior). Example: "humanist sans, x-height ≥ 0.52, open apertures, true italic, tabular figures."
- Search Google Fonts by category and then filter by language; foundry sites use their own genre labels.
- When a period voice is needed (a 1920s film, a heritage brand), pick faces that evoke the period, even if designed later; shared cultural memory often matters more than historical accuracy [3][24].

**Limit**
- Category voice is culture-bound. The same face can read "premium" in one market and "dated" in another. Validate with the audience, not with this table. Associations by audience and culture: `cognitive-psychology` → `audience-and-culture.md`.

---

## 7. Non-Latin awareness: coverage and what to check

**Rule:** decide the full language list before choosing a typeface. A missing glyph is rendered in a fallback font that differs in style and proportion and makes the product look broken [23][24]. CMS-driven sites and products with user input will eventually show names and addresses in languages you did not plan for [23].

### Coverage is scarce outside Latin

Families in the Google Fonts catalog by supported subset (verified 2026-10, from the catalog metadata) [16]:

| Subset | Families (of 1,950) |
|--------|---------------------|
| latin | 1,829 |
| latin-ext | 1,526 |
| vietnamese | 520 |
| cyrillic | 294 |
| greek | 118 |
| japanese | 68 |
| devanagari | 63 |
| hebrew | 62 |
| arabic | 57 |
| korean | 38 |
| thai | 34 |
| chinese-traditional | 16 |
| chinese-simplified | 10 |

Popular Latin faces often lack scripts you might assume: Montserrat and Playfair Display ship Cyrillic but no Greek; Inter covers Latin, Cyrillic, Greek, and Vietnamese [16][18]. Noto covers more than 1,000 languages and over 150 writing systems and is designed to harmonize across scripts [21][24].

### Per-script checks

| Script | Line-height category (Google) [19] | What to check | Free starting points [16] |
|--------|-----------------------------------|---------------|---------------------------|
| **Latin extended / Vietnamese** | Latin-like; Vietnamese is taller because of stacked diacritics [19] | Full diacritic set (Central/Eastern European, Vietnamese, African languages); stacked marks fit within line height; Google recommends at least Western European support and ideally Central/Eastern European, Vietnamese, and African [23] | Inter, Noto Sans, Source Sans 3, IBM Plex Sans |
| **Cyrillic** | Latin-like [19] | Coverage of Ukrainian, Serbian, Bulgarian, Kazakh letters; localized forms for Serbian/Macedonian and Bulgarian via `locl` (fonts declare these as language systems). Noto Sans and EB Garamond declare SRB and MKD; Montserrat also declares BGR; Inter declares no Cyrillic language systems [18] | Noto Sans/Serif, PT Sans/Serif, IBM Plex, Literata |
| **Greek** | Latin-like [19] | Accented vowels (tonos) and final sigma (ς) present and well drawn; Greek drawn by someone fluent in the script (check the design credits) | Noto Sans/Serif, Literata (Greek by Irene Vlachou) [17], Roboto, Open Sans |
| **Arabic** | Tall [19] | Contextual shaping (`init`, `medi`, `fina`, `isol`), required ligatures (`rlig`), mark positioning (`mark`, `mkmk`), right-to-left mirroring of the UI [19]. Noto Sans Arabic's line box (hhea ascent + descent) is 2.11 em, versus 1.36 em for Noto Sans [18]. Arabic has no capitals, so it looks smaller next to uppercase Latin; see `cognitive-psychology` → `audience-and-culture.md` | Noto Sans Arabic, Noto Naskh Arabic, IBM Plex Sans Arabic, Amiri, Cairo |
| **Hebrew** | Latin-like in Google's table [19] | Right-to-left; niqqud (vowel points) if the content needs them; mirrored UI | Noto Sans Hebrew, IBM Plex Sans Hebrew, Rubik, Open Sans |
| **Devanagari** | Tall [19] | Conjuncts and half forms (`half`, `cjct`, `akhn`), reph (`rphf`), above/below marks (`abvm`, `blwm`) [18]; the headline (shirorekha) must join across letters; matching Latin companion | Noto Sans/Serif Devanagari, Mukta, Hind, Poppins, Tiro Devanagari Hindi |
| **CJK (Chinese, Japanese, Korean)** | Dense: extra line height and higher character density [19] | Thousands of glyphs and large files (use subsetting or a delivery service); separate fonts for Simplified, Traditional, Japanese, Korean; typically monospaced and can be set vertically [19]; Chinese style categories differ from Latin ones (Songti, Kaiti, Heiti, Yuanti and others) [20] | Noto Sans/Serif JP, SC, TC, KR; IBM Plex Sans JP/KR; Zen Old Mincho |

**Procedure**
1. List every language and script in content, UI strings, user names, addresses, and legal text.
2. Filter candidates by script support (Google Fonts language filter, foundry glyph pages) [24].
3. Type real sample strings, not lorem ipsum: names with diacritics, a Serbian italic paragraph, an Arabic address with numerals, a Hindi sentence with conjuncts.
4. Check line height for tall and dense scripts [19]. Increase it per script with `:lang()` rules rather than one global value.
5. Set the `lang` attribute on HTML so the browser applies localized forms (`locl`) and correct line breaking.
6. Pick a harmonized family across scripts where possible (Noto, IBM Plex, commercial families such as Graphik International; see `pairing-and-selection.md`). Otherwise, match x-height or cap height and stroke weight between scripts by eye and with `font-size-adjust`.
7. Ask a native reader to review before launch.

**Limit**
- Coverage counts measure declared subsets, not quality. A font can include Arabic glyphs with poor shaping or Cyrillic drawn by someone unfamiliar with it. Native review is the only reliable check.

---

## Common mistakes

| Mistake | Correction |
|---------|-----------|
| Choosing by the category label ("a geometric sans") without checking anatomy | Labels describe ancestry. Apertures, x-height, contrast, and width predict behavior [4][5][8]. Run section 4. |
| Comparing fonts at the same font size | Compare at the same x-height (section 1 formula or `font-size-adjust`) [22]. |
| Using a Didone or other high-contrast face for UI labels or bold buttons | High-contrast bold impairs letter recognition [5]. Keep it for display. |
| Using a display cut or display optical size for small text | Display sizes have higher contrast and tighter spacing [1]. Use the text or caption size. |
| Using condensed text faces for glance reading | Wider letters are recognized better at a glance and in the periphery [8]. |
| Calling Vox-ATypI the current ATypI standard | ATypI de-adopted it in 2021 and named no replacement [13]. |
| Treating Google Fonts' category or a foundry's genre as authoritative | Genres overlap and sources disagree (Playfair Display: transitional per its designer, Didone end per Google's glossary) [1][17]. |
| Saying "kerning" for letter-spacing | Kerning is pair-specific; tracking is global [1]. |
| Assuming a popular Latin face covers Greek, Cyrillic, or Vietnamese | Check the subset list and real strings (Montserrat and Playfair Display have no Greek) [16][18]. |
| Setting Arabic, Devanagari, or Thai at Latin line height | These are "tall" scripts; CJK is "dense." Both need more line height [19]. |
| Picking a face because "it is the most legible font" | No single most legible typeface exists; it depends on the reading situation [12]. |

## Sources

[1] Google Fonts. (n.d.). *Google Fonts Knowledge: Glossary* (entries: ascenders/descenders, axis in type design, baseline, blackletter, cap height, classification, contrast, counter, geometric, grotesque/neo-grotesque, humanist/old style, ink trap, kerning, optical sizes, overshoot, slab serif, spacing, terminal, tracking, transitional/neo-classical, x-height). CC BY-SA. https://fonts.google.com/knowledge/glossary (source files: https://github.com/google/fonts/tree/main/cc-by-sa/knowledge/glossary/terms)

[2] Google Fonts. (n.d.). *An overview of Latin type anatomy*. Google Fonts Knowledge. https://fonts.google.com/knowledge/introducing_type/an_overview_of_latin_type_anatomy

[3] Google Fonts. (n.d.). *Making sense of typographic classifications*. Google Fonts Knowledge. https://fonts.google.com/knowledge/introducing_type/making_sense_of_typographic_classifications

[4] Beier, S., & Oderkerk, C. A. T. (2022). Closed letter counters impair recognition. *Applied Ergonomics*. https://doi.org/10.1016/j.apergo.2022.103709

[5] Beier, S., & Oderkerk, C. A. T. (2021). High letter stroke contrast impairs letter recognition of bold fonts. *Applied Ergonomics*. https://doi.org/10.1016/j.apergo.2021.103499

[6] Minakata, K., & Beier, S. (2022). The dispute about sans serif versus serif fonts: An interaction between the variables of serif and stroke contrast. *Acta Psychologica*. https://doi.org/10.1016/j.actpsy.2022.103623

[7] Minakata, K., Eckmann-Hansen, C., Larsen, M., Bek, T., & Beier, S. (2023). The effect of serifs and stroke contrast on low vision reading. *Acta Psychologica*. https://doi.org/10.1016/j.actpsy.2022.103810

[8] Oderkerk, C. A. T., & Beier, S. (2022). Fonts of wider letter shapes improve letter recognition in parafovea and periphery. *Ergonomics*. https://doi.org/10.1080/00140139.2021.1991001

[9] Minakata, K., & Beier, S. (2021). The effect of font width on eye movements during reading. *Applied Ergonomics*. https://doi.org/10.1016/j.apergo.2021.103523

[10] Arditi, A., & Cho, J. (2005). Serifs and font legibility. *Vision Research*, 45(23), 2926–2933. https://doi.org/10.1016/j.visres.2005.06.013

[11] Legge, G. E., & Bigelow, C. A. (2011). Does print size matter for reading? A review of findings from vision science and typography. *Journal of Vision*, 11(5), 8. https://doi.org/10.1167/11.5.8

[12] Beier, S., & Thiessen, M. (2026). Applying cognitive and perceptual science to typeface choices. *Ergonomics*. https://doi.org/10.1080/00140139.2025.2541255

[13] ATypI. (2021, April 27). *ATypI de-adopts the Vox-ATypI typeface classification system*. Association Typographique Internationale. https://atypi.org/2021/04/27/atypi-de-adopted-the-vox-atypi-typeface-classification-system/

[14] Hayez, S. (2023, August 28). *Vox-ATypI* [blog post]. Blaze Type. https://blazetype.eu/blog/voxatyp-i (secondary source)

[15] Wikipedia. (n.d.). *Vox-ATypI classification*. https://en.wikipedia.org/wiki/Vox-ATypI_classification (secondary source; used for class names, examples, and the 2010 Gaelic addition)

[16] Google Fonts. (2026). *Font catalog metadata* (family, category, subsets, axes, designers). Retrieved 2026-10 from https://fonts.google.com/metadata/fonts; license directories checked in https://github.com/google/fonts (ofl/, apache/, ufl/).

[17] Google Fonts. (2026). *Family descriptions* (DESCRIPTION.en_us.html files for Archivo, Abril Fatface, Bebas Neue, Bodoni Moda, Cinzel, Inter, Jost, Libre Baskerville, Libre Franklin, Literata, Pirata One, Playfair Display, Source Serif 4, UnifrakturMaguntia, Work Sans, Zilla Slab). https://github.com/google/fonts/tree/main/ofl

[18] Font-file measurements made for this file (2026-10) with fontTools 4.60 on the font files in https://github.com/google/fonts: x-height and cap height from glyph bounding boxes of x and H at the default instance, divided by units per em; GSUB/GPOS feature tags and language systems read from the font tables.

[19] Google Fonts. (n.d.). *Language support in fonts*. Google Fonts Knowledge. https://fonts.google.com/knowledge/using_type/language_support_in_fonts

[20] Google Fonts. (n.d.). *Type classification in CJK: Chinese*. Google Fonts Knowledge. https://fonts.google.com/knowledge/type_in_china_japan_and_korea/type_classification_in_cjk_chinese

[21] Google Fonts. (2026). *Frequently asked questions* ("How do I find fonts that support my language?"). https://fonts.google.com/faq (verified 2026-10)

[22] MDN Web Docs. (2026). *font-size-adjust*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/font-size-adjust (verified 2026-10)

[23] Google Fonts. (n.d.). *Choosing reliable typefaces*. Google Fonts Knowledge. https://fonts.google.com/knowledge/choosing_type/choosing_reliable_typefaces

[24] Google Fonts. (n.d.). *A checklist for choosing type* and *Emotive considerations for choosing typefaces*. Google Fonts Knowledge. https://fonts.google.com/knowledge/choosing_type/a_checklist_for_choosing_type ; https://fonts.google.com/knowledge/choosing_type/emotive_considerations_for_choosing_typefaces

[25] Beier, S., & Bernard, J. (2019). *Lack of regularity between letters impacts word recognition performance* [preprint]. bioRxiv. https://doi.org/10.1101/753038
