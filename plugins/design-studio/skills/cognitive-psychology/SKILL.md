---
name: cognitive-psychology
description: Use whenever a task involves a specific audience, persuasion, conversion, pricing, consent, onboarding, attention, or justifying or critiquing a design decision with psychology, and to check that persuasive work is ethical and lawful. Contains: evidence-graded cognitive biases (48, with replication status), laws of UX (Hick, Fitts, Jakob, Miller…), Gestalt, attention and scanning, cognitive load and mental models, persuasion and behavior models, color psychology, audience and culture, and the dark-pattern catalog with legal exposure (EU, US, California, Brazil).
user-invocable: false
---

# Cognitive Psychology for Design

How people perceive, decide, remember, and act — and how to design with that, truthfully.
Every claim in this skill's references carries an evidence grade and a citation. This file holds the
rules for using them and tells you which reference to open.

## Non-negotiable rules

1. **Grade before you cite.** Every effect has a grade: **[E1]** established research, **[E2]** practitioner
   consensus or official standard, **[E3]** popular but weak or contested. In client-facing rationale, use the
   *lower* grade when an entry is split (e.g. "E1 lab / E3 design claim"). Never present an [E3] effect as fact.
2. **Hypotheses, not verdicts.** Lab effects are usually smaller in the field (replications average about half the
   original size). Psychology tells you what to try first; testing with real users decides.
3. **Ethics gate.** Any piece that asks someone to buy, sign up, consent, share data, or stay must pass the
   15-item checklist in `references/dark-patterns-and-ethics.md` §7. A fail on items 1–8 blocks delivery.
   The two tests to remember: **Truth** (every urgency, scarcity, popularity, price, or "free" claim is literally
   true now) and **Symmetry** (declining is as easy and visible as accepting).
4. **Audience over stereotype.** Do not infer a person from a country, generation, or age label. Fix universal
   problems first (contrast, type size, target size, plain language, speed), then tailor with research.
5. **You are not the user.** Designers carry their own biases (curse of knowledge, false consensus, confirmation
   bias, IKEA effect on their own concepts). Name them in critiques of your own work.

## Myths to reject on sight

| Popular claim | Corrected reading | Grade |
|---|---|---|
| "Miller's law: max 7 items in a menu" | 7±2 is a memory span (modern estimate ~4 chunks) for things people must *remember*, not things they can *see*. Judge menus by grouping and label scent. | E3 as menu rule |
| "Fewer choices always convert better" (jam study) | Average effect across studies ≈ 0. Overload appears only with complex choices, hard comparisons, unclear preferences, or a goal of minimizing effort. | E3 general / E1 moderated |
| "Users remember unfinished tasks" (Zeigarnik) | 2025 meta-analysis: no memory advantage. What holds is the urge to *resume* (Ovsiankina). Design save-and-continue. | E3 / E1 |
| "Add a decoy plan to push the middle tier" | Reliable mainly in numeric comparison tables; fails in most visual or verbal comparisons. | E1 narrow / E3 general |
| "Response must be under 400 ms" (Doherty) | The 400 ms figure is not in the source. Use 0.1 s / 1 s / 10 s response-time limits. | E3 / E2 |
| "Blue = trust, red = appetite; 62–90% of judgment is color" | Hue-meaning is cultural and contextual; the statistics have no study behind them. Color reliably works for contrast, salience, coding, consistency. | E3 |
| "Loss frames are twice as persuasive" | Meta-analyses find frame direction barely matters for persuasion (r ≈ .03–.04). | E3 |
| "Z-pattern / Gutenberg diagram" | No eye-tracking evidence. Use NN/g patterns (F, layer-cake, spotted, commitment). | E3 |
| "Hard-to-read fonts make people think harder" | Pooled replications: no effect. | E3 |
| "Social priming changes behavior" (e.g. walking slower) | Failed replications. Semantic priming (consistent terms speed recognition) is real. | E3 / E1 |
| "Nudges have medium effects" | After correcting for publication bias the average is near zero; **defaults** are the robust exception. | contested |

## Choosing techniques by goal

