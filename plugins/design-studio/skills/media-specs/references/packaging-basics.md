# Packaging Basics

> **Scope:** What a graphic designer needs to deliver packaging artwork: panel anatomy, dielines, structural types, shelf impact, GS1 barcodes, regulatory text orientation (EU and US food labeling, recycling marks), packaging print processes, and proofing.
> **Last verified:** 2026-10 (regulatory and GS1 facts checked in 2026-10; recycling-label rules in the EU are in transition, see Section 6)
> **Used by:** print-ooh-designer, creative-director, art-director, color-specialist, typographer, design-critic

**Not legal advice.** Labeling law depends on product category, market, and package size. Use Section 6 for orientation and early layout. Final label copy must be checked by the client's regulatory or legal team against current law. General print rules (bleed, TAC, PDF/X, proofs) are in `print-production.md`, and color management, Pantone, and spot vs. process are in `color` → `color-spaces-and-management.md`.

---

## 1. Anatomy: panels

### US definitions (FDA, food)

| Term | Definition | Source |
|---|---|---|
| **Principal display panel (PDP)** | "The part of a label that is most likely to be displayed, presented, shown, or examined under customary conditions of display for retail sale" | [5] |
| PDP area: rectangular package | Height × width of the side used as the PDP | [5] |
| PDP area: cylinder | 40% of height × circumference | [5] |
| **Information panel** | The part of the label "immediately contiguous and to the right of the principal display panel as observed by an individual facing the principal display panel" | [6] |
| Information panel type size | Letters and numbers not less than 1/16 in (1.6 mm) high, "prominently and conspicuously" | [6] |

The PDP area matters because several US rules (for example, the net-quantity type size) scale with it. Calculate it early.

### EU: same field of vision

EU Regulation 1169/2011 requires the **name of the food, net quantity, and (for drinks over 1.2% alcohol) alcoholic strength** to appear in the **same field of vision**, meaning all visible together without turning the pack [3].

### Carton panel names (working vocabulary)

| Panel | Typical content |
|---|---|
| Front / PDP | Brand, product name, variant, key claim, net quantity (US: bottom area of PDP [unverified detail]) |
| Back | Story, usage, secondary claims |
| Side / information panel | Ingredients, nutrition, allergens, manufacturer, barcode (often) |
| Top / bottom | Batch/date coding area (leave unprinted or light), barcode on small packs |
| Glue flap / tuck flaps / dust flaps | Hidden in the closed box. No critical art; often left unprinted (see Section 2) |

**Apply:** build a **panel map** before designing: list every mandatory item per market, assign it to a panel, and reserve unprinted zones for date/batch coding and the barcode. Then design the PDP.

---

## 2. Dielines

A dieline is the flat technical drawing of the package: cut paths, folds, glue areas, bleeds, and safe zones. It comes from the converter (box maker) or a structural CAD system. **Don't draw your own structure in Illustrator.** It is an artwork tool, and cutting tables work from the converter's CAD file [11].

### Line conventions

Conventions vary by converter. The legend on *their* dieline wins. A common scheme [11]:

| Line | Common style | Meaning |
|---|---|---|
| Cut / trim | Solid black | Die cuts through |
| Fold / crease | Solid red (others use dashed) | Creasing rule; folds here |
| Perforation | Black dotted or dashed | Tear line |
| Bleed | Solid green | Extend art to here |
| Safety | Green dotted | Keep text and logos inside |
| Glue area | Green criss-cross | Adhesive goes here |

### Setting up the file

