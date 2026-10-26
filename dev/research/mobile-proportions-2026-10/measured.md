# Measured: phone (390) vs desktop (1440) proportions on best-in-class sites

Measured 2026-10-26 with `agent-browser` (headless Chrome 156).
- Phone: device preset "iPhone 14": 390×844 CSS px, DPR 3, iOS 16 Safari UA. `maxTouchPoints` still reported 0.
- Desktop: viewport 1440×900, DPR 1, desktop Chrome UA.

All values are CSS px from `getComputedStyle` and `getBoundingClientRect`. Screenshots, raw JSON per page and width, and the fetched Apple CSS were kept out of the repo (size and copyright); the scripts are in `web/`. Every screenshot was checked by eye (see the caveats at the end).

Abbreviations: **vh** = first viewport height (844 phone, 900 desktop). **ratio** = phone ÷ desktop. **Heading gap** = empty vertical space between the bottom of the previous content (text, image, video) and the top of each section `h2` that is 24 px or larger. It is reported as the median over the page, and it is the visual "space between sections".

---

## 1. Apple pages

### 1.1 apple.com home (https://www.apple.com/)
The hero is a full-bleed "iPad mini" tile with a logo-image headline. It is followed by stacked full-bleed product tiles.

| metric | phone 390 | desktop 1440 | ratio |
|---|---|---|---|
| nav bar height | 48 | 44 | 1.09 |
| hero headline (logo image, h2.logo-image) height | 41 | 66 | 0.62 |
| tile headline text (`typography-tile-headline`, next tiles) | 32 / lh 36 / 600 / +0.064px | 56 / lh 60 / 600 / −0.28px | 0.57 |
| headline width (% vw) | 41.7 | 19.5 | — |
| sub-copy (`tile-subhead`) | 19 / lh 23 | 28 / lh 32 | 0.68 |
| callout (`tile-callout`) | 14 / lh 18 | 19 / lh 23 | 0.74 |
| primary CTA "Learn more" (blue pill) | h 36, pad 9/16 (incl. 1px border), fs 14/400, r 980, w 104 | h 44, pad 12/22, fs 17, r 980, w 131 | h 0.82, fs 0.82 |
| secondary CTA (outline pill) | h 36, w 110 | h 44, w 138 | 0.82 |
| CTA full width? | no (two pills side by side, centred) | no | — |
| text container side margin | 30 (text column 330 wide, centred) | centred, 417 wide | — |
| tile height | 500 | 692 | 0.72 |
| tile top padding (nav to headline) | 39 | 56 | 0.70 |
| gap between tiles | 12 | 12 | 1.0 |
| heading gap (median) | 51 | 68 | 0.75 |
| hero block as % of first viewport | 59% (500/844) | 77% (692/900) | — |
| text block height inside hero | 113 (13% vh) at top of tile; image fills the rest | 145 (16% vh), centred between two images | — |
| distinct font sizes in first viewport (content) | 3 (32, 19, 14) plus logo | 4 (56, 28, 19, 17) | — |

### 1.2 iPhone (https://www.apple.com/iphone/)
Ribbon, then the page header "iPhone", a product chip row, and a carousel of "priority router" cards.

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav bar / promo ribbon | 48 / 86 (ribbon wraps to 3 lines, 14/20) | 44 / 46 | — |
| hero headline (`page-header-title`, "iPhone") | 48 / lh 52 / 600 / −0.144px | 80 / lh 84 / 600 / −1.2px | 0.60 |
| card headline (`priority-router-card-headline`) | 32 / 36 | 56 / 60 | 0.57 |
| card sub (`priority-router-card-body`) | 19 / 23 | 28 / 32 | 0.68 |
| section headline (`section-header-headline`) | 32 measured (token says 28 at ≤734) | 48 measured (token says 56 >1068) | 0.67 |
| body / card copy | 14 / 18–20 | 17 / 21 | 0.82 |
| primary CTA "Learn more" | h 36, fs 14, pad 9/16, r 980, w 104 | h 44, fs 17, pad 12/22, w 131 | 0.82 |
| secondary "Buy" (outline) | h 36, w 60 | h 44, w 73 | 0.82 |
| CTA full width? | no | no | — |
| side margin | 24.4 (content = 87.5% of vw) | 90 (content max 1260) | — |
| section padding (token) | 112 | 144 | 0.78 |
| heading gap (median) | 224 | 288 | 0.78 |
| hero (page header block) % of first viewport | 33% (278 px) | 43% (390 px) | — |
| card | 321×480, copy padding 32, radius 28 | 1260×612, copy padding 48, radius 28 | pad 0.67, radius 1.0 |
| distinct font sizes in first viewport (content) | 4 (48, 32, 19, 14) | 5 (80, 56, 28, 17, 14) | — |

