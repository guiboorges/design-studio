# Logo Design

> **Scope:** How to choose a logo type, derive a mark from a concept, build three genuinely different routes, construct and optically correct the mark, test it (sizes, one color, motion, similarity), package it, animate it, and present it to a non-designer client with a reason for every decision. Includes 13 sourced case studies and 4 graded backlash cases.
> **Last verified:** 2026-10 (case-page content, trademark database features, Android splash-screen limits, WCAG and MDN motion rules)
> **Used by:** identity-designer, creative-director, design-critic

**How to use this file**

| You need to... | Go to |
|---|---|
| Decide wordmark vs. symbol vs. emblem for this client | §1 |
| Turn the brand concept into marks; make three routes that really differ | §2 |
| Borrow a documented rationale from a real case | §3 |
| Warn a client about changing an existing mark | §4 |
| Draw, correct, and finish the mark | §5 |
| Prove the mark works before showing it | §6 |
| Hand over files | §7 |
| Animate the mark | §8 |
| Present the routes and explain the "why" | §9 |
| Check a claim before repeating it | §10 |

Biographies and verified quotes of Rand, Bass, Glaser, Chermayeff & Geismar & Haviv, Scher, Bierut, and Hara live in
`design-history` → `references/masters-graphic-modernist.md` and `references/masters-graphic-contemporary.md`.
This file links to them and does not repeat them. Check the myths tables there before quoting any of these designers.

---

## 0. Ten rules (read first)

1. **A mark needs a reason, a symbol needs a better one.** Sagi Haviv starts "with the premise that there has to be a good reason for a symbol"; without one, "the focus should be on the name" [18]. Default to a wordmark; add a symbol only when §1 justifies it.
2. **One idea per mark.** The concept must fit in one sentence of plain words and one sentence of geometry. Rand's NeXT booklet argues that letterforms should be "simple, unmannered, and untrendy so as not to distract from the cube concept" [4].
3. **Meaning is earned, not drawn.** Rand: "A logo takes on meaning, only if over a period of time it is linked to some product or service" [4]. Never promise a client that the mark alone will communicate the business. [E2: practitioner consensus]
4. **Draw by hand first.** Haviv: "The computer will not help you connect with your creative impulses. A pencil will" [18]. For an agent: thumbnails as quick SVG or Figma sketches, many and rough, before any refinement.
5. **Three routes that differ in kind** (literal, abstract, typographic), not three variations of one idea (§2.4).
6. **Smallest size and one color first.** Design and judge the mark at 16 px and in solid black before color, gradient, or texture (§5.6, §6).
7. **Correct by eye, not by ruler.** Geometry is the scaffold; optical correction is the finish. "We read with our eyes, not with rulers, so the eye should win every time" (Frere-Jones) [25].
8. **Test before you show.** Every route goes to the client with its test strip (§6).
9. **Present in context with a written reason.** Haviv: "in our business, presentation is everything" [18] (§9).
10. **Similarity check is not clearance.** Run the database and reverse-image checks in §6.3, then tell the client in writing that legal clearance needs a trademark lawyer.

---

## 1. Logo typology: which kind of mark fits

### 1.1 The eight types

| Type | What it is | Fits when | Avoid when | Examples (verified in this pass or linked) |
|---|---|---|---|---|
| **Wordmark (logotype)** | The name set or drawn as letters, no separate symbol | Default for new brands. Name is short to medium, distinctive, and must be learned. Low media budget. | Name is very long, generic, or must work across many languages and scripts as a glyph | Google logotype (2015) [6]; FedEx (1994) [13]; Mozilla `moz://a` (2017) [7] |
| **Lettermark / monogram** | Initials or one letter as the mark | Long or multi-word name that people already shorten; need for a compact app icon | The initials mean nothing yet to the audience, or collide with many existing monograms | IBM (Rand; 8-bar 1972) [5]; Google "G" for small contexts [6]; Jaguar "Jr" roundel (2024) [23] |
| **Pictorial symbol** | A recognizable object | The object is ownable and tied to the name or a truth about the product | The object is a category cliché (lightbulb, leaf, rocket); see `ai-slop` → `imagery-and-brand.md` §5 | Apple (Janoff, 1977) [14]; Instagram camera glyph (2016) [8]; Jaguar leaper [23] |
| **Abstract symbol** | A non-representational form | Large organizations, mergers, many sub-brands, international reach, a budget to build recognition | Small brand with little exposure: abstract marks gain meaning only through repetition [E3] | Mastercard circles (2016) [1]; Meta loop (2021) [16]; Airbnb bélo (2014) [11]; Chase octagon (C&G, linked) |
| **Emblem** | Name inside a badge, shield, or seal | Heritage, institutions, sports, craft products, packaging | Must work at 16 px or as an app icon: internal text dies at small sizes | UPS shield (Rand, 1961, linked); NeXT cube carries the name inside it (Rand, 1986) [4] |
| **Combination mark** | Symbol plus wordmark as a fixed lockup, usable apart | Most growing companies: wordmark builds the name, symbol earns the small-size role later | You can't afford to build recognition for two elements | Spotify icon + wordmark (icon may stand alone "when the Spotify brand is already established") [27]; Vercel symbol + logotype [28] |
| **Dynamic / flexible mark** | A fixed core plus rule-based variation (color, fill, content, form) | Cultural institutions, platforms built on user content, research labs, brands whose story is variety | The organization lacks the discipline or tools to apply rules; the variation erases the core | Google dots that "express listening, thinking, replying" [6]; Mozilla color bars that hold type and images [7]; Airbnb "create airbnb" personalization [11]; MIT Media Lab (Bierut, linked) |
| **Mascot / character** | A character that represents the brand | Consumer, food, family, gaming; brands that talk in first person on social | Serious B2B, finance, health where a character undercuts trust; brands that can't fund illustration across poses | Cracker Barrel's "Old Timer" (a man in overalls beside a barrel), defended by customers in 2025 [24] |

**Apply:** Pick the type with the decision procedure below, then write the reason in one sentence for the client
("We recommend a wordmark because your name is short, unusual, and still has to be learned").
**Limit:** The type is a means, not the concept. A wordmark without an idea is a font choice.

### 1.2 Decision procedure (run in order, stop at the first "yes")

| # | Question | If yes |
|---|---|---|
| 1 | Is there an existing mark with recognition? | Evolve it. List its equities (shape, color, letterforms, container) and keep the ones people recognize (§4). |
| 2 | Is the name long (more than about 3 syllables or 2 words), hard to pronounce in target markets, or a merger of names? | Consider an abstract symbol or monogram that can stand in for the name. C&G's Chase octagon replaced "the company's unwieldy name" (see `masters-graphic-contemporary.md`). |
| 3 | Does the product live as an app icon, avatar, or favicon from day one? | Combination mark: wordmark plus a compact symbol or monogram derived from it (Google derived a heavier "G" from the logotype for small contexts) [6]. |
| 4 | Will the brand host many sub-brands or products? | A symbol plus a naming rule, or a fixed core with a dynamic system. |
| 5 | Is the brand's story variety or user-generated content? | Dynamic mark with one fixed element (§1.1). |
| 6 | Is the audience consumer and conversational (food, family, gaming)? | Consider a mascot as a secondary asset, not as the only mark. |
| 7 | None of the above | Wordmark. Spend the effort on custom letterforms and one distinctive detail (§5.4). |

### 1.3 Fit by company stage and budget

| Stage / situation | Recommended type | Why | Evidence |
|---|---|---|---|
| Pre-launch startup, small budget | Wordmark, optionally with a monogram for the app icon | The name is the asset that must be learned; a symbol doubles the learning cost | [E2] Haviv's "good reason for a symbol" rule [18] |
| Growth stage with an app | Combination mark | The icon must work alone at small sizes; the wordmark teaches the name | [E2] Spotify allows the icon alone only when there's no room or the brand is established [27] |
| Large or global company | Abstract or pictorial symbol plus wordmark; symbol may later stand alone | Exposure lets an abstract form acquire meaning | [E3] Mastercard dropped the name from the mark in 2019 after decades of exposure (see Bierut entry, linked) |
| Holding company, merger, institution with many units | One symbol plus naming rules | Replaces a cluster of legacy logos | [E2] C&G Chase and Smithsonian (linked) |
| Local business, craft, heritage | Emblem or combination mark | Signage, packaging, and stamps carry the badge; the app icon is a lesser need | [E2] |

**Apply (UI/app):** if the product ships an app, include a symbol or monogram route even when the wordmark is primary,
because the app icon cannot carry a long wordmark. Check icon sizes in `media-specs` → `digital-platforms.md` §3.8 and §4.4.
**Limit:** "Symbols are more memorable than words" is not established for logos [E3]. Do not use it as an argument.

---

## 2. From concept to mark

### 2.1 What the masters say a mark must do (verified wording only)

