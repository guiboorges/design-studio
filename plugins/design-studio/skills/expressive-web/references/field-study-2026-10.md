# Field Study: 13 Awwwards Sites of the Day (October 2026)

> **Scope:** What makes current award-level sites feel alive, observed first-hand: each site's concept, mechanic, motion, type, color, stack, and the measured patterns they share.
> **Last verified:** 2026-10 (all sites opened 2026-10-27 in Chrome on macOS at a 1512×799 viewport, DPR 2).
> **Used by:** creative-director, ui-designer, art-director, design-critic

## How to use this file

- Read **§2 Cross-site findings** before setting the direction of an expressive site. It holds the shared, measured
  traits. Read a **§3 site entry** when you need a precedent for one specific mechanic. Each entry ends with the
  method to borrow.
- These sites are evidence of what award juries reward this month, not proof that the techniques help users. Treat
  usability claims as [E3] unless a cited study backs them (`SKILL.md` rule 7, `accessibility`).
- Borrow the *method* (how a concept became a mechanic), never the look. Copying a winning site's look produces the
  next template (`ai-slop`).

## 1. Method

- **Sample.** The 13 most recent Sites of the Day listed on https://www.awwwards.com/websites/sites_of_the_day/ on
  2026-10-27, chosen for spread: agency, studio, portfolio, luxury, real estate, automotive, film, event, audio, sport,
  SaaS, and music. The live URL of each site came from its "Visit site" link on Awwwards.
- **Probe.** On each page a script read the stack signals (`window.gsap`, `ScrollTrigger`, Lenis classes, `THREE`
  revision, Webflow, Next, Nuxt, Barba), the canvas count and size, the loaded `document.fonts`, computed body colors,
  `position: fixed` layers, cursor elements, `mix-blend-mode` values, `clip-path` count, and the number of
  single-character `<span>`s (a split-text signal). It also counted computed `transition-timing-function` and
  duration pairs and scanned stylesheets for `prefers-reduced-motion`, `view-transition`, and `animation-timeline`.
- **Interaction.** The page was scrolled with synthetic wheel events (so smooth-scroll and virtual-scroll libraries
  respond) in steps of about 1, 2, 2.5, and 3.5 screens, with a screenshot after each step settled. Hover and click
  were tested on the main mechanic. For cookie banners, the most privacy-preserving option was chosen.
- **Limits.** Desktop only, so phone behavior was not observed. Screenshots catch states, not curves: the easing
  values come from CSS transitions, and JS-driven tweens (GSAP, the WebGL render loop) are described from what was
  seen, not measured. One visit per site, so A/B variants and time-based content (Brandon Yasin's time-of-day
  palette) show one state only. Raw notes are in `dev/research/expressive-web-2026-10/field-notes.md`.

## 2. Cross-site findings

### 2.1 What gives these sites life (the shared model)

Every site that felt alive had all five of these. The two that felt flattest (OFFF, Signal-A) still had 1, 2, and 5.

| # | Ingredient | What it means | Seen in |
|---|---|---|---|
| 1 | **A concept that becomes the mechanic** | The subject of the site decides how you move through it. Format morphs paper into formats. Maria Vasilyeva's portfolio is a playhead running over a track. A24's films are DVDs you flip through. Overworld's logo is the terrain you fly over. | 12/13 |
| 2 | **One signature moment** | One interaction that people describe afterward ("the stone floods the screen with green", "the car drives down the page"). Everything else is quiet. | 13/13 |
| 3 | **Continuous response** | Something always answers the user: smooth-scroll inertia, a cursor label, a parallax drift, a live clock, grain that moves. The page never sits dead between actions. | 13/13 |
| 4 | **Choreography, not decoration** | Things enter in an order with one house easing. Headline words resolve one by one, sections hand over to each other (a curtain lifts, the camera passes through the facade), and nothing fades up just because it entered the viewport. | 12/13 |
| 5 | **Authored type and real assets** | A custom or licensed display face, real photography, renders, or drawings of the actual subject. No stock, no default UI kit. | 13/13 |

### 2.2 Measured patterns

