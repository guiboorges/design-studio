# Color Psychology

> **Scope:** What research does and does not support about how color affects perception, emotion, and behavior, with evidence grades and practical rules for using color in UI, web, print, social, and out-of-home work.
> **Last verified:** 2026-10 (WCAG 2.2 Understanding documents, Apple Human Interface Guidelines, URL status of cited web pages).
> **Used by:** color-specialist, ui-designer, brand-strategist, identity-designer, art-director, accessibility-specialist, social-media-designer, print-ooh-designer, behavioral-psychologist, design-critic

---

## 0. Decision rules (read this first)

Use color in this order of priority. The higher items have strong evidence; the lower items are weak, cultural, and context-dependent.

| Priority | Use color for | Evidence | Rule |
|---|---|---|---|
| 1 | **Legibility (contrast)** | [E2] standard; [E1] perception research | Text 4.5:1, large text 3:1, UI components and meaningful graphics 3:1 against adjacent colors [31][33]. |
| 2 | **Attention and hierarchy (salience)** | [E1] | A single item that differs in color from its neighbors draws the eye; similar neighbors cancel the effect [36]. Reserve one accent color for the most important action [25]. |
| 3 | **Coding and grouping** | [E1] / [E2] | Use color to mark categories and states, but never as the only cue (add text, icon, shape, position) [32][24]. |
| 4 | **Brand consistency and recognition** | [E2] | Same color, same meaning, everywhere [24][25]. Consistency matters more than which hue you picked. |
| 5 | **Emotional tone and arousal** | [E1] for saturation/brightness; [E3] for most hue-specific claims | Saturated, bright colors raise arousal more reliably than any particular hue does [13]. |
| 6 | **Specific "meaning" of a hue** ("blue = trust", "red = appetite") | [E3] | Meaning depends on culture, category, and context. Test with the actual audience instead of relying on a color-meaning chart [2][19][25]. |

**Default stance for agents:** treat any statement of the form "color X makes people feel/do Y" as [E3] unless it is listed as [E1] below. Do not cite color-psychology statistics such as "62–90%" or "80% brand recognition" in client work (see section 7).

---

## 1. Evidence map

| Popular claim | Grade | Corrected reading |
|---|---|---|
| High contrast improves legibility and findability | [E1]/[E2] | Solid. Codified in WCAG 2.2 SC 1.4.3 and 1.4.11 [31][33]. |
| A uniquely colored item pops out and guides attention | [E1] | Solid. Color is one of the "undoubted" features that guide visual attention, but only when it differs enough from its neighbors [36]. |
| Color alone can carry meaning in UI | False for accessibility | About 1 in 12 men (8%) and 1 in 200 women have a color vision deficiency [34][35]. WCAG 1.4.1 (Level A) prohibits color as the only visual means [32]. |
| Saturated, bright colors are more arousing | [E1] (single controlled study, consistent direction) | Saturation and brightness raised self-reported arousal and skin conductance; hue mattered less and interacted with the other two [13]. |
| Red is arousing; blue is calming | [E1] weak to [E3] | In a controlled study, arousal increased from blue and green to red, but this held alongside strong saturation and brightness effects [13]. Do not treat hue alone as the lever. |
| Seeing red impairs test performance | [E3] | Original effect (Elliot et al. 2007) [3] largely failed to replicate. After correcting for publication bias, a 2020 meta-analysis found no evidential value [4]. |
| Red makes women look more attractive to men (and vice versa) | [E3] | Meta-analysis: small effect for men rating women (d = 0.26), very small for women rating men (d = 0.13), high heterogeneity, signs of bias and decline over time; preregistered replications near zero [6][9]. |
| Athletes in red win more often | [E3] | Hill & Barton 2005 found an advantage in 2004 Olympic combat sports [10]; a UFC test found no effect [11]. Treat as unresolved. |
| Red helps detail tasks, blue helps creative tasks | [E3] | One multi-study paper (Mehta & Zhu 2009) [12]. Not independently verified in this research pass; the broader red-performance literature shows a decline effect [4]. |
| Blue suppresses appetite; red stimulates it | [E3] | Rooted in consultancy claims [16]. Lab evidence is mixed and sometimes opposite: red plates and cups *reduced* intake in one study [27]; blue *lighting* reduced intake in men only in another [28]. |
| Food color shapes expected taste | [E1] | Strong. Color sets flavor expectations; mismatches produce negative disconfirmation; meanings vary by age and culture [26]. |
| Blue = competence, red = excitement for brands | [E1] for the existence of hue-personality links in the tested samples; [E3] as a universal rule | Labrecque & Milne found hue, saturation, and value shift perceived brand personality and purchase intent [15]. Results are sample- and category-bound. |
| "62–90% of product assessment is based on color alone" | [E3] | Uncited in the paper that popularized it (Singh 2006) [16]; traces to a color consultancy with no published study [17]. Do not use. |
| "Color increases brand recognition by 80%" | [E3] | Origin investigation found no study containing the claim; the likely source compared color vs. monochrome documents [18]. Do not use. |
| "Changing the button to red raised conversions 21%" | [E3] [unverified] | Anecdote; original post no longer reachable [29]. Even where real, button tests usually measure contrast and novelty against a specific page, not hue meaning. |
| Color-emotion associations are universal | [E1] partly | Strong shared pattern across 30 nations (r = .88), plus real national differences predicted by language and geography [19]. |