| Source | Criteria, as stated | How to use it in a review |
|---|---|---|
| Rand, NeXT booklet (1986) [4] | Form is determined by "needs, not wants, ideas, not type styles." A logo "should explain or suggest the business it symbolizes, but this is rarely possible." A memorable device offers "the promise of meaning, and the pleasure of recognition." | Ask: what device will people remember? Do not demand that the mark explain the business. |
| Haviv, interview (2010) [18] | "For a logo to work — and work for a long time — it must be simple." It must be "an effective identifier that is appropriate for the client." Choosing a logo "is not about what one likes or dislikes: it's about what works." "If the mark is simple and distinctive enough, it can take on any treatment or filter." | Three gates: simple, appropriate, distinctive. Turn "I like it" into "does it work?" |
| Geismar (C&G), 99% Invisible (2018), linked | **Appropriate, distinctive, flexible** | Use this triple when the brief stresses many sizes and contexts. See `masters-graphic-contemporary.md` §C&G. |
| C&G book *Identify* (2011, Print Publishers; Chermayeff, Geismar, Haviv) | The book's exact wording was not opened in this pass [unverified]. The common paraphrase "simple, appropriate, memorable" is flagged as a paraphrase in `design-history`. | Quote the attributed interview wording above, never the paraphrase. |
| Lindon Leader, FedEx (2004 interview) [13] | The arrow is "a symbol for speed and precision, both FedEx communicative attributes." "The power of the hidden arrow is simply that it is a hidden bonus." "Punch lines that need to be explained are neither funny nor memorable." | A hidden element must be a bonus, never the only carrier of the idea. |
| Bierut, "H" (2015), linked | Wanted a mark "a first-grader could do with construction paper." | The draw-from-memory test (§6.1). |

**Apply:** Use these as the review rubric in §6.4. Cite the person and the source when you quote them to a client.
**Limit:** These are expert criteria [E2], not tested predictors of brand performance.

### 2.2 The procedure: concept sentence to tested mark

| Step | Do | Output | Gate before the next step |
|---|---|---|---|
| 1. Concept sentence | Take the approved brand concept from the brand core (`strategy-and-concept.md` in this skill). If missing, write one sentence: *[Brand] is the [category] that [distinct truth] for [audience].* | 1 sentence + 1 metaphor | Client or brand strategist agrees it is the right idea. |
| 2. Facts inventory | List what is literally available: the name's letters and sounds, its meaning or etymology, the product's shape or action, place, founder story, existing equities. | 10–20 facts | At least 3 facts no competitor shares. |
| 3. Visual metaphor list | For the concept and each fact, list visual metaphors with the generators in §2.3. | 30–60 metaphors, one line each | Remove category clichés (see `ai-slop` → `imagery-and-brand.md` §5). |
| 4. Category audit | Collect 15–25 competitor and adjacent marks. Sort by type, shape family, color. | One board with the gaps marked | Name the shape and color territory nobody owns. |
| 5. Thumbnails | Sketch 20–40 thumbnails, each at about 2 cm or 64 px, black only, no type refinement. Mix all three route kinds (§2.4). | 20–40 rough marks | At least 6 per route kind. |
| 6. Squint and shrink | View all thumbnails at 16–24 px and from far away. Keep those that still read. | 8–12 survivors | Each survivor described in one sentence of geometry. |
| 7. Choose 3 routes | One literal, one abstract, one typographic (§2.4). Each with a one-sentence reason tied to the concept. | 3 routes | Each route differs in kind; none is a variation of another. |
| 8. Develop | Build each route on a grid, draw the wordmark lockup, apply optical corrections (§5). | 3 refined marks + lockups | Passes §6 tests in one color. |
| 9. Test | Run the §6 protocol and the similarity check (§6.3). | Test strip per route | Any route that fails at 16 px or resembles an existing mark is fixed or dropped. |
| 10. Present | In context, with a written reason and one recommendation (§9). | Presentation deck | Client chooses or gives feedback against the rubric. |

**Apply:** Show the client steps 1, 7, and 10. Keep steps 2–6 as working files, but be ready to show the thumbnail
wall when the client asks "what else did you try?" Leader's team reviewed "over 200 designs" before the FedEx arrow
emerged [13]; Instagram reportedly tested around 300 icons [unverified: search snippet, article not opened].
**Limit:** Thumbnail counts are a discipline, not a quality guarantee. Forty variations of one idea count as one.

### 2.3 Metaphor generators (how to get from an idea to shapes)

| Generator | Question to ask | Example from a real case |
|---|---|---|
| **Name made literal** | What does the name literally say? | Windows: "Your name is Windows. Why are you a flag?" The mark returned to a window in perspective [3]. |
| **Product truth** | What does the product do, show, or make possible? | Apple II's color display became the stripes: "the Apple II was the first home or personal computer that could reproduce images on the monitor in color" [14]. |
| **Medium of the brand** | What signs belong to the medium where the brand lives? | Mozilla used the `://` of web addresses, a logo "you could type" [7]. Slack's mark is built from "a speech bubble and lozenge" [2]. |
| **Combination (fusion)** | Which 2–4 simple signs can merge into one? | Airbnb's bélo represents "people, places, love, and Airbnb" [11]. |
| **Negative space** | What shape appears between the letters or forms? | FedEx arrow between "E" and "x" [13]. |
| **Existing equity** | What do people already recognize, even if the current mark is weak? | Instagram staff drew the "rainbow, lens, and viewfinder" from memory, so those stayed [9]. Mastercard kept and emphasized the interlocking circles [1]. |
| **Abstract device** | Which simple geometric device could carry meaning through use? | Rand's NeXT cube: "it has visual impact, and is easy to remember" [4]. |
| **Behavior** | How would the mark move or respond? | Google's dots express "listening, thinking, replying, incomprehension, and confirmation" [6]. Meta's loop was "sculpted... in VR" for motion and 3D [16]. |
| **Container** | Can the mark hold other content (images, patterns, messages)? | Mozilla's bars hold type and images [7]; Bierut's "H" was filled by supporters (linked). |
| **Rebus / wordplay** | Can parts of the name become pictures? | Rand's Eye-Bee-M (linked); the "byte" reading of Apple's bite was an accident, not the plan [14]. |

**Apply:** Run every generator against the concept sentence, write at least three metaphors per generator, then cross out
any metaphor a competitor could equally use ("swap test").
**Limit:** A clever double reading that needs explanation fails Leader's test [13]. Prefer one clear reading plus an optional bonus.

### 2.4 Building three routes that differ in kind

| Route | Starting point | Typical form | Strength | Risk | Checks |
|---|---|---|---|---|---|
| **A. Literal** | An object or action people can name | Pictorial symbol, or wordmark with one pictorial detail | Fast recognition, easy to explain | Cliché; resembles competitors; dates with the object | Is the object ownable? Would a competitor's name fit under it? |
| **B. Abstract** | A quality, relation, or behavior (connection, growth, openness) | Geometric symbol, abstract device, dynamic form | Ownable, scales across sub-brands and languages | Needs exposure to gain meaning [E3]; can feel generic | Does it pass the draw-from-memory test? Is it registrable (not a bare circle or square)? |
| **C. Typographic** | The name itself | Wordmark with custom letters, ligature, cut, or negative-space detail | Teaches the name; cheapest to build recognition | Can collapse into "a font"; poor as an app icon | Is there one detail only this name can have? Does a monogram fall out of it for small sizes? |

Optional fourth route when the brief allows: **D. Evolution** of an existing mark (§4).

**How to make sure routes differ:**

| Test | Pass condition |
|---|---|
| Different concept | Each route expresses a different facet of the concept sentence, stated in its own one-sentence reason. |
| Different type | The three routes are not all symbols or all wordmarks. |
| Different silhouette | Filled black at 32 px, the three silhouettes can't be confused. |
| Different master borrowed | Each route names a different method from `design-history` (e.g., Rand's reduction, C&G's negative space, Scher's literal name, Bierut's container). |
| Different behavior | Each route has its own motion idea (§8): construction vs. assembly vs. morph. |

**Worked example (illustrative, not a real client):** a scheduling app named "Tandem," concept "two people's time fitting together."

| Route | Mark | One-sentence reason |
|---|---|---|
| A. Literal | Two calendar squares overlapping, the overlap filled | "Your time and theirs, and the shared part made visible." |
| B. Abstract | Two interlocking open arcs that form a closed loop at small size | "Two paths that complete each other; it reads as one shape in an app icon." |
| C. Typographic | Wordmark with the two "d"/"T" verticals joined by one shared stroke | "The name teaches itself, and the shared stroke is the product in one detail." |

**Apply:** Present exactly three routes unless the client process calls for one (see Rand in §9.1).
**Limit:** Never pad with weak routes to make the recommended one look better. Clients pick the weak one.

---

## 3. Case studies with the designers' own rationale

Thirteen cases kept; every "why" below comes from the studio's or designer's page, a primary interview, or the company's
own announcement, unless marked secondary. Dropped for lack of a primary rationale in this pass: Spotify (identity),
Stripe, Vercel, Linear (logo specifics). Spotify's and Vercel's usage guidelines are used in §7.

