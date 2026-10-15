# Retro Print / Risograph

> **Scope:** The look of low-run analog printing (risograph, photocopy, halftone, zine), with flat spot colors, overprint, misregistration and grain, both as real print production and as a digital style, with tokens to build it.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Riso Kagaku.** Founder Noboru Hayama started a mimeograph printing service, RISO-SHA, in Setagaya, Tokyo, in September 1946; the company was incorporated in 1955. "Riso" means "ideals" in Japanese (理想) [1][2]. Its RISO-GRAPH mimeograph device launched in December 1958 [1]. Riso's consumer Print Gocco (1977) let people print their own New Year's cards and sold over ten million units before being retired in 2008 [2].
- **The Risograph duplicator.** Riso Kagaku launched the first RISOGRAPH-brand products in Japan in June 1980: a separate master-making device and printer (RISOGRAPH FX7200 and AP7200) [11]. They developed into a single device that both makes the master stencil and prints, which lowers costs [2]. The full-auto RISOGRAPH 007 followed in August 1984, and the digital RISOGRAPH 007 DIGITAL in August 1986 (Japan release dates) [11]. How it works: thermal heads burn microscopic holes in a master, the master wraps around an ink drum, and ink is forced through onto paper that passes flat; inks are soy-based, so paper must be uncoated [3]. Each drum carries one color; two-drum models (e.g., MZ series) print two colors per pass [3][4].
- **Institutional tool turned art medium.** In Japan the machine is still mainly a cheap printer for schools, hospitals and government offices, reportedly around 90% of use [2]. Artists adopted it in the 2010s, especially for zines and comics [3], valuing its analog look, low cost and hackability (custom inks in older machines) [2]. Contemporary examples include Tokyo studios Hand Saw Press, Slogan, and Kokuyo's Copy Corner in Harajuku (opened 2024) [2].
- **Older lineage this style borrows from.**
  - *Halftone*: William Fox Talbot proposed "photographic screens or veils" in 1852; Frederic Ives patented the first commercially successful method in 1881 and Georg Meisenbach the "autotype" in 1882 [5]. Newspaper offset on newsprint runs around 85 lpi, which gives the visible coarse dot [5].
  - *Zines*: *The Comet* (1930) is often cited as the first science fiction fanzine; Mark Perry's photocopied punk zine *Sniffin' Glue* began in 1976; *Bikini Kill* zine published the Riot Grrrl Manifesto in 1990. Photocopying made self-publishing cheap, and zine graphics drew on Dada, Fluxus, Surrealism and Situationism [6].
- **Why it's popular now.** It offers tactility and visible process as a counterweight to frictionless digital polish; it signals independence, craft and a small-batch community. Digitally, designers simulate it with grain, limited palettes and offset layers.

## Visual DNA

- Limited spot palette: 2-3 inks, often including a fluorescent (pink, orange) plus a blue or teal; no full-color photography.
- Translucent overprint: overlapping inks mix into a third color (pink over blue becomes purple) [4].
- Misregistration: color layers visibly offset; white gaps or color fringes at edges [4].
- Halftone and grain: coarse dots, stochastic grain, uneven solid fills (riso solids show texture, and heavy coverage floods) [4].
- Uncoated paper look: warm off-white or colored stock, slight ink bleed, soft edges.
- Flat illustration, often hand-drawn, with bold silhouettes; collage and cut-paper elements.
- Type: grotesks with character, typewriter and mono faces, chunky display serifs, hand lettering; tight, poster-like layouts.
- Imperfection as proof of process: roller marks, ink density variation.

## Token recipe

Ink hex values are the RGB approximations published by SAIC's Service Bureau with nearest Pantone references [4]. Riso inks are not Pantone-matched, and fluorescents exceed sRGB, so screen values are approximations. Contrast is measured against `--paper` #F7F3EA.