| Design goal | Start with (strongest evidence) | Then consider | Open |
|---|---|---|---|
| Get a one-time action done | Remove friction; a user-serving default; a clear prompt at the moment of ability | True social proof; timely reminder | persuasion §2, §11; biases: Default |
| Make one element stand out | Isolation: break similarity on one element only; single accent color | Size, position (top-left in LTR), motion at point of focus | gestalt §4; attention §1; biases: Von Restorff |
| Reduce effort / errors | Keep needed info visible; recognition over recall; defaults, autofill | Progressive disclosure (≤2 levels); constraints, undo | cognitive-load checklist |
| Make targets easy to hit | Fitts: size + proximity + edges | Platform minimums (Apple 44 pt default, Android 48 dp, WCAG 2.2 24 CSS px AA / 44 AAA) | laws-of-ux: Fitts |
| Build trust | Real credentials and real reviews near the decision; visual quality (halo, fluency) | Transparent pricing; admit limits | biases: Social proof, Authority, Halo, Fluency |
| Pricing page | Clear anchoring with true reference prices; recommended plan centered | Charm pricing only when it changes the left digit; decoy only in numeric tables | biases: Value & pricing |
| Onboarding / habit | Small voluntary first step; honest progress (goal-gradient); stable cue + easy action | Designed ending (peak-end); resumption | persuasion §2–3; biases |
| Memorability (brand, campaign) | Picture superiority; one distinctive element; repetition until wear-out | Humor or bizarreness for one point only | biases: Memory & attention |
| Feed / social post | Pictorial salience; brand and message in the first seconds; works with sound off | Face/gaze cues; vertical safe zones | persuasion §12; attention §6–7 |
| Billboard / OOH | One idea, one image, ≤7 words, high contrast, large mixed-case type | Brand + one memorable cue | persuasion §12; attention §8 |
| Change a belief | Narrative with a relatable protagonist; credible source | True social proof | persuasion §8 |
| Consent / privacy | Off-by-default data sharing; equal-weight accept/reject on the same layer | Reason shown at the moment of asking | dark-patterns §4–5; biases: Defaults in consent |

## Critique protocol

When reviewing a design, check in this order and cite the reference:

1. **Perception** — Does grouping read correctly (proximity, common region, similarity)? Is there one clear focal element? (`gestalt.md`, `attention-and-scanning.md`)
2. **Attention** — Is critical content out of ad-like zones and styles? Is the key message in the first screen / first seconds / first glance? (`attention-and-scanning.md`)
3. **Load** — What must the user remember? What could the system do instead? Is anything doing no work? (`cognitive-load-and-mental-models.md`)
4. **Motor** — Are targets large and spaced enough? (`laws-of-ux.md` Fitts)
5. **Expectation** — Does it follow conventions users already know (Jakob)? Are signifiers clear? (`laws-of-ux.md`, `cognitive-load-and-mental-models.md` §5)
6. **Persuasion** — Which levers are in use, at what grade, and are they true? (`cognitive-biases.md`, `persuasion-and-behavior.md`)
7. **Ethics & law** — Run the checklist. (`dark-patterns-and-ethics.md` §7)
8. **Audience** — Older adults, low literacy, neurodivergent users, RTL, slow networks? (`audience-and-culture.md`)

Use the "Decision rules for critiques" table in `laws-of-ux.md` to correct common misuses of laws in feedback.

## Reference index — when to open what

| File | Open when you need… |
|---|---|
| `references/cognitive-biases.md` | Any of 48 biases: definition, grade + replication status, Apply by medium (UI, web, social, print, OOH), Limit, the dark pattern it becomes. Starts with an at-a-glance table and a section on designers' own biases. |
| `references/laws-of-ux.md` | Hick-Hyman, Fitts (with platform target sizes), Jakob, Miller, Tesler, Postel, Doherty, Pareto, Parkinson, Occam, serial position, Von Restorff, peak-end, goal-gradient, flow, mental models. Includes corrections to lawsofux.com and a critique decision table. |
| `references/gestalt.md` | Figure-ground, proximity, similarity, closure, continuation, common fate, symmetry, Prägnanz, common region, uniform connectedness; logo examples; which cue wins when; media notes. |
| `references/attention-and-scanning.md` | Pre-attentive features and saliency, NN/g eye-tracking patterns, banner blindness, inattentional/change blindness, reading direction, faces and gaze, feed viewing times, OOH glance data, above-the-fold research. |
| `references/cognitive-load-and-mental-models.md` | Working memory limits, cognitive load theory, recognition vs. recall, progressive disclosure, Norman's affordances/signifiers/gulfs, System 1/2 with caveats, satisficing, defaults, error prevention, readable text; load-reduction checklist. |
| `references/persuasion-and-behavior.md` | Cialdini's 7 principles, Fogg B=MAP, Hook model and critique, nudge debate (2022 PNAS), EAST, emotional design, storytelling, AIDA limits, gain/loss framing; technique selector; persuasion mapped to UI, landing pages, social, print, OOH. |
| `references/color-psychology.md` | What color research does and does not support, the red-effect replication failures, statistics to stop repeating, cultural meaning table, food/packaging, per-medium rules, pre-ship color checklist. |
| `references/audience-and-culture.md` | Hofstede and Hall (with critique), RTL and localization (text expansion, symbols, formats), older adults, children, teens, generations (graded), neurodiversity, literacy, low bandwidth, B2B vs. B2C, experts vs. novices. |
| `references/dark-patterns-and-ethics.md` | Brignull, Mathur, Gray, and regulator taxonomies; master table (pattern → bias exploited → legal exposure → ethical alternative); EU DSA/UCPD/GDPR, FTC, CPRA, Brazil LGPD/CDC/ECA Digital; persuasion vs. manipulation tests; the 15-item ethics checklist. Not legal advice. |

Legal and platform facts are dated in each file. Re-verify anything older than 12 months before relying on it.
