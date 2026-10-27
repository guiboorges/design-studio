# Identity Systems and Motion

> **Scope:** How to grow one central brand concept and its logo into a full identity system (color, type, grid, graphic device, imagery, icons, data viz, voice, motion, sound) that a website, social posts, product UI, and every other touchpoint express coherently, with 14 documented case studies, flexible-identity types, motion and sonic identity, tech-brand patterns, brand guidelines, and myths.
> **Last verified:** 2026-10 (case pages, public brand guidelines, IBM/Carbon motion values, Linear 2026 refresh, WCAG 2.3.3).
> **Used by:** identity-designer, creative-director, art-director, ui-designer, social-media-designer

Related files. Before this file: the brand core (concept sentence + metaphor) from `strategy-and-concept.md`
and the mark from `logo-design.md` (both in this folder). Lineage and "total design" precedents: `design-history`
→ `masters-product-industrial.md` (Jacobsen) and `masters-graphic-contemporary.md` (Bierut, Sagmeister & Walsh).
Style recipes: `visual-styles` (`apple-style.md`, `dark-tech-saas.md`, `kinetic-typography.md`,
`immersive-3d-webgl.md`). Web motion tokens and the site's signature moment: `expressive-web`. Platform sizes and
safe zones: `media-specs` → `social-formats.md`. Anti-generic checks: `ai-slop`.

---

## 0. How to use this file

| You are… | Do this | Sections |
|---|---|---|
| Deriving a system from an approved logo | Run the derivation table for every element, then lock the fixed set (§1.4) | §1 |
| Choosing how much the identity may flex | Pick a flexible type, then check it against the recognition rules | §3 |
| Defining motion, a logo animation, or a sonic logo | Derive the motion principle from the logo's construction; map personality to the `expressive-web` tokens | §4 |
| Designing the website, social templates, deck, or product UI for a brand | Use the touchpoint matrix and the throughline test | §5 |
| Working on a tech or "Apple-like" brand | Read the families and the sameness traps | §6 |
| Writing or auditing brand guidelines | Use the contents table and governance basics | §7 |
| Reviewing a client claim or a myth | Check the myths table | §8 |

**The one rule.** Every visible choice must trace back to the concept sentence through the logo's construction.
If a choice can't be traced, it's a default. Replace it or delete it (`ai-slop` re-run test).

---

## 1. From mark to system

### 1.1 The chain of derivation

```
Concept sentence + metaphor  (brand core)
        │
        ▼
Logo construction  (grid, angles, curves, stroke, counters, overlap, negative space)
        │
        ├──► Fixed assets      : mark, wordmark, primary color, typeface, one graphic device
        ├──► System rules      : grid, shape language, color roles, type roles, imagery rules, icon rules
        ├──► Behavior          : motion principle, sound, voice
        │
        ▼
Touchpoints  : website (hero, signature moment, transitions), social (templates, avatar, covers),
               product UI, deck, email, merch, OOH, packaging
```

A logo is one output of the concept, not the source of the system. The system can be derived from the logo's
*construction* (the geometry and the reason behind it), which is why the identity designer documents the
construction in the logo stage (`logo-design.md`). Documented systems work this way:

- MIT Media Lab 2014: one seven-by-seven grid produced the ML monogram *and* the glyphs for all 23 research groups [1][2].
- Slack 2019: the new octothorpe combines a speech bubble and a lozenge; those shapes can be pulled out as standalone graphic elements, and the speech bubble became the basis for custom icons, illustrations, and motifs [13].
- Mastercard 2016: the interlocking circles set the geometry for FF Mark letterforms "that each contain part of a circle," parametric patterns, icons, and illustration [6].
- Google 2015: the G is "built on the same grid as the product iconography," and the dots are "a dynamic distillation of the logotype" used for interactive and transitional moments [5].
- Duolingo: johnson banks explored how the shapes in Duo the owl could shape the typography, building "the shape and spirit of an owl's wing" into the Feather Bold letterforms [21].

