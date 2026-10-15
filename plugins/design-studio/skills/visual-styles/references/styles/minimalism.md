# Minimalism

> **Scope:** Reduction-led visual style (few elements, generous negative space, restrained color and type) and its roots in the Bauhaus, Swiss typography, Japanese *ma* / MUJI, and Dieter Rams.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

| Root | Dates / people | What it contributed |
|------|----------------|---------------------|
| Bauhaus | Founded 1919 in Weimar by Walter Gropius; Dessau 1925–1932; Berlin 1932–1933; closed 1933 under Nazi pressure. Directors after Gropius: Hannes Meyer (1928–1930), Ludwig Mies van der Rohe (1930–1933) [1]. | Merging craft and fine art, design for mass production, functionalism and the absence of ornament [1]. Mies's motto "less is more" later became the unofficial mantra of web minimalism [2]. |
| Swiss / International Typographic Style | 1950s–60s; Basel and Zurich schools; Josef Müller-Brockmann, Armin Hofmann, Emil Ruder [3][4]. | Grids, sans-serif type, flush-left/ragged-right text, objective photography. See `swiss-international.md`. |
| Japanese *ma* and MUJI | *Ma* (間, "gap, space, pause") treats empty space as being as important as the filled parts of a work [5]. MUJI (Mujirushi Ryōhin, "no-brand quality goods") began in December 1980 as a product brand of the supermarket chain Seiyu [6]. Kenya Hara (born 1958) became MUJI's art director in 2001 [7]. | Hara frames MUJI's aesthetic as **emptiness** rather than simplicity: an empty condition that can be filled by the user [7][8]. His book *Designing Design* (Lars Müller) explains emptiness in Japanese visual and philosophical traditions [8]. |
| Dieter Rams | Braun industrial designer (SK 4 radiogram) and Vitsœ (606 Universal Shelving System) [9]. Formulated his ten principles in the late 1970s [10]. | "Less, but better" (*Weniger, aber besser*) [9][10]. |
| Minimalist art | Post-WWII reaction to the "chaotic colors, motion, and marked subjectivity" of abstract expressionism, e.g. Ellsworth Kelly, *Brooklyn Bridge VII* (1962) [2]. | Reduction as an aesthetic in itself. |

**Dieter Rams' ten principles, verbatim headings** [10]:

1. Good design is innovative
2. Good design makes a product useful
3. Good design is aesthetic
4. Good design makes a product understandable
5. Good design is unobtrusive
6. Good design is honest
7. Good design is long-lasting
8. Good design is thorough down to the last detail
9. Good design is environmentally-friendly
10. Good design is as little design as possible

Under the tenth principle, Vitsœ's text reads "Less, but better – because it concentrates on the essential aspects, and the products are not burdened with non-essentials. Back to purity, back to simplicity." [10]

**Why it emerged on the web:** NN/g's 2015 analysis of 112 minimalist sites describes web minimalism as an effort to "simplify interfaces by removing unnecessary elements or content that does not support user tasks" [11]. It rose with flat design, responsive layouts, and the shift away from skeuomorphic chrome (see `flat-design.md`).

## Visual DNA

- Negative space is the main compositional material, not leftover area. In NN/g's sample, 84% of minimalist sites used it deliberately [11].
- Limited palette: monochrome plus at most one or two accents, with accents usually reserved for clickable elements (95% of sampled sites) [11].
- Flat surfaces (96% of sampled sites), with few or no shadows, textures, or gradients [11].
- "Dramatic" typography carries hierarchy when there are few other elements (75% of sampled sites) [11].
- Restricted features: anything that doesn't support a core task is removed (87% of sampled sites) [11].
- One focal point per view. Alignment is strict and objects are few, often photographed or rendered on plain grounds.
- Emptiness as an invitation (Hara), not as austerity: the space is there to be filled by content or by the user [7].

## Token recipe

