# Knowledge Standard

Every file in a knowledge skill follows these rules. They exist so agents can trust what they read
and users can check it.

## 1. Structure of a knowledge skill

```
skills/<skill-name>/
├── SKILL.md            # < 500 lines. Principles, decision guidance, quick-reference tables,
│                       # and an index that says WHEN to open each reference file.
└── references/
    └── <topic>.md      # Deep material. One topic per file. No hard length limit, but
                        # aim for < 1,500 lines; split when larger.
```

`SKILL.md` frontmatter for knowledge skills:

```yaml
---
name: <skill-name>
description: <what it contains and when an agent should consult it — max ~1,000 chars>
user-invocable: false
---
```

(`user-invocable: false` hides it from the slash menu but keeps it model-invocable and preloadable by agents.
Never use `disable-model-invocation: true` on knowledge skills: it prevents preloading.)

## 2. Reference file header

```markdown
# <Topic>

> **Scope:** one sentence.
> **Last verified:** YYYY-MM (required for anything that changes: platform specs, guidelines, laws, company status).
> **Used by:** <agent names>
```

## 3. Evidence grades

Tag every substantive claim about effects on people (perception, behavior, persuasion, usability):

| Tag | Meaning |
|-----|---------|
| **[E1]** | Established research: peer-reviewed, replicated, or meta-analytic support. |
| **[E2]** | Practitioner consensus or authoritative standard: NN/g, WCAG, platform guidelines, widely documented industry practice. |
| **[E3]** | Popular but weak or contested: failed replications, small/old samples, mostly anecdotal, or commonly overstated. Explain the caveat. |

When a famous finding has replication problems (e.g. the jam-study choice-overload effect, ego depletion,
"7±2" applied to menus), say so explicitly and give the corrected reading.

## 4. Citations

- Inline numeric markers: `... reduces decision time [3].`
- A `## Sources` section at the end of each file: `[n] Author(s). (Year). *Title*. Publisher/Venue. URL`
- Prefer primary sources (original paper, the designer's own writing, the official spec) over summaries.
  When only a secondary source is available, say so.
- Do not cite a source you have not opened in this research pass. If a fact cannot be verified, omit it
  or mark it `[unverified]`.

## 5. Writing for agents

- Write instructions and decision rules, not essays. Lead with what to do.
- Every concept ends with **Apply** (how to use it in UI, web, print, social, OOH as relevant)
  and, where misuse is possible, **Limit** (the ethical or practical boundary).
- Prefer tables for comparisons and catalogs.
- Concrete over abstract: real examples (named products, works, campaigns) with year.
- English, US spelling. No emojis.

## 6. Dates and volatile facts

Platform specs, social formats, company status (acquired, closed), legal rules, and tool features change.
Each such fact carries the month it was verified, and the file header carries the oldest such date.