| Trait | Finding | Count |
|---|---|---|
| Smooth scroll | Lenis (class on `<html>` or a wrapper) | 10/13 |
| Timeline library | GSAP 3.12–3.15 + ScrollTrigger (3 of the 4 on Webflow) | 4/13 |
| Real-time 3D | Three.js r128–r185, always one full-screen canvas behind the DOM | 5/13 |
| Other full-screen canvas | Film grain or noise (Forge), a custom 2D renderer (Maria Vasilyeva) | 2/13 |
| Page transitions | Barba (Heron), CSS view transitions (Emotion) | 2/13 |
| CSS scroll-driven animation (`animation-timeline`) | Brandon Yasin, Format | 2/13 |
| Split text (many 1-character spans) | Emotion 967, Nick Ho 479, Forge 319, Signal-A 121, Format 93 | 5/13 |
| `clip-path` reveals or masks | Heron 87, Forge 36, Belgrade Arbor 24, Format 21 | most |
| `prefers-reduced-motion` CSS present | Cartier, Forge, Nick Ho, Heron | 4/12 measured |
| Entry gate before the site | Sound choice (Emotion, Overworld), consent folded into "Enter" (Forge), "choose a stone" (Cartier) | 4/13 |
| Sound toggle | Emotion, Overworld, Cartier, plus the Emotion settings panel | 4/13 |
| Live time in the header | Brandon Yasin (which also drives the palette), Signal-A, Format | 3/13 |
| Custom cursor or cursor label | Signal-A, Cartier, Nick Ho, A24 (hover scribble) | 4/13 |

**The accessibility gap.** Only 4 of 12 measured sites ship any `prefers-reduced-motion` rule, and none of the 3D sites
offered a visible reduced-motion switch (Emotion has a settings panel for quality and sound). Award juries don't
penalize this enough to stop it. Our sites must close that gap. It is also where an expressive site can beat these
winners on the Usability score (30% of the Awwwards grade, `design-history` → `web-creators-studios-awards.md`).

### 2.3 Motion values (house easings)

Each site applies **one dominant easing to most of its transitions**. The top easing covered 46 to 482 elements per site.

| Site | Dominant curve | Name | Durations seen |
|---|---|---|---|
| Nick Ho | `cubic-bezier(0.19, 1, 0.22, 1)` | expo-out | 0.6 s (482 elements), 0.75 s |
| Forge | `cubic-bezier(0.43, 0.195, 0.02, 1)` | custom hard ease-out | 0.5 s (291), 0.75 s |
| A24 | `cubic-bezier(0.77, 0, 0.18, 1)` | quart in-out | 0.3 s (247); `(0.32, 0.72, 0, 1)` 0.14–0.4 s for UI |
| Belgrade Arbor | `cubic-bezier(0.4, 0, 0.2, 1)` | Tailwind/Material standard | 0.65 s (148), 0.5 s, 0.3 s |
| Format | `cubic-bezier(0.22, 1, 0.36, 1)` | quint-out | 0.45 s (46) |
| Heron | `ease` 0.4 s; `cubic-bezier(0.625, 0.05, 0, 1)` | in-out with a long tail | 0.4–0.5 s |
| Emotion | `cubic-bezier(0.65, 0, 0.35, 1)` / `(0.16, 1, 0.3, 1)` | sine in-out / expo-out | 0.3 s / 0.4–0.5 s |
| Brandon Yasin | `cubic-bezier(0.87, 0, 0.13, 1)` | expo in-out | 0.2–0.75 s |
| Maria Vasilyeva | `cubic-bezier(0.16, 1, 0.3, 1)` | expo-out | 1.4 s (slow, cinematic) |
| Cartier | `ease-in-out` | standard | 0.888 s (slow, deliberate) |

Reading: **strong ease-out** (expo or quint-out) for things that enter or respond, **in-out** for things that travel
from A to B (page transitions, carousels), and luxury slows everything down (Cartier ~0.9 s, Maria Vasilyeva 1.4 s)
where sport and automotive stay short and hard (Forge, Nick Ho at 0.5–0.6 s).

### 2.4 Type and color

- **Display faces are custom or licensed on all 13** (Emotion Serif, Obys Sans, Forvm, Brilliant Cut Pro, PP Editorial
  New, Editorial Old, PP Museum, Ivar Headline, Anton, BT Grotesk). None uses Inter or another UI default as display.
- **The usual pairing is three voices.** One expressive display (high-contrast serif, condensed serif, or condensed
  sans), a neutral grotesk for text, and often a mono or tiny tracked caps for metadata (Signal-A, Emotion, Heron,
  Format).
