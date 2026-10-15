# Out-of-Home (OOH) and Digital Out-of-Home (DOOH)

> **Scope:** Formats, legibility math, copy rules, file preparation, and digital-billboard (DOOH) rules for billboards, posters, street furniture, and transit in the US, UK, and Europe.
> **Last verified:** 2026-10 (format sheets from OAAA are dated 2015/2016; regulatory and media-owner specs were checked in 2026-10, so confirm with the media owner before production)
> **Used by:** print-ooh-designer, creative-director, typographer, art-director, design-critic, social-media-designer

This file owns **letter height vs. viewing distance** (typography links here). Print fundamentals such as color, PDF/X, and proofs are in `print-production.md`. Contrast math is in `color` → `contrast-and-dark-mode.md`.

**Rule zero:** every site and media owner has its own spec sheet (live area, bleed, scale, file format, pixel size, slot length). The tables below are planning values. The media owner's current spec is the production value.

---

## 1. Formats

### United States (OAAA standard formats)

Dimensions are height × width.

| Format | Live area | Finished / printed area | Notes | Source |
|---|---|---|---|---|
| Large bulletin | 20' × 60' | 21' × 61' | Vinyl wrap; 6" bleed per side | [1][2] |
| **Standard bulletin** | **14' × 48'** | 15' × 49' | The classic highway billboard; vinyl wrap, 6" bleed per side | [1][2] |
| Junior bulletin | 10'6" × 36' | 11'6" × 37' | | [1][2] |
| Bulletin wrap 12' × 25' | 12' × 25' | 13' × 26' | | [1] |
| **Poster (30-sheet)** | 10'5" × 22'8" (125" × 272") | Same as live | Single-sheet PE (polyethylene) posters replaced pasted paper sheets | [1][2] |
| Junior poster (commonly called 8-sheet) | 5' × 11' | — | OAAA lists it as "Junior Poster"; the "8-sheet" label is trade usage [unverified naming] | [2] |
| Wallscape / wall mural | Variable | — | Site-specific; get the survey drawing | [2] |
| Bus king | 30" × 144" | — | Side of bus | [1][2] |
| Bus queen | 30" × 88" | — | | [1][2] |
| Transit shelter | 68.5" × 47.5" (cheat sheet) / 67" × 46" (formats sheet) | — | Backlit; the two OAAA sheets differ | [1][2] |
| Rail 2-sheet | 46" × 60" | — | | [1][2] |
| Urban panel | 30" × 60" | — | | [1] |
| Airport diorama | 43" × 62" | — | Backlit | [1] |
| Taxi top | 14" × 48" | — | | [1][2] |
| Mobile billboard | 10' × 22' | — | Truck-side | [1] |

### United Kingdom

Sheet names come from the old practice of pasting posters from a fixed number of panels [5].

| Format | Size (W × H) | Artwork supply (one printer) | Source |
|---|---|---|---|
| **48-sheet** (standard UK billboard) | 6096 × 3048 mm (≈ 6 × 3 m) | 25% scale: 1524 × 762 mm; printed on 12 panels | [3][4][15] |
| **96-sheet** | 12192 × 3048 mm (≈ 12 × 3 m); Global lists 12,000 × 3,000 mm | 25% scale: 3048 × 762 mm; 24 panels of 1016 × 1524 mm | [3][4][15] |
| 32-sheet / 64-sheet | ≈ 4 × 3 m / ≈ 9 × 3 m (Bauer); 4064 × 3048 / 8128 × 3048 mm (papersizes.io) | — | [4][5] |
| 16-sheet / 12-sheet | ≈ 2 × 3 m / 1.5 × 3 m | — | [4][5] |
| **6-sheet** (bus shelter, "Adshel", street panel) | 1200 × 1800 mm | 1:1 scale, 150 gsm | [4][5][15] |
| 4-sheet | 1016 × 1524 mm | 1:1 scale | [5][15] |

Sources differ by a few centimeters on large sheets. 48-sheet height appears as 3048 or 3094 mm in different guides. Global labels its numbers "reference only, not for supplying artwork" [3].

### Continental Europe

