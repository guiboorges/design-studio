# Awwwards SOTD field notes (2026-10-27, Chrome 1512x799)

## 1 brandonyasin.com (portfolio, creative director)
- Stack: Lenis, split text, CSS scroll-driven animation (animation-timeline found), no WebGL. Neue Haas Unica Pro + Helvetica Now. bg #F8F6F2 ink #111.
- Page height = viewport (no document scroll): vertical wheel drives a horizontal infinite loop of project cards (images 4:5, label caption above in small caps). Intro: images stacked/overlapping collage -> spread into the strip.
- Concept: palette shifts with time of day; draggable clock "time travel" (LOCAL TIME 10 59 in header). Signature script logo center.
- Header: 4 corners grid, tiny 11px caps text. H1 108px/134 tracking -4.3px (-0.04em).
- Easing: cubic-bezier(0.87,0,0.13,1) (expo in-out) & (0.645,0.045,0.355,1) (cubic in-out); durations 0.2–0.75s. No reduced-motion CSS.

## 2 emotion-agency.com (agency)
- Stack: Three.js r185 full-screen canvas, Lenis on wrapper (virtual scroll 26k px), view transitions CSS, 967 single-char spans (split chars), IBM Plex Mono 500 + PP Neue Montreal + custom "Emotion Serif" 300.
- Gate: "Enter with audio / Enter without audio" (sound design opt-in, also primes interaction).
- Concept: a 3D world (purple lake, grass, rocks, cherry tree) the camera flies through as you scroll; a particle cloud morphs per chapter: logo "e" -> sphere -> tree canopy -> ring. Each chapter = one headline (serif caps 115px/92 line-height 0.8, one italic word "Where/We/With" in serif italic) + tiny mono caption + pill tag (VIBES, DESIGN, OUR PEOPLE).
- Headline text distorts with a WebGL/refraction wave at chapter transitions (TECHNOLOGY AS EMOTION seen warped mid-scroll).
- Easing: cubic-bezier(0.65,0,0.35,1) 0.3s (sine in-out) and (0.16,1,0.3,1) 0.4–0.5s (expo-out). Header: mono caps nav, SETTINGS (quality/sound), mute icon, ghost pill CTA "Let's talk ↳". AI assistant chat bubble bottom right.
- No reduced-motion CSS.

## 3 format.obys.agency (Obys x DES special project on "format")
- Stack: Vite bundle, Lenis, CSS scroll-driven animations, 21 clip-path elements, no WebGL. Single custom face "Obys Sans". bg #222 + white paper + grey photography + one red image.
- Concept = the subject is the mechanic: the page is a catalogue of formats (vertical, horizontal, square, circle, triangle). On scroll, paper "frames" morph between shapes via clip-path (rectangle sheet -> half disc -> circle -> triangle tab "TRIANGLE"), sheets fan out like printed specimens, words like "HRZNTL" / "Usage 1.1" act as section numbers.
- Giant cropped display wordmark FORMAT built from geometric stencil shapes at top, full width, edge to edge. Tiny 14px meta text in a strict row.
- Infinite repeating word list (Editorial / TV / Advert / Desktop / Business Cards) as a vertical ticker.
- Easing cubic-bezier(0.22,1,0.36,1) (quint-out) 0.45s on 46 elements = one house easing everywhere. Fixed clock "burst" element.

## 4 signal-a.studio (interface studio)
- Stack: Webflow + GSAP 3.15 + ScrollTrigger + Lenis + Swiper, jQuery. No WebGL. Custom cursor (cursor-play / cursor-pause on showreel).
- Type is the hero: statement paragraph set in 3 faces mixed mid-sentence (PP Editorial New Ultralight 100 condensed caps, Neue Haas Grotesk bold, GT America Mono 300), fully justified to the grid, bullet dot "●" lead. Under it, a scattered justified micro-paragraph spread across columns (words placed at column starts).
- Case study index: each project name is set in THAT project's own typeface (AGGRESSIVE in mono, TTMM heavy grotesk, Peter Tarka condensed serif); hovering a row shows a cursor-following preview (device mockup) that swaps per row. Meta in mono caps on a 6-col grid: "# — 5 / NOTABLE RECOGNITIONS / SITE INSPIRE, AWWWARDS SITE OF THE DAY / PROJECT SCOPE".
- Footer: infinite marquee of the wordmark alternating styles (italic serif "Signal-A", heavy sans "SIGNAL-A", mono "SIGNAL-A", "S—A" separators). Header: 6 mono caps links spread across the grid + live clock "11:00 CET".
- Showreel video framed in a wide letterbox that grows on scroll.

