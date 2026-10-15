# Audience and Culture

> **Scope:** How to adapt design to who the audience is (culture, language, script direction, age, neurotype, literacy, connectivity, business context, expertise), and which popular audience frameworks are weaker than they look.
> **Last verified:** 2026-10 (oldest volatile facts: ITU connectivity figures, Nov 2024; US PIAAC literacy figures, 2024 release; Microsoft globalization docs, 2024–2025)
> **Used by:** ux-researcher, ux-writer, accessibility-specialist, ui-designer, behavioral-psychologist, design-critic, brand-strategist, color-specialist, social-media-designer, print-ooh-designer, editorial-designer

---

## 0. Decision rules (read first)

1. **Research the actual audience. Don't infer it from a country, an age band, or a generation label.** National and generational frameworks describe averages across large populations. They don't describe the person using your product [5][21][22].
2. **Fix the universal problems before you tailor anything.** Legible type, contrast, large targets, plain language, forgiving input, and fast loading help older adults, people with low literacy, neurodivergent users, second-language readers, and people on slow networks all at once [15][16][17][24][30].
3. **Internationalize before you localize.** Externalize strings, use layouts that tolerate text expansion and mirroring, and keep text out of images. Retrofitting any of these costs much more than building them in [13][14].
4. **Treat cultural "dimension" guidelines as hypotheses to test with local users. They are not specifications** [3][4][7].
5. **Grade your claims.** Most statements of the form "Gen Z wants X" or "Asian users prefer dense pages" are [E3] unless someone shows you the study.

---

## 1. Cultural frameworks

### 1.1 Hofstede's cultural dimensions

**What it is.** Hofstede's model scores *national* cultures on six dimensions: Power Distance, Individualism, Masculinity, Uncertainty Avoidance, Long-term Orientation, and Indulgence. The last two came from later studies than the first four. The 0–100 maps for them derive from Michael Minkov's 2007 work, rescaled in the 2010 edition. The Hofstede site itself calls the maps rough "climate maps" of culture and stresses that countries vary considerably inside their borders [1].

**How it entered design.** Marcus and Gould's "Crosscurrents" (*Interactions*, 2000) is the classic application to web UI [2]. Their longer white paper is explicit that these are untested *propositions*: "we believe power distance may influence..." [3]. Their proposals, as hypotheses:

| Dimension | Proposed UI implication (Marcus & Gould [3]) |
|---|---|
| High power distance | Highly structured access to information, tall hierarchies, prominent authority cues (certifications, official logos, leaders), explicit access restrictions |
| Low power distance | Shallow hierarchies, prominence for citizens, customers, and employees, implicit freedom to roam |
| Individualism | Personal achievement, materialism as an image of success, youth and action, what is new and unique, argumentative rhetoric |
| Collectivism | Group achievement, tradition and history, wise or experienced leaders, official slogans and subdued claims |
| High uncertainty avoidance | Simplicity, limited choices, previews of what an action will do, navigation that prevents getting lost, error-reduction help |

**Critique (read before using).**
- **The ecological fallacy.** The dimensions were built from correlations *between nations*. They don't hold the same way *between individuals or organizations*. Brewer and Venaik (2014) show that projecting national scores onto individuals is an ecological fallacy, which they say has been "often overlooked" despite warnings. They also tie it to "erroneous practitioner stereotyping" [5]. **[E1]**
- **Methodological critique.** McSweeney (2002) challenges the assumptions behind the claim to have uncovered entire national cultures. He also questions whether national cultures can plausibly be "systematically causal" [4]. **[E1]** (This is a critique paper. Hofstede published a reply in the same journal, so the debate is ongoing.)
- **The design guidelines are largely untested.** The Marcus and Gould implications are explicitly propositions [3]. **[E3]** for any specific mapping, such as "high-PD users want tall hierarchies."
- **Some evidence that cultural adaptation helps.** Reinecke and Bernstein (2011) built an interface that adapts to cultural preferences. Users were 22% faster with it, needed fewer clicks, made fewer errors, and rated it easier to use than a non-adapted version of the same site [6]. **[E1]**, but it's a single study of one system. It shows that adaptation *can* help. It doesn't validate any particular Hofstede-to-UI rule.

**Apply**
- Use the dimensions only to *generate research questions* for a new market. For example: "Do users here expect visible certifications and authority cues before they trust a checkout?" Then test with local participants.
- Expose structure progressively. That lets one design serve people who want shallow exploration and people who want guided, step-by-step certainty, without choosing between them by country.
- In copy and imagery, check how achievement, groups, and authority are shown. That's where cultural mismatch shows most (an individual hero shot vs. a family or team).