### 1.3 iPhone 18 Pro (https://www.apple.com/iphone-18-pro/)
A full-viewport dark media hero. On phone the text is centred at the top. On desktop it is left-aligned at the bottom.

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav | 48 | 44 | — |
| eyebrow (h1, `eyebrow-super`) "iPhone 18 Pro" | 24 / 28 / 600 | 32 / 36 / 600 | 0.75 |
| hero headline (`media-hero-headline-elevated`) "Pro further." | 40 / lh 44 / 600 / 0 | 80 / lh 84 / 600 / −1.2px | 0.50 |
| headline width (% vw) | 50% | 26% | — |
| price line | 14 / 18 / 600 | 14 / 18 / 600 | 1.0 |
| section reading copy (most common long paragraph) | 19 / 27 / 600 | 21 / 29 / 600 | 0.90 |
| captions | 14 / 18 | 17 / 21 | 0.82 |
| CTA "Buy" (in sticky price bar) | h 36, fs 14, pill, w 60 | h 44, fs 17, pill, w 73 | 0.82 |
| CTA full width? | no | no | — |
| side margin | 24 | 90 | — |
| section padding (token) | 112 | 144 | 0.78 |
| heading gap (median) | 144 | 289 | 0.50 |
| hero % of first viewport | 100% below nav and ribbon (704 px = 83% vh) | 89% (804 px) | — |
| text vs image on phone | text 172–244 (≈9% vh) at top, product image in the middle ≈50%, price bar at the bottom | text at the bottom-left over the image | — |
| distinct font sizes in first viewport (content) | 3 (40, 24, 14) | 4 (80, 32, 17, 14) | — |

### 1.4 AirPods Pro 3 (https://www.apple.com/airpods-pro/)

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav | 48 | 44 | — |
| eyebrow h1 (`marquee-eyebrow-base`) | 21 / 25 | 28 / 32 | 0.75 |
| hero headline (`marquee-headline-base`, 3 lines on phone) | 32 / lh 36 / 600 | 64 / lh 68 / 600 / −0.576px | 0.50 |
| headline width (% vw) | 87.5% | 50% | — |
| sub-copy | 12 / 16 / 600 | 17 / 21 / 600 | 0.71 |
| body copy (mode) | 14 / 20 | 17 / 25 | 0.82 |
| CTA "Buy" (price bar) | h 36, fs 14, pill | h 39, fs 17, pill (pad 8/15 kept) | 0.92 |
| CTA full width? | no | no | — |
| side margin | 24 | 90 | — |
| section padding (token, this page) | 96 | 160 | 0.60 |
| heading gap (median) | 226 | 247 | 0.91 |
| hero % of first viewport | 95% (800 px; image behind the nav) | 100% | — |
| text block in hero | 237 px (28% vh), bottom of hero, centred | 205 px (23% vh), bottom-left | — |
| distinct font sizes in first viewport (content) | 4 (32, 21, 14, 12) | 3 (64, 28, 17) | — |

### 1.5 AirPods (https://www.apple.com/airpods/)
A product-chip nav, then stacked rounded hero tiles, one per product.

| metric | phone | desktop | ratio |
|---|---|---|---|
| hero headline (`hero-headline`) "AirPods 5" | 40 / lh 44 / 600 | 80 / lh 84 / 600 / −1.2px | 0.50 |
| sub-copy (`feature-headline`) | 14 / 18 / 600 | 21 / 25 / 600 | 0.67 |
| CTA "Learn more" (white pill) + "Buy" (outline) | h 36, fs 14, pad 9/16 | h 36, fs 14 (same) | 1.0 |
| CTA full width? | no | no | — |
| hero tile | 341×560, left 24, radius 18 | 1380×756, left 30, radius 18 | radius 1.0 |
| hero tile % of first viewport | 66% | 84% | — |
| gap between tiles | 20 (10 + 10) | 30 | 0.67 |
| text in tile | 151 px (18% vh), bottom-centred over the photo | 116 px (11% vh) | — |
| heading gap (median) | 252 | 349 | 0.72 |
| distinct font sizes in first viewport (content) | 2 (40, 14) | 3 (80, 21, 14) | — |

