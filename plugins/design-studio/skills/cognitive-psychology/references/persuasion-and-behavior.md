# Persuasion and Behavior

> **Scope:** Evidence-graded models of persuasion and behavior change (Cialdini, Fogg, Hook, nudge/EAST, dual process, emotional design, narrative, AIDA, framing) and how to apply them across UI, landing pages, social, print, and out-of-home media.
> **Last verified:** 2026-10 (oldest volatile items: TikTok creative guidance, last updated 2025-06; BIT EAST page, 2024-12)
> **Used by:** behavioral-psychologist, ux-writer, ui-designer, design-critic, brand-strategist, social-media-designer, print-ooh-designer, creative-director, art-director

Read this together with `dark-patterns-and-ethics.md`. Every technique below has a manipulative twin.
The line between them is covered in the **Limit** notes and in that file's ethics checklist.

---

## How to use this file

1. **Start from the behavior.** Name the one action you want, who does it, and when. Every model here
   assumes a specific target behavior.
2. **Fix ability before motivation.** Removing friction and setting good defaults have the strongest
   evidence ([E1] for defaults). Motivational copy has weaker and more variable effects.
3. **Expect small, context-dependent effects.** When publication bias is corrected for, average
   "nudge" effects shrink sharply (see the nudge section). Treat any single technique as a hypothesis to test.
4. **Match the medium's attention budget.** A billboard gets seconds and a product gets repeated use.
   The media section maps techniques to formats.
5. **Run the ethics checklist** in `dark-patterns-and-ethics.md` before shipping persuasive work.

---

## 1. Cialdini's principles of influence

**Origin.** Robert Cialdini, *Influence: How and Why People Agree to Things* (William Morrow, 1984) [1],
later retitled *Influence: The Psychology of Persuasion*. It set out six principles. **Unity** was
introduced as a seventh in *Pre-Suasion* (2016) [4]. It was then added to *Influence, New and Expanded*
(Harper Business, May 4, 2021) [2], where it gets a 73-page chapter [3].

**Verified: 6 + 1 = 7 principles.** The 2021 edition is the first edition of *Influence* to include Unity.