**Limit**
- Never personalize, segment, or price by a user's inferred nationality on the basis of Hofstede scores. That's the ecological fallacy in production, and it risks stereotyping [5].
- Don't cite a country score as a design rationale in a critique. Cite user research.

### 1.2 Hall's high-context and low-context communication

**What it is.** Edward T. Hall proposed that people build meaning by combining culturally preprogrammed context with explicit information. In high-context (HC) communication more of the meaning sits in the context. In low-context (LC) communication more of it is stated explicitly. Over time, researchers attached country rankings to the concept [7].

**Design use.** Würtz (2005) analyzed McDonald's websites from HC and LC cultures in an exploratory study. She identified five strategies by which HC sites use visual communication (imagery, animation, and so on) to carry implicit meaning [8]. **[E3]**: exploratory, qualitative, one brand.

**Critique.** Kittler, Rygl and Mackinnon (2011) systematically reviewed research that used HC/LC country classifications. They found most of it rests on "seemingly less-than-adequate evidence," with mixed and often contradictory findings. They conclude the conventional classifications are "flawed or, at best, very limited" [7]. **[E1]** (systematic review)

**Apply**
- Treat HC/LC as a reminder that some audiences, *and some situations*, need more explicit explanation, while others read more from imagery and relationships. Don't treat it as a country lookup table.
- In any market, state the essentials explicitly: price, commitment, next step, and what happens to data. Imagery and tone can add context but shouldn't carry the only copy of a fact.

**Limit**
- Don't justify vague, image-only communication by calling an audience "high-context." Missing information is an accessibility and trust failure everywhere.

---

## 2. Script direction and RTL layout

Arabic, Hebrew, Persian, and Urdu are written right to left (RTL). An RTL interface is broadly a *mirror* of the LTR one, but not everything flips. Apple and Google agree on the core rules below [9][10]. **[E2]**

