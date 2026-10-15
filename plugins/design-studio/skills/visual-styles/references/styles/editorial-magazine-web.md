# Editorial / Magazine Web

> **Scope:** Web design that borrows magazine and newspaper layout: large serif display type, strong typographic hierarchy, asymmetric grids, pull quotes, full-bleed photography, and art direction tailored to each story.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Print lineage:** Magazine art direction combined grid systems (see `swiss-international.md`) with per-issue, per-story expression. Examples include *Ray Gun* (1992–2000; art director David Carson), known for experimental layouts [1], and *Bloomberg Businessweek*, whose bold, eclectic, playful, and "memetic" look after its early-2010 redesign was shaped by creative director Richard Turley, then Rob Vargas (from 2014), with deputy creative director Tracy Ma (2011–2016) [2].
- **Art direction on the web:** Dan Mall's 2010 *A List Apart* article separates **art direction** (evoking the right emotion and connecting with the viewer; it "adds humanity to design") from **design** (technical execution: color harmony, typography, line length, composition). Quoting Jarrod Riddle: "Design is the how." / "Art direction is the why." [3] This distinction is the core of per-story art direction on the web.
- **Landmark:** *Snow Fall: The Avalanche at Tunnel Creek* (*The New York Times*, John Branch, published Dec 20, 2012) was a six-part story interwoven with interactive graphics, animated simulations, and aerial video. It won the 2013 Pulitzer Prize for Feature Writing and a Peabody Award, and became one of the most talked-about online news features [4]. It remains the standard reference for multimedia long-form ("scrollytelling").
- **Visual essays:** *The Pudding* (since 2017) publishes visual essays on cultural debates and chooses "topics where visuals inform and entertain" [5].
- **Platform recognition:** Apple's HIG introduces Extra Large Title styles in visionOS "for wide, editorial-style layouts" and pairs SF with the New York serif [6].
- **Cultural reason:** Publishers and brands wanted to differentiate from templated CMS pages and social feeds, and to signal quality journalism or a premium brand. Web fonts, CSS Grid, and scroll-driven animation made print-like composition feasible.

## Visual DNA

- Large, high-contrast serif display type (Didone, transitional, or modern serif); often a sans for UI and metadata.
- Clear typographic hierarchy: kicker, headline, dek (standfirst), byline, body, captions, pull quotes.
- Asymmetric multi-column grids; images that break the column; full-bleed photography.
- Drop caps, pull quotes, rules, section numbers, and other print furniture.
- Generous margins and a comfortable reading measure.
- **Per-story art direction:** each feature can have its own palette, display face, and layout within the brand system [3].
- Scrollytelling: sticky graphics that change as text scrolls [4].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | Display serif (e.g., a Didone or high-contrast serif); body serif or sans optimized for screens; sans for UI and captions. Max three families. | Display serifs have hairlines that break at small sizes. Use them at ≥32px only. |
| Typography: scale | Ratio 1.414–1.618 for display (e.g., 18 → 29 → 47 → 76 → 123px); body 18–21px on desktop, 17–18px on mobile. | Editorial needs bigger body text than app UI. |
| Typography: weights | Display 300–700 depending on face (high-contrast faces look best at regular); body 400; captions 400–500. | |
| Typography: letter-spacing | Display −0.01 to −0.03em; body 0; kickers and small caps +0.06 to +0.1em uppercase. | |
| Typography: line-height and measure | Body 1.5–1.65; display 1.0–1.1; measure 60–75 characters (`max-width: 65ch`). | |
| Color: structure | Paper + ink + one editorial accent per story (art-directed), plus muted neutrals for metadata. | |
| Color: example values | Paper `#FAF7F2` oklch(97.7% 0.007 80.7); ink `#1A1A1A` oklch(21.8% 0 0) (16.29:1); metadata `#5C5C5C` (6.26:1); accent red `#B3261E` oklch(50.1% 0.178 28.7) (6.12:1). Caption gray `#8A8A8A` is only 3.23:1 (**fails** body). | [7] |
| Radius | 0–2px. Editorial is rectilinear. | |
| Borders | Hairline rules (1px ink at 15–100%) between sections and under kickers; column rules. | |
| Shadows / elevation | None. | |
| Spacing / grid | 12-column grid with deliberate asymmetry (e.g., text in columns 3–9, images spanning 1–12); 8px baseline; section breaks 96–160px. | |
| Imagery & iconography | Commissioned photography and illustration; full-bleed openers; captions always present. Minimal icons. | |
| Motion | Scroll-linked (sticky graphics, reveal on enter), 400–700ms, `cubic-bezier(0.2, 0, 0, 1)`; no motion in body text. | Provide reduced-motion and no-JS fallbacks [8]. |
| Texture / effects | Optional paper tint, duotone images, grain on illustrations. | |