### 1.6 Apple Store, Buy iPhone (https://www.apple.com/shop/buy-iphone)
A retail and app-like layout on a separate grid (`rs-` classes).

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav | 48 | 44 | — |
| h1 "Shop iPhone" | 48 / 52 / 600 | 80 / 84 / 600 / −1.2px | 0.60 |
| h1 width (% vw) | 68% | 44% | — |
| utility links (Specialist, Store) | 14 / 20 | 14 / 20 | 1.0 |
| local tabs (All Models…) | 17 / 25 | 17 / 25 | 1.0 |
| section h2 ("All models. Take your pick.") | 24 / 28 / 600 | 28 / 32 / 600 | 0.86 |
| card title | 24 | 28 | 0.86 |
| card padding (text inset) | 28 | 28 | 1.0 |
| card CTA "Take a closer look" (dark pill) | h 43, fs 17, pad 8/15 | — | — |
| card "Buy" (`button-reduced`) | h 24, fs 12, pad 3/10 | — | — |
| side margin | 22 | 140 | — |
| heading gap (median) | 71 | 67 | 1.06 |
| page-header block % of first viewport | ≈42% (to the tabs row) | ≈37% | — |
| distinct font sizes in first viewport (content) | 5 (48, 24, 17, 14, 12) | 5 (80, 28, 17, 14, 12) | — |

### 1.7 Apple Music (https://www.apple.com/apple-music/)
A text-only hero over an ambient video, set in SF Pro Expanded.

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav + local nav | 48 + ≈48 (local nav has a "Try it free" pill: h 24, fs 12) | 44 + 52 | — |
| hero headline (`hero-headline`, 4 lines on phone) | 40 / lh 34 (0.85) / 600 | 88 / lh 80 (0.91) / 600 | 0.45 |
| headline width (% vw) | 87.5% | 68% | — |
| sub-copy (intro paragraph) | 17 / 21 / 600 | 24 / 28 / 600 | 0.71 |
| body (long paragraphs, mode) | 17 / 25 / 400 | 17 / 25 / 400 | 1.0 |
| hero CTA "Try it free" (light pill) | h 44, fs 17/600, pad 12/22 (`button-elevated`), w 129 | h 56, fs 17/600, pad 18/31 (`button-super`), w 147 | 0.79 |
| CTA full width? | no | no | — |
| side margin | 24 | 230 (980 container) | — |
| section padding | 50–80 | 100–150 | ≈0.55 |
| heading gap (median) | 155 | 206 | 0.75 |
| hero % of first viewport | 71% (603 px) | 78% (702 px) | — |
| text vs image | text block 386 px = 46% vh; no product image (video background) | 41% | — |
| cards (`tile-rounded`) | 341×187–217, inset 28 h / 22 top, radius 18, label 14/600, big title 24 | 405×319, inset 40 / 34, radius 18, label 17 | inset 0.70 |
| distinct font sizes in first viewport (content) | 4 (40, 28, 17, 14) plus a 15.3 footnote | 4 (88, 24, 17, 14) | — |

---

## 2. Non-Apple references

### 2.1 Stripe (https://stripe.com/, geo-redirected to /pt-pt)

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav (header) | 66 | 76 | 0.87 |
| eyebrow (live GDP counter) | 12 | 14 | 0.86 |
| hero headline h1 (2-tone, weight 300) | 34 / lh 35 (1.03) / 300 / −0.34px | 44 / lh 50.6 (1.15) / 300 / −0.88px | 0.77 |
| headline width (% vw) | 92% | 69% | — |
| body | 16 / 22.4 / 300 | 16 / 22.4 / 300 | 1.0 |
| primary CTA "Comece já" | h 44, fs 16, pad 14/24, r 4, **w 358 (100% of content)** | h 48, fs 16, r 4, w 136 | h 0.92 |
| secondary CTA (Google sign-up, outline) | h 44, full width, stacked 8 below | h 48, inline | — |
| CTA full width? | **yes** (both, stacked) | no | — |
| side margin | 16 | 104 | — |
| heading gap (median) | 104 (only one h2 ≥ 24) | 192 | ≈0.54 |
| hero % of first viewport | 62% (519 px) | 76% | — |
| text vs image | text 289 px (34% vh); the decorative gradient ribbon is behind the text, not a separate image band | text 400 px | — |
| bento card | 358 wide, text inset 16, title 20/300 | 400–816 wide, inset 24, title 26/300 | inset 0.67, title 0.77 |
| distinct font sizes in first viewport (content) | 5 (34, 22, 20, 16, 12) | 4 (44, 32, 16, 14) | — |