| Token | Starting value | Notes |
|-------|----------------|-------|
| Typography: families | One neo-grotesque or geometric sans for everything (Inter, Helvetica Now, SF Pro, Söhne-class). Optionally one serif for display. | Max two families. Weight contrast does the work that color would otherwise do. |
| Typography: scale | Ratio 1.25 (major third) for UI; 1.333–1.5 for marketing. Body 16–18px, H1 40–64px on desktop. | Large jumps between few levels read as "dramatic" without adding elements. |
| Typography: weights | 400 body, 500–600 UI labels, 600–700 display. Avoid 100–300 below 24px. | Thin weights on low-contrast grays are the classic minimalist legibility failure. |
| Typography: letter-spacing | Display −0.01 to −0.02em; body 0; all-caps labels +0.04 to +0.08em. | |
| Color: structure | Neutral ramp (7–9 steps) + **one** accent + semantic states. | |
| Color: example values | Background `#FFFFFF` oklch(100% 0 0); surface `#F7F7F5` oklch(97.6% 0.003 106.4); text `#111111` oklch(17.8% 0 0) = 18.88:1 on white; secondary text `#6B6B6B` oklch(52.8% 0 0) = 5.33:1 on white, 4.97:1 on surface; hairline `#E5E5E5` oklch(92.2% 0 0); accent `#2541B2` oklch(43.2% 0.182 267.2) = 8.48:1 on white. | Hairline `#E5E5E5` is 1.26:1 on white: fine for decorative dividers, **not** for input borders (needs 3:1, e.g. `#949494` = 3.03:1) [12]. |
| Radius | 0–4px (rigorous/editorial) or 8–12px (product UI). Pick one and use it everywhere. | |
| Borders | 1px hairlines for structure; 1px ≥3:1 borders on inputs and controls [12]. | |
| Shadows / elevation | None, or one soft level for overlays only: `0 8px 24px rgb(0 0 0 / 0.08)`. | |
| Spacing / grid | 8px base unit; section padding 96–160px desktop, 48–80px mobile; 12-column grid, max content width 1120–1280px, text measure 60–75 characters. | Increase space before adding dividers. |
| Imagery & iconography | Single-subject photography on plain backgrounds; 1.5px outline icons at 20–24px. | Avoid stock collages. |
| Motion | 150–250ms, `cubic-bezier(0.2, 0, 0, 1)`; opacity and small translate (4–8px) only. | Respect `prefers-reduced-motion` [13]. |
| Texture / effects | None. Optionally a 1–2% paper tint on the background. | |

## Signature examples

| Example | Year | Why it is a reference |
|---------|------|-----------------------|
| Braun SK 4 "Phonosuper" radiogram (Gugelot, Rams and colleagues) | 1950s (exact year [unverified]) | Nicknamed "Snow White's coffin"; moved appliances away from looking like furniture [9]. |
| Braun RT 20 radio (Rams) | 1961 | Cited by NN/g as an exemplar of minimalist industrial design [2]. |
| Vitsœ 606 Universal Shelving System (Rams) | 1960 | Collaboration with Vitsœ began in 1959; the system is still sold with only minor changes [9][10]. |
| MUJI products and identity under Kenya Hara | Art director from 2001 | Emptiness as brand philosophy [7][8]. |
| Ellsworth Kelly, *Brooklyn Bridge VII* | 1962 | Minimalist art precedent cited by NN/g [2]. |

## Fits / Avoid

**Fits:** premium consumer hardware, luxury, architecture and furniture, portfolios, developer tools with low feature counts, single-purpose apps, content-first reading products.

**Avoid / adapt:** dense enterprise tools and dashboards (removing labels and affordances costs efficiency), audiences unfamiliar with the domain, low-literacy or older audiences who rely on visible labels and signifiers.

**Evidence on people:**
- Visual complexity drives first impressions: in a study of 242 participants rating 450 websites after 500ms, high visual complexity produced the largest drop in appeal, while low and medium complexity were liked about equally. Participants over 45 liked low complexity more than other age groups [14]. **[E1]** (peer-reviewed, CHI 2013; the authors report agreement with earlier work by Tuch et al.). Corrected reading: "less is always better" is **not** supported. Below medium complexity there was no further gain.
- Flat, low-signifier minimalism can slow users. See the 22% finding in `flat-design.md` [15]. **[E2]**
- NN/g's conclusion: "minimalism for minimalism's sake alone doesn't help users", and hiding tools critical to tasks is a failure mode [11]. **[E2]**