- **Display sizes** 88–181 px at 1512 px wide, line-height 0.8–1.05, tracking −0.02 to −0.04 em. Metadata sits at
  10–14 px in caps or mono. That contrast between huge and tiny is the hierarchy.
- **Color is monochrome plus one accent**, and the accent usually comes from the subject: Nick Ho's yellow livery,
  Forge's red 911, Heron's markup-pen red, Format's red photo, Emotion's violet world, Cartier's stone colors. Color
  lives in photography and 3D, not in UI chrome.

### 2.5 Structure and chrome

- **The header is tiny.** It uses 10–12 px caps or mono links, often pushed to the four corners or spread across the
  grid columns (Signal-A, Brandon Yasin), sometimes in a floating pill (Belgrade Arbor). Content gets the screen.
- **The grid is visible.** Hairline column lines (Nick Ho), drafting grids with crop marks (Heron), hairline tables
  (OFFF, A24, Overworld). The structure itself becomes ornament.
- **Lists are editorial tables:** title, year, client, scope, and an action per row, with a hover preview (Signal-A,
  Overworld).
- **Progress is shown:** a thin bar bottom-left (Forge, Belgrade Arbor), a chapter counter "2/5" (Nick Ho), or
  "01 / 03" (Forge).

## 3. Site entries

Each entry: concept → mechanic → details → stack → **Borrow**.

### 3.1 Brandon Yasin, portfolio (brandonyasin.com)
- **Concept:** a creative director's archive as a magazine rack, with a palette that follows the time of day (a
  draggable clock lets you "time travel").
- **Mechanic:** the document doesn't scroll. The wheel drives a horizontal, infinite loop of 4:5 project images. The
  intro is an overlapping collage that spreads out into the strip.
- **Details:** labels in tiny caps above each image, a signature-script logo in the center, "LOCAL TIME" in the header,
  H1 108 px with −0.04 em tracking, Neue Haas Unica plus Helvetica Now.
- **Stack:** Lenis and CSS scroll-driven animation, no WebGL.
- **Borrow:** map vertical wheel to horizontal travel when the content is a sequence. Let one real-world variable
  (time, weather, location) drive the theme.

### 3.2 Emotion, agency (emotion-agency.com)
- **Concept:** "technology as emotion". A purple dream world.
- **Mechanic:** Three.js world (lake, grass, rocks, a tree). Scroll flies the camera through it. A particle cloud
  morphs per chapter: the logo "e", a sphere, a tree canopy, a ring.
- **Details:** an entry gate ("Enter with audio / Enter without audio"). Each chapter is one headline in a custom serif
  at 115/92 px in caps, with one italic word ("*Where*", "*We*", "*With*"), a pill tag, and a mono caption. Headlines
  warp with a refraction wave at chapter changes. A settings panel controls quality and sound, and an AI assistant
  bubble sits in the corner.
- **Stack:** Three.js r185, Lenis on a virtual wrapper (26,000 px of travel), CSS view transitions, 967 split
  characters.
- **Borrow:** one morphing hero object that changes form per chapter, so the story has a protagonist. Offer quality and
  sound settings.

### 3.3 FORMAT, Obys × DES special project (format.obys.agency)
- **Concept:** format as a design tool.
- **Mechanic:** paper sheets morph between formats as you scroll (rectangle, half disc, circle, triangle) using
  `clip-path`, and fan out like printed specimens.
- **Details:** a giant edge-to-edge stencil wordmark, a vertical ticker of formats (Editorial, TV, Advert, Desktop,
  Business Cards), 14 px meta row, one custom face (Obys Sans), dark gray stage, grayscale photos with one red image.
- **Stack:** Vite, Lenis, CSS scroll-driven animation, 21 clip-path elements, no WebGL.
- **Borrow:** when the subject is a property (shape, size, rhythm), make the scroll change that property.

### 3.4 Signal-A, interface studio (signal-a.studio)
- **Concept:** typography as proof of craft.
- **Mechanic:** a statement paragraph set in three faces mid-sentence (ultralight condensed serif caps, heavy
  grotesk, light mono), fully justified. In the case-study index each project name is set in that project's own
  typeface, and hovering a row shows a cursor-following device mockup.
- **Details:** a 6-column mono header with a live clock, a showreel with a play/pause cursor, and a footer marquee of
  the wordmark in alternating styles.
- **Stack:** Webflow, GSAP 3.15, ScrollTrigger, Lenis, Swiper.
- **Borrow:** let each list item carry its own identity (type, color, image) while the list stays one system.