| Format | Size | Note | Source |
|---|---|---|---|
| France "4 × 3" (grand format) | 4 m wide × 3 m high | Standard roadside format | [6] (secondary) |
| Abribus / street-furniture poster (CLP / MUPI type) | ≈ 120 × 175–176 cm | Varies by operator and city. The often-quoted 120 × 176 cm is [unverified] against an operator spec; one French guide gives 120 × 175 cm | [6] |
| Germany, Brazil, other markets | — | Not verified in this pass; get the media owner's spec | — |

### Digital (DOOH) pixel specs

| Format | Pixels (W × H) | Aspect | Source |
|---|---|---|---|
| US digital large bulletin | 1800 × 600 | 3:1 | [2] (OAAA 2015) |
| US digital standard / junior bulletin | 1400 × 400 | 7:2 | [1][2] |
| US digital square bulletin | 840 × 840 | 1:1 | [2] |
| US digital standard / junior poster | 840 × 400 | 21:10 | [1][2] |
| Landscape HD screens (airport, mall, rail, place-based) | 1920 × 1080 | 16:9 | [2] |
| Portrait screens (shelter, mall, rail, airport) | 1080 × 1920 | 9:16 | [2] |
| UK digital 48-sheet (Bauer "Billboard Live") | 864 × 432 | 2:1 | [4] |
| UK Street Hub (Global) | 1080 × 1920 | 9:16 | [3] |

**Apply:** pixel sizes vary by screen model even within one operator's network. Treat these as planning values and request the exact pixel spec per site or package.

---

## 2. Legibility: viewing distance and letter height

### The model (USSC)

The United States Sign Council (USSC) Foundation's guideline standards give the most complete documented method [9]. They were written for on-premise signs, but the viewing physics is the same for billboards.

1. **Legibility Index (LI)** = feet of viewing distance per inch of **capital letter height**. Letter height (in) = distance (ft) ÷ LI [9].
2. **Average LI = 30** for setting general size limits [9]. Specific values in the USSC table vary with illumination, typeface (Helvetica and Clarendon were tested), and letter/background color.
3. **Environment adjustment:** real driving lowers legibility. Test-track LIs dropped by at least 35% on average in real-world observation, with extremes as low as 7 ft/in. USSC multiplies the LI by **0.83** in moderately complex zones (LI 30 → 25) and **0.67** in highly complex zones (LI 30 → 20) [9]. **[E2]**
4. **All caps needs 15% more height** than upper-and-lower case with initial caps. In all-caps settings, every letter must reach the computed height [9]. **[E2]** (Pennsylvania Transportation Institute research, as cited by USSC.)
5. Metric equivalents: LI 30 ft/in = 360:1, LI 25 = 300:1, LI 20 = 240:1. Letter height (cm) = distance (m) × 100 ÷ ratio.

### Calculator: distance → minimum cap height

Values are capital-letter heights for mixed-case text. For all caps, use the last column (or multiply any column by 1.15).

| Viewing distance | LI 30 (ideal, simple setting) | LI 25 (moderate complexity) | LI 20 (high complexity) | All caps at LI 30 |
|---|---|---|---|---|
| 50 ft (15 m) | 1.7 in (4.2 cm) | 2.0 in (5.1 cm) | 2.5 in (6.4 cm) | 1.9 in (4.9 cm) |
| 100 ft (30 m) | 3.3 in (8.5 cm) | 4.0 in (10.2 cm) | 5.0 in (12.7 cm) | 3.8 in (9.7 cm) |
| 200 ft (61 m) | 6.7 in (17 cm) | 8.0 in (20 cm) | 10.0 in (25 cm) | 7.7 in (19.5 cm) |
| 300 ft (91 m) | 10.0 in (25 cm) | 12.0 in (30 cm) | 15.0 in (38 cm) | 11.5 in (29 cm) |
| 400 ft (122 m) | 13.3 in (34 cm) | 16.0 in (41 cm) | 20.0 in (51 cm) | 15.3 in (39 cm) |
| 500 ft (152 m) | 16.7 in (42 cm) | 20.0 in (51 cm) | 25.0 in (64 cm) | 19.2 in (49 cm) |
| 600 ft (183 m) | 20.0 in (51 cm) | 24.0 in (61 cm) | 30.0 in (76 cm) | 23.0 in (58 cm) |
| 800 ft (244 m) | 26.7 in (68 cm) | 32.0 in (81 cm) | 40.0 in (102 cm) | 30.7 in (78 cm) |
| 1000 ft (305 m) | 33.3 in (85 cm) | 40.0 in (102 cm) | 50.0 in (127 cm) | 38.3 in (97 cm) |