### 3.1 Summary

| # | Mark | Year | Designer / studio | The stated "why" in one line | Lesson to borrow |
|---|---|---|---|---|---|
| 1 | IBM 8-bar | 1972 (solid 1957) | Paul Rand | "A streamlined and dynamic redesign" [5] | A striped treatment adds one memorable device to a plain lettermark |
| 2 | NeXT cube | 1986 | Paul Rand | A device with "visual impact" that is "easy to remember" [4] | Solve legibility inside the mark (NEXT read as EXIT) |
| 3 | Apple | 1977 | Rob Janoff (Regis McKenna) | Bite "for scale"; stripes for the Apple II's color [14] | A detail can be functional (identification) before it is symbolic |
| 4 | FedEx | 1994 | Lindon Leader, Landor | "A symbol for speed and precision" [13] | Negative space as a bonus, not the message |
| 5 | Windows | 2012 | Paula Scher, Pentagram | "Your name is Windows. Why are you a flag?" [3] | Return to the name's literal meaning |
| 6 | Airbnb bélo | 2014 | DesignStudio | A mark "anyone could draw," for "belonging" [11] | Drawability and user personalization |
| 7 | Google | 2015 | Google (Creative Lab, Material Design) | A mark that scales to "constrained spaces" and moves [6] | Derive a family: logotype, compact G, dots |
| 8 | Mastercard | 2016 (July, per `design-history`) | Michael Bierut, Luke Hayman, Pentagram | Emphasize the circles; "optimized for use in digital contexts" [1] | Keep the equity, simplify for screens |
| 9 | Instagram | 2016 | Instagram design team (Ian Spalter) | Keep what people remember; "a simpler camera" [8][9] | The draw-from-memory equity test |
| 10 | Mozilla | 2017 | Johnson Banks (Typotheque type) | `://` because the internet is Mozilla's core; "a logo you could type" [7] | Open design process; a mark built from the medium |
| 11 | Slack | 2019 | Michael Bierut, Pentagram | Old mark had "11 different colors" and was "easy to get wrong" [2][37] | Reproducibility is a valid reason to redesign |
| 12 | Meta | 2021 | Creative X (Meta in-house) | Loop designed for "3D experiences, motion behaviour" [16] | Design the mark in the medium where it will live |
| 13 | OpenAI blossom refresh | 2025 | OpenAI in-house (Veit Moeller, Shannon Jager) with Studio Dumbar/Dept, ABC Dinamo | Unify a fast-grown brand; "refined geometry" [17] | Refine rather than replace when equity is high |

### 3.2 Case details

Each block: what the designers said, how the form expresses it, small size and motion, and what to borrow.

**1. IBM, Paul Rand (solid 1957; 8-bar 1972).**
- Facts: IBM hired Rand in 1956; the City Medium version is listed as released in 1957; Rand created the 8-bar logo in 1972, "aiming for a streamlined and dynamic redesign." Lines are 8, sometimes 13. Colors: black, gray, white, or IBM Blue (PMS 2718C) [5].
- Form: a slab lettermark with horizontal stripes. The stripes are the memorable device Rand later named as an example of meaning carried by a graphic device [4].
- Small size: IBM's page does not discuss small-size behavior; the claim that stripes were for forgery protection or reproduction is not supported by IBM's page [unverified].
- Borrow: a plain lettermark plus one ownable treatment. Biography and date conflicts: `masters-graphic-modernist.md` §Rand.

**2. NeXT, Paul Rand (1986).**
- Rationale (booklet) [4]: "It is needs, not wants, ideas, not type styles which determine what its form should be." All-caps NEXT can read as "EXIT," so the lowercase "e" becomes "a focal point and visual contrast among the capital letters." Splitting the name over two lines "increases the letter size two-fold" inside the cube. The cube, "poised at an angle of twenty-eight degrees," works in black and white as well as color. Color relies on "the sparing use of brilliant colors on a predominantly black ground."
- Small size and production: works across paper, packaging, signage, exhibits, and "does not depend on extraneous embellishment" [4].
- Presentation: the booklet walks from audience, to rejected typeface directions, to principle, to the device, to applications. Use it as the model for §9.
- Borrow: catch misreadings (EXIT) and fix them in the letterforms; justify every geometric decision in one sentence.

**3. Apple, Rob Janoff (1977).**
- Rationale (Janoff, Creativebits interview, c. 2009) [14][15]: "I designed it with a bite for scale, so people get that it was an apple not a cherry." The stripes came from "the Apple II was the first home or personal computer that could reproduce images on the monitor in color." Jobs's only firm instruction was "don't make it cute." The "byte" reading was pointed out to him afterward by his creative director.
- Presentation: "We presented two versions of the logo. One with and one without the bite" [14].
- Borrow: a detail that fixes identification at small size (bite vs. cherry) is a stronger reason than a pun.
- Limit: stories that the bite refers to Adam and Eve or to Alan Turing are not Janoff's stated reasons [14]. Don't repeat them.

**4. FedEx, Lindon Leader at Landor (1994).**
- Rationale (Leader, 2004 interview) [13]: the team had "created and reviewed over 200 designs." Studying "Univers 67 (Bold Condensed) and Futura Bold," Leader "took the best characteristics of both and combined them into unique and proprietary letterforms." With "a lower-case 'x' to the right of a capital 'E'," he saw "a hint of an arrow, though it is clumsy and extremely abstract," and refined it into "a symbol for speed and precision."
- Why not advertise the arrow: Landor refused; "The power of the hidden arrow is simply that it is a hidden bonus" [13].
- Borrow: custom letterforms built from studied typefaces (check licensing, §5.4); negative space emerges from tight spacing and is then refined.
- Limit: the arrow is admired by designers, but no evidence was found that it changes customer behavior [E3].

**5. Windows, Paula Scher, Pentagram (2012).**
- Rationale [3]: Pentagram asked, "Your name is Windows. Why are you a flag?" The new mark "suggests dimensionality using the classic principle of perspective: lines receding into space." It avoids gradients and material effects to match Metro's "authentically digital" principle. Microsoft's Sam Moreau: "we wanted to celebrate the idea of a window, in perspective." The page links a Microsoft blog post dated February 17, 2012.
- Small size: the crossbar "is redrawn at each size, like classic typography" [3]. This is size-specific drawing (§5.5).
- Motion: studies showed the flag transforming into the window; the mark is "a neutral container that can convey actual motion" [3].
- Borrow: the naming insight; size-specific masters; flat construction for UI contexts.

**6. Airbnb bélo, DesignStudio (July 16, 2014).**
- Rationale [11][12]: DesignStudio wanted a mark that "anyone could draw," one that works across languages. Brian Chesky's framing: "a house is just a space, but a home is where you belong." The bélo represents "people, places, love, and Airbnb." The "create airbnb" tool let members personalize the symbol: "we're letting everyone create their own unique symbol under our shared banner" [11].
- Reception: the launch was mocked online for unintended resemblances [unverified in an opened source]; the mark stayed.
- Borrow: drawability as a design requirement; a fixed outline with user-variable fills.
- Limit: test silhouettes for unintended readings (§6.2) before launch, not after.

**7. Google, in-house (September 1, 2015; RNZ reported it September 2 NZ time).**
- Rationale [6][38]: goals were "a scalable mark that conveys the full logotype in constrained spaces," "dynamic, intelligent motion," and a systematic approach across products. Google told press that people increasingly reached it on mobile devices and that the logo would display better across screen sizes [38].
- Form: a custom geometric sans logotype that "pairs the mathematical purity of geometric forms with the simplicity of schoolbook letter printing," keeps the color sequence and the rotated "e" [6]. A heavier compact "G" derived from the logotype for small contexts. Four dots for "interactive, assistive, and transitional moments."
- Optical correction: the G's circle was refined to prevent an "overbite" at the crossbar; red, green, and yellow were pushed because adjacent colors "blend and dim" [6].
- Small size and bandwidth: a full-color variant of 305 bytes vs. about 14,000 bytes for the previous logo [6].
- Motion: dots follow "geometric arcs and a standard set of easing curves" [6].
- Borrow: one family of three assets (full, compact, behavioral), each derived from the same geometry.

**8. Mastercard, Michael Bierut and Luke Hayman, Pentagram (2016).**
- Rationale [1]: "an increased emphasis on the interlocking circles"; "optimized for use in digital contexts." "The overlapping forms effortlessly express the idea of connection." The overlap "is both lighter than the red and darker than the yellow," turning a subtractive mix into an additive one: "the colors now produce a brighter orange." The lowercase "c" is "a visual cue" that the brand is "no longer just a card." Wordmark in FF Mark, whose "rounded letterforms each contain a portion of the circle," drawing on a 1979 logo.
- Color testing: colors had to work on white, black, and intermediate backgrounds, which took "hundreds of tests" [1].
- Later step: the name was dropped from the symbol in 2019 (see Bierut entry, linked).
- Borrow: keep the equity, simplify the rendering, re-specify color for screens, and test on every background.

