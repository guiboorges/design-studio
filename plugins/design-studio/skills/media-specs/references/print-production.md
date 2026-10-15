# Print Production

> **Scope:** Production specs and procedures for commercial print (flyers, posters, brochures, magazines, books, newspapers): paper sizes, bleed and safety, resolution, print color, PDF/X, preflight, paper, binding, finishes, magazine production, proofs, and choosing a printing method.
> **Last verified:** 2026-10 (printer-specific numbers were checked against the cited page in 2026-10; printers change their specs, so always ask for the current house spec)
> **Used by:** print-ooh-designer, editorial-designer, creative-director, color-specialist, typographer, design-critic

Print rule zero: **the printer's spec sheet overrides every number in this file.** Values here are defaults for when no spec exists yet, and for checking that a spec makes sense. ICC profiles, rendering intents, soft proofing, rich-black recipes, spot vs. process, and Pantone are covered in `color` → `color-spaces-and-management.md` (section 8). This file links to that section and does not repeat it. Billboards and transit are in `out-of-home.md`, and packaging is in `packaging-basics.md`.

---

## 0. Quick start: the default spec when the printer has not answered yet

| Setting | Default | Why / source |
|---|---|---|
| Document size | Final trim size (e.g., A4 210 × 297 mm or US Letter 8.5 × 11 in) | Section 1 |
| Bleed | 3 mm (Europe) / 0.125 in (US) on every edge that has ink to the edge; 5 mm for large books or thick stock | [3] |
| Safety margin | ≥ 3–5 mm inside trim for small pieces; ≥ 0.25 in (6 mm) for booklets | [14] |
| Color mode | CMYK in the printer's output profile; spot colors named exactly | Section 4; `color` → `color-spaces-and-management.md` |
| Image resolution | 300 ppi effective at final size (offset, 150–175 lpi); 200 ppi for newsprint | [4][7] |
| Line art (1-bit) | 800 ppi minimum, 1200 ppi preferred | [4] |
| Body text | 100% K only, never rich black, never registration | [6][8] |
| Total ink | Coated sheetfed ≈ 300–340%; uncoated ≈ 260%; newsprint 200–260% (printers disagree; ask) | [5][6][7] |
| Export | PDF/X-4 with output intent, unless the printer asks for X-1a | [10] |
| Marks | Crop marks offset beyond the bleed; no marks inside the bleed | [15] |

---

## 1. Paper sizes

### ISO 216 A and B series, ISO 269 C envelopes

All ISO A and B sizes share a long-to-short side ratio of √2 (≈ 1.414). Halving a sheet across its long side gives the next size with the same proportions. A0 has an area of 1 m² [1] (secondary source; ISO 216 itself is paywalled).

| A series | mm | B series | mm | C envelopes | mm | Fits |
|---|---|---|---|---|---|---|
| A0 | 841 × 1189 | B0 | 1000 × 1414 | | | |
| A1 | 594 × 841 | B1 | 707 × 1000 | | | |
| A2 | 420 × 594 | B2 | 500 × 707 | | | |
| A3 | 297 × 420 | B3 | 353 × 500 | C3 | 324 × 458 | A3 flat |
| A4 | 210 × 297 | B4 | 250 × 353 | C4 | 229 × 324 | A4 flat |
| A5 | 148 × 210 | B5 | 176 × 250 | C5 | 162 × 229 | A4 folded once (A5) |
| A6 | 105 × 148 | B6 | 125 × 176 | C6 | 114 × 162 | A4 folded twice (A6) |
| A7 | 74 × 105 | B7 | 88 × 125 | DL | 110 × 220 | A4 folded in three |
| A8 | 52 × 74 | B8 | 62 × 88 | | | |

Source: [1]. The B series sits between A sizes and is common for posters and books. C envelopes are sized to hold the matching A sheet.

### North American sizes

| Name | Inches | mm | Typical use |
|---|---|---|---|
| Letter | 8.5 × 11 | 216 × 279 | Office, flyers, US magazines (common trim) |
| Legal | 8.5 × 14 | 216 × 356 | Legal documents |
| Tabloid | 11 × 17 | 279 × 432 | Posters, spreads of Letter |
| Ledger | 17 × 11 | 432 × 279 | Same sheet as Tabloid, landscape |