Metric quick rows (pedestrian and street furniture):

| Distance | LI 30 (÷360) | LI 20 (÷240) |
|---|---|---|
| 3 m | 0.8 cm | 1.2 cm |
| 5 m | 1.4 cm | 2.1 cm |
| 10 m | 2.8 cm | 4.2 cm |
| 25 m | 6.9 cm | 10.4 cm |
| 50 m | 13.9 cm | 20.8 cm |

**Cross-check with a media owner's table.** Lamar's letter-height guide [10] works out to roughly LI 25, close to the USSC "moderate" value:

| Distance (Lamar) | Readable text height (Lamar) | Typical format |
|---|---|---|
| 100–200 ft | 4–8 in | Posters, surface streets |
| 200–300 ft | 8–10 in | Posters, surface streets, highway bulletins |
| 300–350 ft | 10–15 in | Same |
| 350–500 ft | 15–20 in | Highway bulletins |
| 500–600 ft | 20–24 in | Highway bulletins |

### From speed to distance

USSC converts reaction time to distance: **VRD (ft) = mph × VRT (s) × 1.47** [9]. Their average viewer reaction time for a six-word (30-letter) on-premise sign is 8 s in simple environments and 10–11 s in complex ones. That figure includes time to maneuver toward the business [9]. Billboards don't ask drivers to maneuver, but the same arithmetic tells you how far away reading must begin.

| Speed | ft/s | Distance covered in 4 s | Distance covered in 8 s | Cap height to start reading at 8 s distance (LI 30) |
|---|---|---|---|---|
| 25 mph (40 km/h) | 36.8 | 147 ft (45 m) | 294 ft (90 m) | 9.8 in (25 cm) |
| 35 mph (56 km/h) | 51.4 | 206 ft (63 m) | 412 ft (125 m) | 13.7 in (35 cm) |
| 45 mph (72 km/h) | 66.2 | 265 ft (81 m) | 529 ft (161 m) | 17.6 in (45 cm) |
| 55 mph (88 km/h) | 80.8 | 323 ft (99 m) | 647 ft (197 m) | 21.6 in (55 cm) |
| 65 mph (105 km/h) | 95.5 | 382 ft (116 m) | 764 ft (233 m) | 25.5 in (65 cm) |

### Procedure: sizing type for a site

