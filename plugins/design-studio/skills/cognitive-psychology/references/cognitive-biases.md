# Cognitive Biases for Design and Communication

> **Scope:** 48 cognitive biases and heuristics that matter when designing products, pages, campaigns, and print/OOH pieces. Each entry gives the evidence (with replication status), how to apply it by medium, the ethical limit, and the dark pattern it becomes when abused.
> **Last verified:** 2026-10 (legal and regulatory items: Planet49, EDPB, FTC, CMA; all research sources were checked in the same pass)
> **Used by:** behavioral-psychologist, ux-writer, ux-researcher, ui-designer, design-critic, brand-strategist, social-media-designer, print-ooh-designer, creative-director

## How to read this file

- **Grades** follow the knowledge standard: **[E1]** established (peer-reviewed, replicated, or meta-analytic), **[E2]** practitioner consensus or authoritative standard, **[E3]** popular but weak or contested. Many entries carry a split grade, for example "E1 for the lab effect, E3 for the popular design claim". Use the lower grade when you make a claim in client-facing work.
- **Apply moves are design recommendations derived from the evidence.** They have not been tested as stated unless a citation sits on the move itself. Treat them as hypotheses to A/B test, not guarantees.
- **Lab effect size does not equal real-world lift.** Several famous effects replicated at about half their original size or less (framing, curse of knowledge), and the Open Science Collaboration's 100 replications found replication effects about half the size of the originals on average [1].
- **Sources marked †** in the Sources list were verified at the bibliographic level only (DOI record). Claims attributed to them are limited to what the cited abstracts or secondary sources state.
- **Ariely-lab caution.** Several marketing effects (zero price, IKEA effect, the Economist decoy anecdote) come from Dan Ariely's lab. A 2012 PNAS paper he co-authored was retracted in 2021 [2]. That does not invalidate other papers, but prefer independent replications where they exist, and say so when none do.
- **Ethics.** Every entry has a **Limit**. The general rule: a bias may be used to make a true, user-beneficial choice easier to see and act on. It may not be used to create false beliefs (fake scarcity, fake popularity, fake urgency), to hide costs, or to make leaving harder than joining. Regulators now act on these patterns: the FTC's 2022 staff report names fake countdown timers, hard-to-cancel subscriptions, buried fees, and tricking people into sharing data [3]; a crawl of about 11K shopping sites found 1,818 dark-pattern instances of 15 types, and 183 sites engaged in outright deceptive practices [4]. See `dark-patterns-and-ethics.md` for the full taxonomy.

## At a glance

| Bias | One-line design use | Evidence grade | Risk of misuse |
|------|---------------------|----------------|----------------|
| **Designers' own biases** | | | |
| Curse of knowledge | Test copy and flows with true novices; you cannot "unknow" your product | E1 (smaller than first reported) | low |
| False consensus | "You are not the user": replace opinion with research | E1 | low |
| Confirmation bias (in research) | Write disconfirming questions; seek evidence your design fails | E1 | low |
| IKEA effect (on own work) | Discount your attachment to concepts you built; let others critique | E1 | low |
| **Decision & choice** | | | |
| Anchoring | Show the reference number you want judged against first | E1 (estimates); weaker for willingness to pay | med |
| Framing | Choose the frame (gain/loss, % lean/% fat) deliberately; test both | E1 | med |
| Loss aversion | Frame what users keep or lose, but do not assume losses always loom larger | E1 (contested generality) | high |
| Default effect / status quo | Pre-select the option most users would pick if fully informed | E1 | high |
| Defaults in privacy & consent | Off-by-default data sharing; equal-weight accept/reject | E1 (behavior); law | high |
| Decoy (asymmetric dominance) | In numeric comparison tables only, a dominated option can shift choice | E1 (numeric tables) / E3 (general) | med |
| Choice overload | Cut options when the choice is complex and preferences are unclear | E3 (general rule) / E1 (moderated) | low |
| Sunk cost | Help users stop; never guilt them with past investment | E1 | high |
| Present bias | Make the first step immediate and cheap; offer commitment devices | E1 (stronger for effort than money) | high |
| Availability | Use concrete, easy-to-recall examples; vivid cases drive judgment | E1 | med |
| Representativeness | Match category prototypes so the product reads as what it is | E1 | med |
| Choice-supportive bias | Reinforce good decisions after the fact with true information | E1 (narrow) | low |
| Center-stage effect | Center the recommended option in grids and shelves, not lists | E1 (context-dependent) | low |
| **Memory & attention** | | | |
| Serial position | Put key items first and last in lists, sequences, and slides | E1 (memory) / E2 (UI transfer) | low |
| Von Restorff (isolation) | One visually distinct element per view, for the one thing that matters | E1 (memory) / E2 (UI transfer) | low |
| Peak-end rule | Fix the worst moment and design the ending | E1 | med |
| Zeigarnik / Ovsiankina | Make it easy to resume unfinished tasks; do not count on better recall | E3 (Zeigarnik) / E1 (resumption) | med |
| Goal-gradient | Show honest progress; effort accelerates near the goal | E1 | med |
| Picture superiority | Pair key messages with a distinct image | E1 | low |
| Humor effect | Use humor to make one point stand out, not as wallpaper | E1 (lab) / E3 (ad transfer) | low |
| Bizarreness effect | One unexpected element against a normal context | E1 (mixed contexts only) | low |
| Negativity bias | Prevent and soften negative moments; one bad review weighs more | E1 | high |
| Attentional bias | Goal- and threat-relevant content captures attention | E1 (anxious groups) / E3 (general lever) | med |
| Banner blindness | Keep real content out of ad-like zones and styles | E2 (E1 lab study) | med |
| Priming | Consistent terms and context speed recognition; social priming is not a lever | E1 (semantic) / E3 (social) | low |
| **Social influence** | | | |
| Social proof | Show real descriptive norms near the decision | E1 (norm feedback) / E3 (towel specifics) | high |
| Bandwagon | Popularity signals amplify winners; use them knowingly | E1 | med |
| Authority | Show real credentials where trust is the barrier | E1 (obedience) / E3 (design cues) | high |
| Scarcity | Show true stock and true deadlines only | E1 (older evidence base) | high |
| Reciprocity | Give real value first, with no strings | E1 | med |
| Commitment & consistency | Start with a small, voluntary first step | E1 (small, conditional) | high |
| Halo effect | Visual quality colors judgments of unrelated attributes | E1 (moderate) | med |
| Pratfall effect | Admitting a minor flaw may help only when competence is established | E3 | low |
| Barnum / personalization | Personalization must be specific and real | E1 | med |
| **Perception & aesthetics** | | | |
| Aesthetic-usability effect | Beauty raises perceived usability; it does not fix real problems | E1 (perception) / E3 (performance) | med |
| Processing fluency / familiarity | Easy-to-read, easy-to-say, prototypical design is liked and trusted | E1 | med |
| Cognitive ease / illusory truth | Repetition and clarity make claims feel true; repeat only true claims | E1 (disfluency trick: E3) | high |
| Mere exposure | Repeated exposure builds liking, then wears out | E1 (inverted U) | low |
| Contrast / compromise effect | Options are judged relative to neighbors; middle options gain | E1 | med |
| **Value & pricing** | | | |
| Endowment effect | Ownership (trials, customization) raises valuation | E1 (mechanism contested) | med |
| IKEA effect | Self-made setup raises valuation, if the user completes it | E1 (moderate) | med |
| Labor illusion | Show the work the system is doing | E1 | med |
| Zero-price effect | "Free" is a distinct category, not just a lower price | E2 (independent replication not verified) | med |
| Charm pricing / left-digit bias | .99 works only when it changes the left digit | E1 | low |
| Unit bias | Unit and portion size shape how much people take | E3 (mechanism contested) | low |

---

## Designers' own biases

These biases act on the people making the design, not on the audience. Check for them before applying anything else in this file.

### Curse of knowledge
- **Definition:** Once you know something, it is hard to imagine not knowing it, so you overestimate how clear your design, copy, or instructions are to others.
- **Evidence [E1]:** Better-informed people could not ignore their private information even when doing so paid; market experience cut the bias by about half but did not remove it [5]. Adults show the bias in false-belief reasoning [6]. Replication: a 7-experiment, n = 3,074 replication found the effect in the same direction but less than half the original size; the original study had under 33% power [7]. The famous "song tapping" study (Elizabeth Newton, 1990 Stanford dissertation) is an unpublished dissertation; its often-quoted numbers circulate only through secondary sources and are **[unverified]** [8].
- **Apply:**
  - UI/product: run first-use tests with people who have never seen the product; ban internal jargon from labels; test empty states and error messages with novices.
  - Landing page/web: have someone outside the team explain the headline back to you in five seconds; if they cannot, rewrite.
  - Print/OOH: assume zero context; a billboard has no "previous screen".
- **Limit:** Low misuse risk. The practical failure is shipping designs only insiders understand.
- **Related:** False consensus, processing fluency, the knowledge gap behind Jakob's law (see `laws-of-ux.md`).

### False consensus effect
- **Definition:** People overestimate how much others share their own choices, preferences, and beliefs.
- **Evidence [E1]:** Named by Ross, Greene & House [9]; a 1985 meta-analysis of 115 hypothesis tests supports it [10]. The commonly quoted percentages from the original "sandwich board" study conflict across secondary sources; do not cite them.
- **Apply:**
  - All media: treat "I would click that" as one data point. Validate with research participants who match the audience, especially when you differ from them in age, culture, tech fluency, or ability.
  - Critique: ask "who besides us has seen this?" before debating taste.
- **Limit:** Low misuse risk. The failure is designing for yourself, which excludes users unlike the team (an accessibility risk too).
- **Related:** Curse of knowledge, confirmation bias.

### Confirmation bias (in design research)
- **Definition:** The tendency to seek, interpret, and remember evidence in ways that favor what you already believe.
- **Evidence [E1]:** In Wason's 2-4-6 task, only 6 of 29 participants reached the correct rule without first announcing a wrong one [11]. Nickerson's review documents the bias across many practical settings [12].
- **Apply:**
  - Research: write hypotheses down before testing and list what result would prove you wrong; use neutral task wording ("find a plan that fits you", not "notice how easy the new pricing is"); report failures alongside wins.
  - A/B tests: fix the success metric and sample size before launch; do not stop the test when the variant you like is ahead.
  - Critique: assign one reviewer to argue the design fails.
- **Limit:** Low misuse risk; the failure is self-deception. The same bias in audiences is why misleading framing works (see Framing, Cognitive ease).
- **Related:** False consensus, IKEA effect, choice-supportive bias.

### IKEA effect (on your own work)
- **Definition:** People value what they built themselves, and assume others will value it too.
- **Evidence [E1]:** Builders valued their own amateur creations close to experts' work and expected others to agree [13]. Full entry under Value & pricing.
- **Apply:** Separate authorship from evaluation: have someone who did not build the concept judge it against the brief; kill concepts that test badly even if they took weeks.
- **Limit:** Low misuse risk in this context.
- **Related:** Sunk cost, confirmation bias, choice-supportive bias.

---

## Decision & choice

### Anchoring
- **Definition:** A number seen first (even an arbitrary one) pulls later estimates toward it.
- **Evidence [E1 for estimates; weaker for willingness to pay]:** Described by Tversky & Kahneman [14]. In Many Labs 1, anchoring replicated strongly (replication d between about 1.2 and 2.4 across four items vs. original d = 0.93), with heterogeneity across samples attributed to prior knowledge [15]. Arbitrary anchors (such as digits of a social security number) moved product valuations [16], but later data question how strong valuation anchoring is [17].
- **Apply:**
  - UI/product: on pricing pages, show the highest-value plan or the annual total first if it is the honest reference; in donation forms, the suggested amounts act as anchors.
  - Landing page/web: lead with the meaningful number (time saved, typical result), not an arbitrary one.
  - Print/OOH: a single large number is read first and frames the rest of the message.