Source: [1].

### Newspapers

| Format | mm | in | Note |
|---|---|---|---|
| Broadsheet | 597 × 749 | 23.5 × 29.5 | Many papers print narrower ("web cut down"), so real broadsheets vary |
| Berliner | 315 × 470 | 12.4 × 18.5 | *The Guardian* printed area during its Berliner years: 287 × 443 mm |
| Tabloid | 280 × 430 | 11 × 17 | Same as US Tabloid sheet |

Source: [2] (secondary source). Newspaper page sizes vary by title and press. Always get the title's mechanical spec (page size, type area, column widths, ad unit sizes).

### Magazines

- No universal magazine size exists. Europe mostly uses A4 (210 × 297 mm) or slightly narrower trims. In the US, 8.5 × 11 in is a stock print-on-demand magazine size (Blurb lists 8.5 × 11 in / 22 × 28 cm) [22].
- Many US consumer titles use slightly smaller trims, such as 8.375 × 10.875 in or 8 × 10.875 in [unverified: not confirmed against a publisher's mechanical spec in this pass]. For an ad or editorial page, always work from the title's current **mechanical specifications**: trim, bleed, live area, and gutter safety for spreads.

**Apply**
- Work at final trim size, never at "A4 plus bleed". Add bleed in the document setup so the trim box and bleed box are correct in the PDF [9].
- For international jobs, design a master that fits both A4 and Letter live areas. The intersection is 210 × 279 mm, so keep critical content inside it.

---

## 2. Bleed, trim, and safety

**Rule:** Anything that touches the trim edge extends past it by the bleed. Anything that must not be cut sits inside the safety margin.

| Zone | Value | Source |
|---|---|---|
| Bleed (standard) | 3 mm or 1/8 in (0.125 in) | [3] |
| Bleed (large books, thick paper, many sections) | 5 mm | [3] |
| Bleed (perfect-bound books) | ≥ 4 mm (0.125 in) at trim | [15] |
| Bleed (some magazine printers) | 1/4 in (6 mm) for saddle-stitched and perfect-bound titles | [7] |
| Safety (booklets) | ≥ 0.25 in (6 mm) inside trim for folios, page numbers, live text | [14] |

**Procedure**
1. Set the bleed in the document setup, not by enlarging the page.
2. Extend backgrounds and images to the bleed line, and no further. Extra image area bloats files and complicates prepress [3].
3. Keep text, logos, and folios inside the safety margin. Watch for rules and image edges running parallel to the trim near the margin. A 1 mm trim drift makes them look crooked [14].
4. Export with "use document bleed settings" and crop marks offset beyond the bleed [15].
5. Missing bleed and no source file: scale the page to about 101% so the content runs past the trim. This is a last resort, and it slightly enlarges everything [3].

**Limit:** Frames and borders close to the trim reveal any trim variation. Either keep borders well inside the safety margin or bleed them off.

---

## 3. Resolution

### Rules

- **Effective resolution** is pixels divided by printed inches: `effective ppi = pixel width / printed width in inches`. A 3000-pixel-wide image at 300 ppi prints 10 in wide [4].
- **Scaling changes effective ppi:** `effective ppi = native ppi × 100 / scale %`. A 300 ppi image placed at 150% has 200 effective ppi. Layout apps show "effective ppi" in the link info. Check that number, not the image's header.
- **Halftone rule:** image ppi ≈ 2 × the line screen (lpi). Magazines print at 150–175 lpi, so 300 ppi is the target. 220–250 ppi is usually still acceptable (≈ 1.5 × lpi) [4].

| Output | Typical line screen | Target effective ppi | Source |
|---|---|---|---|
| Magazine / commercial offset | 150–175 lpi | 300 (220–250 acceptable) | [4] |
| Art books, critical detail | — | up to 400 | [4] |
| Newspaper (coldset) | 100 lpi | 200–250 | [4][7] |
| Line art / 1-bit logos, text as image | — | 800 minimum, 1200–2400 preferred | [4] |
| Large-format posters seen at a distance | — | 100–150 at full size is common [unverified] | — |
| Billboards | — | ~30 at full size; see `out-of-home.md` | [4] |

**Apply**
- Never upsample to "fix" a low-resolution image. That adds pixels, not detail. Find a larger original, place it smaller, or redesign.
- Vector (logos, type, icons) is resolution-independent. Keep it vector in the PDF. Don't rasterize type.
- Photos from the web are usually 72–150 effective ppi at the size you want. Check before you build a layout around them.

---

## 4. Color for print

Profiles, the TAC of each standard profile, rendering intents, soft proofing, rich-black recipes, and spot vs. process all live in `color` → `color-spaces-and-management.md` §8. Use that file to pick the output profile. Below are the production rules that file does not cover.

### Total area coverage (TAC / TIC)

TAC is "the total build-up of ink on a given spot on the paper" [12], the sum of C+M+Y+K percentages. Above the limit, ink does not dry, sets off onto the next sheet, or smears.

| Process / stock | Prepressure "industry averages" [5] | 4OVER4 guide [6] | Gazette Press spec [7] |
|---|---|---|---|
| Sheetfed offset, coated | 320–340% | 300% (320% "at a push") | 350% |
| Heatset web (magazines) | 300–320% | — | — |
| SWOP (US publication) | 300% | — | — |
| Uncoated | — | ≈ 260% | — |
| Non-heatset web, newspapers | 240–260% | 240% or less | 200% |
| Inkjet / copiers | ≈ 300–350% (little data) | — | — |

**The sources disagree by up to 60 points.** Use the printer's number. When none exists, use the TAC built into the profile you convert to (the profile's separation enforces it). In Acrobat, check with Output Preview → Total Area Coverage.