### 2.2 Linear (https://linear.app/)

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav | 65 (Sign up pill h 32, fs 13) | 73 (same pill) | — |
| hero headline h1 | 38 / lh 41.8 (1.1) / 510 / −0.836px | 64 / lh 64 (1.0) / 510 / −1.408px | 0.59 |
| headline width (% vw, visible lines) | 66% | 53% | — |
| sub-copy | 15 / 24 | 15 / 24 | 1.0 |
| body | 15 / 24 | 15 / 24 | 1.0 |
| hero CTA | none (text link "New · Loops →" 13–16) | same | — |
| later CTAs ("Get started", "Contact sales") | h 44, fs 16/510, pill, auto width | h 44 | 1.0 |
| side margin | 24 | 78 | — |
| section padding | — | 128 | — |
| heading gap (median) | 127 | 270 | 0.47 |
| hero % of first viewport | text 166–480 (≈37% vh), product screenshot starts at ≈58% vh | text ≈30%, screenshot from 55% | — |
| distinct font sizes in first viewport | 3 marketing sizes (38, 15, 13); the product screenshot adds 4 UI sizes | 3 (64, 15, 13), plus UI | — |

### 2.3 Vercel (https://vercel.com/)

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav | 64 | 64 | 1.0 |
| hero headline h1 "Agentic Infrastructure" | 48 / lh 56 (1.17) / 400 / −2.88px (−6%) | 64 / lh 64 / 400 / −3.84px (−6%) | 0.75 |
| headline width (% vw) | 88% (centred) | 31% (left column) | — |
| sub (mono) | 16 / 24 | 16 / 24 | 1.0 |
| CTAs "Deploy now" (light) + "Talk to sales" (dark outline) | h 40, fs 16/500, pill, **w 342 (full width), stacked, gap 12** | h 40, auto width 124 / 130, inline | 1.0 |
| CTA full width? | **yes** | no | — |
| side margin | 24 | 24 (full-bleed grid) | 1.0 |
| heading gap (median) | 160 | 231 | 0.69 |
| hero % of first viewport | ≈85% (logo art 400 px = 47% vh at the top; text and CTAs below) | 81% (art in the centre, text on the left) | — |
| distinct font sizes in first viewport | 2 (48, 16) | 3 (64, 16, 14) | — |

### 2.4 Nike (https://www.nike.com/, geo-redirected to /pt/)

| metric | phone | desktop | ratio |
|---|---|---|---|
| nav | 60 | 60 (+36 utility bar) | — |
| hero headline (h3, display, condensed caps) | 40 / lh 50 / 500 | 48 / lh 60 / 500 | 0.83 |
| headline width (% vw) | 88% | 60% | — |
| sub-copy | 16 / 24 | 20 / 30 | 0.80 |
| CTAs "Comprar" / "Saber mais" (white pills) | h 36, fs 16/500, pad 6/16, r 30, w 97 / 116 | identical | 1.0 |
| CTA full width? | no | no | — |
| side margin (text inset) | 24 | 48 | 0.50 |
| heading gap (median) | 84 | 84 | 1.0 |
| hero % of first viewport | 69% (full-bleed photo 390×585 = 2:3) | 78% (1440×700) | — |
| text block over photo | 166 px (20% vh), bottom-left | 158 px (18% vh) | — |
| image cards | 390×584 full bleed, text inset 24, title 24/500 | 666×666, inset 48, title 24 | title 1.0 |
| distinct font sizes in first viewport | 2 (40, 16) | 3 (48, 20, 16) | — |

### 2.5 Airbnb (https://www.airbnb.com/, geo-redirected to airbnb.pt): partial
This is an app-style product UI with no marketing hero. Desktop listings **did not render** headlessly (only the "inspiration" links and the footer loaded), and a cookie modal covered both screenshots. Only the phone metrics below are reliable.

| metric (phone) | value |
|---|---|
| search pill | 342×56, radius 40, fs 14/500 |
| category chips | h 40, fs 14, pad 10/14, radius 40 |
| section title ("Alojamento em Coimbra") | 18 / 24 / 600 (desktop section title 22/500) |
| listing card image | 165×157 (2-up horizontal scroller, 12 gap), radius 20 |
| side margin | 24 |
| bottom tab bar (visible) | ≈65 |

---

## 3. Cross-site summary
Pages: 7 Apple and 4 non-Apple (Airbnb is excluded from the hero, CTA and gap stats). The median is over all 11 pages unless a row says otherwise.