### 3.5 Belgrade Arbor, residential complex (belgradearbor.rs)
- **Concept:** the building's facade (tree-canopy cutouts) is the brand.
- **Mechanic:** the hero facade render. Scroll pushes the camera through a facade opening into deep green foliage.
  Photos are masked in the irregular facade-cell shapes and drift at two speeds.
- **Details:** large serif paragraphs reveal word by word as you scroll (read words cream, unread words dim). A curtain
  lifts from green to a cream section. A floating dark pill nav (Menu | logo | Inquire), a thin progress line, and ghost
  buttons with a circled arrow.
- **Stack:** Next.js, Three.js r184, Lenis, 7 videos, Tailwind easing.
- **Borrow:** extract one shape from the real subject (a facade, a product silhouette, a logo) and reuse it as the
  image mask everywhere.

### 3.6 Cartier, *Le Chœur des Pierres* (cartier.com/en-fr/lechoeurdespierres)
- **Concept:** high jewelry told through its stones.
- **Mechanic:** "choose a stone". Two cabochons sit on white silk. Hovering one blooms its color into the silk, and the
  cursor label changes to "DISCOVER PANTHÈRE TUNYA". Clicking floods the screen with the stone's color as a blur, and
  the necklace resolves from blur to sharp over about 3 s. Scrolling then wipes the photo away in watercolor blots to
  reveal the archive gouache drawing beneath it, Cartier stamp included.
- **Details:** Cartier's own faces (Brilliant Cut, Fancy Cut). The title lockup mixes an italic article with roman
  caps ("*Le* CHŒUR *des* PIERRES"). Transitions run at about 0.89 s. The cursor is a soft light disc, with a SOUND
  toggle, and the page has reduced-motion CSS. Two dialogs (cookies, location) come first.
- **Stack:** Nuxt, video and layered images, no WebGL canvas.
- **Borrow:** a choice as the entry point, color as the transition, and a reveal that shows the craft layer under the
  product.

### 3.7 A24 reimagined, experimental (a24.raviklaassens.com)
- **Concept:** films as physical DVDs.
- **Mechanic:** 3D discs lie in a diagonal row receding in perspective, and the wheel moves the row. Hovering the
  active disc draws a hand-drawn ink circle around it (SVG stroke). Clicking slides the disc down into a film-credit
  "billing block" detail page.
- **Details:** a credits table at top left (DIRECTED BY / YEAR / STARRING) that swaps per film, press quotes with stars
  in serif caps, print registration "+" marks, and "WATCH ONLINE" between double rules.
- **Stack:** Three.js r178, GSAP 3.15, ScrollTrigger, Lenis.
- **Borrow:** turn the content into the object people used to hold, and annotate it by hand.

### 3.8 Forge Automotive, bespoke cars (forgeautomotive.co.uk)
- **Concept:** "For those who refuse ordinary".
- **Mechanic:** a black gate whose two buttons are the cookie choice ("ACCEPT & ENTER / REJECT & ENTER"), so no banner
  covers the hero. The headline then assembles word by word, each word starting small and blurred and resolving to
  sharp.
- **Details:** three cars in a dark studio, with the red car as the only color. Live film grain on canvas. Chapters
  "01 / 03" use the same photo twice: sharp in a card, blurred and enlarged as the background. Giant serif service
  titles get a red underline wipe.
- **Stack:** Next.js, Lenis, 3 canvases (grain, screen blend), 319 split characters, reduced-motion CSS.
- **Borrow:** fold a required step (consent) into the entry ritual. Get depth from a blurred copy of the same asset.

### 3.9 OFFF Forum, festival (offforum.com)
- **Concept:** design-culture festival.
- **Mechanic:** full-bleed event photos cycling with hard cuts behind a fixed caps statement.
- **Details:** a lockup that collides two type worlds (geometric OFFF slabs + the classical serif "FORVM"), an info
  table with hairlines, and the lockup repeated edge to edge in the footer. The page is short (about 1.5 screens).
- **Stack:** Lenis and Tailwind only.
- **Borrow:** restraint wins too. One strong lockup, real photos, and one motion idea (hard cuts) are enough.

