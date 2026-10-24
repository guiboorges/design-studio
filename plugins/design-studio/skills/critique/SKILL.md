---
name: critique
description: Structured, evidence-based critique of any design — screenshot, image, URL, Figma link, code, PDF, or a description — against its goal, audience, and medium. Covers message, hierarchy and composition, typography, color and contrast (computed), layout and spacing, accessibility (WCAG 2.2), medium specs, audience psychology and ethics, and style coherence. Returns findings ranked Blocker, Major, Minor, Polish, each with location, the principle and its evidence grade, and a concrete fix. Use when the user asks to review, critique, audit, give feedback on, or improve a design, or asks "what's wrong with this" or "is this good".
argument-hint: "[image, link, Figma URL, file, or description] [optional: goal, audience, medium]"
---

# Critique

A critique is useful when the designer knows exactly what to change and why. This skill grounds every judgment in
the design-studio knowledge skills and separates evidence from taste.

## 1. Get the artifact and its context

- **Artifact:** read the image or file. For a URL, use an available browser or screenshot tool. For a Figma link,
  use the Figma tools (load their mandatory skills first). For code, read it, and render it if a tool is available.
  If you can't see the design, say so and ask for a screenshot. Don't critique what you can't see.
- **Context:** goal, audience, medium, and stage (concept, in progress, final). If unknown, infer from the artifact,
  state the inference in one line, and continue. Ask only if the inference would change the verdict.

## 2. First impression (5-second read)

In two lines: what you see first, second, and third. Then: what the design is trying to say. If those differ from the
goal, that's the headline finding.

## 3. Review by dimension

Invoke the knowledge skill for each relevant dimension and use its rules, values, and checklists. Measure where you
can; when you can't, label it "estimated".

| # | Dimension | Check | Skill |
|---|---|---|---|
| 1 | Message and goal | One message? Does the call to action match the goal? | `creative-director` sign-off, the brief |
| 2 | Hierarchy and composition | One dominant element; clear steps; squint test; focal path; balance | `layout-composition` (hierarchy) |
| 3 | Layout, grid, spacing | Alignment to columns and baselines; inside < between spacing; consistent scale | `layout-composition` (grids) |
| 4 | Typography | Choice fits voice and medium; sizes, measure, leading, tracking; hierarchy levels; licensing risk | `typography` |
| 5 | Color and contrast | Contrast computed per text and background pair; color not the only signal; palette relationships; dark mode | `color` |
| 6 | Accessibility | Focus, targets, motion, alt text, forms, reading order (for UI); WCAG 2.2 AA | `accessibility` |
| 7 | Medium fit | Size, safe zones, bleed, resolution, letter height for distance, platform conventions | `media-specs` |
| 8 | Audience and psychology | Fit to the audience; cognitive load; persuasion that passes the Truth and Symmetry tests | `cognitive-psychology` |
| 9 | Style and originality | Coherent base plus at most one expressive layer; dated trend risk; precedent borrowed, not copied | `visual-styles`, `design-history` |
| 10 | Default vs. decision (AI slop) | Tell clusters from templates and generators; substitution test; invented proof; missing states; AI image, logo, and copy tells. Report clusters with their cause, never accuse the author | `ai-slop` |

Skip dimensions that don't apply (e.g. focus states on a billboard) and say you skipped them.

## 4. Severity

| Level | Meaning | Examples |
|---|---|---|
| **Blocker** | Fails the goal, the law, or basic access; must fix before shipping | Body text at 2.8:1, CTA invisible, deceptive countdown, text in a story's bottom 35%, an invented testimonial or metric |
| **Major** | Significantly weakens the result | Two competing focal points, measure of 110 characters, wrong ratio for the platform, an unrequested AI-default cluster on a brand-defining page |
| **Minor** | Noticeable but local | Inconsistent spacing step, widow in a headline, slightly tight tracking on caps |
| **Polish** | Craft refinements | Optical alignment, kerning pairs, icon stroke consistency |

## 5. Output format

```markdown
**Verdict:** one sentence (works / works with fixes / needs rethink) + the single most important change.

**What works:** up to 3 specific strengths, so they aren't lost in revision.

**Findings:**
| # | Severity | Where | Issue | Why (principle · grade · skill) | Fix |
|---|---|---|---|---|---|

**Next 3 actions:** in order.
**Not checked:** dimensions skipped and why; values estimated rather than measured.
```

## Rules

- **Specific and fixable.** Say "Headline 28px and subhead 26px read as one level: take the headline to 40px or
  the subhead to 18px," not "improve hierarchy." Never write "make it pop."
- **Evidence vs. taste.** Tag claims about effects on people with their grade. Label personal or stylistic preferences
  as "taste" and keep them out of Blocker and Major.
- **Measure, don't guess.** Compute contrast from hex values (`color` → contrast formula). Read sizes from the file
  when possible.
- **Critique the work, not the person.** Be direct and kind. Start from what the design is trying to do.
- **Respect the stage.** Don't polish-critique a concept sketch; focus on direction and hierarchy.
- **Reply in the user's language.**
