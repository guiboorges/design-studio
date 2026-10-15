# Dark Patterns and Design Ethics

> **Scope:** How to recognize, name, and avoid deceptive and manipulative design (dark patterns), what the research shows about their effect, where they create legal exposure (EU, US federal, California, Brazil), and the ethics checks agents run before shipping persuasive work.
> **Last verified:** 2026-10 (all legal and enforcement facts below were checked in October 2026 unless a different month is given next to them).
> **Used by:** behavioral-psychologist, ux-writer, ui-designer, design-critic, creative-director, brand-strategist, social-media-designer, print-ooh-designer

**Not legal advice.** This file summarizes laws and enforcement so agents can flag risk early. It does not
replace review by a qualified lawyer in the relevant jurisdiction. Laws change; re-check anything marked with
a date before relying on it.

---

## 1. Decision rules (read this first)

1. **If a design only works because the user misunderstands it, it is a dark pattern.** Remove it. Do not "soften" it.
2. **Symmetry test.** The path to the user-protective choice (decline, cancel, opt out, reject cookies) must be no longer, harder, or less visible than the path to the business-preferred choice. This is now written into California regulation [26] and EU guidance [16] [24].
3. **Truth test.** Every urgency, scarcity, social-proof, price, or "free" claim must be literally true and verifiable at the moment it is shown. Fake timers and false low-stock claims are blacklisted in the EU in all circumstances [16].
4. **Effect, not intent.** Regulators judge the effect on users. California says a business's intent "is not determinative" [26]; the EU UCPD "does not require intention" [16]. "We did not mean it" is not a defense.
5. **Vulnerable audiences raise the bar.** Children, older adults, people in distress, and people with low literacy are more affected [6] [16]. Brazil bans loot boxes in games for minors and prohibits interfaces that undermine parental controls [31].
6. **When in doubt, run the checklist in Section 7** and record the result in the design rationale.

---

## 2. Definitions and evidence that dark patterns work

**Definition.** Harry Brignull coined "dark patterns" in 2010 for design practices that trick or manipulate users into choices they would not otherwise have made and that may cause harm (as summarized by the FTC) [8]. Brignull's site now uses the term **deceptive patterns** [1]. The EDPB uses "deceptive design patterns" [24]. Mathur et al.: "user interface design choices that benefit an online service by coercing, steering, or deceiving users into making unintended and potentially harmful decisions" [2]. The California definition: "a user interface designed or manipulated with the substantial effect of subverting or impairing user autonomy, decisionmaking, or choice" [25].

**Evidence of effect and prevalence.**

- **They work, and mild versions work without backlash.** In two large experiments with representative US samples, users shown *mild* dark patterns were more than twice as likely to sign up for a dubious service as controls, and *aggressive* ones almost four times as likely. Aggressive patterns produced backlash; mild ones did not. Less educated participants were significantly more susceptible to mild patterns. Hidden information, trick questions, and obstruction were the most effective; "must act now" messages did not increase purchases. Where dark patterns were used, price became nearly irrelevant to the decision [6]. **[E1]** (two large experiments by one team with US samples; generalization to other markets is plausible but less tested.)
- **Consent banners are steerable.** Removing the opt-out button from the first page of a cookie banner raised consent by 22 to 23 percentage points; showing granular controls on the first page lowered consent by 8 to 20 points. Only 11.8% of consent management platform deployments on the top 10,000 UK sites met minimal EU legal requirements [7]. **[E1]**
- **They are common.** A crawl of about 11K shopping websites found 1,818 dark-pattern instances on 1,254 sites (about 11.1%), of which 234 instances on 183 sites were outright deceptive (for example randomly generated "X people are viewing this" messages) [2] [3]. **[E1]**
- **Regulators find them too.** A January 2023 EU coordinated "sweep" of 399 online shops found 148 (about 37%) used at least one of three dark patterns: 42 fake countdown timers, 54 visual or verbal steering toward choices, 70 hidden information [17]. **[E2]**

**Apply:** When a stakeholder argues "it converts better," the research above shows that conversion gain is often the dark pattern working, not users preferring the offer [6]. Ask for evidence that the lift survives after the deceptive element is removed.

---

## 3. Taxonomies

Use the name from the taxonomy that fits the audience: Brignull's names for designers and stakeholders, regulator names (EDPB, FTC, UCPD) for legal or compliance reviews, the Gray et al. ontology for precise analysis.

### 3.1 Brignull, deceptive.design (current list, verified 2026-10)

Brignull's site lists 18 types [1]:

| # | Type | One-line description (paraphrased from [1]) |
|---|------|-----------------------------------|
| 1 | Sneaking | Key information is hidden or delayed so users enter a transaction under false pretenses. |
| 2 | Forced action | Users must do something undesirable to get what they want. |
| 3 | Hard to cancel | Signing up is easy; cancelling is made very difficult. |
| 4 | Preselection | A default is chosen in advance to steer the decision. |
| 5 | Obstruction | Barriers make a task or information hard to reach. |
| 6 | Hidden subscription | Users are enrolled in recurring charges without clear disclosure or consent. |
| 7 | Hidden costs | A low advertised price hides fees that appear only at checkout. |
| 8 | Trick wording | Confusing or misleading language leads users into an action. |
| 9 | Visual interference | Information is hidden, obscured, or disguised where users expect clarity. |
| 10 | Fake social proof | Fake reviews, testimonials, or activity inflate popularity or credibility. |
| 11 | Fake urgency | A false time limit pressures users. |
| 12 | Nagging | Repeated interruptions push users toward actions that may not serve them. |
| 13 | Fake scarcity | A false sign of limited supply or popularity pressures users. |
| 14 | Disguised ads | Ads made to look like interface elements or content. |
| 15 | Confirmshaming | Emotional manipulation (often guilt or shame in the decline option). |
| 16 | Comparison prevention | Complex pricing or hidden information makes comparison hard. |
| 17 | Addictive design | Design exploits psychological vulnerabilities to drive compulsive use. |
| 18 | Currency confusion | Real money converted to virtual currency obscures real spend. |