1. **Get the converter's dieline** (AI/PDF/DXF from ArtiosCAD or similar) for the exact board caliper. Never rescale it. A dieline is drawn for one board thickness.
2. **Layers** (top to bottom): `Dieline` (locked), `Finishes` (varnish, foil, spot UV, white), `Text`, `Art`, `Background`.
3. Make each dieline line type a **spot color swatch** named as the converter asks (e.g., "Die", "Crease", "Glue"). Set them to **overprint** so they never knock out art, and confirm they're excluded from the printing plates.
4. **Bleed:** extend backgrounds about 3 mm (0.125 in) past the cut line [11]. Use more if the converter asks.
5. **Safety:** keep text and logos inside the safety line [11]. On folding cartons, also keep them away from crease lines. A fold through a letter cracks the ink and distorts it.
6. **Glue areas and coding zones:** keep them free of ink and varnish when the converter asks. Varnish can stop adhesive from bonding [unverified as a universal rule; it's common converter practice, so ask].
7. **Orientation check:** draw arrows or "TOP" labels on the dieline layer, and fold a printout to confirm which way each panel reads when assembled.
8. Export as a vector PDF (AI if requested) in CMYK plus named spots [11]. Keep the dieline as a separate, non-printing spot.

**Common dieline mistakes:** text across a fold, art short of the bleed line (white edges after cutting), critical copy outside the safety line, and treating a draft dieline as final. Expect revision rounds before the die is made [11].

---

## 3. Structural types (brief)

| Type | What it is | Design notes |
|---|---|---|
| Folding carton (paperboard) | Tuck-end, reverse tuck, straight tuck, auto-lock (crash-lock) bottom, sleeve | Most retail cartons. Grain direction affects panel bowing; ask the converter |
| Rigid / set-up box | Board wrapped in printed paper; lid and base | Premium. The wrap paper has turn-ins: art must wrap the board edge |
| Corrugated | Shipping cases (regular slotted case), e-commerce mailers, retail-ready trays | Often flexo printed; coarse screens; postprint vs. preprint quality differs |
| Flexible | Pouches, flow wrap, sachets | Printed reverse on clear film with white backing (Section 7); seals and gussets eat art |
| Labels | Wrap-around, front/back, shrink sleeves | Shrink sleeves need distortion-compensated art from the converter |
| Rigid containers | Bottles, jars, tubes, cans | Curvature: keep barcodes and text away from strong curves (Section 5) |

---

## 4. Shelf impact and the "3-second" claim

**Claim:** "Packaging has 3 seconds (or 2–3 seconds) to win the shopper." **[E3]**

| Evidence | What it says | Source |
|---|---|---|
| Franken (2020), eye-tracking paper | States packaging "has between 2 and 3 seconds to convince the buyer" but gives no primary source. In one of its own measurements, time to first fixation averaged 0.61 s (small lab/in-store study, Tobii X120) | [13] |
| Chandon, Hutchinson & Young (2001), commercial eye-tracking (Perception Research Services) data | Shoppers looked at an average of 10.8 juice packs in 25.1 s (median 17.1 s) and 7.1 detergent packs in 18.0 s. The average pack was noted by about two-thirds of shoppers. Earlier in-store studies cited: 13 s per detergent/shampoo decision, 9 s of it on the chosen product. Looking at a brand raised its consideration probability by 30–120% | [12] **[E2]** (large commercial data set; working-paper version opened here) |

**Corrected reading:** the "3 seconds" figure is a popular shorthand without a traceable original study. The solid finding is that whole category decisions often take only about 10–25 seconds spread across many packs, and a pack that is never fixated is rarely considered [12]. So the job is: **be found fast, be recognized at a glance, then reward a closer look.**

**Apply: shelf-impact checklist**
1. **Brand block:** a consistent color/shape block across the range so the brand reads as one mass on shelf.
2. **One hero element** on the PDP (product name or image) readable from about 1–2 m [distance is practitioner convention, unverified].
3. **Variant coding:** one variable (color band, icon) differentiates flavors. Don't redesign each SKU.
4. **Test in context:** mock up a shelf with real competitor packs (photo or physical), view at shelf distance, and squint or blur the image to check the brand block and variant reads.
5. **Facings:** check how the design tiles when several facings sit side by side. Edges should join or separate on purpose.

Attention and scanning theory: `cognitive-psychology` → `attention-and-scanning.md`. Color meaning: `cognitive-psychology` → `color-psychology.md`.

---

## 5. Barcodes (GS1 EAN-13 / UPC-A)

### Sizes

The X-dimension is the width of the narrowest bar. Nominal size (100% magnification) has X = 0.33 mm. The allowed range for retail point-of-sale is 80%–200% (X = 0.26–0.66 mm) [1].

| Magnification (X) | Bar-to-bar width | Width incl. quiet zones | Minimum bar height |
|---|---|---|---|
| 80% (0.26 mm) | 25.08 mm | 29.83 mm | 18.29 mm |
| 90% (0.30 mm) | 28.22 mm | 33.56 mm | 20.57 mm |
| **100% (0.33 mm)** | **31.35 mm** | **37.29 mm** | **22.86 mm** |
| 120% (0.40 mm) | 37.62 mm | 44.75 mm | 27.43 mm |
| 160% (0.53 mm) | 50.16 mm | 59.66 mm | 36.58 mm |
| 200% (0.66 mm) | 62.70 mm | 74.58 mm | 45.72 mm |

Source: GS1 Canada EAN/UPC Symbol Reference [1]. GS1 Sweden gives the same X range: minimum 0.264, recommended 0.330, maximum 0.660 mm [2].

| Rule | Value | Source |
|---|---|---|
| Quiet zones, EAN-13 | ≥ 11 X left, ≥ 7 X right | [2] |
| Quiet zones, UPC-A | ≥ 9 X each side [unverified: reported from GS1 General Specifications via a search summary; the GS1 PDF could not be opened] | — |
| Height | Never below the minimum for the magnification used. **Truncation** (cutting bar height) fails certification | [1] |
| Automated logistics (cases) | 150%–200% recommended | [1] |
| On-demand thermal printing | 75% minimum allowed, with the 80% height and quiet zone | [1] |
| Human-readable digits | Below the bars, all digits; OCR-B recommended, 2.75 mm high at 100% | [1] |

### Colors and printing

- **Best:** black bars on a white background [1].
- **Never use red-spectrum colors for bars.** Scanners read with red light, so red, orange, and warm bars look like background [1]. By the same logic, red, yellow, and orange backgrounds work while red bars don't.
- Background must be uniform, without texture or pattern [1]. No bars over gradients or images.
- Print bars in a **single ink** (100K or a dark spot). Never build them from four-color process, because misregistration destroys bar widths.
- Flexo and other processes with dot gain need **bar width reduction**, set by the printer or converter. Supply the barcode as vector at 100% bar widths unless told otherwise [unverified detail; standard practice, so ask].

### Placement

| Rule | Source |
|---|---|
| On packs with any side under 25 mm, place the symbol on the bottom-right of the back | [2] |
| Height may be reduced only if the largest printable area is smaller than the smallest symbol needs (and then it's not a standard symbol) | [2] |
| Avoid folds, seams, edges, and strong curves; on cylinders, orient bars so curvature doesn't distort them [unverified detail; GS1 General Specifications has placement rules, ask the converter] | — |

**Apply:** get the GTIN from the client (issued by their GS1 member organization). Generate the symbol with certified software at the target magnification. Then have a printed proof **verified** (graded with a barcode verifier), not just scanned with a phone.

QR codes on pack: minimum 32 × 32 mm (26 mm covers about 90% of phones), 4-module quiet zone, dark on light solid background [14].

---

## 6. Regulatory text: orientation only

### EU: Food Information to Consumers (Regulation (EU) No 1169/2011), verified 2026-10

| Rule | Value | Source |
|---|---|---|
| Minimum font size for mandatory particulars | **x-height ≥ 1.2 mm** | Art. 13(2) [3] |
| Packages whose largest surface is < 80 cm² | x-height ≥ **0.9 mm** | Art. 13(3) [3] |
| Packages whose largest surface is < 10 cm² | Only name, allergens, net quantity, and date marking are mandatory on pack; ingredients provided by other means or on request | Art. 16(2) [3] |
| Same field of vision | Name, net quantity, alcoholic strength (if > 1.2% vol) | Art. 13(5) [3] |
| Mandatory particulars | Twelve items, Art. 9(1)(a)–(l): name, ingredients, allergens, quantity of certain ingredients, net quantity, date of minimum durability / use-by, storage/use conditions, operator name/address, origin where required, instructions where needed, alcohol strength, nutrition declaration | Art. 9(1) [3] |
| Allergen emphasis | Allergens in the ingredients list emphasized by a typeset that clearly distinguishes them (e.g., font, style, or background color) | Art. 21(1)(b) [3] |

**x-height → point size (for planning):** point size ≈ x-height (mm) ÷ the font's x-height ratio ÷ 0.3528. With an x-height ratio of 0.50, 1.2 mm ≈ 6.8 pt and 0.9 mm ≈ 5.1 pt. With 0.55, it's ≈ 6.2 pt and 4.6 pt. **Measure the real font's x-height.** Large-x-height faces meet the rule at smaller point sizes. Typeface choice for small text: `typography` → `legibility-by-medium.md`.

### US: FDA Nutrition Facts (21 CFR 101.9), verified 2026-10

| Rule | Value | Source |
|---|---|---|
| Format | Boxed with hairlines; all black or one color type on white or neutral contrasting background "whenever practical"; a single easy-to-read type style; upper and lower case | (d)(1) [4] |
| Leading | At least 1 point between lines (more for some sections); "letters should never touch" | (d)(1) [4] |
| Nutrient listing type | ≥ 8 pt | (d)(1)(iii) [4] |
| "Calories" | Bold or extra bold, ≥ 16 pt | (d)(1)(iii) [4] |
| Calorie number | ≥ 22 pt | (d)(1)(iii) [4] |
| Certain headings/footnote | Some elements may be ≥ 6 pt | (d)(1)(iii) [4] |
| "Nutrition Facts" heading | Largest type in the label except the calorie number | (d)(2) [4] |
| Highlighting | Key headings bold; "reverse printing is not permitted as a form of highlighting" | (d)(1)(iv) [4] |
| Packages < 12 sq in labeling surface | Exempt if no nutrition claims, but must give an address or phone number for nutrition information; if a label is used, ≥ 6 pt or all-caps ≥ 1/16 in | (j)(13)(i) [4] |
| Packages with ≤ 40 sq in labeling surface | Tabular or (if needed) linear display, abbreviations, any panel allowed | (j)(13)(ii) [4] |

**Use FDA's sample labels or the client's regulatory template** for the exact layout (hairline weights, indents, bars). Don't redraw it from memory. Net-quantity placement and minimum type heights (21 CFR 101.105) could not be opened in this pass [unverified].

### Recycling and sorting marks

| Market | Status (verified 2026-10) | Source |
|---|---|---|
| **EU (PPWR, Regulation (EU) 2025/40, Art. 12)** | A harmonized, pictogram-based label on material composition will be mandatory from **12 August 2028 or 24 months after the implementing acts enter into force, whichever is later**. The Commission missed its 12 August 2026 deadline to adopt those acts, so the final label design isn't published yet | [9][10] |
| EU, reusable packaging label | From 12 February 2029 at the earliest, with a QR code or other data carrier | [10] |
| EU, misleading marks | Once harmonized labels apply, labels likely to mislead about sortability or recyclability are prohibited; full harmonization means national sorting labels can't be kept (deposit-return excepted) | [9][10] |
| EU, until then | National rules apply (e.g., France's Triman/Info-tri are mandatory under French law). Germany's Green Dot has not been mandatory since 2009 | [10] |
| **US (FTC Green Guides, 16 CFR 260.12)** | Unqualified "recyclable" claims require recycling facilities available to a "substantial majority" (at least 60%) of consumers where the item is sold; otherwise qualify the claim | [7] |
| US, resin identification code (RIC) | A conspicuous RIC counts as a recyclable claim. An RIC placed inconspicuously, "without more," doesn't | [7] |
| US, Green Guides review | FTC requested comment in December 2022 and held a recyclable-claims workshop in May 2023. The FTC page lists no revised Guides as of 2026-10; the 2012 Guides remain current | [8] |

**Apply:** reserve space for the sorting label on the back or base. Don't use chasing-arrows or recyclable claims as decoration. In the EU from 2028, plan to swap national marks for the harmonized pictogram, and keep that area flexible in the master artwork.

---

## 7. Print processes for packaging

| Process | Typical packaging use | Design implications | Source |
|---|---|---|---|
| **Flexography** | Flexible films, labels, corrugated, cartons; prints on plastic, metallic films, cellophane, paper | Higher dot gain; small dots hard to hold, so avoid very light vignettes that fade to 0%; minimum type and line sizes per printer; FIRST (FTA) is the US best-practice spec | [16][18] |
| **Offset lithography** | Folding cartons, labels on sheet stock | Fine detail and photo quality; needs flat substrates | [15] |
| **Gravure** | Very long runs of flexible packaging | Highest consistency at volume; cylinder cost | [15] |
| **Digital (inkjet / toner)** | Short runs, prototypes, seasonal or personalized SKUs | No plates; ideal for test markets and mockups | [15] |
| **Screen** | Glass, ceramics, and other non-flat containers | Opaque inks; few colors | [15] |

Process-control standards: ISO 12647-2 (offset) and ISO 12647-6 (flexo) [17].

### Spot colors

Brand colors on packs are usually Pantone spots: consistent across suppliers and substrates. Choosing spots, C vs. U references, and converting to CMYK are covered in `color` → `color-spaces-and-management.md` §8. Packaging-specific rules:
- Name every spot exactly (one swatch per ink; no duplicate names).
- Specify the substrate. The same Pantone looks different on white board, kraft, film, and metal, so get a drawdown or proof on the real material.
- Count inks (stations). Flexo and gravure presses have a fixed number of stations, and the converter quotes per color.

### White ink on clear or metallic substrates

On clear film, metallized film, foil board, or kraft, colors print without a white base unless a **white ink** layer is added. Without it, colors go transparent, dark, or metallic-tinted. Standard practice [unverified in a primary spec this pass; confirm with the converter]:
1. Create a spot swatch named as the converter specifies (e.g., "White" or "Opaque White"). Set its objects to **overprint**. In the layout preview, display it as a visible tint (e.g., light cyan) so you can see it.
2. Put white **under** every area that should look opaque or true-colored. Leave it off where the clear window or metallic effect should show.
3. The converter usually **chokes** the white slightly inside the color edges so it doesn't peek out with misregistration. Ask whether they want you to do it or their prepress will.
4. On reverse-printed film (printed on the inside), the print order is reversed: colors first, white last. The converter handles sequence, but your separations must be clean.

---

## 8. Mockups and proofing

| Step | Purpose |
|---|---|
| **Structural sample** (plain white, plotter-cut from the dieline) | Confirms fit, panel orientation, and closure before artwork is final |
| **Printed comp on a digital press**, cut and assembled | Checks hierarchy, legibility, panel flow, and shelf impact in the hand and on a shelf |
| **3D render / mockup** | Presentation and e-commerce imagery. Never a substitute for a physical comp for legibility or color |
| **Contract proof** on or simulating the real substrate (ISO 12647-7 for off-press proofs) | Color approval [17]; see `print-production.md` §11 |
| **Barcode verification** of a printed proof | Grades the symbol; scanning with a phone is not verification |
| **Press check / first-article approval** | Brand-critical runs; compare against the approved proof |

---

## Common mistakes

| Mistake | Consequence | Fix |
|---|---|---|
| Drawing the box structure yourself, or rescaling the converter's dieline | Panels don't fit; die unusable | Use the converter's dieline for the exact board [11] |
| Text across folds or outside safety lines | Cracked, distorted, or trimmed text | Keep copy inside safety, off creases [11] |
| Art short of the bleed | White edges after die-cutting | Extend to the bleed line (~3 mm) [11] |
| Red or orange barcode bars, bars over gradients, four-color barcodes | Barcode doesn't scan | Single dark ink on a light, uniform background [1] |
| Truncated barcode height or crowded quiet zones | Fails certification; retailer chargebacks | Follow the GS1 table; ≥ 11X/7X quiet zones (EAN-13) [1][2] |
| Barcode across a fold, seam, or tight curve | Distorted or unreadable symbol | Flat panel; GS1 placement rules [2] |
| Mandatory text below 1.2 mm x-height (EU) or under the FDA minimums | Non-compliant label; reprint | Check x-height of the actual font [3][4] |
| Reverse (knockout) type used to highlight in Nutrition Facts | Non-compliant | Bold, not reverse [4] |
| Missing white underlay on film or metallic | Colors look transparent or dirty | Add a white spot plate, overprint, choked [unverified details; ask the converter] |
| Recyclable claims or chasing arrows used as decoration | Misleading-claim risk (US FTC; EU PPWR from 2028) | Only qualified, substantiated claims [7][9][10] |
| Designing each SKU differently | Weak brand block; slow variant finding | One system, one variant variable (Section 4) |
| Approving color from a 3D render | Color surprise on substrate | Contract proof on the real material [17] |

---

## Sources

[1] GS1 Canada. (2018). *EAN/UPC Symbol Reference*. https://www.gs1ca.org/gs1ca-components/documents/EAN-UPC-Symbol-Reference.pdf
[2] GS1 Sweden. (2026). *Size guide*. https://gs1.se/en/guides/how-to-guides/size-guide/
[3] European Parliament and Council. (2011). *Regulation (EU) No 1169/2011 on the provision of food information to consumers* (Arts. 9, 13, 16, 21). EUR-Lex. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32011R1169
[4] U.S. Food and Drug Administration. *21 CFR 101.9: Nutrition labeling of food*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/21/101.9
[5] U.S. Food and Drug Administration. *21 CFR 101.1: Principal display panel of package form food*. Legal Information Institute. https://www.law.cornell.edu/cfr/text/21/101.1
[6] U.S. Food and Drug Administration. *21 CFR 101.2: Information panel of package form food*. Legal Information Institute. https://www.law.cornell.edu/cfr/text/21/101.2
[7] Federal Trade Commission. *16 CFR 260.12: Recyclable claims* (Green Guides). Legal Information Institute. https://www.law.cornell.edu/cfr/text/16/260.12
[8] Federal Trade Commission. (2026). *Green Guides* (topic page; review timeline 2022–2023). https://www.ftc.gov/news-events/topics/truth-advertising/green-guides
[9] Envirotec Magazine. (2026, August 19). *EU misses deadline for PPWR labelling rules*. https://envirotecmagazine.com/2026/08/19/eu-misses-deadline-for-ppwr-labelling-rules/
[10] Complydex. (2026, July 17). *PPWR Labelling (Article 12): What Goes on the Packaging, and When* (secondary summary of Regulation (EU) 2025/40). https://complydex.com/en/blog/ppwr-labelling-requirements-article-12
[11] Chan, C. (2023, February 21). *What is a Dieline in Packaging & Print?* PakFactory. https://www.pakfactory.com/blog/what-is-a-dieline/
[12] Chandon, P., Hutchinson, J. W., & Young, S. H. (2001). *Measuring the Value of Point-of-Purchase Marketing with Commercial Eye-Tracking Data* (Working Paper 2001/19/MKT). INSEAD. https://flora.insead.edu/fichiersti_wp/inseadwp2001/2001-19.pdf
[13] Franken, G. (2020). Packaging design and testing by eye tracking. *Proceedings of GRID 2020*, University of Novi Sad. https://doi.org/10.24867/GRID-2020-p38 (PDF: https://www.grid.uns.ac.rs/symposium/download/2020/38.pdf)
[14] Leurs, L. (n.d.). *QR code*. Prepressure.com. https://www.prepressure.com/library/technology/qr-code
[15] Leurs, L. (n.d.). *Printing processes*. Prepressure.com. https://www.prepressure.com/printing/processes
[16] Wikipedia contributors. (2026). *Flexography* (secondary source). Wikipedia. https://en.wikipedia.org/wiki/Flexography
[17] Leurs, L. (n.d.). *ISO 12647*. Prepressure.com printing dictionary. https://www.prepressure.com/printing-dictionary/i/iso-12647
[18] Flexographic Technical Association. (2026). *What is FIRST?* https://www.flexography.org/what-is-first/