**Accessibility risks:** light-gray text, hairline-only input borders, icon-only buttons, hidden navigation (13% of NN/g's sample hid global navigation [11]), and text over large background images or video [11].

**When it ages badly:** when reduction is applied as a surface style (thin type, gray text, empty heroes) without reducing features. It then reads as generic "template minimal."

**Limit:** Don't remove information users need to decide or act, such as prices, fees, labels, or error text, for the sake of visual calm. That turns minimalism into concealment.

## Across media

| Medium | How it translates |
|--------|-------------------|
| App UI | Keep one primary action per screen and visible labels. Use space instead of dividers. Keep tap targets at 44–48px even when visuals are small. |
| Website | Large type-led hero, one image, 3–5 sections, strong rhythm of section padding. Navigation stays visible. |
| Social post | One message, one image or object, 40–60% empty area. Brand mark small and consistent in position. |
| Print / editorial | Wide margins, single typeface family, asymmetric grid, uncoated stock. Rams/Braun manuals are the model. |
| Billboard | A product, a word, and a logo, readable in about 3 seconds. Minimalism is native to OOH. |

## Common mistakes

- Low-contrast gray body text (below 4.5:1) used to "feel light" [12].
- Input fields shown only by a hairline that fails 3:1 [12].
- Hiding navigation behind a menu icon on desktop.
- Removing labels from icons.
- Equating minimalism with emptiness of *content*. Hara's emptiness is a capacity to be filled, not an absence of substance [7].
- Using many weights and sizes. Minimalism needs **fewer** type styles, not just fewer elements.

## Pairs well with / Related styles

- **Builds on:** `swiss-international.md` (grid, type).
- **Close relatives:** `apple-style.md` (product minimalism), `flat-design.md` (minimal surfaces), `editorial-magazine-web.md` (when type-led).
- **Opposite:** `maximalism.md`. **Reaction against it:** `brutalism-web.md`, `neo-brutalism.md`.
- **Combine with:** a single expressive accent (color, illustration, or motion) to avoid blandness.

## Sources

[1] Wikipedia contributors. (n.d.). *Bauhaus*. Wikipedia. https://en.wikipedia.org/wiki/Bauhaus (secondary source; accessed 2026-10)
[2] Moran, K. (2015, June 28). *The Roots of Minimalism in Web Design*. Nielsen Norman Group. https://www.nngroup.com/articles/roots-minimalism-web-design/
[3] Wikipedia contributors. (n.d.). *International Typographic Style*. Wikipedia. https://en.wikipedia.org/wiki/International_Typographic_Style (secondary source; accessed 2026-10)
[4] Wikipedia contributors. (n.d.). *Emil Ruder*. Wikipedia. https://en.wikipedia.org/wiki/Emil_Ruder (secondary source; accessed 2026-10)
[5] Wikipedia contributors. (n.d.). *Ma (negative space)*. Wikipedia. https://en.wikipedia.org/wiki/Ma_(negative_space) (secondary source; article flagged for more references; accessed 2026-10)
[6] Wikipedia contributors. (n.d.). *Muji*. Wikipedia. https://en.wikipedia.org/wiki/Muji (secondary source; accessed 2026-10)
[7] Wikipedia contributors. (n.d.). *Kenya Hara*. Wikipedia. https://en.wikipedia.org/wiki/Kenya_Hara (secondary source; other secondary sources give 2002 for the start of his MUJI role; accessed 2026-10)
[8] MUJI USA. (n.d.). *Designing Design* [product page for Kenya Hara's book, Lars Müller Publishers]. https://www.muji.us/products/designing-design
[9] Wikipedia contributors. (n.d.). *Dieter Rams*. Wikipedia. https://en.wikipedia.org/wiki/Dieter_Rams (secondary source; accessed 2026-10)
[10] Vitsœ. (n.d.). *Dieter Rams: ten principles for good design*. https://www.vitsoe.com/us/about/good-design
[11] Moran, K. (2015, July 12). *The Characteristics of Minimalism in Web Design*. Nielsen Norman Group. https://www.nngroup.com/articles/characteristics-minimalism/
[12] W3C. (2023). *Understanding SC 1.4.3 Contrast (Minimum)* and *Understanding SC 1.4.11 Non-text Contrast* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html ; https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html
[13] W3C. (2023). *Understanding SC 2.3.3 Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[14] Reinecke, K., Yeh, T., Miratrix, L., Mardiko, R., Zhao, Y., Liu, J., & Gajos, K. Z. (2013). *Predicting users' first impressions of website aesthetics with a quantification of perceived visual complexity and colorfulness*. Proceedings of CHI 2013, ACM. https://doi.org/10.1145/2470654.2481281 (PDF: https://www.eecs.harvard.edu/~kgajos/papers/2013/reinecke13aesthetics.pdf)
[15] Moran, K. (2017, September 3). *Flat UI Elements Attract Less Attention and Cause Uncertainty*. Nielsen Norman Group. https://www.nngroup.com/articles/flat-ui-less-attention-cause-uncertainty/