---

## 2. What is solid: contrast, salience, and coding

### 2.1 Contrast for legibility [E2]

- WCAG 2.2 SC 1.4.3 Contrast (Minimum), Level AA: text and images of text need at least **4.5:1**; large-scale text (at least 18 pt, or 14 pt bold) needs at least **3:1** [31].
- The 4.5:1 figure was chosen to compensate for the contrast-sensitivity loss typical of vision around 20/40 [31].
- SC 1.4.11 Non-text Contrast, Level AA: visual information needed to identify UI components and their states, and graphical objects needed to understand content, need at least **3:1** against adjacent colors [33].

**Apply:**
- UI and web: check every text/background pair, including text over images, disabled-looking-but-active states, focus rings, form field borders, and chart lines.
- Print: the WCAG ratios are a useful floor for small text on colored stock, but paper, ink gain, and lighting change actual contrast; proof physically.
- Social: platform UI overlays (captions, buttons) sit on top of your image. Keep critical text in high-contrast zones.
- Out-of-home (billboards, transit): viewing distance and glare reduce effective contrast. Go well beyond 4.5:1 and avoid adjacent hues of similar lightness.

**Limit:** Passing a contrast ratio does not guarantee readability (weight, size, and line length matter too). Very high contrast can also cause discomfort in dark contexts; Apple advises against full-brightness content when the surrounding context is dark [24].

### 2.2 Salience and attention [E1]

- Wolfe & Horowitz list color among the "undoubted" basic features that guide the deployment of attention, a status they reserve for attributes supported by multiple experiments from multiple labs [36].
- Salience depends on local difference: an item that is the only one of its shade is not salient if its neighbors are close in color [36].

**Apply:**
- Use one accent color for the primary call to action and keep it out of decorative use [25].
- To make something stand out, increase its difference from what surrounds it (hue, lightness, and saturation together), rather than choosing a "persuasive" hue.
- In dense dashboards and maps, reserve saturated colors for exceptions and alerts; render the bulk of data in muted tones.

**Limit:** Overusing accent colors destroys salience; when everything is highlighted, nothing is. Using salience to steer people toward choices against their interest (for example, a bright "Accept all" next to a gray "Reject") is a dark pattern; see `dark-patterns-and-ethics.md`.

### 2.3 Never rely on color alone [E2]

- WCAG 2.2 SC 1.4.1 Use of Color (Level A): color must not be the only visual means of conveying information, indicating an action, prompting a response, or distinguishing a visual element [32]. Its intent notes that people with partial sight often have limited color vision and many older users do not see color well [32].
- About 1 in 12 men and 1 in 200 women have a color vision deficiency [35]; the most common type makes red and green hard to tell apart [34].
- Apple: "Avoid relying solely on color to differentiate between objects, indicate interactivity, or communicate essential information." [24]

**Apply:** Pair status colors with icons and text labels (error icon + message, not just a red border). In charts, add direct labels or patterns; avoid red/green as the only distinction. Links inside body text need an underline or another non-color cue.