**Apply:** before designing any touchpoint, write the construction in one line ("two circles, additive overlap,
circular letterforms") and list which elements inherit it.
**Limit:** derivation is a design method, not evidence of effect. "It's derived from the logo" justifies coherence,
not memorability or sales [E3 for any effect claim].

### 1.2 Element inventory

| Element | Job in the system | Usually fixed or flexible | Owner (agent / skill) |
|---|---|---|---|
| Logo (mark + wordmark + lockups) | Sign-off and authentication | Fixed | identity-designer, `logo-design.md` |
| Color | Recognition at a distance; roles in UI | Primary fixed; secondary flexible by role | color-specialist, `color` |
| Typography | Voice made visible; the largest brand surface on web and social | Families fixed; scale flexible per medium | typographer, `typography` |
| Grid | Proportion and rhythm shared by every layout | Fixed logic, flexible columns | `layout-composition` |
| Shape language / graphic device | The ownable "second logo" that frames content | Fixed form, flexible use | identity-designer |
| Imagery (photo direction) | Proof and emotion; the biggest risk of genericness | Rules fixed, content variable | art-director, `ai-slop` |
| Iconography | Wayfinding in product and marketing | Rules fixed | ui-designer |
| Illustration | Explains and adds character | Style rules fixed | art-director |
| Data visualization | Brand-consistent charts | Palette and mark rules fixed | `dataviz`, `color` |
| Voice and tone | Words in every touchpoint | Principles fixed, tone flexes by context | brand-strategist, `copywriting` |
| Motion | How the brand behaves in time | Principle and tokens fixed | identity-designer, `expressive-web` |
| Sound | Recognition without a screen | Melody fixed, arrangement flexible | (specialist; see §4.6) |

### 1.3 The derivation table

For each element, ask the question of the concept and of the logo's construction. The worked example is one
fictional brand carried through every row, so you can see the throughline.

**Worked example brief (fictional):** *Seam*, a data-integration API. Concept sentence: "Seam joins two systems
so cleanly that the join becomes the strongest part." Metaphor: the seam (a weld, a dovetail, a stitched join).
Logo construction: two blocks on an 8-unit grid meeting along a single stepped line, the step 1 unit deep.
Personality: precise, calm, quietly confident; not "hype."

| Element | Question to ask of the concept and construction | Worked example (Seam) | Real precedent |
|---|---|---|---|
| Logo | What is the one image of the metaphor that survives at 16 px and in one color? | Two blocks meeting at a 1-unit step. The step *is* the seam. | Mastercard: two circles = connection [6] |
| Grid | Which proportion or module does the mark's construction use? Can layouts reuse it? | 8-unit module. Pages are two panels (5:3) meeting at a stepped edge one module deep. | MIT Media Lab 7×7 grid → all glyphs [2] |
| Shape language | Which corner, curve, angle, or stroke is unique to the mark? Where else can it appear? | Square corners everywhere; the step appears only where two things connect (cards that pair data, CTA groups). | Slack speech bubble → icons and motifs [13] |
| Graphic device | Which part of the mark can leave the logo and work as a frame, divider, or pattern? | The "seam line": a 2 px stepped line used as section divider, progress bar, chart connector, and social frame. | Uber's U as image frame [18]; Stripe wave [22] |
| Color | What does color *mean* in the metaphor? Which role does the accent play? | Ink and paper fields + one "join" accent used only where things connect (links, active state, seam line). Accent ≤ ~5% of any surface. | Uber "safety blue" used sparingly in interactions [18] |
| Typography | Does the concept suggest a construction (geometric, humanist, mono, slab)? Can the type echo the mark's details? | Neo-grotesque for display; a mono for data and code. Display headlines break across the seam (first clause left panel, second right). | Mastercard FF Mark circles [6]; Duolingo Feather Bold [21]; Mozilla Zilla (Courier-like, code) [15] |
| Imagery | What real-world subject *is* the metaphor? How is it framed and lit? | Photograph real joins (expansion joints, dovetails, welds, cable splices), cropped so the join sits on the layout seam. Product shots show two systems meeting. | Spotify duotone "Lens" makes any artist photo read as Spotify [16] |
| Iconography | What stroke, corner, and grid from the mark do icons inherit? | Icons on the logo's 8-unit grid with its stroke ratio. Only feature icons carry the step; UI icons stay neutral. | Google G on the product-icon grid [5] |
| Illustration | Which shapes of the mark make the illustration's primitives? | Integration diagrams drawn as blocks joined at stepped seams, no people. | Uber: illustrations reduced to geometric shapes in block color [18] |
| Data viz | What in the data corresponds to the metaphor? | Connections and flows in accent; everything else in neutral steps. | IBM: data viz is a chapter of the design language [9] |
| Voice | How does the metaphor sound in a sentence? | Short sentences, joined by "and"; verbs of joining ("connect," "meet," "fit"); no superlatives. | Mailchimp verbal system as a named part of the identity [17] |
| Motion | How does the mark's construction *behave*? What moves, and how does it stop? | "Travel and lock": two parts travel toward each other on `--ease-in-out`, then stop with no bounce. Page transitions = two panels meeting at the seam. | Google dots on geometric arcs with one set of quick easing curves [5] |
| Sound | What would the metaphor sound like in under 2 s? | Two tones a fifth apart converging to one. Used as sign-off and success sound. | Mastercard melody → sound logo, ringtones, acceptance sound [8] |
| Website signature moment | What single interaction *performs* the concept? | Scroll joins the two halves of the hero (the visitor's stack, their destination) into one surface. | `expressive-web` "concept becomes mechanic" |
| Social template | Which zones are fixed (the device, the logo) and which vary (image, headline)? | Seam line fixed at the 5:3 split; image left, headline right; mark fixed bottom-left inside the safe area. | §5.3 |

**Apply:** fill this table for every new identity before any touchpoint is designed. Empty cells are allowed only
with a reason ("no sonic identity: B2B, no audio touchpoints").
**Limit:** don't force the metaphor into every element. Two or three carriers (device, motion, color role) are
enough. Product UI icons and body type should stay functional (§5.4).

### 1.4 Logo construction → system: what each property can become

| Construction property | Becomes in the system | Example |
|---|---|---|
| Underlying grid | Layout grid, icon grid, spacing unit | MIT Media Lab 7×7 [2]; Google G and product icons [5] |
| A unique angle | Crop angle of images, diagonal section breaks, motion direction | Deliveroo: the Roo's angles carry into typography and pattern [20] |
| A characteristic curve or radius | Corner radius tokens, typeface choice or customization | Mastercard circles in FF Mark [6] |
| Stroke weight and contrast | Icon stroke, divider weight, chart line weight | IBM: optically corrected 8-bar stripe weights (black thicker than white) [9] |
| Overlap or intersection | Color mixing rule, transparency, pattern | Mastercard additive overlap, read as "transparency and glow" [6]; MIT 2011 "the intersection" [3] |
| A container or frame | Image frame, social template, UI container | Mozilla bounding box from text selection [15]; Uber's U frames photos [18] |
| Negative space or counter | Cutout device, reveal mask in motion | (pattern; see §4.2) |
| Modular parts | Generative pattern, per-department marks, loaders | Slack bubble + lozenge [13]; MIT glyph family [2] |
| A building, object, or place | Shape that changes "like a chameleon" per application | Casa da Música building form [4] |

### 1.5 What to lock and what to free

Distinctive-asset research (§3.2) argues that recognition comes from consistent, unique elements [30]. Use that
to decide the fixed set.

| Lock (never varies) | Govern (varies within rules) | Free (varies per piece) |
|---|---|---|
| Mark and wordmark drawing, primary color, primary typeface, the graphic device's form | Color pairings, type scale per medium, grid columns, device placement, motion durations | Image content, headline copy, illustration subject, campaign color pairs |

Rule: **lock at least two distinctive elements on every touchpoint** (for example, device + typeface, or color +
mark). If a piece varies everything except the logo, it's no longer the identity.

---

## 2. Case studies: one idea drives everything

Fourteen systems with a studio, client, or primary-press explanation. "Not documented" means the opened source
doesn't say. Don't fill gaps from memory.

### 2.1 Summary table

| # | Case (year) | Studio | Central idea | Main carriers | Grade of documentation |
|---|---|---|---|---|---|
| 1 | MIT Media Lab (2011) | TheGreenEyl + E Roon Kang | "The intersection": individuals meeting at the Lab | Generative mark, per-person logos | Secondary (trade site) [3] |
| 2 | MIT Media Lab (2014) | Pentagram (Bierut, Aron Fay) | One grid; "timelessness and flexibility" | Monogram + 23 group glyphs, Helvetica | Primary [1][2] |
| 3 | Casa da Música (date [unverified], usually given as 2007) | Sagmeister | The building is the logo, shifting per music | Shape system, color per application | Primary [4] |
| 4 | Google (2015) | Google | One identity from the homepage to watches and voice | Logotype, G, dots, Product Sans, motion states | Primary [5] |
| 5 | Mastercard (2016; symbol-only 2019; sonic 2019) | Pentagram (Bierut, Hayman) | Connection: two interlocking circles | Circles, FF Mark, patterns, melody | Primary [6][8]; press [7] |
| 6 | IBM Design Language | IBM | Precision; "man and machine" | 8-bar logo, 2x Grid, productive/expressive motion | Primary [9][10][11][12] |
| 7 | Slack (2019) | Pentagram + Slack in-house | Keep the octothorpe; make it work everywhere | Bubble + lozenge parts, 4 colors + aubergine | Primary [13][14] |
| 8 | Mozilla (2017) | johnson banks + Mozilla (open process) | The internet: URL language, text selection | moz://a, Zilla, highlight colors, imagery collective | Primary [15] |
| 9 | Spotify (2015, per press linked from the case page) | COLLINS | Personalized music experiences; energy of artists | Duotone "Lens," "Vibrating Color" pairs | Primary (studio) [16] |
| 10 | Uber (2018) | Wolff Olins + MCKL (type) | Movement; "let in the light, embrace black" | Wordmark, U frame, Uber Move, safety blue | Press [18]; studio [19] |
| 11 | Deliveroo (date [unverified]) | DesignStudio (now Further) | "Demand Awesome" | Simplified Roo, angles in type and pattern, rider kit | Primary (studio) [20] |
| 12 | Duolingo (c. 2019 [date unverified]) | johnson banks + Monotype | The owl's shape and spirit everywhere | Duo, Feather Bold, illustration guide | Primary (foundry) [21] |
| 13 | Stripe wave (2024) | FIELD.IO + Stripe | Precision and optimism in one evolving symbol | Wave with lead/support/disappear roles | Primary (studio) [22] |
| 14 | Linear (2024 UI; 2026 refresh) | Linear in-house | Calm focus: "Structure should be felt not seen" | Product UI as identity, restrained neutrals | Primary [23][24] |

Dropped as full cases (no primary explanation opened in this pass): Apple product-launch sites (use `visual-styles`
→ `apple-style.md`), Microsoft/Windows (only the Fluent motion principles are cited, §4.1), Vercel (the public
page covers mark usage only [25]), Mailchimp (cited for its verbal system only [17]).

### 2.2 Case notes

**1. MIT Media Lab, 2011 (TheGreenEyl and E Roon Kang).** Concept: "the intersection," each of three cone shapes
standing for an individual coming to the Lab [3].
- Derives: a Processing application placed three shapes on a square grid under rules (shapes must hit the boundaries and intersect). About 40,000 logos in 12 color combinations; each person chose one for their business card through a web interface [3].
- Moves: not documented in the opened source.
- Lands: personal stationery and an online picker. The source reports a 4×4 grid; Pentagram describes the same anniversary logo as a seven-by-seven grid [2]. The sources disagree; cite both.
- Borrow: a rule set instead of a drawing, when the brand *is* many people.
- Caution: in 2014 the Lab moved to a fixed monogram on the same grid. Pentagram framed the brief as combining "timelessness and flexibility" [2]. Don't read this as proof that generative marks fail; the source gives no recognition data.

**2. MIT Media Lab, 2014 (Pentagram).** Concept: keep the anniversary grid, generate a simple ML monogram and a glyph
for each of the 23 research groups: "an interrelated system of glyphs that at once establishes a fixed identity" [2].
- Derives: monogram, group glyphs, Helvetica reinstated because it was central to MIT's communications when the Lab was founded [1][2]. Muriel Cooper's 1962 MIT Press mark (seven vertical lines) is cited as the model of timelessness [2].
- Moves: described as "capable of continuous change," with Aron Fay extending the language into "multiple expressions of the word" in a real-time demonstration [2].
- Lands: each group gets its own sign that is visibly part of one family.
- Borrow: one grid, many marks; family resemblance by construction.

**3. Casa da Música, Porto (Sagmeister).** Concept: the team first wanted to avoid showing Rem Koolhaas's building,
then found that the building's form already works as a logo [4].
- Derives: the shape "changes from application to application and medium to medium, like a chameleon"; depending on the music, the building turns "like a die" to show different views [4].
- Color tool that samples an image (for example a painting of a composer) to color the logo's facets: reported by museum records found in search, not opened [unverified].
- Lands: posters and print per program. Motion not documented in the opened source.
- Borrow: when the client owns an iconic object or place, the object is the system.

**4. Google, 2015.** Concept: keep the simplicity of the homepage while working across watches, voice, and smart
devices [5].
- Derives: a custom geometric logotype keeping the multicolor sequence and the rotated "e"; a compact G with an optically corrected "overbite"; the dots; Product Sans for lockups; the G on the product-icon grid; red, green, and yellow made more vibrant so they hold saturation side by side [5].
- Moves: the dots express states (listening, thinking, replying, incomprehension, confirmation), moving on geometric arcs with "a standard set of quick easing curves" [5].
- Lands: the full-color logo SVG weighs 305 bytes versus about 14,000 for the old logo, removing the need for a text fallback on slow connections [5].
- Borrow: a **responsive logo family** (full logotype → G → dots) where the smallest member is a motion element.

**5. Mastercard, 2016 and 2019 (Pentagram); sonic brand 2019.** Concept: connection; the circular shapes suggest
inclusiveness [6].
- Derives: additive overlap read as "transparency and glow"; orange as primary with warm greys; FF Mark wordmark with circular letterforms; parametric shapes that generate "endless varied but related patterns"; icons, illustration, photo style [6].
- 2019: the name was dropped from the logo. The CMO said "more than 80 percent of people" spontaneously recognize the symbol without the word; the article doesn't say how it was measured [7]. Treat as company self-report [E3].
- Sound: the Mastercard melody is "the foundation of the company's sound architecture," extending to sound logos, ringtones, hold music, and point-of-sale acceptance sounds, arranged in operatic, cinematic, playful, and regional versions [8].
- Borrow: a two-shape geometry that generates type, pattern, and a melody that adapts by genre while staying one tune.
- Caution: symbol-only works after decades of fame. A new brand needs its name in the lockup.

**6. IBM Design Language.** Concept: precision and engineering, with motion that pairs "man and machine, organic and
engineered" [10].
- Derives: the 8-bar logo by Paul Rand, "unchanged since 1972"; black stripes drawn thicker than white so they "appear to be similar optically," and a reversed version with blunter counters [9]. A "2x Grid" based on divisions of two (2, 4, 8, 16, 32, 64 columns) for all visual elements [11]. Color rule: logo only in the blue and gray families, at least five "steps" between foreground and background [9].
- Moves: animation must be effective, concise, simple, and engineered; two types: productive ("efficiency and responsiveness") and expressive ("enthusiastic and vibrant") [10]. Carbon implements them as tokens (§4.1) [12].
- Lands: the logo appears on every official communication, usually front or back cover in print and as the final sign-off in video [9]. The logo must not go in container shapes, be outlined, or be made into a dot matrix [9].
- Borrow: name two motion modes and say which surfaces use which.

**7. Slack, 2019 (Pentagram + Slack in-house).** Concept: keep the octothorpe, remove reproduction problems [13][14].
- Why: the old logo "was 11 different colors," looked poor off white, and app buttons didn't match each other [14].
- Derives: mark rebuilt on a grid from the original; speech bubble + lozenge become standalone elements; 11 colors cut to four primaries plus aubergine as accent; the bubble becomes custom icons, illustrations, and rounded-corner motifs [13].
- Moves: not documented in the opened sources.
- Borrow: a refresh that turns the mark's parts into the system's vocabulary.

**8. Mozilla, 2017 (johnson banks, open design process).** Concept: the internet itself. The logo's "nod to URL
language" and a black bounding box that echoes selecting text [15].
- Derives: Zilla typeface (Typotheque), chosen to evoke the Courier used in coding and free to use; colors from browser highlight colors; "anyone can create the Mozilla logo by typing and highlighting with the Zilla font" [15].
- Imagery: a planned imagery collective of artists contributing GIFs, animations, and stills under Creative Commons, "dynamic imagery" that evolves with the internet [15].
- Lands: copy lines carry program, event, and team names; volunteer communities choose their own color and imagery while boxes and type keep them one Mozilla [15].
- Borrow: a **customizable** identity built from a typeface and one gesture, for communities.

**9. Spotify (COLLINS).** Concept: Spotify is in "the business of 'personalized music experiences'" [16].
- Derives: the "Lens" duotone, inspired by screen printing in music history, turns any third-party artist photo into a recognizable Spotify visual; "Vibrating Color," "bold, high-contrast color pairs that most brands avoid" [16].
- Lands: the personalization features (Discover Weekly, Wrapped) became the brand's social moments; the page notes Wrapped became widely shared [16]. Motion and type not documented in the opened source.
- Borrow: when you don't own the imagery (artists, users, partners), own the *treatment*.
- Note: COLLINS frames identity extensions as "Augments" (e.g., Memory Marker, Flex Deck) in its case pages [16][17].

**10. Uber, 2018 (Wolff Olins; type by MCKL).** Concept: research led to "let in the light, embrace black," "invest in
a wordmark, not a symbol," and "bring back the U" [18].
- Derives: white wordmark on black; the U "forms the framework for the new composition of its marketing material," with ads using photos wrapped by a white U or a U-shaped backdrop; Uber Move typeface based on transport-hub lettering; a bold black icon set paired with Uber Move for "a seamless system from text to icon"; illustration reduced to geometric shapes in block color; "safety blue" used sparingly in interactions [18].
- Wolff Olins' own page frames the work around "movement ignites opportunity" and dates the identity launch to 2019, before the IPO; Dezeen reported it in September 2018 [18][19]. Cite both dates.
- Borrow: one letter of the wordmark as the image frame; a functional accent color with a meaning (safety).

**11. Deliveroo (DesignStudio, now Further).** Concept: "Demand Awesome" [20].
- Derives: the Roo kept as key asset but simplified and made more abstract; "its angles carry into the typography and pattern language" [20].
- Lands: rider uniforms redesigned with flash material for visibility; jackets became a streetwear item; backpacks and merch drove customer acquisition; app, billboards, bags, stickers [20].
- Borrow: the angle of the mark as the system's rhythm; riders as moving media.

**12. Duolingo (johnson banks; Feather Bold by Monotype).** Concept: the owl's shape and spirit in every letter [21].
- Derives: Feather Bold built from the shapes of Duo's wing; many versions of the "g," central to logo and typeface; alternatives for nearly every letter tested against sample messaging [21].
- Moves, color, and illustration rules: reported in press coverage not opened in this pass [unverified].
- Borrow: the mascot as the source of the typeface, so even text-only posts carry the character.

**13. Stripe wave, 2024 (FIELD.IO + Stripe).** Concept: carry Stripe's "precision and optimism" without becoming
decorative or overused [22].
- Derives: other symbols were tested; the wave was kept as the most effective carrier. The system defines when the wave should lead, support, or disappear entirely, with motion studies for graphic, spatial, and dimensional behavior [22].
- Lands: payments interface, keynote, and a large-scale brand moment [22].
- Borrow: **role rules for the signature element** (lead / support / absent). Restraint is part of the system.
- Studio's closing line: "The strongest brand evolutions build on what people already recognise" [22].

**14. Linear (in-house).** Concept: calm focus; the product UI is the identity.
- Derives: the brand page reserves the primary color, a subtle desaturated blue, mostly for backgrounds; monochrome wordmark preferred; "Provide plenty of space around Linear assets" [23].
- 2026 refresh: "Don't compete for attention you haven't earned" and "Structure should be felt not seen"; neutrals moved from a cool blue-ish hue to "a warmer gray that still feels crisp, but less saturated"; a color tool exposed hue, chroma, and lightness for tokens [24].
- Lands: marketing shows the real product; social and web share the same restraint.
- Borrow: when the product is the hero, the identity is the product's restraint. See `visual-styles` → `dark-tech-saas.md`.

**Apply:** cite the case whose *method* fits ("container like Mozilla," "role rules like Stripe"), not its look.
**Limit:** case pages are the studio's or client's own account [E2 at best for outcomes]. Results quoted on them
(valuations, brand value) are not controlled evidence.

---

## 3. Flexible and dynamic identities

### 3.1 Types

Irene van Nes's *Dynamic Identities* (2012) is the standard typology. Its six methods are listed as container,
wallpaper, DNA, formula, customizer, and generator in a 2016 peer-reviewed paper [29]; *Eye*'s review describes
the container, wallpaper, DNA/formula, and generative chapters [28]. Add the responsive logo family as a seventh,
practice-based type.

| Type | What is fixed | What varies | Example (sourced) | Use when | Risk |
|---|---|---|---|---|---|
| Container | The outline or frame | The fill: image, pattern, color | MTV (cited in the review) [28]; Mozilla bounding box [15]; Uber U frame [18] | Many campaigns or content types under one sign | Fill overwhelms the frame at small sizes |
| Wallpaper | A constant central motif | The background behind it | 2x4's Brooklyn Museum logo (cited) [28] | Cultural programs with changing art | Background wins the attention, motif is ignored |
| DNA | Rules, not a drawing | The drawing each time | Google doodles (cited as DNA/formula) [28] | Strong, famous core already exists | No visual constant for newcomers |
| Formula | A rule or algorithm applied by hand | Output per application | Maureen Mooren's Marres identity, which the reviewer feared "stretches the principle to breaking point" [28] | Small cultural client with skilled in-house designers | Falls apart with inexperienced users [28] |
| Customizer | Tools and type | Who makes it and what they say | Mozilla: anyone types and highlights in Zilla [15]; MIT 2011 personal picker [3] | Communities, chapters, volunteers | Quality control; off-brand variations |
| Generator | Code and parameters | Each output (often real-time data) | MIT Media Lab 2011 [3]; Mastercard parametric patterns [6] | Brand about data, science, or many individuals | Novelty with no memory structure |
| Responsive logo family | Drawing family | Detail by size and context | Google logotype → G → dots [5]; Mastercard symbol-only [7] | Every digital brand (favicon to billboard) | Members that don't look related |

### 3.2 When flexibility helps or hurts recognition

| Finding | Grade | What it means |
|---|---|---|
| Distinctive assets are "non-brand name elements, such as colours, logos or characters that uniquely signal the brand." They need fame (people think of the brand) and uniqueness (only this brand); "Of these two, uniqueness is most important." Romaniuk's grid: use or lose, invest, avoid (famous but not unique), test or ignore [30]. | [E2] (Ehrenberg-Bass researcher's framework, read in a magazine article; peer-reviewed papers exist but weren't opened) | Pick the fixed set by uniqueness first. A shape every competitor uses can't be your constant. |
| "Inconsistencies in colours, fonts, logos and the like are the enemy of distinctive asset building"; "change is not consumer friendly" [30]. | [E2] | Flex inside the system, never across the fixed set. |
| Marketers' judgments of asset strength are "rarely accurate": they overestimate fame and underestimate uniqueness; group judgments were more accurate. Brus, Hartnett, Faulkner & Driesener, *Journal of Brand Management*, 2025; consumer tests of 400+ brand elements [31]. | [E1] single peer-reviewed study (read via trade report) | Don't trust the team's feeling that "everyone knows our color." Test with category buyers, or at least decide as a group. |
| Tropicana's 2009 packaging redesign: unit sales fell 20% and dollar sales 19% from Jan 1 to Feb 22 (Ad Age figures); competitors grew; the design was reverted [39]. Romaniuk estimates the cost at $26.3m [30]. | [E2] documented case; causation not isolated (seven weeks, other factors possible) | Removing a famous asset (the orange with the straw) is the classic way to lose recognition. |
| Flexible identities studied through Gestalt principles share figure-ground, continuity, closure, similarity, and proximity; "visual perceptual consistency is prerequisite for the extension of the variety" [29]. | [E3] (case analysis, no audience test) | Each variation must keep a perceptual constant (outline, proportion, grid). |
| Reviewer of *Dynamic Identities*: "fixating on at least one recognisable component can leave room to play with the others" [28]. | [E2] (expert opinion) | Same as the lock rule in §1.5. |
| Mastercard: more than 80% recognize the symbol without the name (company statement, method not given) [7]. | [E3] | Symbol-only is the *reward* of long consistency, not a starting point. |

**Decision rules**

1. Flex only after the fixed set is famous enough, or when the brand's subject *is* variety (a museum, a lab, a
   community). Startups usually need a stable mark and flexible *content*.
2. Vary one dimension at a time (fill, or color, or arrangement), never all of them in one piece.
3. Keep a perceptual constant on every variation: outline, grid, typeface, or device.
4. Write the generator's rules as guidelines that a junior designer can follow, with three correct and three wrong
   examples. Formula identities fail with inexperienced users [28].
5. Test recognition before rollout: show variations without the name to 5–10 people in the audience and ask which
   brand it is. This is a sanity check, not research.

**Apply:** social is where flexible identities pay off (campaign variety inside fixed templates); the favicon,
app icon, and avatar are where they must not flex.
**Limit:** no controlled study opened here shows that dynamic identities raise or lower recognition overall. Any
claim either way is [E3].

---

## 4. Motion identity

### 4.1 How studios define motion principles

| System | Principles (their words) | Concrete values | Source |
|---|---|---|---|
| IBM Design Language | Effective, concise, simple, engineered. Two types: productive ("efficiency and responsiveness") and expressive ("enthusiastic and vibrant"); "greater together" | See Carbon row | [10] |
| IBM Carbon (implementation) | "IBM motion is essential and efficient, guiding users to value as quickly as possible"; curves reflect "the duality of man and machine" | Durations: fast-01 70 ms, fast-02 110, moderate-01 150, moderate-02 240, slow-01 400, slow-02 700. Productive standard `cubic-bezier(0.2, 0, 0.38, 0.9)`, entrance `(0, 0, 0.38, 0.9)`, exit `(0.2, 0, 1, 0.9)`. Expressive standard `(0.4, 0.14, 0.3, 1)`, entrance `(0, 0, 0.3, 1)`, exit `(0.4, 0.14, 1, 1)` | [12] |
| Microsoft Fluent 2 | Functional, natural, consistent, appealing; "Consistent motion … strengthens Fluent's Unmistakably Microsoft principle"; larger elements get more time | Qualitative only on the opened page | [26] |
| Google identity (2015) | Dots express states; geometric arcs; "a standard set of quick easing curves" | Not published on the page | [5] |
| Google Material 3 Expressive research | Expressive design uses color, shape, size, motion, and containment to draw attention to key actions | 46 studies, 18,000+ participants; key elements spotted "up to four times faster"; but a redesign that dropped a familiar list pattern "suffered" and "a strong minority" preferred calmer versions | [27] |
| Apple (apple.com and platforms) | See `visual-styles` → `apple-style.md` (apple.com easing and Liquid Glass motion, with Reduce Motion) | In that file | internal |
| Studio default for expressive sites | One house easing, one duration scale, mood multipliers | `expressive-web` → Motion tokens | internal |

**Apply:** every identity names its motion modes (at minimum "product" and "brand moment"), assigns surfaces to
each, and ships them as tokens. IBM's productive/expressive split is the clearest public model.
**Limit:** Google's expressive research is vendor research, not peer-reviewed [E2]. It also documents the cost:
removing familiar patterns hurt usability [27].

### 4.2 Turn the logo's construction into the motion principle

Write the motion principle as one sentence: "*[What moves]* *[how]* because *[concept]*." Then derive transitions.

| Construction | Motion behavior | Transitions it gives you | Example |
|---|---|---|---|
| Parts that meet or interlock | Travel toward each other and lock | Page transitions as two panels meeting; success = parts locking | Seam (§1.3); Mastercard circles meeting (pattern, not a documented Mastercard animation) |
| A frame or container | Frame holds still, content changes inside | Image swaps inside the frame; carousel slides cut inside the frame | Uber U [18]; Mozilla box [15] |
| Dots or particles | Change formation to show state | Loader, listening, thinking, done | Google dots [5] |
| A grid-generated mark | Elements step along the grid | Glyphs rearranging; grid-snapped reveals | MIT Media Lab glyphs [2] |
| A rotating or faceted object | Turns to show another face | Section changes = new face; per-program variants | Casa da Música "turning like a die" [4] |
| Stripes, lines, or a stroke | Draw on, scan, or wipe in the stroke's direction | Wipes and progress bars along the stroke | IBM stripes (motion use not documented; pattern) |
| A wave, gradient, or field | Continuous slow drift; amplitude rises at key moments | Hero background; event moment; "lead/support/absent" roles | Stripe wave [22] |
| A character or mascot | Acting: anticipation, follow-through, reaction | Celebrations, empty states, errors | Duolingo (motion not documented in opened source) |

Rules:
1. **One principle, used everywhere:** logo animation, page transitions, loaders, social intros, and UI feedback
   share the same curve family and duration scale.
2. **The stop is the brand.** How a thing stops (hard lock, soft settle, overshoot, drift) says more about
   personality than how it starts.
3. **UI feedback stays productive.** Brand expression goes into moments people see rarely (first load, success,
   sign-off, hero), not into every hover (IBM: productive for task completion, expressive to mark the beginning of
   a process [10]).

### 4.3 Personality → motion parameters

Use the `expressive-web` motion tokens as the base and change only these parameters. Don't redefine the scale
per brand.

| Personality | Curve family | Duration vs. base tokens | Stop | Overshoot / bounce | Precedent |
|---|---|---|---|---|---|
| Precise, engineered | Fast out, gentle settle (Carbon productive-like) | 0.8–1× | Hard | None | IBM productive [12] |
| Confident, premium | Long ease-out, no bounce | 1–1.3× | Soft settle | None | `apple-style.md` |
| Calm, focused | Ease-out, low amplitude, few moving parts | 1× | Soft | None | Linear 2026 refresh [24] |
| Energetic, sporty | Steep ease-out, short | 0.6–0.8× | Hard cut | Rare | `expressive-web` mood multipliers |
| Luxurious, cultural | Slow in-out, fades and masks | 1.3–1.6× | Dissolve | None | `expressive-web` mood multipliers |
| Playful, friendly | Spring with visible overshoot | 1× | Overshoot then settle | Yes, on brand moments only | Duolingo-style (pattern) |
| Expressive, vibrant | Expressive curves (Carbon expressive-like), larger travel | 1–1.2× | Soft | Small | IBM expressive [12] |

**Limit:** these mappings are practitioner conventions [E2]. No study opened here ties specific curves to
personality ratings. Validate feel by watching the motion with the client (`expressive-web` rule 8).

### 4.4 Logo animation patterns

| Pattern | What happens | Best for | Length (starting values) | Risk |
|---|---|---|---|---|
| Construct | Parts assemble along the construction grid into the mark | Launch film, sign-off, loader | 1–2.5 s | Long builds annoy on repeat; make a short cut |
| Lock / join | Two parts travel and lock | Brands about connection or fit | 0.6–1.2 s | Becomes a cliché if the brand isn't about joining |
| Reveal through device | The graphic device wipes or masks to reveal the mark | Video intro/outro, social sign-off | 0.5–1 s | Device and mark must be visibly related |
| State loop | Mark or its reduced form (dots) shows listening, thinking, done | Assistants, loaders, voice UI | Loop | Auto-starting loops shown next to other content need a pause control (WCAG 2.2.2; rules in `accessibility` → `motion-media-and-forms.md`) |
| Morph | Mark morphs from or into a related shape (G → dots) | Responsive families, transitions | 0.3–0.8 s | Shapes must share topology or it looks like a glitch |
| Draw-on | Stroke draws in its natural direction | Line-based or signature marks | 0.8–1.5 s | Wrong stroke order looks amateur |
| Turn / facet | Object rotates to show another face | 3D or architectural marks | 1–2 s | Needs a real 3D model; avoid fake 3D |
| Idle / breathe | Subtle continuous motion on the static mark | Event screens, ambient displays | Loop | Distracting next to content; never in reading areas |
| Sign-off | Mark settles at the end of a video with sound | Every video, reel, ad | 1–2 s plus hold | IBM: logo usually appears at the end of videos as the final sign-off [9] |

**Logo motion deliverables (spec sheet):** master animation; short cut (≤ 0.8 s); sign-off with and without sound;
loop (if used) with a pause control; static end frame identical to the approved logo; reduced-motion version
(crossfade or none); exports for web (Lottie or Rive or CSS/SVG), video (ProRes/MP4 masters at the video spec in
`media-specs`), and a GIF only for email. Specify every curve and duration as tokens, not by eye.

### 4.5 Motion on each touchpoint (summary)

| Touchpoint | Mode | What carries the principle |
|---|---|---|
| Website hero and signature moment | Expressive | The concept's mechanic (`expressive-web` five ingredients) |
| Page and section transitions | Expressive, short | The construction's behavior (§4.2) |
| Product UI feedback | Productive | Durations at the fast end; no overshoot except success moments |
| Loaders | Either | Reduced mark or device in a state loop |
| Social reels and stories | Expressive | Logo reveal ≤ 1 s at start or sign-off at end; device as transition |
| Video ads | Expressive | Sign-off + sonic logo |
| Presentations | Productive | One transition type for the whole deck, from the principle |

### 4.6 Sonic identity

| Component | What it is | Derive from |
|---|---|---|
| Melody (sonic DNA) | A short motif that every audio asset uses | The concept's rhythm or shape (Seam: two tones converge) |
| Sonic logo | 1–3 s sign-off version of the melody | Pairs with the logo sign-off animation |
| Arrangements | Genre or regional versions of the same melody | Audience contexts (Mastercard: operatic, cinematic, playful, regional) [8] |
| Functional sounds | Success, error, notification, payment acceptance | Productive mode; very short; same tonal center |
| Hold music, event music | Longer pieces built on the motif | Scored by a composer |

**Evidence**

| Claim | Grade | Reading |
|---|---|---|
| Recognizability and recallability of 90 commercial sonic logos varied reliably across brands (1,860 participants). Melodic complexity predicted both, in opposite directions: "Greater structural complexity enhanced recognizability while hindering sung recall" [33]. | [E1] (peer-reviewed, *Psychology of Aesthetics, Creativity, and the Arts*) | Decide what you need. Recognition when heard (more structure is fine) or recall/humming (keep it simple). |
| Repeating sonic and visual logos in ads (1, 3, or 7 times; 300 Indonesian e-commerce consumers) raised recall, recognition, attitude, and purchase intention; benefits diminish after about three repetitions [34]. | [E1] single study, one market, no effect sizes in the abstract | Pair the sonic logo with the visual sign-off consistently; repetition, not novelty, builds the link. |
| "A sonic identity … is now just as important as a brand's visual identity" (quoted in Mastercard's release) [8]. | [E3] (marketing claim) | Don't repeat it to clients as a fact. |

Rules: sound is off by default on the web and in social autoplay (`expressive-web` → `build-and-qa.md` audio
policy). Every message carried by sound must also be visible (captions, visual sign-off). Keep one tonal center
across functional sounds and the sonic logo.

### 4.7 Reduced motion

- WCAG 2.2 SC 2.3.3 (Level AAA): "Motion animation triggered by interaction can be disabled," unless essential.
  Scrolling itself is essential; motion added to scrolling (parallax) is not. Technique C39: the
  `prefers-reduced-motion` media query [35]. SC 2.2.2 (Pause, Stop, Hide) covers motion that starts automatically [35].
- Brand rule: the **static end frame is the logo**. In reduced-motion mode, the logo appears in its final state or
  crossfades in under ~200 ms. Never hide the logo or content behind an animation that may not run.
- Give the identity a **reduced-motion version of each pattern**: transitions become crossfades, the signature
  moment becomes a sequence of still states, loaders become a static mark with a text status.
- Full implementation and the risk table: `accessibility` → `motion-media-and-forms.md` §1.5–1.6.

**Apply:** ship the reduced-motion version in the same file as the logo animation.
**Limit:** AAA is not usually a legal requirement, but vestibular users are real users. Treat it as the default
for brand motion, which is optional by nature.

---

## 5. Cross-touchpoint coherence

### 5.1 Touchpoint matrix

| Touchpoint | Carries the concept through | Fixed zone | Variable zone | Specs |
|---|---|---|---|---|
| Website hero | Signature moment = the concept as an interaction | Mark, nav, type system | Headline, imagery, the mechanic's content | `expressive-web` |
| Website transitions | Motion principle | Curve, duration | What moves | §4.2 |
| Favicon, app icon | Reduced mark from the responsive family | All | None | `media-specs` → `digital-platforms.md` |
| Social avatar | Mark alone, centered for circle crop, on primary color | All | None (maybe seasonal color, rarely) | `media-specs` → `social-formats.md` |
| Social feed posts | Template with the graphic device | Device, logo position, type styles | Image, headline, color pair | §5.3 |
| Carousel | Device continues across slides | First and last slide structure | Middle slides | §5.3 |
| Reels and stories | Motion principle + sign-off | Intro/outro, caption style | Footage | §4.4; `media-specs` → `social-formats.md` §10.2 |
| Product UI | Color roles, type, icon rules, productive motion | Tokens | Content | §5.4 |
| Deck | Grid, type, device as divider, one transition | Master layouts | Content | — |
| Email | Type (with fallbacks), color roles, device as divider | Header, footer | Body | `media-specs` → `digital-platforms.md` §7 |
| Merch and environment | Device and pattern at large scale; mark small | Mark rules | Pattern use | Deliveroo rider kit [20] |
| Video ads | Sign-off animation + sonic logo | End card | Story | §4.4, §4.6 |
| OOH | Device + one line + mark | Mark size, device | Image, line | `media-specs` → `out-of-home.md` |

### 5.2 Website: where the concept lands

1. **Hero:** the concept sentence's metaphor as the first image or interaction, not a generic gradient
   (`ai-slop` layout tells).
2. **Signature moment:** one interaction that performs the concept ("This site is a ___, so scrolling ___").
   Derive it from the motion principle (`expressive-web` method).
3. **Transitions:** the construction's behavior (§4.2) with the house easing.
4. **Small details that prove the system:** loader = reduced mark in a state loop; 404 = the device broken or
   incomplete; focus ring and selection color = brand accent role; favicon = smallest family member.
5. **Product proof:** show the real product or real subject (Linear shows its UI; Spotify shows artists through
   its treatment).

### 5.3 Social: template thinking

Think in **fixed zones** (the identity) and **variable zones** (the content). A template is a grid plus rules
about which zones can change.

| Zone | Fixed or variable | Contents | Rule |
|---|---|---|---|
| Device zone | Fixed | Graphic device (seam line, frame, U, wave) | Same position in every post of a series |
| Logo zone | Fixed | Mark or wordmark, small | Inside the platform safe area; usually a corner, same corner every time |
| Headline zone | Variable content, fixed style | Headline in the display style | Short enough to read at feed-glance speed; one type style; sizes from `media-specs` → `social-formats.md` §10.3 |
| Image zone | Variable | Photo or illustration with the brand treatment | Treatment fixed (duotone, crop rule, light recipe) |
| Color pair | Variable within palette | Background/foreground pair | Choose from approved, contrast-checked pairs |
| Series marker | Fixed per series | Number, label, or color for the content pillar | One marker style per pillar |

Template set to deliver (sizes from `media-specs` → `social-formats.md`; design 4:5 and 9:16 masters):
- Feed: 3–5 layouts (quote, image + headline, data point, announcement, product).
- Carousel: cover, body, and end-card layouts. Let the device run across slide edges so the swipe continues the line.
- Reels/stories cover and frame: text and logo inside the universal 9:16 safe box from `media-specs` → `social-formats.md` §10.2.
- Avatar and highlight covers: the mark and the device only.
- Motion kit: intro (≤ 1 s), sign-off, transition, caption style.

**Grid of the profile:** decide whether the profile grid is designed as a whole (risky: platforms change
crops and ordering) or each post stands alone (safer). Check the current grid-tile ratio in `media-specs`
before designing mosaics; it is marked as uncertain there.

**Apply:** the same post with the logo covered should still be recognizable as the brand. That is the fixed-zone test.
**Limit:** templates speed production but breed sameness. Rotate layouts within the set and keep the image and
copy specific (`ai-slop` → social tells).

### 5.4 Product UI vs. brand surfaces

Public systems separate brand expression from product UI:
- Atlassian's design system groups color, type, iconography, illustrations, logos, and motion under Foundations
  and links a **Brand kit** hosted separately [37]. "Color distinguishes our brand and reinforces experiences
  across apps" [37].
- IBM keeps the brand language (IBM Design Language) and the product implementation (Carbon) as separate sites,
  sharing the motion modes and tokens [10][12].
- Linear's brand page reserves the brand color mostly for backgrounds; the product's identity is its calm [23][24].

Rule: **brand volume dial.** Product UI runs at low volume (tokens, type, icon rules, productive motion,
accent as a role); marketing, social, and launches run at high volume (device, imagery treatment, expressive
motion, sound). Both use the same tokens.

### 5.5 The throughline test (run before delivery)

- [ ] The concept sentence fits on one line, and each reviewer can repeat it.
- [ ] Every element in the derivation table has an answer or a written reason for being empty.
- [ ] The logo's construction is visible in at least two other elements (grid, device, type, motion).
- [ ] At least two fixed elements appear on every touchpoint (§1.5).
- [ ] The website's signature moment performs the concept; describe it in one sentence.
- [ ] A social post with the logo covered is still recognizable.
- [ ] Favicon, avatar, and app icon belong visibly to one responsive family.
- [ ] One motion principle: logo animation, transitions, social intros, and UI feedback share curve and scale.
- [ ] Reduced-motion versions exist for each pattern; the static end frame is the logo.
- [ ] Color roles are the same in UI, web, and social (the accent means the same thing everywhere).
- [ ] Voice sample on the site, in a caption, and in a UI error message sounds like the same speaker.
- [ ] Imagery follows one treatment; no stock or generated image that could belong to any brand (`ai-slop`).
- [ ] The re-run test: another company in the category would not arrive at the same system.

Total design reference: Jacobsen's SAS Royal Hotel, where "total design" means shared logic, not sameness
(`design-history` → `masters-product-industrial.md`).

### 5.6 Worked example: Seam across touchpoints

| Touchpoint | Seam |
|---|---|
| Logo | Two blocks meeting at a 1-unit step |
| Website hero | Left panel shows the visitor's source system, right panel their target; scrolling slides them together and the seam line "locks" (the signature moment) |
| Transitions | Panels meet at the seam with `--ease-in-out`, `--dur-ui`; no bounce |
| Product UI | Neutral UI; accent only on connections and active states; the success toast uses the lock motion |
| Feed post | 5:3 split; photo of a real join left, headline right, seam line on the split, mark bottom-left |
| Carousel | Seam line continues across slides; the last slide closes the seam with the mark |
| Reel | Two clips enter from opposite sides and lock on the seam; sign-off with the two-tone sonic logo |
| Avatar | The mark alone, centered on ink |
| Deck | Every divider slide is a seam; one transition (panel meet) |
| Merch | Seam line as a woven tape detail; mark small |
| Error state (UI) | "These two didn't fit. Here's why:" in the brand voice |

---

## 6. Tech-brand identity patterns, 2024–2026

### 6.1 The families

| Family | DNA | Owner precedent | What makes it ownable | What reads generic | Style recipe |
|---|---|---|---|---|---|
| Precision and restraint ("Apple-like") | Product as hero, near-white or near-black stage, one accent, large type, slow reveals | Apple | Real product photography and renders of an actual object; consistency over decades | Copying the look without a product worth showing; SF-like type and gray gradients with stock 3D | `visual-styles` → `apple-style.md` |
| Dark stage, calm product | Tinted near-black, hairlines, one restrained accent, real UI screenshots | Linear [24] | The real product UI and restraint as principle | Purple glow behind a fake dashboard | `dark-tech-saas.md` |
| Signature generative element | One evolving form (wave, gradient field) with role rules | Stripe [22] | The element has rules: lead, support, or absent | Mesh gradients that aren't anyone's | `gradient-aurora-mesh.md` |
| Glass and material | Translucent layers, depth, light | Apple platforms | Platform material respecting user settings | Frosted cards over a blob background | `glassmorphism.md`, `apple-style.md` |
| 3D renders and immersive | Rendered objects, camera moves | Product launches | A real model of the real product or a concept object | Generic glossy clay or isometric worlds | `immersive-3d-webgl.md`, `claymorphism.md` |
| Kinetic type | Type as the hero, moving with scroll or beat | Launch films, events | A custom or licensed display face with a reason | Default sans with fade-up per word | `kinetic-typography.md` |
| Engineered systems | Grids, mono type, technical diagrams | IBM [9][11] | A long-lived mark and a documented language | Decorative grid backgrounds | `swiss-international.md`, `data-dense-functional.md` |

### 6.2 How leading tech brands avoid sameness

1. **Own one asset and give it rules.** Stripe kept the wave and wrote when it leads, supports, or disappears [22].
   IBM's 8-bar has not changed since 1972 and has detailed usage rules [9].
2. **Show the real thing.** Linear shows its product and changes it in public with reasons [24]. Product-as-hero
   only works if the product is shown truthfully.
3. **Make restraint a principle, not a default.** "Don't compete for attention you haven't earned" [24] is a
   rule you can apply to any surface; "minimal" isn't.
4. **Derive motion from the identity.** Google's dots move on arcs from the logo's geometry with one easing set [5].
5. **Evolve, don't replace.** "The strongest brand evolutions build on what people already recognise" [22];
   distinctive-asset research gives the same advice [30].

### 6.3 What reads as generic now

Use the `ai-slop` catalogs rather than this list. The identity-specific tells: initials in a circle or shield,
swoosh or orbit marks, gradient blobs, a mark with no system (`ai-slop` → `imagery-and-brand.md` §5); purple
or blue-to-purple gradients, Inter/Geist everywhere, centered hero with two buttons, fade-up on every section
(`ai-slop` → `ui-and-web.md` §3). If an identity could be swapped with a competitor's by changing the name, it
failed the throughline test.

**Apply:** pick at most one family as a base and add one owned element (device, treatment, motion principle)
that no family provides.
**Limit:** "tech" audiences are not homogeneous. Developer tools, consumer AI, and enterprise infrastructure need
different volumes (`visual-styles` fit/avoid sections).

---

## 7. Brand guidelines

### 7.1 What a living guideline contains

| Section | Contents | Format that works |
|---|---|---|
| Brand core | Concept sentence, metaphor, positioning, personality (3 adjectives + 1 "not"), voice principles | One page, before any visual |
| Logo | Versions (responsive family), construction, clear space, minimum sizes, color versions, misuse list, co-branding | Downloadable SVG/PNG + rules with numbers (e.g., Spotify: logo ≥ 70 px digital / 20 mm print; icon ≥ 21 px / 6 mm; exclusion zone = half the icon height [36]) |
| Color | Values per space (hex, OKLCH, RGB, CMYK, Pantone), roles, approved pairs with contrast, proportions | Tokens (DTCG JSON) + swatches (`color`) |
| Typography | Families, licenses, scale per medium, fallbacks | Tokens + specimen |
| Grid and layout | Grid logic, spacing tokens, layout templates | Figma library + examples |
| Graphic device | Construction, roles, do and don't | Components |
| Imagery | Treatment, light recipe, crop rules, casting, AI policy | Style tile + approved/rejected sets (`ai-slop` campaign rules) |
| Iconography and illustration | Grid, stroke, corner, style rules | Library |
| Data viz | Palette, marks, annotation | Chart templates |
| Motion | Principle sentence, modes, tokens, logo animations, reduced-motion versions | Tokens + video references + Lottie/Rive files |
| Sound | Melody, sonic logo, functional sounds, usage | Audio files + rules |
| Voice and tone | Principles, tone by context, word list, examples | Before/after table |
| Templates | Social, deck, email, documents, signage | Live templates (Figma, Canva brand templates) |
| Governance | Owner, request process, change log, version | One page |

**Living, not a PDF.** IBM's Design Language pages carry a "Last updated" date (21 October 2026 when checked) and
an "Edit this page on GitHub" link [9][10]. Atlassian splits foundations, components, and tokens, and states that
"Design tokens are the single source of truth" for UI decisions [37].

### 7.2 Public guidelines worth studying (checked 2026-10)

| Guideline | What it teaches | Source |
|---|---|---|
| IBM Design Language (8-bar, 2x Grid, animation) | Logo rules with optical reasoning; legal sign-off placement; grid logic; motion modes | [9][10][11] |
| IBM Carbon motion | Motion as tokens with exact curves and durations | [12] |
| Atlassian Design (Foundations) | Brand kit separated from the product design system; tokens as source of truth | [37] |
| Spotify for Developers: design guidelines | Partner rules with numbers: logo minimums, exclusion zone, green only on black or white, no cropping or overlays on artwork, attribution and linking | [36] |
| Slack media kit and Brand Center | Asset distribution, permission language ("By using the Slack marks you agree to follow these guidelines"), request process with a mockup | [38] |
| Linear brand page | Minimal usage rules, naming rules, monochrome preference | [23] |
| Vercel brands page | Variant choice by background "independently of your browser theme"; clear space = symbol height; misuse list | [25] |
| Mozilla brand portal (brand.mozilla.com) | Exists; content didn't render for this pass [unverified] | — |

### 7.3 Governance basics

| Item | Rule |
|---|---|
| Owner | One named brand owner who approves changes to the fixed set |
| Versioning | Version number + change log; date every page |
| Distribution | One source (asset portal or design library); no assets in email attachments |
| Requests | A form or channel for uses not covered, with a mockup (Slack asks for a "visual mockup" [38]; IBM evaluates third-party requests individually [9]) |
| Templates | Templates are the guideline for most users; keep them in sync with tokens |
| Partner rules | Separate, shorter guide for partners and press (Spotify, Vercel, Linear model) [23][25][36] |
| Review cadence | Audit touchpoints at least yearly for inconsistencies in color, fonts, and logos [30] |
| Measurement | Test the fixed set's fame and uniqueness with category buyers before changing it [30][31] |
| Change policy | Evolve over replace; retire assets only with evidence (Tropicana [39]) |

---

## 8. Mistakes and myths

| Myth or mistake | What the evidence says | Do instead | Grade |
|---|---|---|---|
| "Consistent brand presentation increases revenue by 23%" | Traced to Lucidpress (with Demand Metric) surveys of "brand management experts at more than 200 organizations"; respondents *estimated* the growth. The 2019 edition put the estimate at 33% and described the earlier one as 23% [32]. Self-estimates by people who manage brands, from a vendor selling brand templating software. | Argue consistency with distinctive-asset research [30][31]; never quote the 23% as a measured effect | [E3] |
| "A dynamic identity means the logo can change every time" | Flexible identities need a perceptual constant [29]; the review of van Nes warns that rule-only identities can break down [28] | Lock at least one recognizable component; vary one dimension at a time | [E2]/[E3] |
| "Consistency means everything looks the same" | Total design is shared logic; Jacobsen's pieces varied in form (`design-history`). Mozilla let communities choose color and imagery inside fixed boxes and type [15] | Fix rules and assets; vary content | [E2] |
| "Rebrand = new logo, start fresh" | Removing famous assets can cost sales (Tropicana: -20% units in seven weeks, reverted) [39]; Romaniuk: "change is not consumer friendly" [30] | Audit assets, keep the famous and unique ones, evolve | [E2] |
| "We know which of our assets are distinctive" | Marketers overestimate fame and underestimate uniqueness [31] | Test with category buyers or decide as a group | [E1] single study |
| "Mastercard dropped its name, so we can go symbol-only" | 80% recognition is a company statement with no method given, after decades of exposure [7] | Keep the name in the lockup until recognition is tested | [E3] |
| "Motion is added at the end by the developer" | Studios define motion as part of the language with tokens [10][12][26] | Derive the principle from the logo construction; ship tokens with the identity | [E2] |
| "Expressive motion always performs better" | Google's research: faster spotting of key elements, but removing familiar patterns hurt usability and a strong minority preferred calmer versions [27] | Expressive on brand moments, productive in task UI | [E2] |
| "A more complex sonic logo is more memorable" | Complexity helps recognition and hurts sung recall [33] | Decide recognition vs. recall; keep the motif simple if people should hum it | [E1] |
| "Sound is as important as the visual identity" | Marketing claim in a press release [8] | Add sound only where there are audio touchpoints | [E3] |
| "Reduced motion = remove all animation" | WCAG 2.3.3 allows essential motion; reduced versions can crossfade [35] | Ship reduced variants; static end frame = logo | [E2] |
| "The brand color should be everywhere" | Uber uses safety blue sparingly in interactions [18]; Linear reserves its blue mostly for backgrounds [23] | Give color roles; let the accent mean something | [E2] |
| "Put the logo on every slide and every frame" | IBM places the logo on covers and as the final video sign-off [9] | Logo at start or end; device carries recognition in between | [E2] |
| "Brand guidelines are a PDF" | Public systems are web docs with update dates and source control [9][37] | Living site + tokens + templates + change log | [E2] |
| "A generative identity is automatically distinctive" | The MIT Media Lab moved from 40,000 generated logos (2011) to a fixed monogram on the same grid (2014) [2][3]; no recognition data was published either way | Generators need a fixed constant and curation | [E3] |
| "Dark mode + gradient + 3D = premium tech" | These are the most common generated defaults (`ai-slop`) | Own one asset with rules (§6.2) | [E2] |
| "Our template set is the identity" | Templates without a concept produce consistent sameness | Derive templates from the device and the concept (§5.3) | [E2] |

---

## Sources

[1] Pentagram. (n.d.). *MIT Media Lab* (project page). Accessed 2026-10. https://www.pentagram.com/work/mit-media-lab
[2] Pentagram. (2014, October 24). *MIT Media Lab* (news). https://www.pentagram.com/news/mit-media-lab
[3] CreativeApplications.Net. (2011). *MIT Media Lab identity* (Processing). Secondary trade source. https://www.creativeapplications.net/processing/mit-media-lab-identity-processing/
[4] Sagmeister Inc. (n.d.). *Casa da Música*. Accessed 2026-10. https://sagmeister.com/work/casa-da-musica/
[5] Google. (c. 2015; undated page). *Evolving the Google Identity*. Google Design. https://design.google/library/evolving-google-identity
[6] Pentagram. (n.d.). *Mastercard* (project page). Accessed 2026-10. https://www.pentagram.com/work/mastercard
[7] Pownall, A. (2019, January 10). *Mastercard drops its name from logo in subtle refresh of Pentagram redesign*. Dezeen. https://www.dezeen.com/2019/01/10/mastercard-rebrand-pentagram-design/
[8] Mastercard. (2019, February 8). *Sound on: Mastercard debuts sonic brand* (press release). https://newsroom.mastercard.com/news/press/2019/february/sound-on-mastercard-debuts-sonic-brand/
[9] IBM. (last updated 2026-10-21). *IBM Design Language: 8-Bar*. https://www.ibm.com/design/language/ibm-logos/8-bar/
[10] IBM. (last updated 2026-10-21). *IBM Design Language: Animation overview*. https://www.ibm.com/design/language/animation/overview/
[11] IBM. (accessed 2026-10). *IBM Design Language: 2x Grid*. https://www.ibm.com/design/language/2x-grid/
[12] IBM. (accessed 2026-10). *Carbon Design System: Motion overview*. https://carbondesignsystem.com/elements/motion/overview/
[13] Pentagram. (n.d.). *Slack* (project page). Accessed 2026-10. https://www.pentagram.com/work/slack
[14] Slack. (2019, January 16). *Say hello to our new logo*. https://slack.com/blog/news/say-hello-new-logo
[15] Murray, T. (2017, January 18). *Arrival*. Mozilla Open Design blog. https://blog.mozilla.org/opendesign/arrival/
[16] COLLINS. (n.d.). *Spotify* (case study). Accessed 2026-10. https://www.wearecollins.com/work/spotify/
[17] COLLINS. (n.d.). *Mailchimp* (case study). Accessed 2026-10. https://www.wearecollins.com/work/mailchimp/
[18] Dezeen. (2018, September 14). *Uber rebrand by Wolff Olins* (black-and-white wordmark, Uber Move by MCKL). https://www.dezeen.com/2018/09/14/uber-rebrand-wolff-olins-black-white-wordmark-logo-typography/
[19] Wolff Olins. (n.d.). *Uber* (case study). Accessed 2026-10. https://www.wolffolins.com/work/uber
[20] Further (formerly DesignStudio). (n.d.). *Deliveroo* (case study). Accessed 2026-10. https://www.further.group/work/deliveroo
[21] Monotype. (n.d.). *Duolingo: Feather Bold* (studio portfolio). Accessed 2026-10. https://cms-prod.monotype.com/studio/portfolio/duolingo
[22] FIELD.IO. (2024). *Stripe wave brand system*. https://field.io/work/stripe-wave-brand-system
[23] Linear. (accessed 2026-10). *Brand*. https://linear.app/brand
[24] Aufmann, C., & Heckel, M. (2026, March 12). *Behind the latest design refresh*. Linear. https://linear.app/now/behind-the-latest-design-refresh
[25] Vercel. (accessed 2026-10). *Geist: Brands*. https://vercel.com/geist/brands
[26] Microsoft. (accessed 2026-10). *Fluent 2: Motion*. https://fluent2.microsoft.design/motion
[27] Google Design. (c. 2025; undated page). *Expressive design: Google's research*. https://design.google/library/expressive-material-design-google-research
[28] Missingham, A. (2013). *From logo to holo* (review of Irene van Nes, *Dynamic Identities*, 2012). *Eye* 86, vol. 22. https://eyemagazine.com/review/article/from-logo-to-holo
[29] Lee, S. J. (2016). A study on constancy of flexible identity from Gestalt principles. *Journal of Brand Design Association of Korea*, 14(1), 183–194. Abstract read. https://www.earticle.net/Article/A267196
[30] Romaniuk, J. (c. 2012–2013; undated page). *Brands of distinction*. Ehrenberg-Bass Institute (originally in *unisabusiness*). https://marketingscience.info/news-and-insights/brands-of-distinction
[31] Marketing Week. (2025, July). *Marketers' judgement of brand asset strength "rarely accurate", study finds* (reporting Brus, R., Hartnett, N., Faulkner, M., & Driesener, C., *Journal of Brand Management*, 2025). Secondary report. https://www.marketingweek.com/marketers-judgement-strength-brand-assets-rarely-accurate/
[32] ASI Central. (2019, December 3). *Survey: Brand consistency can boost sales* (on Lucidpress's 2019 State of Brand Consistency report). https://members.asicentral.com/news/newsletters/promogram/december-2019/survey-brand-consistency-can-boost-sales/
[33] Silas, S., Robinson, M., Baker, D. J., Harrison, P., Jacoby, N., et al. (accepted version, n.d.). *The recall and recognition of sonic logos*. *Psychology of Aesthetics, Creativity, and the Arts*. University of Cambridge repository. https://www.repository.cam.ac.uk/handle/1810/402035
[34] Pramana, L. V., Putri, N. V. A., Rahman, F., & Prasetya, P. (2024). The effects of sonic logo and visual logo repetition towards brand recall, recognition, attitude, and purchase intention. *Journal of Consumer Sciences*, 9(3), 338–361. https://journal.ipb.ac.id/jcs/article/view/57484
[35] W3C. (accessed 2026-10). *Understanding SC 2.3.3: Animation from Interactions* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html
[36] Spotify for Developers. (accessed 2026-10). *Design & Branding Guidelines*. https://developer.spotify.com/documentation/design
[37] Atlassian. (accessed 2026-10). *Atlassian Design System: Foundations*. https://atlassian.design/foundations
[38] Slack. (accessed 2026-10). *Media kit*. https://slack.com/media-kit
[39] Fortune. (2024, November 19). *Tropicana bottle packaging redesign backlash* (includes the 2009 redesign figures, citing Ad Age). https://fortune.com/2024/11/19/tropicana-bottle-packaging-redesign-backlash-shrinkflation