## 5 belgradearbor.rs (real-estate, residential + business complex)
- Stack: Next.js + Three.js r184 fixed full-screen canvas + Lenis, 7 videos, Tailwind (ease cubic-bezier(0.4,0,0.2,1) = Tailwind default, 0.65s on 148 elements). Work Sans + "Editorial Old" serif 300/400. Cream #FDFBEF + pine green. mix-blend multiply.
- Concept: the building's facade pattern (organic tree-canopy cutouts) is the brand. Hero = white facade render; scroll pushes the camera THROUGH a facade opening into deep green foliage (blurred leaves), then content appears.
- Photos are masked in irregular polygons taken from the facade cells (brand shape reused as image masks), two overlapping masked images per section drift at different speeds (parallax depth).
- Big serif paragraph (50px, +0.02em) reveals word by word: read words cream, unread words dim (scroll-scrubbed reading progress). H1 181px serif.
- Floating dark pill nav centred (Menu | logo | Inquire ->), slim progress line bottom-left. Ghost pill buttons with circle arrow. Section boundary: green curtain lifts off to cream section with tall photo (curtain/wipe).

## 6 cartier.com/lechoeurdespierres (luxury, high jewellery storytelling)
- Stack: Nuxt, no WebGL canvas (video + layered images + CSS), custom faces Brilliant Cut Pro / Fancy Cut Pro (Cartier's own), has prefers-reduced-motion CSS (only luxury brand of the set that does). Transitions ease-in-out 0.888s (slow, deliberate).
- Concept: "choose a stone". Landing = two cabochons (sapphire, emerald) on soft white silk; cursor label follows ("CHOOSE A STONE"); hovering a stone blooms its colour as a soft glow on the silk and the label changes to "DISCOVER PANTHÈRE TUNYA".
- Click: the stone's colour floods the screen as a blurred bloom, then the necklace resolves from blur to sharp (focus pull transition) over ~3s. Title in wide tracked caps + "SCROLL TO DISCOVER" + circled arrow.
- Cursor = soft white light disc. Scrolling wipes the photo away in organic watercolour blots to reveal the archive gouache design drawing beneath (with Cartier stamp) = cursor/scroll as an eraser revealing the craft layer under the product.
- Title lockup: "Le CHŒUR des PIERRES" italic lowercase article + roman caps, staggered left/right, "CHAPTER II" tiny. SOUND toggle bottom right; MENU top left; logo centred.
- Cookie + location modals first (real-world friction; first impression starts after 2 dialogs).

## 7 a24.raviklaassens.com (experimental, film catalogue)
- Stack: GSAP 3.15 + ScrollTrigger + Lenis + Three.js r178 single canvas. PP Neue Montreal 500, PP Museum (serif caps for titles), PP Eiko. Bg #F2F2F2. One-viewport app (no doc scroll).
- Concept: films as physical DVDs. Discs are 3D objects lying in a diagonal row receding in perspective; wheel moves the row (carousel), active disc centred and bigger; label of each disc = the real poster art.
- Hover on active disc: a hand-drawn ink scribble circle draws itself around the disc (SVG stroke-dashoffset), like circling a pick in a magazine.
- HUD: top-left credits table (DIRECTED BY / YEAR / STARRING) in tiny caps with hairline rules, swaps per film; under the discs, two press quotes with ★★★★★ in serif caps. Nav centred: A24 · Films · Television · Index (dropdown list with highlighted row).
- Click: disc slides down/out, detail page = film-credit "billing block" layout, huge serif title, metadata rows with hairlines, "WATCH ONLINE" between double rules, disc peeking from the bottom edge. Crosshair "+" marks on the margins (print registration).
- Easing: cubic-bezier(0.77,0,0.18,1) 0.3s on 247 elements (quart in-out), (0.32,0.72,0,1) (iOS-like spring-out) 0.14–0.4s, (0.625,0.05,0,1).

## 8 forgeautomotive.co.uk (bespoke car builder)
- Stack: Next.js + Lenis + 3 full-screen canvases (grain / noise texture, blend mode screen), 319 split chars, 36 clip-paths, has prefers-reduced-motion CSS. GeistSans + "editorial" condensed serif 200/300. Pure black.
- Gate: black screen with tiny tracked caps statement + "ACCEPT & ENTER / REJECT & ENTER" = cookie consent folded into the entry ritual (no banner over the hero).
- Hero: three cars (G-Wagon, red 911 GT3 RS centre, Defender) in a dark studio; headline assembles word by word, each word starting small + blurred and resolving to sharp ("For" sharp while "Those" still blurred). Red car = only colour on the page.
- Statement section: centred serif on black with live film grain. Chapters "01 / 03 Identity": sharp photo card + the SAME photo blown up and blurred as the full-bleed background (depth without new assets). Thin progress bar bottom-left grows per chapter.
- Service list: giant serif titles ("Bodystyling") with red underline wiping in, product photo bleeding off the right edge. Ghost dark buttons "START YOUR PROJECT".
- Easing cubic-bezier(0.43,0.195,0.02,1) 0.5s/0.75s on 291 elements (one custom house curve; aggressive ease-out).

## 9 offforum.com (festival / event)
- Stack: Lenis only, Tailwind, short page (1.4k px). Custom display serif "Forvm" (caps, Trajan-like) + Baikal 600. The SOTD here is identity + photography, not tech.
- Hero: full-bleed event photography auto-cycling with hard cuts (no crossfade) behind a fixed caps statement; giant lockup OFFF (geometric black slab letters) + FORUM (classical serif) = two type worlds collide. Info table with vertical hairlines (FORUM / OFFF dates / venue).
- Footer repeats the lockup edge to edge at ~300px. Ease (0.32,0.94,0.6,1) 0.4s, (0.87,0,0.13,1) 0.7s.
- Lesson: restraint is allowed: one strong lockup + real photos + 1 motion idea can win.

## 10 overworldaudio.com (sonic branding studio for games)
- Stack: Three.js r184 + Howler (audio), single canvas, IvarHeadline 500 serif + PP Frama. Navy #151A2A.
- Gate: wireframe logo (rings + triangle) drawn in thin lines with "ENTER WITH SOUND" + "Enter without sound" (secondary, bottom-right). Audio is the product, so sound is offered first.
- Concept: the logo becomes a place. The world is a misty 3D terrain carved in the logo's concentric-ring shape; glowing coloured crystals sit on it = points of interest. Camera breathes/drifts with the mouse (parallax tilt), atmospheric fog + volumetric light; no scroll.
- Headline serif 45px top-left, tiny tracked caps nav centred. "EXPLORE OUR WORK" button bottom-left.
- Work page: editorial table (title serif / year / client / "▶ PLAY" ghost button per row); hover lights the row and reveals a blurred image band of that game behind the row. Toggle back to the world view.

## 11 nickho-motorsports.nl (racing driver, Porsche Carrera Cup)
- Stack: Webflow + GSAP 3.15 + ScrollTrigger + Lenis + Three.js r128 (helmet + car), 479 split chars, custom cursor, has reduced-motion CSS. Anton (condensed caps) + Helvetica. B/W photography + ONE yellow (#FFE000-ish) accent.
- Visible 6-column grid lines drawn over the whole site (hairline verticals) = structure becomes decoration; content snaps to them.
- Hero: B/W helmet portrait + giant race number "98" centred, stat counters left (98 car number / 17 career podiums / 14 circuits), bio facts right. Header: monogram left, yellow square burger right.
- Manifesto paragraph in condensed caps, key phrases in yellow ("ONE PERCENT OF IMPROVEMENT", "SHARPER, MORE FOCUSED") with small photos floating in the margins.
- Sponsor wall in the grid cells with a 3D helmet rotating in the centre cell (Three.js) as scroll moves.
- Career chapters pinned with counter "2/5", photo stack + text. Race calendar: a top-down 3D/livery car drives down the page between "RACE" and "2026" as you scroll (scroll-scrubbed object = the narrative vehicle). Giant outlined "MEDIA CORNER" type behind gallery.
- Easing cubic-bezier(0.19,1,0.22,1) (expo-out) 0.6s on 482 elements.

## 12 heronaiapp.com (AI agent SaaS for architects)
- Stack: Webflow + GSAP 3.12.5 + ScrollTrigger + Lenis + Barba (page transitions), fixed canvas, 87 clip-paths, reduced-motion CSS present. BT Grotesk caps + Geist Mono. Paper #F3F1EC, ink, ONE red-orange (#E8401C-ish) like a markup pen.
- Concept: the product is for architects, so the whole site is a technical drawing: drafting grid, crop/registration "+" marks at intersections, dimension lines, stippled engraving of a modernist house (hero), isometric wireframe icons per problem card, section labels in mono with [01] indices.
- Hero intro: the drawing sits alone, then the frame lines draw in, the nav and the heading "AN AI AGENT THAT WORKS INSIDE YOUR DESIGN TOOLS" slide up; a small "speech" chip near the logo.
- Scroll: floor-plan wall fragments fly in from all sides and assemble around "FOR THE WHOLE DESIGN" (scroll-scrubbed assembly). Product UI shown as clean wireframe screens with the selected room filled red + chat widget panel = product demo without screenshots.
- Small dark "terminal" note card bottom-left with "SCROLL TO CONTINUE". Cookie bar small, bottom right, Accept (red) / Reject equal.
- Easing: ease 0.4s (220), cubic-bezier(0.625,0.05,0,1) 0.48s, (0.23,1,0.32,1) 0.5s.

## 13 mariavasilyeva.com (interactive designer portfolio inspired by music)
- Stack: no GSAP/Lenis detected; custom canvas (fixed full-screen) + custom faces (synt, feat, suo). bg #F9F9F9. Easing (0.16,1,0.3,1) 1.4s (long expo-out).
- Concept: a portfolio as a music track / tape timeline. A horizontal strip of tiny thumbnails runs across the middle like a waveform; a vertical playhead line moves as you wheel; when the playhead crosses a project, its images burst outward into a collage cluster (beat hit), then collapse back as it passes.
- Frame: thin black side rails with vertical labels (like a tape deck / DAW chrome), handwritten "Scroll" circled at top, handwritten "More details" + arrow bottom right, current project name + "View project" bottom centre, counter left.

## Cross-site measurements (13 sites)
- Smooth scroll (Lenis) on 10/13. GSAP+ScrollTrigger on 4 (3 of them Webflow builds). Three.js on 5 (r128–r185); 2 more use full-screen 2D canvases (grain, custom renderer). Barba on 1, CSS view-transitions on 1, CSS scroll-driven animation on 2.
- prefers-reduced-motion CSS found on only 4 of 12 measured (Cartier, Forge, Nick Ho, Heron). Gap = our differentiator.
- Every site has ONE house easing applied to hundreds of elements, almost always a strong ease-out: expo-out (0.16,1,0.3,1)/(0.19,1,0.22,1), quint-out (0.22,1,0.36,1), custom (0.43,0.195,0.02,1), or in-out for page-level (0.77,0,0.18,1)/(0.87,0,0.13,1)/(0.65,0,0.35,1). Durations: UI 0.2–0.5s, reveals 0.6–0.9s, hero/scene 1.2–3s.
- Custom or licensed display faces on 13/13 (none uses Inter as display). Typical pairing: one expressive display (serif or condensed) + one grotesk + often a mono for meta. Display sizes 88–181px, tight leading 0.8–1.0, negative tracking -0.02 to -0.04em.
- Palette: mostly monochrome + ONE accent (Nick Ho yellow, Forge red car, Heron red, Format red image, Emotion violet). Colour comes from photography/3D, not UI chrome.
- Gates/entry ritual on 4 (Emotion, Overworld: sound; Forge: consent; Cartier: choose-a-stone). Sound toggle on 4.
- Header pattern: tiny caps/mono nav (10–12px), often 4-corner or spread across the grid, live clock/time on 3 (Brandon, Signal-A, Format).