**9. Instagram, in-house, design lead Ian Spalter (May 11, 2016).**
- Rationale [8][9][10]: the official post: a new icon "inspired by the previous app icon," with "a simpler camera," and "the rainbow lives on in gradient form" [8]. Employees were asked to draw the icon from memory in five seconds; nearly all drew the "rainbow, lens, and viewfinder," and the team built the new icon around those three elements [9]. Spalter: early flattening explorations "lacked the visual weight of the original"; the final "strikes a balance between recognition and versatility" [9]. "We carried the gradient through each icon, and designed them on the same grid to make the system feel cohesive" [10].
- Source conflict: a 2016 Fast Company report gives 10 seconds for the drawing exercise [unverified: article returned 403; seen in search snippet]. Say "a few seconds."
- Borrow: the draw-from-memory test (§6.1) to find which equities to keep.
- Limit: the icon was not universally liked at launch; the redesign still kept the three remembered elements.

**10. Mozilla, Johnson Banks (January 2017).**
- Process [7]: designed in public; routes posted on the studio blog for comments; four shortlisted in September 2016. Feedback favored the `://` route and a dinosaur head; the dinosaur was dropped because "an extinct creature sent an unclear message."
- Rationale [7]: "Protocol 2.0" uses the `://` from web addresses inside the name. Michael Johnson: "this was a logo you could type, as in moz://a." A slab serif (adapted by Typotheque) suits coding's typewriter fonts and differs from competitors' humanist sans serifs. Colored bars "allude to internet browser bars" and hold type and images.
- Borrow: a mark made of the medium's own characters can be typed in plain text, in code, and in a tweet.
- Limit: open design invites public critique by design. Only run it with a client ready for that.

**11. Slack, Michael Bierut, Pentagram (January 16, 2019).**
- Rationale [2][37]: Slack: "A good reason to change a logo is that it's not doing the job you want it to do." The old octothorpe was "11 different colors," looked wrong at "the wrong angle (instead of the precisely prescribed 18º rotation)," and "every app button looked different" [37]. Pentagram: built on a grid from "a speech bubble and lozenge"; palette cut to four colors optimized for screens; the eleven-color palette "suffered against any background color other than white" [2].
- Small size: "The new octothorpe can scale up or down to optimize legibility at various sizes" [2].
- Borrow: reproducibility, consistency, and background tolerance are legitimate, explainable reasons for change; the building blocks become the icon and illustration system.

