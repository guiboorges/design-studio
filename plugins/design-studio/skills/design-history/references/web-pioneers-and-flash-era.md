# Web Pioneers and the Flash Era

> **Scope:** The people who set the craft rules of the standards-based web (1998 onward), and the experimental Flash era (about 1996–2010) that ran alongside it. Covers what each contributed, what to borrow today, and what not to copy.
> **Last verified:** 2026-10 (company status, current roles, browser support, and conference/publisher status were checked in 2026-10)
> **Used by:** creative-director, art-director, design-critic, ui-designer, ux-researcher, design-system-architect, interaction-motion, brand-strategist

**How to use this file:** Open Part A when a brief involves layout systems, responsive behavior, forms, voice and tone, or design ethics. Open Part B when a brief asks for "immersive", "experimental", "award-site", or "Flash-like" motion, and you need to know which ideas are worth reviving and what they cost. Jakob Nielsen is covered in `masters-digital-ux.md`. Award programs and the studios that followed are covered in `web-creators-studios-awards.md`.

**Note on dates:** Birth years are given only where a source opened for this file states them. Living people are marked "(living)" otherwise.

## Quick reference

| Name | Years | Known for | Borrow for (problem it helps solve) | Section |
|------|-------|-----------|-------------------------------------|---------|
| Jeffrey Zeldman | living | Web Standards Project (1998), *A List Apart*, *Designing with Web Standards* (2003) | Markup that survives redesigns; separating structure, presentation, behavior | [#jeffrey-zeldman](#jeffrey-zeldman) |
| Dave Shea | living | CSS Zen Garden (May 2003) | Proving a theme layer is truly independent of content | [#dave-shea](#dave-shea) |
| Ethan Marcotte | living | "Responsive Web Design" (May 25, 2010; book 2011) | One layout that adapts across screen sizes | [#ethan-marcotte](#ethan-marcotte) |
| Luke Wroblewski | living | *Web Form Design* (2008), "Mobile First" (2009; book 2011) | Prioritizing content; forms people can finish | [#luke-wroblewski](#luke-wroblewski) |
| Jared Spool | living | UIE, Center Centre (2014), "experience rot" | Fighting feature bloat; judging design by what users don't notice | [#jared-spool](#jared-spool) |
| Aarron Walter | living | *Designing for Emotion* (2011), MailChimp design persona | Adding personality without breaking usability | [#aarron-walter](#aarron-walter) |
| Jen Simmons | living | "Intrinsic Web Design" (April 2018), CSS Grid advocacy, Firefox Grid Inspector | Layouts that size from content, not breakpoints | [#jen-simmons](#jen-simmons) |
| Rachel Andrew | living | CSS Grid education (Grid by Example), CSS WG, *The New CSS Layout* (2017) | Learning and teaching modern CSS layout with fallbacks | [#rachel-andrew](#rachel-andrew) |
| Mike Monteiro | living | "F*ck You, Pay Me" (2011), *Design Is a Job* (2012), *Ruined by Design* (2019) | Contracts, client conduct, ethical refusal | [#mike-monteiro](#mike-monteiro) |
| Joshua Davis | 1971–present | Praystation (1998), HYPE framework (2009), generative art | Rule-based, randomized visuals; motion as play | [#joshua-davis](#joshua-davis) |
| Hillman Curtis | 1961–2012 | *Flash Web Design* (2000), *MTIV* (2002), later short films | Restraint in motion; motion serving a brand message | [#hillman-curtis](#hillman-curtis) |
| Yugo Nakamura | 1970–present | MONOcrafts 2.0 (1999), tha ltd. (2004), NEC ecotonoha (2004) | Physics-like, crafted micro-interaction | [#yugo-nakamura](#yugo-nakamura) |
| 2Advanced Studios (Eric Jordan) | est. 1999 | Sci-fi Flash site versions (V3–V5); 2024 Rive rebuild | Cinematic brand worlds; what to do when your platform dies | [#2advanced-studios](#2advanced-studios) |

---

# Part A: Web pioneers and standards

**Context in one paragraph.** In the late 1990s, browsers implemented HTML and CSS inconsistently, and designers built layouts from nested tables, spacer GIFs, and browser-specific tags. The standards movement argued that semantic HTML, CSS for presentation, and scripting for behavior would cut cost, improve accessibility, and keep documents usable long term [2]. The people below turned that argument into working practice: proof (Zen Garden), method (responsive, mobile first, intrinsic), and professional norms (contracts, ethics, voice).

<a id="jeffrey-zeldman"></a>
## Jeffrey Zeldman (living) — web standards evangelist and publisher

**Base / discipline / era:** New York; web designer, writer, publisher, conference founder; 1998 onward.

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| Web Standards Project (WaSP), co-founded with George Olsen and Glenn Davis | August 1998 | Grassroots coalition that pressured browser makers to implement W3C standards. Zeldman was project leader 1999–2002. WaSP announced its dissolution on March 1, 2013 [1][2]. |
| *A List Apart* (co-launched) | 1998 | The magazine where much standards-era method was published, including Marcotte's "Responsive Web Design" (2010) [1][7]. |
| Happy Cog (studio) | 1999 | Standards-based design studio; Zeldman's association ended in 2016, when he launched Studio Zeldman [1]. |
| *Designing with Web Standards* | 2003 (2nd ed. 2007; 3rd ed. 2009 with Ethan Marcotte) | The book-length case for separating structure, presentation, and behavior [1]. |
| An Event Apart (with Eric A. Meyer) | 2005–2022 | "The design conference for people who make websites." First event Philadelphia, December 2005; final event San Francisco, 2022; farewell notice dated December 22, 2022 [1][3]. |
| A Book Apart (imprint) | 2010–2024 | Short practitioner books (Marcotte, Wroblewski, Walter, Monteiro, Andrew). Announced March 1, 2024 that it would publish no new titles; the site now reads "A Book Apart is now closed" [1][4]. |

**Principles**
- Write valid, semantic markup first; style it with CSS; add behavior with scripting. Each layer can change without rewriting the others [1][2].
- Standards are a business argument as much as a craft one: lower development cost and longer-lived documents [2].
- Publish the method. WaSP, *A List Apart*, the conference, and the imprint all existed to spread practice, not to sell a style.

**Signature moves**
- Treating the redesign as a stylesheet swap, not a rebuild.
- Using editorial publishing (magazine, books, conference) as the delivery channel for a technical standard.

**Borrow today**
- Apply (web): build every page so it works as plain semantic HTML before CSS and JavaScript load (progressive enhancement). Test with CSS disabled: headings, lists, forms, and reading order must still make sense.
- Apply (design systems): keep tokens and themes in a layer that can be swapped without editing component markup.
- Apply (brand/content): when you want a practice adopted, ship it as teaching material (articles, examples, a talk), not only as a spec.

**Limits & critiques**
- The standards-era argument was won. Today the risk is the reverse: JavaScript-only rendering that recreates the fragility WaSP fought. Do not assume "standards" means "framework of the month."
- Do not link to aneventapart.com as a live conference. In 2026-10 the domain served unrelated content [66].

**See also:** `masters-digital-ux.md` (Nielsen), `web-creators-studios-awards.md`, `visual-styles` → `editorial-magazine-web.md`.

<a id="dave-shea"></a>
## Dave Shea (living) — CSS Zen Garden

**Base / discipline / era:** Web designer; standards era, 2003 onward.

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| CSS Zen Garden | May 2003 | One fixed HTML file, restyled by contributed style sheets. Five designs at launch; 218 listed later [5]. |
| *The Zen of CSS Design* (with Molly Holzschlag) | February 2005 | Book analyzing 36 Zen Garden designs [5]. |
| Zen Garden 10th-anniversary reopening | May 7, 2013 | Reopened submissions, focused on HTML5 and CSS3. Active development had stopped in April 2008 [5]. |

**Principles** (from the site's own text)
- Purpose: "A demonstration of what can be accomplished through CSS-based design." [6]
- The rule that made it a proof: "You may modify the style sheet in any way you wish, but not the HTML." [6]
- Quality bar: "The only real requirement we have is that your CSS validates." [6]

**Signature moves**
- A controlled experiment: hold content constant, vary only presentation, and publish many results side by side.
- Generous semantic hooks (IDs and classes on every block) so designers could reach any element without changing markup.

**Borrow today**
- Apply (design systems): run a "Zen Garden test" on your theming layer. Produce two or three radically different themes against the same component markup. If a theme requires markup edits, your separation is leaking.
- Apply (web): for marketing sites with seasonal or campaign skins, build the skin as a stylesheet plus tokens, never as forked templates.
- Apply (critique): when judging a CSS architecture, ask what has to change in HTML to restyle it. The answer should be "nothing."

**Limits & critiques**
- Zen Garden designs often relied on image replacement and decorative background images, which were not always accessible as text. Treat it as a proof of separation, not a model for accessible typography.
- Separation is not always the goal. Utility-class approaches deliberately couple markup and style for speed. Choose consciously.

**Influence:** Zeldman wrote that designers built reputations on Zen Garden layouts and that many people learned to love CSS through it (as reported by Wikipedia; secondary source) [5].

**See also:** `visual-styles` → `minimalism.md`, `brutalism-web.md`.

<a id="ethan-marcotte"></a>
## Ethan Marcotte (living) — responsive web design

**Base / discipline / era:** Web designer, author; 2000s–present.

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| *Designing with Web Standards*, 3rd ed. (co-author with Zeldman) | 2009 | Standards method updated for the late-2000s web [1]. |
| "Responsive Web Design," *A List Apart* | May 25, 2010 | Coined the term and defined the method [7][9]. |
| *Responsive Web Design* (A Book Apart) | June 7, 2011 (2nd ed. December 2, 2014) | Book-length method; the 2nd edition adds progressive enhancement, image delivery, and bandwidth [8]. |

**Principles** (his words)
- "Fluid grids, flexible images, and media queries are the three technical ingredients for responsive web design" [7].
- Treat screen sizes as one design: "we can treat them as facets of the same experience" [7].
- "Media queries are, in short, conditional comments for the rest of us." [7]
- The metaphor came from "responsive architecture," buildings and rooms that react to the people inside them [7].

**Context:** Width-adaptive layouts existed earlier (Audi.com, late 2001; Cameron Adams's resolution-dependent layouts, 2004) under names like "liquid" and "fluid" [9]. Marcotte's contribution was the name, the three-part recipe, and the argument that one site should serve all screens [7][9].

**Signature moves**
- Proportional grids (target ÷ context = result) instead of fixed pixel columns [7].
- Images constrained to their container (`max-width: 100%`) [7].
- Breakpoints chosen where the design breaks, then layout adjusted with media queries.

**Borrow today**
- Apply (web): start with fluid units (`%`, `fr`, `min()`, `clamp()`), let content wrap naturally, and add a breakpoint only where the content visibly breaks. Do not pick breakpoints from device lists.
- Apply (images): always set `max-width: 100%` on images and use `srcset`/`sizes` so small screens do not download desktop assets.
- Apply (design handoff): show every key screen at three widths minimum (narrow, medium, wide) and specify behavior between them, not only at them.

**Limits & critiques**
- Responsive layout does not equal good mobile UX. A shrunk desktop page can still bury the task (see Wroblewski below).
- Fluid grids alone can produce awkward mid-width layouts. Combine with intrinsic sizing (see Simmons below).
- Note a small conflict: Jen Simmons's 2018 slides say Marcotte introduced RWD at An Event Apart Seattle in 2010; Jeremy Keith's notes put that talk in 2011 (from search-result summaries; secondary). The *A List Apart* article date, May 25, 2010, is the safe citation [7].

**See also:** `visual-styles` → `bento-grid.md`, `swiss-international.md` (grids).

<a id="luke-wroblewski"></a>
## Luke Wroblewski (living) — forms and mobile first

**Base / discipline / era:** Product designer, author, founder; 2000s–present.

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| *Web Form Design: Filling in the Blanks* (Rosenfeld Media) | May 2008 | The standard practitioner book on form layout, labels, validation, and actions [12]. |
| "Inline Validation in Web Forms," *A List Apart* | September 1, 2009 | Published a usability study of validation timing [13]. |
| "Mobile First" (blog post) | November 3, 2009 | Three reasons: mobile is growing, mobile forces focus, mobile extends capabilities [10]. |
| *Mobile First* (A Book Apart) | October 17, 2011 | Book-length method; now free online [11]. |
| Bagcheck (co-founder, CPO), acquired by Twitter | 2011 | [14] |
| Polar (co-founder, CEO), acquired by Google | 2014 | He then served as a Product Director at Google [14]. |

Earlier roles: Chief Design Architect (VP) at Yahoo!, Lead User Interface Designer at eBay. Current role per his site: Managing Director and head of product at Sutter Hill Ventures (verified 2026-10) [14].

**Principles** (his words)
- "Mobile forces you to focus": "There simply isn't room in a 320 by 480 pixel screen for extraneous, unnecessary elements." [10]
- Mobile adds capability (GPS, compass, multi-touch, accelerometer): "Building mobile first allows teams to utilize this full palette of capabilities." [10]
- On validation: "validating inputs prematurely can be harmful." [13]

**Evidence from the inline-validation study** [13] **[E2]** (single practitioner study, 22 participants, run by the London firm Etre; treat effect sizes as indicative, not universal)
- Best inline version vs. validate-on-submit: success rate +22%, errors −22%, satisfaction +31%, completion time −42%, eye fixations −47%.
- Validate after the user leaves a field (on blur) for open questions. Validate while typing, with a delay, only for strict-format fields like passwords and usernames.
- Do not validate before the user has answered. Keep messages visible and place them beside the field.

**Signature moves**
- Design the smallest screen first to decide what the page is for, then add.
- Forms as conversations: ask only what is needed, in a predictable order, with immediate, well-timed feedback.

**Borrow today**
- Apply (forms): validate on blur, not on first keystroke; show errors next to the field in text, not color alone; never clear the user's input on error.
- Apply (mobile first): write the content priority list for a 360px-wide screen before designing desktop. Anything that does not make the list needs a reason to exist on desktop.
- Apply (inputs): use the right input types and `autocomplete` attributes so mobile keyboards and autofill help the user.

**Limits & critiques**
- Mobile first is a prioritization method, not a rule that desktop must be sparse. Dense professional tools may legitimately start from desktop.
- The 2009 numbers come from one small study; re-test with your own form.

**See also:** `masters-digital-ux.md` (Nielsen, usability heuristics), `visual-styles` → `data-dense-functional.md`.

<a id="jared-spool"></a>
## Jared Spool (living) — UX research, education, and "experience rot"

**Base / discipline / era:** Usability researcher, educator; founding principal of User Interface Engineering (UIE). UIE launched the User Interface Conference in 1996 [15].

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| *Web Site Usability: A Designer's Guide* (with Snyder, Scanlon, DeAngelo) | [unverified year] | Early empirical usability book [15]. |
| *Web Anatomy* (with Robert Hoekman Jr.) | [unverified year] | Interaction design frameworks [15]. |
| "Great Designs Should Be Experienced and Not Seen" | May 14, 2009 | Source of the "invisible design" idea [16]. |
| Center Centre (co-founded with Leslie Jensen-Inman) | 2014 | UX design school for adults, launched after a Kickstarter [15]. |
| "Experience rot" (Product Momentum podcast) | December 4, 2018 | Names the decay that comes from adding features [17]. |

**Principles** (his words)
- Invisible design: "It's like an air conditioner in a conference room. Nobody ever interrupts our meetings to tell us how comfortable the temperature is." ... "But when it's working perfectly, it becomes invisible." [16]
- "When things are going well in a design, we don't pay attention to them." [16]
- Experience rot: "it's when features increase, complexity increases, and the experience goes down." [17] Causes he names: indiscriminate feature addition, feature-based roadmaps, competitive feature matching, and growing code complexity [17].

**Misattribution check:** The widely shared line "Good design, when it's done well, becomes invisible. It's only when it's done poorly that we notice it" does **not** appear verbatim in the 2009 article. The closest text is the air-conditioner passage above and the heading "The Better the Design, the More Invisible It Becomes" [16]. Quote the article, not the meme.

**Borrow today**
- Apply (product/UI): run a "feature subtraction" review before each roadmap cycle. For every proposed feature, name the existing complexity it adds and what you will remove.
- Apply (research): ask users what they like and what frustrates them. Spool's Netflix example shows that people praise outcomes, not interface details [16]. Design critique should measure outcomes, not visible flourish.
- Apply (critique): when an interface is praised for its look, check whether the task is also invisible. Visible design is fine for brand moments, not for routine tasks.

**Limits & critiques**
- "Invisible" design is wrong for brand, editorial, and expressive work, where being noticed is the job. Apply the principle to task flows.
- "Experience rot" is a practitioner concept, not a measured construct. **[E3]** as a quantitative claim; useful as a diagnostic frame.

**See also:** `masters-digital-ux.md`.

<a id="aarron-walter"></a>
## Aarron Walter (living) — emotional design and brand personality

**Base / discipline / era:** UX lead and educator. MailChimp 2008–2016 (Director of UX, GM of New Products, VP of R&D); InVision 2016–2020 (VP of Design Education & Content); now speaker, advisor, and co-founder of Design Better (per his site, verified 2026-10) [20].

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| *Designing for Emotion* (A Book Apart) | October 17, 2011 (2nd ed. June 22, 2020) | Argues emotional design is a core design responsibility; 2nd edition adds empathy, inclusion, privacy, and safety [18]. |
| "Personality in Design," *A List Apart* (book excerpt, ch. 3) | October 18, 2011 | Publishes the MailChimp "design persona" and rules for Freddie the mascot [19]. |
| *Principles of Product Design* | [unverified year] | Listed on his site [20]. |

**Principles**
- A hierarchy of user needs, adapted from Maslow: designs must be functional, reliable, and usable before they can be pleasurable. In his words, "we know all users need our designs to be functional, reliable, and usable," and pleasure is "the top layer in that hierarchy" [19].
- Personality should be specified, not improvised. The design persona covers brand traits, voice, visual style, and engagement [19].
- Restraint with mascots: "Freddie should be used sparingly, and only to interject a bit of humor." [19]

**Signature moves**
- The design persona document: a one-page brand personality spec that designers and writers share [19].
- Humor placed at low-risk moments (success states, idle screens) and removed from high-stress moments.
- MailChimp's public voice-and-tone guidance separates a constant voice from a tone that changes with the reader's emotional state. Example line: "Mailchimp's tone is usually informal, but it's always more important to be clear than entertaining." [21] (The guide does not name its authors; do not attribute it to Walter personally.)

**Borrow today**
- Apply (UI): write a design persona before adding any delight. List three to five traits, "this, not that" pairs, and where personality is not allowed (errors involving money, security, deletion).
- Apply (UX copy): define voice once; map tone by user state (success, waiting, error, failure, account risk).
- Apply (brand): if you use a mascot, write usage rules (frequency, contexts, no-go moments) like Freddie's.

**Limits & critiques**
- Claims that emotional design increases loyalty or revenue are mostly case-study based. **[E3]** Measure with your own retention or satisfaction data.
- Delight layered on a broken flow reads as mockery. The hierarchy is the rule: fix function and reliability first.
- InVision's website now redirects to miro.com (observed 2026-10) [67]; treat InVision-era resources as archival.

**See also:** `visual-styles` → `playful-friendly.md`, `corporate-flat-illustration.md`.

<a id="jen-simmons"></a>
## Jen Simmons (living) — intrinsic web design and CSS Grid advocacy

**Base / discipline / era:** Designer and developer advocate. Mozilla from 2016 (designed the Firefox Grid Inspector); member of the CSS Working Group since 2016; Apple from 2020, on the Web Developer Experience team for WebKit and Safari [22]. Hosted *The Web Ahead* (2011–2015); runs the *Layout Land* YouTube channel [22]. Current role: still presenting WebKit news for Apple at WWDC26 ("What's new in WebKit for Safari 27") (verified 2026-10) [25].

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| Firefox Grid Inspector | 2017 (per a cited Smashing article) | Made CSS Grid visible and debuggable in DevTools [22]. |
| "Everything You Know About Web Design Just Changed," An Event Apart Seattle | April 2018 | Introduced the term "Intrinsic Web Design" [23][24]. |
| Spec editing: CSS Box Sizing Level 4, CSS Grid Layout Level 3 | ongoing | Standards work [22]. |

**Principles** (her words)
- "Intrinsic Web Design is a name that I gave to this new era" of layout. It "includes CSS Grid, but it's not just about CSS Grid"; it is "about thinking about the whole system of layout, and how all these pieces fit together in a brand new way." [23]
- From the 2018 slides: "Fixed, fluid, content-sized" tracks; "Media Queries, as needed"; "Design a flexibility model for your system of content." [24]
- The four "stages of squish": Fixed, Fluid, Adaptive, Responsive. Ways to contract and expand: shrink/grow, wrap and reflow, add or remove whitespace, overlap [24].

**Signature moves**
- Mixing fixed, fluid, and content-sized tracks in one grid (`minmax()`, `auto`, `fr`, `fit-content()`).
- Truly two-dimensional layout (rows and columns), with nested formatting contexts: flow, flexbox, grid, multicolumn [24].
- Editorial, magazine-like layout on the web, built in CSS rather than images.

**Borrow today**
- Apply (web): use `grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr))` and similar intrinsic patterns so card grids reflow without breakpoints. Add media queries only for changes content sizing cannot handle.
- Apply (design handoff): specify a "flexibility model" per component: which dimensions are fixed, which fluid, which sized by content.
- Apply (editorial): use Grid for art-directed layouts (overlap, asymmetric columns) instead of exporting text as images.

**Limits & critiques**
- Intrinsic layouts can surprise QA: content length changes the layout. Test with the longest real strings, translations, and empty states.
- Advocacy roles at browser vendors are part of company developer relations. Weigh claims about a browser's support against independent data (caniuse, MDN).

**See also:** `visual-styles` → `editorial-magazine-web.md`, `bento-grid.md`.

<a id="rachel-andrew"></a>
## Rachel Andrew (living) — CSS layout educator and spec contributor

**Base / discipline / era:** Web developer, writer; W3C CSS Working Group member (earlier listed as Invited Expert) [26][27]. Co-founder of the business behind Perch CMS and Notist [26]. Editor-in-chief of *Smashing Magazine* (appointed October 2017; still EIC in 2020 posts) [26][29]. Now on Google's Chrome team as a senior staff technical writer and content lead for web.dev and developer.chrome.com (per her site, verified 2026-10) [27].

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| *Get Ready for CSS Grid Layout* (A Book Apart) | January 7, 2016 | Prepared designers for Grid before broad browser support [26]. |
| *The New CSS Layout* (A Book Apart) | October 10, 2017 | Explains Grid, Flexbox, and the layout model together [26]. |
| Grid by Example | ongoing | "A collection of examples, video and other information to help you learn CSS Grid Layout," including patterns with fallbacks [28]. |

**Principles**
- Teach layout as a system (formatting contexts, alignment, sizing), not as a bag of tricks [26][28].
- Ship new CSS with fallbacks: Grid by Example pairs patterns with fallbacks for older browsers [28].
- Spec work and teaching feed each other: the person explaining a feature should also help shape it.

**Signature moves**
- Small, single-purpose demos per feature (one concept per example) [28].
- Writing documentation as product (web.dev, MDN contributions) [26][27].

**Borrow today**
- Apply (web): build new layout features behind `@supports` with a working fallback, not a broken page.
- Apply (design systems): document each layout primitive with a minimal live example, like Grid by Example, rather than prose alone.
- Apply (teams): when adopting a new CSS feature, write the one-page internal "by example" before the first production use.

**Limits & critiques**
- Her current writing is published under Google's developer relations. As with any vendor channel, cross-check support status with MDN and caniuse.

**See also:** `visual-styles` → `swiss-international.md` (grids), `data-dense-functional.md`.

<a id="mike-monteiro"></a>
## Mike Monteiro (living) — design as a job, design ethics

**Base / discipline / era:** San Francisco; co-founder and design director of Mule Design [30][34]; writer and speaker; 2010s–present.

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| "F*ck You, Pay Me," CreativeMornings San Francisco | March 2011 | Talk on contracts and getting paid; spread widely after Zeldman and others shared the video in April 2011 [31][34]. |
| *Design Is a Job* (A Book Apart) | April 9, 2012 (2nd ed. November 1, 2022) | Selling design, contracts, clients, fair pay; 2nd edition adds self-care, toxic workplaces, community [30]. |
| *Ruined by Design* | 2019 | Argues designers carry ethical responsibility for what they make and should refuse harmful work [32][33]. Publisher reported as Mule Books (secondary, [unverified]). |
| A designer's code of ethics | 2017–2019 | A published code he promoted alongside the book [32]. Exact item wording [unverified] in this pass; quote it from his own publication only. |

**Principles** (his words)
- "When you hire me as a designer, I do not work for you." "I'm not there to do your bidding, I'm there to solve a problem or reach a goal that we agreed upon." (*Ruined by Design*, as quoted by *Fortune*) [32]
- "If we cannot ask 'why,' we lose the ability to judge whether the work we're doing is ethical." (as quoted in a 2021 review) [33]
- Treating some users as "edge cases" is a decision that their problems are not worth solving (paraphrase of the book's argument) [33].

**Signature moves**
- Contracts first: scope, payment schedule, and kill fees written before work starts [34].
- Designers as gatekeepers: the right to question and refuse work [33].

**Borrow today**
- Apply (any client work): no work without a signed agreement that covers scope, revisions, payment schedule, ownership, and cancellation.
- Apply (product ethics check, before shipping): list who could be harmed (harassment, privacy, exclusion, financial loss); name the "edge cases" you are choosing not to serve; record the decision and an owner.
- Apply (critique): add "Who is hurt if this works exactly as designed?" to every design review agenda.

**Limits & critiques**
- His work is polemical by design. Use it to frame decisions, not as an evidence base for effects on users.
- The CreativeMornings talk is sometimes said to feature lawyer Gabe Levine; no source opened in this pass confirms that, so it is omitted [unverified].

**See also:** `masters-digital-ux.md`, `masters-graphic-contemporary.md`.

---

# Part B: The Flash and experimental era (about 1996–2010)

## Flash timeline

| Date | Event |
|------|-------|
| 1993 | FutureWave Software publishes SmartSketch, the precursor to Flash [35]. |
| 1995 | FutureWave adds frame-by-frame animation and releases FutureSplash Animator. Microsoft and Disney are early adopters [35][36]. (Often given as 1996; the Wikipedia articles opened here say 1995.) |
| December 1996 | Macromedia acquires FutureWave and renames the product Macromedia Flash; Flash 1.0 ships December 18, 1996 [35][36]. |
| 1996 | Hillman Curtis, as Macromedia design director, designs what is described as the first website using the Flash Player plug-in [44]. |
| May 2000 | The FWA (Favourite Website Awards) launches, founded by Rob Ford. It becomes the era's showcase (FWA of the Day, Hall of Fame from 2007). Details in `web-creators-studios-awards.md` [58]. |
| August 24, 2000 | Flash 5 introduces ActionScript 1.0 [35]. |
| October 29, 2000 | Jakob Nielsen publishes "Flash: 99% Bad" [39]. |
| December 3, 2005 | Adobe completes its acquisition of Macromedia, including Flash [35]. |
| 2007 | Flash CS3, the first Adobe-branded release, introduces ActionScript 3.0 [35]. |
| April 2010 | Ricardo Cabello (Mr.doob) releases Three.js on GitHub; it began as ActionScript code before being ported to JavaScript in 2009 [62]. |
| April 29, 2010 | Steve Jobs publishes "Thoughts on Flash": closed, unnecessary for video, unreliable and insecure, battery-hungry, not built for touch, and a third-party layer between platform and developer [37]. |
| November 2011 | Adobe stops developing Flash for mobile and points developers to HTML5 [35]. |
| January 28, 2015 | YouTube defaults to HTML5 players [35]. |
| July 25, 2017 | Adobe announces Flash end-of-life [35][38]. |
| December 31, 2020 | Adobe stops supporting Flash Player [38]. |
| January 12, 2021 | Flash Player begins blocking Flash content [38]. Adobe names "HTML5, WebGL, and WebAssembly" as alternatives [38]. |

Jobs, in "Thoughts on Flash": "by almost any definition, Flash is a closed system" and "Flash is no longer necessary to watch video or consume any kind of web content." [37]

<a id="joshua-davis"></a>
## Joshua Davis (1971–present) — generative Flash artist

**Base / discipline / era:** Born San Diego; studio in Mineola, New York; designer and artist working in code; 1998–present [40][68]. His studio site now also links NFT platforms (SuperRare, Art Blocks) under the "praystation" name [68].

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| praystation.com | 1998 | Open experimental lab; source files shared with the community. Its second year was compiled into the CD-ROM *Praystation Hardrive* (2001) [40]. |
| once-upon-a-forest.com | 1999 | Abstract, exploratory Flash piece [40]. |
| *New Masters of Flash* (contributor, friends of ED) | 2000 | Canon-forming anthology of the era [40]. |
| Prix Ars Electronica Golden Nica, Net Vision / Net Excellence | 2001 | Fine-art recognition for web work [40]. |
| *Flash to the Core: An Interactive Sketchbook* (New Riders) | July 2002 | His process book [40]. |
| HYPE framework (with Branden Hall), ActionScript 3 | first version late October 2009 | "A creative coding framework built on top of ActionScript 3." Goal: "to allow newcomers to Flash and ActionScript to creatively play and express themselves" while learning to program [41][42]. Later ported to Processing, maintained by Davis, BSD license [43]. |
| IBM Watson *Jeopardy!* avatar visualization (contributed) | 2011 | Generative visuals at broadcast scale [40]. |
| Cooper-Hewitt "Design Life Now" National Design Triennial | December 2006 | Museum recognition [40]. |

**Principles**
- Rule-based, randomized image making: define the system and its constraints, then let chance produce variations, and curate the results [40].
- Share source. Praystation and HYPE treated code as teaching material [40][41].

**Signature moves**
- Libraries of hand-drawn vector parts recombined by code (color pools, rotation, scale ranges).
- Grids and particle systems driven by randomness within strict palettes.
- Output from screen to print and music visuals (Tool, deadmau5, Phantogram) [40].

**Borrow today**
- Apply (brand): build a generative identity with fixed palettes and part libraries plus randomized composition. Ship it as a tool (a p5.js or canvas generator) so teams can make on-brand variations.
- Apply (social/OOH): render hundreds of variants, curate a set, keep the seed values so any variant can be reproduced.
- Apply (web): use generative backgrounds sparingly and pause them under `prefers-reduced-motion`.

**Limits & critiques**
- Randomness without curation produces noise. The craft is the constraint set and the edit.
- Much of his 1998–2009 web work depended on the Flash plug-in and is now hard to view without emulation.

**See also:** `visual-styles` → `kinetic-typography.md`, `maximalism.md`; `movements-1980-present.md`.

<a id="hillman-curtis"></a>
## Hillman Curtis (1961–2012) — Flash designer turned filmmaker

**Base / discipline / era:** Born David Hillman Curtis, La Jolla, California; worked in New York; died April 18, 2012, in Brooklyn, of colon cancer, aged 51 [44].

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| Macromedia design director; early Flash Player website | 1996 | Described as the first website using the Flash Player plug-in [44]. |
| hillmancurtis, inc. | 1997 | New York studio; clients included Yahoo, Adobe, the Metropolitan Opera; commercials for IBM and BlackBerry [44]. |
| *Flash Web Design: The Art of Motion Graphics* (New Riders) | March 2000 | Reported to have sold over 100,000 copies [44]. |
| *Flash Web Design: The V5 Remix* | March 2001 | [44] |
| *MTIV: Process, Inspiration and Practice for the New Media Designer* (New Riders) | May 2002 | Process and inspiration book for the new-media designer [44]. |
| *Hillman Curtis on Creating Short Films for the Web* | August 2005 | Marks his shift to film [44]. |
| *Artist Series* (web documentaries) | 2000s | Short films on Milton Glaser, Paula Scher, David Carson, Stefan Sagmeister, Pentagram, and others [44]. |
| *The Happy Film* (co-director, with Sagmeister and Ben Nabors) | 2016 | Released after his death [44]. |

**Principles**
- Motion should carry a message, not decorate it. His Flash books framed animation as motion graphics in the broadcast-design tradition [44].
- Process is teachable. *MTIV* treats inspiration and practice as habits, not mysteries [44].

**Signature moves**
- Short, clean typographic animations for brands, at small file sizes appropriate to dial-up.
- Moving from interactive work to short documentary film while keeping the same economy.

**Borrow today**
- Apply (web/brand motion): write the one-sentence message an animation must communicate before designing it. Cut any motion that does not serve that sentence.
- Apply (performance): budget motion like the dial-up era did. Set a maximum payload for animation assets per page and hold to it.
- Apply (content): use short documentary video (people at work, process) as brand content, as his *Artist Series* did.

**Limits & critiques**
- Book sales figures come from Wikipedia (secondary source) [44].
- Much of his Flash work is no longer viewable natively.

**See also:** `masters-graphic-contemporary.md` (Sagmeister, Scher, Carson), `visual-styles` → `kinetic-typography.md`.

<a id="yugo-nakamura"></a>
## Yugo Nakamura (1970–present) — interaction craftsman

**Base / discipline / era:** Tokyo; studied engineering, architecture, and landscape design at the University of Tokyo; interactive designer, creative director, engineer [45][46]. Opened tha ltd. in 2004 [47].

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| MONOcrafts, Version 2.0 | 1999 | "Caused a sensation in the web design community"; among the first works to show what Flash 4 could do with fluid, naturalistic motion (Ars Electronica catalog text, paraphrased) [46]. |
| NEC ecotonoha | 2004 | Cannes Cyber Lion Grand Prix; One Show Interactive Best of Show [45]. |
| Yugop.com | 2005 | Prix Ars Electronica Award of Distinction, Net Vision [46]. |
| UNIQLO USA site | 2007 | One Show Silver, Cannes Cyber Lion Silver [45]. |
| FFFFOUND! (image bookmarking, run by tha) | 2007–2017 | [45] |
| *Humanity* (video game, director) | 2023 | [45] |

Other work: UNIQLO web direction, KDDI video direction, the NHK educational program *design A (あ)* [47].

**About UNIQLOCK (2007) — attribution correction.** UNIQLOCK launched June 15, 2007: a blog-widget clock combining music, dance, and time ("MUSIC×DANCE×CLOCK") [48]. It won the 2008 Cannes Cyber Grand Prix and Titanium Grand Prix, credited to Projector, Tokyo [50][51], plus One Show Interactive and Clio Interactive Grand Prix, 18 awards in all by May 2008 [49]. The credit lists found in this pass name Projector's **Koichiro Tanaka** as creative director, with art director Takayuki Sugihara and interactive designers Keiichi Tozaki and Yukio Sato. **Yugo Nakamura is not named** [52]. On the 2009 UNIQLO CALENDAR credits, "THA LTD." appears only under Special Thanks [53]. Do not credit UNIQLOCK to Nakamura without a primary credit list that names him.

**Principles**
- Bring the detail of traditional Japanese craftsmanship to interactive work (Ars Electronica catalog text, paraphrased) [46].
- Engineering background applied to feel: motion that behaves like physical material [46].

**Signature moves**
- Elastic, spring-like responses to the cursor; small elements that seem to have mass and friction.
- Minimal, monochrome interfaces where the interaction itself is the ornament.

**Borrow today**
- Apply (UI): use spring physics (stiffness, damping) instead of fixed-duration easing for direct-manipulation elements such as drawers, sliders, and drag-and-drop. Keep it subtle and interruptible.
- Apply (brand sites): make one signature micro-interaction the brand moment, rather than animating everything.
- Apply (accessibility): provide a reduced-motion version where springs become instant state changes.

**Limits & critiques**
- Birth year and some biography details rely on Wikipedia and an Ars Electronica catalog entry (which cites designmuseum.org); treat as secondary.

**See also:** `visual-styles` → `minimalism.md`, `scandinavian-nordic.md` (craft restraint), `immersive-3d-webgl.md`.

<a id="2advanced-studios"></a>
## 2Advanced Studios (est. 1999) — Eric Jordan's sci-fi Flash studio

**Base / discipline / era:** Digital creative agency founded in 1999. Eric Jordan is named as founder; some sources also credit Tony Novak (and one, John Carrol) as co-founders [54][55][56]. Initially focused on Flash motion graphics.

**Key works**

| Work | Year | Why it matters |
|------|------|----------------|
| 2advanced.com site versions: V3 "Expansions," V4 "Prophecy," V5 "Attractor" (names per the studio's own site) | V3 in 2001; V4 and V5 years [unverified] | Each version was a cinematic, sci-fi interface; the site was the portfolio [54][55]. |
| Flash archive "Sequence" | 2001 | Listed on the studio site [54]. |
| V3 rebuilt in Rive and React | 2024 | Revival of a Flash-era site on modern tools [55][56]. |
| V4 "Prophecy" restored via Ruffle (Flash emulator) | July (year [unverified]) | Won an FWA of the Day after restoration [54]. |

**Source conflict:** Web Designer Depot (December 2024) names "Expedition," "Prophecy," and "V5 Ascension" as famous versions [55]. The studio's own site lists "V3 Expansions," "V4 Prophecy," and "V5 Attractor" [54]. Prefer the studio's naming.

**Status (verified 2026-10):** Web Designer Depot says the studio "shut down in the early 2010s" as Flash declined [55]. Since 2024 it has returned as a smaller operation: the site (© 2026) offers Flash archives, a Rive rebuild, a shop, and a Patreon [54][56]. Eric Jordan works as a creative director and motion designer across film, broadcast, web, and games; his recent credits include main titles for FX's *Social Studies* [57].

**Signature moves** [55]
- Futuristic, sci-fi interfaces: metallic textures, neon light, HUD-like panels.
- Cinematic transitions and soundscapes; exploration-led navigation.
- The site version as a release, like a game or album.

**Borrow today**
- Apply (brand worlds): for entertainment, games, and launches, a cinematic "world" with sound and transitions can still work. Put it on a dedicated campaign page, not the product's core task flow.
- Apply (preservation): archive your interactive work in a format that will outlive its runtime (video captures, source, and a modern rebuild path). 2Advanced's catalog survived through Ruffle and Rive [54][55].
- Apply (versioning): treat major site redesigns as named, documented releases with case studies.

**Limits & critiques**
- The style spawned many imitators ("2Advanced clones") and long loading screens. Do not copy intro sequences that block content.
- The decline of the studio with its platform is the cautionary tale: a studio identity tied to one proprietary runtime.

**See also:** `visual-styles` → `cyberpunk-futuristic.md`, `retro-futurism.md`, `y2k.md`, `immersive-3d-webgl.md`.

---

## What the Flash era got right and wrong

| Got right | Got wrong |
|-----------|-----------|
| Motion, sound, and play were treated as core expressive tools, not afterthoughts. | Gratuitous intros and animation delayed access to content; Nielsen called Flash "a usability disease" about 99% of the time [39]. |
| Designers could author vector animation and interaction without a backend team; one tool covered design and code. | Broke browser conventions: Back button, visited links, text-size controls, Find in Page [39][35]. |
| Consistent rendering across browsers at a time when CSS support was unreliable. | "Flash reduces accessibility for users with disabilities." [39] Text inside SWF files was also hard to translate [39]. |
| Shared source files and open labs (Praystation, HYPE) built a learning community [40][41]. | Proprietary lock-in: one vendor's plug-in; when Apple refused it on iOS and Adobe ended it, whole bodies of work stopped running [37][38]. |
| Small file sizes forced discipline (vector art, reused symbols). | Security: over 1,078 CVE entries in Flash Player; Facebook's security chief called for its end in July 2015 [35]. Performance and battery cost on mobile [37]. |
| Award culture (FWA) rewarded craft and pushed the medium [58]. | Search: content locked in SWF files was widely considered hard to index [unverified as a dated, measured claim]. |

**Decision rule for agents:** when a brief asks for "Flash-era" richness, keep the expressive goals (motion, sound, play, a strong world) and drop the delivery model (blocking intros, custom controls that replace browser behavior, content hidden in a canvas, one proprietary runtime).

## Modern equivalents

| Flash-era capability | Modern equivalent | Notes |
|----------------------|-------------------|-------|
| 3D and real-time graphics | WebGL / WebGPU with Three.js | Three.js first released April 2010; began as ActionScript code; uses WebGL 2 by default, with an experimental WebGPU renderer [62]. See `visual-styles` → `immersive-3d-webgl.md`. |
| Timeline animation and tweening (ActionScript tween libraries) | GSAP | "GSAP is now 100% free for all users, thanks to Webflow's support"; maintained by the original team at Webflow (verified 2026-10) [63]. |
| Interactive vector animation with logic | Rive | "The interactive experience engine"; state machines; open-source runtimes for web, iOS, Android, Flutter, React, Unity, Unreal, and more [64]. 2Advanced rebuilt its V3 site with it [55]. |
| Designer-authored animation exported to code | Lottie | JSON animation format; Bodymovin After Effects exporter by Hernan Torrisi (2015); Airbnb's cross-platform libraries (2017); dotLottie container (2020); Lottie Animation Community formed in 2024 to standardize the format [65]. |
| Seamless scene transitions between "pages" | View Transitions API | Same-document view transitions became **Baseline Newly available on October 14, 2025** when Firefox 144 shipped them; available in all three major engines [59]. Cross-document view transitions (`@view-transition`) are **not Baseline**: MDN marks them "Limited availability"; caniuse shows Chrome/Edge 126+, Safari 18.2+, and only partial Firefox support (verified 2026-10) [60][61]. Use as progressive enhancement. |
| Kinetic type | CSS animations, variable fonts, GSAP SplitText-style techniques | See `visual-styles` → `kinetic-typography.md`. |
| Playing legacy SWF content | Ruffle (Flash emulator) | Used by 2Advanced to restore its V4 archive [54]. |

**Apply:** pick the lightest tool that achieves the effect. CSS transitions and the View Transitions API come first for UI state changes; Lottie or Rive for illustrated motion; GSAP for choreographed timelines; Three.js only when the 3D scene is the content.

**Limit:** every modern equivalent can recreate Flash's worst habits. Respect `prefers-reduced-motion`, keep real text in the DOM (not baked into canvas or video), keep browser navigation working, and set a performance budget for animation payloads.

---

## Cross-cutting lessons

1. **Separate layers so each can change independently.** Zeldman's standards, Shea's Zen Garden, and modern design tokens all apply the same rule [1][6].
2. **Let content set the layout.** The line runs from fluid grids (Marcotte) to mobile-first priority (Wroblewski) to intrinsic sizing (Simmons) [7][10][23].
3. **Teach in public.** *A List Apart*, Zen Garden, Praystation, HYPE, and Grid by Example spread practice by sharing source and examples [1][5][28][40][41].
4. **Do not build on one vendor's runtime.** Flash's end (EOL December 31, 2020) took a whole canon offline; open standards survived [38].
5. **Personality is a layer on top of function.** Walter's hierarchy and Spool's "invisible" design agree: get function and reliability right first [16][19].
6. **Constraints produce craft.** Dial-up file sizes, 320 × 480 screens, and Zen Garden's no-HTML rule all forced better decisions [6][10].
7. **The designer is accountable.** Monteiro's argument: contracts protect the work, and ethics protect the people the work touches [32][33].

## Common myths

| Myth | Correction |
|------|-----------|
| "Ethan Marcotte invented flexible layouts." | He named and defined responsive web design in May 2010. Width-adaptive layouts existed earlier (Audi.com 2001; Cameron Adams 2004) [7][9]. |
| "Yugo Nakamura made UNIQLOCK." | UNIQLOCK's credits name Projector and creative director Koichiro Tanaka; Nakamura is not listed in the credit lists found [50][52]. |
| "Jared Spool said: 'Good design, when it's done well, becomes invisible. It's only when it's done poorly that we notice it.'" | That wording is not in his 2009 article. The verified source is the air-conditioner passage [16]. |
| "Steve Jobs killed Flash in 2010." | "Thoughts on Flash" (April 29, 2010) kept it off iOS. Adobe dropped mobile Flash in November 2011, announced EOL in July 2017, and ended support December 31, 2020. Security, YouTube's 2015 move to HTML5, and browser blocking all contributed [35][37][38]. |
| "FutureSplash launched in 1996." | The sources opened here give 1995 for FutureSplash Animator and December 1996 for Macromedia's acquisition and Flash 1.0 [35][36]. |
| "Flash sites were inaccessible by necessity." | Alternative text was possible from Flash Player 6 [35]. Most inaccessibility came from design choices that ignored it, as Nielsen argued [39]. |
| "An Event Apart and A Book Apart are still running." | An Event Apart ended after its 2022 San Francisco event [3]. A Book Apart stopped publishing new titles in March 2024 [4]. |
| "View Transitions work everywhere now." | Same-document transitions are Baseline as of October 2025. Cross-document transitions are not Baseline as of 2026-10 [59][60][61]. |
| "MailChimp's Voice and Tone guide was written by Aarron Walter." | The guide carries no author attribution. Walter's verified MailChimp work is the design persona and Freddie rules in *Designing for Emotion* [19][21]. |

## Sources

[1] Wikipedia contributors. (n.d.). *Jeffrey Zeldman*. Wikipedia. https://en.wikipedia.org/wiki/Jeffrey_Zeldman (secondary source; accessed 2026-10)
[2] Wikipedia contributors. (n.d.). *Web Standards Project*. Wikipedia. https://en.wikipedia.org/wiki/Web_Standards_Project (secondary source; accessed 2026-10)
[3] Coyier, C. (2023, January 1). *Farewell, An Event Apart*. https://chriscoyier.net/2023/01/01/farewell-an-event-apart/ (reproduces AEA's farewell notice dated 2022-12-22)
[4] A Book Apart. (2024). Homepage and "A New Chapter for A Book Apart" (March 1, 2024). https://abookapart.com/ (accessed 2026-10)
[5] Wikipedia contributors. (n.d.). *CSS Zen Garden*. Wikipedia. https://en.wikipedia.org/wiki/CSS_Zen_Garden (secondary source; accessed 2026-10)
[6] Shea, D. (2003–). *css Zen Garden*. https://www.csszengarden.com/
[7] Marcotte, E. (2010, May 25). *Responsive Web Design*. A List Apart. https://alistapart.com/article/responsive-web-design/
[8] A Book Apart. (n.d.). *Responsive Web Design* by Ethan Marcotte (product page). https://abookapart.com/products/responsive-web-design
[9] Wikipedia contributors. (n.d.). *Responsive web design*. Wikipedia. https://en.wikipedia.org/wiki/Responsive_web_design (secondary source; accessed 2026-10)
[10] Wroblewski, L. (2009, November 3). *Mobile First*. LukeW Ideation + Design. https://www.lukew.com/ff/entry.asp?933
[11] A Book Apart. (n.d.). *Mobile First* by Luke Wroblewski (product page). https://abookapart.com/products/mobile-first
[12] Wroblewski, L. (n.d.). *Web Form Design: Filling in the Blanks* (book page; Rosenfeld Media, May 2008). https://www.lukew.com/resources/web_form_design.asp
[13] Wroblewski, L. (2009, September 1). *Inline Validation in Web Forms*. A List Apart, Issue 291. https://alistapart.com/article/inline-validation-in-web-forms/
[14] Wroblewski, L. (n.d.). *About*. https://www.lukew.com/about/ (accessed 2026-10)
[15] Wikipedia contributors. (n.d.). *Jared Spool*. Wikipedia. https://en.wikipedia.org/wiki/Jared_Spool (secondary source; accessed 2026-10)
[16] Spool, J. M. (2009, May 14). *Great Designs Should Be Experienced and Not Seen*. UIE / Center Centre. https://articles.centercentre.com/?p=194
[17] ITX. (2018, December 4). *Product Momentum Podcast: Jared Spool on experience rot*. https://itx.com/?p=6943
[18] A Book Apart. (n.d.). *Designing for Emotion* by Aarron Walter (product page). https://abookapart.com/products/designing-for-emotion
[19] Walter, A. (2011, October 18). *Personality in Design* (excerpt from *Designing for Emotion*, ch. 3). A List Apart. https://alistapart.com/article/personality-in-design
[20] Walter, A. (n.d.). *Aarron Walter* (personal site). https://aarronwalter.com/ (accessed 2026-10)
[21] Mailchimp. (2023). *Voice and Tone*. Mailchimp Content Style Guide. https://styleguide.mailchimp.com/voice-and-tone/
[22] Wikipedia contributors. (n.d.). *Jen Simmons*. Wikipedia. https://en.wikipedia.org/wiki/Jen_Simmons (secondary source; accessed 2026-10)
[23] Zeldman, J. (2018, May 2). *Transcript: Intrinsic Web Design with Jen Simmons (The Big Web Show, Ep. 76)*. https://zeldman.com/2018/05/02/transcript-intrinsic-web-design-with-jen-simmons-the-big-web-show/
[24] Simmons, J. (2018, April). *Everything You Know About Web Design Just Changed* (slides). An Event Apart Seattle. https://talks.jensimmons.com/20LmLE/present
[25] Apple. (2026). *What's new in WebKit for Safari 27* (WWDC26 session 204, presented by Jen Simmons). https://developer.apple.com/videos/play/wwdc2026/204/
[26] Wikipedia contributors. (n.d.). *Rachel Andrew*. Wikipedia. https://en.wikipedia.org/wiki/Rachel_Andrew (secondary source; accessed 2026-10)
[27] Andrew, R. (n.d.). *About*. https://rachelandrew.co.uk/about/ (accessed 2026-10)
[28] Andrew, R. (n.d.). *Grid by Example*. https://gridbyexample.com/
[29] Smashing Magazine. (n.d.). *Rachel Andrew* (author page). https://www.smashingmagazine.com/author/rachel-andrew/
[30] A Book Apart. (n.d.). *Design Is a Job* by Mike Monteiro (product page). https://abookapart.com/products/design-is-a-job
[31] Zeldman, J. (2011, April 15). *F*ck you, pay me*. https://zeldman.com/2011/04/15/fck-you-pay-me/
[32] Fortune. (2019, November 26). *Should designers adopt a code of ethics?* https://fortune.com/2019/11/26/should-designers-adopt-a-code-of-ethics
[33] TLF Research. (2021). *Book Review: Ruined by Design*. https://www.tlfresearch.com/ruined-by-design/ (secondary source)
[34] Designers & Books. (n.d.). *Design Is a Job* (Mike Monteiro). https://www.designersandbooks.com/book/design-job
[35] Wikipedia contributors. (n.d.). *Adobe Flash*. Wikipedia. https://en.wikipedia.org/wiki/Adobe_Flash (secondary source; accessed 2026-10)
[36] Wikipedia contributors. (n.d.). *FutureWave Software*. Wikipedia. https://en.wikipedia.org/wiki/FutureWave_Software (secondary source; accessed 2026-10)
[37] Wikipedia contributors. (n.d.). *Thoughts on Flash*. Wikipedia. https://en.wikipedia.org/wiki/Thoughts_on_Flash (secondary source quoting Jobs's April 29, 2010 letter; accessed 2026-10)
[38] Adobe. (n.d.). *Adobe Flash Player End of Life*. https://www.adobe.com/products/flashplayer/end-of-life.html
[39] Nielsen, J. (2000, October 29). *Flash: 99% Bad*. Nielsen Norman Group. https://www.nngroup.com/articles/flash-99-percent-bad/
[40] Wikipedia contributors. (n.d.). *Joshua Davis (designer)*. Wikipedia. https://en.wikipedia.org/wiki/Joshua_Davis_(designer) (secondary source; accessed 2026-10)
[41] Correia, N. (2010, January 19). *HYPE – Flash framework by Joshua Davis and Branden Hall*. Media Lab Helsinki, mediacode. https://mlab.taik.fi/mediacode/archives/470
[42] HYPE. (n.d.). *Hype* (GitHub organization; HYPE_AS3 repository description). https://github.com/Hype
[43] HYPE. (n.d.). *HYPE_Processing*. GitHub. https://github.com/hype/HYPE_Processing
[44] Wikipedia contributors. (n.d.). *Hillman Curtis*. Wikipedia. https://en.wikipedia.org/wiki/Hillman_Curtis (secondary source; accessed 2026-10)
[45] Wikipedia contributors. (n.d.). *Yugo Nakamura*. Wikipedia. https://en.wikipedia.org/wiki/Yugo_Nakamura (secondary source; accessed 2026-10)
[46] Ars Electronica. (2005). *Yugop.com* (Prix Ars Electronica, Net Vision, Award of Distinction). https://archive.aec.at/prix/118406/
[47] FITC. (n.d.). *Yugo Nakamura* (speaker bio). https://fitc.ca/speaker/yugonakamura
[48] UNIQLO. (2007, June). *UNIQLOCK* (press release, Japanese). https://www.uniqlo.com/jp/ja/contents/corp/press-release/2007/06/uniqlock.html
[49] UNIQLO. (2008, May 26). *UNIQLOCK awards* (press release, Japanese). https://www.uniqlo.com/jp/ja/contents/corp/press-release/2008/05/052616_uniqlock.html
[50] Campaign Asia. (2008). *Uniqlo Japan wins Cyber Grand Prix at Cannes*. https://www.campaignasia.com/article/uniqlo-japan-wins-cyber-grand-prix-at-cannes/25xzsmcyivgvln1jty1x58cpx8
[51] Campaign Asia. (2008). *Japan's Uniqlo wins Titanium Grand Prix at Cannes*. https://www.campaignasia.com/article/japans-uniqlo-wins-titanium-grand-prix-at-cannes/8ypn5eedvsocz5rivk0k42sdif
[52] PostKiwi. (2008, June 27). *Uniqlock in Tokyo, Brisbane and Everywhere* (credit list). https://postkiwi.com/?p=3448 (secondary source)
[53] TECHSTOCK. (n.d.). *UNIQLO CALENDER* (credit list). Scrapbox. https://scrapbox.io/TECHSTOCK/UNIQLO_CALENDER (secondary source)
[54] 2Advanced Studios. (n.d.). *2Advanced* (studio site). https://www.2advanced.com/ (accessed 2026-10)
[55] Harper, A. (2024, December 1). *Blast from the Past: 2Advanced.com*. Web Designer Depot. https://webdesignerdepot.com/blast-from-the-past-2advanced-com/
[56] School of Motion. (n.d.). *Rediscovering the Art of Interactive Design with 2Advanced Studios*. https://www.schoolofmotion.com/blog/2advanced
[57] Jordan, E. (n.d.). *Eric Jordan* (personal site). https://www.ericjordan.com/ (accessed 2026-10)
[58] Wikipedia contributors. (n.d.). *The FWA*. Wikipedia. https://en.wikipedia.org/wiki/The_FWA (secondary source; accessed 2026-10)
[59] web.dev. (2025, October 16). *Same-document view transitions are now Baseline Newly available*. https://web.dev/blog/same-document-view-transitions-are-now-baseline-newly-available
[60] Can I use. (n.d.). *Cross-document view transitions*. https://caniuse.com/cross-document-view-transitions (accessed 2026-10)
[61] MDN. (n.d.). *@view-transition*. https://developer.mozilla.org/en-US/docs/Web/CSS/@view-transition (accessed 2026-10)
[62] Wikipedia contributors. (n.d.). *Three.js*. Wikipedia. https://en.wikipedia.org/wiki/Three.js (secondary source; accessed 2026-10)
[63] GSAP. (n.d.). *Pricing*. https://gsap.com/pricing/ (accessed 2026-10)
[64] Rive. (n.d.). *Rive — the interactive experience engine*. https://rive.app/ (accessed 2026-10)
[65] Wikipedia contributors. (n.d.). *Lottie (file format)*. Wikipedia. https://en.wikipedia.org/wiki/Lottie_(file_format) (secondary source; accessed 2026-10)
[66] aneventapart.com (observed 2026-10: domain serving unrelated content, not the conference). https://aneventapart.com/
[67] invisionapp.com (observed 2026-10: https://www.invisionapp.com/inside-design/ruined-by-design returns a 301 redirect to https://miro.com/).
[68] Joshua Davis Studios. (n.d.). *Joshua Davis* (studio site). https://joshuadavis.com/ (accessed 2026-10)