### 3.10 Overworld Audio, sonic branding for games (overworldaudio.com)
- **Concept:** the logo is a place.
- **Mechanic:** a wireframe logo gate ("ENTER WITH SOUND" first, because sound is the product). Then a misty 3D terrain
  carved in the logo's concentric-ring shape, with glowing crystals as points of interest and a camera that drifts
  with the mouse.
- **Details:** Ivar Headline serif, tiny tracked caps nav. The work page is an editorial table with a ▶ PLAY button per
  row, and hovering reveals a blurred image band of that game behind the row.
- **Stack:** Three.js r184 and Howler.
- **Borrow:** if the product is a sense (sound, taste, texture), offer that sense first. Build the world from the
  brand mark.

### 3.11 Nick Ho, racing driver (nickho-motorsports.nl)
- **Concept:** a driver's career, told in the visual language of the pit wall.
- **Mechanic:** a race calendar where a top-down car drives down the page as you scroll, and a 3D helmet rotating in
  the center cell of the sponsor grid.
- **Details:** visible 6-column hairline grid over the whole site, B/W photos plus one yellow accent, Anton condensed
  caps, a giant "98", stat counters, a manifesto with yellow highlighted phrases, and pinned chapters "2/5".
- **Stack:** Webflow, GSAP 3.15, ScrollTrigger, Lenis, Three.js r128, custom cursor, reduced-motion CSS.
- **Borrow:** a scroll-scrubbed object that carries the narrative (the car is the scroll indicator).

### 3.12 Heron AI, agent for architects (heronaiapp.com)
- **Concept:** the product works inside architects' drawings, so the site is a technical drawing.
- **Mechanic:** floor-plan wall fragments fly in from every side and assemble around "FOR THE WHOLE DESIGN" as you
  scroll. The product is shown as wireframe screens with the selected room filled red, next to the chat panel.
- **Details:** a drafting grid with "+" crop marks, a stippled engraving of a modernist house, isometric wireframe
  icons, [01] indices in mono, a "SCROLL TO CONTINUE" terminal card, and Accept and Reject cookie buttons of equal
  weight.
- **Stack:** Webflow, GSAP 3.12.5, ScrollTrigger, Lenis, Barba, 87 clip-paths, reduced-motion CSS.
- **Borrow:** for a SaaS, draw the product in the user's own professional notation instead of screenshots and
  gradients.

### 3.13 Maria Vasilyeva, designer portfolio (mariavasilyeva.com)
- **Concept:** a portfolio as a music track.
- **Mechanic:** a strip of thumbnails runs like a waveform, and a vertical playhead moves with the wheel. When it
  crosses a project, that project's images burst outward into a collage (a "beat"), then collapse.
- **Details:** thin black side rails with vertical labels (tape deck / DAW chrome), a handwritten "Scroll" circled at
  the top, and a handwritten "More details" with an arrow.
- **Stack:** a custom canvas renderer, no GSAP or Lenis, a 1.4 s expo-out.
- **Borrow:** borrow the interface of the subject's own world (a DAW, a pit wall, a drafting table) as the site
  chrome.

## Sources

[1] Awwwards. *Sites of the Day*. https://www.awwwards.com/websites/sites_of_the_day/ (accessed 2026-10-27)
[2] Brandon Yasin. https://brandonyasin.com/ (accessed 2026-10-27)
[3] Emotion Agency. https://emotion-agency.com/ (accessed 2026-10-27)
[4] Obys × DES. *FORMAT*. https://format.obys.agency/ (accessed 2026-10-27)
[5] Signal-A Studio. https://signal-a.studio/ (accessed 2026-10-27)
[6] Belgrade Arbor. https://belgradearbor.rs/en (accessed 2026-10-27)
[7] Cartier. *Le Chœur des Pierres*. https://www.cartier.com/en-fr/lechoeurdespierres (accessed 2026-10-27)
[8] Ravi Klaassens. *A24*. https://a24.raviklaassens.com/ (accessed 2026-10-27)
[9] Forge Automotive. https://forgeautomotive.co.uk/ (accessed 2026-10-27)
[10] OFFF Forum. https://www.offforum.com/ (accessed 2026-10-27)
[11] Overworld Audio. https://overworldaudio.com/ (accessed 2026-10-27)
[12] Nick Ho Motorsports. https://nickho-motorsports.nl/ (accessed 2026-10-27)
[13] Heron AI. https://heronaiapp.com/ (accessed 2026-10-27)
[14] Maria Vasilyeva. https://www.mariavasilyeva.com/ (accessed 2026-10-27)