| metric | phone median (range) | desktop median (range) | phone/desktop median (range) | notes |
|---|---|---|---|---|
| hero headline size | **40** (32–48) | **64** (44–88) | **0.59** (0.45–0.83) | Apple only: 40 (32–48) vs 80 (56–88), ratio **0.50** (0.45–0.60). Non-Apple: 39 (34–48) vs 56 (44–64), ratio 0.76 (0.59–0.83). Phone sizes cluster in a narrow 32–48 band whatever the desktop size. |
| hero headline line-height | 1.10 (0.85–1.25) | 1.05 (0.91–1.15) | — | Apple tokens: 1.10 at 40, 1.125 at 32, 1.083 at 48 |
| hero headline tracking | ≈0 (Apple) to −2% | −1.5% (Apple) to −6% (Vercel) | — | Apple loosens tracking at small sizes (−0.015em → 0) |
| eyebrow / sub-copy | 17–24 eyebrow, 14–19 sub | 24–32, 17–28 | 0.68–0.75 | Apple ratios: eyebrow 0.75, subhead 0.68 |
| body (main reading copy) | **16** (14–19) | 17 (15–21) | **1.0** (0.82–1.0) | Non-Apple keeps body identical. Apple reading copy is 17 (Music) or 19/600 (product story); card and secondary copy drops 17 → 14 |
| CTA height (hero) | **36** (36–44) | **44** (36–56) | **0.82** (0.79–1.0) | Apple: 36 on phone for standard CTAs, 44 for the single hero CTA on the Music page. Non-Apple: 36–44, ratio 0.92–1.0 |
| CTA font size | **14** (14–17); non-Apple 16 | 17 (14–17); non-Apple 16 | 0.82 Apple / 1.0 others | |
| CTA radius | pill (980 / 9999) on 9 of 10 sites; Stripe 4 | same | 1.0 | radius never scales |
| CTA full width on phone | **no on 8/10** (all Apple, Nike, Linear); **yes on Stripe and Vercel** | no on all | — | full-width CTAs are stacked with a 8–12 gap |
| side margin | **24** (16–30) | 90 (24–230) | — | Apple's phone content is 87.5% of vw (= 24.4 at 390); the Store uses 22 and Stripe 16 |
| section heading gap | **144** (51–252) | **231** (67–349) | **0.75** (0.47–1.06) | Apple section-padding tokens: 112 vs 144 (0.78), or 96 vs 160 (0.60) |
| hero block % of first viewport | **69%** (33–100) | 78% (37–100) | — | product and media heroes 59–100%; text/header heroes 33–62% |
| hero text block % of vh | 20% (9–46) | 16% (11–44) | — | where the hero has imagery, the image takes ≥50% of the first phone viewport (home 59, AirPods 66, Nike 69, AirPods Pro 95) |
| distinct font sizes in first viewport | **3** (2–5) | 4 (3–5) | — | the store, being app-like, has 5 |
| nav height | 48 (Apple), 60–66 others | 44 (Apple), 60–76 | ≈1.0–1.09 | Apple's phone nav is taller than its desktop nav |
| card padding / text inset | 28 (16–32) | 40 (24–48) | **0.70** (0.50–1.0) | Apple router 32/48, Music 28/40, Store 28/28, Stripe 16/24, Nike 24/48 |
| card radius | 18 or 28 (Apple), 20 (Airbnb) | same | **1.0** | radius is constant across widths |
| card title | 21–24 (Apple product/feature cards 21) | 28 | 0.75–0.86 | Apple: card title tokens 28 → 21 (0.75) |

---

## 4. Apple type tokens per breakpoint (from the stylesheets)
Source: 17 CSS files fetched 2026-10-26 from apple.com (home, /iphone/, /iphone-18-pro/, /airpods/, /airpods-pro/, /apple-music/ and global header/footer). 212 `.typography-*` classes were parsed (raw: `apple_tokens_raw.json`, parser: `parsecss.py`).

Breakpoints: base = >1068 px, `@media (max-width:1068px)` = M, `@media (max-width:734px)` = S (phone). One modal token also has 480. A token without an S rule inherits M. Live measurements matched these values on every page (for example `tile-headline` measured 32 at 390 and 56 at 1440).

### 4.1 Key tokens

