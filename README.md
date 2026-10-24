# Design Studio

[![Release](https://img.shields.io/github/v/release/guiboorges/design-studio?label=Release&color=FF7722&logo=github&labelColor=2B1A12&logoColor=white)](https://github.com/guiboorges/design-studio/releases/latest) [![Built with](https://img.shields.io/badge/Built%20with-Claude-B7410E?logo=claude&labelColor=2B1A12&logoColor=white)](https://claude.com/claude-code) [![PRs](https://img.shields.io/badge/PRs-welcome-FF7722?logo=github&labelColor=2B1A12&logoColor=white)](https://github.com/guiboorges/design-studio/pulls) [![License](https://img.shields.io/github/license/guiboorges/design-studio?label=License&color=B7410E&logo=opensourceinitiative&labelColor=2B1A12&logoColor=white)](LICENSE)

A full design team for **Claude Code** and **OpenAI Codex**. A creative director diagnoses your request and brings in
specialist agents. Every decision rests on a research-verified, cited design knowledge base. It covers apps, websites,
design systems, brands, magazines, social posts, billboards, and packaging.

> **v1.0.0:** the creative director, 9 specialists, and 8 knowledge skills. Phases 2–4 (design systems, UX methods, motion, brand,
> editorial, image direction) are on the [roadmap](docs/ROADMAP.md).

## What's inside

| Part | Contents |
|---|---|
| **Creative director** | Auto-triggers on design requests. Diagnoses the brief, picks a direction, loads the right knowledge, dispatches specialists in parallel, and signs off with accessibility, spec, evidence, and ethics checks. |
| **Workflows** | `brief` (vague request → creative brief), `critique` (severity-ranked, evidence-based review). |
| **Knowledge skills** | `typography`, `color`, `layout-composition`, `accessibility`, `media-specs`, `visual-styles` (31 styles with token recipes), `design-history` (~60 masters, movements, studios), `cognitive-psychology` (evidence-graded biases, laws of UX, dark-pattern ethics), `ai-slop` (the tells that make work read as AI-generated or templated, and what to do instead, checked at every sign-off). Every claim is cited. Volatile specs carry the month they were verified. |
| **Specialists** | `design-critic`, `typographer`, `color-specialist`, `accessibility-specialist`, `art-director`, `social-media-designer`, `print-ooh-designer`, `ui-designer`, `editorial-designer`. |

## Examples

Designs made with Design Studio and kept in the [design library](library/). They were designed in Figma first,
then exported to tokens, CSS, and components.

**Lustro v2:** a warm dashboard design system with a gradient window, frosted navigation, and ink action pills, in
light and dark mode. See [`library/design-systems/lustro-v2`](library/design-systems/lustro-v2/).

| Light | Dark |
|---|---|
| ![Lustro v2 Overview, light mode](library/design-systems/lustro-v2/preview/screenshots/overview-light.png) | ![Lustro v2 Overview, dark mode](library/design-systems/lustro-v2/preview/screenshots/overview-dark.png) |

**Summit:** a dark-first smart home design system with lake-house imagery generated in Figma AI, orange data and teal
scenes. It also ships as a working app, [Summit Home](https://github.com/guiboorges/summit-home)
([live demo](https://guiboorges.github.io/summit-home/)). See [`library/design-systems/summit`](library/design-systems/summit/).

| Dark | Light |
|---|---|
| ![Summit dashboard, dark mode](library/design-systems/summit/preview/dashboard-dark.png) | ![Summit dashboard, light mode](library/design-systems/summit/preview/dashboard-light.png) |

The working app, Summit Home, in the browser:

![Summit Home running in the browser, dark mode](library/design-systems/summit/preview/app-dark.png)

**Clearbook:** a glass design system for accounting dashboards, with translucent panels over studio photos generated
in Figma AI and contrast measured on rendered pixels. It also ships as a working app,
[Clearbook](https://github.com/guiboorges/clearbook) ([live demo](https://guiboorges.github.io/clearbook/)). See
[`library/design-systems/clearbook`](library/design-systems/clearbook/).

| Dark | Light |
|---|---|
| ![Clearbook Overview, dark mode](library/design-systems/clearbook/preview/overview-dark.jpg) | ![Clearbook Overview, light mode](library/design-systems/clearbook/preview/overview-light.jpg) |

The working app, Clearbook, in the browser:

![Clearbook running in the browser, dark mode](library/design-systems/clearbook/preview/app-dark.png)

**Ember:** a warm, light-first design system for running a small business with an online store: wallets, cards, and
orders, with menu and submenu navigation and a collapsible sidebar. It also ships as a working app,
[Ember Commerce](https://github.com/guiboorges/ember-commerce) ([live demo](https://guiboorges.github.io/ember-commerce/)).
See [`library/design-systems/ember`](library/design-systems/ember/).

| Light | Dark |
|---|---|
| ![Ember Overview, light mode](library/design-systems/ember/preview/overview-light.jpg) | ![Ember Overview, dark mode](library/design-systems/ember/preview/overview-dark.jpg) |

The working app, Ember Commerce, in the browser:

![Ember Commerce running in the browser: Orders in dark mode with the sidebar collapsed](library/design-systems/ember/preview/app-orders-dark.png)

**Fairway:** a light-first design system for running a golf course and its business, with frosted glass over an
aerial course photo generated in Figma AI, forest ink, and one electric lime. Its working app covers 13 pages, from
the course map and the tee sheet to carts, agronomy, the pro shop till, stock, staff, and accounting. See
[`library/design-systems/fairway`](library/design-systems/fairway/).

| Light | Dark |
|---|---|
| ![Fairway Overview, light mode](library/design-systems/fairway/preview/overview-light.jpg) | ![Fairway Overview, dark mode](library/design-systems/fairway/preview/overview-dark.jpg) |

The working app, Fairway Course, in the browser:

![Fairway Course running in the browser: Carts, Point of sale, Staff, and Accounting](library/design-systems/fairway/preview/app-pages.jpg)

## Install

### Claude Code

```
/plugin marketplace add guiboorges/design-studio
/plugin install design-studio@design-studio
```

You get everything: the skills, the 9 specialists (they run on Sonnet to keep multi-agent work affordable), and a
`SessionStart` hook. The hook is about 120 tokens once per session. It points the model to the creative director, so
design requests use the verified knowledge instead of memory.

To try it without installing, clone the repo and run `claude --plugin-dir ./plugins/design-studio`.

### OpenAI Codex

1. **Plugin (skills):**

   ```bash
   codex plugin marketplace add guiboorges/design-studio
   ```

   Then enable **Design Studio** in the plugins directory of the Codex app. Or add this to `.codex/config.toml`:

   ```toml
   [plugins."design-studio@design-studio"]
   enabled = true
   ```

2. **Specialist agents.** Codex plugins can't bundle custom agents, so install them once from a clone:

   ```bash
   git clone https://github.com/guiboorges/design-studio.git
   ./design-studio/plugins/design-studio/codex/install.sh --agents-md
   ```

   This copies the 9 agents to `~/.codex/agents/`. `--agents-md` adds a short routing note to `~/.codex/AGENTS.md`,
   which is Codex's equivalent of the Claude Code hook. Use `--project DIR` to install the agents for one project only.
   Use `--skills` to link the skills into `~/.agents/skills/` if you'd rather not install the plugin.

3. **Optional: cheaper specialists.** Set `agents.default_subagent_model` in `~/.codex/config.toml` to a faster model.

Restart Codex after installing.

### Feature comparison

| | Claude Code | Codex |
|---|---|---|
| Knowledge skills, creative director, brief, critique | ✅ | ✅ (invoke with `$creative-director`, `$brief`, `$critique`) |
| Specialist agents | ✅ bundled, knowledge preloaded | ✅ via `install.sh`; each agent loads its skills on start |
| Parallel team dispatch by the creative director | ✅ automatic | ✅ the director asks for the agents by name |
| Auto-routing nudge | `SessionStart` hook | `AGENTS.md` note (`--agents-md`) |

## Use

Ask in plain language. You don't need commands.

- "What size is an Instagram story, and where are the safe zones?"
- "Is #8A8A8A on white accessible?"
- "Create a color palette for a meditation app, with dark mode."
- "Design an A2 poster for a jazz festival."
- "Launch a specialty coffee brand: visual direction, a 5-slide carousel, and a store poster."
- "Critique this landing page" (attach a screenshot or link).

With the Figma, Canva, or an image-generation connector installed, ask for the output there. Without them you get
precise written specs and code.

## Contributing

Knowledge files follow [docs/KNOWLEDGE-STANDARD.md](docs/KNOWLEDGE-STANDARD.md): primary sources, inline citations,
evidence grades, and verification dates. Agents are defined once in `plugins/design-studio/agents/*.md` (Claude Code
format). After editing one, regenerate the Codex versions:

```bash
python3 scripts/build-codex-agents.py
```

Test trigger reliability with `python3 dev/trigger-test/run.py`. It runs headless Claude Code sessions and costs about
$0.30 per prompt.

## License

[MIT](LICENSE) © 2026 Guilherme Borges