1. Get the **site's real viewing distance** from the media owner (setback, angle, first sight line). Don't use the format's generic distance.
2. Pick the LI: 30 for open roads and simple scenes, 25 for in-town, 20 for dense or chaotic streets [9].
3. Cap height = distance ÷ LI. Add 15% if setting in all caps [9].
4. Check that the headline fits at that height in the live area. If it doesn't, **cut words**, don't shrink type.
5. Proof at scale: print the layout on Letter/A4 and view it from about 6 ft (2 m) for 5 seconds (Lamar's "Brevity Test") [10]. Ask what the viewer recalls.

**Limit:** LI values come from test-track studies with defined typefaces and colors. Condensed, light, script, or decorative faces need more height than the table says. USSC notes that its values extrapolate only to "similarly configured letterforms" [9].

---

## 3. Copy and composition

### Word count

| Source | Rule | Basis |
|---|---|---|
| USSC | 4–8 words in simple type read in ≈ 4 s → 0.5 s per word (0.1 s per letter); a recognized symbol or logo counts as one word | Reading-time research cited in the standard [9] **[E2]** |
| Clear Channel Outdoor (2025) | "Seven words or fewer" | Creative director's principles [11] **[E2]** practitioner |
| Lamar | "Limit copy to 9 words or fewer"; average viewable time of a bulletin ≈ 7 s, and many drivers can't look away from the road that long | Operator guide [10] **[E2]** practitioner |

**Myth check:** "Seven words" is a practitioner heuristic. No study found in this pass pins the number at seven. The defensible model is USSC's reading time: about 0.5 s per word, plus glances back to the road (at least 0.5 s for every 2.5 s of reading [9]). Count words, the logo, and any URL or phone number toward the budget. Treat 7 ± 2 as the working range. Fewer is better on highways, and pedestrian formats can carry more. **[E3]** for the exact number 7, **[E2]** for brevity as the principle.

### Composition rules

| Rule | Value / method | Source |
|---|---|---|
| One message | One headline, one image, one call to action | [11] **[E2]** |
| Three elements | Image/graphic, copy line, advertiser name | [10] **[E2]** |
| Contrast | Strong value contrast; dark on light or light on dark; avoid busy backgrounds behind text | [10][11] **[E2]** |
| Typefaces | Bold, clean sans serifs; avoid thin strokes and ornate scripts | [10][11] **[E2]** |
| Silhouette | Bold, simple shapes that read in outline | [11] **[E2]** |
| Negative space | USSC: copy area ≤ 40% of the sign panel, negative space ≥ 60% (minimum standard for on-premise signs) | [9] **[E2]** |
| Use the full board | Image can fill the whole face; type need not | [11] |
| Localize | Site-specific messages engage more | [11] **[E2]** practitioner claim |

**Logo size:** no authoritative figure was found in this pass. Practical method: size the logo like a word. Its smallest critical detail (e.g., wordmark x-height) must meet the cap height from the calculator for that distance. A logo is one "word" in the USSC reading budget [9].

**Color:** legibility depends on luminance contrast, not hue. Check text/background pairs with the methods in `color` → `contrast-and-dark-mode.md` and aim well above the minimums used for screens. Meanings of colors are in `cognitive-psychology` → `color-psychology.md`.

### Phone numbers, URLs, QR codes

| Element | Roadside (highway, arterial) | Street level, transit, pedestrian |
|---|---|---|
| Phone number | Avoid. A 10-digit number costs several "words" of reading time and is hard to remember at speed [reasoned from [9]; not a measured effect] | Acceptable if short or vanity |
| URL / handle | Short brand domain or handle only, counted in the word budget | Fine |
| QR code | **No.** Prepressure's sizing rule: code size ≈ 1/10 of scan distance, so a billboard read from 10 m needs a 1 m code [12]. At highway distances (100+ m) the code would need to be over 10 m, and scanning while driving is unsafe | **Yes:** shelters, rail platforms, airport dioramas, posters within a few meters. Minimum 32 × 32 mm for print, with a 4-module quiet zone [12] |

QR rules for pedestrian formats: dark code on a light, solid (not screened) background. Avoid cyan or magenta codes [12]. Place it at hand and eye height, not at the top of a 6-sheet.

---

## 4. File preparation

### Working scale and resolution

**Formula:** ppi needed in the scaled file = target ppi at full size × scale factor (e.g., 1:10 → × 10).

| Format | Scale (OAAA) | Mechanical size | Target ppi at full size | ppi in mechanical | Source |
|---|---|---|---|---|---|
| Bulletin 14' × 48' (wrap) | 1 in = 1 ft (1:12) | 15" × 49" (includes bleed) | 18–20 | 216–240 | [1] |
| Bulletin 20' × 60' | 1/2 in = 1 ft (1:24) | 10.5" × 30.5" | 18–20 | 432–480 | [1] |
| 30-sheet poster | 1:10 | 12.5" × 27.2" | 18–20 | 180–200 | [1] |
| Bus king | 1:4 | 7.5" × 36" | 80–100 | 320–400 | [1] |
| Bus queen, rail 2-sheet, urban panel, shelter, dioramas, taxi top | 1:2 | e.g., shelter 34.25" × 23.75" | 80–100 | 160–200 | [1] |
| UK 48/96-sheet | 25% (1:4) | 1524 × 762 / 3048 × 762 mm | — | 300 dpi in the scaled file (printer spec) | [15] |
| UK 6-sheet, 4-sheet | 1:1 | 1200 × 1800 / 1016 × 1524 mm | — | 300 dpi (printer spec) | [15] |

The OAAA sheet prints the bulletin scale as `1" = 1"`, but its mechanical sizes (15" × 49" for a 15' × 49' face) show the intended scale is 1 inch = 1 foot [1]. Prepressure notes billboards often need only about 30 ppi at full size [13]. OAAA's 18–20 ppi target for bulletins is lower still, because viewing distance is large [1].

**Pixel sanity check:** 14' × 48' at 20 ppi full size = 3,360 × 11,520 px live. The 15" × 49" mechanical at 240 ppi = 3,600 × 11,760 px including bleed.

### Materials

| Material | Formats | Design implication | Source |
|---|---|---|---|
| Vinyl wrap (flex face) | Bulletins | Wraps around the frame: 6" bleed each side; keep content in the live area | [1] |
| PE (polyethylene) single-sheet poster | US 30-sheet posters | Live = finished; no wrap | [1] |
| Blueback paper (≈ 120 gsm) | UK 48/96-sheet, 4-sheet | Pasted in panels; the printer splits your single full design into panels. Don't split it yourself | [15] |
| Backlit film / 150 gsm poster | Shelters (6-sheet), dioramas | Backlit: colors and blacks shift. Ask for the backlit profile; dense blacks may need a heavier build | [1][15] |

### Checklist

1. Live area, bleed, scale, and file format from the media owner's current spec sheet.
2. Build at scale with vector type and logos. Size raster images to the ppi-at-scale target.
3. Nothing critical within the outer bleed or near panel seams. Faces and small text must not cross a paste-panel seam (UK posters) [panel seams: unverified as a printer rule; ask].
4. CMYK or RGB as the printer requests. Large-format inkjet printers often accept RGB [unverified; ask].
5. Proof a small print at the reading-distance ratio (Section 2, step 5).

---

## 5. Digital OOH: motion, dwell, and brightness

### Roadside rules (US federal guidance, verified 2026-10)

The FHWA memorandum *Guidance On Off-Premise Changeable Message Signs* (September 25, 2007) describes standards that state practices "contain some or all of" [7]:

| Parameter | FHWA text | Source |
|---|---|---|
| Duration of each display | "Generally between 4 and 10 seconds; 8 seconds is recommended" | [7] |
| Transition between messages | "Generally between 1 and 4 seconds; 1–2 seconds is recommended" | [7] |
| Brightness | Adjust to ambient light "so that the signs are not unreasonably bright" | [7] |
| Motion | Some states require "static messages without movement such as animation, flashing, scrolling, intermittent or full-motion video" | [7] |

- State and local codes vary. A sign-industry association reports that most state DOTs allow 6-second hold times, while many localities require 30 s or more [8]. That source favors the industry. **Check the code for the specific site.**
- UK: Bauer Media Outdoor says digital billboards "cannot include video content" because of the risk of distracting drivers [4] (verified 2026-10).
- A road-safety review by the Centre for Accident Research and Road Safety–Queensland reportedly found crash risk about 25–29% higher near digital roadside signs than in control areas [14] (secondary source: Wikipedia summary; original not opened). **[E3]** until the primary study is checked; the topic is contested.

### Design rules for DOOH

| Context | Motion | Design rule |
|---|---|---|
| Roadside digital billboard | Static frames only (most jurisdictions) [7][4] | Each frame must stand alone. A driver may see one frame, mid-loop, never the next one, so don't split a message across sequential frames. Same copy limits as static boards |
| Street furniture, transit platforms, malls, airports | Often allowed (full motion, sometimes audio) [2] | Lead with the brand and the message in the first second. Design for silent viewing; motion should loop cleanly |
| Any DOOH | — | Deliver exactly the pixel size and file type in the spec; check the slot or spot length per contract (loop length and share of voice vary by network) |

Accessibility of motion (flashing thresholds, reduced motion) is covered in `accessibility` → `motion-media-and-forms.md`.

### Night visibility

- Illumination changes legibility. USSC LI values differ for external lighting, internally lit translucent faces, internally lit letters on opaque backgrounds, and exposed neon [9].
- Digital boards dim at night [7]. Very dark creative with thin light text loses detail when the board dims, and pure white fields can glare.
- **Apply:** check the design in a dark room at reduced screen brightness. Avoid dark-on-dark pairs that rely on subtle value steps. Keep strokes heavy. For printed boards with external lighting, avoid gloss areas that would catch spotlight glare [unverified as a documented rule].

---

## Common mistakes

| Mistake | Fix |
|---|---|
| Designing on a laptop at 100% zoom and judging legibility there | Proof at the reading-distance ratio; use the calculator (Section 2) |
| Shrinking type to fit more copy | Cut copy to ≤ 7–9 words; size type from distance [9][10][11] |
| Thin, light, condensed, or script typefaces | Bold, open sans serifs [10][11] |
| Low-contrast text over photos | Solid field or strong value contrast [10] |
| Phone numbers and long URLs on highway boards | Brand name plus a short handle; move details to other channels [10] |
| QR codes on roadside boards | QR only at pedestrian distance; size ≈ distance/10 [12] |
| Sequential storytelling across roadside DOOH frames | One complete message per frame [7] |
| Motion creative for roadside screens | Static frames; check the jurisdiction [7][4] |
| Wrong scale or missing bleed on bulletin wraps | Follow the scale table; 6" bleed per side on wraps [1] |
| Splitting UK posters into panels yourself | Supply one full design; the printer splits it [15] |
| Using another market's format dimensions | Get the media owner's spec for each site |

---

## Sources

[1] Outdoor Advertising Association of America. (2016). *OOH Print Production Specifications Cheat Sheet*. https://oaaa.org/wp-content/uploads/2022/09/OOH-Print-Production-Specifications-Cheat-Sheet.pdf
[2] Outdoor Advertising Association of America. (2015). *Standard OOH Media Formats*. https://www-archive.oaaa.org/Portals/0/Public%20PDFs/Standard%20OOH%20Media%20Formats.pdf
[3] Global. (2026). *Billboard advertising: formats and sizes*. https://global.com/outdoor/road/billboard-advertising/formats-and-sizes/
[4] Bauer Media Outdoor. (2026). *Billboard sizes, dimensions & specs*. https://www.bauermediaoutdoor.co.uk/advertising/new-to-out-of-home/billboard-advertising/billboard-sizes-dimensions-specs
[5] papersizes.io. (n.d.). *Billboard paper sizes* (secondary source). https://papersizes.io/billboard
[6] Marty, A. (2026). *Quel format d'affiche publicitaire choisir pour vos campagnes ?* Graphiste Blog (secondary source). https://graphiste.com/blog/?p=51327
[7] Shepherd, G. M. (2007, September 25). *Guidance On Off-Premise Changeable Message Signs* (memorandum). Federal Highway Administration. https://www.fhwa.dot.gov/real_estate/policy_guidance/offprmsgsnguid.cfm
[8] International Sign Association. (2017, November 6). *Vital Signs: FHWA* (industry source). https://newsroom.signs.org/vitalsigns/fhwa
[9] United States Sign Council Foundation. (2018). *USSC Guideline Standards for On-Premise Signs*. https://usscfoundation.org/wp-content/uploads/2018/03/USSC-Guideline-Standards-for-On-Premise-Signs-2018.pdf
[10] Lamar Advertising Company. (n.d.). *Billboard Design Tips* (hosted by Oregon DOT). https://oregon.gov/odot/Get-Involved/Documents/Billboard-Design-Tips.pdf
[11] McGraw, M. (2025, January 8). *7 Road Tested Principles for Creating Billboards that Turn Heads and Deliver Results*. Clear Channel Outdoor. https://clearchanneloutdoor.com/blog/7-road-tested-principles-for-creating-billboards-that-turn-heads-and-deliver-results/
[12] Leurs, L. (n.d.). *QR code*. Prepressure.com. https://www.prepressure.com/library/technology/qr-code
[13] Leurs, L. (n.d.). *Image resolution*. Prepressure.com. https://www.prepressure.com/design/basics/resolution
[14] Wikipedia contributors. (2026). *Billboard* (secondary source; CARRS-Q review summary). Wikipedia. https://en.wikipedia.org/wiki/Billboard
[15] Tradeprint. (2026). *Billboard posters* (artwork specs). https://www.tradeprint.co.uk/poster-printing/billboard-posters
