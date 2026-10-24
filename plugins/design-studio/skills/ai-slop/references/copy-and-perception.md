# Copy and Perception: What AI Slop Is, How It Reads, What It Costs

> **Scope:** What "AI slop" means and why generated work converges, the copy tells that make a design read as machine-made (headlines, hero copy, CTAs, microcopy, captions, proof), and the evidence on how audiences react to work that looks or is labeled AI-made.
> **Last verified:** 2026-10 (word-of-the-year selections, Wikipedia field guide, surveys, and all research sources were opened in the same pass)
> **Used by:** creative-director, design-critic, ui-designer, social-media-designer, art-director

## How to read this file

- **Grades** follow the knowledge standard: **[E1]** peer-reviewed or replicated, **[E2]** practitioner consensus, authoritative field guide, or industry survey, **[E3]** weak, contested, or anecdotal. Preprints are named as preprints; treat them as [E2] until published.
- **Copy tells are signals, not proof.** Wikipedia's own field guide says its list is "descriptive, not prescriptive" and that "Not all text featuring these indicators is AI-generated" [4]. Humans wrote "Unlock the power of" long before 2022. The design question is not "was this made by AI?" but "does this read as generic, unreviewed, and interchangeable?" That is what audiences punish.
- **Density beats any single word.** One "seamless" is noise. Three tells in one hero is a pattern. Wikipedia makes the same point about vocabulary: a single word is usually coincidental, many in one passage is a strong signal [4].
- **Slop is a moving target.** Tells shift with each model generation (Section 1.5). Do not ship a banned-word list and call the work done. Test for specificity.

---

## 1. What "AI slop" is and why generated work converges

### 1.1 Origin and spread of the term