### 2.4 Consistency and restraint [E2]

- Use colors consistently, especially for status and interactivity; do not reuse an interactive color on non-interactive text [24].
- NN/g recommends a limited palette (start with two or three colors) and reserving the accent for what matters most; it presents the 60-30-10 split as a starting heuristic [25].

**Apply:** Define semantic color tokens (primary action, success, warning, danger, info, neutral) and map each to exactly one meaning across product, marketing site, email, and print collateral.

---

## 3. Color-in-context theory: why "color meaning" charts fail

Color-in-context theory (Elliot & Maier 2012, *Advances in Experimental Social Psychology* 45:61–125; summarized here from Elliot's own 2015 review [2]) proposes that:

- Some responses to color are learned through repeated pairings of colors with concepts and experiences; others are biologically based predispositions that social learning reinforces [2].
- The physical and psychological context in which a color is perceived shapes its meaning and the response to it [2]. Elliot's examples: blue on a ribbon signals first place, blue on meat signals spoilage; a red shirt may raise perceived attractiveness but not perceived competence [2].

Elliot's own assessment of the field [E1 for the methodological critique]:
- The literature on color and psychological functioning "is at a nascent stage of development"; it is premature to offer definitive empirical pronouncements [2].
- Earlier work often lacked experimenter blindness, screening for color-deficient participants, and spectral control of stimuli; many studies were underpowered, and underpowered studies tend to overestimate effects [2].
- Elliot & Maier's 2014 *Annual Review* concludes that "considerable work on boundary conditions, moderators, and real-world generalizability is needed before strong conceptual statements and recommendations for application are warranted" [1].

**Apply:** Judge a color choice against the specific context: product category, culture, adjacent colors, and the task the viewer is doing. A red price tag in a discount grocery flyer, a red error state in a form, and a red envelope in a Lunar New Year campaign are three different signals.

**Limit:** Do not cite color-in-context theory as proof that a given hue will produce a given effect. Its authors describe the theory as general and only vaguely suggestive of precise predictions [2].

---

## 4. Red: the most studied color, and the replication problems

### 4.1 Red and achievement [E3]

- Elliot et al. (2007), *Journal of Experimental Psychology: General*: brief exposure to red before an important test (for example, an IQ test) impaired performance across four experiments; two further experiments linked red to avoidance motivation [3].
- Gnambs (2020), *Psychonomic Bulletin & Review*, meta-analysis of 67 effect sizes from 38 samples: no significant difference for anagram tests (d = -0.06) or knowledge tests (d = -0.04); a pooled d = -0.34 for reasoning tests; much larger effects in initial studies than in later research; after correcting for publication bias, "no evidential value for an effect of red color on intellectual performance" [4].

**Corrected reading:** Do not avoid red in educational or testing interfaces on the grounds that it lowers performance. Avoid it where it would be confused with error states, which is a coding problem, not a priming one.

### 4.2 Red and romantic attraction [E3]

- Elliot & Niesta (2008), *Journal of Personality and Social Psychology*, five experiments: men rated women shown with red as more attractive and sexually desirable [5].
- Lehmann & Calin-Jageman (2017), *Social Psychology*, preregistered replication with original materials: men d = 0.09 (95% CI [-0.17, 0.34], N = 242); women d = -0.09 (95% CI [-0.30, 0.12], N = 360), that is, a very weak effect in the predicted direction for men and in the opposite direction for women [6].
- Peperkoorn, Roberts & Pollet (2016), *Evolutionary Psychology*: three studies (Dutch and American samples, plus a direct replication with roughly 17 times the original sample) found no red effect on attractiveness or sexual receptivity [7][8].
- Lehmann, Elliot & Calin-Jageman (2018), *Evolutionary Psychology*, meta-analysis (an adversarial collaboration including the original author): men rating women d = 0.26 [0.12, 0.40], N = 2,961, I² = 89%, equivocal evidence of upward bias; women rating men d = 0.13 [0.01, 0.25], N = 2,739, with evidence of upward bias. Effects may have declined over time and may be smaller in preregistered studies (women only) [9].

**Corrected reading:** If an effect exists, it is small, inconsistent, and probably smaller than first reported. It is not a basis for fashion, dating-app, or advertising decisions.

### 4.3 Red in sport [E3]

- Hill & Barton (2005), *Nature*: across 2004 Olympic boxing, taekwondo, and Greco-Roman and freestyle wrestling, competitors assigned red won more often than those assigned blue [10].
- Pollet & Peperkoorn (2013), *Frontiers in Psychology*: no evidence that trunk color influenced outcomes in the UFC [11] (title and metadata verified; full text not opened).
- Elliot's 2015 review lists both supporting and non-supporting sport studies [2].

**Corrected reading:** Unresolved; do not claim red uniforms or red branding confer competitive dominance.

### 4.4 Red vs. blue and task type [E3]

- Mehta & Zhu (2009), *Science*: red induced avoidance motivation and improved detail-oriented tasks; blue induced approach motivation and improved creative tasks, across six studies (n = 42 to 208 each) [12].

**Corrected reading:** A single paper with modest per-study samples in a literature that shows strong decline effects [4]. Do not use it to justify interface or workspace colors.

---

## 5. Hue, saturation, brightness, and arousal

- Wilms & Oberfeld (2018), *Psychological Research*: 27 chromatic colors varying hue (blue, green, red), saturation, and brightness, plus 3 achromatic colors, shown on an LED display to 62 participants for 30 s each. Saturated and bright colors produced higher self-reported arousal and stronger skin conductance responses; arousal also rose from blue and green to red; valence was highest for saturated and bright colors; several interactions among the three dimensions [13]. The authors conclude effects "are not only determined by the hue of a color, as is often assumed, but by all the three color dimensions as well as their interactions" [13]. [E1] (peer-reviewed, well-controlled, single study; trust the direction more than the size)
- Color preference: Palmer & Schloss's ecological valence theory (2010, *PNAS*) explains average color preference by how much people like the objects associated with a color (blues with clear skies and clean water liked; browns with feces and rotten food disliked) [14]. [E1]

**Apply:**
- To make a layout feel calmer, lower saturation and contrast across the whole palette before switching hues. To make it feel energetic (sports, sales events, youth campaigns), raise saturation and brightness.
- When a client asks for "warm" or "cool", treat it as a mood brief and test full compositions, not swatches.
- For preference: colors that remind the audience of liked things in that category (fresh produce greens for groceries) will tend to be liked; colors associated with spoilage or dirt in that category will not [14].

**Limit:** Arousal is not the same as persuasion or conversion. High-arousal palettes can increase fatigue in long-use interfaces.

---

## 6. Color and branding

- Labrecque & Milne (2012), *Journal of the Academy of Marketing Science*, four studies: hue maps onto brand personality dimensions; saturation and value strengthen those traits; marketers can use color to shift brand personality and purchase intent; color affects brand likability and familiarity [15]. The paper's title summarizes its headline associations: exciting red, competent blue. [E1] for the existence of these associations in the studied samples; [E3] when generalized to all categories and cultures.
- Apple's guidelines note that red "communicates danger in some cultures, but has positive connotations in other cultures" [24].

**Apply:**
- Choose a brand hue for differentiation within the category first (what competitors own), then check that its connotations in the target markets do not conflict with the brand personality.
- Use saturation and lightness, not just hue, to tune personality: the same blue can read as corporate (dark, muted) or playful (bright, saturated).
- Lock the brand color into tokens and specify it for every medium (sRGB/Display P3 for screen, CMYK and spot for print, paint or vinyl references for signage) so it stays consistent.

**Limit:** Brand-color studies use fictitious or neutral logos in controlled settings. Real brand meaning comes mostly from experience with the brand.

---

## 7. Statistics to stop repeating

### 7.1 "62–90% of the assessment is based on color alone" [E3]

- **Where it appears:** the abstract of Singh (2006), "Impact of color on marketing", *Management Decision* 44(6):783–789, a literature review: "People make up their minds within 90 seconds of their initial interactions with either people or products. About 62-90 percent of the assessment is based on colors alone." [16]
- **What I found tracing it (full text read):** the figure appears only in the abstract, with no citation, and the reference list has no entry for any "Institute for Color Research" or "CCICOLOR" [16]. The body itself says much of the applied color research "came from companies in the color consultation industry" and that "their nature of experiments is not scientific", and the conclusion refers to "the unverifiable research conducted by industry color consultants" [16].
- **The other attribution:** a color consultancy's website repeats the claim and attributes it to "CCICOLOR - Institute for Color Research", with no study title, date, sample, or method [17].
- **Verdict:** No traceable study. Do not cite it.

### 7.2 "Color increases brand recognition by 80%" [E3]

- An investigation by a print-industry analyst traced the claim to a Xerox marketing leaflet (about 2000–2001) and to an attribution to "Loyola University". The researcher identified with that work supplied two papers (1990, 2000) on color in graphs and text; neither contained the quote [18]. This is a secondary investigation, not a peer-reviewed source.
- **Verdict:** If anything, it concerns color vs. monochrome documents, not choosing one hue over another. Do not cite it.

### 7.3 Button-color A/B tests [E3]

- The widely repeated "red button beat green by 21%" story is attributed to Performable/HubSpot (2011) [unverified]. As of 2026-10, the original HubSpot blog URL redirects to an unrelated roundup of A/B test examples (originally published October 2014, updated May 2025) [29].
- That roundup does include a contrast example: a homepage redesign with increased contrast reportedly drew more attention to target sections and lifted CTA clicks, with no sample size reported [29]. [E3]
- Douglas Bowman, leaving Google in 2009, described a team testing 41 shades between two blues [30]. It shows that large companies test color; it is not evidence that a particular hue persuades.

**Corrected reading:** When a button-color test wins, the likely mechanisms are contrast against that page, salience relative to nearby elements, and novelty, not a universal effect of the hue. A winning color on one page is not a rule for another. Run your own test with adequate sample size before claiming a lift.

---

## 8. Culture: shared patterns plus local meaning

### 8.1 What the best data show [E1]

- Jonauskaite et al. (2020), *Psychological Science*: 4,598 participants from 30 nations, 22 native languages, 20 emotion concepts × 12 color terms. Strong universal pattern (average similarity r = .88), but nation predicted associations beyond the universal pattern, and similarity was greater for linguistically or geographically close nations [19].
- Reported specifics (from the university press release and the authors' own summary):
  - Red is the only color strongly associated with both a positive emotion (love) and a negative one (anger) worldwide [20].
  - Black was the saddest color; pink was linked with love and pleasure; yellow with joy and amusement; brown triggered the fewest emotions [20][21].
  - White was much more closely associated with sadness in China than elsewhere; the researchers suggest a link to white clothing at Chinese funerals [20].
  - Purple was associated with sadness only in Greece (linked by the researchers to dark purple used in the Greek Orthodox Church during mourning) and was the color with the least cross-national agreement [20][21].
  - In China, red was additionally linked to joy and amusement; in Nigeria, additionally to fear [21].
  - The yellow–joy link was strongest in colder, rainier countries and weakest near the equator (from a separate study by the same group) [21].
- Madden, Hewett & Roth (2000), *Journal of International Marketing*, eight-country study: patterns of both similarity and dissimilarity in color preferences and meaning associations [22].
- Aslam (2006), *Journal of Marketing Communications*, a cross-cultural review, argues that cultural values, marketing objectives, and desired customer relationships make a culture-specific perspective on color necessary for global strategy [23].

### 8.2 Practical table

| Color | Common shared association | Known local divergence (verified) | Grade |
|---|---|---|---|
| Red | Love and anger (both) | Also joy/amusement in China; also fear in Nigeria [21] | [E1] |
| White | No single shared emotion verified in this pass | Sadness, mourning context in China [20] | [E1] association; [E2] funeral-custom explanation |
| Purple | Little agreement anywhere | Sadness/mourning in Greece [20][21] | [E1] |
| Black | Sadness, negative | — | [E1] |
| Yellow | Joy | Weaker joy link near the equator [21] | [E1] |

**Apply:**
- For any campaign shipped to more than one culture, list the meanings of the key colors in each target market and verify them with local reviewers.
- Ceremonial and seasonal contexts are where color meaning is strongest and most local (weddings, funerals, national holidays, religious seasons). Check them explicitly.
- Prefer the shared associations when you need a palette that travels (for example, avoid making white the dominant tone of a celebratory campaign in China without local review).

**Limit:** Do not stereotype. Country-level averages say little about an individual, a subculture, or a product category. Color-emotion associations are many-to-many [21]; one hue can signal very different things.

---

## 9. Food, appetite, and packaging

- **Claim:** red and yellow stimulate appetite; blue suppresses it. Singh (2006) states this [16] but also writes that "no direct evidence that specific restaurants using specific colors increased sales was documented" [16]. [E3]
- **Lab evidence (mixed, sometimes opposite):**
  - Genschow, Reutner & Wänke (2012), *Appetite*: participants drank less from a red-labeled cup than a blue one, and ate less snack food from a red plate than from a blue or white plate, which the authors interpret as red acting as a subtle stop signal [27].
  - Cho et al. (2015), *Appetite*, N = 112: blue lighting reduced the amount eaten by men but not women compared with yellow and white lighting [28].
- **Solid finding [E1]:** color is the single most important product-intrinsic cue for setting expectations of taste and flavor; mismatches between color and taste produce negative disconfirmation; food color meanings differ by age and culture [26].

**Apply:**
- Packaging and food photography: make product color match the expected flavor (a lemon product looks lemon). This is the evidence-backed lever.
- Restaurant and food-delivery UI: do not claim that a red palette will raise order size.

**Limit:** Using color to make low-quality food look fresher or to push overconsumption deserves an ethics check, especially for children's products.

---

## 10. Medium-by-medium application

| Medium | Do | Avoid |
|---|---|---|
| **UI / product** | Semantic tokens; 4.5:1 text and 3:1 component contrast [31][33]; one accent for primary action [25]; non-color cues for every status [32]; test light, dark, and increased-contrast modes [24]. | Color-only error states; red/green-only charts; using the action color on non-interactive text [24]. |
| **Landing pages** | Make the primary CTA the most color-distinct element in its viewport; keep the palette small [25]. | Claiming a hue "converts better" without your own test; brightly colored "accept" next to gray "decline" (dark pattern). |
| **Social posts** | High-contrast, saturated focal points to stand out in a fast-scrolling feed (salience [36], arousal [13]); keep text off busy regions. | Low-contrast text over photos; relying on hue meaning across global audiences. |
| **Print / packaging** | Proof contrast physically; match product color to expected flavor or category [26]; specify brand colors in print color systems. | Assuming screen colors survive print unchanged. |
| **Billboards / OOH** | Large lightness differences between text and background; few colors; strong figure-ground. | Adjacent hues of similar lightness, which collapse at distance or in poor light and for viewers with color vision deficiency [34][35]. |

---

## 11. Pre-ship color checklist

1. Does every text/background pair meet 4.5:1 (or 3:1 for large text), and every component and meaningful graphic meet 3:1? [31][33]
2. Is any information carried by color alone? Add a second cue. [32]
3. Is the primary action the most color-salient element on the screen or page? Are accents used sparingly? [25][36]
4. Does each semantic color mean the same thing everywhere? [24][25]
5. Has a color-vision-deficiency simulation been checked (especially red/green)? [34]
6. For each target culture, have key colors been checked for ceremonial or negative meanings by a local reviewer? [19][20][21]
7. Does the rationale avoid [E3] claims (the 62–90% figure, the 80% recognition figure, "blue suppresses appetite", universal button-color wins)? [16][17][18]
8. Is color being used to mislead (hiding a decline option in low contrast, making an inferior product look fresher)? If yes, stop and consult `dark-patterns-and-ethics.md`.

---

## Sources

[1] Elliot, A. J., & Maier, M. A. (2014). *Color psychology: Effects of perceiving color on psychological functioning in humans*. Annual Review of Psychology, 65, 95–120. https://doi.org/10.1146/annurev-psych-010213-115035 (abstract read)

[2] Elliot, A. J. (2015). *Color and psychological functioning: A review of theoretical and empirical work*. Frontiers in Psychology, 6, 368. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2015.00368/full (also the source for the summary of Elliot & Maier (2012), *Color-in-context theory*, Advances in Experimental Social Psychology, 45, 61–125, https://doi.org/10.1016/B978-0-12-394286-9.00002-0, whose full text was not opened)

[3] Elliot, A. J., Maier, M. A., Moller, A. C., Friedman, R., & Meinhardt, J. (2007). *Color and psychological functioning: The effect of red on performance attainment*. Journal of Experimental Psychology: General, 136(1), 154–168. https://doi.org/10.1037/0096-3445.136.1.154 (abstract read)

[4] Gnambs, T. (2020). *Limited evidence for the effect of red color on cognitive performance: A meta-analysis*. Psychonomic Bulletin & Review, 27(6), 1374–1382. https://doi.org/10.3758/s13423-020-01772-1 (open access, PMC7704521)

[5] Elliot, A. J., & Niesta, D. (2008). *Romantic red: Red enhances men's attraction to women*. Journal of Personality and Social Psychology, 95(5), 1150–1164. https://doi.org/10.1037/0022-3514.95.5.1150 (abstract read)

[6] Lehmann, G. K., & Calin-Jageman, R. J. (2017). *Is red really romantic? Replication attempts of the red-romance effect*. Social Psychology, 48(3), 174–183. https://doi.org/10.1027/1864-9335/a000296 (abstract read)

[7] Peperkoorn, L. S., Roberts, S. C., & Pollet, T. V. (2016). *Revisiting the red effect on attractiveness and sexual receptivity: No effect of the color red on human mate preferences*. Evolutionary Psychology, 14(4). https://doi.org/10.1177/1474704916673841 (bibliographic record and abstract excerpts read; full text not opened)

[8] British Psychological Society Research Digest. (2016). *Wardrobe malfunction: Three failed attempts to replicate the finding that red increases attractiveness*. https://bps.org.uk/research-digest/wardrobe-malfunction-three-failed-attempts-replicate-finding-red-increases (secondary summary of [7])

[9] Lehmann, G. K., Elliot, A. J., & Calin-Jageman, R. J. (2018). *Meta-analysis of the effect of red on perceived attractiveness*. Evolutionary Psychology, 16(4). https://doi.org/10.1177/1474704918802412 (abstract read)

[10] Hill, R. A., & Barton, R. A. (2005). *Red enhances human performance in contests*. Nature, 435, 293. https://doi.org/10.1038/435293a (abstract read)

[11] Pollet, T. V., & Peperkoorn, L. S. (2013). *Fading red? No evidence that color of trunks influences outcomes in the ultimate fighting championship (UFC)*. Frontiers in Psychology, 4, 643. https://doi.org/10.3389/fpsyg.2013.00643 (title and metadata verified; full text not opened)

[12] Mehta, R., & Zhu, R. (2009). *Blue or red? Exploring the effect of color on cognitive task performances*. Science, 323(5918), 1226–1229. https://doi.org/10.1126/science.1169144 (abstract read)

[13] Wilms, L., & Oberfeld, D. (2018). *Color and emotion: Effects of hue, saturation, and brightness*. Psychological Research, 82(5), 896–914. https://doi.org/10.1007/s00426-017-0880-8 (abstract read)

[14] Palmer, S. E., & Schloss, K. B. (2010). *An ecological valence theory of human color preference*. Proceedings of the National Academy of Sciences, 107(19), 8877–8882. https://doi.org/10.1073/pnas.0906172107 (abstract read)

[15] Labrecque, L. I., & Milne, G. R. (2012). *Exciting red and competent blue: The importance of color in marketing*. Journal of the Academy of Marketing Science, 40(5), 711–727 (online 2011). https://doi.org/10.1007/s11747-010-0245-y (abstract read on the first author's site: https://laurenlabrecque.com/2023/01/02/exciting-red-and-competent-blue-the-importance-of-color-in-marketing/)

[16] Singh, S. (2006). *Impact of color on marketing*. Management Decision, 44(6), 783–789. https://doi.org/10.1108/00251740610673332 (full text read from the author's hosted PDF, retrieved via the Internet Archive copy of http://newion.uwinnipeg.ca/~ssingh5/x/color.pdf)

[17] Colorcom. (n.d.). *Why color matters*. https://www.colorcom.com/research/why-color-matters (color consultancy page; secondary, no underlying study given)

[18] insights4print.ceo. (2019, February). *"Color increases brand recognition by 80%": The real contents of the Loyola study revealed*. https://www.insights4print.ceo/2019/02/color-increases-brand-recognition-by-80-the-real-contents-of-the-loyola-study-revealed/ (secondary investigation)

[19] Jonauskaite, D., Abu-Akel, A., Dael, N., Oberfeld, D., et al. (2020). *Universal patterns in color-emotion associations are further shaped by linguistic and geographic proximity*. Psychological Science, 31(10), 1245–1260. https://doi.org/10.1177/0956797620948810 (abstract read; record: https://infoscience.epfl.ch/record/280269)

[20] Johannes Gutenberg University Mainz. (2020). *Sadness is purple in Greece, white in China: How people associate colors with emotions around the world* (press release, republished by Technology Networks). https://www.technologynetworks.com/neuroscience/news/sadness-is-purple-in-greece-white-in-china-how-people-associate-colors-with-emotions-around-the-340357

[21] Mohr, C., & Jonauskaite, D. (2022, February 8). *Why links between colors and emotions may be universal*. Psychology Today. https://www.psychologytoday.com/us/blog/color-psychology/202202/why-links-between-colors-and-emotions-may-be-universal (written by the study authors)

[22] Madden, T. J., Hewett, K., & Roth, M. S. (2000). *Managing images in different cultures: A cross-national study of color meanings and preferences*. Journal of International Marketing, 8(4), 90–107. https://doi.org/10.1509/jimk.8.4.90.19795 (abstract read)

[23] Aslam, M. M. (2006). *Are you selling the right colour? A cross-cultural review of colour as a marketing cue*. Journal of Marketing Communications, 12(1), 15–30. https://doi.org/10.1080/13527260500247827 (abstract read)

[24] Apple. (n.d., accessed 2026-10). *Color*. Human Interface Guidelines. https://developer.apple.com/design/human-interface-guidelines/color

[25] Gordon, K. (2021, June 6). *Using color to enhance your design*. Nielsen Norman Group. https://www.nngroup.com/articles/color-enhance-design/

[26] Spence, C. (2015). *On the psychological impact of food colour*. Flavour, 4, 21. https://doi.org/10.1186/s13411-015-0031-3 (abstract read)

[27] Genschow, O., Reutner, L., & Wänke, M. (2012). *The color red reduces snack food and soft drink intake*. Appetite, 58(2), 699–702. https://doi.org/10.1016/j.appet.2011.12.023 (abstract read)

[28] Cho, S., Han, A., Taylor, M. H., Huck, A. C., Mishler, A. M., Mattal, K. L., Barker, C. A., & Seo, H.-S. (2015). *Blue lighting decreases the amount of food consumed in men, but not in women*. Appetite, 85, 111–117. https://doi.org/10.1016/j.appet.2014.11.020 (abstract read)

[29] Riserbato, R. (2014, updated 2025). *A/B testing examples from real businesses*. HubSpot Blog. Reached via the former red-vs-green post URL https://blog.hubspot.com/blog/tabid/6307/bid/20566/the-button-color-a-b-test-red-beats-green.aspx, which now redirects here (checked 2026-10).

[30] Bowman, D. (2009, March 20). *Goodbye, Google*. Stopdesign. https://stopdesign.com/archive/2009/03/20/goodbye-google.html

[31] W3C. (2023). *Understanding Success Criterion 1.4.3: Contrast (Minimum)*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html

[32] W3C. (2023). *Understanding Success Criterion 1.4.1: Use of Color*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html

[33] W3C. (2023). *Understanding Success Criterion 1.4.11: Non-text Contrast*. WCAG 2.2. https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html

[34] National Eye Institute. (n.d., accessed 2026-10). *Color blindness*. https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/color-blindness

[35] Colour Blind Awareness. (n.d., accessed 2026-10). *Colour blindness*. https://www.colourblindawareness.org/colour-blindness/

[36] Wolfe, J. M., & Horowitz, T. S. (2017). *Five factors that guide attention in visual search*. Nature Human Behaviour, 1, 0058. https://doi.org/10.1038/s41562-017-0058 (full text read, PMC9879335)