- **Limit:** The anchor must be real. Fake "was" prices, inflated "value" figures, and reference prices nobody ever paid are deceptive reference pricing. Medium risk.
- **Related:** Contrast effect, decoy, charm pricing.

### Framing effect
- **Definition:** Logically equivalent descriptions (gain vs. loss, "75% lean" vs. "25% fat") lead to different choices and ratings.
- **Evidence [E1]:** In the "Asian disease" problem, 72% chose the sure option in a gain frame and 78% chose the risky option in a loss frame [18]. Ground beef labeled "75% lean" was rated better than "25% fat", and the gap shrank after tasting [19]. Replication: Many Labs 1 replicated gain/loss framing at d ≈ 0.60 vs. the original d = 1.13, so the effect is real but about half as large as first reported [15].
- **Apply:**
  - UI/product: frame settings by outcome for the user ("Keep 2 GB free" vs. "Delete 2 GB"); test both frames for warnings and confirmations.
  - Landing page/web: attribute framing ("99% of orders arrive on time" vs. "1% arrive late") changes perception; pick the frame that is accurate and clear, and test.
  - Social/print/OOH: one frame per piece; mixed frames confuse.
  - Note: Levin & Gaeth found the framing gap shrank after experience [19]. Framing moves first impressions more than lasting judgments.
- **Limit:** A frame must not create a false impression. Technically true frames that mislead (for example, "up to 80% off" when almost nothing is) are deceptive. Medium risk.
- **Related:** Loss aversion, anchoring, defaults in privacy.

### Loss aversion
- **Definition:** Losses are often weighted more heavily than equivalent gains.
- **Evidence [E1, with contested generality]:** Prospect-theory patterns replicated across 19 countries and 13 languages (n = 4,098; 94% of items replicated, 12 of 13 theoretical contrasts) [20]. Gal & Rucker argue that "current evidence does not support that losses, on balance, tend to be any more impactful than gains" [21]. A five-sample study (N = 17,720) found loss aversion at all knowledge levels, weaker with more domain knowledge and stronger in older consumers [22]. Corrected reading: loss aversion is real but moderated; do not assume a fixed "losses count twice" rule.
- **Apply:**
  - UI/product: show what the user will lose when it is true and relevant ("Unsaved changes will be lost"); in trials, show what features end when the trial ends.
  - Landing page/web: test loss-framed against gain-framed copy instead of assuming loss wins.
  - Print/OOH: loss frames suit public-safety messages where the loss is real.
- **Limit:** High risk. Abuse looks like guilt-tripping decline buttons ("No, I don't want to save money"), invented losses ("Your account will be at risk"), and cancel flows that list everything you'll "lose". These overlap with the FTC's hard-to-cancel category [3].
- **Related:** Endowment effect, framing, sunk cost, negativity bias.

### Default effect / status quo bias
- **Definition:** People disproportionately stick with the pre-selected option or the current state.
- **Evidence [E1]:** Organ-donor consent rates were far higher in opt-out countries (85.9% in Sweden to 99.98% in Austria) than in opt-in ones (4.25% in Denmark to 27.5% in the Netherlands). An online experiment found 82% consent under opt-out, 79% under forced choice, and 42% under opt-in [23]. A meta-analysis of 58 studies (n = 73,675) found d = 0.68, with large variation and a few null or reversed results; defaults were stronger in consumer domains and when they signal endorsement or endowment [24]. Status quo bias appears in lab tasks and in real health-plan and retirement choices [25]. Caveat: the country figures are registration or consent rates, not actual donations.
- **Apply:**
  - UI/product: set every default to what most informed users would choose for themselves (accessible font size, security on, notifications minimal); defaults work through three routes: implied endorsement, effort, and status quo [23], so a default is also a recommendation.
  - Forms/checkout: leave add-ons unselected unless the user asked for them.
  - Where the right answer differs by user, use forced choice (no default), which performed close to opt-out in the 2003 experiment [23].
- **Limit:** High risk. Pre-checked add-ons, auto-enrollment in paid plans, and pre-ticked marketing consent are dark patterns (sneaking, forced action). Prime enrollment flows that made the non-Prime path harder to find were part of the FTC's 2023 complaint against Amazon [26].
- **Related:** Defaults in privacy & consent, present bias, endowment effect.

### Defaults and framing in privacy and consent
- **Definition:** How consent is pre-set, framed, and laid out strongly determines what people agree to share.
- **Evidence [E1 for behavior; legal points are law, verified 2026-10]:** Johnson, Bellman & Lohse showed that defaults and question framing change opt-in rates for privacy choices [27]. In a field study with more than 80,000 users of a German website, pre-selected checkboxes led about 30% of mobile and 10% of desktop users to accept all third parties; with unchecked boxes, under 0.1% did. Highlighting the "Accept" button raised acceptance from 39.2% to 50.8% on mobile [28]. Of 680 consent pop-ups on the UK's top 10,000 sites, only 11.8% met minimal legal requirements, and removing "Reject" from the first layer raised consent by 22–23 percentage points [29].
  - Law (EU): the Court of Justice ruled in Planet49 (1 October 2019) that a pre-ticked checkbox the user must untick is not valid consent, citing GDPR Recital 32: "Silence, pre-ticked boxes or inactivity should not therefore constitute consent" [30]. The EDPB's Guidelines 03/2022 (Version 2.0, February 2023) address deceptive design in social media interfaces [31].
- **Apply:**
  - UI/product: data sharing off by default; "Accept" and "Reject" on the same layer with equal visual weight; granular choices one click away.
  - Landing page/web: cookie banners must not block content in a way that leaves acceptance as the only practical path; test that "Reject all" takes no more clicks than "Accept all".
  - Social/apps: privacy-protective defaults for minors and new accounts.
- **Limit:** High risk. Pre-ticked consent (illegal in the EU per Planet49), hidden "Reject", color-only emphasis on "Accept", and consent walls are the abuse cases. Get legal review for each jurisdiction; this entry is not legal advice.
- **Related:** Default effect, framing, Von Restorff (visual emphasis on one button), the dark-pattern catalog.

### Decoy effect (asymmetric dominance / attraction effect)
- **Definition:** Adding an option that is clearly worse than one target option (but not than the others) can raise the target's share.
- **Evidence [E1 for numeric attribute tables; E3 as a general marketing lever]:** Demonstrated by Huber, Payne & Puto [32]. Replication debate: Frederick, Lee & Baskin found the effect may be limited to stylized, all-numeric displays and typically disappears when products are experienced or when even one attribute is shown visually (such as a photo of a hotel room) [33]. Yang & Lynn obtained only 11 reliable effects in 91 attempts across 23 product classes [34]. The original authors reply that the effect is robust under the original conditions and is context-dependent [35]. The often-told Economist subscription example comes from a classroom demonstration in Ariely's book *Predictably Irrational* (2008); it is an anecdote, and its figures are **[unverified]**.
- **Apply:**
  - UI/product, pricing tables: a decoy can only be expected to matter when plans are compared on numbers in a grid. Even then, test it.
  - Landing page, social, print, OOH: do not rely on decoys in image-led or experiential comparisons; the evidence says they usually do nothing there.
- **Limit:** Medium risk. A "plan" designed so no rational person would choose it adds clutter and manipulates; prefer a clear recommended option (see Center-stage, Von Restorff).
- **Related:** Contrast/compromise effect, anchoring, choice overload.

### Choice overload
- **Definition:** The claim that more options make people less likely to choose or less satisfied with their choice.
- **Evidence [E3 as a general rule; E1 for the moderated version]:** In the famous jam study, people were more likely to buy when offered 6 options than 24 or 30 [36]. A meta-analysis of 50 experiments (63 conditions, N = 5,036) found "a mean effect size of virtually zero but considerable variance" [37]. A later meta-analysis (99 observations, N = 7,202) identified four moderators that make overload likely: a complex choice set, a difficult decision task, uncertain preferences, and a goal of minimizing effort [38]. Corrected reading: more options hurt only under those conditions; "fewer is always better" is wrong.
- **Apply:**
  - UI/product: when users are unsure what they want and options are complex (insurance, hosting plans), reduce the visible set, add a recommended option, and offer filters or a guided quiz; when users know what they want (a specific book), large catalogs with good search are fine.
  - Landing page/web: one primary call to action per view; secondary options visually quieter.
  - Print/OOH: one message, one action.
- **Limit:** Low misuse risk. Over-pruning can hide the option a user needs, or steer them toward the most profitable one; disclose that more options exist.
- **Related:** Hick's law (`laws-of-ux.md`), defaults, decoy, center-stage.

