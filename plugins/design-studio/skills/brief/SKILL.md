---
name: brief
description: Turn a vague design request into a structured creative brief — objective, audience, insight, single-minded message, deliverables with media specs, mandatories, tone, direction options, constraints, success measures, and open questions. Use when starting any non-trivial design project, when a request is vague ("make me a logo", "redo our site"), or when the user asks for a brief. The creative director uses it before Team-mode projects.
argument-hint: "[what you need, for whom, and any links or files]"
---

# Brief

A brief is the contract for the work. A good one is short, specific, and decides things. This skill turns whatever
the user gave you into one, with the gaps made visible.

## Procedure

1. **Extract** everything the request, attached files, links, and conversation already say. Don't ask for what you
   already have.
2. **Find the blocking gaps.** These change the work: the goal, the primary audience, the deliverables and media,
   hard constraints (brand assets, legal, deadline, budget, accessibility level), and success measures.
3. **Ask once.** Put at most 5 questions in a single message, grouped, each with a suggested default answer so the
   user can reply "ok". If the user wants speed, skip the questions and use the defaults, marked as assumptions.
4. **Write the brief** with the template below. Every assumption is marked `(assumed)`. Keep it to about one screen.
5. **Attach specs** for each deliverable from `design-studio:media-specs`, with the verification date. Attach the
   accessibility level from `design-studio:accessibility` (default: WCAG 2.2 AA for anything on screen).
6. **Propose 2–3 directions** in one or two lines each, using `design-studio:visual-styles` and
   `design-studio:design-history`. Each one names a base style, an optional expressive layer, a precedent whose
   method it borrows, and why it fits this audience.
7. **Hand off.** Ask the user to confirm or pick a direction. Then continue with `design-studio:creative-director`.

## Template

```markdown
# Creative brief: <project>

**Background:** 2–3 sentences: who the client is, what's happening, why now.
**Objective:** what this must achieve, measurable if possible (e.g. "raise trial sign-ups from the landing page").
**Audience:** primary audience: who they are, context of use, what they need, what stops them. Secondary audience if any.
  Describe behavior and context, not stereotypes (see `cognitive-psychology` → audience-and-culture).
**Insight:** the one human truth the work builds on.
**Single-minded message:** one sentence the audience should take away.
**Deliverables and specs:**
| Deliverable | Medium | Spec (size, format, safe zone, bleed) | Source, verified |
**Mandatories:** logo and brand assets, legal lines, required copy, partner marks.
**Tone of voice:** 3 adjectives, plus 1 "not" (e.g. "confident, warm, plain — not corporate").
**Directions:** 2–3 options (base style + expressive layer + precedent + why).
**Constraints:** deadline, budget, tools and channels (Figma, code, Canva, image generation), languages and scripts,
  accessibility level (default WCAG 2.2 AA).
**Success measures:** how we'll judge it (metric, test, or review criteria).
**Open questions / assumptions:** list.
```

## Rules

- **Decide, don't list.** Each section takes a position. "Audience: everyone" is not an answer. Pick the primary
  audience.
- **One message.** If you can't say the single-minded message in one sentence, the brief isn't done.
- **No invented facts.** Never invent statistics, market data, or customer quotes. Mark unknowns as unknown.
- **Ethics up front.** If the objective involves persuasion (sales, sign-ups, consent, retention), note that the work
  must pass the Truth and Symmetry tests (`cognitive-psychology` → dark-patterns-and-ethics).
- **Reply in the user's language.** The template headings may stay in English if the user works in English.