Older names still in circulation: "roach motel" (now Hard to cancel), "misdirection," "privacy Zuckering," "bait and switch." Brignull does not publish a hierarchy or cite sources for his types; Gray et al. note several 2023 additions to the site mirror the 2018 Gray et al. strategies [5].

### 3.2 Mathur et al. 2019, "Dark Patterns at Scale" (11K shopping sites)

Published in *Proceedings of the ACM on Human-Computer Interaction* (CSCW), vol. 3, article 81, November 2019 [2]. Automated crawl of about 53K product pages on about 11K shopping sites; 1,818 instances; 15 types in 7 categories; 22 third-party vendors that sell dark patterns as turnkey "growth" tools [2] [3].

| Category | Type | Instances found [3] | Bias the paper links it to [2] |
|----------|------|--------------------:|--------------------------|
| Sneaking | Sneak into Basket | 7 | Default effect |
| Sneaking | Hidden Costs | 5 | Sunk cost fallacy |
| Sneaking | Hidden Subscription | 14 | (not specified) |
| Urgency | Countdown Timer | 393 | Scarcity bias (category level) |
| Urgency | Limited-time Message | 88 | Scarcity bias (category level) |
| Misdirection | Confirmshaming | 169 | Framing effect, plus shame |
| Misdirection | Visual Interference | 25 | (not specified) |
| Misdirection | Trick Questions | 9 | Default and framing effects |
| Misdirection | Pressured Selling | 67 | Default, anchoring, scarcity |
| Social Proof | Activity Messages | 313 | Bandwagon effect (category level) |
| Social Proof | Testimonials of Uncertain Origin | 12 | Bandwagon effect (category level) |
| Scarcity | Low-stock Message | 632 | Scarcity: limited availability raises perceived value (category description) |
| Scarcity | High-demand Message | 47 | Scarcity: limited availability raises perceived value (category description) |
| Obstruction | Hard to Cancel | 31 | (not specified) |
| Forced Action | Forced Enrollment | 6 | (not specified) |

The paper also gives five **attributes** for judging any pattern [2]:

| Attribute | Question to ask |
|-----------|-----------------|
| Asymmetric | Does the UI put unequal weight or burden on the available choices? |
| Covert | Is the effect of the design hidden from the user? |
| Deceptive | Does it induce false beliefs by misstatement, misleading statement, or omission? |
| Hides information | Does it obscure or delay information the user needs? |
| Restrictive | Does it remove choices the user should have? |

**Apply:** Use the five attributes as a review rubric for any new pattern that is not in a catalog. One "yes" is a flag; "covert" or "deceptive" is a blocker.

### 3.3 Gray et al. 2018, "The Dark (Patterns) Side of UX Design" (CHI '18)

Built from 118 practitioner-collected examples; groups them into five **strategies** [4]:

| Strategy | Meaning |
|----------|---------|
| Nagging | Repeated, persistent interruptions that push toward an action. |
| Obstruction | Making a process harder than it needs to be. |
| Sneaking | Hiding or delaying information relevant to the decision. |
| Interface interference | Using layout or visual emphasis to privilege some actions. |
| Forced action | Requiring a behavior before access is granted. |