### Sunk cost effect
- **Definition:** Continuing a course of action because of what has already been invested (money, time, effort), even when stopping is better.
- **Evidence [E1]:** Named by Arkes & Blumer [39]. A meta-analysis of 98 effect sizes found "clear evidence" of the effect, varying by decision type and weaker in older adults [40]. Many Labs 1 replicated a sunk-cost scenario (d ≈ 0.27–0.31 vs. original 0.23) [15].
- **Apply:**
  - UI/product: make stopping easy and guilt-free (cancel, downgrade, delete); show forward-looking information ("what you'll pay from now on"), not past spend.
  - Design process: kill concepts on their merits, not on hours spent (see Designers' own biases).
- **Limit:** High risk. "You've already invested 40 hours, don't throw it away" retention screens and streak-loss threats exploit sunk cost. Making cancellation harder than sign-up is the pattern in the FTC's Amazon case, settled in 2025 with a requirement that cancellation be as easy as sign-up [41].
- **Related:** Loss aversion, endowment effect, IKEA effect, commitment & consistency.

### Present bias (hyperbolic discounting)
- **Definition:** People overweight immediate costs and rewards relative to later ones, so they procrastinate on tasks with upfront costs and prefer "now" options they later regret.
- **Evidence [E1, stronger for effort than for money]:** Formalized as quasi-hyperbolic discounting [42]; naive present-biased people put off tasks with immediate costs [43]. A real-effort study found "very limited time inconsistency in monetary choices" but "considerably more present bias in effort", and present bias predicted demand for commitment devices [44]. Save More Tomorrow has employees commit in advance to save part of future raises [45].
- **Apply:**
  - UI/product: cut the effort of the first step (sign-up, setup) to near zero; let users schedule future commitments now ("Remind me Monday", "Increase savings with next raise").
  - Landing page/web: state the immediate benefit, not only the long-term one.
  - Social: hooks must pay off in the first seconds.
- **Limit:** High risk. "Buy now, pay later" and instant-credit flows that hide total cost, and easy-in/hard-out subscriptions, exploit present bias. Show total cost and future obligations at the moment of commitment.
- **Related:** Default effect, goal-gradient, zero-price effect, commitment & consistency.

### Availability heuristic
- **Definition:** People judge how frequent or likely something is by how easily examples come to mind.
- **Evidence [E1 for the heuristic; E3 for the classic "letter K" demonstration]:** Described by Tversky & Kahneman [46, 14]. Ease of recall, not the number of examples, drives judgment: people who listed 6 examples of their own assertiveness rated themselves more assertive than people who listed 12 [47]. A later study found people's judgments of letter positions mostly tracked real frequencies, challenging the textbook letter demonstration [48].
- **Apply:**
  - Landing page/web, social: one concrete, memorable customer story beats a list of abstract benefits.
  - Forms/research: asking users for "three reasons" is easier than "ten reasons" and can leave them more convinced (inferred from [47]; test before relying on it).
  - Print/OOH: a vivid single case is recalled and generalized.
- **Limit:** Medium risk. Vivid rare cases distort risk perception: fear marketing (security, health, insurance) that makes rare events feel common is manipulative. Pair vivid cases with honest base rates.
- **Related:** Representativeness, negativity bias, picture superiority.

### Representativeness heuristic
- **Definition:** People judge probability by how closely something resembles a prototype, often ignoring base rates and logic.
- **Evidence [E1]:** Described by Kahneman & Tversky [49]. Conjunction-rule violations (the "Linda problem") appeared in lay and expert participants across many contexts [50].
- **Apply:**
  - UI/product, web: match category conventions so the product is recognized as what it is (a banking app that looks like a bank; a checkout that looks like a checkout).
  - Brand, print, OOH: deliberate departures from the category prototype read as "different"; make sure the difference is the intended message.
- **Limit:** Medium risk. Mimicking the look of a trusted institution or brand (government forms, bank notices) to borrow credibility is deceptive and, in phishing, fraud. Representativeness also fuels stereotyping in imagery; check casting and illustration against stereotypes.
- **Related:** Processing fluency, Jakob's law (`laws-of-ux.md`), halo effect.

### Choice-supportive bias
- **Definition:** After choosing, people remember the chosen option as better (and the rejected one as worse) than it was.
- **Evidence [E1 for the narrow memory effect]:** People misattributed more positive features to chosen options and more negative features to rejected ones [51]. No large independent replication was found in this research pass; design extrapolations are **[E3]**.
- **Apply:**
  - UI/product: post-purchase confirmation and onboarding can restate the true reasons the choice was good ("You chose annual billing: you'll save X").
  - Research: ask about decisions in the moment; retrospective reports skew positive.
- **Limit:** Low risk. Do not use post-purchase reassurance to discourage returns or hide cancellation rights.
- **Related:** Confirmation bias, peak-end rule, IKEA effect.

### Center-stage effect
- **Definition:** In horizontal or grid displays, people infer that central items are more popular or better, and tend to choose them.
- **Evidence [E1, moderate and context-dependent]:** People infer that central items are most popular, especially when they think about others' preferences [52]. Eye tracking shows attention concentrating on the central option just before choice (a "central gaze cascade") [53]. With artworks, the effect appeared only when the items were identical and positive [54]. Position effects depend on display type: menus and lists favor the first and last items, ballots the first, and shelves and multiple-choice answers the middle [55].
- **Apply:**
  - UI/product: in a 3-column pricing table or product grid, the center slot is a natural place for the genuinely recommended option.
  - Lists and menus: center-stage does not apply; first and last positions matter (see Serial position).
  - Print/packaging/retail: center placement on shelves and spreads.
- **Limit:** Low risk. Do not combine it with a fake "most popular" label.
- **Related:** Serial position, Von Restorff, decoy, compromise effect.

---

## Memory & attention

### Serial position effect (primacy and recency)
- **Definition:** Items at the beginning and end of a sequence are recalled better than those in the middle.
- **Evidence [E1 for memory; E2 for UI transfer]:** In free recall, primacy extends over the first 3–4 items and recency over the last 8, with a flat middle [56]. Recency depends on short-term memory, while primacy reflects longer-term storage [57, 58]. Position effects in choice from displays differ by context: lists and menus favor first and last items [55].
- **Apply:**
  - UI/product: put the most important navigation items first and last; in onboarding sequences, open and close with the key benefit.
  - Landing page/web: the hero and the final call to action carry the most weight; do not bury the key message in the middle of a long page.
  - Social: carousels: strongest card first, call to action last.
  - Print/editorial/presentations: open and close with the main point.
- **Limit:** Low risk. Burying fees or terms in the middle of a long list is the abuse case.
- **Related:** Von Restorff, peak-end rule, center-stage.

### Von Restorff effect (isolation effect)
- **Definition:** An item that differs from its neighbors is remembered better.
- **Evidence [E1 for memory; E2 for UI emphasis]:** The isolation effect is robust in list memory; Hunt's review revisits what von Restorff actually showed [59]. Distinctiveness depends on context: bizarre or odd items stand out only when they are mixed with ordinary ones [60]. Caution for the web: visually distinctive banners can be ignored when they look like ads [61].
- **Apply:**
  - UI/product: one accent color reserved for the primary action; one highlighted plan; do not highlight everything.
  - Landing page/web: one distinct element per viewport.
  - Print/OOH: a single contrasting element (color, scale, orientation) in an otherwise calm layout.
  - Pair with accessibility: do not rely on color alone; differ in shape, size, or label too.
- **Limit:** Low risk. Abuse: making "Accept" bright and "Reject" gray (see Defaults in privacy) [28].
- **Related:** Banner blindness, bizarreness, humor effect, contrast effect.

### Peak-end rule
- **Definition:** People's memory of an experience is shaped mostly by its most intense moment and its end, with little regard for duration.
- **Evidence [E1]:** In the cold-water study, 22 of 32 participants (69%) chose to repeat a longer trial that ended slightly less painfully [62]. Remembered pain of colonoscopy and lithotripsy tracked peak pain and the last 3 minutes, not duration [63]. A randomized trial with 682 patients found that adding a short, gentler interval at the end lowered overall ratings of the procedure and raised the likelihood of returning for a repeat colonoscopy (OR 1.41) [64]. A meta-analysis of 174 effect sizes found peak-end r = 0.581 and near-zero duration effects; the peak-end combination predicted judgments about as well as the plain average of the experience [65]. Corrected reading: the peaks and the end matter a lot, but overall quality still matters as much.
- **Apply:**
  - UI/product: find and fix the worst moment (error recovery, payment failure, waiting); design the end of flows (confirmation screens, delivery, offboarding) with care.
  - Service/retail/packaging: the unboxing and the final interaction are memory anchors.
  - Events and campaigns: end on a strong moment.
  - Example: the 2003 colonoscopy trial is a real clinical design change based on this effect [64].
- **Limit:** Medium risk. Using a pleasant ending to mask a bad experience, or timing satisfaction surveys right after a peak to inflate scores, distorts feedback and misleads stakeholders.
- **Related:** Serial position, negativity bias, goal-gradient.

### Zeigarnik effect (and Ovsiankina effect)
- **Definition:** Zeigarnik: the claim that unfinished tasks are remembered better than finished ones. Ovsiankina: the tendency to resume interrupted tasks.
- **Evidence [E3 for Zeigarnik; E1 for Ovsiankina]:** A 2025 meta-analysis found "no memory advantage for unfinished tasks but … a general tendency to resume tasks". Across 38 publications, the ratio of recalled interrupted to completed tasks was 0.99. Resumption of interrupted tasks was 67% across 21 publications, above the 50% chance rate. The authors conclude the Zeigarnik effect "lacks universal validity" [66]. Corrected reading: incomplete states work through the urge to resume, not better memory.
- **Apply:**
  - UI/product: save drafts automatically; show "Continue where you left off"; make resuming one click.
  - Social/editorial: episodic content can invite resumption; do not count on viewers remembering cliffhangers better.
- **Limit:** Medium risk. Artificial incompleteness ("Your profile is 80% complete!" for optional data you want to collect), endless streak nags, and autoplay that exploits the urge to finish are manipulative.
- **Related:** Goal-gradient, commitment & consistency, present bias.

### Goal-gradient effect
- **Definition:** Effort increases as people get closer to a goal.
- **Evidence [E1]:** Originated in Hull's animal-learning work [67]. Café reward-card members bought coffee more often as they approached the free coffee; a 12-stamp card with 2 pre-filled "bonus" stamps was completed faster than a plain 10-stamp card (same remaining effort); and stronger acceleration predicted retention [68]. The consumer evidence rests mainly on this one multi-study paper.
- **Apply:**
  - UI/product: progress indicators on multistep forms and setup checklists that show honestly how close the user is to done.
  - Loyalty, gamification: give honest head starts (for example, credit for an action the user already took).
  - Example: the coffee-card field experiment (Kivetz, Urminsky & Zheng, 2006) [68].
- **Limit:** Medium risk. Fake progress (bars that jump to 90% and stall), invented "bonus" progress that is not real, and loyalty schemes designed to trap spending.
- **Related:** Zeigarnik/Ovsiankina, peak-end, labor illusion.

### Picture superiority effect
- **Definition:** Pictures are generally remembered better than words.
- **Evidence [E1]:** Pictures were recognized better than their verbal labels, but when pictures were visually similar the advantage disappeared at a slow presentation rate and reversed at a fast one [69]. Dual-coding theory offers one account [70]. Corrected reading: the advantage depends on the images being visually distinct.
- **Apply:**
  - UI/product: icons need distinct silhouettes; a set of near-identical outline icons loses the advantage. Pair icons with text labels.
  - Landing page/web, social: one distinct key visual per message.
  - Print/OOH: an image plus at most a few words; images must differ clearly from competitors' category imagery.
- **Limit:** Low risk. Images must have text alternatives (alt text) for accessibility.
- **Related:** Von Restorff, bizarreness, processing fluency.

### Humor effect
- **Definition:** Humorous material is remembered better than non-humorous material.
- **Evidence [E1 for the lab effect; E3 for advertising transfer]:** Humorous sentences were recalled better, but the advantage was mainly found when humorous and non-humorous items were mixed (within-subjects); it was weaker in incidental learning [71]. Corrected reading: humor helps the funny item stand out against serious ones; a uniformly funny piece may gain little memory advantage.
- **Apply:**
  - Social, OOH: use humor to make the one key point memorable, not every line.
  - UI/product: light humor in empty states or loading moments stands out against functional copy; never in errors involving money, data loss, or health.
- **Limit:** Low risk. Humor that punches down, or that undercuts serious information, harms trust.
- **Related:** Bizarreness, Von Restorff.

### Bizarreness effect
- **Definition:** Bizarre or unusual material is remembered better than ordinary material, under specific conditions.
- **Evidence [E1, mixed contexts only]:** Originally reported for bizarre imagery as a memory aid [72]. The effect is "consistently found" when bizarre and ordinary items are mixed; surprise itself had little impact, pointing to distinctiveness [60].
- **Apply:**
  - OOH/print: one unexpected element in an otherwise normal scene works; a wall of uniformly weird ads cancels out.
  - Social: in feeds full of polished content, an odd visual stands out; in feeds full of odd content, plainness may.
- **Limit:** Low risk. Shock imagery that disturbs or offends has its own ethical and platform-policy limits.
- **Related:** Von Restorff, humor effect, picture superiority.

### Negativity bias
- **Definition:** Negative events, information, and impressions have more impact than equally strong positive ones.
- **Evidence [E1, domain-dependent]:** A broad review found bad events, feedback, and impressions have stronger and longer-lasting effects, with "hardly any exceptions" [73]. Rozin & Royzman describe four forms: negative potency, steeper negative gradients, negativity dominance, and negative differentiation [74]. Both are narrative reviews, not meta-analyses.
- **Apply:**
  - UI/product: invest disproportionately in preventing errors and in recovery (clear error messages, undo); one bad moment can outweigh several good ones (see Peak-end).
  - Reviews/social: respond visibly to negative reviews; display a realistic mix rather than hiding negatives, which damages trust.
  - Public-service print/OOH: negative information captures attention, but pair the problem with a clear action.
- **Limit:** High risk. Fear appeals with no clear action, outrage bait on social, and guilt-tripping decline copy exploit negativity bias.
- **Related:** Loss aversion, peak-end, attentional bias, availability.

### Attentional bias
- **Definition:** Attention is drawn preferentially to stimuli related to a person's current concerns, most studied as anxious people's bias toward threat.
- **Evidence [E1 in anxious populations; E3 as a general-audience design lever]:** Clinically anxious people shifted attention toward threat words in the dot-probe task [75]. A meta-analysis of 172 studies found the bias in anxious individuals (d = 0.45) but "not observed in nonanxious individuals" [76]. The dot-probe has poor reliability in non-clinical samples [77, 78]. Corrected reading: the claim that ordinary audiences are reliably captured by threat cues is not supported by this literature. Goal-relevant content capturing attention is better covered by the attention and scanning research (see `attention-and-scanning.md`).
- **Apply:**
  - UI/product: put content that matches the user's current goal where they look for it (task-relevant labels, search results that echo the query).
  - Health, finance, safety: audiences who are already anxious will notice threat cues more; design calm, clear information for them.
- **Limit:** Medium risk. Exploiting anxiety (health scares, financial panic imagery) aimed at vulnerable users is manipulative.
- **Related:** Negativity bias, banner blindness, priming.

### Banner blindness
- **Definition:** Users ignore page elements that look like ads or sit where ads usually go, even when they contain useful content.
- **Evidence [E2 overall; E1 for the controlled study]:** Distinctive banners were overlooked when users searched for specific items [61]. Nielsen Norman Group eye-tracking studies found the effect persists on desktop and mobile: on one page tested with 26 participants, only 1 of 132 fixations in the content area landed on the right rail; triggers are ad-typical placement, ad-like styling such as animation, and proximity to real ads [79]. See `attention-and-scanning.md` for scanning patterns.
- **Apply:**
  - UI/product, web: never put critical content (alerts, key CTAs) in a top banner or right rail styled like an ad; avoid animation for important content; keep ads and content in separate visual sections [79].
  - Social: paid placements that look like ads are skipped; native formats perform differently (disclosure still required).
- **Limit:** Medium risk. The abuse is the reverse: disguising ads as content or navigation. The FTC's 2022 report lists disguised ads as a dark-pattern category [3].
- **Related:** Von Restorff, attentional bias.

### Priming
- **Definition:** Exposure to one stimulus changes how a later stimulus is processed. Semantic priming (faster recognition of related words) is robust; "social" or "behavioral" priming (subtle cues changing complex behavior) is not.
- **Evidence [E1 for semantic priming; E3 for social/behavioral priming]:** Words were recognized faster when preceded by an associated word [80]. Social priming has a poor replication record:
  - The "elderly words make people walk slower" finding [81] failed to replicate with automated timing and a larger sample; slower walking appeared only when experimenters expected it [82].
  - Intelligence priming: 9 experiments (N = 475) found no effect; Bayesian analysis favored the null [83].
  - Many Labs 1: flag priming and money (currency) priming did not replicate [15].
  - Kahneman, whose 2011 book popularized priming, wrote in 2012: "I see a train wreck looming" [84].
- **Apply:**
  - UI/product: consistent terminology and context make the next step faster to recognize (label the button with the word the user just read).
  - Copy: what users have just seen shapes how they read what follows; sequence information accordingly.
  - Do not expect background imagery (money, elderly people, luxury cues) to change purchasing or behavior on its own; social priming claims from vendors are not supported.
- **Limit:** Low direct risk; the main risk is overclaiming. Do not sell clients "subliminal" or "priming" effects.
- **Related:** Processing fluency, cognitive ease, framing.

---

## Social influence

### Social proof
- **Definition:** People look to what others do (descriptive norms) to decide what to do, especially when uncertain.
- **Evidence [E1 for norm feedback; E3 for the hotel-towel specifics]:** Opower Home Energy Reports, which compare a household's energy use with its neighbors', cut use by 2.0% on average across about 600,000 randomized US households (6.3% for the highest-use decile, 0.3% for the lowest) [85]. The famous hotel-towel study found a descriptive-norm sign beat a standard environmental appeal, with "guests in this room" norms working best [86]. A direct replication in two German hotels found no advantage for norm messages [87]. A Bayesian synthesis of 7 towel experiments found evidence for an effect overall [88]; a reanalysis estimated about 50% reuse in controls vs. 56% with a norm sign [89]; and a commentary argued that pooling overstated the evidence [90]. Corrected reading: real descriptive norms produce small, reliable effects; the "same room" detail is fragile.
- **Apply:**
  - UI/product: show real usage signals near the decision ("12,400 teams use this integration"); norm feedback for behavior change (energy, savings, health).
  - Landing page/web: specific, attributable testimonials and logos beat vague claims.
  - Social: real user-generated content.
  - Print/OOH: specific numbers about real behavior.
  - Example: Opower Home Energy Reports, analyzed 2011 [85].
- **Limit:** High risk. Fake reviews, fake "X people are viewing this" counters, and fabricated activity notifications are deceptive. Mathur et al. found 1,818 dark-pattern instances across about 11K shopping sites, 183 of them deceptive [4]. Never display a number you cannot substantiate.
- **Related:** Bandwagon, authority, scarcity.

### Bandwagon effect
- **Definition:** The more people appear to adopt something, the more others adopt it, regardless of its quality.
- **Evidence [E1]:** In MusicLab (14,341 participants, 48 unknown songs), showing download counts made success both more unequal and more unpredictable; the best songs rarely failed and the worst rarely succeeded, but anything else could happen [91]. A meta-analysis of 133 Asch-type conformity studies in 17 countries found conformity has declined in the US since the 1950s and is higher in collectivist countries [92, 93].
- **Apply:**
  - UI/product: "Trending" and "Most popular" sorts are self-reinforcing; mix in quality or relevance signals so early luck doesn't lock in winners.
  - Social: early engagement compounds; plan launch moments.
  - Marketplaces: give new items exposure so popularity rankings don't freeze.
  - Example: MusicLab, 2006 [91].
- **Limit:** Medium risk. Bought followers, fake engagement, and seeded popularity counts are deceptive and violate most platform policies.
- **Related:** Social proof, mere exposure, availability.

### Authority bias
- **Definition:** People defer to perceived authority and expertise.
- **Evidence [E1 for obedience to authority; E3 for design cues]:** In Milgram's study, 26 of 40 men obeyed to the maximum shock [94]. A partial replication stopping at 150 V found 70% continued past that point vs. 82.5% in Milgram's comparable condition, a non-significant difference [95]. These are lab demonstrations of obedience to an experimenter. Whether badges, certifications, and "as seen in" logos persuade is not tested by these studies; treat such claims as **[E3]** unless tested in your context.
- **Apply:**
  - UI/product, web: put real credentials (security certifications, licensed professionals, clinical review) where trust is the barrier (checkout, health information, financial advice).
  - Print/OOH: real expert endorsement, named and attributable.
- **Limit:** High risk. Fake badges, unearned seals, actors in lab coats implying medical endorsement, and "as seen in" logos for outlets that never covered you are deceptive.
- **Related:** Halo effect, social proof, representativeness.

### Scarcity effect
- **Definition:** Things that seem scarce (limited quantity or time) are valued more.
- **Evidence [E1, older evidence base]:** Cookies in scarce supply were rated more desirable; cookies that became scarce were rated above constantly scarce ones; scarcity due to demand beat scarcity due to accident [96]. A meta-analysis of commodity-theory research supports scarcity increasing value [97]. Most of the evidence is old.
- **Apply:**
  - UI/product, web: show true stock levels and true deadlines when they help decisions (event seats, limited editions).
  - Print/OOH, social: limited editions and real launch windows.
- **Limit:** High risk. Fake countdown timers, false "only 2 left", and placing sold-out items to create urgency are deceptive. The FTC's 2022 report names fake countdown timers [3]. In February 2019 the UK CMA secured commitments from Expedia, Booking.com, Agoda, Hotels.com, ebookers, and trivago not to give "a false impression of the availability or popularity of a hotel", not to rush customers, and to stop showing sold-out hotels to create urgency [98]. Mathur et al. documented such patterns at scale [4].
- **Related:** Loss aversion, social proof, present bias.

### Reciprocity
- **Definition:** People feel obliged to return favors and gifts.
- **Evidence [E1]:** In a field experiment with about 10,000 charity solicitation letters, a small gift raised donation frequency by 17% and a large gift by 75% relative to no gift [99]. Regan's classic lab study is an early demonstration [100].
- **Apply:**
  - Web/product: give genuinely useful value before asking (free tools, templates, real content without a gate).
  - Print/direct mail: a small, relevant gift; disclose any obligation.
  - Example: Falk's charity mailing field experiment (2007) [99].
- **Limit:** Medium risk. "Free gifts" that trigger hidden subscriptions, and gifts designed to make refusal feel rude, are manipulative.
- **Related:** Labor illusion (perceived effort triggers reciprocity), commitment & consistency.

### Commitment and consistency
- **Definition:** After a small commitment, people tend to act consistently with it (foot-in-the-door).
- **Evidence [E1, small and conditional]:** Foot-in-the-door was introduced by Freedman & Fraser [101]. Burger's review shows it works through several processes (self-perception, consistency, commitment) that explain both successes and failures, including cases where compliance went down [102]. The low-ball technique (commit, then raise the cost) worked only when the first decision was made with high choice [103].
- **Apply:**
  - UI/product: start onboarding with a small, voluntary, useful step; let users state their goal and reflect it back.
  - Web: progressive forms that ask the minimum first.
- **Limit:** High risk. Low-balling (raising the price after commitment, drip pricing) is a deceptive pattern. The FTC's 2023 complaint against Amazon described a Prime enrollment flow that obscured the non-Prime path and a cancellation maze known internally as "Iliad" [26]; the September 2025 settlement totaled $2.5 billion ($1B civil penalty, $1.5B refunds) and requires a clear decline button and cancellation as easy as sign-up [41].
- **Related:** Sunk cost, IKEA effect, Zeigarnik/Ovsiankina.

### Halo effect
- **Definition:** A positive impression in one area (attractiveness, warmth, visual quality) spills over into judgments of unrelated qualities.
- **Evidence [E1, moderate]:** Named by Thorndike [104]. Viewers of a warm version of an instructor rated his appearance, mannerisms, and accent as appealing, while viewers of a cold version found them irritating, and participants did not realize this influence [105]. "What is beautiful is good" [106]: a meta-analysis found the attractiveness stereotype moderate on average, strongest for social competence, near zero for integrity, and weaker when real individuating information was available [107].
- **Apply:**
  - All media: visual polish raises first impressions of competence; invest in it where first impressions decide (landing pages, pitch decks, packaging).
  - Critique: separate "looks good" from "works well" when reviewing; the halo applies to reviewers too.
- **Limit:** Medium risk. Using attractive visuals to distract from poor terms or quality. Halo fades when real information is present [107], so substance must match.
- **Related:** Aesthetic-usability effect, authority, processing fluency.

### Pratfall effect
- **Definition:** A highly competent person may become more likable after a minor blunder.
- **Evidence [E3]:** From a small 1966 study [108]; the same group's 1970 follow-up title, "To err is humanizing—sometimes", reflects boundary conditions (observer self-esteem, target competence) [109]. No modern replication was found; sample details circulate only in secondary sources.
- **Apply:** Brand voice: admitting a real, minor limitation ("We don't do X; here's who does") may build trust, but only once competence is clear. Test, do not assume.
- **Limit:** Low risk. Staged "imperfections" are inauthentic and can backfire.
- **Related:** Halo effect, negativity bias.

### Barnum effect (Forer effect) and pseudo-personalization
- **Definition:** People accept vague, general descriptions as uniquely accurate about themselves.
- **Evidence [E1]:** Demonstrated by Forer [110]; a review found acceptance depends on how relevant and favorable the profile seems and partly on the assessment format [111].
- **Apply:**
  - UI/product: personalization should use real, specific signals and be explainable ("Because you saved X").
  - Quizzes/social: personality-style quizzes engage because of this effect; be honest that results are entertainment.
- **Limit:** Medium risk. "Picked just for you" on generic content, personality quizzes used to harvest personal data, and astrology-style "insights" presented as analysis are manipulative.
- **Related:** Halo effect, confirmation bias.

---

## Perception & aesthetics

### Aesthetic-usability effect
- **Definition:** People perceive more attractive interfaces as easier to use.
- **Evidence [E1 for perceived usability; E3 for actual performance]:**
  - Kurosu & Kashimura (Hitachi, 1995): 26 people designed cash-machine (ATM) screen layouts and 252 students rated them; apparent usability correlated with beauty (r = .589) more than with most inherent-usability factors [112]. Caveat: in the same paper, a "familiarity" factor correlated even more strongly with apparent usability (.730), so beauty was not the only driver.
  - Tractinsky replicated the link in Israel with a stronger correlation (r = .92) [113], and found aesthetics, not actual usability, affected post-use usability ratings in an ATM simulation [114].
  - Counterpoint: in an MP3-player study, perceived usability changed with experience while beauty stayed stable [115]. One study found an attractive phone also produced shorter task times [116]; this performance claim rests on limited evidence.
  - NN/g notes the effect covers minor problems and can mask usability issues in testing [117].
- **Apply:**
  - UI/product: visual quality earns patience for minor friction, especially at first use.
  - Research: observe behavior, not praise; attractive prototypes get kinder verbal feedback than they deserve [117].
  - Web/print: polish matters most where first impressions decide.
- **Limit:** Medium risk. Polish used to hide real usability problems, fees, or weak substance; experience overrides it over time [115].
- **Related:** Halo effect, processing fluency.

### Processing fluency and familiarity
- **Definition:** Information that is easy to perceive, read, or pronounce feels more pleasant, familiar, and true.
- **Evidence [E1]:** Figure-ground contrast, symmetry, repetition, and prototypicality raise aesthetic pleasure through fluency [118]. Stocks with fluent (easy-to-pronounce) names outperformed in the short term in real market data [119]. A review links perceptual, conceptual, and linguistic fluency to judgments of truth, liking, and confidence [120]. Instructions in a hard-to-read font made a task seem harder and lowered motivation [121].
- **Apply:**
  - UI/product: high-contrast, legible type; conventional layouts; plain words.
  - Brand: easy-to-say names and simple marks.
  - Onboarding/instructions: hard-to-read type makes the task itself seem harder [121].
  - Print/OOH: large, simple type and high contrast (see the typography and media-specs skills).
- **Limit:** Medium risk. Fluency makes claims feel true independent of accuracy; do not use fluent presentation to dress up false or unsupported claims.
- **Related:** Cognitive ease, mere exposure, aesthetic-usability, representativeness.

### Cognitive ease and the illusory truth effect
- **Definition:** Kahneman's term for the feeling that processing is effortless, which makes things feel familiar, true, and good [122]. The illusory truth effect is its best-studied consequence: repeated statements are rated as more true.
- **Evidence [E1; the "disfluency improves thinking" claim is E3]:** Repetition increased truth ratings in the original study [123] and in a meta-analysis of 51 studies [124]. It occurs even when people know the correct answer [125]. Replication failure: the claim that hard-to-read fonts make people think harder (from [126], and repeated in Kahneman's book) failed across 16 replication attempts; disfluent fonts only slowed responses [127].
- **Apply:**
  - Brand/campaigns: repeat one true core message consistently across touchpoints.
  - Corrections/misinformation: when debunking, lead with the fact rather than repeating the myth prominently (an inference from the truth effect; test it).
  - Do not use hard-to-read typefaces to "make people pay attention" [127].
- **Limit:** High risk. Repetition makes false claims feel true even to people who know better [125]. Never repeat unsupported claims as a strategy.
- **Related:** Processing fluency, mere exposure, priming.

### Mere exposure effect
- **Definition:** Repeated exposure to a stimulus increases liking for it, up to a point.
- **Evidence [E1, inverted U]:** Introduced by Zajonc [128]; meta-analyzed by Bornstein [129]. A 2017 meta-analysis (268 curve estimates from 81 articles) found an inverted U: liking rises with exposure and then falls [130].
- **Apply:**
  - OOH/social/media planning: frequency builds familiarity, but plan creative rotation to avoid wear-out.
  - Brand systems: consistent visual assets accumulate familiarity across touchpoints.
  - UI/product: radical redesigns throw away earned familiarity; change incrementally where possible.
- **Limit:** Low risk. Overexposure annoys; the curve turns down [130].
- **Related:** Processing fluency, cognitive ease, bandwagon.

### Contrast effect and compromise effect
- **Definition:** An option is judged relative to the options around it; middle options gain (compromise effect) and options look better or worse depending on the tradeoffs in the set (tradeoff contrast).
- **Evidence [E1]:** Simonson & Tversky set out tradeoff contrast and extremeness aversion, which together explain the attraction and compromise effects [131]. See Decoy for the limits of the attraction effect in realistic displays [33].
- **Apply:**
  - Pricing: three tiers with a genuinely recommended middle; extreme options make the middle feel safer.
  - Product pages: comparisons on the same dimensions so contrast is meaningful.
  - Visual contrast for hierarchy is a perceptual principle; see the color and layout skills.
- **Limit:** Medium risk. Inflated "premium" tiers meant only to push the middle, and fake "was" prices, are manipulative.
- **Related:** Anchoring, decoy, center-stage.

---

## Value & pricing

### Endowment effect
- **Definition:** People value things more once they own them, and ask more to give something up than they would pay to get it.
- **Evidence [E1; mechanism contested]:** Willingness to accept greatly exceeded willingness to pay for mugs, and trading was well below the volume the Coase theorem predicts [132]. With training and procedures to remove misconceptions, one study found no gap [133], but an attempt to replicate that result failed: the gap persisted [134]. A large incentivized US study (4,000 adults) found the endowment effect replicates but is barely related to loss aversion [135] (working paper, not peer-reviewed).
- **Apply:**
  - UI/product: free trials with full features; customization early ("your workspace"); ownership language for things users actually own.
  - Retail: let people handle or try products.
- **Limit:** Medium risk. Trials that auto-convert to paid without a clear reminder and easy cancellation; the FTC's 2025 Amazon settlement requires disclosure of material terms and easy cancellation [41].
- **Related:** Loss aversion, IKEA effect, sunk cost.

### IKEA effect
- **Definition:** People value things more when they helped make them, provided they finished.
- **Evidence [E1, moderate]:** In four studies (IKEA boxes, origami, Lego), people valued their own creations close to experts' and expected others to agree; the effect disappeared when creations were destroyed or left unfinished [13]. A conceptual replication supports it, with psychological ownership as a mechanism [136]; it emerges around age 5 and is not explained by ownership alone [137]. No preregistered direct replication was found; the original is from Ariely's lab (see How to read this file).
- **Apply:**
  - UI/product: setup that users complete themselves (choosing a theme, building a first project) raises valuation, but only if they can finish successfully; keep setup short and achievable.
  - Campaigns/social: co-creation and customization.
  - Designers: see Designers' own biases.
- **Limit:** Medium risk. Making users do unnecessary work to create lock-in, or setup that cannot be exported.
- **Related:** Endowment, sunk cost, goal-gradient, labor illusion.

### Labor illusion
- **Definition:** People value a service more when they can see the work being done, even if it takes longer.
- **Evidence [E1]:** In five experiments (online travel and dating), people sometimes preferred sites with longer waits that showed effort over instant identical results; perceived effort triggered reciprocity [138]. Field and lab experiments in food service found that two-way operational transparency raised customer-reported quality by 22.2% and cut throughput time by 19.2% [139].
- **Apply:**
  - UI/product: during real waits, show what the system is actually doing ("Checking 42 airlines…"); show the steps a human reviewer took.
  - Service: let customers see the work (open kitchens, progress updates).
  - Example: the food-service field experiments (Buell, Kim & Tsay, 2017) [139].
- **Limit:** Medium risk. Adding artificial delays or fake progress steps to seem hard-working wastes users' time and deceives them.
- **Related:** Goal-gradient, reciprocity, peak-end.

### Zero-price effect
- **Definition:** A price of zero is not just a lower price; "free" changes choices disproportionately.
- **Evidence [E2; independent replication not verified]:** Holding the price difference constant, making the cheaper product free sharply raised its choice share; affect was the most likely explanation [140]. A later paper from the same lab attributed preference for probabilistic free promotions to other mechanisms [141]. This research pass did not verify an independent replication; the original is from Ariely's lab. Free tiers and free shipping are widespread industry practice, but evidence on the size of the effect is limited.
- **Apply:**
  - Product: a genuinely free tier or free first step.
  - Ecommerce: free shipping and free returns, stated plainly.
- **Limit:** Medium risk. "Free" offers with hidden costs, buried fees, or auto-renewing paid plans; the FTC lists buried terms and junk fees as a dark-pattern category [3].
- **Related:** Present bias, reciprocity, charm pricing.

### Charm pricing and left-digit bias
- **Definition:** People over-weight the leftmost digit of a price, so $2.99 feels much cheaper than $3.00.
- **Evidence [E1]:** The effect occurred only when the leftmost digit changed, and it held for non-price numbers too [142]. A field-experiment working paper found raising a price from $44 to $49 increased demand by up to 30% [143]. Over 22 million used-car sales showed price drops at each 10,000-mile odometer threshold [144]. Grocery scanner data (3,500 products, 25 US chains) found consumers react to a one-cent rise from a .99 price as if it were over 20 cents [145]. The bias is stronger when prices are side by side than when one is recalled [146].
- **Apply:**
  - Pricing: the effect is reported when the leftmost digit changes ($2.99 vs. $3.00) [142]; changes further right matter less (odometer prices dropped less at 1,000-mile marks than at 10,000-mile marks) [144].
  - Print/OOH: large left digits dominate quick reading.
  - Examples: used-car odometer thresholds (2012) [144]; US grocery pricing (2023) [145].
- **Limit:** Low risk. Avoid combining charm prices with drip pricing that adds fees later.
- **Related:** Anchoring, zero-price, contrast.

### Unit bias
- **Definition:** The idea that people treat one unit (one package, one serving) as the appropriate amount to consume.
- **Evidence [E3; mechanism contested]:** People took more food by weight when units were larger, and ate more with a larger serving spoon [147]. A later study found people did not stick to one unit, and splitting food into more pieces reduced intake (a "segmentation effect") [148]. Corrected reading: unit and portion size influence consumption, but "one unit = the right amount" is not established.
- **Apply:**
  - Packaging: smaller, separated portions can support moderation goals.
  - UI: default quantities and package sizes act partly as defaults (see Default effect).
- **Limit:** Low risk. Oversized "single-serve" units that encourage overconsumption.
- **Related:** Default effect, anchoring.

---

## Sources

Sources marked † were verified at the bibliographic level only (DOI record, no abstract or full text); claims attributed to them in this file are limited to what other cited sources or their abstracts state.

[1] Open Science Collaboration. (2015). *Estimating the reproducibility of psychological science*. Science, 349(6251), aac4716. https://doi.org/10.1126/science.aac4716

[2] Shu, L. L., Mazar, N., Gino, F., Ariely, D., & Bazerman, M. H. (2012). *Signing at the beginning makes ethics salient and decreases dishonest self-reports in comparison to signing at the end*. PNAS, 109(38), 15197–15200. https://doi.org/10.1073/pnas.1209746109 (retracted 13 September 2021; notice: https://doi.org/10.1073/pnas.2115397118)

[3] US Federal Trade Commission. (2022, September). *Bringing dark patterns to light* [Staff report; press release of 15 September 2022 consulted]. FTC. https://www.ftc.gov/reports/bringing-dark-patterns-light

[4] Mathur, A., Acar, G., Friedman, M. J., Lucherini, E., Mayer, J., Chetty, M., & Narayanan, A. (2019). *Dark patterns at scale: Findings from a crawl of 11K shopping websites*. Proceedings of the ACM on Human-Computer Interaction, 3(CSCW), Article 81. https://doi.org/10.1145/3359183

[5] Camerer, C., Loewenstein, G., & Weber, M. (1989). *The curse of knowledge in economic settings: An experimental analysis*. Journal of Political Economy, 97(5), 1232–1254. https://doi.org/10.1086/261651

[6] Birch, S. A. J., & Bloom, P. (2007). *The curse of knowledge in reasoning about false beliefs*. Psychological Science, 18(5), 382–386. https://doi.org/10.1111/j.1467-9280.2007.01909.x

[7] Ryskin, R. A., & Brown-Schmidt, S. (2014). *Do adults show a curse of knowledge in false-belief reasoning? A robust estimate of the true effect size*. PLoS ONE, 9(3), e92406. https://doi.org/10.1371/journal.pone.0092406

[8] Wikipedia contributors. (n.d.). *Curse of knowledge*. Wikipedia. https://en.wikipedia.org/wiki/Curse_of_knowledge (secondary source, used only to locate Newton's 1990 dissertation)

[9] † Ross, L., Greene, D., & House, P. (1977). *The "false consensus effect": An egocentric bias in social perception and attribution processes*. Journal of Experimental Social Psychology, 13(3), 279–301. https://doi.org/10.1016/0022-1031(77)90049-X

[10] † Mullen, B., Atkins, J. L., Champion, D. S., Edwards, C., Hardy, D., Story, J. E., & Vanderklok, M. (1985). *The false consensus effect: A meta-analysis of 115 hypothesis tests*. Journal of Experimental Social Psychology, 21(3), 262–283. https://doi.org/10.1016/0022-1031(85)90020-4

[11] Wason, P. C. (1960). *On the failure to eliminate hypotheses in a conceptual task*. Quarterly Journal of Experimental Psychology, 12(3), 129–140. https://doi.org/10.1080/17470216008416717

[12] Nickerson, R. S. (1998). *Confirmation bias: A ubiquitous phenomenon in many guises*. Review of General Psychology, 2(2), 175–220. https://doi.org/10.1037/1089-2680.2.2.175

[13] Norton, M. I., Mochon, D., & Ariely, D. (2012). *The IKEA effect: When labor leads to love*. Journal of Consumer Psychology, 22(3), 453–460. https://doi.org/10.1016/j.jcps.2011.08.002

[14] Tversky, A., & Kahneman, D. (1974). *Judgment under uncertainty: Heuristics and biases*. Science, 185(4157), 1124–1131. https://doi.org/10.1126/science.185.4157.1124

[15] Klein, R. A., Ratliff, K. A., Vianello, M., et al. (2014). *Investigating variation in replicability: A "Many Labs" replication project*. Social Psychology, 45(3), 142–152. https://doi.org/10.1027/1864-9335/a000178

[16] Ariely, D., Loewenstein, G., & Prelec, D. (2003). *"Coherent arbitrariness": Stable demand curves without stable preferences*. Quarterly Journal of Economics, 118(1), 73–106. https://doi.org/10.1162/00335530360535153

[17] Maniadis, Z., Tufano, F., & List, J. A. (2014). *One swallow doesn't make a summer: New evidence on anchoring effects*. American Economic Review, 104(1), 277–290. https://doi.org/10.1257/aer.104.1.277

[18] Tversky, A., & Kahneman, D. (1981). *The framing of decisions and the psychology of choice*. Science, 211(4481), 453–458. https://doi.org/10.1126/science.7455683

[19] Levin, I. P., & Gaeth, G. J. (1988). *How consumers are affected by the framing of attribute information before and after consuming the product*. Journal of Consumer Research, 15(3), 374–378. https://doi.org/10.1086/209174

[20] Ruggeri, K., et al. (2020). *Replicating patterns of prospect theory for decision under risk*. Nature Human Behaviour, 4(6), 622–633. https://doi.org/10.1038/s41562-020-0886-x

[21] Gal, D., & Rucker, D. D. (2018). *The loss of loss aversion: Will it loom larger than its gain?* Journal of Consumer Psychology, 28(3), 497–516. https://doi.org/10.1002/jcpy.1047

[22] Mrkva, K., Johnson, E. J., Gächter, S., & Herrmann, A. (2020). *Moderating loss aversion: Loss aversion has moderators, but reports of its death are greatly exaggerated*. Journal of Consumer Psychology, 30(3), 407–428. https://doi.org/10.1002/jcpy.1156

[23] Johnson, E. J., & Goldstein, D. (2003). *Do defaults save lives?* Science, 302(5649), 1338–1339. https://doi.org/10.1126/science.1091721

[24] Jachimowicz, J. M., Duncan, S., Weber, E. U., & Johnson, E. J. (2019). *When and why defaults influence decisions: A meta-analysis of default effects*. Behavioural Public Policy, 3(2), 159–186. https://ideas.repec.org/a/cup/bpubpo/v3y2019i02p159-186_00.html

[25] Samuelson, W., & Zeckhauser, R. (1988). *Status quo bias in decision making*. Journal of Risk and Uncertainty, 1(1), 7–59. https://ideas.repec.org/a/kap/jrisku/v1y1988i1p7-59.html

[26] US Federal Trade Commission. (2023, June 21). *FTC takes action against Amazon for enrolling consumers in Amazon Prime without consent and sabotaging their attempts to cancel* [Press release]. https://www.ftc.gov/news-events/news/press-releases/2023/06/ftc-takes-action-against-amazon-enrolling-consumers-amazon-prime-without-consent-sabotaging-their

[27] † Johnson, E. J., Bellman, S., & Lohse, G. L. (2002). *Defaults, framing and privacy: Why opting in-opting out*. Marketing Letters, 13(1), 5–15. https://doi.org/10.1023/A:1015044207315

[28] Utz, C., Degeling, M., Fahl, S., Schaub, F., & Holz, T. (2019). *(Un)informed consent: Studying GDPR consent notices in the field*. Proceedings of ACM CCS 2019, 973–990. https://doi.org/10.1145/3319535.3354212 (full text: https://arxiv.org/pdf/1909.02638)

[29] Nouwens, M., Liccardi, I., Veale, M., Karger, D., & Kagal, L. (2020). *Dark patterns after the GDPR: Scraping consent pop-ups and demonstrating their influence*. Proceedings of CHI 2020. https://doi.org/10.1145/3313831.3376321

[30] Court of Justice of the European Union. (2019). *Judgment of 1 October 2019, Case C-673/17 (Planet49)*, ECLI:EU:C:2019:801. EUR-Lex. https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:62017CJ0673

[31] European Data Protection Board. (2023). *Guidelines 03/2022 on deceptive design patterns in social media platform interfaces: How to recognise and avoid them* (Version 2.0, adopted 24 February 2023). EDPB. https://www.edpb.europa.eu/our-work-tools/our-documents/guidelines/guidelines-032022-deceptive-design-patterns-social-media_en

[32] Huber, J., Payne, J. W., & Puto, C. (1982). *Adding asymmetrically dominated alternatives: Violations of regularity and the similarity hypothesis*. Journal of Consumer Research, 9(1), 90–98. https://doi.org/10.1086/208899

[33] Frederick, S., Lee, L., & Baskin, E. (2014). *The limits of attraction*. Journal of Marketing Research, 51(4), 487–507. https://doi.org/10.1509/jmr.12.0061

[34] Yang, S., & Lynn, M. (2014). *More evidence challenging the robustness and usefulness of the attraction effect*. Journal of Marketing Research, 51(4), 508–513. https://doi.org/10.1509/jmr.14.0020

[35] Huber, J., Payne, J. W., & Puto, C. (2014). *Let's be honest about the attraction effect*. Journal of Marketing Research, 51(4), 520–525. https://doi.org/10.1509/jmr.14.0208

[36] Iyengar, S. S., & Lepper, M. R. (2000). *When choice is demotivating: Can one desire too much of a good thing?* Journal of Personality and Social Psychology, 79(6), 995–1006. https://doi.org/10.1037/0022-3514.79.6.995

[37] Scheibehenne, B., Greifeneder, R., & Todd, P. M. (2010). *Can there ever be too many options? A meta-analytic review of choice overload*. Journal of Consumer Research, 37(3), 409–425. https://doi.org/10.1086/651235

[38] Chernev, A., Böckenholt, U., & Goodman, J. (2015). *Choice overload: A conceptual review and meta-analysis*. Journal of Consumer Psychology, 25(2), 333–358. https://doi.org/10.1016/j.jcps.2014.08.002

[39] † Arkes, H. R., & Blumer, C. (1985). *The psychology of sunk cost*. Organizational Behavior and Human Decision Processes, 35(1), 124–140. https://doi.org/10.1016/0749-5978(85)90049-4

[40] Roth, S., Robbert, T., & Straus, L. (2015). *On the sunk-cost effect in economic decision-making: A meta-analytic review*. Business Research, 8(1), 99–138. https://doi.org/10.1007/s40685-014-0014-8

[41] US Federal Trade Commission. (2025, September 25). *FTC secures historic $2.5 billion settlement against Amazon* [Press release]. https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon

[42] Laibson, D. (1997). *Golden eggs and hyperbolic discounting*. Quarterly Journal of Economics, 112(2), 443–478. https://doi.org/10.1162/003355397555253

[43] O'Donoghue, T., & Rabin, M. (1999). *Doing it now or later*. American Economic Review, 89(1), 103–124. https://doi.org/10.1257/aer.89.1.103

[44] Augenblick, N., Niederle, M., & Sprenger, C. (2015). *Working over time: Dynamic inconsistency in real effort tasks*. Quarterly Journal of Economics, 130(3), 1067–1115. https://doi.org/10.1093/qje/qjv020

[45] Thaler, R. H., & Benartzi, S. (2004). *Save More Tomorrow: Using behavioral economics to increase employee saving*. Journal of Political Economy, 112(S1), S164–S187. https://doi.org/10.1086/380085

[46] † Tversky, A., & Kahneman, D. (1973). *Availability: A heuristic for judging frequency and probability*. Cognitive Psychology, 5(2), 207–232. https://doi.org/10.1016/0010-0285(73)90033-9

[47] Schwarz, N., Bless, H., Strack, F., Klumpp, G., Rittenauer-Schatka, H., & Simons, A. (1991). *Ease of retrieval as information: Another look at the availability heuristic*. Journal of Personality and Social Psychology, 61(2), 195–202. https://doi.org/10.1037/0022-3514.61.2.195

[48] Sedlmeier, P., Hertwig, R., & Gigerenzer, G. (1998). *Are judgments of the positional frequencies of letters systematically biased due to availability?* Journal of Experimental Psychology: Learning, Memory, and Cognition, 24(3), 754–770. https://doi.org/10.1037/0278-7393.24.3.754

[49] † Kahneman, D., & Tversky, A. (1972). *Subjective probability: A judgment of representativeness*. Cognitive Psychology, 3(3), 430–454. https://doi.org/10.1016/0010-0285(72)90016-3

[50] Tversky, A., & Kahneman, D. (1983). *Extensional versus intuitive reasoning: The conjunction fallacy in probability judgment*. Psychological Review, 90(4), 293–315. https://doi.org/10.1037/0033-295x.90.4.293

[51] Mather, M., Shafir, E., & Johnson, M. K. (2000). *Misremembrance of options past: Source monitoring and choice*. Psychological Science, 11(2), 132–138. https://doi.org/10.1111/1467-9280.00228

[52] Valenzuela, A., & Raghubir, P. (2009). *Position-based beliefs: The center-stage effect*. Journal of Consumer Psychology, 19(2), 185–196. https://doi.org/10.1016/j.jcps.2009.02.011

[53] Atalay, A. S., Bodur, H. O., & Rasolofoarison, D. (2012). *Shining in the center: Central gaze cascade effect on product choice*. Journal of Consumer Research, 39(4), 848–866. https://doi.org/10.1086/665984

[54] Kreplin, U., Thoma, V., & Rodway, P. (2014). *Looking behaviour and preference for artworks: The role of emotional valence and location*. Acta Psychologica, 152, 100–108. https://doi.org/10.1016/j.actpsy.2014.08.003

[55] Bar-Hillel, M. (2015). *Position effects in choice from simultaneous displays: A conundrum solved*. Perspectives on Psychological Science, 10(4), 419–433. https://doi.org/10.1177/1745691615588092

[56] Murdock, B. B. (1962). *The serial position effect of free recall*. Journal of Experimental Psychology, 64(5), 482–488. https://doi.org/10.1037/h0045106

[57] † Glanzer, M., & Cunitz, A. R. (1966). *Two storage mechanisms in free recall*. Journal of Verbal Learning and Verbal Behavior, 5(4), 351–360. https://doi.org/10.1016/S0022-5371(66)80044-0

[58] Tarnow, E. (2016). *First direct evidence of two stages in free recall* [Preprint]. arXiv. https://arxiv.org/pdf/1605.05685 (secondary source for the Glanzer & Cunitz design)

[59] † Hunt, R. R. (1995). *The subtlety of distinctiveness: What von Restorff really did*. Psychonomic Bulletin & Review, 2(1), 105–112. https://doi.org/10.3758/BF03214414

[60] McDaniel, M. A., Einstein, G. O., DeLosh, E. L., May, C. P., & Brady, P. (1995). *The bizarreness effect: It's not surprising, it's complex*. Journal of Experimental Psychology: Learning, Memory, and Cognition, 21(2), 422–435. https://doi.org/10.1037/0278-7393.21.2.422

[61] Benway, J. P. (1998). *Banner blindness: The irony of attention grabbing on the World Wide Web*. Proceedings of the Human Factors and Ergonomics Society Annual Meeting, 42(5), 463–467. https://doi.org/10.1177/154193129804200504

[62] Kahneman, D., Fredrickson, B. L., Schreiber, C. A., & Redelmeier, D. A. (1993). *When more pain is preferred to less: Adding a better end*. Psychological Science, 4(6), 401–405. https://doi.org/10.1111/j.1467-9280.1993.tb00589.x

[63] Redelmeier, D. A., & Kahneman, D. (1996). *Patients' memories of painful medical treatments: Real-time and retrospective evaluations of two minimally invasive procedures*. Pain, 66(1), 3–8. https://doi.org/10.1016/0304-3959(96)02994-6

[64] Redelmeier, D. A., Katz, J., & Kahneman, D. (2003). *Memories of colonoscopy: A randomized trial*. Pain, 104(1–2), 187–194. https://doi.org/10.1016/S0304-3959(03)00003-4

[65] Alaybek, B., Dalal, R. S., Fyffe, S., Aitken, J. A., Zhou, Y., Qu, X., Roman, A., & Baines, J. I. (2022). *All's well that ends (and peaks) well? A meta-analysis of the peak-end rule and duration neglect*. Organizational Behavior and Human Decision Processes, 170, 104149. https://doi.org/10.1016/j.obhdp.2022.104149

[66] Ghibellini, R., & Meier, B. (2025). *Interruption, recall and resumption: A meta-analysis of the Zeigarnik and Ovsiankina effects*. Humanities and Social Sciences Communications, 12, 962. https://doi.org/10.1057/s41599-025-05000-w

[67] † Hull, C. L. (1932). *The goal-gradient hypothesis and maze learning*. Psychological Review, 39(1), 25–43. https://doi.org/10.1037/h0072640

[68] Kivetz, R., Urminsky, O., & Zheng, Y. (2006). *The goal-gradient hypothesis resurrected: Purchase acceleration, illusionary goal progress, and customer retention*. Journal of Marketing Research, 43(1), 39–58. https://doi.org/10.1509/jmkr.43.1.39

[69] Nelson, D. L., Reed, V. S., & Walling, J. R. (1976). *Pictorial superiority effect*. Journal of Experimental Psychology: Human Learning and Memory, 2(5), 523–528. https://doi.org/10.1037/0278-7393.2.5.523

[70] † Paivio, A. (1991). *Dual coding theory: Retrospect and current status*. Canadian Journal of Psychology, 45(3), 255–287. https://doi.org/10.1037/h0084295

[71] Schmidt, S. R. (1994). *Effects of humor on sentence memory*. Journal of Experimental Psychology: Learning, Memory, and Cognition, 20(4), 953–967. https://doi.org/10.1037/0278-7393.20.4.953

[72] † McDaniel, M. A., & Einstein, G. O. (1986). *Bizarre imagery as an effective memory aid: The importance of distinctiveness*. Journal of Experimental Psychology: Learning, Memory, and Cognition, 12(1), 54–65. https://doi.org/10.1037/0278-7393.12.1.54

[73] Baumeister, R. F., Bratslavsky, E., Finkenauer, C., & Vohs, K. D. (2001). *Bad is stronger than good*. Review of General Psychology, 5(4), 323–370. https://doi.org/10.1037/1089-2680.5.4.323

[74] Rozin, P., & Royzman, E. B. (2001). *Negativity bias, negativity dominance, and contagion*. Personality and Social Psychology Review, 5(4), 296–320. https://doi.org/10.1207/S15327957PSPR0504_2

[75] MacLeod, C., Mathews, A., & Tata, P. (1986). *Attentional bias in emotional disorders*. Journal of Abnormal Psychology, 95(1), 15–20. https://doi.org/10.1037/0021-843X.95.1.15

[76] Bar-Haim, Y., Lamy, D., Pergamin, L., Bakermans-Kranenburg, M. J., & van IJzendoorn, M. H. (2007). *Threat-related attentional bias in anxious and nonanxious individuals: A meta-analytic study*. Psychological Bulletin, 133(1), 1–24. https://doi.org/10.1037/0033-2909.133.1.1

[77] Schmukle, S. C. (2005). *Unreliability of the dot probe task*. European Journal of Personality, 19(7), 595–605. https://doi.org/10.1002/per.554

[78] Rodebaugh, T. L., Scullin, R. B., Langer, J. K., Dixon, D. J., Huppert, J. D., Bernstein, A., Zvielli, A., & Lenze, E. J. (2016). *Unreliability as a threat to understanding psychopathology: The cautionary tale of attentional bias*. Journal of Abnormal Psychology, 125(6), 840–851. https://doi.org/10.1037/abn0000184

[79] Pernice, K. (2018, April 22). *Banner blindness revisited: Users dodge ads on mobile and desktop*. Nielsen Norman Group. https://www.nngroup.com/articles/banner-blindness-old-and-new-findings/

[80] Meyer, D. E., & Schvaneveldt, R. W. (1971). *Facilitation in recognizing pairs of words: Evidence of a dependence between retrieval operations*. Journal of Experimental Psychology, 90(2), 227–234. https://doi.org/10.1037/h0031564

[81] † Bargh, J. A., Chen, M., & Burrows, L. (1996). *Automaticity of social behavior: Direct effects of trait construct and stereotype activation on action*. Journal of Personality and Social Psychology, 71(2), 230–244. https://doi.org/10.1037/0022-3514.71.2.230

[82] Doyen, S., Klein, O., Pichon, C.-L., & Cleeremans, A. (2012). *Behavioral priming: It's all in the mind, but whose mind?* PLoS ONE, 7(1), e29081. https://doi.org/10.1371/journal.pone.0029081

[83] Shanks, D. R., et al. (2013). *Priming intelligent behavior: An elusive phenomenon*. PLoS ONE, 8(4), e56515. https://doi.org/10.1371/journal.pone.0056515

[84] Kahneman, D. (2012, September 26). *A proposal to deal with questions about priming effects* [Open letter]. Published by Nature. https://www.nature.com/news/polopoly_fs/7.6716.1349271308!/suppinfoFile/Kahneman%20Letter.pdf

[85] Allcott, H. (2011). *Social norms and energy conservation*. Journal of Public Economics, 95(9–10), 1082–1095. https://doi.org/10.1016/j.jpubeco.2011.03.003

[86] Goldstein, N. J., Cialdini, R. B., & Griskevicius, V. (2008). *A room with a viewpoint: Using social norms to motivate environmental conservation in hotels*. Journal of Consumer Research, 35(3), 472–482. https://doi.org/10.1086/586910

[87] Bohner, G., & Schlüter, L. E. (2014). *A room with a viewpoint revisited: Descriptive norms and hotel guests' towel reuse behavior*. PLoS ONE, 9(8), e104086. https://doi.org/10.1371/journal.pone.0104086

[88] Scheibehenne, B., Jamil, T., & Wagenmakers, E.-J. (2016). *Bayesian evidence synthesis can reconcile seemingly inconsistent results: The case of hotel towel reuse*. Psychological Science, 27(7), 1043–1046. https://doi.org/10.1177/0956797616644081

[89] van der Linden, S., & Chryst, B. (2017). *No need for Bayes factors: A fully Bayesian evidence synthesis*. Frontiers in Applied Mathematics and Statistics, 3. https://doi.org/10.3389/fams.2017.00012

[90] † Carlsson, R., Schimmack, U., Williams, D. R., & Bürkner, P.-C. (2017). *Bayes factors from pooled data are no substitute for Bayesian meta-analysis: Commentary on Scheibehenne, Jamil, and Wagenmakers (2016)*. Psychological Science, 28(11), 1694–1697. https://doi.org/10.1177/0956797616684682

[91] Salganik, M. J., Dodds, P. S., & Watts, D. J. (2006). *Experimental study of inequality and unpredictability in an artificial cultural market*. Science, 311(5762), 854–856. https://doi.org/10.1126/science.1121066

[92] Bond, R., & Smith, P. B. (1996). *Culture and conformity: A meta-analysis of studies using Asch's (1952b, 1956) line judgment task*. Psychological Bulletin, 119(1), 111–137. https://doi.org/10.1037/0033-2909.119.1.111

[93] † Asch, S. E. (1956). *Studies of independence and conformity: I. A minority of one against a unanimous majority*. Psychological Monographs, 70(9), 1–70. https://doi.org/10.1037/h0093718

[94] Milgram, S. (1963). *Behavioral study of obedience*. Journal of Abnormal and Social Psychology, 67(4), 371–378. https://doi.org/10.1037/h0040525

[95] Burger, J. M. (2009). *Replicating Milgram: Would people still obey today?* American Psychologist, 64(1), 1–11. https://doi.org/10.1037/a0010932

[96] Worchel, S., Lee, J., & Adewole, A. (1975). *Effects of supply and demand on ratings of object value*. Journal of Personality and Social Psychology, 32(5), 906–914. https://doi.org/10.1037/0022-3514.32.5.906

[97] Lynn, M. (1991). *Scarcity effects on value: A quantitative review of the commodity theory literature*. Psychology & Marketing, 8(1), 43–57. https://doi.org/10.1002/mar.4220080105

[98] UK Competition and Markets Authority. (2019, February 6). *Hotel booking sites to make major changes after CMA probe* [Press release]. GOV.UK. https://www.gov.uk/government/news/hotel-booking-sites-to-make-major-changes-after-cma-probe

[99] Falk, A. (2007). *Gift exchange in the field*. Econometrica, 75(5), 1501–1511. https://doi.org/10.1111/j.1468-0262.2007.00800.x

[100] † Regan, D. T. (1971). *Effects of a favor and liking on compliance*. Journal of Experimental Social Psychology, 7(6), 627–639. https://doi.org/10.1016/0022-1031(71)90025-4

[101] † Freedman, J. L., & Fraser, S. C. (1966). *Compliance without pressure: The foot-in-the-door technique*. Journal of Personality and Social Psychology, 4(2), 195–202. https://doi.org/10.1037/h0023552

[102] Burger, J. M. (1999). *The foot-in-the-door compliance procedure: A multiple-process analysis and review*. Personality and Social Psychology Review, 3(4), 303–325. https://doi.org/10.1207/s15327957pspr0304_2

[103] Cialdini, R. B., Cacioppo, J. T., Bassett, R., & Miller, J. A. (1978). *Low-ball procedure for producing compliance: Commitment then cost*. Journal of Personality and Social Psychology, 36(5), 463–476. https://doi.org/10.1037/0022-3514.36.5.463

[104] † Thorndike, E. L. (1920). *A constant error in psychological ratings*. Journal of Applied Psychology, 4(1), 25–29. https://doi.org/10.1037/h0071663

[105] Nisbett, R. E., & Wilson, T. D. (1977). *The halo effect: Evidence for unconscious alteration of judgments*. Journal of Personality and Social Psychology, 35(4), 250–256. https://doi.org/10.1037/0022-3514.35.4.250

[106] Dion, K., Berscheid, E., & Walster, E. (1972). *What is beautiful is good*. Journal of Personality and Social Psychology, 24(3), 285–290. https://doi.org/10.1037/h0033731

[107] Eagly, A. H., Ashmore, R. D., Makhijani, M. G., & Longo, L. C. (1991). *What is beautiful is good, but...: A meta-analytic review of research on the physical attractiveness stereotype*. Psychological Bulletin, 110(1), 109–128. https://doi.org/10.1037/0033-2909.110.1.109

[108] † Aronson, E., Willerman, B., & Floyd, J. (1966). *The effect of a pratfall on increasing interpersonal attractiveness*. Psychonomic Science, 4(6), 227–228. https://doi.org/10.3758/BF03342263

[109] † Helmreich, R., Aronson, E., & LeFan, J. (1970). *To err is humanizing—sometimes: Effects of self-esteem, competence, and a pratfall on interpersonal attraction*. Journal of Personality and Social Psychology, 16(2), 259–264. https://doi.org/10.1037/h0029848

[110] † Forer, B. R. (1949). *The fallacy of personal validation: A classroom demonstration of gullibility*. Journal of Abnormal and Social Psychology, 44(1), 118–123. https://doi.org/10.1037/h0059240

[111] Dickson, D. H., & Kelly, I. W. (1985). *The "Barnum effect" in personality assessment: A review of the literature*. Psychological Reports, 57(2), 367–382. https://doi.org/10.2466/pr0.1985.57.2.367

[112] Kurosu, M., & Kashimura, K. (1995). *Apparent usability vs. inherent usability: Experimental analysis on the determinants of the apparent usability*. CHI '95 Conference Companion, 292–293. https://doi.org/10.1145/223355.223680

[113] Tractinsky, N. (1997). *Aesthetics and apparent usability: Empirically assessing cultural and methodological issues*. Proceedings of CHI '97, 115–122. https://doi.org/10.1145/258549.258626

[114] Tractinsky, N., Katz, A. S., & Ikar, D. (2000). *What is beautiful is usable*. Interacting with Computers, 13(2), 127–145. https://doi.org/10.1016/S0953-5438(00)00031-X

[115] Hassenzahl, M. (2004). *The interplay of beauty, goodness, and usability in interactive products*. Human-Computer Interaction, 19(4), 319–349. https://doi.org/10.1207/s15327051hci1904_2

[116] Sonderegger, A., & Sauer, J. (2010). *The influence of design aesthetics in usability testing: Effects on user performance and perceived usability*. Applied Ergonomics, 41(3), 403–410. https://doi.org/10.1016/j.apergo.2009.09.002

[117] Moran, K. (2024, February 3; date as shown on the live page). *The aesthetic-usability effect*. Nielsen Norman Group. https://www.nngroup.com/articles/aesthetic-usability-effect/

[118] Reber, R., Schwarz, N., & Winkielman, P. (2004). *Processing fluency and aesthetic pleasure: Is beauty in the perceiver's processing experience?* Personality and Social Psychology Review, 8(4), 364–382. https://doi.org/10.1207/s15327957pspr0804_3

[119] Alter, A. L., & Oppenheimer, D. M. (2006). *Predicting short-term stock fluctuations by using processing fluency*. PNAS, 103(24), 9369–9372. https://doi.org/10.1073/pnas.0601071103

[120] Alter, A. L., & Oppenheimer, D. M. (2009). *Uniting the tribes of fluency to form a metacognitive nation*. Personality and Social Psychology Review, 13(3), 219–235. https://doi.org/10.1177/1088868309341564

[121] Song, H., & Schwarz, N. (2008). *If it's hard to read, it's hard to do: Processing fluency affects effort prediction and motivation*. Psychological Science, 19(10), 986–988. https://doi.org/10.1111/j.1467-9280.2008.02189.x

[122] Kahneman, D. (2011). *Thinking, fast and slow* (Part I, ch. 5, "Cognitive Ease"). Farrar, Straus and Giroux. Chapter content checked via secondary summary: https://www.litcharts.com/lit/thinking-fast-and-slow/part-1-chapter-5

[123] Hasher, L., Goldstein, D., & Toppino, T. (1977). *Frequency and the conference of referential validity*. Journal of Verbal Learning and Verbal Behavior, 16(1), 107–112. https://doi.org/10.1016/S0022-5371(77)80012-1

[124] Dechêne, A., Stahl, C., Hansen, J., & Wänke, M. (2010). *The truth about the truth: A meta-analytic review of the truth effect*. Personality and Social Psychology Review, 14(2), 238–257. https://doi.org/10.1177/1088868309352251

[125] Fazio, L. K., Brashier, N. M., Payne, B. K., & Marsh, E. J. (2015). *Knowledge does not protect against illusory truth*. Journal of Experimental Psychology: General, 144(5), 993–1002. https://doi.org/10.1037/xge0000098

[126] Alter, A. L., Oppenheimer, D. M., Epley, N., & Eyre, R. N. (2007). *Overcoming intuition: Metacognitive difficulty activates analytic reasoning*. Journal of Experimental Psychology: General, 136(4), 569–576. https://doi.org/10.1037/0096-3445.136.4.569

[127] Meyer, A., Frederick, S., Burnham, T. C., Guevara Pinto, J. D., Boyer, T. W., Ball, L. J., Pennycook, G., Ackerman, R., Thompson, V. A., & Schuldt, J. P. (2015). *Disfluent fonts don't help people solve math problems*. Journal of Experimental Psychology: General, 144(2), e16–e30. https://doi.org/10.1037/xge0000049

[128] Zajonc, R. B. (1968). *Attitudinal effects of mere exposure*. Journal of Personality and Social Psychology, 9(2, Pt. 2), 1–27. https://doi.org/10.1037/h0025848

[129] Bornstein, R. F. (1989). *Exposure and affect: Overview and meta-analysis of research, 1968–1987*. Psychological Bulletin, 106(2), 265–289. https://doi.org/10.1037/0033-2909.106.2.265

[130] Montoya, R. M., Horton, R. S., Vevea, J. L., Citkowicz, M., & Lauber, E. A. (2017). *A re-examination of the mere exposure effect: The influence of repeated exposure on recognition, familiarity, and liking*. Psychological Bulletin, 143(5), 459–498. https://doi.org/10.1037/bul0000085

[131] Simonson, I., & Tversky, A. (1992). *Choice in context: Tradeoff contrast and extremeness aversion*. Journal of Marketing Research, 29(3), 281–295. https://doi.org/10.1177/002224379202900301

[132] Kahneman, D., Knetsch, J. L., & Thaler, R. H. (1990). *Experimental tests of the endowment effect and the Coase theorem*. Journal of Political Economy, 98(6), 1325–1348. https://doi.org/10.1086/261737

[133] Plott, C. R., & Zeiler, K. (2005). *The willingness to pay–willingness to accept gap, the "endowment effect," subject misconceptions, and experimental procedures for eliciting valuations*. American Economic Review, 95(3), 530–545. https://www.jstor.org/stable/29783698

[134] Fehr, D., Hakimov, R., & Kübler, D. (2015). *The willingness to pay–willingness to accept gap: A failed replication of Plott and Zeiler*. European Economic Review, 78, 120–128. https://doi.org/10.1016/j.euroecorev.2015.05.006

[135] Chapman, J., Dean, M., Ortoleva, P., Snowberg, E., & Camerer, C. (2023). *Willingness to accept, willingness to pay, and loss aversion* (NBER Working Paper 30836; not peer-reviewed). https://www.nber.org/papers/w30836

[136] Sarstedt, M., Neubert, D., & Barth, K. (2017). *The IKEA effect: A conceptual replication*. Journal of Marketing Behavior, 2(4), 307–312. https://doi.org/10.1561/107.00000039

[137] Marsh, L. E., Kanngiesser, P., & Hood, B. (2018). *When and how does labour lead to love? The ontogeny and mechanisms of the IKEA effect*. Cognition, 170, 245–253. https://doi.org/10.1016/j.cognition.2017.10.012

[138] Buell, R. W., & Norton, M. I. (2011). *The labor illusion: How operational transparency increases perceived value*. Management Science, 57(9), 1564–1579. https://doi.org/10.1287/mnsc.1110.1376

[139] Buell, R. W., Kim, T., & Tsay, C.-J. (2017). *Creating reciprocal value through operational transparency*. Management Science, 63(6), 1673–1695. https://doi.org/10.1287/mnsc.2015.2411

[140] Shampanier, K., Mazar, N., & Ariely, D. (2007). *Zero as a special price: The true value of free products*. Marketing Science, 26(6), 742–757. https://doi.org/10.1287/mksc.1060.0254

[141] Mazar, N., Shampanier, K., & Ariely, D. (2017). *When retailing and Las Vegas meet: Probabilistic free price promotions*. Management Science, 63(1), 250–266. https://doi.org/10.1287/mnsc.2015.2328

[142] Thomas, M., & Morwitz, V. (2005). *Penny wise and pound foolish: The left-digit effect in price cognition*. Journal of Consumer Research, 32(1), 54–64. https://doi.org/10.1086/429600

[143] Anderson, E. T., & Simester, D. I. (2000). *Why stores may sell more at $49 than at $44* [Working paper; abstract consulted]. SSRN. https://doi.org/10.2139/ssrn.232542 (published as: Anderson & Simester (2003). Effects of $9 price endings on retail sales: Evidence from field experiments. Quantitative Marketing and Economics, 1(1), 93–110. https://doi.org/10.1023/A:1023581927405 †)

[144] Lacetera, N., Pope, D. G., & Sydnor, J. R. (2012). *Heuristic thinking and limited attention in the car market*. American Economic Review, 102(5), 2206–2236. https://doi.org/10.1257/aer.102.5.2206

[145] Strulov-Shlain, A. (2023). *More than a penny's worth: Left-digit bias and firm pricing*. Review of Economic Studies, 90(5), 2612–2645. https://doi.org/10.1093/restud/rdac082

[146] Sokolova, T., Seenivasan, S., & Thomas, M. (2020). *The left-digit bias: When and why are consumers penny wise and pound foolish?* Journal of Marketing Research, 57(4), 771–788. https://doi.org/10.1177/0022243720932532

[147] Geier, A. B., Rozin, P., & Doros, G. (2006). *Unit bias: A new heuristic that helps explain the effect of portion size on food intake*. Psychological Science, 17(6), 521–525. https://doi.org/10.1111/j.1467-9280.2006.01738.x

[148] Kerameas, K., Vartanian, L. R., Herman, C. P., & Polivy, J. (2015). *The effect of portion size and unit size on food intake: Unit bias or segmentation effect?* Health Psychology, 34(6), 670–676. https://doi.org/10.1037/hea0000160