| token | L (>1068) | M (735–1068) | S (≤734) | S/L | weight | line-height L→S (px) | tracking L → S |
|---|---|---|---|---|---|---|---|
| `headline-standalone` | 96 | 80 | 48 | 0.5 | 600 | 100 → 52 | -0.015em → -0.003em |
| `headline-super` | 80 | 64 | 48 | 0.6 | 600 | 84 → 52 | -0.015em → -0.003em |
| `hero-headline` | 80 | 48 | 40 | 0.5 | 600 | 84 → 44 | -0.015em → 0em |
| `marquee-headline-elevated` | 80 | 64 | 40 | 0.5 | 600 | 84 → 44 | -0.015em → 0em |
| `media-hero-headline-elevated` | 80 | 64 | 40 | 0.5 | 600 | 84 → 44 | -0.015em → 0em |
| `page-header-title` | 80 | 64 | 48 | 0.6 | 600 | 84 → 52 | -0.015em → -0.003em |
| `headline-elevated` | 64 | 48 | 40 | 0.62 | 600 | 68 → 44 | -0.009em → 0em |
| `marquee-headline-base` | 64 | 56 | 32 | 0.5 | 600 | 68 → 36 | -0.009em → .004em |
| `section-header-headline` | 56 | 48 | 28 | 0.5 | 600 | 60 → 32 | -0.005em → .007em |
| `tile-headline` | 56 | 48 | 32 | 0.57 | 600 | 60 → 36 | -.005em → .002em |
| `priority-router-card-headline` | 56 | 48 | 32 | 0.57 | 600 | 60 → 36 | -0.005em → .004em |
| `card-title` | 56 | 48 | 32 | 0.57 | 600 | 60 → 40 | -0.005em → .004em |
| `headline` | 48 | 40 | 32 | 0.67 | 600 | 52 → 36 | -0.003em → .004em |
| `headline-reduced` | 40 | 32 | 28 | 0.7 | 600 | 44 → 32 | 0em → .007em |
| `eyebrow-super` | 32 | 28 | 24 | 0.75 | 600 | 36 → 28 | .004em → .009em |
| `callout` | 32 | 28 | 24 | 0.75 | 600 | 36 → 28 | .002em → .009em |
| `marquee-eyebrow-base` | 28 | 24 | 21 | 0.75 | 600 | 32 → 25 | .007em → .011em |
| `tile-subhead` | 28 | 24 | 19 | 0.68 | 400 | 32 → 23 | .007em → .012em |
| `priority-router-card-body` | 28 | 24 | 19 | 0.68 | 400 | 32 → 23 | .007em → .012em |
| `product-tile-headline` | 28 | 24 | 21 | 0.75 | 600 | 32 → 25 | .007em → .011em |
| `feature-card-headline` | 28 | 24 | 21 | 0.75 | 600 | 32 → 25 | .007em → .011em |
| `hero-intro` | 24 | 21 | 17 | 0.71 | 600 | 28 → 21 | .009em → -0.022em |
| `intro` | 21 | 21 | 19 | 0.9 | 400 | 29 → 27 | .011em → .012em |
| `cta` | 21 | 17 | 17 | 0.81 | 400 | 29 → 21 | .011em → -0.022em |
| `body-elevated` | 21 | 17 | 17 | 0.81 | 600 | 25 → 21 | 0em → -0.022em |
| `tile-callout` | 19 | 17 | 14 | 0.74 | 400 | 23 → 18 | .012em → -.016em |
| `body` | 17 | 17 | 17 | 1.0 | 400 | 25 → 25 | -0.022em → -0.022em |
| `image-accordion-paragraph-text` | 17 | 17 | 14 | 0.82 | 400 | 25 → 20 | -0.022em → -0.016em |
| `section-header-link` | 17 | 17 | 14 | 0.82 | 400 | 25 → 20 | -0.022em → -0.016em |
| `product-tile-ctas` | 17 | 17 | 14 | 0.82 | 400 | 20 → 18 | -0.022em → -0.016em |
| `caption` | 12 | 12 | 12 | 1.0 | 400 | 16 → 16 | -0.01em → -0.01em |
| `hero-tile-headline` (outlier) | 120 | 100 | 48 | 0.4 | 600 / 700 at S | 96 → 48 | — |
| `hero-max-headline` (outlier) | 207 | 207 | 40 | 0.19 | 600 | 190 → 44 | — |

### 4.2 Scale behaviour across all 212 tokens (phone ÷ desktop by desktop size)

| desktop size bucket | n tokens | phone size median (range) | S/L median (range) |
|---|---|---|---|
| ≥96 | 4 | 44 (40–48) | 0.41 (0.19–0.50) |
| 64–88 | 13 | 40 (32–48) | 0.50 (0.50–0.62) |
| 48–56 | 19 | 32 (28–48) | 0.57 (0.50–1.00) |
| 32–40 | 13 | 24 (21–42) | 0.75 (0.60–1.00) |
| 24–28 | 32 | 21 (17–28) | 0.75 (0.61–1.00) |
| 19–21 | 54 | 17 (14–21) | 0.81 (0.67–1.00) |
| 17 | 45 | 14 (12–17) | 0.82 (0.71–1.00) |
| ≤14 | 32 | 12 (12–14) | 1.00 (0.86–1.00) |