(Source note: summary read on deceptive.design's article page [4]; the full CHI paper was not opened in this pass.)

### 3.4 Gray, Santos, Bielova, and Mildner 2024, ontology of dark patterns (CHI '24)

Harmonizes ten academic and regulatory taxonomies into a three-level ontology with standardized definitions [5]:

- **High level (5):** Sneaking, Obstruction, Interface Interference, Forced Action, Social Engineering. Context-agnostic strategies.
- **Meso level:** the "angle of attack," for example Roach Motel, Bait and Switch, Hiding Information, Bad Defaults, Nagging (now under Forced Action), Attention Capture, Urgency, Social Proof, Scarcity or Popularity Claims.
- **Low level:** concrete UI executions, for example Sneak into Basket, Drip Pricing, Immortal Accounts, Privacy Mazes, Intermediate Currencies, Countdown Timers, Confirmshaming.

**Count caveat:** the arXiv version's abstract says 64 types, while its body says "5 high-level patterns, 25 meso-level patterns, and 35 low-level patterns—a total of 65" (and elsewhere 24 meso and 34 low) [5]. The published CHI 2024 version was not opened in this pass. Cite the structure, not an exact count.

**Apply:** Use the ontology when writing critiques or compliance notes: name the high-level strategy, the meso-level attack, and the low-level execution (for example: "Obstruction / Roach Motel / Immortal Account").

### 3.5 Regulator taxonomies

- **FTC (US), Appendix A of the 2022 staff report** [8]: Endorsements ("social proof"), Scarcity, Urgency, Obstruction, Sneaking or Information Hiding, Interface Interference, Coerced Action (FTC's term for forced action; includes nagging). Includes child-specific "parasocial relationship pressure" (using characters children trust to push in-app purchases).
- **EDPB (EU privacy), Guidelines 03/2022 v2.0, adopted 14 February 2023** [24]: 6 categories, 16 types:

| Category | Types |
|----------|-------|
| Overloading | Continuous prompting, Privacy maze, Too many options |
| Skipping | Deceptive snugness (privacy-invasive defaults), Look over there |
| Stirring | Emotional steering, Hidden in plain sight |
| Obstructing | Dead end, Longer than necessary, Misleading action |
| Fickle | Lacking hierarchy, Decontextualising, Inconsistent interface, Language discontinuity |
| Left in the dark | Conflicting information, Ambiguous wording or information |

(Version 1.0, adopted for consultation in March 2022, was titled "dark patterns"; version 2.0 uses "deceptive design patterns" [24].)

---

## 4. Master table: pattern, mechanism, exposure, alternative

"Bias" entries cite the source where the source makes the link. Entries marked *(inferred)* are this file's
reasoning, not a published finding. Even the cited links are proposed mechanisms: Mathur et al. map patterns to
biases conceptually, they did not test them experimentally [2]. Treat the bias column as **[E2]** (expert
consensus) where cited and **[E3]** where inferred; the effectiveness of dark patterns as a class is **[E1]** [6] [7]. "Legal exposure" lists the most relevant hooks, not an exhaustive or
jurisdiction-final analysis (verified 2026-10).

| Pattern | What it looks like | Which bias it exploits | Legal exposure | Ethical alternative |
|---------|--------------------|------------------------|----------------|---------------------|
| **Sneak into basket** | Insurance, donation, or "protection plan" added to cart automatically. | Default effect [2] | EU: pre-ticked boxes for extra payments prohibited under Consumer Rights Directive Art. 22 (as cited in [16]). US: FTC Act Sec. 5 deception [8]. Brazil: CDC Art. 39 III bars supplying a product or service without prior request [30]. | Offer add-ons unselected, with clear price, after the main choice. |
| **Hidden costs / drip pricing** | Low headline price; mandatory fees revealed at the last checkout step. | Sunk cost fallacy [2] | EU: drip pricing may be a misleading action or omission under UCPD [16]. US: "junk fees" named by FTC [8]. Brazil: CDC Art. 6 III right to clear price information; Art. 37 misleading by omission [30]. | Show the all-in price from the first price display; itemize below it. |
| **Hidden subscription / forced continuity** | "One-time" fee that renews; free trial that converts silently. | Default effect and inertia *(inferred)* | US: ROSCA and FTC Act; Amazon Prime settlement 2025 [12]. EU: misleading free trials and subscription traps under UCPD Arts. 6-7 [16]. | State price, renewal date, frequency, and how to cancel next to the purchase button; send a reminder before the first charge. |
| **Hard to cancel (roach motel)** | Sign up in one click; cancel by phone only, or through many retention screens. | Status quo and effort aversion *(inferred)* | EU: DSA Art. 25(3)(c) names making termination harder than subscribing [14]; UCPD guidance: unsubscribing "should be as easy as subscribing" [16]; Art. 11a CRD withdrawal button from 19 June 2026 [18]. US: Amazon "Iliad" flow, ROSCA [11] [12]. California: §7004 "easy to execute" [26]. | Cancel by the same channel used to sign up, in a comparable number of steps; one optional, skippable retention offer at most. |
| **Preselection / bad defaults** | Marketing consent or data sharing toggled on; largest bundle preselected. | Default effect; anchoring (largest preselected) [2] | EU: pre-ticked boxes are not valid consent (GDPR Recital 32 [22]; CJEU Planet49 [23]); EDPB "deceptive snugness" [24]. California: silence or inaction is not consent [26]. Brazil: consent must be explicit and specific, generic authorizations null (LGPD Art. 8 §4) [29]. | Default to the most privacy-protective and least costly option; let users opt in. |
| **Forced action / forced registration** | Must create account, accept marketing, or share contacts to continue. | Commitment and loss of progress *(inferred)* | GDPR Art. 7(4): consent is not freely given if a service is conditional on unnecessary processing [21]. California: bundled consent is impaired choice [26]. Brazil: LGPD Art. 9 §3 requires prominent notice when data processing is a condition of service [29]. | Guest checkout; ask for data only when needed and explain why. |
| **Trick wording / trick questions** | Double negatives ("Uncheck to not opt out"); swapped Yes/No order mid-flow. | Default and framing effects [2] | EU: likely misleading action or omission under UCPD Arts. 6-7 [16]. California: double negatives and inconsistent button order are named examples [26]. | Plain, positive wording; consistent button order; the label says exactly what happens. |
| **Visual interference / asymmetric choice** | Big bright "Accept all", grey text link "Manage"; decline option styled as disabled. | Salience and framing *(inferred)*; Mathur classify it asymmetric and covert [2] | EU: DSA Art. 25(3)(a) names "giving more prominence to certain choices" [14]; UCPD guidance [16]. California: "Accept All" plus "More information" is not symmetrical; a more prominent "yes" is not symmetrical [26]. | Equal visual weight for "Accept all" and "Reject all" on the same layer. Hierarchy is fine for task flow, not for consent. |
| **Confirmshaming** | "No thanks, I prefer paying full price." | Framing effect and shame [2] | EU: may be an aggressive practice (undue influence) under UCPD Art. 8 [16]. FTC lists it in its report [8]. | Neutral decline label: "No thanks" or "Not now." |
| **Fake urgency** | Countdown that resets on reload; "Sale ends tonight" every night. | Scarcity bias [2] | EU: UCPD Annex I No. 7 blacklists falsely stating limited availability; the guidance names fake timers [16]. California: false-urgency countdown next to a consent choice is misleading [26]. | Only show real deadlines; show the actual end date and time. |
| **Fake scarcity** | "Only 2 left!" when stock is ample. | Scarcity bias [2] | EU: UCPD Annex I No. 7 and No. 18 (false market conditions) [16]. US: FTC "False Low Stock Message" [8]. | Show stock only from real inventory data, or not at all. |
| **Fake social proof** | Randomly generated "Anna from Lisbon just bought this"; reused testimonials. | Bandwagon effect [2] | US: FTC "False Activity Messages," deceptive testimonials and undisclosed paid endorsements [8]. EU: misleading action under UCPD [16]. | Real, attributable reviews; disclose incentives and paid endorsements. |
| **Disguised ads** | Ads styled as search results, editorial articles, or UI buttons. | Learned interface expectations *(inferred)* | EU: DSA Art. 26 requires ads on platforms to be identifiable as ads "in real time" [14]. US: FTC lists disguised ads first in its report [8] [9]. Brazil: CDC Art. 37 misleading advertising [30]. | Clear "Ad" or "Sponsored" label and visual separation from content. |
| **Nagging** | Repeated "Turn on notifications?" after the user said no. | Attrition: repetition until the user gives in *(inferred)* | EU: DSA Art. 25(3)(b) names repeatedly requesting a choice already made [14]; UCPD Annex I No. 26 persistent unwanted solicitation [16]; EDPB "continuous prompting" [24]. | Ask once at a relevant moment; respect "no" for a stated period; put the setting where users can find it. |
| **Comparison prevention** | Plans priced per different units; key terms behind tooltips. | Cognitive load *(inferred)* | US: LendingClub fees hidden behind tooltips, cited by FTC [9]. EU: misleading omission under UCPD [16]. | Comparable units, one comparison table, all terms visible. |
| **Currency confusion** | Gems or coins sold in bundles that never match item prices. | Obscured true cost; Gray et al. "Intermediate Currencies" hide the real cost [5] | US: Epic Games (Fortnite) $245M refunds for dark patterns and billing practices [10]. Brazil: loot boxes banned for minors from 17 Mar 2026 [31]. | Show real-money price next to virtual price; sell exact amounts. |
| **Addictive design / attention capture** | Infinite scroll, autoplay, variable rewards, streak pressure. | Variable-ratio reinforcement and loss aversion *(inferred)* | EU: UCPD covers practices that capture attention and lead to transactional decisions such as continuing to scroll [16]; addictive design is a named target of the planned Digital Fairness Act [19]. | Natural stopping points, time-spent controls, autoplay off by default for minors. |
| **Privacy maze / consent obstruction** | Reject option buried three screens deep; settings spread across pages. | Effort aversion *(inferred)* | GDPR Art. 7(3): withdrawing consent must be as easy as giving it [21]; EDPB "privacy maze," "longer than necessary" [24]; California "symmetry in choice" [26]; Honda paid $632,500 to CPPA (2025) for asymmetric privacy choices [27]. Brazil: revocation by "free and facilitated" procedure (LGPD Art. 8 §5) [29]. | One-click reject on the first layer; a single privacy hub. |
| **Bait and switch** | Advertised product "unavailable," a pricier one pushed instead. | Anchoring and commitment *(inferred)* | EU: UCPD Annex I Nos. 5 and 6 blacklist [16]. | Advertise only what you can supply at the stated price. |

---

## 5. Regulation (verified 2026-10)

### 5.1 European Union

**Digital Services Act (Regulation (EU) 2022/2065), Article 25** [14]. Applies from 17 February 2024, directly applicable in all member states.

> "Providers of online platforms shall not design, organise or operate their online interfaces in a way that deceives or manipulates the recipients of their service or in a way that otherwise materially distorts or impairs the ability of the recipients of their service to make free and informed decisions." (Art. 25(1))

- Art. 25(2): does not apply to practices already covered by the UCPD (Directive 2005/29/EC) or the GDPR. So Art. 25 is a gap-filler for online platforms; commercial practices toward consumers fall mainly under the UCPD, and personal-data consent under the GDPR.
- Art. 25(3): the Commission may issue guidelines on (a) giving more prominence to certain choices, (b) repeatedly requesting a choice already made, (c) making termination harder than subscribing.
- Recital 67 describes dark patterns as practices that "materially distort or impair, either on purpose or in effect" users' autonomous choices.
- Penalties: member states must cap fines at 6% of annual worldwide turnover (Art. 52(3)).
- **First DSA non-compliance decision (5 December 2025):** the Commission fined X EUR 120 million. One of three breaches was that X's paid "verified" blue checkmark deceives users, because anyone can pay for it without meaningful verification; the Commission framed this under the DSA's prohibition of deceptive design [15].

**Unfair Commercial Practices Directive (2005/29/EC) and the 2021 Commission guidance notice (OJ C 526, 29.12.2021), section 4.2.7 "Data-driven practices and dark patterns"** [16]. Key points:

- "Dark pattern" has no legal definition in the UCPD, but any B2C practice that materially distorts the behavior of an average or vulnerable consumer can breach professional diligence (Art. 5), be misleading (Arts. 6-7), or aggressive (Arts. 8-9).
- "The UCPD does not require intention for the deployment of the dark pattern."
- Professional diligence in interface design "may include principles derived from international standards and codes of conduct for ethical design."
- Named examples: one button visible and another hidden, long versus short paths, trick questions, double negatives (misleading); confirmshaming (possibly aggressive); yes/no buttons swapped mid-flow.
- Blacklisted in all circumstances (Annex I): bait and switch (Nos. 5, 6); false limited-time claims, including fake timers and limited stock claims (No. 7); false market conditions (No. 18); false prizes and "free" (Nos. 19, 20, 31); nagging as persistent unwanted solicitation (No. 26).
- Subscriptions: "unsubscribing from a service should be as easy as subscribing."
- The UCPD covers attention capture that leads to transactional decisions, such as continuing to scroll a feed.

**Consumer Rights Directive, withdrawal button.** Directive (EU) 2023/2673 adds Art. 11a to the Consumer Rights Directive: from **19 June 2026**, traders selling at a distance through websites or apps must provide a prominent, easy-to-reach electronic "withdrawal function" for the whole withdrawal period, labeled "withdraw from contract here" or an unambiguous equivalent, followed by a "confirm withdrawal" step and an acknowledgment on a durable medium (secondary source; the Official Journal text could not be opened in this pass) [18].

**GDPR consent.** Consent must be given by "a clear affirmative act"; "Silence, pre-ticked boxes or inactivity should not therefore constitute consent" (Recital 32) [22]. "It shall be as easy to withdraw as to give consent" (Art. 7(3)); consent conditional on unnecessary processing is suspect (Art. 7(4)) [21]. The CJEU's Planet49 judgment (C-673/17, 1 October 2019) held that cookie consent is not validly given through a pre-checked checkbox the user must deselect [23]. The **EDPB Guidelines 03/2022** (v2.0, 14 February 2023) catalogue 16 deceptive design pattern types in social media interfaces that can breach the GDPR (table in 3.5) [24].

**Digital Fairness Act (pending).** The Commission consulted from 17 July to 24 October 2025 on a Digital Fairness Act addressing deceptive or manipulative interface design, addictive design, misleading influencer marketing, unfair personalization, and protection of minors [19]. In May 2026 Commissioner McGrath said he would propose it before the end of 2026 [20]. No proposal text was located in this research pass (2026-10). Re-check status before citing.

**Portugal and other member states.** The DSA and GDPR apply directly in Portugal as in every member state [14]. The UCPD and CRD apply through national transposition laws; the Portuguese transposing acts were not verified in this pass [unverified]. Enforcement is by national authorities (consumer and data protection) plus the Commission for very large platforms under the DSA.

### 5.2 United States (federal)

- **FTC staff report "Bringing Dark Patterns to Light" (September 2022)** [8] [9]. Four headline concerns: misleading consumers and disguising ads; making it hard to cancel; burying key terms and junk fees; tricking consumers into sharing data. Examples cited: ABCmouse cancellation, LendingClub fees hidden behind tooltips, Vizio default data collection.
- **Epic Games (Fortnite), 19 December 2022** [10]: USD 520 million total, of which USD 275 million civil penalty for COPPA violations and USD 245 million in refunds for dark patterns and billing practices. The FTC described the button configuration as "counterintuitive, inconsistent, and confusing": single presses triggered purchases (including when waking the game from sleep), children could buy V-Bucks without cardholder approval, and accounts were locked after chargeback disputes.
- **Amazon Prime.** Complaint announced 21 June 2023 under the FTC Act and the Restore Online Shoppers' Confidence Act (ROSCA), alleging Amazon enrolled consumers without consent and designed a cancellation process ("Iliad") whose "primary purpose ... was not to enable subscribers to cancel, but to stop them" [11]. **Settlement announced 25 September 2025:** USD 1 billion civil penalty plus USD 1.5 billion in redress for an estimated 35 million consumers; Amazon must show a clear and conspicuous button to decline Prime (wording such as "No, I don't want Free Shipping" is no longer allowed), disclose cost, renewal, and cancellation terms during enrollment, and allow cancellation by the same method used to sign up [12]. The stipulated order takes effect when the district court approves it; approval status was not confirmed in this pass.
- **"Click-to-cancel" rule vacated.** The FTC's amended Negative Option Rule (October 2024) was vacated in full by the US Court of Appeals for the Eighth Circuit on 8 July 2025 for failing a procedural requirement of the FTC Act [13]. ROSCA and Section 5 of the FTC Act still apply, as the Amazon settlement shows. Any later re-proposal of the rule was not verified [unverified].

### 5.3 California (CCPA as amended by the CPRA)

- **Definitions** (Civ. Code §1798.140) [25]: "Dark pattern" means "a user interface designed or manipulated with the substantial effect of subverting or impairing user autonomy, decisionmaking, or choice, as further defined by regulation." Under "Consent": "agreement obtained through use of dark patterns does not constitute consent"; hovering, muting, pausing, or closing content is not consent.
- **Regulations §7004 (effective text 1 January 2026)** [26]. Methods for privacy requests and consent must be: (1) easy to understand; (2) **symmetrical in choice** (the privacy-protective path cannot be longer or harder; "Yes" plus "Ask me later" is not symmetrical; "Accept All" plus "Preferences" is not symmetrical; a more prominent "yes" is not symmetrical); (3) free of confusing language or elements (no double negatives; unclear on/off toggles and inconsistent button order are named); (4) free of choice architecture that impairs choice (false-urgency countdowns, bundled consent, disruptive screens before opting out); (5) easy to execute. Consent obtained through a dark pattern is treated as never obtained. Intent "is not determinative": an interface the business knows has the effect and does not fix is still a dark pattern.
- **Enforcement:** CPPA enforcement advisory (September 2024): "Dark patterns aren't about intent, they're about effect" [28]. American Honda settled for USD 632,500 (March 2025), partly because its privacy management tool "failed to offer Californians their privacy choices in a symmetrical or equal way" [27].

### 5.4 Brazil

- **LGPD (Lei 13.709/2018)** [29]. Consent is a "free, informed and unambiguous" expression for a specific purpose (Art. 5 XII). Processing under defective consent (*vício de consentimento*) is prohibited (Art. 8 §3); generic authorizations are void (Art. 8 §4); revocation must be by a "free and facilitated" procedure (Art. 8 §5). **Art. 9 §1:** where consent is required, it is void if the information given was misleading or abusive, or was not presented beforehand with transparency, clearly and unambiguously. Children's data requires specific, prominent parental consent, and games and apps may not condition participation on collecting more data than strictly necessary (Art. 14).
- **Consumer Defense Code (CDC, Lei 8.078/1990)** [30]. Right to adequate, clear information including price (Art. 6 III); protection against coercive or unfair commercial methods (Art. 6 IV); misleading advertising includes omission of essential data (Art. 37 §§1, 3), and advertising that exploits a child's lack of judgment is abusive (Art. 37 §2); abusive practices include supplying unrequested products or services (Art. 39 III) and exploiting the consumer's weakness or ignorance due to age, health, knowledge, or social condition (Art. 39 IV). These provisions predate the term "dark patterns" but map directly onto sneak-into-basket, hidden costs, and exploitation of vulnerable users. The mapping is this file's analysis, not a cited ruling.
- **Digital Statute of Children and Adolescents (ECA Digital, Lei 15.211/2025)** [31], in force 17 March 2026: Art. 18 §2 forbids designing, modifying, or manipulating interfaces "with the objective or effect of compromising the autonomy, decision-making or choice of the user," especially to weaken parental supervision tools; Art. 20 bans loot boxes in games aimed at or likely accessed by children and adolescents.

**Apply (all jurisdictions):** Design to the strictest rule you ship into. In practice: equal-weight accept and reject on the first consent layer, all-in prices up front, cancellation as easy as sign-up through the same channel, no preselected paid add-ons or consents, and only verifiable urgency, scarcity, and social proof.

---

## 6. Persuasion versus manipulation: where the line is

Persuasion is legitimate; the persuasion-and-behavior reference covers how to do it well. A technique crosses into a dark pattern when one or more of these is true:

| Test | Legitimate persuasion | Dark pattern |
|------|----------------------|--------------|
| Truth | Claim is true (real deadline, real stock, real reviews). | Claim is false or unverifiable [16]. |
| Transparency | Works even if the user notices it. | Works only if the user does not notice it (covert) [2]. |
| Symmetry | Declining is as easy as accepting. | The protective choice is longer, smaller, or hidden [26]. |
| Interest alignment | Outcome is one the user would endorse on reflection. | Outcome is one users regret or would refuse if informed [6]. |
| Vulnerability | Neutral across audiences. | Targets known vulnerabilities (age, distress, debt, gambling history) [16]. |

The EU guidance puts the distinction this way: data-driven personalization, continuous A/B testing, and opacity are what separate "highly persuasive advertising or sales techniques" from practices that "may be manipulative and, hence, unfair" [16].

**Apply:** Urgency, scarcity, social proof, defaults, and framing are all allowed **when true and symmetric**. A real end date, real stock levels, and real reviews are fine. A default that serves the user (for example, accessibility features on, or the cheapest adequate plan selected) is fine.
**Limit:** Never A/B test a variant that would fail the truth or symmetry test. A winning test does not make a deceptive variant acceptable; it measures how well the deception works [6].

---

## 7. Design ethics checklist (run before shipping persuasive work)

Agents must run this on any UI flow, landing page, ad, email, social post, or OOH piece that asks someone to buy, sign up, consent, share data, or stay. Record pass/fail and fixes in the deliverable notes. Any **fail** on items 1-8 blocks shipping until fixed.

**Truth and disclosure**
1. Every urgency, scarcity, popularity, savings, and "free" claim is true now and backed by real data (not random or hard-coded).
2. The total price (including mandatory fees) appears at the first price display, and recurring charges state amount, frequency, renewal date, and how to cancel next to the commit button.
3. Ads, sponsored placements, affiliate links, and paid endorsements are labeled as such.

**Choice and symmetry**
4. Accept and decline (or subscribe and cancel, opt in and opt out) have equal visual weight, equal step count, and sit on the same layer.
5. No preselected paid add-ons, consents, or data-sharing toggles. Defaults favor the user.
6. Cancellation and consent withdrawal work through the same channel used to sign up, without forced calls, chats, or more than one optional retention offer.
7. A "no" is respected: no repeated prompts for a choice already made within a reasonable period.

**Language**
8. Labels say exactly what happens. No double negatives, no confirmshaming, no swapped button order, no guilt or fear in decline options.

**Audience**
9. If children, teens, older adults, or users in financial or emotional distress are likely in the audience, remove pressure tactics entirely and apply the stricter rules (COPPA, LGPD Art. 14, ECA Digital, UCPD vulnerable-consumer standard).
10. Comprehension check: a user with low literacy or on a small screen can tell what they are agreeing to and what it costs.

**Data and attention**
11. Data requested is necessary for the task, and the reason is shown at the moment of asking.
12. Engagement features (infinite scroll, autoplay, streaks, notifications) have stopping points and user controls; autoplay and push notifications are off by default for minors.

**Final questions**
13. Would this design still work if the user fully understood it? If no, it is a dark pattern.
14. Would we be comfortable if this screen were shown in a regulator's report or a news story?
15. Does the success metric measure user value (task completed, retained by choice) rather than only conversion?

**Apply by medium:**
- **UI and product:** items 2, 4-8, 11-12 are the usual failures (consent banners, checkout, cancellation, notification prompts).
- **Landing pages and email:** items 1-3, 8 (timers, "only X left," fake testimonials, guilt-trip unsubscribe links).
- **Social posts and ads:** items 1, 3, 9 (undisclosed paid partnerships, fake scarcity, targeting minors).
- **Print and OOH:** items 1-3 (fine-print prices, "from" pricing that hides mandatory fees, "free" with conditions).

---

## 8. Design ethics voices

**Mike Monteiro, *Ruined by Design* (2019).** Independently published book [32]; Mule Design's site, which sells Monteiro's *Design Is a Job*, links to it [36]. The same studio's ethics workshop teaches "ten basic tenets of working ethically" and states: "You're responsible for what you put into the world" and designers "are part of the social contract" [33]. Monteiro's "Designer's Code of Ethics" is widely cited alongside the book, but its original text could not be opened in this pass, so its publication date and exact principles are not reproduced here [unverified].
**Apply:** Use as a framing for pushback: the designer, not only the business, is accountable for a shipped dark pattern.

**Tristan Harris and the Center for Humane Technology.** Harris was a design ethicist at Google; his internal presentation "A Call to Minimize Distraction & Respect Users' Attention" launched the "Time Well Spent" movement. He co-founded the Center for Humane Technology in 2018 with Aza Raskin and Randima Fernando [34]. CHT focuses on the attention economy and engagement-maximizing design; *The Social Dilemma* is listed among its resources [34].
**Apply:** Use for addictive-design and attention-capture critiques: ask whether a metric rewards time spent or value delivered.

**Dieter Rams, "Good design is honest."** Principle 6 of Rams' ten principles of good design: "It does not make a product more innovative, powerful or valuable than it really is. It does not attempt to manipulate the consumer with promises that cannot be kept." [35]
**Apply:** Quote it in critiques of overclaiming visuals and copy (fake premium cues, inflated savings, misleading imagery).

**Limit (all three):** These are ethical positions and professional norms [E2], not empirical findings. Pair them with the research in Section 2 and the law in Section 5 when you need to persuade a stakeholder.

---

## Sources

[1] Brignull, H. (accessed 2026-10). *Types of deceptive pattern*. Deceptive Patterns (deceptive.design). https://www.deceptive.design/types
[2] Mathur, A., Acar, G., Friedman, M. J., Lucherini, E., Mayer, J., Chetty, M., & Narayanan, A. (2019). *Dark Patterns at Scale: Findings from a Crawl of 11K Shopping Websites*. Proceedings of the ACM on Human-Computer Interaction, 3(CSCW), Article 81. https://doi.org/10.1145/3359183 (full text: https://arxiv.org/abs/1907.07032)
[3] Princeton Web Transparency and Accountability Project. (2019). *Dark Patterns at Scale* (project page and data). https://webtransparency.cs.princeton.edu/dark-patterns/
[4] Gray, C. M., Kou, Y., Battles, B., Hoggatt, J., & Toombs, A. L. (2018). *The Dark (Patterns) Side of UX Design*. CHI '18, Paper 534. https://doi.org/10.1145/3173574.3174108 (summary read at https://www.deceptive.design/articles/the-dark-patterns-side-of-ux-design; secondary)
[5] Gray, C. M., Santos, C., Bielova, N., & Mildner, T. (2024). *An Ontology of Dark Patterns Knowledge: Foundations, Definitions, and a Pathway for Shared Knowledge-Building*. CHI '24. Preprint read: https://arxiv.org/abs/2309.09640
[6] Luguri, J., & Strahilevitz, L. J. (2021). *Shining a Light on Dark Patterns*. Journal of Legal Analysis, 13(1), 43-109. https://doi.org/10.1093/jla/laaa006 (abstract read via OpenAlex)
[7] Nouwens, M., Liccardi, I., Veale, M., Karger, D., & Kagal, L. (2020). *Dark Patterns after the GDPR: Scraping Consent Pop-ups and Demonstrating their Influence*. CHI '20. https://arxiv.org/abs/2001.02479
[8] US Federal Trade Commission. (2022, September). *Bringing Dark Patterns to Light* (Staff Report). https://www.ftc.gov/system/files/ftc_gov/pdf/P214800%20Dark%20Patterns%20Report%209.14.2022%20-%20FINAL.pdf
[9] US Federal Trade Commission. (2022, September 15). *FTC Report Shows Rise in Sophisticated Dark Patterns Designed to Trick and Trap Consumers* (press release). https://www.ftc.gov/news-events/news/press-releases/2022/09/ftc-report-shows-rise-sophisticated-dark-patterns-designed-trick-trap-consumers
[10] US Federal Trade Commission. (2022, December 19). *Fortnite Video Game Maker Epic Games to Pay More Than Half a Billion Dollars over FTC Allegations*. https://www.ftc.gov/news-events/news/press-releases/2022/12/fortnite-video-game-maker-epic-games-pay-more-half-billion-dollars-over-ftc-allegations
[11] US Federal Trade Commission. (2023, June 21). *FTC Takes Action Against Amazon for Enrolling Consumers in Amazon Prime Without Consent and Sabotaging Their Attempts to Cancel*. https://www.ftc.gov/news-events/news/press-releases/2023/06/ftc-takes-action-against-amazon-enrolling-consumers-amazon-prime-without-consent-sabotaging-their
[12] US Federal Trade Commission. (2025, September 25). *FTC Secures Historic $2.5 Billion Settlement Against Amazon*. https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon
[13] US Court of Appeals for the Eighth Circuit. (2025, July 8). *Custom Communications, Inc. v. Federal Trade Commission*, No. 24-3137 (consolidated). https://ecf.ca8.uscourts.gov/opndir/25/07/243137P.pdf
[14] European Parliament and Council. (2022). *Regulation (EU) 2022/2065 (Digital Services Act)*, Arts. 25, 26, 52, 93; Recital 67. EUR-Lex. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32022R2065
[15] European Commission. (2025, December 5). *Commission fines X EUR 120 million under the Digital Services Act*. https://digital-strategy.ec.europa.eu/en/news/commission-fines-x-eu120-million-under-digital-services-act
[16] European Commission. (2021). *Commission Notice: Guidance on the interpretation and application of Directive 2005/29/EC concerning unfair business-to-consumer commercial practices* (2021/C 526/01), OJ C 526, 29.12.2021, section 4.2.7. https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:52021XC1229(05)
[17] European Commission. (2023, January 30). *Consumer protection: manipulative online practices found on 148 out of 399 online shops screened* (IP/23/418). https://ec.europa.eu/commission/presscorner/detail/en/ip_23_418
[18] Alpers, C., & Staiger, C. / Hogan Lovells Cadwalader (HLC). (2026, May 4). *EU Consumer Protection Law Update: New mandatory withdrawal button – what online traders need to know* (secondary source on Directive (EU) 2023/2673). https://www.hlc.com/en/publications/eu-consumer-protection-law-update-new-mandatory-withdrawal-button-what-online-traders-need-to-know
[19] European Commission. (2025). *Commission launches open consultation on the forthcoming Digital Fairness Act*. https://digital-strategy.ec.europa.eu/en/consultations/commission-launches-open-consultation-forthcoming-digital-fairness-act
[20] Privacy Laws & Business. (2026, May 15). *EU proposal on Digital Fairness Act expected by the end of 2026* (secondary). https://www.privacylaws.com/news/eu-proposal-on-digital-fairness-act-expected-by-the-end-of-2026/
[21] Regulation (EU) 2016/679 (GDPR), Art. 7. Text read via gdpr-info.eu (secondary reproduction of the official text). https://gdpr-info.eu/art-7-gdpr/
[22] Regulation (EU) 2016/679 (GDPR), Recital 32. Text read via gdpr-info.eu (secondary reproduction). https://gdpr-info.eu/recitals/no-32/
[23] Court of Justice of the European Union. (2019, October 1). *Press Release No 125/19: Judgment in Case C-673/17 Planet49*. https://curia.europa.eu/jcms/upload/docs/application/pdf/2019-10/cp190125en.pdf
[24] European Data Protection Board. (2023). *Guidelines 03/2022 on deceptive design patterns in social media platform interfaces: how to recognise and avoid them*, Version 2.0, adopted 14 February 2023. https://www.edpb.europa.eu/system/files/2023-02/edpb_03-2022_guidelines_on_deceptive_design_patterns_in_social_media_platform_interfaces_v2_en_0.pdf
[25] California Privacy Protection Agency. (2024). *California Consumer Privacy Act of 2018* (statute text, posted August 2024), Civ. Code §1798.140(h), (l). https://cppa.ca.gov/regulations/pdf/cppa_act.pdf
[26] California Privacy Protection Agency. (2026). *California Consumer Privacy Act Regulations*, Cal. Code Regs. tit. 11, §7004 (effective 1 January 2026). https://cppa.ca.gov/regulations/pdf/ccpa_statute_eff_20260101.pdf
[27] California Privacy Protection Agency. (2025, March 12). *Honda Settles with CPPA Over Privacy Violations*. https://cppa.ca.gov/announcements/2025/20250312.html
[28] California Privacy Protection Agency. (2024, September 4). *CPPA Enforcement Advisory Stresses the Importance of Clear and Balanced Choices* (Enforcement Advisory 2024-02). https://cppa.ca.gov/announcements/2024/20240904.html
[29] Brasil. (2018). *Lei nº 13.709, de 14 de agosto de 2018 (Lei Geral de Proteção de Dados Pessoais)*, Arts. 5, 8, 9, 14. https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
[30] Brasil. (1990). *Lei nº 8.078, de 11 de setembro de 1990 (Código de Defesa do Consumidor)*, Arts. 6, 37, 39 (consolidated text). https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm
[31] Brasil. (2025). *Lei nº 15.211, de 17 de setembro de 2025 (Estatuto Digital da Criança e do Adolescente)*, Arts. 18, 20, 41-A. https://www.planalto.gov.br/ccivil_03/_ato2023-2026/2025/lei/L15211.htm
[32] Monteiro, M. (2019). *Ruined by Design*. Independently published. Bibliographic record: https://openlibrary.org/works/OL24994697W
[33] Mule Design. (accessed 2026-10). *Ethics workshop*. https://www.muledesign.com/ethics-workshop
[34] Center for Humane Technology. (accessed 2026-10). *Who we are*. https://www.humanetech.com/who-we-are
[35] Vitsoe. (accessed 2026-10). *Dieter Rams: ten principles for good design*. https://www.vitsoe.com/us/about/good-design
[36] Mule Design. (accessed 2026-10). *Home page* (links to *Design Is a Job* by Mike Monteiro and to *Ruined by Design*). https://muledesign.com/
