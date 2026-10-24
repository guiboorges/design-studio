# AI Slop in Imagery and Brand Work

> **Scope:** The visible and contextual tells that make photography, illustration, 3D, logos, identities, social posts, ads, posters, packaging, and video stills read as AI-generated, plus how to direct generation (or avoid it) so the work reads as authored.
> **Last verified:** 2026-10 (brand cases, EU AI Act dates, platform labels, C2PA, and Copyright Office status).
> **Used by:** creative-director, art-director, design-critic, social-media-designer, print-ooh-designer

UI and web tells (layouts, gradients on landing pages, copy) are covered by the sibling reference file in this
folder. Style recipes this file points to live in `../../visual-styles/references/styles/`.

---

## 0. How to use this file

1. **Directing new work:** read section 10 (Do instead) and 11 (Prompt do/don't) before writing any shot list or prompt.
2. **Reviewing work:** run the slop test (section 13), then look up each failed item in the catalog tables (sections 2-6).
3. **Deciding whether to use generation at all:** read section 12 (When AI imagery is acceptable) and the brand cases (section 8).
4. **Publishing:** check disclosure duties in section 9. Dates there change; re-verify if the header date is older than 6 months.

---

## 1. Why this matters (evidence)

| Finding | What it means for design | Grade |
|---|---|---|
| In a CHI 2025 study (50,444 participants, 749,828 judgments, 450 AI + 149 real images), people identified AI images correctly 76% of the time and real photos 74%. AI accuracy rose with viewing time: 72% at 1 s, 77% at 5 s, 80% at 10 s [2][3]. | Many tells are caught even at feed-glance speed, and more on posters, print, and packaging that people look at longer. | [E1] |
| Anatomical errors were the easiest artifacts to spot; functional implausibilities (e.g., a sandwich held sideways) the hardest. Human curation of AI images reduced detection [2][3]. | Fixing hands is not enough. Logic errors (how an object is held, used, or built) survive and erode trust. | [E1] |
| Researchers group the cues into five categories: anatomical, stylistic (plastic, glossy, cinematic), functional (garbled text, impossible objects), violations of physics (light, shadows, reflections), and sociocultural (implausible or historically wrong scenes) [1][4]. | Use these five categories as the review lens in section 13. | [E1] |
| StyleGAN2 faces were classified at chance (48.2%), only 59.0% after training, and rated 7.7% more trustworthy than real faces; the authors suggest synthetic faces are more "average" [5]. | A single realistic AI face may pass; the problem is the averaged, interchangeable look across a whole campaign. | [E1] |
| White AI faces were judged human more often than real White faces ("hyperrealism"); AI faces were more average and more attractive; the least accurate judges were the most confident [6]. | Over-attractive, averaged casting is a real signal, but viewers use it inconsistently. Do not rely on viewers failing to notice. Note the racial bias in training data. | [E1] (secondary report of a peer-reviewed paper) |
| SDXL + LLaVA generation loops converged from 700 varied prompts to 12 dominant generic motifs (stormy lighthouses, palatial interiors, gothic cathedrals, urban night scenes, pastoral villages): "visual elevator music" [7]. | Unsteered models pull toward a shared default look. Sameness is structural, not accidental. | [E1] (model behavior, not audience effect) |
| AI-assisted creative output was rated better individually but was 10.7% more similar across people (story-writing study) [8]. | Expect brand homogenization when competitors use the same tools with the same defaults. Text study; extrapolation to images is [E3]. | [E1] / [E3] for images |
| NIQ (Dec 2024; 2,000+ viewers, EEG on ~150): viewers spotted most AI ads unprompted, rated them more "annoying," "boring," and "confusing," and even high-quality AI ads produced weaker memory activation [9]. | Industry neuromarketing study, not peer-reviewed. Treat as a strong warning, not a law. | [E2] |
| Getty VisualGPS (30,000+ adults, 25 countries, 2022-2024): 98% say authentic imagery is essential to trust; 78% say an AI image cannot be considered authentic; almost 90% want to know when an image is AI-generated or modified [10]. | Vendor survey (Getty sells human-made imagery). Directionally consistent with the NIQ data. | [E2] |

**Apply:** Default to authored imagery whenever the image makes a factual promise (product, people, place, food, results).
**Limit:** Detection research uses specific models and image sets. Tells change with each model release; re-check section 7.

---

## 2. Photography and photoreal tells

| Tell | Why it reads as AI | Do instead | When it's acceptable | Grade |
|---|---|---|---|---|
| Waxy, plastic, over-smoothed skin and hair | Named as a stylistic artifact in the CHI 2025 taxonomy; "overly smooth skin and hair" is a common tell [1][3][4]. | Ask for visible pores, fine lines, flyaway hair, uneven skin tone; add film grain after generation; retouch by hand, not by smoothing. | Stylized beauty or fantasy work where the artifice is the point. | [E1] |
| Glossy, shiny, "too cinematic" finish (dramatic HDR, rim light on everything) | "Plastic, glossy, shiny" and "overly dramatic or cinematic" are listed stylistic cues [4]. Vendor prompt guides still recommend "4K, HDR, beautiful" quality words [11], which pushes everyone to the same finish. | Specify a motivated light source (window, overcast sky, practical lamp) and a real camera/film look. Drop generic quality words. | Movie posters and game key art that are meant to look cinematic. | [E1] |
| Uncanny perfection: averaged, symmetrical, over-attractive faces; flawless clothes and rooms | AI faces are more average and more attractive than real ones [5][6]. Viewers under-use symmetry as a cue, but it is a real one [6]. | Cast specifically: age, build, asymmetry, real wardrobe wear; brief like a casting call (section 10). | Avatars, placeholders in internal mockups. | [E1] |
| Generic beautiful-people casting / stock-like AI people | Interchangeable people signal "no real customer was involved." The Levi's 2023 and Guess 2025 cases drew criticism for replacing paid, diverse models [20][22]. | Real people, or a casting brief with named traits; never use synthetic faces to simulate diversity. | Clearly illustrative or fictional scenes, disclosed. | [E2] |
| Garbled or pseudo text on signs, labels, screens, packaging | "Garbled text" is a functional implausibility [4]. Vendor guides still cap text at ~25 characters and call text rendering "still evolving" [11]. | Generate without text; set all type in layout software with real fonts. | Never in final art. | [E1] |
| Hands, teeth, jewelry, gloves: extra or fused fingers, too many teeth, earrings that melt into skin | Anatomical cues are the easiest to spot [3][4]. Extra fingers have triggered public callouts in 2024-2025 (Call of Duty, Will Smith tour video) [21][23]. | Crop deliberately, pose hands simply, inpaint and retouch; check every hand at 200%. | Never; fix or recrop. | [E1] |
| Impossible physics: shadows in two directions, wrong or missing reflections, objects merging (strap into shirt), architecture that does not stand | "Violations of physics" and functional errors [4]. J.Crew's 2025 posts were faulted for unnatural shadows and distorted feet [21]. | One light recipe per scene; check reflections, contact shadows, and how each object is held or attached. | Surreal work where impossibility is the idea and is obvious. | [E1] |
| Over-detail: every surface textured, every corner filled, ornamental clutter | Reads as "rendered" rather than seen; generation loops drift to ornate default motifs (palatial interiors, cathedrals) [7]. | Edit down: one subject, one texture story, empty areas left empty. | Maximalist styles done on purpose (see `maximalism.md`). | [E3] |
| Shallow-depth bokeh on everything | Vendor prompt guides list "bokeh" among stock camera-setting modifiers [11]; when every image has it, it reads as a preset. | Choose depth of field per shot; use deep focus for places and products. | Portraits and food close-ups where it is motivated. | [E3] |
| Teal-orange grade, heavy vignette, golden-hour by default | Practitioner observation that defaults converge on the same "epic" grade; no peer-reviewed source found. | One campaign grade (LUT) chosen for the brand, applied in post. | Action and travel genres where it is the convention. | [E3] |
| Centered, front-facing subject, eye-level, rule-of-thirds-by-default | Model outputs center the prompt subject; no single authoritative source. | Specify camera position and crop (high, low, over-the-shoulder, cut-off subject). | Product packshots, passport-style portraits. | [E3] |
| The default "model look" (e.g., the Midjourney look): painterly-glossy, high stylization | Each model has a recognizable default aesthetic that users learn to spot. Midjourney documents a "raw" mode and a stylize parameter that reduce its default aesthetic [unverified: docs returned 403 in this pass]. | Lower stylization, use raw modes, feed your own reference images and a brand grade. | Concept and mood exploration only. | [E3] |
| Sociocultural implausibility: wrong period details, wrong local signage, mixed cultures | Listed as a category [4]. | Real location scouting or local reference images; local review. | Fantasy. | [E1] |
| The "Ghibli filter" wave (March 2025): any photo restyled as a famous animation studio's look | GPT-4o image generation launched 25 March 2025 and the studio-style trend flooded feeds within days [26]. Reads as trend-chasing and raises appropriation concerns; the White House used it for an immigration-arrest post and drew criticism [26]. | Commission an illustrator or develop an owned style. | Private, non-commercial play. Never for brands. | [E2] |

**Myth check:** Hayao Miyazaki's "an insult to life itself" (2016) was a reaction to an AI motion demo of a grotesque creature, not to image generators. Quote it with that context [27].

---

## 3. Video and motion tells (ads, reels, video stills)

| Tell | Why it reads as AI | Do instead | When it's acceptable | Grade |
|---|---|---|---|---|
| Identity drift: a character's face, body, or clothes change between shots | The main visual complaint about the Toys"R"Us Sora film (2024): inconsistent character appearance from scene to scene, plus hand problems [18]. | Character sheet and reference images; lock wardrobe; continuity check every cut. | Never in a narrative ad. | [E2] |
| Style drift: the same creature or object rendered realistic in one shot and cartoonish in the next | Reported for Coca-Cola's 2025 spot (polar bears, pandas, sloths changing style shot to shot) [17]. | One style bible; reject shots off-model even if they look good alone. | Deliberate mixed-media pieces. | [E2] |
| Objects that slide, morph, or change geometry (wheels, axles, fingers mid-gesture) | Coca-Cola 2025: truck wheels changing angle and length, fingers flexing abnormally [17]. | Composite real or 3D-modeled hero objects; check motion frame by frame. | Never for hero objects. | [E2] |
| Uncanny human faces and stiff motion | Coca-Cola 2024 criticism focused on unnatural expressions and movement [16]. | Real actors for emotional beats; generation for environments only. | Non-human characters with a clear stylization. | [E2] |
| Many short stitched clips, montage pacing set by the generator's clip length | McDonald's Netherlands 2025 was mocked for uncanny characters and many stitched clips [unverified: reported in trade coverage not opened; BNN/AFP confirms the "AI slop" backlash] [19]. | Write the edit first; let shots run; fewer, longer, continuous shots. | Deliberate rapid-cut genres (music video). | [E3] |

---

## 4. Illustration and 3D tells

| Tell | Why it reads as AI | Do instead | When it's acceptable | Grade |
|---|---|---|---|---|
| Glossy clay or toy-like 3D mascots and objects (pastel, inflated, soft studio light) | The default "friendly tech" render; see `claymorphism.md` for the style itself and its status. | If clay fits, build a real system (shape rules, palette, light rig) or commission a 3D artist. | Kids, casual apps, gamified learning when the style is owned and consistent. | [E3] |
| Isometric "little world" scenes (tiny people, floating platforms, devices) | Over-used stock/generator default for "tech" topics. | Show the actual product or a real scene; or a diagram that explains something. | Technical explainers that need an isometric projection for clarity. | [E3] |
| Glowing brains, humanoid robots, circuit boards, descending code for "AI" topics | Better Images of AI documents these as misleading, sci-fi, anthropomorphized, and mistrust-building [12]. | Show people using the tool, the real interface, the data, or the human impact [12]. | Satire about the cliché itself. | [E2] |
| Blue-purple neon gradients and glow for anything "tech" or "AI" | The default palette of AI-topic imagery and SaaS heroes; see `gradient-aurora-mesh.md` and `dark-tech-saas.md`. | Derive palette from the brand, not the topic. | When the brand palette already is blue-violet. | [E3] |
| The sparkle icon as the meaning of "AI" | NN/g (Sept 2024): participants read sparkles as favorite, effects, or "new"; none associated it with AI [13]. | Label the feature in words; pair an icon with a specific object (e.g., document + pen). | Image-editing effects, where sparkles already mean "effects" [13]. | [E2] |
| Generic flat people with bendy limbs and non-literal skin tones | Corporate flat illustration now reads as generic and is trivially generated; see `corporate-flat-illustration.md` rather than repeating it here. | Commissioned illustration with a point of view. | Low-budget empty states, internally. | [E3] |
| Painterly "concept art" finish on everything; brush texture with no brushwork logic | Default stylization; strokes do not follow form. | Specify medium and technique (gouache flat fills, linocut, ink line weight) and check that marks follow form. | Mood boards. | [E3] |

---

## 5. Logo and identity tells (AI logo generators)

| Tell | Why it reads as AI | Do instead | When it's acceptable | Grade |
|---|---|---|---|---|
| Initials in a circle or shield; generic monogram | The most common generator output; zero distinctiveness. | Start from a brand idea (name meaning, story, product truth), not letters in a container. | Internal projects, temporary placeholders. | [E3] |
| Swoosh, orbit ring, gradient blob, abstract "connection" nodes | Category-agnostic shapes; generators remix the same training data for every customer, so output is likely to resemble someone else's [37]. | Trademark search early; sketch 50 directions before refining. | Never as a final mark. | [E2] |
| Literal clichés: lightbulb (ideas), leaf (eco), rocket (growth), roof (real estate), tooth (dentist) | Literal first-idea symbols that every competitor also gets. | Find a second-order idea; test with "could a competitor use this?" | Very small local businesses where literal clarity beats distinctiveness, after a conflict check. | [E3] |
| Details that do not scale: hairlines, gradients, tiny counters, raster-only output | Marks fail at favicon (16 px) and embroidery sizes; raster files cannot be scaled or trademarked cleanly. | Redraw as vector; test at 16 px, 1-color, reversed, and on photo. | Never. | [E2] |
| Fake lettering: pseudo-letterforms, inconsistent stroke and spacing, unlicensed look-alike fonts | Generated type is not a font; letters drift and kerning is random. | Licensed typeface or custom lettering by a type designer (see `typography` licensing). | Never. | [E2] |
| A mark with no system behind it | No color, type, spacing, imagery, or motion rules; the logo is the whole identity. | Build the system: palette, type pair, grid, image rules, iconography, motion, usage do/don't. | Never for a brand that will scale. | [E2] |
| Homogenized identities: many brands in a category look alike | Unsteered models converge on generic motifs [7] and AI assistance raises similarity across creators [8]. | Run a category audit (screenshot 20 competitors) and design against it. | n/a | [E1] model / [E3] market |

**Legal note (verified 2026-10):** The US Copyright Office's Part 2 report (29 Jan 2025) concluded that prompts alone do not
make someone the author of an AI output; protection needs human-determined expressive elements, such as human
selection, arrangement, or modification [36]. A purely generated mark may therefore have weak copyright protection.
Trademark rights are a separate question (use and distinctiveness), and similarity to existing marks is the bigger
practical risk. **Apply:** keep a human design record; redraw and modify substantially. **Limit:** this is not legal
advice; route trademark clearance to counsel.

---

## 6. Social, ad, poster, and packaging tells

| Tell | Why it reads as AI | Do instead | When it's acceptable | Grade |
|---|---|---|---|---|
| Over-busy composition: subject, props, sparkles, particles, light rays, text all competing | Generators fill every area; no hierarchy. Fails the single-glance test (`layout-composition`). | One focal point, one message, one supporting element. | Maximalist campaigns built on a hidden grid. | [E2] |
| Mismatched lighting between composited elements (product lit from left, scene from right; different color temperatures, grain, black levels) | Physics violations are a core detection category [1][4]. | A compositing pass: match light direction, color temperature, contrast, grain, and contact shadows. | Collage styles where the cut-out look is deliberate. | [E1] |
| Template layouts: same headline-over-hero-image structure, same stock-feeling scene | Repetition across brands reads as automated. | Brand-specific grid and type; vary layouts across the series. | High-volume performance ads after a strong brand template exists. | [E3] |
| Product that is not quite the product (wrong label, wrong cap, extra button, packaging text gibberish) | Functional and text errors [4]; also a consumer-protection problem when the image misrepresents the product. | Real packshots or 3D from CAD; composite the real product into generated scenes. | Never. | [E2] |
| Food that looks impossible (gloss on everything, physics-defying drips) | Glossy/cinematic stylistic cue [4]; food ads are judged on truth. | Real food photography and styling. | Clearly fantastical brand moments. | [E2] |
| Hidden or late disclosure | J.Crew (2025) first posted without disclosure and later credited an AI artist; the delay amplified the backlash [21]. | Decide disclosure before publishing (section 9). | n/a | [E2] |
| Heritage brand + cost-saving story | Coca-Cola's CMO framed AI as faster and cheaper [17]; critics said it lost the warmth of the 1995 original [14][16]. | If you use AI, lead with the creative idea, not the efficiency. | n/a | [E2] |

---

## 7. Dated tells: what is fading (status 2026-10)

| Tell | Status | Still check? |
|---|---|---|
| Extra or fused fingers | Rarer in hero subjects of frontier models, but still found in backgrounds, gloves, and crowds (Call of Duty loading screen, Dec 2024; Will Smith tour video, Aug 2025) [21][23]. | Yes, especially secondary figures. |
| Garbled text | Much improved for short headlines; vendor guides still advise ~25 characters or fewer and expect variation [11]. | Yes; small signage and labels still fail. |
| Sliding wheels, morphing objects in video | Improving; still reported in Coca-Cola 2025 [17]. | Yes, frame by frame. |
| Waxy skin, glossy finish, cinematic grade | Persistent at default settings, because they are aesthetic defaults rather than errors. | Yes. These are the most durable tells. |
| Obvious anatomical horror | Fading; detection now relies more on functional and physics logic, which is harder to spot [3]. | Shift review effort to logic, light, and consistency. |
| "Is it AI?" as the main question | Detection by eye is unreliable (72-80% for AI images in one study; chance for GAN faces) [3][5]. Provenance metadata is becoming the reliable signal (section 9). | Use Content Credentials where available. |

**Apply:** Do not equate "no errors" with "not slop." The durable tells are aesthetic sameness and missing intent.

---

## 8. Brand cases (verified 2026-10)

| Brand and work | Date | What it was | What the audience criticized | Outcome | Lesson |
|---|---|---|---|---|---|
| Levi's x Lalaland.ai | Announced Mar 2023 | Test of AI-generated models to show more body types and skin tones [22]. | Using synthetic diversity instead of hiring and paying diverse models; "lazy" [22]. | Levi's clarified the AI models were not a "means to advance diversity" and that live shoots continue [22]. | Never use generated people to simulate representation. |
| Toys"R"Us "The Origin of Toys'R'Us" (agency Native Foreign, OpenAI Sora) | Cannes Lions, Jun 2024 | One-minute brand film "almost entirely" generated with Sora, with corrective VFX [18]. | Character appearance not consistent between scenes, hands, overall quality; "too cheap to use real creators" [18]. | Widely mocked; brand kept the film. Sentiment-drop figures in coverage are [unverified]. | Narrative video exposes identity drift. |
| Call of Duty: Black Ops 6 (Activision) | Dec 2024 - Feb 2025 | Loading screens and calling cards suspected of being generated [23]. | Six-fingered zombie Santa, Gobblegums pressed into a palm suggesting a cropped sixth finger, odd textures [23]. | Feb 2025 Steam disclosure: "Our team uses generative AI tools to help develop some in-game assets," without saying which [24]. | Fans audit hands in every asset; vague disclosure does not end the story. |
| Coca-Cola "Holidays Are Coming" remake (Secret Level, Silverside AI, Wild Card) | Nov 2024 | AI remake of the 1995 trucks spot, with a small on-screen AI disclaimer [15][16]. | "Soulless," unnatural faces and motion, Santa reduced to hands [15][16]. | System1 testing scored it 5.9/6 ("overwhelmingly positive") in the US and UK even as social sentiment turned [14]. | Test scores and public reaction can diverge; craft critics set the narrative. |
| Coca-Cola "Holidays Are Coming" 2025 (Secret Level, Silverside) | Nov 2025 | Animals instead of people; brand said ~100 people worked on it and 5 AI specialists generated 70,000+ clips in a month [17]. | Animal styles shifting between realistic and cartoonish, stilted motion, truck wheels changing shape [17]. | Brand continued with AI; a "ten times better craftsmanship" quote attributed to Coca-Cola's head of gen AI via The Hollywood Reporter is [unverified]. | Avoiding humans does not avoid slop; consistency does. |
| Guess ad in US Vogue (agency Seraphinne Vallora) | Aug 2025 issue | Double-page ad with AI-generated models and a small footnote disclosure [20]. | Jobs of models, photographers, lighting crews; clash with Vogue's photographic heritage [20]. Concern about unrealistic beauty standards was widely reported [unverified]. | Vogue said the ad came from advertising, not editorial [20]. | A flawless synthetic model in a trust medium reads as replacement. |
| J.Crew Instagram campaign images (credited to an AI artist after the fact) | Aug 2025 | Retro-style campaign images later revealed as AI-generated [21]. | Unnatural shadows, distorted feet, inconsistent details; "AI slop"; should have hired real models; misrepresented diversity [21]. | Brand added credit to a digital artist after the backlash [21]. | Disclose up front; physics errors get crowd-sourced. |
| McDonald's Netherlands Christmas ad (The Sweetshop) | Dec 2025 | AI-generated spot framing the holidays as stressful [19]. | "AI slop," holiday mood spoiled; fewer human jobs (actors, choir) [19]. Uncanny characters and stitched clips per trade press [unverified]. | Pulled 10 Dec 2025; McDonald's called it a learning [19]. | Cynical concept + AI execution doubles the risk. |
| REI Facebook ad | Reported Sep 2026 | AI-generated social ad [25]. | Consumer backlash [25]. | Pulled; REI said AI use "does not align with the company's sustainability mission" [25]. | Brand values can rule AI out regardless of quality. |

**Pattern across cases [E2]:** audiences criticized (1) uncanny faces and motion, (2) inconsistency across shots,
(3) replacement of paid people, especially diverse models, (4) efficiency framing on emotional or heritage work,
(5) late or tiny disclosure. Only (1) and (2) are fixable in post.

---

## 9. Disclosure and legal context (verified 2026-10)

| Item | Rule | Design implication |
|---|---|---|
| EU AI Act Art. 50(2), providers | Generative AI providers must mark outputs in a machine-readable format detectable as AI-generated; does not apply to assistive standard editing [28]. Applies from 2 Aug 2026 [29]. The Digital Omnibus (in force 27 Jul 2026, per secondary source) gives systems already on the market before 2 Aug 2026 until 2 Dec 2026 for marking [30]. | Keep tool metadata and watermarks intact through your pipeline; do not strip them on export. |
| EU AI Act Art. 50(4), deployers | Whoever publishes a deep fake (realistic image, audio, or video resembling real people, objects, places, or events) must disclose it. For evidently artistic, creative, satirical, or fictional works, disclosure may be limited to an appropriate manner that does not hamper enjoyment of the work [28][29]. | Realistic campaign imagery shown in the EU needs a visible disclosure. Plan its placement in the layout. |
| EU Code of Practice on marking and labelling | Final version published 10 Jun 2026; voluntary; ~190 signatories by end of Jul 2026; the EU provides icons deployers may use [29]. | Reserve space for the label or icon in templates. |
| YouTube | Creators must disclose realistic altered or synthetic content; exempt: clearly unrealistic or animated content and minor edits (color, beauty filters, upscaling). YouTube may auto-label content with C2PA metadata or detected AI, and such labels may not be removable [31]. | Photoreal AI scenes get labeled; plan for it. |
| Meta (Facebook, Instagram, Threads) | "AI info" label (renamed from "Made with AI" on 1 Jul 2024) based on industry signals and user disclosure; edits-only labels moved into the post menu (Sep 2024); more prominent labels for high-risk deceptive content [32]. | Retouch-only AI edits are less visible; generated content is labeled. |
| TikTok | Creators must label realistic AI-generated content; TikTok auto-labels content carrying C2PA Content Credentials (since May 2024) [33]. Current 2026 help page could not be opened [unverified]. | Same as above. |
| C2PA / Content Credentials | Open provenance standard; steering committee includes Adobe, Amazon, BBC, Google, Meta, Microsoft, OpenAI, Publicis Groupe, Sony, TikTok, Truepic [34]. Metadata is easily stripped by platforms; durable credentials pair it with invisible watermarks and fingerprints [35]. | Attach credentials to authored photography too: provenance becomes a trust asset. |
| US copyright | Prompts alone are not authorship (29 Jan 2025 report) [36]. | Keep human edits and records; see section 5. |

**Limit:** This is a design summary, not legal advice. Laws differ by country; check with counsel for regulated categories (health, finance, political, children).

---

## 10. Do instead: direction that reads as authored

| Technique | How | Why it works | Grade |
|---|---|---|---|
| Specific lens and format | Name focal length and camera distance (e.g., 35 mm at arm's length, 85 mm head-and-shoulders, 24 mm environmental); vendor guides support lens, proximity, and position modifiers [11]. | Removes the default mid-shot, centered framing. | [E2] |
| Specific film or capture medium | Name stock look, format, or device (black-and-white, Polaroid, phone flash, medium-format) [11]; add grain after. | Gives a coherent texture and color response instead of HDR gloss. | [E2] |
| Motivated light | One named light source with direction and quality (north window, overcast noon, single tungsten practical). | Fixes the physics-violation category [4]. | [E1] |
| Real locations and props | Scout or reference a real place; specify worn props (chipped mug, creased paper). | Avoids sociocultural and functional implausibility [4]; gives specificity. | [E2] |
| Imperfection on purpose | Skin texture, flyaway hair, wrinkles in fabric, dust, uneven horizon, motion blur. | Counters waxy and glossy stylistic tells [3][4]. | [E1] |
| Art-directed casting | Brief like a casting call: age range, build, specific features, wardrobe from the target customer's life. Use real people for any claim of representation. | Counters averaged, attractive faces [5][6] and the Levi's/Guess critique [20][22]. | [E1] |
| Real photography or commissioned illustration when trust matters | Product truth, people as customers, food, health, finance, news, testimonials, heritage campaigns. | Audiences value authentic imagery for trust [10]; AI ads carry a negative halo [9]. | [E2] |
| Composite real hero objects into generated environments | Shoot or 3D-model the product; generate only background plates; match light, grain, and color. | The hero stays true; generation does the low-risk part. | [E2] |
| Editing and retouch pass | Human pass on anatomy, text, logic, light, and continuity; replace all generated text with typeset text. | Fixes the easiest-to-spot errors; adds human authorship [36]. | [E2] |
| Owned style system | Brand LUT, light recipe, lens set, palette, texture, and composition rules written into a style tile (`art-director` procedure). | Breaks convergence to model defaults [7]. | [E2] |
| Edit-first video | Write shot list and timing first; continuity sheet per character; fewer, longer shots. | Avoids identity drift and stitched-clip pacing [17][18]. | [E2] |

### Campaign consistency rules

1. One character sheet per recurring person, mascot, or animal (front, three-quarter, profile, expressions, wardrobe). Reject off-model frames.
2. One light recipe and one color grade (LUT) per campaign; apply in post, not by prompt.
3. Fixed lens set (2-3 focal lengths) and camera heights.
4. Same grain, sharpness, and black level across every asset, including composites.
5. All typography set by a designer in layout software; never generated.
6. A continuity review across the full set side by side before release, not asset by asset.
7. Keep a provenance log: tool, model, date, prompts, references, human edits, and the disclosure decision.

---

## 11. Prompt writing: do and don't

| Do | Don't | Why |
|---|---|---|
| Describe subject, context, and style concretely (who, where, what they are doing, medium) [11]. | Stack adjectives ("stunning, epic, ultra-detailed, masterpiece"). | Adjective stacks pull toward the shared default look [7][11]. |
| Name camera position, lens, light source, and film/format [11]. | Use "4K, HDR, cinematic, beautiful" quality words [11]. | They produce the glossy, over-graded tell [4]. |
| Name a medium or technique (gouache, linocut, risograph two-color, 1970s offset print). | Name a living artist, illustrator, photographer, or studio to imitate. OpenAI blocks living artists' names but allowed studio styles, which drove the 2025 Ghibli wave [27]. | Ethics and legal risk; and it reads as borrowed. |
| Feed your own reference images (brand shoots, mood boards you have rights to). | Feed competitors' campaigns or copyrighted characters. | Rights and distinctiveness. |
| List unwanted elements plainly in the negative prompt ("text, watermark, extra fingers") [11]. | Write "no text" or "don't show walls" as instructions [11]. | Vendor guidance: instructive negatives work worse. |
| Leave space for type; generate without text. | Ask the model to render headlines, prices, legal copy. | Text errors and legal risk [4][11]. |
| Specify imperfections and specific casting traits. | Ask for "perfect skin," "beautiful woman," "diverse group." | Averaged, stereotyped faces [5][6][12]. |
| Iterate and curate, then retouch by hand. | Ship the first good-looking output. | Human curation lowers detection and adds authorship [2][36]. |

---

## 12. When AI imagery is acceptable

| Use | Verdict | Conditions |
|---|---|---|
| Mood boards, style exploration, internal concepts | Good fit | Mark as concept; do not ship. |
| Background plates, textures, sky replacements, cleanup | Acceptable | Composite with a matching pass; hero stays real. |
| Surreal, fantastical, or obviously illustrative brand moments | Acceptable with care | Owned style, consistency rules, disclosure where required. |
| Product imagery, food, before/after, results | Avoid | Misrepresentation risk; use real photography or CAD renders. |
| People representing customers, employees, diversity | Avoid | Use real people [20][22]. |
| Heritage, holiday, emotional brand films | High risk | Cases in section 8; if used, lead with idea and craft, never cost. |
| News, health, finance, political, children | Avoid | Trust and legal exposure; deep-fake disclosure duties [28]. |
| Logos and identity marks | Ideation only | Human-drawn final, system, trademark search [36][37]. |

---

## 13. Slop test (imagery and brand)

Run on every image, set, or identity before sign-off. Any "no" is a finding for `design-critic`.

**Craft**
- [ ] Skin, hair, and fabric have real texture (no wax, no plastic sheen).
- [ ] Every hand, tooth, ear, and piece of jewelry checked at 200%, including background figures.
- [ ] Shadows, reflections, and highlights agree with one light source.
- [ ] Objects are held, worn, and attached in physically possible ways.
- [ ] No generated text anywhere; all type is set by a designer.
- [ ] Composited elements match in light direction, color temperature, grain, and black level.

**Authorship**
- [ ] I can name the lens, light, and grade, and they were chosen, not defaulted.
- [ ] Casting is specific and, where people represent customers, real.
- [ ] The composition has one focal point and a deliberate crop (not centered by default).
- [ ] It does not look like the model's default style, a famous studio's style, or a living artist's.
- [ ] Swap test: if a competitor's logo replaced ours, would the image still work? If yes, it is generic.

**Identity (logos and systems)**
- [ ] Mark works at 16 px, one color, reversed, and on photography; delivered as vector.
- [ ] No circle-monogram, swoosh, blob, or literal cliché unless justified by the brand idea.
- [ ] Lettering is a licensed font or custom-drawn.
- [ ] A system exists (palette, type, grid, imagery, motion, usage rules).
- [ ] Trademark search done; human design record kept.

**Series and video**
- [ ] Characters, products, and styles are identical across every shot and asset (side-by-side review).
- [ ] No sliding wheels, morphing objects, or flexing fingers in motion (frame-by-frame check).
- [ ] Edit rhythm was planned, not dictated by clip length.

**Context**
- [ ] The image makes no factual promise that a generated image could falsify (product, food, results, people).
- [ ] Disclosure decided and placed (EU Art. 50, platform labels); provenance metadata kept.
- [ ] The public story is about the idea, not about saving money.
- [ ] Would this survive a fan audit like Call of Duty's or J.Crew's [21][23]?

---

## Sources

[1] Kamali, N., Nakamura, K., Chatzimparmpas, A., Hullman, J., & Groh, M. (2024). *How to Distinguish AI-Generated Images from Authentic Photographs*. arXiv:2406.08651. https://arxiv.org/abs/2406.08651
[2] Kamali, N., Nakamura, K., Kumar, A., Chatzimparmpas, A., Hullman, J., & Groh, M. (2025). *Characterizing Photorealism and Artifacts in Diffusion Model-Generated Images*. CHI 2025 (summary page, Hullman Lab). https://www.hullmanlab.northwestern.edu/paper/2025/06/01/photorealism.html
[3] Kellogg Insight. (2025, May 1). *When Put to the Test, Are We Any Good at Spotting AI Fakes?* Northwestern University. https://insight.kellogg.northwestern.edu/article/are-we-any-good-at-spotting-ai-fakes
[4] Scripps News. (n.d., accessed 2026-10). *Real vs. fake: Can you spot AI-generated images?* (secondary summary of the Northwestern five-category guide). https://www.scrippsnews.com/politics/disinformation-desk/real-vs-fake-can-you-spot-ai-generated-images
[5] Nightingale, S. J., & Farid, H. (2022). *AI-synthesized faces are indistinguishable from real faces and more trustworthy*. PNAS, 119(8), e2120481119. https://pmc.ncbi.nlm.nih.gov/articles/PMC8872790
[6] Young, E. (2023, December 12). *AI faces seem realer than real*. The Psychologist, British Psychological Society (secondary report of Miller, E. J., et al. (2023). *AI Hyperrealism: Why AI Faces Are Perceived as More Real Than Human Ones*. Psychological Science, doi:10.1177/09567976231207095). https://bps.org.uk/research-digest/ai-faces-seem-realer-real
[7] Hintze, A., Proschinger Åström, F., & Schossau, J. (2025). *Autonomous language-image generation loops converge to generic visual motifs*. Patterns, 7(1), 101451. https://pmc.ncbi.nlm.nih.gov/articles/PMC12827715/
[8] Doshi, A. R., & Hauser, O. P. (2024). *Generative AI enhances individual creativity but reduces the collective diversity of novel content*. Science Advances, 10(28), eadn5290. https://pmc.ncbi.nlm.nih.gov/articles/PMC11244532
[9] NielsenIQ. (2024, December 12). *NIQ Research Uncovers Hidden Consumer Attitudes Toward AI-Generated Ads* (press release; not peer-reviewed). https://nielseniq.com/global/en/news-center/2024/niq-research-uncovers-hidden-consumer-attitudes-toward-ai-generated-ads/
[10] CX Network. (2026). *Are AI-generated images putting customers off?* (secondary report of Getty Images VisualGPS, *Building Trust in the Age of AI*, 2024). https://www.cxnetwork.com/artificial-intelligence/interviews/ai-generated-images-customer-trust-advertising
[11] Google Cloud. (accessed 2026-10). *Prompt and image attribute guide* (Vertex AI image generation). https://docs.cloud.google.com/vertex-ai/generative-ai/docs/image/img-gen-prompt-guide
[12] Better Images of AI / We and AI. (accessed 2026-10). *About*. https://betterimagesofai.org/about
[13] Kaplan, K. (2024, September 20). *The Proliferation and Problem of the Sparkles Icon*. Nielsen Norman Group. https://nngroup.com/articles/ai-sparkles-icon-problem/
[14] Adweek. (2024, December 17). *How Coca-Cola's AI Holiday Ad Went From Praise to Rage*. https://www.adweek.com/creativity/how-coca-colas-ai-holiday-ad-went-from-praise-to-rage/
[15] NBC Washington. (2024, November 18). *Coca-Cola causes controversy with AI-made ad*. https://www.nbcwashington.com/news/national-international/coca-cola-causes-controversy-with-ai-made-ad/3772350/
[16] Social Samosa. (2024, November 18). *Coca-Cola's AI-generated ad sparks backlash*. https://socialsamosa.com/industry-updates/coca-cola-ai-ad-sparks-backlash-7590417
[17] Design Compass. (2025, November 10). *Coca-Cola's AI ad faces backlash again this year* (secondary; production figures attributed to Coca-Cola). https://designcompass.org/en/2025/11/10/coca-colas-ai-ad-faces-backlash-again-this-year/
[18] Decrypt. (2024, June 25). *Toys'R'Us Ad Made With AI Ignites Controversy*. https://decrypt.co/237017/ai-film-toys-r-us-sora-controversy
[19] BNN Bloomberg / AFP. (2025, December 10). *Not lovin' it: McDonald's pulls Dutch AI Christmas ad*. https://www.bnnbloomberg.ca/business/company-news/2025/12/10/not-lovin-it-mcdonalds-pulls-dutch-ai-christmas-ad
[20] FashionNetwork. (2025, August 1). *Vogue US faces backlash over Guess ad featuring AI-generated model*. https://us.fashionnetwork.com/news/Vogue-us-faces-backlash-over-guess-ad-featuring-ai-generated-model%2C1754907.html
[21] Heidelberger, B. L. (2025, August 29). *Two Recent GenAI Controversies Highlight Brand/PR Risks of Use*. Loeb & Loeb LLP. https://www.loeb.com/en/insights/passle/2025/08/two-recent-genai-controversies-highlight-brandpr-risks-of-use
[22] Hanbury, M. (2023, April 1). *Levi's says its AI-generated diverse models ... are not a substitute for action on diversity*. Business Insider via Yahoo News UK. https://uk.news.yahoo.com/levis-says-ai-models-not-110000296.html
[23] Notebookcheck. (2024, December 10). *Call of Duty: Activision criticized for using AI artwork in Black Ops 6 loading screens*. https://www.notebookcheck.net/Call-of-Duty-Activision-criticized-for-using-AI-artwork-in-Black-Ops-6-loading-screens.929969.0.html
[24] Nelson, J. (2025, February 25). *'Call of Duty: Black Ops 6' Was Built With Generative AI, Activision Admits*. Decrypt. https://decrypt.co/307729/call-of-duty-black-ops-6-generative-ai
[25] Barkho, G. (2026, September 12). *Where Boll & Branch draws the line on AI-generated advertising*. Modern Retail. https://modernretail.co/operations/where-boll-branch-draws-the-line-on-ai-generated-advertising
[26] Euronews. (2025, March 28). *ChatGPT's viral Studio Ghibli-style images: "an insult to life itself"*. https://euronews.com/culture/2025/03/28/chatgpts-viral-studio-ghibli-style-images-an-insult-to-life-itself
[27] The Decoder. (2025, March 30). *Studio Ghibli founder Hayao Miyazaki's viral AI criticism lacks crucial context*. https://the-decoder.com/studio-ghibli-founder-hayao-miyazakis-viral-ai-criticism-lacks-crucial-context
[28] Regulation (EU) 2024/1689 (AI Act), Article 50. Text via artificialintelligenceact.eu (secondary host; the EUR-Lex page did not render in this pass). https://artificialintelligenceact.eu/article/50/
[29] European Commission. (accessed 2026-10). *Code of Practice on marking and labelling of AI-generated content*. https://digital-strategy.ec.europa.eu/en/policies/code-practice-ai-generated-content
[30] Usercentrics. (accessed 2026-10). *EU AI Act* (secondary summary of the Digital Omnibus on AI and the Art. 50(2) grace period). https://usercentrics.com/knowledge-hub/eu-ai-act/
[31] YouTube Help. (accessed 2026-10). *Disclosing use of altered or synthetic content*. https://support.google.com/youtube/answer/14328491
[32] Meta. (2024, April 5; updated through 2025). *Our Approach to Labeling AI-Generated Content and Manipulated Media*. https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/
[33] TikTok Newsroom. (2024, May 9). *Partnering with our industry to advance AI transparency and literacy*. https://newsroom.tiktok.com/en-us/partnering-with-our-industry-to-advance-ai-transparency-and-literacy
[34] C2PA. (accessed 2026-10). *Coalition for Content Provenance and Authenticity*. https://c2pa.org/
[35] Collomosse, J. (2026, January 22). *The three pillars of provenance that make up durable Content Credentials*. Content Authenticity Initiative. https://contentauthenticity.org/blog/three-pillars-of-provenance
[36] U.S. Copyright Office. (2025, January 29). *Copyright Office Releases Part 2 of Artificial Intelligence Report* (Copyrightability). https://www.copyright.gov/newsnet/2025/1060.html
[37] Inkbot Design. (accessed 2026-10). *Top 10 AI Logo Generators: Good, Bad, and Legally Dubious* (practitioner/vendor page). https://inkbotdesign.com/logo-generators/