| Principle | Definition (Cialdini's firm wording [5]) | Evidence | Design reading |
|---|---|---|---|
| **Reciprocity** | "people are obliged to give back to others the form of a behavior, gift, or service that they have received first" | [E1] as a social norm; [E3] for the specific percentages repeated in marketing (e.g., the restaurant mints figures [5]), which are reported by Cialdini's consulting firm, not checked here against the original study | Give real value first: a useful free tool, template, or answer before asking for an email |
| **Commitment & consistency** | "People like to be consistent with the things they have previously said or done" | [E1], with caveats. The foot-in-the-door review [10] finds several processes at work (self-perception, consistency, commitment, reactance). It also documents studies where the technique failed or *decreased* compliance | Small, voluntary first steps (save a preference, pick a goal) before a larger ask |
| **Social proof** | "Especially when they are uncertain, people will look to the actions and behaviors of others to determine their own" | [E1]. Descriptive norms beat a generic appeal in hotel field experiments, and norms tied to the most similar setting ("guests in this room") worked best [7]. **Boomerang risk:** an "average usage" norm pushed low users *up* until an injunctive (approval) cue was added [8] | Real counts, reviews, "most people like you…" |
| **Liking** | "People prefer to say yes to those that they like", via similarity, compliments, and cooperation [5] | [E2] as summarized by the firm [5]; the underlying similarity and attraction research is broad, but it is not individually verified here | Authentic voice, relatable people, shared values |
| **Authority** | "people follow the lead of credible, knowledgeable experts" | [E2]; the examples on [5] (displayed diplomas, uniforms) are firm-reported | Real credentials, named experts, certifications, standards met |
| **Scarcity** | "people want more of those things they can have less of" | [E1] for the general effect. Commodity theory holds that scarcity raises perceived value, and it was reviewed meta-analytically in 1991 [9] | Genuine limits only: real stock, real deadlines |
| **Unity** (2021) | Shared identity: "It's not liking — it's belonging" [6]. Shared identity rather than surface similarity [4] | [E2]. Strong theoretical base in in-group research, but as a named principle it is newer and less tested | Speak as "we" only when it is true. Co-creation ("ask for advice") [6] and community membership |

**Apply**
- **UI/product:** Show social proof at points of uncertainty, such as plan choice or a first purchase,
  not everywhere. Use real numbers, scoped to the user's context ("teams your size") [7].
- **Landing pages:** Testimonials with name, role, and photo; logos of real customers; credentials beside the claim they support.
- **Social:** Creator or community voice (unity), with user-generated proof.
- **Print/OOH:** Authority and social proof must fit in a glance, e.g., one award mark or one statistic.

**Limit**
- Fabricated proof (fake reviews, fake counters), fake scarcity ("only 2 left" when untrue), and fake
  urgency timers are dark patterns with legal exposure. See `dark-patterns-and-ethics.md`.
- Never publish a descriptive norm that shows the *undesired* behavior is common ("most people
  don't recycle"). It can normalize that behavior [8].
- Unity used to exploit identity (political, ethnic, religious) for unrelated selling is manipulative.

---

## 2. Fogg Behavior Model (B = MAP)

**Current formulation.** "Behavior happens when Motivation, Ability, and a Prompt come together at the
same time. When a behavior does not occur, at least one of those three elements is missing" [12].
Motivation and Ability are compensatory: "if motivation is very high, ability can be low" [13].

**Prompt vs. trigger.** The 2009 paper calls the third element "triggers" [11]. Fogg writes that he
"changed this term in late 2017. Now I use 'Prompt'" [12]. Use **Prompt** in all new work, and read
"trigger" in older sources (including Eyal's Hook model) as the same idea.

| Component | 2009 paper [11] | Current site [12][13] |
|---|---|---|
| Motivation | Three core motivators, each with two sides: pleasure/pain, hope/fear, social acceptance/rejection | "Core Motivators" |
| Ability (simplicity) | Six elements: time, money, physical effort, "brain cycles", "social deviance", "non-routine". Simplicity is a chain, and "If any single link breaks, then the chain fails" | The Ability page describes **five** factors. "Simplicity is a function of your scarcest resource at that moment" |
| Prompt (trigger) | **Spark** (motivates), **Facilitator** (makes behavior easier), **Signal** (indicates or reminds) | Facilitator, Signal, Spark. Choose by the user's motivation and ability |
| Threshold | Above the activation threshold, "a trigger will cause that person to perform the target behavior"; below it, it will not | Described as M and A converging with a prompt |

**Evidence grade:** [E2]. The model is a widely used design heuristic. The 2009 paper presents it as
a framework for analysis and design, not as an experimentally tested causal model [11].

**Apply**
- Diagnose a failed behavior by asking which of M, A, or P is missing. Most product fixes are A
  (fewer steps, less to read, fewer fields) or P (a prompt at the right moment).
- Match the prompt type to the user's state: a **Facilitator** for motivated users who lack ability
  (a prominent "Sign in" button [12]), a **Signal** for users who have both (a reminder), a **Spark**
  for able users who lack motivation.
- **UI:** Put the prompt where the ability exists, e.g., the "Add to calendar" button right after booking.
- **Social/OOH:** These media cannot raise ability much. Make the next step trivially easy (a short
  URL, a QR code, a single CTA).

**Limit**
- Raising "motivation" with fear (hope/fear) or social rejection crosses into manipulation when the threat is exaggerated.
- Prompt spam (notification floods) creates short-term behavior and long-term churn and distrust.

---

## 3. Hook model (Nir Eyal) and its critique

**Model.** *Hooked: How to Build Habit-Forming Products* (Portfolio, 2014). It is a four-phase loop [14]:

| Phase | Eyal's definition [14] |
|---|---|
| **Trigger** | "the actuator of a behavior". External (email, icon, link) at first; then **internal** (emotions, routines) |
| **Action** | Make the action "as easy as possible, while simultaneously boosting the user's motivation" (taken from Fogg) |
| **Variable reward** | Unpredictable rewards "create wanting in the user". Slot machines and lotteries are the stated archetypes |
| **Investment** | The user gives "time, data, effort, social capital or money", which loads the next trigger |

**Eyal's own ethics test: the Manipulation Matrix (2012)** [15]. It asks two questions: "Will I use the
product myself?" and "Will the product help users materially improve their lives?"
- Yes/yes: **Facilitator**
- Improves lives but the maker would not use it: **Peddler**
- The maker would use it but it does not improve lives: **Entertainer**
- Neither: **Dealer**, which Eyal calls "exploitation"

**Critique** [E2, ethical consensus among critics]
- The variable-reward step is the slot-machine mechanism. Tristan Harris (2016) argued that pull-to-refresh,
  feeds, and notification badges are "playing a slot machine". He wrote that "Addictiveness is maximized
  when the rate of reward is most variable" [16].
- The Manipulation Matrix relies on the maker's self-assessment. It has no external check and no user voice.
- Habit formation takes much longer and varies much more than "hook" marketing implies. In a field study
  of daily behaviors, the time to reach 95% of peak automaticity ranged from **18 to 254 days** [17] [E1].
  Missing one day did not derail the process.

**Apply**
- Use the loop to design *healthy* habits the user wants: a daily language lesson, saving money, journaling.
  Map each phase and test it against the user's own stated goal.
- Make investment benefit the user (their data makes the product better *for them*). Do not use it as a lock-in.
- Prefer predictable, earned rewards (progress, completion) over random reward schedules.

**Limit**
- Do not use intermittent variable rewards to drive compulsive checking. Avoid infinite feeds without
  stopping cues, loot-box mechanics, and streak loss used as a punishment, especially for children and teens.
- Give users a way to pause, mute, set limits, and leave. If the user's stated goal conflicts with the
  engagement metric, the user's goal wins.

---

## 4. Nudge theory and the effectiveness debate

**Definition.** Thaler & Sunstein, *Nudge* (2008). A nudge is "any aspect of the choice architecture that
alters people's behavior in a predictable way" without forbidding options or significantly changing
economic incentives. The fruit-at-eye-level example counts as a nudge, while banning junk food does not
([18], secondary source quoting the book).

### The 2022 PNAS debate (state it precisely)

| Paper | What it found |
|---|---|
| **Mertens, Herberz, Hahnel & Brosch (2022)**, *PNAS* 119(1) [19] | Meta-analysis of more than 200 studies, more than 450 effect sizes, n = 2,149,683. The abstract reports an overall **Cohen's d = 0.45 (95% CI 0.39–0.52)**. **Decision-structure** nudges (defaults, effort, option ordering) outperform **decision-information** and **decision-assistance** nudges (Table 2: d = 0.55, 0.38, 0.31). **Food** shows the largest effects (d = 0.72), "up to 2.5 times larger" than other domains. The authors themselves report "a moderate publication bias toward positive results" |
| **Maier, Bartoš, Stanley, Shanks, Harris & Wagenmakers (2022)**, *PNAS* letter, "No evidence for nudging after adjusting for publication bias" [20] | Reanalysis with robust Bayesian meta-analysis (RoBMA). Their Table 1 gives the unadjusted random-effects estimate as d = 0.43 (0.38–0.48), slightly different from the 0.45 in Mertens' abstract. The bias-adjusted estimate is **d = 0.04 (0.00–0.14)**, with BF01 = 0.95, which is inconclusive. By category, the evidence is *against* an effect for information and assistance nudges, and **undecided for decision-structure nudges** (d = 0.12). By domain, it is against an effect for health, environment, and finance, and indecisive for food and prosocial. Conclusion: "no evidence remains that nudges are effective as tools for behaviour change" after correction |
| **DellaVigna & Linos (2022)**, *Econometrica* [21] | Complete trial portfolios from two US nudge units, which are free of publication selection. The average effect is **1.4 percentage points** in take-up, "still sizable and highly statistically significant". Nudges published in academic journals average **8.7 pp**. The gap comes mainly from "selective publication… exacerbated by low statistical power" |
| **Hallsworth (BIT), 2022** commentary [22] | Calls the original effect "implausibly large". Argues that "nudge" lumps very different interventions together, and calls for a "heterogeneity revolution": ask *which* intervention works, where, and for whom |

**Correct reading for agents** [E1]
- "Nudges have a medium effect (d ≈ 0.4)" is **wrong** as a general claim. That figure is inflated by publication bias.
- "Nudges don't work" is **also wrong**. The bias-corrected Bayes factor is *inconclusive* (absence of
  evidence, not evidence of absence) [20]. Unselected real-world trials show small but real average effects [21].
- **Defaults are the strongest single tool.** A separate meta-analysis of 58 default studies (n = 73,675)
  found d = 0.68 (95% CI 0.53–0.83), with large variation [23]: two studies even found negative effects.
  Defaults were more effective in consumer domains, less effective in environmental ones, and stronger
  when perceived as an endorsement or the status quo. The organ-donation default study is the classic example [24].
- Expect single-digit percentage-point lifts from information-style nudges (messages, reminders,
  labels), and test them.

**Apply**
- **UI:** Set defaults to what most users would choose if well informed, such as privacy-protective settings and
  sensible plan sizes. Order options so the recommended one is easy, not hidden.
- **Forms and flows:** Reduce effort (decision structure) before adding persuasive copy (decision information).
- **Measurement:** A/B test with a pre-registered primary metric and enough sample size. Do not report
  the published-literature effect size as your expected lift.

**Limit**
- A default that benefits the company against the user's interest (pre-ticked add-ons, opt-out
  marketing consent) is a dark pattern. It is unlawful for consent under GDPR and CPRA.
  See `dark-patterns-and-ethics.md`.
- A nudge must be "easy and cheap to avoid". If opting out is hard, it is no longer a nudge.

---

## 5. EAST framework (Behavioural Insights Team)

Published in 2014 by the UK Behavioural Insights Team (Service, Hallsworth, Halpern and others) [25],
and revised in 2024 [26]. "If you want to encourage a behaviour, make it Easy, Attractive, Social and Timely" [25].

| Principle | Sub-points [25] | BIT example [25] |
|---|---|---|
| **Easy** | Harness the power of defaults; reduce the "hassle factor"; simplify messages | Pension auto-enrolment: participation rose from 61% to 83% |
| **Attractive** | Attract attention (images, color, personalization); design rewards and sanctions for maximum effect | A photo of the untaxed car in letters raised payment from 40% to 49% |
| **Social** | Show that most people perform the desired behavior; use networks; encourage commitments to others | "Most people pay on time" letters: +5 percentage points (best message) |
| **Timely** | Prompt when people are most receptive (life events); weigh immediate costs and benefits; help people plan | A text message 10 days before bailiffs doubled the value of payments |

**Evidence grade:** [E2]. EAST is a practitioner synthesis. The example results come from BIT's own trials,
and the nudge-debate caveats above apply to effect sizes.

**Apply:** Use EAST as a design-review checklist for any flow you want completed (sign-up, payment,
renewal, health action). "Easy" comes first for a reason. BIT notes that removing "even the tiniest amount
of 'friction'" often has a large impact [25].

**Limit:** "Social" must use true norms. "Timely" must not exploit vulnerable moments, such as debt stress or grief, to sell.

---

## 6. Dual-process thinking (Kahneman's System 1 / System 2)

**Model.** Fast, automatic, intuitive processing (System 1 / Type 1) versus slow, effortful, deliberate
processing (System 2 / Type 2). It was popularized by Kahneman's *Thinking, Fast and Slow* (2011).

**Caveats** [E1]
- **Two "systems" is a simplification.** Evans & Stanovich (2013) defend a *Type 1 / Type 2* processing
  distinction. They argue that critiques attacking a generic "two systems" version are aimed at a
  version nobody holds. Type 2 processing is defined by hypothetical thinking and heavy working-memory
  load, not by being "rational" [28]. Do not treat System 1 and System 2 as two brain parts or two user types.
- **The priming chapter did not hold up.** In 2017 Kahneman wrote that he "placed too much faith in
  underpowered studies". He also wrote that behavioral priming effects "cannot be as large and as robust
  as my chapter suggested" [27]. Do not cite behavioral priming (e.g., subtle words changing walking
  speed or spending) as a design lever.
- The heuristics-and-biases core (framing, anchoring, certainty effects) has much stronger support.
  See the framing section [37][41].

**Apply**
- Design for low effort by default: clear labels, recognition over recall, sensible defaults. Users
  scanning a page are not deliberating.
- Add deliberate friction where a fast, automatic choice could hurt the user: deleting data,
  large payments, irreversible actions. Use confirmation, a summary, or undo.

**Limit:** "Bypass System 2" is not a design goal. Designs that work only when users do not think
(hidden costs, confusing opt-outs) are manipulative by definition.

---

## 7. Emotional design (Norman's three levels)

**Model.** Don Norman, *Emotional Design: Why We Love (or Hate) Everyday Things* (2004) [29]. Three levels of processing and design [30]:

| Level | Norman's framing | Design question |
|---|---|---|
| **Visceral** | "Concerns itself with appearances" | Does it look and feel right in the first instant? |
| **Behavioral** | "the pleasure and effectiveness of use" | Does it work well, feel in control, and give good feedback? |
| **Reflective** | "the rationalization and intellectualization of a product" | What does using or owning it say about me? Is it worth remembering? |

**Related evidence: aesthetic-usability effect** [E1]
- Attractive interfaces are *perceived* as more usable. In Kurosu & Kashimura (1995), aesthetic ratings
  of 26 ATM layouts correlated with perceived ease of use more strongly than actual ease of use did
  (as summarized in [31]).
- Tractinsky, Katz & Ikar (2000) found that an ATM simulation's aesthetics affected post-use ratings of
  both aesthetics and usability. Actual usability had no such effect [32].
- NN/g's caveat: attractiveness excuses minor usability problems, not major ones. It can also *mask*
  problems in usability tests, because participants praise the visuals while struggling [31].

**Apply**
- **Visceral:** Polish first impressions in onboarding, landing heroes, packaging, and OOH.
- **Behavioral:** Fix task success before visual polish. Never treat beauty as a substitute.
- **Reflective:** Brand story, values, and identity signals. These drive loyalty and word of mouth.
- **In research:** Weigh observed behavior over aesthetic praise [31].

**Limit:** Do not use visual polish to make a weak or harmful offer feel trustworthy, for example a
polished design for a predatory loan. [E2]

---

## 8. Storytelling and narrative transportation

**Model.** *Transportation* is absorption into a story, involving imagery, emotion, and focused attention.
Green & Brock (2000) found that more transported readers held more story-consistent beliefs and found
fewer "false notes" in a story. Labeling the story fact or fiction generally did not change this [33].

**Evidence** [E1]
- A meta-analysis of narrative persuasion found positive relationships between narrative exposure
  and beliefs (r = .17), attitudes (r = .19), intentions (r = .17), and behaviors (r = .23, only 5 studies) [35].
- The extended transportation-imagery model was tested on 132 effect sizes from 76 articles [34].
  It maps the antecedents of transportation (story and audience factors) and its consequences.
- Effects are small to moderate, and moderators are not fully identified [35].

**Apply**
- **Landing pages and case studies:** Use a specific protagonist with a problem, a turning point, and an
  outcome. Specific detail beats abstract claims.
- **Social video:** Open on the character or the conflict, not the logo. See the media section for the first seconds.
- **Print/OOH:** One image implying a story (before/after, a moment of tension) can carry a narrative in a glance.
- **Product:** Onboarding framed as the user's own journey (progress, milestones).

**Limit:** Transportation lowers counter-arguing, and story-consistent beliefs held even when the story
was labeled fiction [33]. That is why fabricated testimonials and "based on a true story" ads for claims
that are false are especially harmful. Label dramatizations.

---

## 9. AIDA and its limits

**Model.** Attention → Interest → Desire → Action. It is a sales and advertising "hierarchy of effects"
usually attributed to E. St. Elmo Lewis (c. 1898) [unverified: attribution not checked against a primary source in this pass].

**Evidence** [E3 as a model of how advertising works]
- A review of more than 250 journal articles and books found "little support for any hierarchy, in the
  sense of temporal sequence, of effects" [36]. Advertising effects are better described in a space
  of affect, cognition, and experience, with the right position depending on context, category, and goals [36].
- People do not move through fixed stages. Many purchases are habitual, emotional, or driven by experience.

**Apply**
- Use AIDA as a **copy-structure checklist**, not a model of the mind. Does the piece earn attention,
  give a reason to care, make the benefit concrete, and make the next step obvious?
- Note the attention constraint per medium (section 12), then decide which AIDA steps the piece can
  realistically carry. A billboard does Attention plus brand memory. A landing page can do all four.

**Limit:** Do not justify interruptive or deceptive attention-grabbing (fake system alerts, bait
thumbnails) as just the "A" in AIDA.

---

## 10. Message framing (gain vs. loss)

**Foundations** [E1]
- Logically equivalent descriptions produce "predictable shifts of preference" when the problem is
  framed differently (Tversky & Kahneman, 1981) [37].
- Prospect theory: the value function "is generally steeper for losses than for gains" [42]. A 2020
  replication in 19 countries (N = 4,099) reproduced 94% of the original choice items [41].
- **But "loss aversion" as a universal law is contested.** Gal & Rucker (2018) argue that current evidence
  "does not support that losses, on balance, tend to be any more impactful than gains" [40]. The
  prospect-theory choice patterns replicate; the claim that losses *always* loom larger is debated.

**Gain vs. loss frames in persuasive messages: the meta-analytic reality** [E1]
- **Prevention behaviors:** Across 93 studies (N = 21,656), gain frames were slightly more persuasive (r = .03).
  The difference came mostly from dental-hygiene messages. There was no significant difference for safer
  sex, skin-cancer prevention, or diet [38].
- **Detection behaviors (screening):** Across 53 studies (N = 9,145), loss frames were slightly more persuasive
  (r = −.04). The effect held only for breast-cancer detection. The authors conclude that switching frames
  "is unlikely to substantially improve persuasiveness" [39].

**Correct reading:** The popular rule "loss framing is twice as powerful" is **[E3]**. In messaging, frame
direction usually matters very little. Clarity, relevance, and credibility matter more.

**Apply**
- Default to clear **gain** framing for products, features, and prevention ("Save 3 hours a week").
- Consider loss framing only where the user faces a real, concrete loss they may be overlooking,
  such as an unsaved document, an expiring benefit they paid for, or a security risk. Then test it.
- Watch attribute framing in data displays: "95% success" and "5% failure" are read differently [37].
  Show both, or use neutral natural frequencies, when the decision matters (health, finance).

**Limit:** Confirmshaming ("No thanks, I don't like saving money") and exaggerated loss threats are
dark patterns. Loss framing about health, safety, or money must be accurate and proportionate.

---

## 11. Persuasion technique selector

| Goal | Strongest evidence lever | Supporting levers | Evidence |
|---|---|---|---|
| Get a one-time action done | Remove friction; good default; clear prompt at the moment of ability | Social proof, timely reminder | [E1] defaults [23]; [E2] EAST [25] |
| Build a recurring habit | Stable context cue plus easy action, repeated over weeks to months | Predictable, earned rewards; self-chosen goals | [E1] [17]; [E2] Fogg [11] |
| Change an attitude or belief | Narrative with a relatable protagonist | Credible source (authority), true social proof | [E1] [33][35] |
| Win a choice between options | Option structure and recommendation | Framing of attributes; comparison tables | [E1] [19][23] |
| Earn attention in a feed or OOH | Pictorial salience; brand and message early | Contrast, motion (video), one idea | [E1] [47]; [E2] [45][46][48] |

---

## 12. Mapping persuasion to media

The attention budget sets which techniques can work. Map the medium first, then the technique.

| Medium | Attention budget (evidence) | What works | What to avoid |
|---|---|---|---|
| **UI / product** | Repeated, task-focused use | Defaults, friction removal, prompts at the moment of ability (Fogg), progress and completion feedback, contextual social proof, undo and confirmation for risky actions | Variable-reward loops for compulsive use; nagging prompts; hidden opt-outs |
| **Landing pages** | Users decide in the first ~10 seconds whether to stay; past ~30 s they tend to keep reading [44] [E1]. In NN/g's 2018 eye-tracking, 57% of viewing time was above the fold and 74% in the first two screenfuls [43] [E2] | Value proposition in the first screen; one primary CTA; proof (logos, testimonials, numbers) next to claims; a short narrative case study below | Fake countdowns and "X people viewing" counters; walls of claims with no proof |
| **Social posts (feed and short video)** | Mobile feed content is recalled at a statistically significant rate after 0.25 s of exposure. Average time per piece of content was 1.7 s on mobile vs. 2.5 s on desktop (Facebook IQ, 2016) [45] [E2]. TikTok advises putting the hook in the first 6 seconds and introducing the content proposition in the first 3 seconds [46] [E2, platform guidance, 2025-06] | Brand or product up front [45]; make it understandable with the sound off (captions) [45]; open on a person, conflict, surprise, or a visible result; vertical 9:16 and UI safe zones for TikTok [46] | Clickbait hooks the content doesn't pay off; fake "breaking" or system-alert styling |
| **Print ads** | Self-paced, but scanned. An eye-tracking study of 1,363 print ads and more than 3,600 consumers [47] [E1] found: the **pictorial** captures attention regardless of size; **text** captures attention in proportion to its size; the **brand** element best transfers attention to other elements | One dominant image; headline that carries the benefit; prominent brand; body copy for those who opt in | Tiny, buried brand marks; several competing images |
| **Billboards / OOH** | About 4–5 seconds, viewed while moving. Lamar advises "seven words or less" [48] [E2, industry guidance] | One idea; a large, legible typeface in mixed case with generous spacing; strong color contrast; a single visual; brand plus one memorable cue | Phone numbers, long URLs, paragraphs, thin or decorative type. Treat the claim that high color contrast "can improve outdoor advertising recall by 38%" [48] as [E3]: its source is not given |

**Apply (cross-media rules)**
- **Salience first:** In glance media (OOH, feed), pictorial and contrast decide attention [47][48]. Persuasive copy cannot work if it is not seen.
- **Brand early in short formats:** Put it in the first seconds of video [45] and make it prominent in print [47].
- **Proof scales with the attention budget.** OOH can carry one proof point, a landing page can carry many,
  and a product can show real usage data.
- **One target behavior per piece.**

**Limit:** Medium constraints never justify deception. A hook must be paid off by the content, and a
billboard claim must be as true as a contract clause.

---

## Sources

[1] Cialdini, R. B. (1984). *Influence: How and Why People Agree to Things*. William Morrow. Catalog record: https://librarycatalog.ecu.edu/catalog/249281
[2] Cialdini, R. B. (2021). *Influence, New and Expanded: The Psychology of Persuasion*. Harper Business (published May 4, 2021). Bookseller listing: https://www.porchlightbooks.com/products/influence-robert-b-cialdini-9780062937650
[3] W. P. Carey News, Arizona State University. (2021, May 10). *The 'Godfather of Influence' has a new way to be more persuasive*. https://news.wpcarey.asu.edu/20210510-godfather-influence-has-new-way-be-more-persuasive
[4] Dooley, R. (2016, October 15). *3 Surprising Takeaways From Robert Cialdini's 'Pre-Suasion'*. Entrepreneur. https://www.entrepreneur.com/article/282642
[5] Influence at Work (Cialdini's firm). *The 7 Principles of Persuasion*. https://www.influenceatwork.com/7-principles-of-persuasion/ (practitioner source; example percentages are firm-reported)
[6] Loonam, M. (2025, April 22). *The gentle science of persuasion, part seven: Unity*. W. P. Carey News, ASU. https://blogs.wpcarey.asu.edu/20250422-gentle-science-persuasion-part-seven-unity
[7] Goldstein, N. J., Cialdini, R. B., & Griskevicius, V. (2008). A room with a viewpoint: Using social norms to motivate environmental conservation in hotels. *Journal of Consumer Research*, 35(3). https://doi.org/10.1086/586910
[8] Schultz, P. W., Nolan, J. M., Cialdini, R. B., Goldstein, N. J., & Griskevicius, V. (2007). The constructive, destructive, and reconstructive power of social norms. *Psychological Science*, 18(5). https://doi.org/10.1111/j.1467-9280.2007.01917.x
[9] Lynn, M. (1991). Scarcity effects on value: A quantitative review of the commodity theory literature. *Psychology & Marketing*, 8(1). https://doi.org/10.1002/mar.4220080105
[10] Burger, J. M. (1999). The foot-in-the-door compliance procedure: A multiple-process analysis and review. *Personality and Social Psychology Review*, 3(4). https://doi.org/10.1207/s15327957pspr0304_2
[11] Fogg, B. J. (2009). A behavior model for persuasive design. *Proceedings of the 4th International Conference on Persuasive Technology (Persuasive '09)*. ACM. https://doi.org/10.1145/1541948.1541999 (text read via https://www.slideshare.net/slideshow/fogg-behavior-model/32526643)
[12] Fogg, B. J. *Fogg Behavior Model* and *Prompts*. https://behaviormodel.org/ ; https://behaviormodel.org/prompts/ ; https://behaviormodel.org/ability/
[13] Stanford Behavior Design Lab. *Fogg Behavior Model*. https://behaviordesign.stanford.edu/resources/fogg-behavior-model
[14] Eyal, N. *How to Manufacture Desire* (Hook model summary by the author). https://www.nirandfar.com/how-to-manufacture-desire/ ; book: Eyal, N. (2014). *Hooked: How to Build Habit-Forming Products*. Portfolio/Penguin.
[15] Eyal, N. (2012, July 1). *The Art Of Manipulation*. TechCrunch. https://techcrunch.com/?p=581552
[16] Harris, T. (2016). *How Technology is Hijacking Your Mind — from a Magician and Google Design Ethicist*. Thrive Global, Medium. https://medium.com/thrive-global/how-technology-hijacks-peoples-minds-from-a-magician-and-google-s-design-ethicist-56d62ef5edf3 (text read via course copy: https://courses.cs.washington.edu/courses/cse481p/23sp/readings/W3S1/how-technology-hijacks-peoples-minds-TristanHarris.pdf)
[17] Lally, P., van Jaarsveld, C. H. M., Potts, H. W. W., & Wardle, J. (2010). How are habits formed: Modelling habit formation in the real world. *European Journal of Social Psychology*, 40(6). https://doi.org/10.1002/ejsp.674
[18] Harvard Law School. *Intelligent design* (Harvard Law Today; quotes the definition from Thaler & Sunstein, *Nudge*, Yale University Press, 2008). https://hls.harvard.edu/today/intelligent-design (secondary source)
[19] Mertens, S., Herberz, M., Hahnel, U. J. J., & Brosch, T. (2022). The effectiveness of nudging: A meta-analysis of choice architecture interventions across behavioral domains. *PNAS*, 119(1), e2107346118. https://pmc.ncbi.nlm.nih.gov/articles/PMC8740589/
[20] Maier, M., Bartoš, F., Stanley, T. D., Shanks, D. R., Harris, A. J. L., & Wagenmakers, E.-J. (2022). No evidence for nudging after adjusting for publication bias. *PNAS*, 119(31), e2200300119. https://pmc.ncbi.nlm.nih.gov/articles/PMC9351501/
[21] DellaVigna, S., & Linos, E. (2022). RCTs to scale: Comprehensive evidence from two nudge units. *Econometrica*, 90(1), 81–116. https://www.econometricsociety.org/publications/econometrica/2022/01/01/rcts-scale-comprehensive-evidence-two-nudge-units
[22] Hallsworth, M. (2022, August 2). *Making Sense of the "Do Nudges Work?" Debate*. Behavioral Scientist. https://behavioralscientist.org/making-sense-of-the-do-nudges-work-debate/
[23] Jachimowicz, J. M., Duncan, S., Weber, E. U., & Johnson, E. J. (2019). When and why defaults influence decisions: A meta-analysis of default effects. *Behavioural Public Policy*, 3(2). https://doi.org/10.1017/bpp.2018.43
[24] Johnson, E. J., & Goldstein, D. G. (2003). Do defaults save lives? *Science*, 302(5649). https://doi.org/10.1126/science.1091721
[25] Service, O., Hallsworth, M., Halpern, D., Algate, F., Gallagher, R., Nguyen, S., Ruda, S., & Sanders, M. (2014). *EAST: Four Simple Ways to Apply Behavioural Insights*. The Behavioural Insights Team. https://transparencyschool.org/wp-content/uploads/EAST_ExecSummary.pdf (executive summary copy)
[26] The Behavioural Insights Team. (2024, December 16). *EAST: Four simple ways to apply behavioural insights* (revised edition page). https://www.bi.team/publications/east-four-simple-ways-to-apply-behavioural-insights/
[27] Kahneman, D. (2017, February 14). Comment on Schimmack, Heene & Kesavan, *Reconstruction of a Train Wreck: How Priming Research Went off the Rails*. Replicability-Index. https://replicationindex.com/2017/02/02/reconstruction-of-a-train-wreck-how-priming-research-went-of-the-rails/ (comment #1454)
[28] Evans, J. St. B. T., & Stanovich, K. E. (2013). Dual-process theories of higher cognition: Advancing the debate. *Perspectives on Psychological Science*, 8(3), 223–241. https://doi.org/10.1177/1745691612460685
[29] Norman, D. A. (2004). *Emotional Design: Why We Love (or Hate) Everyday Things*. Basic Books. Author's page: https://jnd.org/emotional-design-why-we-love-or-hate-everyday-things/
[30] Interaction Design Foundation. *Norman's Three Levels of Design* (quotes Norman 2004). https://ixdf.org/literature/article/norman-s-three-levels-of-design (secondary source)
[31] Moran, K. (2024, February 3). *The Aesthetic-Usability Effect*. Nielsen Norman Group. https://www.nngroup.com/articles/aesthetic-usability-effect/
[32] Tractinsky, N., Katz, A. S., & Ikar, D. (2000). What is beautiful is usable. *Interacting with Computers*, 13(2). https://doi.org/10.1016/S0953-5438(00)00031-X
[33] Green, M. C., & Brock, T. C. (2000). The role of transportation in the persuasiveness of public narratives. *Journal of Personality and Social Psychology*, 79(5), 701–721. https://doi.org/10.1037/0022-3514.79.5.701
[34] van Laer, T., de Ruyter, K., Visconti, L. M., & Wetzels, M. (2014). The extended transportation-imagery model: A meta-analysis of the antecedents and consequences of consumers' narrative transportation. *Journal of Consumer Research*, 40(5), 797–817. https://doi.org/10.1086/673383
[35] Braddock, K., & Dillard, J. P. (2016). Meta-analytic evidence for the persuasive effect of narratives on beliefs, attitudes, intentions, and behaviors. *Communication Monographs*, 83(4). https://doi.org/10.1080/03637751.2015.1128555
[36] Vakratsas, D., & Ambler, T. (1999). How advertising works: What do we really know? *Journal of Marketing*, 63(1). https://doi.org/10.1177/002224299906300103
[37] Tversky, A., & Kahneman, D. (1981). The framing of decisions and the psychology of choice. *Science*, 211(4481). https://doi.org/10.1126/science.7455683
[38] O'Keefe, D. J., & Jensen, J. D. (2007). The relative persuasiveness of gain-framed and loss-framed messages for encouraging disease prevention behaviors: A meta-analytic review. *Journal of Health Communication*, 12(7). https://doi.org/10.1080/10810730701615198
[39] O'Keefe, D. J., & Jensen, J. D. (2009). The relative persuasiveness of gain-framed and loss-framed messages for encouraging disease detection behaviors: A meta-analytic review. *Journal of Communication*, 59(2). https://doi.org/10.1111/j.1460-2466.2009.01417.x
[40] Gal, D., & Rucker, D. D. (2018). The loss of loss aversion: Will it loom larger than its gain? *Journal of Consumer Psychology*, 28(3). https://doi.org/10.1002/jcpy.1047
[41] Ruggeri, K., et al. (2020). Replicating patterns of prospect theory for decision under risk. *Nature Human Behaviour*, 4. https://doi.org/10.1038/s41562-020-0886-x
[42] Kahneman, D., & Tversky, A. (1979). Prospect theory: An analysis of decision under risk. *Econometrica*, 47(2). https://doi.org/10.2307/1914185
[43] Fessenden, T. (2018, April 15). *Scrolling and Attention*. Nielsen Norman Group. https://www.nngroup.com/articles/scrolling-and-attention/
[44] Nielsen, J. (2011, September 11). *How Long Do Users Stay on Web Pages?* Nielsen Norman Group (based on Liu, White & Dumais, SIGIR 2010). https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/
[45] Facebook IQ. (2016, April 20). *Capturing Attention in Feed: The Science Behind Effective Video Creative*. Meta for Business. https://www.facebook.com/business/news/insights/capturing-attention-feed-video-creative
[46] TikTok for Business. (Last updated June 2025). *Creative best practices for performance ads*. https://ads.tiktok.com/help/article/creative-best-practices
[47] Pieters, R., & Wedel, M. (2004). Attention capture and transfer in advertising: Brand, pictorial, and text-size effects. *Journal of Marketing*, 68(2). https://doi.org/10.1509/jmkg.68.2.36.27794
[48] Lamar Advertising. *Design tips* (billboard creative guidance). https://www.lamar.com/howtoadvertise/designtips