### Black

| Element | Build | Why |
|---|---|---|
| Body text, small type, thin rules | 0/0/0/100 (100K) | Single plate, no misregistration fringe [6][8] |
| Large solid black areas (≥ about 5 mm), display type above ~24 pt | Rich black (recipes in the color file) | 100K alone prints as dark gray in large areas [6][8] |
| Crop/registration marks only | 100/100/100/100 | 400% coverage. Never in artwork [6][8] |
| Newsprint text | 100K; rich black not allowed on any text (Gazette Press) | [7] |

Never use Photoshop's "Fill with Black" at 100% of every channel for artwork [8].

### Overprint and knockout

- **Overprint:** an object prints on top of the colors under it instead of knocking a hole in them [12].
- **Rule:** small 100K text and thin black rules should overprint, so a slight misregistration doesn't leave a white halo. Colored type, white objects, and light colors must **not** overprint. White set to overprint disappears, and light colors mix with the background.
- **Check:** turn on Overprint Preview (InDesign/Illustrator/Acrobat) before export. Accidental overprint on a colored or white object is a top cause of reprints.

### Trapping

- Trapping "minimizes the effects of misregistration in print" by slightly spreading or choking adjacent colors [12].
- **Apply:** let the printer's RIP trap. Don't build manual traps unless the printer asks (common for screen printing, flexo, and packaging). Help the RIP by avoiding hairline gaps between colors and tiny reversed type in four-color builds.

### Minimum sizes and tints

| Item | Guidance | Source |
|---|---|---|
| Tints | Avoid tints under ~5% or over ~95%: they disappear or fill in | [6] |
| Highlight / shadow (newsprint) | 2% minimum highlight, 95% maximum shadow | [7] |
| Highlight / shadow (coated sheetfed) | 3% minimum, 97% maximum | [7] |
| Colored text built from several inks (newsprint) | ≥ 14 pt sans, ≥ 18 pt serif | [7] |
| Reversed (knockout) type, single-color screen (newsprint) | ≥ 12 pt | [7] |
| Reversed type, multi-color build (newsprint) | ≥ 14 pt sans, ≥ 18 pt serif | [7] |

For coated sheetfed work, small reversed type can go smaller, but keep serifs and hairlines robust. Reverse out of one dominant ink where possible. For legibility of type by medium, see `typography` → `legibility-by-medium.md`.

---

## 5. PDF/X: which to export

PDF/X is a family of ISO 15930 subsets of PDF for print exchange. Every PDF/X file must embed fonts and carry an **output intent**: an ICC profile or a registered condition such as FOGRA39 or CGATS TR 001 [9][10][11].

