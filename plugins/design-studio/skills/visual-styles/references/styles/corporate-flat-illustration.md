# Corporate Flat Illustration ("Corporate Memphis" / "Alegria")

> **Scope:** The flat, geometric people-illustration style with long bendy limbs and non-realistic skin tones that big tech and startups used everywhere in the late 2010s and early 2020s. What it is, how to build it, and why it is now a cliché.
> **Last verified:** 2026-10
> **Used by:** creative-director, ui-designer, art-director, design-system-architect

## Origin & context

- **Precondition:** The industry moved from skeuomorphism to flat design. Apple's 2013 flat redesign is usually cited as the starting point [1].
- **Facebook "Alegria" (2017):**
  - Facebook asked the studio Buck in 2017 to redesign "their entire illustration and animation ecosystem". The result was named *Alegria*, Spanish for "joy" [2].
  - Buck describes it as built on "flat, minimal, geometric shapes", with abstracted figures, oversized limbs, and non-representational skin colors meant to read as universal [2].
  - It included a library of about a dozen asset subcategories beyond people (transportation, flora and fauna, buildings, hands), plus a toolkit for extending it [2]. Xoana Herrera was design lead [2].
  - Herrera said the characters were "designed for expression, rather than individual identity" and were made ethnically non-specific on purpose [3]. The style was simplified so others could replicate it, and its usage manual passed through many studios [3].
- **Spread:** AIGA Eye on Design (2019) lists Airbnb, Hinge, Lyft, Airtable, Google, YouTube and "seemingly every other new app or startup" [3]. Wikipedia adds Slack, WeTransfer, Trainline and Transport for London among others [1].
  - Airbnb's version, by Jennifer Hom, used more varied, realistic skin tones and body types [3].
- **Free libraries made it a commodity:** Pablo Stanley's *Humaaans* (Dec 2018) was a free mix-and-match library of customizable people (poses, clothing, hair, colors), built in InVision Studio and offered for Sketch [4].
- **The name:** "Corporate Memphis" is credited to Mike Merrill, from the title of an Are.na board collecting examples [1]. It nods to the 1980s Memphis Group (see `memphis.md`), but the visual link is loose: shared flat color and geometry, not Memphis's clashing patterns or laminate surfaces.
- **The critique:**
  - **Rachel Hawley (AIGA Eye on Design, 2019):** a cheerful style used to soften the image of companies facing scandals. She cites Facebook alongside Cambridge Analytica [3]. Lindsay Ballant links the style's rise to austerity and shrinking illustration budgets [3].
  - **Wired UK (2021):** the article called it "the definitive style for big tech and small startups". It blamed it for a "massive homogenisation and dulling down of the internet's visual culture". Claire L. Evans says it "makes big tech companies look friendly, approachable, and concerned with human-level interaction and community" [5].
  - **Creative Bloq (Nov 2023):** said the style had faded through oversaturation and was now mostly used as parody, according to Wikipedia's summary [1].
- **Why it emerged:**
  - It scales to hundreds of assets and is cheap to extend.
  - It avoids photography's problems with representation and model releases.
  - It reads as "human" without showing any specific human [2][3].

## Visual DNA

- Flat vector fills with no outlines, or very thin ones. No gradients, or one subtle gradient at most.
- People with exaggerated proportions: long, bendy arms and legs, small heads, and big hands and feet [1][3].
- Skin in non-literal colors (purple, blue, coral, teal) to avoid depicting a specific ethnicity [2][3].
- Figures mid-action: high-fiving, reaching, jumping, waving, sitting on oversized UI elements.
- Oversized props: giant phones, charts, speech bubbles, leaves, and floating geometric blobs.
- Saturated but friendly palette: periwinkle, coral, mint, mustard, and blush on white or very light backgrounds.
- Minimal or no facial features. Often no face at all, or dots for eyes.
- A variant uses isometric scenes [1].

## Token recipe

| Token group | Starting values |
|---|---|
| **Typography** | Friendly geometric or neo-grotesque sans (classes: geometric sans, humanist sans), e.g. a Circular-, Inter- or Poppins-type face.<br>**Scale ratio:** 1.25.<br>**Weights:** 700 for headlines, 400 for body.<br>**Letter-spacing:** -0.01em on headlines, 0 on body. Sentence case. |
| **Color** | **Base:** white `#FFFFFF` and ink `#1F1D3A` / `oklch(0.24 0.06 285)`.<br>**Illustration set (6-8 hues):** periwinkle `#6C63FF` / `oklch(0.58 0.21 280)`, coral `#FF7A6B` / `oklch(0.72 0.16 30)`, mint `#3DD9B3` / `oklch(0.80 0.13 170)`, mustard `#FFC145` / `oklch(0.85 0.15 80)`, blush `#FFC9D4`, sky `#8EC5FF`.<br>**Skin set:** 4-6 non-literal tones drawn from the same palette.<br>**UI text:** never put body text in the pastel tones; they fail 4.5:1 on white. |
| **Radius** | 12-16px on cards, 999px on pill buttons. Inside the illustrations themselves, corners are fully rounded. |
| **Borders** | None in the illustrations. UI borders 1px at about 10% ink. |
| **Shadows/elevation** | Flat. Optional soft card shadow `0 8px 24px rgba(31,29,58,0.08)`. No cast shadows in the art, or one flat offset ground shadow at most. |
| **Spacing/grid** | 8px base, generous whitespace. Illustration placements: hero (40-50% of fold width), section spots (240-320px), empty states (160-200px). |
| **Imagery & iconography** | Vector SVG illustration library built from a shared component kit (heads, torsos, limbs, props). Icons: 2px rounded-line icons or flat filled icons in the same palette. |
| **Motion** | Lottie/SVG loops: 2-4 s idle loops, `ease-in-out`. UI transitions 200-300 ms. Character "bounce" overshoot `cubic-bezier(0.34, 1.56, 0.64, 1)`. Honor `prefers-reduced-motion`. |
| **Texture/effects** | None in the canonical style. A 2020s update adds grain or noise at 5-10% to escape the generic look. |