## Signature examples

| Example | Year | Why |
|---------|------|-----|
| *Ray Gun* (print; David Carson) | 1992–2000 | Experimental editorial art direction [1]. |
| *Bloomberg Businessweek* redesign (Richard Turley) | 2010 | Bold, eclectic, memetic magazine design [2]. |
| Dan Mall, "Art Direction and Design," *A List Apart* | 2010 | Defines art direction for the web [3]. |
| *Snow Fall* (*The New York Times*) | 2012 | Scrollytelling landmark; Pulitzer 2013 [4]. |
| *The Pudding* visual essays | 2017 → | Data-driven editorial [5]. |

## Fits / Avoid

**Fits:** publishers, long-form journalism, brand magazines and blogs, annual reports, fashion and culture, museums, case studies, premium DTC brand storytelling, newsletters with web editions.

**Avoid / adapt:** transactional flows; app dashboards; content teams that can't sustain per-story art direction (use a strong template system with a few art-directed slots instead).

**Evidence on people:**
- Art direction aims at emotion and connection [3]. That is a practitioner framing, not a measured outcome. **[E2]**
- Clean, low-to-medium complexity layouts score higher on first-impression appeal than highly complex ones [9]. **[E1]** Editorial restraint (one big image, one headline) fits this. Collage-heavy features need care.
- Claims that serif body text is more or less readable on screen than sans are contested. Treat them as **[E3]** and decide on x-height, size, and rendering instead.

**Accessibility risks:** hairline serifs at small sizes; light-gray captions [7]; text over full-bleed images; scroll-jacking and heavy scroll-linked animation [8]; reading order broken by asymmetric grid placement; pull quotes duplicated in the DOM (read twice by screen readers; mark decorative duplicates `aria-hidden="true"`).

**When it ages badly:** heavy parallax and scroll-jacking (a 2012–2015 signature) now feel slow. Over-designed features that break on mobile.

**Limit:** Art direction serves the story. Don't let layout novelty hide the byline, date, corrections, or sponsor disclosures readers rely on to judge credibility.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Reader apps: large serif titles, comfortable measure, adjustable type size, minimal chrome. |
| Website | Story openers with full-bleed art plus display serif; a body column of 60–75 characters; images break the column; pull quotes; related stories as a typographic list. |
| Social post | Quote cards in display serif; cover-style images with kicker plus headline; carousel as "spreads." |
| Print / editorial | Native: the source medium. |
| Billboard | Magazine-cover logic: one striking image, a short serif headline, a masthead-like logo. |

## Common mistakes

- Body text too small or too wide (over 80 characters per line).
- Display serif used at caption sizes.
- Scroll-jacking that overrides native scrolling.
- Every article fully custom, with no system, so production can't keep up.
- Image-heavy openers that delay the headline on mobile.
- Captions omitted, which loses editorial credibility.

## Pairs well with / Related styles

- **Foundation:** `swiss-international.md` (grid discipline).
- **Variants:** `minimalism.md` (quiet editorial), `maximalism.md` (collage editorial, *Ray Gun* lineage), `brutalism-web.md` (zine editorial).
- **Layout partner:** `bento-grid.md` for magazine home pages and indexes.

## Sources

[1] Wikipedia contributors. (n.d.). *Ray Gun (magazine)*. Wikipedia. https://en.wikipedia.org/wiki/Ray_Gun_(magazine) (secondary source; accessed 2026-10)
[2] Wikipedia contributors. (n.d.). *Bloomberg Businessweek*. Wikipedia. https://en.wikipedia.org/wiki/Bloomberg_Businessweek (secondary source; accessed 2026-10)
[3] Mall, D. (2010, November 2). *Art Direction and Design*. A List Apart, Issue 317. https://alistapart.com/article/art-direction-and-design/
[4] Wikipedia contributors. (n.d.). *Snow Fall*. Wikipedia. https://en.wikipedia.org/wiki/Snow_Fall (secondary source; accessed 2026-10)
[5] The Pudding. (n.d.). *About*. https://pudding.cool/about/
[6] Apple. (n.d.). *Typography*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/typography
[7] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[8] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[9] Reinecke, K., Yeh, T., Miratrix, L., Mardiko, R., Zhao, Y., Liu, J., & Gajos, K. Z. (2013). *Predicting users' first impressions of website aesthetics with a quantification of perceived visual complexity and colorfulness*. Proceedings of CHI 2013, ACM. https://doi.org/10.1145/2470654.2481281