| Standard | ISO | Color allowed | Transparency / layers | Use when |
|---|---|---|---|---|
| **PDF/X-1a** | 15930-1 (2001), 15930-4 (2003) | Gray, CMYK, named spot only. No RGB or Lab [9] | X-1a:2003 must not contain transparency (flattened) [9] | The printer or publication ad portal requires it; legacy RIPs |
| **PDF/X-3** | 15930-3 (2002), 15930-6 (2003) | Adds color-managed RGB and Lab with ICC [11] | No live transparency (PDF 1.3/1.4 base) [11] | Rarely chosen now; superseded by X-4 |
| **PDF/X-4** | 15930-7 (2008; 2010 2nd ed.) | Gray, CMYK, spot, RGB, Lab, ICC-based; 8- or 16-bit images [10] | Live transparency and layers (optional content) allowed [10] | **Default for modern workflows.** The GWG 2015 specs are based on X-4 [10] |
| PDF/X-5 | 15930-8 | As X-4 | As X-4 | Derived from X-4, allows external references [10] |
| PDF/X-6 | 15930-9 (2020) | Based on PDF 2.0 [11] | — | Only when the printer explicitly supports it [support level unverified] |

**Decision procedure**
1. Printer spec says X-1a → export X-1a with the printer's profile as the output intent. Transparency gets flattened. Preview the flattener for stitching or white lines in shadows.
2. No spec, or "X-4 welcome" → export X-4 with the target CMYK profile as the output intent. Convert to destination (preserve numbers) unless the printer runs a color-managed RGB workflow.
3. Validity is not quality. PDF/X does not enforce minimum image resolution, so a valid file can still print badly [10]. For stricter rules, printers use the Ghent Workgroup (GWG) specifications [10].

---

## 6. Preflight checklist