| Date | Event | Source |
|---|---|---|
| 2024-05-08 | Simon Willison's post "Slop is the new name for unwanted AI-generated content" popularizes the term, crediting a tweet by @deepfates. His working definition: "if it's mindlessly generated and thrust upon someone who didn't ask for it, slop is the perfect term for it." He frames "don't publish slop" as baseline AI ethics: sharing unreviewed generated content is rude to the reader. | [1] |
| 2025-11-24 | Macquarie Dictionary (Australia) names **"AI slop"** its 2025 Word of the Year (committee pick and People's Choice). Definition: low-quality content created by generative AI, often containing errors, and not requested by the user. Committee: "We understand now in 2025 what we mean by slop — AI generated slop, which lacks meaningful content or use." | [3] |
| 2025-12 | Merriam-Webster names **"slop"** its 2025 Word of the Year, defined as "digital content of low quality that is produced usually in quantity by means of artificial intelligence," noting that slop "set a tone that's less fearful, more mocking." (Merriam-Webster's page blocked fetching; verified through Euronews coverage.) Other 2025 picks for comparison: Oxford "rage bait", Cambridge "parasocial", Collins "vibe coding". | [2] |

**Reading for designers:** by the end of 2025 two major dictionaries had codified the idea, and the tone was mockery, not fear. Looking like slop is now a recognized, nameable failure that audiences joke about in public, as the Coca-Cola 2024 holiday ad showed (Section 3.6).

### 1.2 Working definition for design

**AI slop (design):** output whose form and words could belong to any brand, product, or audience, because they came from a default rather than a decision. Three conditions, any two of which are enough:

1. **Generic:** the copy or image would survive unchanged if you swapped the product name. ("Elevate your workflow" fits a CRM, a kettle, and a yoga app.)
2. **Unreviewed:** errors, placeholder residue, invented facts, or chatbot voice left in ("Certainly! Here's your hero section").
3. **Unasked-for volume:** more words, sections, features, or variants than the reader needs, because generation was cheap.

The definition does not depend on provenance. Human work can be slop by this test, and AI-assisted work can pass it.

### 1.3 Why generated work converges

| Mechanism | What it does to output | Evidence | Grade |
|---|---|---|---|
| **Training on the average of the web** | A language model predicts likely continuations. Asked for a SaaS hero, the most likely hero is the one written most often: marketing clichés are high-probability by definition. | Follows from how next-token prediction works; LLM-specific phrases appear in generated text at rates more than 1,000 times human baselines for some patterns [14]. | E2 (preprint for the quantification) |
| **Preference tuning narrows diversity (mode collapse)** | RLHF and similar alignment steps trade variety for answers raters like. | RLHF "significantly reduces output diversity compared to SFT across a variety of measures" [5]. | E2 (preprint) |
| **Typicality bias in the preference data** | Human raters favor familiar-sounding text, so the reward signal itself pushes toward the typical. Asking the model for several answers with probabilities restored 1.6 to 2.1 times more diversity in creative writing. | Zhang et al., formalized and checked on preference datasets [6]. | E2 (preprint) |
| **Lexical over-representation from tuning** | Words like "delve" are over-used, and the pattern is consistent with RLHF rather than architecture or training data. | Juzek and Ward, COLING 2025; evidence "suggestive rather than conclusive" for RLHF [7]. | E1 (peer-reviewed, single study, tentative) |
| **Models converge with each other, not only with themselves** | Switching from one chatbot to another does not escape the sameness. LLM responses "are much more similar to other LLM responses than human responses are to each other." | Wenger and Kenett, standardized creativity tests [12]. | E2 (preprint) |
| **Defaults in tools and templates** | Default fonts, gradient presets, component libraries, and starter templates produce the same page before any model is involved. Web layouts grew measurably more similar as shared libraries spread (layout differences fell over 30% between 2010 and 2016 in one analysis). | Goree et al., Indiana University [13] (secondary summary). | E2 |

**Apply:** treat every first generation as the statistical center of the category. That is the starting point to move away from, not the deliverable. Ask for many options, discard the first, and inject facts the model cannot know (customer quotes, numbers, names, places, the product's actual mechanism).

### 1.4 Homogenization: individual gain, collective sameness

| Study | Design and sample | Finding | Grade and caveat |
|---|---|---|---|
| Doshi and Hauser, *Science Advances*, 2024 [9] | Online experiment: 293 writers wrote short stories with no AI, one GPT-4 idea, or five ideas; 600 evaluators made 3,519 ratings. | Five AI ideas raised rated novelty 8.1% and usefulness 9.0%; for the least creative writers, novelty rose up to 10.7% and "well written" up to 26.6%. But AI-assisted stories were **more similar to each other**, and moved closer to the AI idea they were given. The authors frame it as a social dilemma: each writer gains, the pool narrows. | E1. Single study, short-story task; the convergent pattern below supports it. |
| Anderson, Shah and Kreminski, C&C 2024 [10] | 36 participants generated ideas with ChatGPT vs. another creativity tool. | ChatGPT users produced more and more detailed ideas, but different users' ideas were **less semantically distinct**, and users "felt less responsible" for their ideas. | E1 (peer-reviewed), small sample. |
| Zhou and Lee, *PNAS Nexus*, 2024 [11] | Over 4 million artworks from 50,000+ users on an art-sharing platform; ~5,800 text-to-image adopters, difference-in-differences. | Adopters' output rose about 25%; favorites per view rose about 50%. **Average visual novelty and peak visual novelty both declined** as adopters converged on preferred styles. Adopters who explored novel *subject matter* earned better peer ratings. | E1 (observational, strong design). |
| Wenger and Kenett, 2025 [12] | Standardized creativity tests across humans and many LLMs. | Cross-model homogeneity persists after controls. | E2 (preprint). |

**Reading:** AI help makes a single piece better on average and makes the market of pieces more alike [E1]. For a brand, being "better than average and like everyone else" is a loss: distinctiveness is the asset. Zhou and Lee's data point the way out: novelty in *what* you say beats polish in *how* it looks.

### 1.5 Slop moves: tells have eras

Wikipedia's field guide tracks how tells change by model generation [4]:

- **Vocabulary by era.** 2023 to mid-2024 (GPT-4 era): "delve", "tapestry", "testament", "intricate", "pivotal", "vibrant", "boasts". Mid-2024 to mid-2025: "align with", "enhance", "fostering", "highlighting", "showcasing". The page notes "delve" peaked in 2023 and early 2024 and dropped sharply in 2025, and lists a new set for mid-2026 onward ("leverage", "multifaceted", "prioritize", "quietly", "steady", "dependable", "practical").
- **Em dashes became a historical indicator.** The page now files em-dash overuse under historical indicators (2022 to September 2026): vendors suppressed it, and newer models are often "hard coded to not use em dashes at all", which creates a new tell of short sentences and extra periods and commas. (The page cites a July 2026 study for the claim that only Claude still used more em dashes than professional writers; that study was not opened in this pass [unverified].)
- **Emoji decoration** before headings and bullets is "more rare now" but still appears [4].
- **Excess words are style words, not content words.** In 15 million PubMed abstracts, at least 13.5% of 2024 abstracts were LLM-processed (up to 40% in some subcorpora). The 2024 excess vocabulary was "almost entirely" style words, 66% verbs and 14% adjectives, led by "delves" (28 times expected frequency), "underscores" (13.8x) and "showcasing" (10.7x) [8]. Covid-era excess words, by contrast, were content words like "remdesivir".
- **Generated text is already everywhere in commercial writing.** By late 2024, an estimated up to 24% of corporate press-release text and about 18% of financial consumer-complaint text were LLM-assisted [15] (preprint).

**Apply:** judge copy by the substitution test (Section 4), not by a word blacklist. Style words that carry no content (verbs like "elevate", "empower", "unlock"; adjectives like "seamless", "robust", "intuitive") are the durable signal across eras because they are what tuning rewards [7][8].

**Limit:** do not accuse a person or client of using AI from these signals. Wikipedia warns that false accusations drive away contributors and that human ability to spot AI text is near chance [4]. Critique the copy, not the author.

---

## 2. Copy tells inside designs

Grades in this section: tells taken from the Wikipedia field guide are [E2] (authoritative field observation, not a controlled study). Tells grounded in measured word frequency are marked [E1]. Marketing-specific tells with no measurement behind them are [E2] or [E3] as noted. None of these tells has been tested for conversion impact on landing pages; the perception evidence is in Section 3.

### 2.1 Headline and hero copy

| Tell | Why it reads as AI | Do instead (before / after) | When acceptable |
|---|---|---|---|
| **"Unlock the power of X" / "Unleash"** | Empty transformation verb plus abstraction; fits any product. Promotional, ad-like phrasing is a core Wikipedia sign [4]. [E2] | Before: "Unlock the power of your data." After: "See which customers are about to cancel, two weeks early." | Almost never in a hero. A game or fantasy brand using "unlock" literally (unlock a level). |
| **"Elevate your [noun]"** | Status verb with no mechanism; one of the most copied SaaS and lifestyle openers. [E2] | Before: "Elevate your morning routine." After: "Cold brew in 4 minutes, no overnight soak." | Hospitality or fashion copy where "elevated" names a real tier, and only once. |
| **"Supercharge" / "Revolutionize" / "Transform" / "Reimagine"** | Claims a size of change without stating it. Readers cannot check it. [E2] | Before: "Revolutionize how your team collaborates." After: "Comments, files, and approvals in one thread, so nobody asks 'which version?'" | When you can show the before-and-after number in the same line. |
| **"Seamless", "effortless(ly)", "intuitive", "robust", "powerful"** | Style adjectives that carry no content; the excess-vocabulary research shows tuned models over-use adjectives and verbs of this kind [8]. [E1 for the pattern, E2 for these words in marketing] | Before: "Seamless, effortless onboarding." After: "Import from Trello in one click. Your boards keep their labels." | "Seamless" for a literal physical seam (clothing, flooring). "Powerful" when followed by the spec that proves it. |
| **"In today's fast-paced world" / "In an ever-evolving landscape"** | Throat-clearing opener that delays the point; "landscape" is a listed AI-vocabulary word [4]. [E2] | Before: "In today's fast-paced world, staying organized is harder than ever." After: "You have 47 open tabs. We count them so you don't have to." | Never as an opener. Cut it. |
| **"Not just X, it's Y" / "More than a [category]"** | Negative parallelism, which Wikipedia calls "stereotypically an 'AI sign'" in three forms: not just X but also Y, not X but Y, Y rather than X [4]. [E2] | Before: "It's not just a planner, it's a lifestyle." After: "A planner with a weekly review page that takes five minutes." | One deliberate contrast per page when the contrast is the positioning ("Not a bank. A credit union you own.") and is true. |
| **Vague value prop that fits any product** | Fails the substitution test: swap in a competitor's name and nothing breaks. This is the core of the slop definition (Section 1.2). [E2] | Before: "The all-in-one platform to help your team do more." After: "Payroll for restaurants with tipped staff, in all 50 states." | Umbrella brand lines with a specific sub-line directly below. |
| **Significance inflation ("a testament to", "a pivotal moment", "redefining the future of")** | LLMs puff up importance and link small things to broad trends [4]. [E2] | Before: "Our new release marks a pivotal moment for creators." After: "Version 4 exports to 8K and halves render time." | Genuine milestones with a fact attached ("our 1,000th school"). |
| **"Discover", "Explore", "Experience" as the whole CTA idea** | Generic invitation verbs; say nothing about what happens on click. [E2] | Before: "Discover more." After: "See pricing" / "Book a 15-min demo" / "Download the PDF (2 MB)". | Editorial or museum navigation where browsing is the goal. |
| **Synonym cycling across sections** | Older models' repetition penalty produced "the platform... the solution... the tool... the system" for one thing [4]. [E2] | Pick one name for the product and one for each feature; repeat them. | Never. Consistent naming is also a usability rule. |

### 2.2 Structure and rhythm

| Tell | Why it reads as AI | Do instead (before / after) | When acceptable |
|---|---|---|---|
| **Forced triads** ("Fast. Simple. Secure." / "innovation, inspiration, and insight") | Rule-of-three overuse, used "to make superficial analyses look more comprehensive" [4]. [E2] | Before: "Fast, simple, and secure." After: "Loads in under a second on 3G." (one proven claim beats three asserted ones) | When there really are three things, each with a proof point. |
| **Every feature card the same length and shape** | Three or six cards, each with icon, two-word title, one 12-word sentence. Reads as a filled template. [E2] | Let the most important feature take more space; cut the ones you cannot prove. | Comparison grids, where sameness aids scanning. |
| **Inline-header lists (bold label + colon + sentence)** | A listed Wikipedia style tell, traced to readmes and listicles [4]. [E2] | Before: "**Speed:** Our tool is fast." After: a single sentence, or a real spec table. | Specs, FAQs, and documentation where labels aid scanning. |
| **Bold on every other phrase** | Mechanical "key takeaways" emphasis [4]. [E2] | Bold one thing per block, or nothing. | Legal notices and warnings. |
| **"-ing" tails that add fake depth** ("..., ensuring peace of mind", "..., empowering teams to thrive") | Superficial participle analysis, a top Wikipedia content tell [4]. [E2] | Before: "Encrypted backups, ensuring peace of mind." After: "Encrypted backups. Restore any file from the last 90 days." | Rarely. Prefer a second fact. |
| **Generic upbeat close** ("The future is bright." "Let's build it together.") | Section-summary and positive-conclusion habit of older models [4]. [E2] | End on the next step or a concrete promise: "Start free. Cancel from the settings page." | Brand manifestos, if the rest is specific. |
| **Signposting** ("Here's the thing:", "Let's dive in", "Here's what you need to know") | Announces instead of saying. [E2] | Delete the signpost; start with the point. | Spoken video scripts, sparingly. |
| **Em-dash cascades** | Was the most famous tell through 2025; now historical as models suppress it, and the newer tell is clipped, period-heavy rhythm [4]. [E2] | Use the punctuation the sentence needs. Vary sentence length on purpose. | Em dashes are standard punctuation; one or two per page is fine. |

### 2.3 Formatting inside designs

| Tell | Why it reads as AI | Do instead | When acceptable |
|---|---|---|---|
| **Emoji bullets** (rocket, lightbulb, check mark before each item) | Wikipedia lists "emoji as formatting" before headings and bullets [4]. [E2] | Use the design system's icon set with labels, or plain bullets. | Casual consumer social where emoji are the audience's own register, used as content not decoration. |
| **The sparkles emoji (U+2728) or sparkle icon as "AI here"** | Now the default AI marker. NN/g found no participant associated it with AI; 73% linked a star shape to save/favorite; most common readings were favorite (16.8%) and visual effects (16.8%) [17]. Practitioners argue it now reads as a "beta" badge [18]. [E2] | Name the feature by what it does ("Summarize thread"). If you need an AI marker, pair any icon with a text label [17]. | Image and video effects, where sparkle already means "effect" [17]. |
| **Title Case On Every Heading** | Chatbots "strongly tend" to capitalize all main words [4]. [E2] | Follow one capitalization rule from the brand guide; sentence case is the default in most modern UI systems. | Brands whose guide specifies title case; book and film titles. |
| **Curly quotes mixed with straight quotes** | Wikipedia lists curly quotes but rates them an **ineffective** indicator alone (smart quotes, Chicago style) [4]. [E3] | Use typographically correct quotes consistently; mixing is the problem, not curly quotes. | Always use proper typographic quotes in print. |

### 2.4 Proof and trust tells

These are the most damaging because they are also legal exposure.

| Tell | Why it reads as AI | Do instead | When acceptable |
|---|---|---|---|
| **Invented testimonials** ("Sarah J., Marketing Manager", stock headshot, glowing generic quote) | Generic names, no company, interchangeable praise. Since 2024 the US FTC rule bans fake reviews and testimonials, explicitly including AI-generated ones and those from people who do not exist [16]. [E2, law] | Real quote, full name or initials with permission, company, role, specific outcome: "'We closed the books in 3 days instead of 9.' Ana Ruiz, Controller, Lumen Dental." | Placeholder text in a wireframe, visibly marked as placeholder and never shipped. |
| **Invented metrics** ("10x faster", "Trusted by 10,000+ teams", "99.9% satisfaction") | Round numbers with no baseline or source; models produce them on request. Unverifiable claims also breach the Truth test in `cognitive-psychology` (dark-patterns reference). [E2] | Real number, real baseline, footnoted: "Median report time fell from 41 to 12 minutes (128 customers, Q2 2026)." | Only when true and sourced. |
| **Fake logo wall** | Logos of companies that never paid or agreed. [E2] | Show only customers with written permission; fewer real logos beat many fake ones. | Never fake. |
| **Fake social indicators** (bot followers, purchased views in "as seen on" counts) | Also covered by the FTC rule [16]. [E2, law] | Report real numbers or omit. | Never. |

### 2.5 UI microcopy

| Tell | Why it reads as AI | Do instead (before / after) | When acceptable |
|---|---|---|---|
| **Chatbot voice in the product** ("Certainly!", "Great question!", "I hope this helps") | Collaborative-communication artifacts [4]. [E2] | Before: "Certainly! Here are your results." After: "12 results". | Conversational assistants, where a short acknowledgment is part of the turn. |
| **Placeholder residue** ("[Company Name]", "Insert CTA here", "Lorem ipsum") | Phrasal templates and placeholder text are a Wikipedia sign [4], and the clearest "unreviewed" signal. [E2] | Search every string for brackets and template words before handoff. | Never in shipped UI. |
| **Over-cheerful empty and error states** ("Oops! Something went wrong", "Let's get you started on your journey!") | Same upbeat register on every state, no cause or fix. [E2] | Before: "Oops! Something went wrong." After: "We couldn't save. You're offline; we'll retry when you reconnect." | Playful brands, if the cause and fix are still there. |
| **Hedged filler** ("may potentially help", "it's important to note") | Excessive hedging and filler phrases [4]. [E2] | State the condition: "Works offline for up to 7 days." | Legal and medical copy where the hedge is the accurate claim. |

### 2.6 Social captions

| Tell | Why it reads as AI | Do instead | When acceptable |
|---|---|---|---|
| **Hook line + emoji bullet list + "Let that sink in." + 15 hashtags** | Combines emoji formatting, triads, signposting, and generic close [4]. [E2] | One specific observation, one detail only you know, one clear ask. | Platform-native formats your audience uses themselves, written with real content. |
| **"Game-changer", "next level", "must-have"** | Promotional language words to watch [4]. [E2] | Show the change: a before-and-after image, a number, a customer clip. | Quoting a real customer who said it. |
| **Same caption across platforms** | Volume without adaptation; fits the "unasked-for volume" condition of slop. [E2] | Write per platform: LinkedIn wants the context, TikTok wants the first two seconds. | Legal or crisis statements that must be identical. |

### 2.7 Word lists

Use these as a scan list, not a ban list. One hit: check it. Three in a block: rewrite the block.

| Group | Words and phrases | Evidence |
|---|---|---|
| Measured excess style words (science writing) | delve(s), underscore(s), showcasing, potential, findings, crucial [8]; 21 focal words analyzed in [7] | E1 (frequency in 15M abstracts; not measured in marketing) |
| Wikipedia AI-vocabulary by era | 2023-24: additionally, boasts, bolstered, crucial, delve, emphasizing, enduring, garner, intricate, interplay, key, landscape, meticulously, pivotal, tapestry, testament, underscore, valuable, vibrant. 2024-25: align with, enhance, fostering, highlighting, showcasing. 2026 onward: leverage, multifaceted, prioritize, quietly, steady, dependable, practical, matters [4] | E2 |
| Wikipedia promotional words | boasts a, vibrant, rich, profound, showcasing, nestled, in the heart of, groundbreaking, renowned, diverse array, breathtaking, stunning [4] | E2 |
| Marketing filler (practitioner observation) | unlock, unleash, elevate, empower, supercharge, revolutionize, transform, reimagine, seamless, effortless, intuitive, robust, cutting-edge, next-generation, all-in-one, game-changer, journey, ecosystem, take it to the next level | E3 as an AI signal (humans wrote these long before LLMs); E2 as a genericness signal |

### 2.8 The specificity rewrite (procedure)

1. **Substitution test.** Replace the product name with a competitor's. If the line still works, it is generic.
2. **Find the noun.** What does the user actually get? A report, an hour back, a cheaper bill, a fixed bug?
3. **Find the number or mechanism.** How much, how fast, how does it work? Use a real figure with its baseline, or describe the mechanism in plain words.
4. **Find the person.** Who is it for, specifically? Restaurants with tipped staff, not "businesses".
5. **Cut the style words.** Delete every adjective and verb from the scan list that does not carry content, then read it again.
6. **Read it aloud.** If it sounds like a pitch deck, rewrite it as you would explain it to a customer at a counter.

---

## 3. How audiences perceive AI-looking work

### 3.1 People cannot reliably detect provenance, so they react to cues

| Finding | Study | Grade |
|---|---|---|
| Untrained people identified StyleGAN2 faces at 48.2% accuracy (chance is 50%); training raised it only to 59.0%. Synthetic faces were rated **more** trustworthy (4.82 vs. 4.48 on a 7-point scale). | Nightingale and Farid, *PNAS*, 2022; 315, 219 and 223 participants [19] | E1 |
| In a representative study of 3,002 people in the USA, Germany and China, most participants were "simply guessing" whether images, text and audio were human- or machine-made, and AI media were rated **more human-like** across all media and countries. | Frank et al., IEEE S&P 2024 [20] | E1 |
| Across six experiments (N = 4,600), people could not detect AI-written self-presentations. They relied on flawed heuristics (first-person pronouns, contractions, family topics) that AI can exploit to seem "more human than human". | Jakesch, Hancock and Naaman, *PNAS*, 2023 [21] | E1 |
| Consumers "intuitively identified most of the AI-generated ads" and rated them more "annoying," "boring," and "confusing"; even high-quality AI ads produced weaker memory activation than traditional ads. More than 2,000 participants, about 150 with EEG. No identification rate published. | NielsenIQ press release, Dec 2024 [31] | E3 (industry research, not peer-reviewed, no published method detail) |

**Practical reading:** polished, realistic AI output is often not detected [E1]. What audiences spot is the *cluster of cheap cues*: generic copy, uncanny details, template layouts, stock-sounding testimonials. So the trust cost lands on work that **looks** low-effort, whatever made it. Removing tells is not about hiding AI; it is about removing the signs of not caring.

### 3.2 Labels and disclosure: the "AI" word itself costs trust

| Finding | Study | Grade |
|---|---|---|
| Headlines labeled "AI-generated" were rated less accurate and shared less, **whether true or false and whether human- or AI-made**. The penalty was about a third of a "False" label (2.66 vs. 9.33 points). It largely disappeared when people were told AI only improved clarity or wrote a first draft; it persisted when AI chose the topic and wrote the whole piece. N = 4,976, US and UK, preregistered. | Altay and Gilardi, *PNAS Nexus*, 2024 [22] | E1 |
| In 13 experiments, people who disclosed AI use were trusted less than those who did not, across communication, analytics and creative tasks. Mechanism: lower perceived legitimacy. The penalty is attenuated but not eliminated among tech-positive evaluators. **Being exposed by a third party is worse than disclosing.** | Schilke and Reimann, *OBHDP*, 2025 [23] | E1 |
| Fully AI-generated display ads beat human expert ads on click-through by about 19% on the Google Display Network, but labeling an ad "AI-generated" or "AI-edited" cut clicks by about 31.5% vs. unlabeled human ads, even with identical images. AI-modified human ads showed no gain. | Lee, Todri, Adamopoulos and Ghose (NYU, Emory), reported by The Decoder, Dec 2025 [24] | E2 (secondary report; primary paper not opened [unverified]) |
| LLM-written ads were preferred 59.1% vs. 40.9% (n = 800); after a 21.2-point penalty when participants correctly identified AI origin, AI ads still led. | Meguellati et al., 2025 [25] | E2 (preprint) |
| AI-generated banner images matched or beat human-made ones on quality and realism; in a field test, one AI banner got 50% higher click-through than a professional stock photo. | Hartmann, Exner and Domdey, *Int. J. Research in Marketing*, 2025, per TUM summary [32] | E1 for the ratings; the 50% figure is one ad, treat as E3 |
| Simply putting the term "artificial intelligence" in product and service descriptions lowered purchase intention across experiments with more than 1,000 US adults and eight categories, via lower **emotional trust**. The drop was stronger for high-risk items (expensive electronics, medical devices, financial services). | Cicek, Gursoy and Lu, *J. Hospitality Marketing & Management*, 2024, per WSU [30] | E1 (peer-reviewed; journal page blocked, details from the university release). Note: about AI as a product feature, not AI-made design. |

**Practical reading:** AI-made creative is not inherently weaker; unlabeled, it can perform as well or better on clicks [E1/E2]. The cost comes from **perceived** AI authorship: a label, an exposure, or tells that make people infer it [E1]. Two disclosure rules follow:

1. **Never conceal in ways that can be exposed.** Third-party exposure costs more than disclosure [23], and fake testimonials and reviews are illegal in the US [16].
2. **Disclose the role, not just the tool.** "AI-assisted" reads as full automation; "Illustrated by Mara Lin; background extended with an image model" tells people a human made the decisions, which is what removed most of the penalty in [22].

### 3.3 Art, craft and emotion: where the penalty is largest

| Finding | Study | Grade |
|---|---|---|
| The same AI-made paintings were rated lower on liking, beauty, profundity and worth when labeled "AI-created" rather than "human-created". Perceived effort and story moderated liking and beauty. Study 2 replicated Study 1. | Bellaiche et al., *Cognitive Research: Principles and Implications*, 2023 [26] | E1 (internal replication) |
| Four experiments (N = 1,708, one high-powered preregistered): the same artwork labeled AI-made was preferred less, seen as less creative, and evoked less awe; stronger among people who believe creativity is uniquely human. Western samples only. | Millet et al., *Computers in Human Behavior*, 2023 [27] | E1 |
| Emotional brand messages believed to be AI-written triggered **moral disgust**, lower word of mouth and lower loyalty; factual AI messages were much less penalized, and AI-edited (not AI-written) messages less penalized. | Kirk and Givi, *Journal of Business Research*, 2025 (released Oct 2024), per Newswise [28] | E1 (journal page not opened; release does not give sample sizes) |
| Disclosing AI in hospitality lowered trust where emotional or social engagement matters (luxury dining, connection) and had little effect where efficiency matters (check-in). | Gursoy, Xu, Zhou and Cai, *Int. J. Hospitality Management*, 2024, per WSU Carson [29] | E1 (via university summary) |

### 3.4 Industry surveys on AI imagery and ads

Stated attitudes in surveys often differ from behavior in field tests (compare with 3.2). Use them to gauge risk, not to predict clicks.

| Survey | Sample and date | Key numbers | Grade and caveat |
|---|---|---|---|
| Getty Images VisualGPS, "Building Trust in the Age of AI" | 30,000+ adults, 25 countries, 2022 to 2024 (secondary summary) | 98% say authentic imagery is essential to trust; 78% say an AI image cannot be "authentic"; almost 90% want to know when an image is AI-made; 66% prefer brands that use real, unedited photos; healthcare was the least accepted use of AI imagery and financial services the most; Southeast Asia, Latin America, UAE and Saudi Arabia were "much more receptive". [34] | E2. Getty sells human-made photography; numbers via CX Network, primary PDF failed to load. |
| IAB and Sonata Insights, "The AI Ad Gap Widens" | 505 US Gen Z and Millennial consumers, 104 ad executives; Oct 2025 to Jan 2026 | 82% of executives think young consumers feel positive about AI ads; 45% do (gap grew from 32 to 37 points since 2024). 39% of Gen Z feel negative vs. 20% of Millennials. Gen Z describe AI-using brands as inauthentic (30%), disconnected (26%), unethical (24%). Yet 73% say knowing an ad was AI-made would raise or not change purchase likelihood. [33] | E2. Small online panel; stated intent. |
| NielsenIQ | 2,000+ participants, Dec 2024 | See 3.1. [31] | E3 |

**Case:** Coca-Cola's AI-generated 2024 "Holidays Are Coming" remake drew wide public mockery as "soulless" and "deeply uncanny" for a brand built on a nostalgic, hand-crafted holiday tradition [35]. [E3 as evidence of effect; useful as a dated example of the emotional-heritage risk.]

### 3.5 When looking AI-made costs trust, and when audiences do not care

| Context | Risk of looking AI-made | Why | Evidence |
|---|---|---|---|
| Art, illustration, craft, handmade, creative services | **High** | Value is perceived human effort and creativity; labels alone lower liking and worth. | [26][27] E1 |
| Premium, luxury, hospitality, heritage brands | **High** | Emotional trust and "connection" are the product. | [29][35] E1 / E3 |
| Emotional messages (thank-you, apology, condolence, holiday, founder letters) | **High** | Moral disgust at fake sincerity. | [28] E1 |
| Health and medical | **High** | High-risk category for AI mentions; least accepted use of AI imagery in the Getty survey. | [30] E1, [34] E2 |
| Finance and insurance | **High for copy and claims; moderate for imagery** | AI mention lowers purchase intent in high-risk products; but finance was the most accepted category for AI imagery in Getty's survey. | [30] E1, [34] E2 |
| News, information, editorial, education | **High if labeled or inferred** | AI labels reduce perceived accuracy even for true, human-written items. | [22] E1 |
| Local and independent businesses | **Likely high** [E3, inference] | Their advantage is the specific person and place; generic copy erases it. No direct study found. | inference from [27][28] |
| Gen Z audiences | **Higher than marketers expect** | Executives overestimate positivity by 37 points. | [33] E2 |
| Performance display ads, utility banners, product listings | **Low if unlabeled and well made** | AI creative matched or beat human creative on clicks; the penalty appears when people know or infer AI. | [24][25][32] E1 / E2 |
| Functional UI copy, factual notices, documentation | **Low** | Factual AI messages are much less penalized; efficiency contexts show little effect. | [28][29] E1 |
| Internal tools, prototypes, mood exploration | **Low** | Audience already knows the process; speed is the value. | E2 |

**Apply:** set the slop bar by the row. In high-risk rows, every visible word and image needs a human decision behind it and a fact only the brand could supply. In low-risk rows, the bar is accuracy and clarity; AI drafting is fine if the tells are removed and nothing is invented.

**Limit:** do not use this table to justify hiding AI use in high-risk rows. Concealment that is later exposed costs more than disclosure [23], and invented proof is illegal in the US [16].

---

## 4. Slop test for copy

Run before any copy ships in a design. A fail on items 1 to 4 blocks delivery.

1. **Truth.** Every number, testimonial, logo, award, and "trusted by" claim is real, sourced, and permitted. No invented people. [16]
2. **Residue.** No placeholders, brackets, "[Company Name]", chatbot phrases ("Certainly", "I hope this helps"), or lorem ipsum. [4]
3. **Substitution.** Swap in a competitor's name: the hero, subhead, and CTA no longer make sense.
4. **Specific claim.** The hero contains at least one concrete noun, number, or mechanism the reader can check.
5. **Style-word count.** Fewer than two scan-list words (Section 2.7) per block; none in the headline.
6. **No reflex structures.** No "not just X, it's Y" unless it is the positioning; no forced triad; no "-ing" tails; no signposts; no generic upbeat close. [4]
7. **Formatting.** No emoji bullets, no bold on every phrase, one capitalization rule, no sparkle icon without a text label. [4][17]
8. **Rhythm.** Sentence lengths vary; punctuation is chosen, not suppressed or sprayed.
9. **Consistent names.** One name per product and feature across the whole design.
10. **Voice.** The copy sounds like this brand's guide, not like a category average. If there is no guide, it sounds like a person explaining the product to one customer.
11. **Context risk.** Check Section 3.5. In high-risk contexts, a named human owns every line, and any AI role is disclosed by role, not just by tool.

---

## 5. Apply by medium

**UI and product**
- Name AI features by outcome ("Summarize", "Draft reply"), not by "AI" or a sparkle alone; NN/g found the sparkle is not read as AI and recommends text labels [17].
- Microcopy states cause and fix. Empty, error, and success states each get their own wording, not one cheerful template.
- Never ship generated sample data (names, avatars, metrics) into production screens; mark mock data visibly in prototypes.

**Landing pages**
- Hero: who it is for, what they get, one proof. Run the substitution test on the hero before anything else.
- Proof section: real quotes with name, role, company and outcome; numbers with baseline and date; logos only with permission [16].
- Feature grid: drop features you cannot demonstrate; let the main one break the grid.
- Avoid "AI-powered" as the lead benefit for high-risk categories (health, finance, expensive goods); lead with the outcome [30].

**Social**
- One idea per post, with a detail only the brand knows (a place, a person, a number, a behind-the-scenes fact).
- Adapt per platform; identical captions across platforms read as volume.
- For emotional moments (holidays, apologies, milestones), write it in a human voice and do not use generated faces or scenes of real-seeming people [28][35].

**Print and out-of-home**
- Fewer words carry more weight: a generic line on a billboard is slop at 10 meters. Every word on the board must survive the substitution test.
- Packaging and point-of-sale claims are regulated claims; treat every adjective as a promise to verify.
- Premium print (catalogs, books, packaging for craft goods) sits in the high-risk rows of Section 3.5: credit the photographer, illustrator, or maker.

**Limit (all media):** the goal is honest, specific work, not undetectable AI. Do not use these rules to disguise generated testimonials, faces, or claims as human. Wikipedia's guidance applies to design too: treating the signs as the problem "could just make detection harder" [4]. Fix the genericness and the falsehood, not the fingerprints.

---

## Sources

[1] Willison, S. (2024, May 8). *Slop is the new name for unwanted AI-generated content*. simonwillison.net. https://simonwillison.net/2024/May/8/slop/

[2] Euronews. (2025, December 15). *Merriam-Webster's 2025 word of the year is "slop"* (secondary; merriam-webster.com blocked fetching). https://www.euronews.com/2025/12/15/merriam-websters-2025-word-of-the-year-is-slop

[3] Macquarie Dictionary. (2025, November 24). *Macquarie Dictionary Word of the Year for 2025*. https://www.macquariedictionary.com.au/macquarie-dictionary-word-of-the-year-for-2025/

[4] Wikipedia contributors, WikiProject AI Cleanup. *Wikipedia:Signs of AI writing* (project page, not policy; accessed 2026-10). https://en.wikipedia.org/wiki/Wikipedia:Signs_of_AI_writing

[5] Kirk, R., Mediratta, I., Nalmpantis, C., Luketina, J., Hambro, E., Grefenstette, E., & Raileanu, R. (2023). *Understanding the effects of RLHF on LLM generalisation and diversity* (arXiv preprint 2310.06452). https://arxiv.org/abs/2310.06452

[6] Zhang, J., Yu, S., Chong, D., Sicilia, A., Tomz, M. R., Manning, C. D., & Shi, W. (2025). *Verbalized sampling: How to mitigate mode collapse and unlock LLM diversity* (arXiv preprint 2510.01171). https://arxiv.org/abs/2510.01171

[7] Juzek, T. S., & Ward, Z. B. (2025). *Why does ChatGPT "delve" so much? Exploring the sources of lexical overrepresentation in large language models*. COLING 2025. https://arxiv.org/abs/2412.11385

[8] Kobak, D., González-Márquez, R., Horvát, E.-Á., & Lause, J. (2025). *Delving into LLM-assisted writing in biomedical publications through excess vocabulary*. Science Advances, 11(27). https://arxiv.org/abs/2406.07016

[9] Doshi, A. R., & Hauser, O. P. (2024). *Generative AI enhances individual creativity but reduces the collective diversity of novel content*. Science Advances, 10(28), eadn5290. https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532/

[10] Anderson, B. R., Shah, J. H., & Kreminski, M. (2024). *Homogenization effects of large language models on human creative ideation*. ACM Creativity & Cognition 2024. https://arxiv.org/abs/2402.01536

[11] Zhou, E., & Lee, D. (2024). *Generative artificial intelligence, human creativity, and art*. PNAS Nexus, 3(3), pgae052. https://academic.oup.com/pnasnexus/article/3/3/pgae052/7618478

[12] Wenger, E., & Kenett, Y. (2025). *We're different, we're the same: Creative homogeneity across LLMs* (arXiv preprint 2501.19361). https://arxiv.org/abs/2501.19361

[13] Goree, S., Doosti, B., Crandall, D., & Su, N. M. *Investigating the homogenization of web design* (Indiana University; CHI 2021 version not opened). Secondary summary: The Fashion Law, "Remember blanding? Well, websites all look the same now, too." https://www.thefashionlaw.com/remember-blanding-well-websites-are-all-starting-to-look-the-same-too/

[14] Paech, S., Roush, A., Goldfeder, J., & Shwartz-Ziv, R. (2025). *Antislop: A comprehensive framework for identifying and eliminating repetitive patterns in language models* (arXiv preprint 2510.15061). https://arxiv.org/abs/2510.15061

[15] Liang, W., Zhang, Y., Codreanu, M., Wang, J., Cao, H., & Zou, J. (2025). *The widespread adoption of large language model-assisted writing across society* (arXiv preprint 2502.09747). https://arxiv.org/abs/2502.09747

[16] US Federal Trade Commission. (2024, August 14). *Federal Trade Commission announces final rule banning fake reviews and testimonials*. https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials

[17] Kaplan, K. (2024, September 20). *The AI sparkles icon problem*. Nielsen Norman Group. https://www.nngroup.com/articles/ai-sparkles-icon-problem/

[18] Clark, J. (2024, September 28). *Your sparkles are fizzling*. Big Medium. https://bigmedium.com/ideas/your-sparkles-are-fizzling.html

[19] Nightingale, S. J., & Farid, H. (2022). *AI-synthesized faces are indistinguishable from real faces and more trustworthy*. PNAS, 119(8). https://pmc.ncbi.nlm.nih.gov/articles/PMC8872790/

[20] Frank, J., Herbert, F., Ricker, J., Schönherr, L., Eisenhofer, T., Fischer, A., Dürmuth, M., & Holz, T. (2024). *A representative study on human detection of artificially generated media across countries*. IEEE Symposium on Security and Privacy 2024. https://arxiv.org/abs/2312.05976

[21] Jakesch, M., Hancock, J. T., & Naaman, M. (2023). *Human heuristics for AI-generated language are flawed*. PNAS, 120(11). https://arxiv.org/abs/2206.07271

[22] Altay, S., & Gilardi, F. (2024). *People are skeptical of headlines labeled as AI-generated, even if true or human-made, because they assume full AI automation*. PNAS Nexus, 3(10), pgae403. https://academic.oup.com/pnasnexus/article/3/10/pgae403/7795946

[23] Schilke, O., & Reimann, M. (2025). *The transparency dilemma: How AI disclosure erodes trust*. Organizational Behavior and Human Decision Processes, 188, 104405. https://ideas.repec.org/a/eee/jobhdp/v188y2025ics0749597825000172.html

[24] The Decoder. (2025, December 20). *Telling consumers an ad is AI-generated cuts clicks by 31 percent, study finds* (secondary report on Lee, Todri, Adamopoulos & Ghose, NYU and Emory; primary paper not opened). https://the-decoder.com/telling-consumers-an-ad-is-ai-generated-cuts-clicks-by-31-percent-study-finds/

[25] Meguellati, E., Civelli, S., Han, L., Bernstein, A., Sadiq, S., & Demartini, G. (2025). *LLM-generated ads: From personalization parity to persuasion superiority* (arXiv preprint 2512.03373). https://arxiv.org/abs/2512.03373

[26] Bellaiche, L., Shahi, R., Turpin, M. H., Ragnhildstveit, A., Sprockett, S., Barr, N., Christensen, A., & Seli, P. (2023). *Humans versus AI: Whether and why we prefer human-created compared to AI-created artwork*. Cognitive Research: Principles and Implications, 8, 42. https://scholars.duke.edu/publication/1585977

[27] Millet, K., Buehler, F., Du, G., & Kokkoris, M. D. (2023). *Defending humankind: Anthropocentric bias in the appreciation of AI art*. Computers in Human Behavior, 143, 107707. https://research.vu.nl/en/publications/defending-humankind-anthropocentric-bias-in-the-appreciation-of-a/

[28] Newswise / New York Institute of Technology. (2024, October 1). *Do customers perceive AI-written communications as less authentic?* (release on Kirk, C. P., & Givi, J., *The AI-authorship effect*, Journal of Business Research). https://www.newswise.com/articles/do-customers-perceive-ai-written-communications-as-less-authentic

[29] WSU Carson College of Business. (2024, October 16). *Disclosing AI integration in hospitality services can erode customer trust* (release on Gursoy, Xu, Zhou & Cai, International Journal of Hospitality Management). https://business.wsu.edu/?p=49946

[30] WSU Insider. (2024, July 30). *Using the term "artificial intelligence" in product descriptions reduces purchase intentions* (release on Cicek, M., Gursoy, D., & Lu, L., Journal of Hospitality Marketing & Management). https://news.wsu.edu/press-release/2024/07/30/using-the-term-artificial-intelligence-in-product-descriptions-reduces-purchase-intentions/

[31] NielsenIQ. (2024, December 12). *NIQ research uncovers hidden consumer attitudes toward AI-generated ads*. https://nielseniq.com/global/en/news-center/2024/niq-research-uncovers-hidden-consumer-attitudes-toward-ai-generated-ads/

[32] TUM School of Management. (2024, November 19). *The power of generative AI in visual marketing* (summary of Hartmann, J., Exner, Y., & Domdey, S., *The power of generative marketing: Can generative AI create superhuman visual marketing content?*, International Journal of Research in Marketing). https://www.mgt.tum.de/de/our-stories-with-impact/detail/the-power-of-generative-ai-in-visual-marketing

[33] Williamson, D. A., Koch, J., & Giegerich, C. (2026, January 15). *The AI ad gap widens*. IAB with Sonata Insights. https://www.iab.com/insights/the-ai-ad-gap-widens/

[34] CX Network. *Are AI-generated images putting customers off?* (secondary summary of Getty Images VisualGPS, *Building Trust in the Age of AI*, 2024; Getty PDF did not load). https://www.cxnetwork.com/artificial-intelligence/interviews/ai-generated-images-customer-trust-advertising

[35] Campaign Asia. (2024, November). *Coca-Cola faces backlash for "ugly" AI-generated Christmas spot*. https://www.campaignasia.com/video/coca-cola-faces-backlash-for-ugly-ai-generated-christmas-spot/499379