- Apple's phone scale uses only **48 / 40 / 32 / 28 / 24 / 21 / 19 / 17 / 14 / 12**. No phone token is above 48.
- The most common phone size is 14 (54 tokens); the most common desktop size is 17 (45 tokens).
- Weights: 600 for every headline, eyebrow and callout; 400 for body, sub-copy and CTA text.

### 4.3 Apple button sizes (SK button custom properties, fetched CSS)

| class | padding v/h | font | resulting height | min-width basis | used where |
|---|---|---|---|---|---|
| `.button-reduced` | 4 / 11 | 12 | 24 | 45 | store card "Buy", local-nav "Try it free" |
| `.button` (default) | 9 / 16 | 14 | **36** | — | all phone hero CTAs; AirPods hero at desktop |
| `.button-elevated` | 12 / 22 | 17 | **44** | 70 | desktop hero CTAs; Apple Music phone hero |
| `.button-super` | 18 / 31 | 17 | **56** | 90 | Apple Music desktop hero |
| `.button-block` (modifier) | full width, radius 8 (10 elevated, 12 super, 5 reduced) | | | | defined in CSS but not used on any measured marketing hero |

Default radius is 980px (a pill).

Layout variables:
- `--global-section-padding`: 144 / 120 / 112 (L/M/S) on iPhone pages, 160 / 128 / 96 on AirPods Pro.
- `--global-section-padding-top-reduced`: 120 / 80 / 56.
- `.viewport-content` width: 87.5% at ≤734, 692 at ≤1068, 980 (older) or 1260 (`--global-content-max-width`) at L. `--global-content-max-width` is 420 at ≤734 and 1680 for heroes above 1441.

---

## 5. Observations (observation, measured 2026-10-26; URL given for each)

1. **The phone display size is a near-fixed band, not a percentage.** Apple's phone hero headlines are 40 (hero-, marquee- and media-hero-elevated), 48 (page header, store h1) or 32 (tile, marquee-base). The desktop size is 56–88 for the same elements. Ratios fall between 0.45 and 0.60, and the phone value never exceeds 48. Non-Apple sites fall in 34–48 on phone. (apple.com, /iphone/, /iphone-18-pro/, /airpods/, /airpods-pro/, /shop/buy-iphone, /apple-music/; stripe.com, linear.app, vercel.com, nike.com)
2. **The bigger the desktop size, the more it shrinks.** In Apple's token set, ≥64 px shrinks to about 0.5, 48–56 to about 0.57, 24–40 to 0.75, 17–21 to about 0.82, and 12–14 stays at 1.0. Small text barely changes; display text halves. (apple.com CSS, §4.2)
3. **Apple phone CTAs stay small pills: 36 px tall, 14 px text, pad 9/16, never full width.** Two CTAs sit side by side, centred or under the copy, about 104 and 60–110 px wide. At desktop they grow to 44/17 (ratio 0.82). The one exception is Apple Music's single hero CTA, which is 44 on phone and 56 on desktop. No measured Apple hero uses `.button-block`. (apple.com, /iphone/, /iphone-18-pro/, /airpods-pro/, /apple-music/)
4. **Non-Apple CTAs keep the same height on phone (36–44, ratio 0.92–1.0).** The developer and SaaS sites (Stripe, Vercel) switch to **full-width stacked** buttons on phone: 44 and 40 tall, 8–12 gap. Nike keeps 36 px pills that hug their content. No site makes a phone CTA taller than its desktop CTA, and none goes above 44 on phone. (stripe.com/pt-pt, vercel.com, nike.com/pt)
5. **Body copy does not shrink on non-Apple sites** (15–16 on both widths). Apple keeps 17 for primary reading copy (`typography-body`, Apple Music paragraphs) but moves secondary and card copy from 17 to 14. Large marketing copy goes from 21/600 to 19/600. (apple.com CSS; /apple-music/, /iphone-18-pro/)
6. **Side margin on phone is 24 px almost everywhere** (Apple 24.4 = 87.5% content width, Linear, Vercel, Nike, Airbnb). Exceptions are Apple Store 22 and Stripe 16. Desktop margins vary widely (24–230) because they come from a max-width container, not a gutter. (all)
7. **Vertical rhythm shrinks less than type.** Section gaps are about 0.75× desktop (Apple padding tokens 112 vs 144, 96 vs 160). The phone median gap above a section heading is about 144 px (range 51–252), which is still 3–4× the phone headline size. (all; data/gaps.txt)
8. **Heroes take a larger share of the phone viewport, but the text inside them gets smaller.** Hero blocks with imagery fill 59–100% of the first phone viewport (Apple home tile 59%, AirPods tile 66%, Nike 69%, AirPods Pro 95%). The text block is only 13–28% of vh, with the image taking the rest. Header-style heroes (iPhone page header, store h1) take 33–42%. (apple.com, /airpods/, /airpods-pro/, nike.com/pt, /iphone/, /shop/buy-iphone)
9. **Phone layouts re-flow; they do not just shrink.** iPhone 18 Pro moves the headline from bottom-left on desktop to top-centre on phone, and the price/Buy pill moves into a full-width bottom bar. The Apple home tiles keep text at the top-centre with the product image below. Desktop two-column heroes (Vercel, Apple /iphone/ cards) stack to a centred single column. (/iphone-18-pro/, apple.com, vercel.com, /iphone/)
10. **Few sizes per first viewport: median 3 on phone vs 4 on desktop** (range 2–5). Typically these are one display size, one sub/eyebrow size and one 14–17 CTA or caption size. Only the app-like store reaches 5. (all)
11. **Radii do not scale.** Apple cards are 28 (router cards, upgrade card) or 18 (tiles, Music cards) at both widths. Buttons are always pills. Airbnb's phone cards use 20. (/iphone/, /airpods/, /apple-music/, airbnb.pt)
12. **Card padding scales about 0.7×:** Apple router 32 vs 48, Music 28 vs 40, Stripe 16 vs 24, Nike 24 vs 48. The Apple Store keeps 28 at both widths. Card titles go from 28 to 21 (Apple tokens, 0.75). (/iphone/, /apple-music/, /shop/buy-iphone, stripe.com/pt-pt, nike.com/pt)
13. **Apple's phone nav is 48 px vs 44 on desktop**: the bar gets taller for touch. Other sites use 60–66 on phone. (all)
14. **Line-height tightens as size grows.** Apple uses about 1.08–1.125 for 32–48 phone headlines and about 1.05 for 80 on desktop, 1.47 for 17 body (25 px) and 1.43 for 14 body (20 px). Tracking goes from −0.015em at 80 to about 0 at 40 on phone. (apple.com CSS)