| Category | Token / value |
|---|---|
| **Typography: display** | Characterful grotesk or display serif: Space Grotesk, Archivo Black/Expanded, Cooper-style soft serifs, Recoleta, PP Editorial-type serifs; typewriter faces (Courier Prime, IBM Plex Mono) for captions. Weight 700-900 for display; letter-spacing -0.02em (tight, poster-like). |
| **Typography: body** | Sturdy sans or mono 400-500 (IBM Plex Sans/Mono, Space Mono). Keep body text in a single ink layer, never split across layers [4]. |
| **Type scale** | 1.414 (augmented fourth) to 1.5 for posters and landing pages; 1.25 for app UI. |
| **Color: paper** | `--paper` #F7F3EA = oklch(96.5% 0.013 87); colored stock alternates: pale pink, butter, light blue (use as bg, not printed solids [4]). |
| **Color: key ink (text-safe)** | `--ink-black` #1A1A1A (15.7:1); `--ink-purple` #5D5580 (PMS 275 U approx.) = oklch(47.5% 0.069 292) (6.2:1); `--ink-burgundy` #914E72 (PMS 235 U approx.) = oklch(51.6% 0.101 348) (5.4:1). |
| **Color: spot inks (large text / graphics only)** | `--ink-blue` #0075BF (PMS 3005 U approx.) = oklch(54.7% 0.144 247) (**4.4:1**, just under AA for body); `--ink-fl-pink` #FF48B0 (PMS 806 U approx.) = oklch(69.3% 0.236 350) (2.8:1); `--ink-bright-red` #F15060 (PMS 185 U approx.) (3.1:1); `--ink-teal` #009DA5 (PMS 320 U approx.) (3.0:1); `--ink-green` #00A75C (PMS 354 U approx.) (2.8:1); `--ink-flo-orange` #FF7477 (PMS 805 U approx.) (2.4:1); `--ink-sunflower` #FFB511 (PMS 116 U approx.) (1.6:1); `--ink-yellow` #FFE800 (1.1:1, never for text) [4]. |
| **Color: structure** | Pick 2 inks (3 max): one dark "key" ink for text, one bright fluorescent for impact. Overlaps create the third color via `mix-blend-mode: multiply` [7]. |
| **Radius** | 0px for print-like blocks; or fully irregular hand-cut shapes. Avoid mid radii (8-16px), which read as app UI, not print. |
| **Borders** | 2-3px solid key ink, slightly offset duplicate border in the second ink (misregistration). |
| **Shadows / elevation** | No blurred shadows. Hard offset "print" shadow: `4px 4px 0 var(--ink-fl-pink)`; elevation expressed by offset distance (2/4/6px). |
| **Spacing / grid** | 8px base; tight poster grids with deliberate overlaps; 12-col web grid with elements breaking columns. Keep 9-10mm (3/8") margins in real print: riso cannot print to the edge [4]. |
| **Imagery & iconography** | Photos converted to 1-bit or coarse halftone (round dots, 30-60 lpi visual equivalent) in a single ink; duotone using two inks. Icons: bold filled or thick-stroke (2-3px), slightly rough edges. |
| **Motion** | Stepped and tactile: `steps(3)`-`steps(6)` "boiling" line or frame-by-frame swaps at 8-12fps; layer slide-in 200-300ms `cubic-bezier(0.2, 0.8, 0.2, 1)`; misregistration "wobble" of 1-2px on hover only. Respect `prefers-reduced-motion` [8]. |
| **Texture / effects** | Grain via SVG `<feTurbulence type="fractalNoise" baseFrequency="0.7-0.9" numOctaves="2-3">` at 6-12% opacity, multiply blend [9][7]; halftone via CSS `radial-gradient` dot patterns masked over images; misregistration: duplicate layer offset `translate(1.5px, -1px)` in the second ink with multiply. |

### Real riso production rules (from a print shop guide [4])

| Rule | Value |
|---|---|
| Files | One grayscale file per ink + a composite; darker gray = more ink. A yellow converted to grayscale prints too light: send full-strength areas as black. |
| Coverage | Aim for about 50% coverage overall; reduce solids to 70-85%; avoid heavy ink at the paper feed edge. |
| Passes | No more than 4 passes (2 with heavy coverage or dark inks). |
| Registration | Misregistration *will* happen: overlap fills under linework (trap); avoid hairline fits between inks. |
| Paper | Uncoated only; soy inks dry by absorption, so prints can smudge with handling. |
| Bleed | Riso can't print to the edge: add ~0.125in / 4mm bleed and crop marks, and print on oversized stock. |
| Metallics | Metallic gold is opaque and always looks printed on top; don't mix it with other inks. |

## Signature examples

| Example | Year | What to take from it |
|---|---|---|
| *Sniffin' Glue* (Mark Perry), photocopied punk zine | 1976 | Raw DIY layout, typewriter + hand lettering [6] |
| Riot Grrrl Manifesto in *Bikini Kill* zine | 1990 | Zine as political medium [6] |
| Print Gocco (Riso Kagaku) | 1977-2008 | Domestic spot-color printing culture in Japan [2] |
| Neo Sora's *HappyEnd* film poster print, risograph | reported Nov 2024 | Riso chosen as the cheapest option that still looked good; proceeds to Gazan families [2] |
| Copy Corner, Harajuku (Kokuyo) | 2024 | Riso-printed objects with local artists; riso as retail experience [2] |
| Hand Saw Press, Tokyo (zine workshops); Slogan, Sangenjaya | current | Community riso studios [2] |

## Fits / Avoid

**Fits:** independent publishing, bookshops, music (gig posters, record sleeves), festivals and cultural events, craft food and drink, design studios, creative education, community and nonprofit campaigns, editorial illustration, merchandise.

**Avoid / adapt:** enterprise and regulated products, where the imperfect look can read as unreliable; luxury where polish is expected; data-heavy UI (grain and offset layers reduce legibility).

**Accessibility risks (medium):**
- Most signature riso inks fail WCAG 1.4.3 as text on paper: fluorescent pink 2.8:1, teal 3.0:1, yellow 1.1:1 (calculated above) [10] [E2]. Set text in black, purple or burgundy; use bright inks for shapes and large display type (3:1 minimum for 18pt+ or 14pt bold [10]).
- Grain and halftone over text reduce effective contrast; background images count toward contrast failures (F83) [10]. Keep texture off text, or below 5% under text.
- Misregistration effects on small text create double edges; apply only to display type at 32px+.
- Fluorescent pink, orange and red inks sit close in hue; check pairs with a color-vision-deficiency simulator and never use ink color as the only means of encoding information.
- Stepped "boiling" animation loops need a static fallback for reduced motion [8] [E2].

**Ages badly when:** the texture is a filter slapped on a generic layout (identical stock grain + pink/blue on every brand). It ages better when the system respects real constraints (2 inks, real overprint logic, real halftone), which can also be printed for real (editorial judgment).

## Across media

| Medium | Translation |
|---|---|
| **App UI** | Use sparingly: riso palette for illustrations, onboarding, empty states, and marketing surfaces; core UI on clean paper background with black/purple text and one ink for actions. No grain on inputs or data. |
| **Website** | Full expression in heroes and section dividers: multiply-blended layers, hard offset shadows, halftone images. Serve grain as a small tiled PNG or a single SVG filter to protect performance. |
| **Social post** | 2-ink poster layout, large type, halftone portrait; carousel can show the "layers" separately as a reveal. Use 8-12% grain; very fine, low-opacity grain tends to be smoothed away by platform compression (practitioner tip). |
| **Print / editorial** | Print it for real when budget allows: follow the production rules table; proof overprint combinations on the actual stock; colored paper beats a printed colored background [4]. For offset/digital simulation, specify fluorescent Pantone spots, since CMYK can't reach fluorescent pink. |
| **Billboard / OOH** | Bold silhouette + fluorescent field + black type reads well at distance; drop fine grain and misregistration (invisible at distance, noise up close). |

## Common mistakes

- Using 5+ "riso" colors: it stops reading as riso and becomes generic flat illustration.
- Setting body text in fluorescent pink or teal on cream.
- Grain at 20%+ opacity over everything, so the page looks dirty and text loses contrast.
- Misregistration on every element, including small UI text.
- Sending real riso files as RGB/CMYK composites instead of one grayscale file per ink [4].
- Large 100% solids in real riso jobs: uneven coverage, roller marks, jams [4].
- Faking overprint with opaque colors instead of multiply, so overlaps don't produce the third color.

## Pairs well with / Related styles

- **Anti-design / ugly** (`anti-design-ugly.md`): shares zine and punk DNA; riso is the more crafted, friendlier side.
- **Memphis** (`memphis.md`): bold flat shapes and patterns translate well to 2-3 ink prints.
- **Organic / biophilic** (`organic-biophilic.md`): paper grain and craft texture, earthier inks.
- **Kinetic typography** (`kinetic-typography.md`): stepped, frame-by-frame type motion.
- **Playful / friendly** (`playful-friendly.md`): fluorescent palette and characters for youth and community brands.
- **Retro-futurism** (`retro-futurism.md`): halftone and limited-ink printing for mid-century futurist pastiche.

## Sources

[1] RISO KAGAKU CORPORATION. (n.d.). *History*. https://www.riso.co.jp/english/company/history/
[2] Masaki, R. (2024, November 26). *The View From Tokyo: the fascinating origins, and triumphant resurgence, of Risograph in Japan*. It's Nice That. https://www.itsnicethat.com/articles/the-view-from-tokyo-risograph-in-japan-print-graphic-design-261124
[3] Wikipedia contributors. (2026). *Risograph*. Wikipedia. https://en.wikipedia.org/wiki/Risograph (secondary source)
[4] SAIC Service Bureau. (2024). *Everything you need to know about Risograph Printing* (EverythingRiso_2024). School of the Art Institute of Chicago. https://sites.saic.edu/servicebureau/wp-content/uploads/sites/20/2025/03/EverythingRiso_2024.pdf
[5] Wikipedia contributors. (2026). *Halftone*. Wikipedia. https://en.wikipedia.org/wiki/Halftone (secondary source)
[6] Wikipedia contributors. (2026). *Zine*. Wikipedia. https://en.wikipedia.org/wiki/Zine (secondary source)
[7] MDN Web Docs. (2026). *mix-blend-mode*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
[8] MDN Web Docs. (2026). *prefers-reduced-motion*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
[9] MDN Web Docs. (2026). *<feTurbulence>*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/feTurbulence
[10] W3C. (2023). *Understanding SC 1.4.3: Contrast (Minimum)* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html
[11] RISO KAGAKU CORPORATION. (n.d.). *History 1975-1988*. https://www.riso.co.jp/english/company/history/s50.html