| Element | Mirror in RTL? | Source |
|---|---|---|
| Overall layout, reading order, nav and back buttons (back points right), text alignment | Yes | [9][10] |
| Icons showing forward or backward motion or text direction (arrows, a speaker with sound waves, text-alignment icons) | Yes | [9][10] |
| Linear progress: sliders, progress bars, steppers, ordered image sequences | Yes (fill and order follow reading direction) | [9][10] |
| Numerals *within* a number (phone, card, "541") | No, never reverse the digits | [9][10] |
| Numerals that label a progress or counting control | Reverse their *order* along the flipped control, but don't flip the glyphs | [9] |
| Untranslated LTR text inside RTL (URLs, brand names) | No, it stays LTR | [10] |
| Clocks, refresh and history icons (circular time) | No, clocks still run clockwise | [10] |
| Media playback controls and media progress | No (Material: they refer to tape direction, not time) | [10] |
| Real-world objects (keyboard, headset, camera) and right-hand tools (magnifier handle) | No | [9][10] |
| Logos, checkmarks, universal signs | No | [9] |
| Slashes in "off" states | No (most RTL locales don't mirror slashes) | [10] |
| Photographs and artwork | No; if meaning depends on direction, create a new image rather than flipping | [9] |
| Charts and graphs | No (Material guidance) | [10] |

Additional rules:
- **Paragraphs** of three or more lines align to *their own language*, not to the UI direction. Shorter text follows the UI context [9].
- **Numeral systems differ.** Hebrew uses Western Arabic digits. Arabic may use Western or Eastern Arabic digits, which vary by country and even within one [9].
- **Mixing scripts.** Arabic and Hebrew have no uppercase, so they can look small next to uppercase Latin. Apple suggests raising the RTL font size by about 2 points to balance them [9].

**Apply**
- Build layouts with logical properties (start/end, not left/right) so mirroring is automatic. Pseudolocalize to test it [13].
- Flip the meaning, not the picture. For each directional icon, ask whether it shows reading order or time progression (flip it) or a physical object or circular time (don't).
- Print and OOH: in RTL markets the reading path of a poster or spread also starts at the right. Re-compose the hierarchy rather than mirroring the artwork.

---

## 3. Localization pitfalls

### 3.1 Text expansion

The W3C i18n article reproduces IBM's guideline for translating English into European languages. Short strings expand the most [11]. **[E2]**

| English source length (characters) | Typical expansion |
|---|---|
| Up to 10 | 200–300% |
| 11–20 | 180–200% |
| 21–30 | 160–180% |
| 31–50 | 140–160% |
| 51–70 | 151–170% (as printed; it overlaps the row above and is probably a typo in the source) |
| Over 70 | 130% |

- **The common "German is about 30% longer" rule** matches IBM's figure for long text (over 70 characters). It's a rule of thumb, not a language-specific measurement, and it badly underestimates *short* UI labels. Flickr's "views" was 2.8x as long in German, 2.6x in French and Portuguese, 3x in Italian, but 0.8x in Korean [11]. **[E2]**
- **Compound nouns** in German, Finnish, and Dutch create very long single words that won't wrap ("Eingabeverarbeitungsfunktionen") [11].
- **CJK scripts** may use fewer characters but more horizontal space per character. Many non-Latin scripts also need more line height. Thai text took about 150% of the English vertical space in the W3C example [11].

**Apply**
- Never put a label in a fixed-width container that fits only the English string. Let buttons, tabs, and nav items wrap or grow, and design the truncation behavior on purpose [11][14].
- Test with pseudolocalization (padded, accented strings) before translation starts [13][14].
- Avoid text inside images and string concatenation. Both break translation [13].
- Print and OOH: reserve copy space for the longest target language. Approve layouts in the longest language, not in English.

### 3.2 Icons, gestures, symbols, imagery

Microsoft's globalization guidance [12] **[E2]**:
- **Culture-specific metaphors age badly.** The US roadside mailbox for "mail" was replaced by an envelope. Broadly understood symbols now include the magnifying glass (search), gears (settings), and star (favorites).
- **Flags** shouldn't represent languages. Choosing one country for all speakers of a language is exclusionary. Avoid flags and other political symbols where possible.
- **Maps** with political boundaries or disputed names cause offense (East Sea vs. Sea of Japan). Vary them by market if they're unavoidable.
- **Religious symbols** include holiday imagery such as Christmas trees and Easter bunnies.
- **Gestures.** The OK hand is widely recognized, but the thumb-and-index-finger ring has other meanings in many regions. *Avoid gestures and anatomical symbols for concepts.*
- **Skin tone.** Any emoji skin-tone choice, including default yellow, implies a race-based decision. Outline figures avoid it.
- **Stock photos** of people, products, and places may need replacing per market.

Country-by-country lists of "offensive gestures" (for example, thumbs-up in parts of the Middle East) circulate widely in travel and etiquette articles. This pass found no authoritative design source that documents them. **[unverified]** Follow the general rule (no gestures as icons) and check specifics with local reviewers.

**Color.** Color meanings are culturally variable. Microsoft notes that blue signals virtue and protection in some cultures and mourning in others [12]. See `color-psychology.md` for the evidence on color meaning.

### 3.3 Formats and conventions

Respect locale settings for numbers, currency, dates and times, sort order, capitalization, name order, address and phone formats, paper sizes, and units. Store time as UTC and data in Unicode [13]. **[E2]**

**Apply (localization checklist)**
- [ ] Strings externalized, no concatenation, no text in images [13]
- [ ] Layout survives 200–300% growth on short labels and about 130% on body text [11]
- [ ] RTL mirroring follows the table in Section 2 [9][10]
- [ ] Icons free of gestures, flags-as-languages, local-only metaphors, and religious imagery [12]
- [ ] Locale formats come from the platform, not hard-coded [13]
- [ ] Imagery and color reviewed by someone from the target market

---

## 4. Age

### 4.1 Older adults (65+)

**Evidence** (NN/g testing: 123 participants aged 65+ in three rounds, 2001–2019, in the US, Canada, Australia, Germany, and Japan [16]) **[E2]**:

| Metric (2013 study [15]) | Seniors 65+ | Ages 21–55 |
|---|---|---|
| Task success | 55.3% | 74.5% |
| Time on task | 7:49 | 5:28 |
| Errors per task | 2.4 | 1.1 |
| Vision score (100% = no problems) | 82% | 95% |
| Dexterity score | 73% | 95% |
| Memory (share of early-session items recalled at the end) | 49% | 63% |

- Website-use ability declines about **0.8% per year between ages 25 and 60**, so aging effects start well before 65 [15][16].
- The 2018–19 round found persistent problems: small, light text (especially on mobile), targets too small to tap, obscure error messages, and inputs that accepted only one format. Older users tend to **blame themselves** for errors [16].
- Things are changing. Older adults are more digitally literate than in 2001, and use ad blockers, skip sponsored results, and delete data-hungry accounts. In 2019, 73% of US adults over 65 were online (Pew, cited by NN/g) [16].
- W3C lists age-related changes: lower contrast sensitivity and color perception, near-focus difficulty, reduced dexterity and fine motor control, high-frequency hearing loss, reduced short-term memory, and greater distractibility. **Designing for older users largely overlaps with WCAG** [17]. **[E2]**

**Apply**
- Use body text at a comfortable size with high contrast. Avoid light gray text. Make targets large: WCAG 2.2 SC 2.5.8 requires at least 24x24 CSS px at level AA, and the guidance recommends aiming higher for important controls [18].
- Write errors that "focus on the error, explain it clearly, and make it as easy as possible to fix" [16]. Accept multiple input formats (phone numbers with or without hyphens).
- Don't rely on memory across steps. Show what's needed where it's needed.
- Print and OOH: larger type, high contrast, and fewer elements. Reading distance and glare make age-related vision changes worse.

**Limit**
- Don't design a patronizing "senior mode." The 2019 NN/g findings show competent, skeptical users. Fix the design for everyone instead [16].

### 4.2 Children (3–12)

Findings from 125 children across three NN/g studies (2001, 2010, 2018) [19] **[E2]**:
- "There's no such thing as 'designing for children'" across ages 3–12. Design for narrow bands, at least 3–5, 6–8, and 9–12. Children reject content they see as made for younger kids.
- Children **can't reliably tell ads from content**.
- Young children avoid scrolling. Older ones scroll if the design signals there's more.
- Use large, simple actions. Until about age 9, children preferred touchscreens and trackpads to mouse and keyboard.
- Reading ranges from none (the youngest), to tentative, to scanning (older children). NN/g suggests about 14 pt type for young children and 12 pt for older ones. Children skip long instructions.
- They expect interactivity, sound, and animation, and find redundant or multiple navigation confusing. Keep parent-facing links in low-traffic areas such as footers.

**Apply:** choose one age band per surface, use big targets and minimal text, and mark ads and paid content unmistakably.
**Limit:** because children can't separate ads from content, any persuasive pattern aimed at them, such as disguised ads or reward loops tied to purchases, is an ethical red line. See `dark-patterns-and-ethics.md`.

### 4.3 Teenagers (13–17)

From 100 teens, 210 websites, and 30 apps in the US, UK, and Australia [20] **[E2]**:
- Teens perform worse than adults because of weaker reading skills, less developed research strategies, and much lower patience. They are **overconfident** and "not technowizards."
- NN/g recommends writing at a **6th-grade reading level or lower** for teens, in short chunks.
- Teens **reject anything childish**. The label "Kids" repels them, so separate "Kids" and "Teens" sections.
- Interactive features where teens *do* something (quizzes, feedback, creating content) work. Pointless multimedia doesn't.
- They want control over what they share and how. A "Copy link" option lets them share anywhere.
- Slow sites are a deal-breaker, and many teens are phone-first, so hover effects, small targets, and fiddly dropdowns fail.
- When they fail, they blame the site, not themselves.

**Apply:** use the polish of adult e-commerce, plain short copy, fast pages, touch-first controls, and no condescension.

---

## 5. Generations and aesthetics

**Strongest evidence available.** Reinecke and Gajos (CHI 2014) collected about 2.4M ratings from about 40,000 LabintheWild volunteers aged 12–91 on 430 website screenshots shown for 500 ms [21]. **[E1]**
- Overall, appeal peaks at *moderate* visual complexity and *medium-to-high* colorfulness.
- **Age.** Participants under 20 and over 51 peaked at higher colorfulness (6.5 of 9) than those aged 31–40 (5.6). Preferred complexity rose with age: about 4.1–4.2 of 10 for ages 12–40, 4.5 for ages 41–50, and 4.7 for those over 50. Sites preferred by under-20s used saturated color and large images. Sites preferred by older participants were more text-heavy and complex, with less saturated color.
- **Education** correlated negatively with preference for colorful and complex sites. **Gender:** women rated colorful sites higher than men did. **Country:** Finland and Russia preferred the lowest complexity and colorfulness, Macedonia the most colorful, and Northern European countries less colorfulness than Southern European and most Asian countries in the sample.
- **Caveats from the paper itself.** Demographic and design fixed effects explained a small share of variance (marginal R² = .07, against conditional R² = .47 including individual and website effects). Individual taste varies far more than group averages. The authors call the older-users-prefer-complexity finding possibly a *cohort* effect (familiarity with "web 1.0" designs) and say they can't establish causes [21].

**Why generational labels are weak.** In 2023 Pew Research Center said it would use generational labels more sparingly. Its reasons: age effects are easily confused with generation effects, period effects and demographic change can mimic generational gaps, 15–18-year spans hide "great diversity," and labels risk "reinforcing harmful stereotypes" [22]. **[E2]**

**Popular claims to downgrade:**
- "Gen Z (or everyone) has an 8-second attention span, shorter than a goldfish." **[E3]: unsupported.** The figure came from a 2015 Microsoft Canada report that cited "Statistic Brain." The listed sources couldn't find any research behind it, and attention researchers say an "average attention span" is task-dependent and not a meaningful quantity [23].
- "Millennials like X aesthetic; Boomers need Y." **[E3]** unless it's backed by research on *your* users. Age effects such as vision and dexterity (Section 4.1) are real. Taste by birth cohort is mostly marketing segmentation.

**Apply**
- Design for life-stage and capability factors (vision, motor, reading, context of use), which have evidence. Treat aesthetic "generation" claims as mood-board input, then test.
- For social and brand work aimed at a youth audience, validate visual direction with the actual audience rather than generational trend reports.

---

## 6. Neurodiversity and cognitive accessibility

### 6.1 UK Home Office "Dos and don'ts" posters

Created in 2016 by the Home Office Digital accessibility team. The blog post introducing them was written by Karwai Pun. The original six posters covered low vision, D/deaf and hard of hearing, dyslexia, motor disabilities, autism, and screen reader users. An **anxiety** poster was added later. They're published under a non-commercial Creative Commons license [24][25]. The authors call them **general guidance, not rules**: needs can conflict, so test with users. Their own example is that bright contrast suits some low-vision users but not some autistic users [24]. **[E2]**

| Audience | Do (selected, from [25]) | Don't |
|---|---|---|
| Autism | Simple colors; plain English; simple sentences and bullets; descriptive buttons; simple, consistent layouts | Bright contrasting colors; figures of speech and idioms; walls of text; vague buttons; cluttered layouts |
| Dyslexia | Images and diagrams that support text; left-aligned text and consistent layout; other formats (audio, video); short, simple content | Large blocks of heavy text; underlining, italics, all caps; forcing users to remember things from earlier pages; relying on accurate spelling |
| Anxiety | Generous time limits; explain what happens next and how long it takes; make consequences clear; easy-to-reach support; let users check answers before submitting | Rushing users; leaving next steps or consequences unclear; hiding help |
| Low vision | Good contrast and readable font size; publish information as HTML pages; combine color, shape, and text; linear, logical layout | Low contrast and small text; information buried in downloads; color as the only signal; content scattered across the page |
| Motor | Large clickable actions; space between form fields; keyboard and speech operability; design for touch; shortcuts | Demanding precision; bunched interactions; heavy mouse dependence; short timeouts; lots of typing and scrolling |
| Deaf / hard of hearing | Plain English (BSL users may have English as a second language); subtitles and transcripts; linear layout; headings and visuals | Audio-only or video-only content; complex layouts; long text blocks |
| Screen readers | Alt text and transcripts; linear logical order; HTML structure | Information only in images; relying on visual size or position for structure |

### 6.2 ADHD and attention

There's little ADHD-specific design research. Use W3C's **"Making Content Usable for People with Cognitive and Learning Disabilities"** (COGA, W3C Working Group Note, 29 April 2021). It's supplemental guidance and *not* required for WCAG conformance [26]. **[E2]** It lists AD(H)D among neurodiverse conditions, includes a persona with AD(H)D (easily distracted, losing focus, carousels, video), and organizes guidance under eight objectives [26]:

1. Help users understand what things are and how to use them
2. Help users find what they need
3. Use clear and understandable content
4. Help users avoid mistakes and know how to correct them
5. **Help users focus** (limit interruptions, ads, autoplay, and moving content)
6. **Ensure processes do not rely on memory**
7. Provide help and support
8. Support adaptation and personalization

### 6.3 Dyslexia fonts

Specialized "dyslexia fonts" don't measurably help. OpenDyslexic showed no improvement in reading rate or accuracy for elementary students with dyslexia [27]. Dyslexie produced no faster or more accurate reading in children with dyslexia (n = 170, and a second experiment with n = 102 plus 45 controls), and most children preferred Arial or Times New Roman [28]. **[E1]**

**Apply**
- Rely on layout and language, not special fonts: short chunks, clear headings, left-aligned text, no all-caps or italic body text, consistent placement, generous timeouts, reviewable answers, and spelling-tolerant search and inputs [25][26].
- Give users control: a reduced-motion option, the ability to pause or stop moving content, and support for text resizing and user styles.
- When needs conflict (contrast for low vision vs. sensory sensitivity), prefer user-adjustable settings over one fixed compromise [24].

**Limit**
- Don't present a "dyslexia-friendly font" as an accessibility solution [27][28].
- Don't diagnose or label users in the UI. Design inclusively by default.

---

## 7. Literacy levels

- **Scale of the issue.** In the 2023 US PIAAC survey, **28% of US adults aged 16–65 performed at Level 1 or below in literacy**, up from 19% in 2017 [29]. **[E1]** (national survey; NCES notes relatively low response rates in the US and several other countries)
- **How lower-literacy users read.** They read word by word ("plow" the text), don't scan, miss content outside the main column, and settle for the first plausible option [30]. **[E2]**
- **Rewriting helps everyone.** In Nielsen's 2005 case study, a pharmaceutical site rewritten for lower-literacy users raised lower-literacy task success from 46% to 82%. Higher-literacy users also improved, from 68% to 93% [30]. **[E2]** (single practitioner case study, 50 users)
- **Targets.** NN/g recommends about an 8th-grade level for general consumer audiences, with a mature tone. For educated B2B audiences, write several grades below their formal education, often 12th grade for graduates [31]. For lower-literacy audiences, aim for about 6th grade on the home page and key pages [30]. WCAG 2.2 SC 3.1.5 (level AAA) asks for supplemental content when text needs more than *lower secondary* reading ability, meaning about 7–9 years of school [32]. **[E2]**
- Readability formulas such as Flesch-Kincaid and Fry measure word and sentence length, so they only approximate comprehension. Validate with users, for example with a Cloze test [31].

**Apply**
- Put the main point first, use one column, linear navigation, and no moving or changing text. Make search typo-tolerant [30].
- Pair key instructions with icons or illustrations, but never let an icon be the only carrier of meaning.
- Social posts, print, and OOH: one idea, short words, and a single clear call to action. Billboards and posts are read in seconds by every literacy level at once.

---

## 8. Low bandwidth, low-end devices, emerging markets

**Context (ITU, Facts and Figures 2024)** [33][34]:
- 68% of the world's population was online in 2024. About **2.6 billion people were offline**.
- Internet use was 93% in high-income countries vs. **27% in low-income countries**.
- People in low-income economies pay about **19 times** as much of their income for a mobile broadband basket as people in high-income economies. The UN Broadband Commission's affordability target is broadband costing under 2% of monthly GNI per capita.

**Practice** **[E2]**:
- **Simulate the constraint internally.** In 2015 Facebook launched "2G Tuesdays": employees got an opt-in prompt on Tuesdays to simulate a 2G connection, so they experienced slow loads first-hand [35].
- **Ship a lite product where needed.** Facebook Lite (June 2015) was under 1 MB, "uses less data and works well across all network conditions," and rolled out first in Asia [36].
- **Design offline-first.** Service-worker caching patterns include cache-first ("building offline-first"), network-falling-back-to-cache, and stale-while-revalidate [37].
- **Set performance budgets.** An example baseline from web.dev: interactive in under 5 s on slow 3G on a low-end reference phone, and under about 170 KB of compressed critical-path resources [38].

**Apply**
- Treat data cost as a user cost. Lazy-load heavy media, compress images, avoid autoplay video, and show file sizes before downloads.
- Design explicit offline, empty, and retry states. Keep user input safe when the connection drops.
- Test on a low-end Android device on a throttled network, not on a designer's laptop.
- Social and video: provide a legible still or first frame and captions, since many viewers watch with data saver on or sound off.

**Limit**
- A "lite" version must not become a second-class product that drops privacy controls, accessibility, or core features.

---

## 9. B2B vs. B2C

NN/g (Laubheimer, 2016) [39] **[E2]**:

| Dimension | B2B | B2C |
|---|---|---|
| Decision | Long, researched, rarely impulsive, several people involved | Often individual and fast |
| Audiences | "Choosers" (cost, ROI) vs. "users" (specs, daily use); many sites over-serve choosers | Buyer and user are usually the same person |
| Must-have content | Integration, compatibility, and compliance details (their absence is "a major pain point") | Product benefits, reviews, delivery, returns |
| Pricing | Often customized, but buyers are "just as price conscious"; show prices or representative scenarios | Transparent price expected |
| Segmentation | Audience-based navigation backfires when segments are unclear or overlap; prefer filters and facets | Category and need-based navigation |

**Apply**
- B2B sites: support every stage of a long evaluation, with shareable specs, comparison tables, security and compliance pages, and pricing scenarios. Give end users content too, not only executives.
- B2B products are used all day by the same people. Weight efficiency for experts (Section 10) more heavily than first-visit delight.
- B2C: optimize first-use clarity, trust signals, and checkout. The emotional and visual layer matters more to the first impression.

---

## 10. Experts vs. novices

- **Most web users stay non-experts on any single site**, because they spend most of their time elsewhere. Learnability stays the primary goal, but expert efficiency matters more for daily-use and mission-critical tools [40]. **[E2]**
- **Progressive disclosure** shows the few most important options first and defers advanced ones. It helps novices make fewer errors and saves experts time. Two levels usually work best, and three or more tend to get users lost [41]. **[E2]**
- **Accelerators** (keyboard shortcuts, gestures, voice commands) are "additional, alternate ways" to do frequent tasks. Keep the standard path intact, make them discoverable without requiring them, stay consistent across platforms, and don't override common shortcuts [42]. **[E2]**
- **Expertise reversal effect.** Instructional techniques that help inexperienced learners "can lose their effectiveness and even have negative consequences" for more experienced ones [43]. **[E1]** (reviewed across many instructional techniques; most evidence comes from instructional settings, so carrying it over to UI onboarding is an inference.)

**Apply**
- Onboarding: offer tours, coach marks, and verbose help to newcomers, but make them skippable and fade them as competence grows. Persistent hand-holding slows experts [43].
- Expose shortcuts at the moment of use (tooltips, menu hints) [42].
- Dense data views: offer a compact "pro" density and saved views, with sensible defaults for newcomers.

---

## Sources

[1] Hofstede, G., & Hofstede, G. J. (n.d.). *6-D model of national culture*. geerthofstede.com. https://geerthofstede.com/culture-geert-hofstede-gert-jan-hofstede/6d-model-of-national-culture/

[2] Marcus, A., & Gould, E. W. (2000). Crosscurrents: Cultural dimensions and global Web user-interface design. *Interactions*, 7(4), 32–46. https://doi.org/10.1145/345190.345238 (bibliographic record verified via Crossref; ACM full text not accessible in this pass, see [3])

[3] Marcus, A., & Gould, E. W. (2000; © 2001 AM+A). *Cultural Dimensions and Global Web Design: What? So What? Now What?* Aaron Marcus and Associates white paper (extended version of [2]). Read via Internet Archive copy of http://www.amanda.com/resources/hfweb2000/AMA_CultDim.pdf — https://web.archive.org/web/20041106135627/http://www.amanda.com:80/resources/hfweb2000/AMA_CultDim.pdf

[4] McSweeney, B. (2002). Hofstede's model of national cultural differences and their consequences: A triumph of faith — a failure of analysis. *Human Relations*, 55(1), 89–118. https://doi.org/10.1177/0018726702551004

[5] Brewer, P., & Venaik, S. (2014). The ecological fallacy in national culture research. *Organization Studies*, 35(7), 1063–1086. https://doi.org/10.1177/0170840613517602

[6] Reinecke, K., & Bernstein, A. (2011). Improving performance, perceived usability, and aesthetics with culturally adaptive user interfaces. *ACM Transactions on Computer-Human Interaction*, 18(2), 1–29. https://doi.org/10.1145/1970378.1970382

[7] Kittler, M. G., Rygl, D., & Mackinnon, A. (2011). Beyond culture or beyond control? Reviewing the use of Hall's high-/low-context concept. *International Journal of Cross Cultural Management*, 11(1), 63–82. https://doi.org/10.1177/1470595811398797 (record: https://dspace.stir.ac.uk/handle/1893/3174)

[8] Würtz, E. (2005). Intercultural communication on Web sites: A cross-cultural analysis of Web sites from high-context cultures and low-context cultures. *Journal of Computer-Mediated Communication*, 11(1), 274–299. https://doi.org/10.1111/j.1083-6101.2006.tb00313.x (abstract only)

[9] Apple. (n.d.). *Right to left*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/right-to-left

[10] Google. (2018). *Bidirectionality*. Material Design. https://m2.material.io/design/usability/bidirectionality.html (live page requires JavaScript; content read from the 31 Oct 2018 Internet Archive snapshot of https://material.io/design/usability/bidirectionality.html)

[11] W3C Internationalization. (n.d.). *Text size in translation*. https://www.w3.org/International/articles/article-text-size (IBM expansion table reproduced there; secondary source for IBM)

[12] Microsoft. (2024, updated 2025). *Images, icons, and colors*. Microsoft Learn — Globalization. https://learn.microsoft.com/en-us/globalization/fonts-layout/images-icons-colors

[13] Microsoft. (2024). *Software internationalization*. Microsoft Learn — Globalization. https://learn.microsoft.com/en-us/globalization/methodology/software-internationalization

[14] Microsoft. (2024). *Responsive user interface*. Microsoft Learn — Globalization. https://learn.microsoft.com/en-us/globalization/fonts-layout/adaptive-ui

[15] Nielsen, J. (2013, May 28). *Usability for senior citizens: Improved, but still lacking*. Nielsen Norman Group. https://www.nngroup.com/articles/usability-seniors-improvements/

[16] Kane, L. (2019, September 8). *Usability for older adults: Challenges and changes*. Nielsen Norman Group. https://www.nngroup.com/articles/usability-for-senior-citizens/

[17] W3C WAI. (2025, updated). *Older users and web accessibility: Meeting the needs of ageing web users*. https://www.w3.org/WAI/older-users/

[18] W3C. (2023). *Understanding Success Criterion 2.5.8: Target Size (Minimum)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html

[19] Sherwin, K., & Nielsen, J. (2019, January 13). *Children's UX: Usability issues in designing for young people*. Nielsen Norman Group. https://www.nngroup.com/articles/childrens-websites-usability-issues/

[20] Kendrick, A., & Nielsen, J. (2019, March 17). *Teenager's UX: Designing for teens*. Nielsen Norman Group. https://www.nngroup.com/articles/usability-of-websites-for-teenagers/

[21] Reinecke, K., & Gajos, K. Z. (2014). Quantifying visual preferences around the world. *Proceedings of CHI 2014*, 11–20. https://doi.org/10.1145/2556288.2557052 (PDF: https://iis.seas.harvard.edu/papers/reinecke14visual.pdf)

[22] Parker, K. (2023, May 22). *How Pew Research Center will report on generations moving forward*. Pew Research Center. https://www.pewresearch.org/short-reads/2023/05/22/how-pew-research-center-will-report-on-generations-moving-forward/

[23] Maybin, S. (2017, March 10). *Busting the attention span myth*. BBC News. https://www.bbc.co.uk/news/health-38896790

[24] Pun, K. (2016, September 2). *Dos and don'ts on designing for accessibility*. GOV.UK Accessibility in government blog. https://accessibility.blog.gov.uk/2016/09/02/dos-and-donts-on-designing-for-accessibility/

[25] UK Home Office. (n.d.). *Accessibility posters* (anxiety, autism, deaf or hard of hearing, dyslexia, low vision, physical or motor disabilities, screenreaders). https://ukhomeoffice.github.io/accessibility-posters/

[26] W3C. (2021, April 29). *Making content usable for people with cognitive and learning disabilities*. W3C Working Group Note. https://www.w3.org/TR/coga-usable/

[27] Wery, J. J., & Diliberto, J. A. (2017). The effect of a specialized dyslexia font, OpenDyslexic, on reading rate and accuracy. *Annals of Dyslexia*, 67(2), 114–127. https://doi.org/10.1007/s11881-016-0127-1

[28] Kuster, S. M., van Weerdenburg, M., Gompel, M., & Bosman, A. M. T. (2018). Dyslexie font does not benefit reading in children with or without dyslexia. *Annals of Dyslexia*, 68(1), 25–42. https://doi.org/10.1007/s11881-017-0154-6

[29] National Center for Education Statistics. (2024). *Highlights of the 2023 U.S. PIAAC results* (NCES 2024-202). https://nces.ed.gov/surveys/piaac/2023/national_results.asp

[30] Nielsen, J. (2005, March 13). *Lower-literacy users: Writing for a broad consumer audience*. Nielsen Norman Group. https://www.nngroup.com/articles/writing-for-lower-literacy-users/

[31] Nielsen, J. (2015, November 15). *Legibility, readability, and comprehension: Making users read your words*. Nielsen Norman Group. https://www.nngroup.com/articles/legibility-readability-comprehension/

[32] W3C. (2023). *Understanding Success Criterion 3.1.5: Reading Level*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/reading-level.html

[33] ITU. (2024, November). *Facts and Figures 2024: Internet use*. https://www.itu.int/itu-d/reports/statistics/2024/11/10/ff24-internet-use/

[34] ITU. (2024, November). *Facts and Figures 2024: Affordability of ICT services*. https://www.itu.int/itu-d/reports/statistics/2024/11/10/ff24-affordability-of-ict-services/

[35] Marra, C. (2015, October 27). *Building for emerging markets: The story behind 2G Tuesdays*. Engineering at Meta. https://engineering.fb.com/2015/10/27/networking-traffic/building-for-emerging-markets-the-story-behind-2g-tuesdays/

[36] Facebook. (2015, June 4). *Announcing Facebook Lite*. Meta Newsroom. https://about.fb.com/news/2015/06/announcing-facebook-lite/

[37] Archibald, J. (n.d.). *Common techniques to build offline applications* (The offline cookbook). web.dev. https://web.dev/articles/offline-cookbook

[38] Mihajlija, M. (2018, November 5). *Performance budgets 101*. web.dev. https://web.dev/articles/performance-budgets-101

[39] Laubheimer, P. (2016, May 29). *B2B vs. B2C websites: Key UX differences*. Nielsen Norman Group. https://www.nngroup.com/articles/b2b-vs-b2c/

[40] Nielsen, J. (2000, February 5). *Novice vs. expert users*. Nielsen Norman Group. https://www.nngroup.com/articles/novice-vs-expert-users/

[41] Nielsen, J. (2006, December 3). *Progressive disclosure*. Nielsen Norman Group. https://www.nngroup.com/articles/progressive-disclosure/

[42] Krause, R., & Harley, A. (2024, October 18). *Accelerators maximize efficiency in user interfaces*. Nielsen Norman Group. https://www.nngroup.com/articles/ui-accelerators/

[43] Kalyuga, S., Ayres, P., Chandler, P., & Sweller, J. (2003). The expertise reversal effect. *Educational Psychologist*, 38(1), 23–31. https://doi.org/10.1207/S15326985EP3801_4