---

## 6. Method and caveats
- **Date and state:** measured 2026-10-26, logged out, fresh headless profile, network located in **Portugal**.
  - Stripe redirected to `/pt-pt` and Nike to `/pt/`; Airbnb redirected to airbnb.pt. Copy is in Portuguese there, so line counts and headline widths would differ in English.
  - Apple showed a PT locale switcher banner, which was dismissed by clicking its close button before measuring; Apple content is the US English site.
  - Content is from late October 2026: the iPad mini launch tile, iPhone Duo / 18 Pro, AirPods 5 and AirPods Pro 3. These pages rotate weekly and may be A/B tested.
- **Device emulation:** iPhone 14 preset (390×844, DPR 3, iOS 16 UA) on Chromium, not real Safari. `maxTouchPoints` reported 0, so any touch-only branches did not run. Desktop is 1440×900 at DPR 1.
- **What "hero headline" means here:**
  - It is the largest visible text in the first viewport outside the nav, cross-checked by eye on screenshots.
  - On the Apple home page the hero headline is a logo image, so its height (41/66) is reported and the tile-headline token from the next tile is used as the text equivalent.
  - On product pages the eyebrow is the `h1` and the large line is a `p`. Both are reported.
- **Section gap:**
  - The "heading gap" is computed. It ignores colour-band changes, so a section that changes background with little padding can read as a smaller gap than it looks.
  - Apple section padding is also reported from the CSS tokens.
  - Stripe and Linear wrap section padding in nested containers, so `section` padding read 0; use the heading gap for them.
- **Cookie and consent banners:** Airbnb's Portuguese cookie modal was not auto-dismissed. It covers the screenshots but not the measured elements. Airbnb desktop listings did not render headlessly, so desktop Airbnb is excluded from the stats.
- **Vercel and Linear:** hero text sits inside `<header>` and `<nav>`-adjacent wrappers that the generic script excluded. Their headline and CTA values come from a targeted second query (h1 and named CTAs), checked against screenshots.
- **CSS tokens:** they come from Apple's built CSS for the 6 pages listed and can differ on other Apple pages (each page ships its own `overview.built.css`). M values are the 735–1068 tier, which was not measured live.
- **Files in the repo:** `web/measure.js`, `web/gap.js`, `web/parsecss.py` (scripts) and `web/tokens_table.md` (Apple token table). Screenshots, raw JSON, and Apple's stylesheets stayed in the research scratchpad and are not committed.