**12. Meta, Creative X (2021; It's Nice That report dated November 8, 2021).**
- Rationale [16]: the team focused on "3D experiences, motion behaviour, and sculpted the shape in VR using Quest." One continuous line forms a loop that reads as an "M" or an infinity sign. The blue gradient links to Facebook's origins. The wordmark uses the company's 2019 bespoke typeface "with an exaggerated x-height and single story 'a'." The team describes a "symbol first" system.
- Motion: designed for constant motion and interaction; in motion it can take on the colors of core products [16].
- Borrow: if the brand lives in motion or 3D, sketch the mark there first, then flatten.
- Limit: a dual reading (M and infinity) is common for loop forms; run a similarity check (§6.3).

**13. OpenAI blossom refresh, in-house with Studio Dumbar/Dept and ABC Dinamo (February 2025).**
- Facts [17]: led by head of design Veit Moeller and design director Shannon Jager. The blossom's intertwined forms were "subtly upgraded with refined geometry and differently weighted versions"; several typefaces consolidated into "OpenAI Sans"; Studio Dumbar developed a pulsing blue disc as ChatGPT's "voice." The company named its growth rate as the biggest brand challenge.
- Not verified: the designers' interview quotes ("more organic and more human") come from coverage of a *Wallpaper* interview that was not opened [unverified].
- Borrow: when equity is high, change geometry and weights, not the idea; add a separate motion asset for behavior.

**Apply (all cases):** When you present, cite the closest case as a precedent for the method ("like Instagram in 2016, we
kept the three things people remember"). Precedent shows lineage, not proof of effect.
**Limit:** Don't claim a case "worked" commercially unless a source measures it. None of these sources do.

---

## 4. Rebrand backlash: what goes wrong when a known mark changes

### 4.1 Cases

| Case | Date | What changed | What happened | Source quality | Grade of the lesson |
|---|---|---|---|---|---|
| **Gap** | Introduced October 4, 2010; reverted October 11, 2010 [20] | Wordmark reset in Helvetica, reducing "the prominence of the brand's iconic blue box" [20] | Public outcry; reverted after less than a week. North America president Marka Hansen: "we are clear that we did not go about this in the right way"; "We recognize that we missed the opportunity to engage with the online community" [19] | Trade press [19] + Wikipedia (secondary) [20] | [E2] Removing a recognized container without explanation provokes backlash among loyal customers |
| **Tropicana** (packaging, not only the logo) | New pack early January 2009; reversal announced February 23, 2009 [22] | The orange with a straw replaced by a glass of juice; the logo set vertically and smaller; "100% Orange" emphasized over "Pure Premium" [21][22] | Critics called it "ugly" and "a generic bargain brand"; Tropicana brought the old pack back. Tropicana North America's president: "those consumers are very important, so we responded" [21] | Sales drop of about 20% widely reported from IRI data via Ad Age; the original Ad Age and Bloomberg pages returned 403 in this pass, and the secondary source does not tie the figure to a source [22] | [E2] for "shoppers find a brand by its pack equities"; sales-loss figure [unverified] |
| **Jaguar** | Unveiled November 2024 (Dezeen report dated November 21, 2024) [23] | New mixed-case wordmark, a "Jr" roundel that reads the same upside down, leaper kept as a third element; launch film without cars [23] | The film was widely mocked; Elon Musk asked "Do you sell cars?" [23]. Chief creative officer Gerry McGovern: "New Jaguar is a brand built around exuberant modernism" [23] | Design press [23]; later sales and staffing claims circulate in partisan and trade sources not opened [unverified] | [E3] Confounded: the brand was also between car generations; do not attribute sales effects to the logo |
| **Cracker Barrel** | New logo announced mid-August 2025; reversal August 26, 2025 [24] | A simplified name-only logo replaced the "Old Timer" (a man in overalls beside a barrel), as part of modernizing restaurants for younger customers [24] | Customer and political backlash; first an apology that it "could have done a better job sharing who we are," then "Our new logo is going away and our 'Old Timer' will remain." Shares rose on the reversal day after more than a week of declines [24] | Wire report (AP via NBC) [24] | [E2] Removing a character that carries heritage reads as abandoning the audience |

Related cases in `design-history`: Bierut's 2015 "H" (criticized at launch, kept, used widely) and Mastercard's staged
removal of the name. They show that early criticism is normal and not always a reason to retreat.

### 4.2 Lessons (decision rules)

| Rule | Why | Grade |
|---|---|---|
| Inventory equities before you change anything: color, container, character, silhouette, letterforms, pack layout. | Gap removed the box, Tropicana the straw-in-orange, Cracker Barrel the Old Timer: each was the remembered element. | [E2] |
| Run the draw-from-memory test with real customers (§6.1). Keep what they draw. | Instagram kept the three elements staff drew [9]. | [E2] |
| Change in steps when equity is high (evolution, not replacement). | Mastercard emphasized the circles in 2016 and removed the name in 2019 (linked). | [E2] |
| Explain the change in plain words before launch; publish the reason with the mark. | Gap's own diagnosis was the process, not only the design [19]. | [E2] |
| Separate the logo from the campaign. | Jaguar's mockery targeted the launch film more than the marks [23]. | [E3] |
| Decide in advance what feedback would trigger a reversal, and what is normal launch noise. | Logo launches attract strong reactions; Bierut reads them as a sign people care (linked). | [E3] |
| Never claim a sales effect from a logo change without controlled data. | Every case above is confounded by price, product, campaign, or market. | [E3] |

**Apply:** For any redesign of a known mark, add an "equity and risk" page to the presentation (§9.3).
**Limit:** Backlash is not proof of failure, and the absence of backlash is not proof of success.

---

## 5. Construction craft

### 5.1 Geometry and grids

| Do | Why | Note |
|---|---|---|
| Build on a simple scaffold: a square or circle artboard, a unit grid (e.g., 8 × 8 or 16 × 16 units on a 1,024 px master), and a few named circles and angles | Repeatable construction, clean SVG, and a construction drawing for guidelines | Rand's cube is specified as a 28-degree tilt [4]; Slack's mark sits on a grid of two shapes [2] |
| Reuse the same radii and angles across symbol and wordmark | Family resemblance between mark, wordmark, and icons | Google's logotype and Product Sans share geometric logic [6] |
| Snap to the grid, then deviate by eye where optics demand | Pure geometry looks wrong (§5.2) | Google's G was refined to avoid an "overbite" [6] |
| Keep a construction drawing in the guidelines | Lets others redraw, animate, and audit the mark | Also feeds the motion idea (§8) |

**The golden-ratio myth:** overlays of golden circles on famous logos are drawn after the fact; there's no evidence they
affect viewers [E3]. See `layout-composition` → `hierarchy-balance-whitespace.md` §8.1. Never tell a client "it uses the
golden ratio, so people prefer it."

**Apply:** Show the construction grid in the presentation appendix as proof of craft, not as proof of beauty.
**Limit:** A grid is a scaffold. If the client asks why a curve breaks the grid, the answer is "because it looks right at size," which is true and enough.

### 5.2 Optical corrections

| Correction | Rule | Starting value | Source / grade |
|---|---|---|---|
| **Overshoot** | Round and pointed shapes extend past the baseline and cap or x-height so they look the same size as flat shapes | Start near 1–3% of the height for round shapes, more for pointed apexes; adjust by eye | Frere-Jones: we conclude "wrongly, but very reliably — that the round shape is too small" [25]; values are type-design convention [E2] |
| **Overshoot by weight** | Heavier weights need different corrections than thin ones | Recheck each weight of the mark (regular, bold, small-size master) | Frere-Jones on "the extra mass of heavier weights" [25] [E2] |
| **Circle vs. square** | A circle drawn the same height as a square looks smaller | Enlarge the circle slightly | Paget [26] [E2] |
| **Correct by eye** | Mathematically "perfect" alignment can look unbalanced | Adjust until it looks right at the target size | Paget, on the Google G [26]; Google [6] [E2] |
| **Irradiation (reverse versions)** | Light shapes on dark look heavier than dark on light | Make a separate reverse master with slightly thinner strokes | Paget [26] [E2] |
| **Optical centering** | A shape centered by its bounding box can look off-center (triangles, play icons, asymmetric letters) | Shift toward the visual mass; check inside the app-icon and avatar crops | Type and icon practice [E2]; no single numeric source opened |
| **Stroke thinning at junctions** | Where strokes meet, the joint looks heavier; thin the strokes near the join (ink traps for very small sizes) | Notch or taper near the joint until the weight looks even | Type-design practice [E2]; no source opened in this pass |
| **Horizontal vs. vertical strokes** | Horizontal strokes look heavier than vertical strokes of equal width | Draw horizontals slightly thinner | Type-design practice [E2]; no source opened in this pass |
| **Color density** | Adjacent saturated colors blend and dim at small sizes | Push vibrancy of small adjacent color areas | Google [6] [E2] |

**Apply:** Do a final optical pass at three sizes (16, 64, 512 px) and in both positive and reverse. Record each
correction in the construction drawing so animators don't "fix" it back.
**Limit:** Don't apply corrections by percentage alone. Increase until visible, then back off, and judge at the real size.

### 5.3 Negative space

| Rule | Example |
|---|---|
| Negative space must emerge from the letters or forms already present, not be forced in | FedEx: the arrow came from tight spacing of "E" and "x" [13] |
| The positive reading must work alone | Leader: the arrow is "a hidden bonus" [13] |
| Check the negative shape at small sizes: counters and gaps close up first | Test at 16 and 32 px (§6.1) |
| Check unintended negative shapes | Run the inverted and rotated views in §6.2 |

### 5.4 Custom lettering vs. modified typeface vs. stock typeface

| Option | When | Cost / risk | Licensing |
|---|---|---|---|
| **Stock typeface, set and kerned** | Tight budget, early stage; a temporary wordmark | Low distinctiveness; anyone can set the same word | Check the license covers logo use. Google Fonts: "you can use Google Fonts within any logo"; OFL artwork is yours. Commercial foundries vary; some sell trademark terms. See `typography` → `pairing-and-selection.md` §5 |
| **Modified typeface** (cut, joined, ligature, adjusted terminals) | Most wordmarks; one detail that belongs to the name | Medium; the base face may still be recognizable | Many EULAs restrict modifying the font software or require a specific license for logos. Outlined artwork is usually treated differently from the font file, but read the specific EULA and record it. See `typography` licensing section |
| **Custom lettering** (drawn from scratch, possibly informed by studied faces) | Brands that need full ownership and a registrable, unique wordmark | Highest; needs type-design skill | You own the drawing. FedEx's letters combined traits of Univers 67 and Futura Bold into "unique and proprietary letterforms" [13] |
| **Custom typeface for the brand** | Large brands with many products and languages | Very high | Owned. Google's Product Sans [6]; OpenAI Sans [17]; Meta's 2019 typeface [16]; Mozilla's slab adapted by Typotheque [7] |

**Apply:** Record the base typeface, its license, the license holder (agency or client), and what was modified, in the
handoff file. Fix misreadings in the letters themselves (Rand's NEXT/EXIT) [4].
**Limit:** Never ship a wordmark set in a font whose license you haven't checked. Generated pseudo-lettering is not a
font and drifts (see `ai-slop` → `imagery-and-brand.md` §5).

### 5.5 Stroke weights and details for small sizes

Compute instead of guessing. On a 1,024-unit master shown at 16 px, one screen pixel equals 64 units.

| Master size (units) | Display size | Units per pixel | Smallest safe feature (≈ 1.5 px) |
|---|---|---|---|
| 1,024 | 16 px | 64 | ≈ 96 units |
| 1,024 | 32 px | 32 | ≈ 48 units |
| 1,024 | 48 px | 21.3 | ≈ 32 units |
| 1,024 | 180 px (apple-touch-icon) | 5.7 | ≈ 9 units |

| Rule | Why |
|---|---|
| Any stroke, gap, or counter below about 1 px at the target size renders as blur or disappears | Antialiasing averages sub-pixel features into gray (arithmetic above) |
| Make size-specific masters: a small-size version with thicker strokes, opened counters, fewer details | Windows' crossbar "is redrawn at each size" [3]; Google's compact "G" is heavier [6] |
| Drop the wordmark, tagline, and inner text at small sizes; switch to the symbol or monogram | Emblems with inner text fail first |
| Keep gradients out of the small master or keep them as a two-stop, high-contrast ramp | Gradient detail disappears; Slack and Mastercard both simplified color for screens [1][2] |

### 5.6 Color independence: one color first

| Rule | Why | Source |
|---|---|---|
| Design and approve the mark in solid black on white before adding color | Many uses are one color: fax, embossing, engraving, embroidery, stamps, system UI | [E2] practice; Rand's NeXT cube "works in black and white as well as in color" [4] |
| Make the one-color version a real master, not a desaturated color file | Gradients and overlaps need redrawing (e.g., Mastercard's overlap in one color) | [E2] |
| Make reverse (white on dark) a separate master with irradiation correction | Light on dark looks heavier [26] | [E2] |
| Specify color per medium after the shape is final | See `color` → `color-spaces-and-management.md` §7, §9 (hex, OKLCH, P3, CMYK, Pantone per paper) | [E2] |
| Test every color version on white, black, mid-gray, and a busy photo | Mastercard ran "hundreds of tests" across backgrounds [1] | [E2] |

**Apply:** In presentations, show the black version first, then color. Clients learn that the idea is in the shape.
**Limit:** Color can be an equity in itself (Mastercard's red and yellow [1]). One-color-first is a
method, not a claim that color doesn't matter.

---

## 6. Testing protocol

### 6.1 The test strip (run for every route before presenting)

| # | Test | How | Pass | Notes |
|---|---|---|---|---|
| 1 | **16 px favicon** | Export the small master at 16 × 16 and 32 × 32; view at 100% on a normal-density and a high-density screen, in a browser tab, light and dark mode | Silhouette readable; no closed counters; no gray mush | Favicon set: `media-specs` → `digital-platforms.md` §6.2 |
| 2 | **App icon grid** | Place in the iOS 1,024 px layered master and Android 108 dp adaptive icon with 66 dp safe zone; preview masked shapes | Mark inside the safe zone; looks centered optically | Sizes: `media-specs` → `digital-platforms.md` §3.8, §4.4 |
| 3 | **Avatar circle crop** | Crop to a circle at 98, 176, and 400 px (social profile sizes) | Nothing important cut; centered by eye | Sizes: `media-specs` → `social-formats.md` |
| 4 | **Android splash** | Fit inside the 160 dp circle (240 dp icon with background) or 192 dp circle (288 dp without) [29] | Nothing clipped by the mask | Everything outside the circle is masked [29] |
| 5 | **One color** | Solid black and solid white versions | Same idea, no lost parts | §5.6 |
| 6 | **Reverse** | White on black and on brand dark | Weight matches the positive optically | Irradiation correction [26] |
| 7 | **On photography** | Place on 3 busy, light, and dark photos | Legible with the clear-space rule and a defined backing if needed | Spotify forbids busy and low-contrast placements [27] |
| 8 | **Distance and blur** | View at 25% size and with a 4–8 px Gaussian blur; or from across a room | Silhouette still distinct from competitors' | For OOH letter height use `media-specs` → `out-of-home.md` |
| 9 | **Draw from memory** | Show the mark for 5 seconds to 5–10 people outside the project; ask them to draw it | Most reproduce the key device | Instagram's equity test [9]; Bierut's first-grader standard (linked). Small samples: a heuristic [E3] |
| 10 | **In motion** | Animate the construction idea (§8) as a 1–2 second sketch | End frame equals the static mark | §8 |
| 11 | **Rotation and inversion** | View upside down, mirrored, rotated 90° | No unintended readings or shapes | Jaguar's roundel reads the same upside down by design [23] |
| 12 | **Misreading** | Read the wordmark in all caps, small, and at a glance | No accidental words (NEXT read as EXIT) [4] | Fix in the letters |
| 13 | **Cultural and linguistic check** | Ask native speakers in each target market about the name, the shape, the gesture, the color, and any letters; check the mark in right-to-left contexts if relevant | No offensive, comic, or political reading | [E2] practice; see `cognitive-psychology` → `audience-and-culture.md` |
| 14 | **Reproduction** | Embroidery, engraving, single-color print, low-resolution screens | Survives without hairlines | §5.5 |
| 15 | **File weight** | SVG size after optimization | Small; Google's full-color variant is 305 bytes [6] | Clean paths, no hidden layers |

**Apply:** Deliver the test strip as one board per route: the mark at each size and condition, with pass/fail notes.
**Limit:** These are design QA tests, not market research. Don't present a 5-person draw test as evidence of memorability.

### 6.2 Unintended-reading check

Look for: body parts, gestures, weapons, religious or political symbols, existing flags, and letters that spell words
in other languages. Ask at least two people from each target culture. Airbnb's 2014 launch drew jokes about the
shape's resemblances [unverified in an opened source]; Meta's loop invites comparison with other infinity marks [16].

### 6.3 Similarity check (not legal clearance)

| Step | Tool | What to do | Note |
|---|---|---|---|
| 1 | Reverse image search | Upload the black master and the color version to Google Lens, Bing Visual Search, and TinEye | Catches stock-icon look-alikes and existing marks on the web |
| 2 | **WIPO Global Brand Database** (branddb.wipo.int) | Image search by uploading the mark; filter by Nice classes of the client's goods and services | WIPO's AI image search launched April 1, 2019, free to all users; at launch it covered 45 offices' collections and almost 38 million marks [32]. Coverage has grown since [unverified current figure] |
| 3 | **EUIPO eSearch plus** (euipo.europa.eu) | Image search for EU trade marks | EUIPO's in-house image search launched in eSearch plus; extension to TMview and Designview was in progress as of January 2022 [33]. Check current availability |
| 4 | **TMview** (tmdn.org/tmview) | Word search across EU national offices and partner offices; image search where available | Image search status: check on the site [33] |
| 5 | **USPTO Trademark Search** (tmsearch.uspto.gov) | Word search plus design search codes for figurative elements (Design Search Code Manual, tmdesigncodes.uspto.gov) | USPTO page verified 2026-10 [34] |
| 6 | **INPI Portugal** (inpi.justica.gov.pt) | National marks (Marca services) for Portuguese clients | The INPI site lists registration services under Marca; use its online search services or the helpline for prior-rights searches [35] |
| 7 | Other national offices | The client's main markets (e.g., UK IPO, INPI Brazil, CNIPA) | Add as the market list requires |
| 8 | Record | Screenshot every query with date, classes, and results | Attach to the handoff |

**Legal note (always tell the client in writing):** "We ran a basic similarity search. It is not a trademark clearance.
Before you launch or file, a trademark lawyer should run a full clearance in your markets and classes." This file is not
legal advice.

**Apply:** Run steps 1–2 on all survivors at step 6 of §2.2 (cheap and early), and the full table on the chosen route.
**Limit:** Image search recall is partial; EUIPO's own tool was described in secondary reports as retrieving under half
of relevant marks in tests [unverified]. A clean result does not mean the mark is free.

### 6.4 Review rubric (for design-critic)

| Criterion | Question | Score 0–2 |
|---|---|---|
| Appropriate | Does it fit the client, the audience, and the concept sentence? (Haviv [18]; Geismar, linked) | |
| Distinctive | Can it be told apart from the 20-mark category audit at 32 px? | |
| Simple | Can it be described in one sentence of geometry and drawn from memory? | |
| Flexible | Does it pass the test strip (§6.1)? | |
| Reason | Can a non-designer repeat the reason after hearing it once? | |
| Craft | Optical corrections done; clean vectors; size-specific masters? | |
| Clear | No unintended readings; similarity check run? | |

A route below 10/14 goes back to development. Any 0 on "Clear" blocks presentation.

---

## 7. Deliverables spec

### 7.1 File package

| Asset | Formats | Notes |
|---|---|---|
| Master artwork | SVG (web, UI), PDF (vector print, outlined text), AI or Figma source | Outline all text; remove hidden layers; name layers |
| Raster exports | PNG with transparency at 512, 1,024, 2,048 px wide; JPG only for previews | Export from vector, never upscale |
| Color versions | Full color; one-color black; one-color white (reverse master); one spot color if used | Color specs per medium: `color` → `color-spaces-and-management.md` |
| Print color files | CMYK PDF per paper condition; Pantone spot version | Approve on proof |
| Lockups | Primary (horizontal); stacked (vertical); symbol only; wordmark only (if allowed) | State which lockup to use where |
| Small-size masters | Symbol at 16, 24, 32 px drawn as separate artwork | Not just downscaled |
| Favicon and touch icons | favicon.ico 32 + SVG + 180 apple-touch-icon + 192/512 manifest icons + maskable | Exact set: `media-specs` → `digital-platforms.md` §6.2 |
| App icons | iOS layered 1,024 master; Android adaptive layers (108 dp, 66 dp safe zone) | `media-specs` → `digital-platforms.md` §3.8, §4.4 |
| Social avatars | Symbol centered for circle crop, with safe margin | `media-specs` → `social-formats.md` |
| Motion | Lottie JSON or SVG/CSS for web; MP4/MOV with alpha for video; Android AVD for splash | §8 |
| Guidelines | PDF or web page: construction, clear space, minimum sizes, color, lockups, misuse, motion | Derived system lives in `identity-systems-and-motion.md` in this skill |
| Records | Font licenses, similarity-search screenshots, construction drawing | §5.4, §6.3 |

**Naming convention:** `brand-logo-[lockup]-[color]-[size].[ext]`, e.g., `tandem-logo-horizontal-black.svg`,
`tandem-symbol-reverse-32.png`.

### 7.2 Clear space and minimum size

| Rule | How to define it | Real examples |
|---|---|---|
| Clear space | A unit taken from the mark itself, so it scales with it | Spotify: half the height of the icon [27]; Vercel: the height of the symbol [28] |
| Minimum size, full logo | Smallest size at which the wordmark stays legible, in px for digital and mm for print | Spotify: never smaller than 70 px digital or 20 mm print [27] |
| Minimum size, symbol | Smallest size where the symbol's key detail survives | Spotify icon: 21 px digital, 6 mm print [27] |
| Symbol alone | State when the symbol may stand without the wordmark | Spotify: icon alone only when there's no room or the brand is already established; the wordmark never appears without the icon [27] |
| Background rules | Which version on which background | Spotify: green only on black or white; black on light, white on dark, monochrome elsewhere [27]; Vercel: choose by the destination background, not the browser theme [28] |
| Misuse list | Show 6–10 don'ts | Spotify: don't rotate, fill lines, stretch, use in a sentence, build shapes from it, or place on busy areas [27] |

**Apply:** Derive minimum sizes from the §6.1 tests, not from habit. Write them in both px and mm.
**Limit:** These brand numbers are examples of how to specify, not values to copy.

---

## 8. Logo in motion

### 8.1 Principles

| Principle | Rule | Example |
|---|---|---|
| **Motion reveals the concept** | Animate the idea behind the mark, not a generic effect (spin, glow, particle burst) | Windows: the flag transforming into a window [3] |
| **Derive motion from construction** | Use the same grid, arcs, and units the mark is built from | Google's dots move on "geometric arcs and a standard set of easing curves" [6] |
| **End on the exact static mark** | The final frame must equal the master artwork | C&G's guidance in `masters-graphic-contemporary.md` (assemble repeated units, keep the end frame identical) |
| **Give the mark behaviors, not only an intro** | States for listening, loading, success, error | Google dots: "listening, thinking, replying, incomprehension, and confirmation" [6] |
| **Design in the target medium** | If the brand lives in 3D or interaction, sketch there first | Meta sculpted the loop in VR [16] |
| **Separate the behavior asset from the logo** | A pulsing or reactive element can be its own asset | OpenAI's pulsing blue disc for ChatGPT's "voice" [17] |

### 8.2 Motion recipes

| Recipe | How it works | Fits | Example |
|---|---|---|---|
| **Construction** | Draw the guides and strokes, then fill | Geometric marks; showing craft | Slack's grid of bubbles and lozenges (motion not documented on the case page [2]) |
| **Assembly** | Parts fly or fold in and lock together | Marks made of repeated units | C&G guidance (linked); Airbnb's four meanings combining (concept [11]) |
| **Morph** | One shape transforms into the mark | A "from–to" story (old to new, problem to solution) | Windows flag to window [3]; Google dots to G [6] |
| **Reveal** | Negative space or a hidden detail appears last | Marks with a bonus detail | Use with care: Leader insists the bonus must not be the message [13] |
| **Behavioral loop** | The mark idles, listens, reacts | Assistants, voice, live products | Google dots [6]; OpenAI disc [17] |
| **Container** | The mark fills with content or color | Dynamic identities | Mozilla bars holding images [7] |

### 8.3 Durations and limits (verified)

| Context | Limit or guidance | Source |
|---|---|---|
| Android splash animated icon | Recommend not exceeding 1,000 ms on phones; delayed start up to 166 ms; loop if startup takes longer than 1,000 ms; must be an AnimatedVectorDrawable; icon area 432 dp with the visible inner 288 dp | Android Developers [29] (verified 2026-10) |
| Auto-playing motion on web pages | If it starts automatically, lasts more than 5 seconds, and runs alongside other content, users must be able to pause, stop, or hide it (WCAG 2.2.2, Level A) | W3C [31] |
| Reduced motion | Honor `prefers-reduced-motion: reduce`: replace scaling and panning with a fade or show the static mark. Large scaling or panning can trigger dizziness or nausea in people with vestibular disorders | MDN [30]; see `accessibility` → `motion-media-and-forms.md` |
| Web intro, video sting, UI states | No primary source opened for fixed durations. Working defaults: UI state changes under 500 ms; web logo intro 600–1,200 ms; video sting 2–4 s | [E3] practitioner defaults; use the motion tokens in `expressive-web` |

```css
/* Logo intro: full motion by default, static or fade for reduced motion */
.logo-intro { animation: logo-build 900ms cubic-bezier(.2,.7,.2,1) both; }
@media (prefers-reduced-motion: reduce) {
  .logo-intro { animation: logo-fade 200ms ease-out both; }
}
```

**Apply:** Deliver three motion assets for the chosen route: a 1-second intro, a short UI state (loading or success), and
a static fallback. Keep the construction notes from §5 so animators don't undo optical corrections.
**Limit:** Don't block content behind a logo animation. A splash longer than the app's real load time is decoration that costs the user time.

---

## 9. Presenting logos to a client

### 9.1 How studios present (documented)

| Practice | Who | What they did | Use when |
|---|---|---|---|
| **One solution with a written rationale** | Paul Rand, NeXT (1986) | A booklet that moves from audience to principle to device to applications [4]; he refused to show options (see Rand entry, linked) | The client hired you for judgment and the brief is clear |
| **Two versions, one variable** | Rob Janoff, Apple (1977) | "One with and one without the bite" [14] | A single decision is open |
| **In context, never on a blank sheet** | Sagi Haviv, Armani Exchange | Rejected when shown briefly on paper; approved when re-presented in ads, storefronts, and billboards: "presentation is everything" [18] | Always |
| **Routes developed in public** | Johnson Banks, Mozilla (2016–2017) | Routes posted for comment, shortlisted, then refined [7] | Open-source, community, or public-sector clients who want participation |
| **Lead with the problem, then the answer** | Pentagram, Windows (2012) | "Your name is Windows. Why are you a flag?" [3] | Redesigns where the old mark has drifted |
| **State the rationale honestly** | Michael Bierut | Called every client presentation "inevitably, at least in part, an exercise in bullshit," because design "always combines the pursuit of functional goals with countless intuitive, even irrational decisions" (quoted by Poynor) [36] | Always: separate the reasons you can show from taste, and say which is which |

**Default for this plugin:** three routes (§2.4), each in context, each with its reason, plus one clear recommendation.
Switch to a single-solution presentation only when the client asks for your judgment and the brief is unambiguous.

### 9.2 Deck structure (12–20 slides)

| # | Slide | Content |
|---|---|---|
| 1 | The brief in one line | Audience, goal, constraint |
| 2 | Concept sentence | The approved brand idea, word for word |
| 3 | What we kept and why (redesigns) | Equities from the draw-from-memory test and audit (§4) |
| 4 | Category audit | 15–25 competitor marks; the gap |
| 5 | How we explored | Thumbnail wall (20–40), rough, to show breadth |
| 6–8 | Route A | Mark in black → reason in two sentences → the mark in 4–6 real contexts (app icon, website header, storefront or packaging, social avatar, business card, motion still) |
| 9–11 | Route B | Same structure |
| 12–14 | Route C | Same structure |
| 15 | Side-by-side | Three routes at 16 px, 64 px, and large; one color and color |
| 16 | Recommendation | Which route and why, against the rubric (§6.4) |
| 17 | Motion sketch | 1–2 s animation of the recommended route |
| 18 | Risks and checks | Similarity search done (not legal clearance); cultural check; equity risk |
| 19 | Next steps | Refinement round, system design, files, timeline |

**Apply:** Show black first, then color, then context. Never show a route only on a white artboard.
**Limit:** Don't mock up contexts the client will never use (billboards for a B2B tool). Context must be honest.

### 9.3 Script template for explaining the "why"

Use plain words. One route at a time. Fill the brackets. Each block takes about 60–90 seconds.

```
1. ANCHOR (the concept)
   "Everything we make starts from one sentence we agreed on: [concept sentence]."

2. THE IDEA OF THIS ROUTE
   "This route takes [facet of the concept] and turns it into [shape/letters].
    In one sentence: [one-sentence reason]."

3. HOW THE FORM SAYS IT
   "Notice [specific detail: the shared stroke, the overlap, the cut].
    That detail is [what it means], and it is something only [brand] has."

4. WHY IT WORKS IN PRACTICE
   "At the size of a browser tab it still reads as [silhouette]; in one color it keeps
    the idea; as an app icon it [fits the grid / crops cleanly in a circle]."
   (Show the test strip.)

5. PRECEDENT (optional, one line)
   "It uses the same method as [case]: [method in plain words]." (cite §3)

6. WHAT IT ASKS OF YOU
   "This route needs [exposure / consistency / a symbol-plus-name period] to build
    recognition. That is normal: a logo gains meaning as people use the product."

7. RECOMMENDATION (only after all routes)
   "We recommend [route] because it scores best on [two rubric criteria] and fits
    [business constraint]. [Route X] is a strong alternative if [condition]."
```

**Turning taste into criteria (client feedback questions):**

| Instead of asking | Ask |
|---|---|
| "Do you like it?" | "Which route best expresses [concept sentence]?" |
| "What color do you want?" | "Which of these feels most like your brand's personality: [3 adjectives from the brief]?" |
| "Any changes?" | "Is there anything that would stop this from working for [audience] in [context]?" |

**Handling common objections:**

| Objection | Answer pattern |
|---|---|
| "It's too simple." | "Simple is what makes it work at 16 px and in one color. The meaning grows with use; Rand put it as 'a logo takes on meaning... over a period of time'" [4]. |
| "It doesn't show what we do." | "Most lasting marks don't. Rand: a logo 'should explain or suggest the business... but this is rarely possible'" [4]. Show the tagline and context doing that job. |
| "My partner/spouse/team didn't like it." | Return to the rubric: "Let's check it against the brief: is it appropriate, distinctive, simple?" Haviv: "not about what one likes or dislikes: it's about what works" [18]. |
| "Can we combine route A's symbol with route C's letters?" | Test it honestly; usually it doubles the ideas. "One idea per mark" (§0). |
| "Can you make it bigger/add a gradient/add the tagline?" | Show the change at 16 px and in one color. Let the test decide. |
| "People hated the new [famous brand] logo." | Separate launch noise from failure (§4.2); show what you did about equities. |

---

## 10. Mistakes and myths

| Mistake or myth | Correction | Source / grade |
|---|---|---|
| "A logo must show what the company does." | Rand: it "should explain or suggest the business... but this is rarely possible"; meaning comes from association over time | [4] [E2] |
| "Good design is good business" is Rand's line. | Thomas J. Watson Jr. said it (Wharton lecture) | `masters-graphic-modernist.md` myths |
| "C&G's criteria are 'simple, appropriate, memorable.'" | A paraphrase. Geismar: appropriate, distinctive, flexible; Haviv: simple, appropriate, distinctive and memorable | `masters-graphic-contemporary.md`; [18] |
| "Famous logos were built on golden circles; that's why they work." | Overlays are post-hoc; no evidence of effect on viewers | `layout-composition` → `hierarchy-balance-whitespace.md` §8.1 [E3] |
| "Apple's bite refers to Turing / Adam and Eve / bytes." | Janoff: "a bite for scale, so people get that it was an apple not a cherry"; "byte" was noticed afterward | [14] |
| "Apple's stripes are the pride flag." | Janoff tied the stripes to the Apple II's color display | [14]; the date relation to the pride flag is Janoff's claim in secondary summaries [unverified] |
| "The FedEx arrow was the brief." | It emerged during exploration after 200+ designs; Landor kept it a "hidden bonus" | [13] |
| "Hidden meanings make logos memorable." | No evidence found; Leader himself treats the arrow as a bonus, not the message | [13] [E3] |
| "Present many options so the client feels in control." | Options without reasons invite taste-based choice; present three routes that differ in kind, each with a reason, plus a recommendation | §9 [E2] |
| "Show the logo on a white page so the client judges it fairly." | Context changes judgment; Armani Exchange was rejected on paper and approved in context | [18] [E2] |
| "Make it in color first; black and white later." | One color first; color after the shape works | §5.6 [E2] |
| "Just scale the master down for the favicon." | Draw size-specific masters; Windows redrew its crossbar per size | [3] [E2] |
| "A free font can't be used in a logo." | Google Fonts allow logo use; OFL artwork is yours. Commercial EULAs vary | `typography` → `pairing-and-selection.md` [E2] |
| "Any font I own can be modified into a wordmark." | Check the EULA; some foundries restrict modification or sell trademark terms | `typography` licensing [E2] |
| "A clean reverse-image search means the mark is safe." | Search recall is partial; legal clearance needs a lawyer | §6.3 |
| "AI logo generators give a finished mark." | They produce clichés, pseudo-lettering, and look-alikes; purely generated output may have weak copyright protection | `ai-slop` → `imagery-and-brand.md` §5 |
| "Backlash means the redesign failed." | Early criticism is common (Bierut's "H" was kept); reversals happen when recognized equities are removed without explanation (Gap, Cracker Barrel) | §4 [E3] |
| "Tropicana lost exactly $X million because of the pack." | Figures differ across sources ($27M to over $50M) and the primary data wasn't opened | [22] [unverified] |
| "Abstract symbols are more memorable than wordmarks." | No controlled evidence found; abstract marks rely on heavy exposure | `masters-graphic-contemporary.md` [E3] |
| "Animate the logo with a cool effect." | Motion should reveal the concept and end on the exact static mark; honor reduced motion | §8 [30] |
| "The logo is the identity." | The logo is one asset; the system (color, type, grid, imagery, motion) carries most touchpoints | `identity-systems-and-motion.md` in this skill; `ai-slop` [E2] |

---

## Sources

[1] Pentagram. (n.d., identity introduced 2016). *Mastercard*. https://www.pentagram.com/work/mastercard (opened 2026-10)
[2] Pentagram. (n.d., identity introduced 2019). *Slack*. https://www.pentagram.com/work/slack (opened 2026-10)
[3] Pentagram. (n.d., identity introduced 2012). *Windows*. https://www.pentagram.com/work/windows (opened 2026-10)
[4] Paul Rand archive. (n.d.). *NeXT Computers* (includes 1986 presentation booklet text). https://www.paulrand.design/work/NeXT-Computers.html (opened 2026-10)
[5] IBM. (n.d.). *The IBM logo* (IBM Heritage). https://www.ibm.com/history/logo (opened 2026-10)
[6] Google Design. (n.d., 2015). *Evolving the Google Identity*. https://design.google/library/evolving-google-identity (opened 2026-10)
[7] Brewer, J. (2017, January 18). *Johnson Banks unveils Mozilla rebrand final route, chosen through open design process*. It's Nice That. https://www.itsnicethat.com/news/johnson-banks-mozilla-rebrand-final-route-180117 (secondary report quoting Michael Johnson)
[8] Instagram. (2016, May 11). *A New Look for Instagram*. https://about.instagram.com/blog/announcements/a-new-look-for-instagram
[9] Dezeen. (2016, May 11). *Instagram scraps retro logo for more "modern" design*. https://www.dezeen.com/?p=900059 (secondary report quoting Ian Spalter)
[10] SiliconANGLE. (2016, May 11). *Instagram gets a makeover including new logo and design changes*. https://siliconangle.com/blog/2016/05/11/instagram-gets-a-makeover-including-new-logo-and-design-changes/ (secondary report quoting Ian Spalter)
[11] designboom. (2014, July 16). *airbnb rebrand gives its community a sense of belonging*. https://www.designboom.com/design/airbnb-rebrand-gives-its-community-a-sense-of-belonging-07-16-2014/ (secondary report quoting DesignStudio and Brian Chesky)
[12] Further (formerly DesignStudio). (n.d.). *Airbnb*. https://www.further.group/work/airbnb
[13] The Sneeze. (2004, November 16). *The Man Behind the FedEx Logo* (interview with Lindon Leader). https://thesneeze.com/the-man-behind-the-fedex-logo/
[14] Creativebits. (c. 2009). *Interview with Rob Janoff, designer of the Apple logo*. http://creativebits.org/interview/interview_rob_janoff_designer_apple_logo
[15] Engst, A. (2009, August 7). *Original Apple Logo Designer Explains the Bite*. TidBITS. https://tidbits.com/2009/08/07/original-apple-logo-designer-explains-the-bite/ (used for the interview's date)
[16] It's Nice That. (2021, November 8). *Creative X on how it formed Facebook's new Meta brand*. https://www.itsnicethat.com/news/creative-x-facebook-meta-branding-graphic-design-081121 (secondary report quoting Meta's in-house team)
[17] Creative Review. (2025, February 6). *OpenAI's brand refresh subtly signals a new era*. https://www.creativereview.co.uk/openai-brand-refresh/
[18] Logo Design Love. (2010, October). *Sagi Haviv interview*. https://www.logodesignlove.com/sagi-haviv-interview
[19] Adweek. (2010, October). *Logo-Gate Is Over! Gap Goes Back*. https://www.adweek.com/performance-marketing/logo-gate-is-over-gap-goes-back/
[20] Wikipedia contributors. (n.d.). *Gap Inc.* Wikipedia. https://en.wikipedia.org/wiki/Gap_Inc. (secondary source, used for dates)
[21] designboom. (2009, February 26). *consumers want the old packaging of tropicana juice back*. https://www.designboom.com/design/consumers-want-the-old-packaging-of-tropicana-juice-back/
[22] The Branding Journal. (2015, May). *What to Learn From Tropicana's Packaging Redesign Failure?* https://www.thebrandingjournal.com/2015/05/what-to-learn-from-tropicanas-packaging-redesign-failure/ (secondary source; figures not tied to a primary source)
[23] Dezeen. (2024, November 21). *Jaguar rebrand* (Jaguar unveils new identity ahead of electric relaunch). https://www.dezeen.com/2024/11/21/jaguar-rebrand-electric-car/
[24] NBC Washington / Associated Press. (2025, August 26). *Return of the 'Old Timer': Cracker Barrel scraps new logo following backlash*. https://www.nbcwashington.com/news/national-international/return-of-the-old-timer-cracker-barrel-scraps-new-logo-following-backlash/3980469/
[25] Frere-Jones, T. (2015). *Typeface Mechanics: 001*. Republished by Stockholms Typografiska Gille. https://stockholmstypografiskagille.se/typonyheter/typeface-mechanics-001/ (original at frerejones.com returned 403 in this pass)
[26] Paget, I. (2016). *Optical corrections every logo designer should know about*. Logo Geek. https://logogeek.uk/?p=2617 (practitioner source)
[27] Spotify for Developers. (n.d.). *Design guidelines*. https://developer.spotify.com/documentation/design (verified 2026-10)
[28] Vercel. (n.d.). *Brands* (Geist design system). https://vercel.com/geist/brands (verified 2026-10)
[29] Android Developers. (n.d.). *Splash screens*. https://developer.android.com/develop/ui/views/launch/splash-screen (verified 2026-10)
[30] MDN Web Docs. (n.d.). *prefers-reduced-motion*. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion (verified 2026-10)
[31] W3C. (n.d.). *Understanding Success Criterion 2.2.2: Pause, Stop, Hide* (WCAG 2.2). https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html
[32] WIPO. (2019, April 1). *WIPO Launches State-of-the-Art Artificial Intelligence-Based Image Search Tool for Brands* (PR/2019/831). https://www.wipo.int/pressroom/en/articles/2019/article_0005.html
[33] ECTA. (2022, January 17). *EUIPO launched new AI solution for image search*. https://ecta.org/en/latest-news-detail/news-973/euipo-launched-new-ai-solution-for-image-search
[34] USPTO. (n.d.). *Search our trademark database*. https://www.uspto.gov/trademarks/search (verified 2026-10)
[35] INPI Portugal. (n.d.). *Instituto Nacional da Propriedade Industrial* (homepage, Marca services). https://inpi.justica.gov.pt/ (verified 2026-10)
[36] Poynor, R. (2011, August 9). *From the Archive: Raging Bull*. Design Observer. https://designobserver.com/feature/from-the-archive-raging-bull/29248 (quotes Michael Bierut's 2005 "On (Design) Bullshit")
[37] Slack. (2019, January 16). *Say hello to our new logo*. https://slack.com/blog/news/say-hello-new-logo
[38] RNZ. (2015, September 2). *Google unveils new logo*. https://www.rnz.co.nz/news/world/283075/google-unveils-new-logo