Run it in the layout app (live preflight), then again on the exported PDF (Acrobat Preflight, or the printer's online check) [10].

| # | Check | Pass condition |
|---|---|---|
| 1 | Trim size and page count | Match the order; booklet page count is a multiple of 4 (Section 8) |
| 2 | Bleed | 3 mm / 0.125 in (or the printer's spec) on all bleed edges; TrimBox and BleedBox set [9] |
| 3 | Safety | No live text or logos inside the safety margin |
| 4 | Fonts | All embedded (PDF/X requires it) [9][10]; no missing glyphs or fallback fonts |
| 5 | Images | Effective ppi ≥ 300 (≥ 200 newsprint); line art ≥ 800 [4] |
| 6 | Color spaces | Per the PDF/X flavor: no RGB in X-1a [9]; spot colors named exactly as specified; no unintended spots (merge duplicates like "PANTONE 185 C" vs. "Pantone 185 C") |
| 7 | TAC | ≤ printer limit (Output Preview) [5] |
| 8 | Black | Body text 100K; no registration color in artwork [8] |
| 9 | Overprint | No white or colored objects set to overprint; 100K text overprints |
| 10 | Transparency | X-4 keeps it live; X-1a flattened with high-res settings |
| 11 | Hairlines | Strokes ≥ 0.25 pt (0.1 mm) [unverified: common printer minimum, not confirmed this pass] |
| 12 | Finishing layers | Spot UV, foil, emboss, die line on separate named layers or spot swatches, set to overprint, not in the CMYK plates (Section 9) |
| 13 | Output intent | Matches the stock (coated vs. uncoated profile) |
| 14 | Proof | Soft proof done; contract proof ordered for color-critical work (Section 11) |

---

## 7. Paper

### Coated vs. uncoated

| | Coated (gloss, silk/satin, matte) | Uncoated (offset, bond, text) |
|---|---|---|
| Surface | Clay/pigment coating for a smoother finish and greater opacity [12] | Open fibers, ink absorbs |
| Color | Larger gamut, sharper dots, higher TAC | Duller, darker, more dot gain; lower TAC |
| Profile | Coated profile (e.g., PSO Coated v3 / FOGRA51, GRACoL 2013) [20] | Uncoated (PSO Uncoated v3 / FOGRA52) [20] |
| Writing | Hard to write on | Good for pen, laser-friendly |
| Use | Magazines, photo books, brochures | Stationery, novels, editorial "craft" feel |

Brand colors look different on each. Specify Pantone C and U values separately (see the color file).

### Weight: gsm vs. lb

- **gsm** is grams per square meter [12]. It is directly comparable across all papers.
- **Basis weight (lb)** is the weight in pounds of a 500-sheet ream at a *basic size*, and the basic size differs by grade [12][21]. So "80 lb text" and "80 lb cover" are very different papers.
- Conversion factors below are derived from the commonly used basic sizes bond 17 × 22 in, text/book 25 × 38 in, cover 20 × 26 in [basic sizes unverified in this pass; the arithmetic is exact for those sizes].

| Grade | 1 lb = | Common weights → gsm |
|---|---|---|
| Bond / writing (17 × 22) | 3.760 gsm | 20 lb ≈ 75 gsm; 24 lb ≈ 90 gsm; 28 lb ≈ 105 gsm |
| Text / book (25 × 38) | 1.480 gsm | 60 lb ≈ 89; 70 lb ≈ 104; 80 lb ≈ 118; 100 lb ≈ 148 gsm |
| Cover (20 × 26) | 2.704 gsm | 65 lb ≈ 176; 80 lb ≈ 216; 100 lb ≈ 270; 130 lb ≈ 352 gsm |

**Apply:** spec paper in gsm plus caliper (thickness) for international jobs. Caliper, "the thickness of a single sheet ... in thousandths of an inch" [12], drives spine width and creep. Weight alone does not.

### Grain direction

- Grain is the direction of the fibers. Dimensional change with humidity is larger across the grain, and folding works better along the grain [12].
- **Rules:** book and magazine pages run grain parallel to the spine, so pages turn and lie flat. Folds on heavy stock (≥ ~170 gsm) run with the grain or get scored first, to avoid cracking [threshold unverified; ask the printer]. Ask the printer to confirm "grain long" or "grain short" for folded jobs.

### Opacity

- Opacity is "the property of a paper that limits show-through from printing on the opposite side" [12]. Low opacity plus heavy solids on the reverse side causes show-through.
- **Apply:** for lightweight stock (bibles, catalogs, newsprint), avoid heavy solids backing onto text pages, and align text blocks front and back (backing up) so any show-through falls on text, not between lines.

---

## 8. Binding

### Saddle stitch (stapled)

| Rule | Value | Source |
|---|---|---|
| Page count | Multiple of 4 (one folded sheet = 4 pages, cover included) | [14] |
| Practical maximum | ≈ 64 pages on light text stock; problems from ≈ 40 pages on 100 lb gloss text | [14] |
| Staples | 2 on Letter-size; 3 on taller pieces | [14] |
| Safety | ≥ 0.25 in from trim for folios and live text | [14] |
| Creep | Inner pages shift outward and get trimmed more on the fore edge. Prepress compensates by shingling during imposition; don't correct it in your layout file | [14] |

**Creep estimate (for design decisions, not imposition):** the innermost spread's fore edge moves out by roughly the combined caliper of the sheets nested outside it. Example: 16 sheets (64 pages) of 0.004 in caliper move the center spread about 0.06 in (1.6 mm) [approximation; the printer's imposition software calculates the real value]. Keep fore-edge content well inside the safety margin on thick booklets. Creep is defined in [12].

**Apply:** page count not divisible by 4? Add notes pages, an ad, or a self-cover, or change format. Never send 30 pages and hope.

### Perfect binding (glued spine)

| Rule | Value | Source |
|---|---|---|
| Spine width | `spine = page count ÷ PPI` (PPI = pages per inch of that paper) + cover allowance | general formula; ask the printer for PPI |
| Lulu softcover formula | `(pages / 444) + 0.06 in` standard paper; `(pages / 460) + 0.06 in` for 460 PPI magazine/comic stock | [13] |
| Lulu hardcover examples | 24–84 pp → 0.25 in (6 mm); 84–140 pp → 0.5 in (13 mm); 800+ pp → 2.125 in (54 mm) | [13] |
| Grind-off at spine | ≈ 4 mm (0.125 in), up to 8 mm | [15] |
| Bleed | ≥ 4 mm at trim; keep ink out of the grind area (1 mm into it is fine to absorb folding errors) | [15] |
| Files | Single pages, not spreads | [15] |

**Worked example (Lulu standard paper):** 200 pages → 200/444 + 0.06 = 0.51 in spine (≈ 13 mm).

**Apply**
- Get the final page count and paper **before** finalizing the cover. The spine width changes with both.
- Spine text: keep it centered with ≥ 1/16 in (1.6 mm) clearance each side on thin spines [unverified convention], or skip spine text on very thin books.
- Images crossing the gutter lose some width into the glued spine. Don't put faces or key text across it [15].

### Other bindings (orientation)

| Binding | Best for | Notes |
|---|---|---|
| Wire-O / coil / spiral | Manuals, cookbooks, calendars that must lie flat | Allow a punch margin on the binding edge; no spine text |
| Sewn (section-sewn) | Hardcovers, premium books | Pages in signatures (multiples of 8/16/32); most durable |
| PUR perfect binding | Coated stock, books that must open wider | Stronger adhesive than EVA [comparison unverified this pass; ask the printer] |

---

## 9. Finishes: preparing files

Every finish needs its **own artwork** marking where the effect goes, separate from the CMYK art [16].

| Finish | What it is | File preparation |
|---|---|---|
| **Spot UV** | Glossy clear coating on selected areas | Separate mask file or layer marking the glossy areas [16]. Solid 100% vector shapes, no gradients. Register exactly to the art below |
| **Foil stamping** | Metallic or pigment foil applied with a heated die | A 100% black shape on a separate layer, from which the die is made [17]. Vector. Avoid extremely fine lines and tiny type [17] |
| **Metallic ink** (vs. foil) | Printed metallic spot ink | Built like any spot-color job as flat vector shapes. No separate mask [17] |
| **Emboss / deboss** | Raised / recessed relief from a matched die pair | Separate artwork for the die [16]. Simple shapes; pair with foil by aligning both masks |
| **Die cut** | Custom shape or window cut by a steel-rule die | Cut-path layer telling the die where to travel [16]. Vector stroke, no fill; extend the art past the cut line by the bleed |

**Naming and setup procedure (works with most printers)**
1. Create one **spot color swatch per finish**, named exactly as the printer specifies. Common names are "Spot UV", "Foil", "Emboss", "Die" or "Dieline". Exact names are printer-specific, so ask.
2. Put each finish on its own layer, named the same as the swatch. Set objects to **100% tint, overprint on**, so they don't knock out the CMYK art.
3. Keep finish shapes vector. Expand strokes and outline type used in masks.
4. Export one PDF with all spot separations, or separate PDFs per finish if the printer asks [16]. Check the separations in Output Preview.
5. Choose stock to suit. Decorative finishes hold best on heavier stock [16].

**Limit:** fine detail closes up. Thin serifs, hairlines, and small type in foil or emboss fill in, and spot UV over small text may misregister. Ask the printer for minimum line widths. Their equipment sets the floor.

---

## 10. Magazine anatomy and production

### Anatomy

| Element | Definition | Production rule |
|---|---|---|
| Trim | Final cut page size | From the mechanical spec |
| Live / type area | Where all critical content sits | Inside safety; spec'd by the title |
| Gutter | Inner margin at the spine; space between facing pages | Add extra on perfect-bound titles (glued area loses width) [15] |
| Folio | Page number (+ title/date line) | Inside safety; consistent position; often dropped on full-bleed ad pages |
| Running head / foot | Section or title repeated on pages | Master pages |
| Jump line | "Continued on page X" / "Continued from page Y" | Update after final pagination; check every jump in the last proof |
| Spread | Two facing pages designed as one | Keep type out of the gutter; match images across it allowing for creep or binding loss |
| Masthead / flag | Masthead = staff/publisher box; flag = cover logo. Usage varies by region | — |
| Cover lines | Teaser headlines on the cover | Readable at newsstand distance; keep clear of the barcode and the title's fixed elements |
| Department / feature well | Recurring sections vs. long-form well | Grid variants per section (see `layout-composition` → `grid-systems.md`) |

### Imposition basics

- **Imposition** arranges pages on the press sheet so that, after folding and trimming, they read in order. A press sheet folded into a **signature** usually carries 8, 16, or 32 pages.
- Designers supply **single pages in reader order** (or reader spreads if the printer asks). Prepress imposes, adds creep compensation [14], and outputs printer spreads.
- Plan page counts in signature multiples (16 or 32) for long runs. Partial signatures cost more and are placed between full ones in perfect binding [15].
- Color placement: if the budget allows four-color on only some signatures, the printer gives you a **color plan** (which pages share a sheet). Put photo-heavy stories on four-color pages.

---

## 11. Proofs

| Proof | What it is | Use for |
|---|---|---|
| **Soft proof** | On-screen simulation with the output profile | Every job; procedure in `color` → `color-spaces-and-management.md` §8 |
| **PDF proof** | Printer-returned PDF after their preflight | Content, imposition, bleeds, finishes; not color |
| **Contract proof** | Proof "capable of giving an accurate representation of the colors and content of the printed result" [12], made to ISO 12647-7 (off-press proofing) [18] | Color-critical work; becomes the reference the press matches. It should carry a control strip and the profile/condition |
| **Wet / press proof** | Printed on the real press and paper | Very color-critical or premium work |
| **Press check** | Designer approves sheets at the press | Brand-critical runs; bring the contract proof |
| **Dummy / mockup** | Blank or printed sample of the real stock and binding | Checking spine, bulk, feel, finishes |

ISO 12647 sets process-control aim points and tolerances by process: Part 2 offset, Part 3 newspaper (coldset), Part 6 flexo, Part 7 proofing [18].

---

## 12. Printing methods: when to use each

| Method | Strengths | Limits | Use when | Source |
|---|---|---|---|---|
| **Offset lithography** (sheetfed, heatset web, coldset web) | Best quality per cost at volume; any Pantone; wide paper choice | Plate and make-ready costs; flat substrates only | Magazines, books, brochures, newspapers, medium-to-long runs | [19] |
| **Digital: toner (xerographic)** | No plates, variable data, fast | Gamut and paper limits; per-page cost stays flat | Short runs, personalized direct mail, proofs, on-demand books | [19] |
| **Digital: inkjet** | Wide substrate range (paper, plastic, canvas); variable data; large sizes | Per-unit cost at volume; some stocks need coatings | Posters, signage, short-run photo books, mailing data | [19] |
| **Large-format inkjet** | Banners, vinyl, backlit film, wallpapers | Viewing-distance resolution; ink/substrate durability ratings | POS, events, OOH (see `out-of-home.md`) | [19] |
| **Screen printing** | Thick opaque inks, prints on non-flat surfaces (textiles, glass, ceramics, wood, metal) | Few colors, coarse detail, manual trapping | T-shirts, merch, signage, art prints | [19] |
| **Risograph** | Cheap, vivid spot colors, characteristic texture and misregistration | Limited ink colors, paper types, and resolution | Zines, posters, art editions. See `visual-styles` → `styles/retro-print-risograph.md` | — |
| **Flexography** | Packaging and labels on paper, plastics, metallic films | Higher dot gain; plate limits on fine dots | Packaging (see `packaging-basics.md`) | [19] |
| **Gravure** | Very long runs, consistent quality | Expensive cylinders | Millions of copies: high-volume magazines, catalogs, packaging | [19] |
| **Letterpress / thermography** | Tactile impression, raised ink | Specialty, slow | Invitations, business cards | [19] |

Rough rule from Prepressure's author: "If you need 100 copies, it might be inkjet"; for millions, gravure is probably most economical. Digital keeps taking short runs from offset [19]. Get quotes for both digital and offset between about 250 and 2,000 copies. The crossover depends on page count, size, and finishing [range unverified; varies by printer].

---

## Common mistakes

| Mistake | Consequence | Fix |
|---|---|---|
| No bleed, or bleed added by enlarging the page | White slivers at the trim; wrong trim box | Set bleed in document setup [3] |
| Text inside the safety margin | Folios or words trimmed off | Respect the safety margin [14] |
| Web images at 72 ppi scaled up | Soft, pixelated print | Check effective ppi ≥ 300 [4] |
| Body text in rich black or registration | Color fringes, blurry text | 100K only [6][8] |
| White object set to overprint | Object disappears | Overprint Preview before export |
| Ink totals over the limit (e.g., 400% shadows) | Set-off, slow drying, smearing | Convert with the printer's profile; check TAC [5] |
| RGB in a PDF/X-1a, or spots named inconsistently | Rejected file, extra plates, color shift | Preflight color spaces; merge spot names [9] |
| Saddle-stitched page count not divisible by 4 | Job can't be built | Re-paginate [14] |
| Spine width guessed before paper and page count were final | Spine text off-center, cover doesn't fit | Recalculate with the printer's PPI [13] |
| Finish artwork merged into CMYK art | Foil or UV mask prints as black ink | Separate spot layers, overprint on [16][17] |
| Treating PDF/X validity as quality approval | Low-res images pass | Add a resolution check; use the GWG specs [10] |
| Folding heavy stock against the grain | Cracked folds | Ask for grain direction; score before folding [12] |
| Judging color on an uncalibrated screen | Surprise on press | Soft proof plus contract proof (`color` → `color-spaces-and-management.md`) |

---

## Sources

[1] Wikipedia contributors. (2026). *Paper size* (secondary source; ISO 216/269 values). Wikipedia. https://en.wikipedia.org/wiki/Paper_size
[2] Wikipedia contributors. (2026). *Newspaper format* (secondary source). Wikipedia. https://en.wikipedia.org/wiki/Newspaper_format
[3] Leurs, L. (n.d.). *Bleed*. Prepressure.com. https://www.prepressure.com/design/basics/bleed
[4] Leurs, L. (n.d.). *Image resolution*. Prepressure.com. https://www.prepressure.com/design/basics/resolution
[5] Leurs, L. (n.d.). *Total ink coverage*. Prepressure.com. https://www.prepressure.com/design/basics/tic
[6] 4OVER4. (2026). *CMYK Values for Print, From Rich Black to Total Ink Limits*. https://v2.4over4.com/guide/cmyk-values-for-print-explained
[7] Gazette Press / Great West Media. (n.d.). *Printing Specifications*. https://greatwest.ca/printing-specifications/
[8] Leurs, L. (n.d.). *Rich black*. Prepressure.com. https://www.prepressure.com/design/basics/rich-black
[9] Leurs, L. (n.d.). *PDF/X-1a*. Prepressure.com. https://www.prepressure.com/pdf/basics/pdfx-1a
[10] Leurs, L. (n.d.). *PDF/X-4*. Prepressure.com. https://www.prepressure.com/pdf/basics/pdfx-4
[11] Wikipedia contributors. (2026). *PDF/X* (secondary source; ISO numbers and color-space summary). Wikipedia. https://en.wikipedia.org/wiki/PDF/X
[12] Leurs, L. (n.d.). *Printing dictionary* (entries: grain, gsm, basis weight, opacity, overprint, opaque ink, trapping, TAC, creep, caliper, coated paper, contract proof). Prepressure.com. https://www.prepressure.com/printing-dictionary/g, /o, /t, /c, /b
[13] Lulu. (n.d.). *How is spine width calculated?* Lulu Help Center. https://help.api.lulu.com/en/support/solutions/articles/64000254616-how-is-spine-width-calculated-
[14] 4OVER4. (2026). *What is a saddle stitched booklet*. https://www.4over4.com/.well-known/okf/guide/what-is-a-saddle-stitched-booklet.md
[15] Leurs, L. (n.d.). *Perfect binding*. Prepressure.com. https://www.prepressure.com/finishing/perfect-binding
[16] 4OVER4. (2026). *Print Finishing Techniques That Turn Flat Prints Into Premium Pieces*. https://www.4over4.com/guide/print-finishing-techniques-explained-foil-spot-uv-embossing-and-more
[17] 4OVER4. (2026). *Gold Foil vs Metallic Gold Ink and When to Use Each*. https://www.4over4.com/guide/gold-foil-vs-metallic-gold-ink-printing
[18] Leurs, L. (n.d.). *ISO 12647*. Prepressure.com printing dictionary. https://www.prepressure.com/printing-dictionary/i/iso-12647
[19] Leurs, L. (n.d.). *Printing processes*. Prepressure.com. https://www.prepressure.com/printing/processes
[20] European Color Initiative. (n.d.). *Downloads* (PSO Coated v3 / FOGRA51, PSO Uncoated v3 / FOGRA52, eciCMYK v2). https://www.eci.org/en/downloads
[21] Wikipedia contributors. (2026). *Paper density* (secondary source; basis weight definition). Wikipedia. https://en.wikipedia.org/wiki/Paper_density
[22] Blurb. (2026). *Magazines* (product page listing 8.5 × 11 in / 22 × 28 cm). https://www.blurb.com/magazines