## Signature examples

| Example | Year | Notes |
|---|---|---|
| Facebook *Alegria* illustration system by Buck | 2017 | The canonical source [2] |
| Airbnb illustration (Jennifer Hom) | late 2010s [unverified exact year] | Variant with more realistic skin tones and body types [3] |
| Humaaans by Pablo Stanley | 2018 | Free kit that made the look a commodity [4] |
| Adoption across Hinge, Lyft, Airtable, Google, YouTube | c. 2017-2019 | Named by AIGA Eye on Design [3] |

## Fits / Avoid

**Fits:**
- Explaining abstract product concepts such as sync, collaboration or security, where no photo fits.
- Onboarding, empty states and help-center articles.
- Internal tools.
- Situations that need a large, consistent illustration set on a modest budget.

**Avoid:**
- **When you need to stand out:** the style now signals "generic tech". Critics have described it as homogenized and, by 2023, as parody material [1][5].
- **Where trust depends on real people:** healthcare, finance, crisis or legal contexts. Decorative, non-informative images are largely ignored, while images of real people and task-relevant content get attention (NN/g eyetracking) [6] **[E2]**. Abstract cheerful figures can read as evasive when the subject is serious.
- **As a mask:** do not use cheerful illustration to soften communications about harm, data breaches or layoffs. That mismatch is the core of the critique [3].
  - **Limit:** make illustration tone match the gravity of the message.

**Representation:**
- Non-literal skin colors were meant to be inclusive [3]. Critics note they can also erase identity rather than represent it.
- Airbnb's realistic-tone variant shows the alternative [3]. Decide this deliberately rather than inheriting the default.

**Accessibility:**
- **Risk is medium-low.**
- Pastel fills used for meaningful UI (chart series, text) often fail contrast.
- Give illustrations empty `alt=""` when they are decorative. Write real alt text when they carry information.

**Ages badly:** It has already aged. Use it knowingly, or update it with a distinctive palette, texture, proportion system and real-world specificity.

## Across media

- **App UI:**
  - Empty states, onboarding carousels, success and error spots, kept at 160-240px.
  - Keep the cast and proportions consistent across the product.
  - Use the same flat icons.
- **Website:**
  - Hero plus 3-6 section spot illustrations.
  - The risk is a page that looks interchangeable with competitors. Pair it with real product screenshots.
- **Social post:**
  - Single scene, square or 4:5, with the headline in ink on white or a light tint.
  - Animated Lottie loops for Stories.
- **Print/editorial:**
  - Works for reports and explainers.
  - Convert to CMYK early, because saturated periwinkle and mint shift.
  - Add grain or a spot color to avoid looking like clip art.
- **Billboard/OOH:**
  - Big flat shapes read well at distance, but the style is so familiar that it rarely gets noticed.
  - Use one oversized character and one line of copy.

## Common mistakes

- Mixing kits (Humaaans with Open Peeps with stock) so proportions and line weights don't match.
- Default palette: the stock purple/coral/mint combination makes you indistinguishable from thousands of other startups.
- Characters with no relationship to the product: people high-fiving a floating chart that explains nothing.
- Using illustration for serious or sensitive messages. See Avoid.
- Pastel text and icons below 4.5:1 and 3:1 contrast.
- Over-animating idle loops that run forever with no pause.

## Pairs well with / Related styles

- **Playful / friendly:** a better fit when you want warmth with a distinct character system. See `playful-friendly.md`.
- **Memphis:** the namesake. Much louder pattern and color. See `memphis.md`.
- **Claymorphism / soft 3D:** the 2020s successor for "friendly tech". See `claymorphism.md`.
- **Flat design / minimal SaaS UI:** the interface style it was typically paired with.

## Sources

[1] Wikipedia contributors. (n.d., accessed 2026-10). *Corporate Memphis*. Wikipedia. https://en.wikipedia.org/wiki/Corporate_Memphis (secondary source, summarizes Wired, Fast Company and Creative Bloq coverage)
[2] Buck. (n.d., accessed 2026-10). *Facebook Alegria* (case study). https://buck.co/work/facebook-alegria
[3] Hawley, R. (2019, Aug 21). *Don't Worry, These Gangly-Armed Cartoons Are Here to Protect You From Big Tech*. AIGA Eye on Design. https://eyeondesign.aiga.org/dont-worry-these-gangley-armed-cartoons-are-here-to-protect-you-from-big-tech/
[4] Fleck, R. (2018, Dec 14). *Humaaans: a new, highly customizable library of illustrations*. Dribbble Stories. https://dribbble.com/stories/2018/12/14/humaaans-a-new-highly-customizable-library-of-illustrations
[5] Wired UK. (2021). *Why does every advert look the same? Blame Corporate Memphis*. https://www.wired.co.uk/article/corporate-memphis-design-tech (original not accessible; quotes verified via Nielsen, J. (2021, May 28), notes.jim-nielsen.com, https://notes.jim-nielsen.com/n/2021-05-28-1225/; author commonly given as Josh Gabert-Doyon [unverified])
[6] Nielsen, J. (2010, Oct 31). *Photos as Web Content*. Nielsen Norman Group. https://www.nngroup.com/articles/photos-as-web-content/
