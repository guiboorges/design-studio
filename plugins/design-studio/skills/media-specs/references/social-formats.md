# Social Formats: Sizes, Safe Zones, Limits, Export

> **Scope:** Image and video specs for Instagram, TikTok, YouTube, Facebook, LinkedIn, X, Pinterest, and Snapchat, plus cross-platform production rules: masters, safe zones, legibility on phones, thumbnails, and export settings.
> **Last verified:** 2026-10 (all rows checked 2026-10; official Instagram, Facebook, Google Ads, and TikTok Ads pages re-checked 2026-10-15 via a JavaScript-rendering fetch; the Instagram grid-tile ratio and organic Reels length still rest on a news report dated 2025-01-18)
> **Used by:** social-media-designer, creative-director, art-director, ui-designer, design-critic, editorial-designer

**Read this first.** Social specs change several times a year and differ between organic posts and ads. Many platforms publish exact numbers **only for ads** (Meta Ads Guide, TikTok Ads, Google Ads, LinkedIn Marketing Solutions); organic help pages are often thinner or render client-side and could not be opened. Each row says whether the value is ad, organic, official, or secondary, and when it was checked. Re-check in the platform's composer or ad preview before a high-stakes launch.

Related files:
- sibling: `digital-platforms.md` (Open Graph link images, favicons, app icons, email)
- `typography` → `legibility-by-medium.md` (type size for screens)
- `color` → `color-spaces-and-management.md` (sRGB vs P3, Rec. 709)
- `accessibility` → `motion-media-and-forms.md` (captions, flashing, autoplay)
- `cognitive-psychology` → `attention-and-scanning.md` (where eyes land)

---

## 1. Master table (quick reference)

| Platform | Format | Size to export | Ratio | Key limit | Safe zone (on 1080×1920 unless noted) | Status |
|----------|--------|----------------|-------|-----------|----------------------------------------|--------|
| Instagram | Feed photo / carousel | 1080×1440 (3:4) organic; 1080×1350 (4:5) also fine; ads recommend 1440×1800 | 1.91:1 to 3:4 (organic photos) | 30 MB (ads); carousel up to 20 items | Keep key content inside the central 3:4 for the profile grid | Organic official [24][26]; ads official [1]; grid tile secondary [6] |
| Instagram | Reels | 1080×1920 (ads: 1440×2560); cover 420×654 | 9:16 (uploads 1.91:1 to 9:16); ≥ 30 fps, ≥ 720 px | 4 GB, up to 15 min (ads); 3 min organic (2025) | Top 14%, bottom 35%, sides 6% | Official [2][25]; organic length secondary [6] |
| Instagram | Stories | 1080×1920 (ads: 1440×2560) | 9:16 | 4 GB; cards split at 16 s (ads) | Top 14%, bottom 35%, sides 6% | Official ads [3] |
| TikTok | In-feed video | 1080×1920 | 9:16 (also 1:1, 16:9) | ≤ 500 MB; ≤ 10 min auction ads; 5–60 s reservation ads | Varies with caption length (official templates); approx. top 240, bottom 660, sides 120 px | Ads official [7][28]; px values via secondary [8] |
| YouTube | Long-form video | 1920×1080 / 3840×2160 | 16:9 | 256 GB or 12 h; 15 min until verified | Player UI overlays bottom | Official [11][13] |
| YouTube | Shorts | 1080×1920 | 9:16 or 1:1 | ≤ 3 min (uploads after 2024-10-15) | Top 288, bottom 672, left 48, right 192 px (ads) | Official [12][27] |
| YouTube | Thumbnail | 3840×2160 recommended (min width 640) | 16:9 (Shorts 9:16) | 2 MB mobile / 50 MB desktop | Bottom-right timestamp | Official [9] |
| YouTube | Channel banner | 2048×1152 minimum | 16:9 | 6 MB | 1235×338 centered | Official [10] |
| Facebook | Feed image | 1440×1800 | 4:5 | 30 MB | — | Official ads [4] |
| Facebook | Stories | 1440×2560 | 9:16 | 4 GB, up to 3 min | Top 14% (~250 px), bottom 20% (~340 px) | Official ads [5] |
| LinkedIn | Single image | 1200×628 / 1200×1200 / 720×900 | 1.91:1, 1:1, 4:5 | 5 MB (ads) | — | Official ads [16] |
| LinkedIn | Video | up to 1080×1920 / 1920×1080 | 9:16 to 16:9 | 500 MB, 3 s–30 min (ads) | — | Official ads [17] |
| LinkedIn | Document (PDF carousel) | e.g. 1080×1350 page | any, one size | 100 MB, ≤ 300 pages | — | Official ads [18] |
| LinkedIn | Company cover | 1512×256 | ~5.9:1 | 3 MB | — | Official [15] |
| X | In-stream video | 1280×720 / 720×1280 / 720×720 recommended | 1:3 to 3:1 | 8 GB / 20 min (Premium 16 GB / 125 min) | — | Official API docs [20] |
| X | Image | 1200×675 (16:9) common | — | 5 MB | — | Official API docs [20]; size secondary [21] |
| X | Header | 1500×500 | 3:1 | [unverified] | Mobile crops edges | Secondary [21] |
| Pinterest | Standard Pin | 1000×1500 | 2:3 | 20 MB desktop / 32 MB app | Taller than 2:3 may be cut | Official [22] |
| Snapchat | Single image/video, Story, Collection, Commercials | 1080×1920 | 9:16 | — | Top 10%, bottom 35%, sides 6%; right 15% clear in the bottom 45% | Official Snap safe-zone graphic [31] |

---

## 2. Instagram

| Format | Dimensions | Aspect ratio | Max file size | Length limits | Safe zone | Source, verified |
|--------|-----------|--------------|---------------|---------------|-----------|------------------|
| Feed image (ads) | 1440×1800 recommended; min width 500 px | 4:5; allowed range 4:5 to 1.91:1 (1% tolerance) | 30 MB | — | Not specified | Meta Ads Guide [1], 2026-10 |
| Feed / carousel (organic) | Uploaded at up to 1080 px wide; widths 320–1080 kept as is; larger images downscaled to 1080 | 1.91:1 to 3:4 (1080×566 to 1080×1440); other ratios are cropped | [unverified] | Carousel: up to 20 photos and videos | Grid crop: see below | Instagram Help [24][26], 2026-10 |
| Reels (ads) | 1440×2560 recommended; min width 250 px (< 30 s) or 500 px (≥ 30 s) | 9:16 | 4 GB | 0 s to 15 min | Keep 14% top, 35% bottom, 6% each side free of text, logos, key elements | Meta Ads Guide [2], 2026-10 |
| Reels (organic) | 1080×1920; minimum 720 px; ≥ 30 fps; cover photo 420×654 (1:1.55), PNG or JPG, not editable after upload | 1.91:1 to 9:16 | [unverified] | Up to 3 min (raised from 90 s in Jan 2025); later reports of longer uploads are [unverified]. Boosting requires ≤ 90 s, 9:16 | Same as ads | Instagram Help [25], 2026-10; length: Engadget [6] |
| Stories (ads) | 1440×2560; min width 250 px | 9:16 (1% tolerance) | 4 GB | 1 s to 60 min; videos ≥ 16 s may split into cards | 14% top, 35% bottom, 6% sides | Meta Ads Guide [3], 2026-10 |

**Profile grid (2025 change).** In January 2025 Instagram replaced the square profile grid with a rectangular one, because most uploads are vertical [6]. Third-party guides report the grid tile as 3:4. Instagram's help pages confirm that organic photos can now be as tall as 3:4 (1080×1440) [24], which fits that report, but no official page states the grid-tile ratio. [grid tile 3:4: secondary]

**Procedure for grid-safe feed posts:**
1. Export organic posts at 1080×1440 (3:4), the tallest ratio Instagram keeps uncropped for photos [24]; it fills the most feed space and matches the reported grid tile. Use 1080×1350 (4:5) when the same file also runs as a Meta ad or on Facebook.
2. If you export 4:5, keep faces, product, and headline inside the central 1012×1350 area (the 3:4 crop of a 4:5 frame; trim about 34 px each side). Centered content survives any future tighter crop.
3. Check the grid view in the app before publishing a series designed to tile.

**Carousels.** Up to 20 photos and videos per post [26]. All slides in one carousel share one orientation [unverified, secondary]. Design every slide at the same 1080×1350 master, put a visual "continue" cue on the right edge of slide 1, and keep slide-to-slide continuations away from the outer 6%.

---

## 3. TikTok

| Format | Dimensions | Aspect ratio | Max file size | Length limits | Safe zone | Source, verified |
|--------|-----------|--------------|---------------|---------------|-----------|------------------|
| In-feed ad (non-Spark) | Minimum 540×960 (9:16), 960×540 (16:9), 640×640 (1:1); export 1080×1920 | 9:16 recommended | ≤ 500 MB | ≤ 10 min | TikTok provides downloadable overlay files, not printed numbers | TikTok Ads Help, updated June 2026 [7] |
| Spark Ads (boosted organic) | .mp4/.mov | — | — | No duration restriction | Same overlays | [7] |
| Reservation in-feed ad (non-Spark) | Minimum 540×960 (9:16) | 9:16 recommended | ≤ 500 MB; bitrate ≥ 2,500 kbps | 5–60 s, 9–15 s recommended | Official templates; zone shrinks as the caption gets longer | TikTok Ads Help, updated July 2025 [28] |
| Organic video | 1080×1920 | 9:16 | [unverified] | Reported up to 10 min recorded in-app and up to 60 min uploaded (rolling out by account) | Same overlays | [unverified, secondary only] |
| Photo Mode | 1080×1920 or 1080×1350 | 9:16 or 4:5 | [unverified] | Reported up to 35 photos. TikTok Support confirms up to 35 items (photos and videos) per editing session in its in-app editor [30]; it does not state the per-post limit directly | Same overlays | [30], 2026-10; otherwise secondary |

- Formats accepted for ads: .mp4, .mov, .mpeg, .3gp, .avi; minimum bitrate 516 kbps [7].
- **Safe zone values (secondary, derived from TikTok's own template):** on 1080×1920, keep about 240 px top (12.5%), 660 px bottom (34.4%), 120 px left and right (11.1%), plus a 180 px wide button column on the right starting 840 px down. Socialync scaled these from TikTok's 720×1280 in-feed template; the button-column width is their measurement, not TikTok's published value [8]. TikTok's official position is that the safe zone "is determined by the dimension (vertical, horizontal or square), the ad caption length and any interactive add-on usage; the longer the caption, the smaller the safe zone will be," and it publishes downloadable LTR and RTL template files instead of numbers [28]. Use the template files for paid work.

---

## 4. YouTube

| Format | Dimensions | Aspect ratio | Max file size | Length limits | Safe zone | Source, verified |
|--------|-----------|--------------|---------------|---------------|-----------|------------------|
| Video | 1920×1080 or 3840×2160 (8K accepted) | 16:9 standard; vertical and square accepted, player adapts | 256 GB | 12 h; 15 min until the account is verified | Avoid the bottom ~15% for key text (player controls) [practice] | [11][13], 2026-10 |
| Shorts | 1080×1920 | Square or vertical; wider = long-form | — | Up to 3 min for uploads after 2024-10-15 | Ads: top 288, bottom 672, left 48, right 192 px | [12]; safe zone from Google's official 1080×1920 overlay [27], 2026-10 |
| Thumbnail (video) | Recommended 3840×2160; min width 640 px | 16:9 | 2 MB on mobile (10 MB podcasts), 50 MB on desktop | — | Timestamp overlays bottom-right | [9], 2026-10 |
| Thumbnail (Shorts) | Recommended 2160×3840; min height 640 px | 9:16 | Desktop Studio only | — | — | [9] |
| Channel banner | Minimum 2048×1152 | 16:9 | 6 MB | — | Text/logo safe area 1235×338 (at minimum size) | [10], 2026-10 |
| Profile picture | Renders at 98×98 | 1:1, shown as circle | 15 MB | — | Centered | [10] |
| Video watermark | Min 150×150 | 1:1 | < 1 MB | — | — | [10] |

- **Thumbnail spec change:** many guides still say 1280×720 / 2 MB. The current help page recommends 3840×2160 and allows 50 MB on desktop [9]. Export 3840×2160 when uploading from desktop; a 1280×720 JPEG under 2 MB remains the safe choice for mobile uploads.
- **Banner math:** older guides give 2560×1440 with a 1546×423 safe area. That is the same proportion as the official 2048×1152 / 1235×338 (both ≈ 60.3% × 29.3%) [10]. Design at 2560×1440 if you like; keep text inside the centered 1546×423.
- **Shorts music and claims:** Shorts over 1 minute with an active Content ID claim are blocked globally; most licensed songs can run up to 90 s in a 3-min Short, some only 60 or 30 s [12].
- Custom thumbnails require a verified account [9].

---

## 5. Facebook

| Format | Dimensions | Aspect ratio | Max file size | Length limits | Safe zone | Source, verified |
|--------|-----------|--------------|---------------|---------------|-----------|------------------|
| Feed image (ads) | 1440×1800 recommended; min 600×750 | 4:5 (3% tolerance) | 30 MB | — | — | Meta Ads Guide [4], 2026-10 |
| Stories video (ads) | 1440×2560; min width 250 px | 9:16 (1% tolerance) | 4 GB | 1 s to 3 min; > 15 s splits into cards | ~14% (250 px) top, ~20% (340 px) bottom | Meta Ads Guide [5], 2026-10 |
| Reels (ads) | 1440×2560 | 9:16 | — | — | Use the Instagram Reels zone (14/35/6%) as the conservative default | Facebook Reels ads page returned 404 this pass [unverified] |
| Link preview | 1200×630 | 1.91:1 | 8 MB | — | — | See `digital-platforms.md` §6.3 |
| Page cover photo | Minimum 400×150; loads fastest as an sRGB JPG 851×315 under 100 KB | Desktop: left-aligned, full bleed, 16:9 | 100 KB for fastest load | — | Displays differently on computers and phones; keep text central | Facebook Help [29], 2026-10 |
| Page profile picture | 320×320 for best quality; displays 176×176 (desktop), 196×196 (phone) | 1:1, cropped to a circle | — | — | Centered | Facebook Help [29], 2026-10 |

---

## 6. LinkedIn

| Format | Dimensions | Aspect ratio | Max file size | Length limits | Safe zone | Source, verified |
|--------|-----------|--------------|---------------|---------------|-----------|------------------|
| Single image (ads) | 1200×628; 1200×1200; 720×900 | 1.91:1 (rec.), 1:1, 4:5 (rec.) | 5 MB; JPG/PNG/GIF (≤ 250 frames) | — | — | LinkedIn Help [16], 2026-10 |
| Image upload (organic) | Up to 36 megapixels | — | 100 MB; GIF/JPEG/PNG/WEBP (HEIC on iOS) | GIF ≤ 500 frames | — | LinkedIn Help [19], 2026-10 |
| Video (ads) | 4:5 360×450–1080×1350; 9:16 360×640–1080×1920; 16:9 640×360–1920×1080; 1:1 360×360–1920×1920 | 9:16 to 16:9 (5% tolerance) | 75 KB–500 MB, MP4 | 3 s–30 min; 30 fps recommended | — | LinkedIn Marketing Solutions [17], 2026-10 |
| Document / PDF carousel (ads) | One consistent page size (Letter, A4, etc., or custom such as 1080×1350) | Vertical, horizontal, or square | 100 MB; PDF/DOC/DOCX/PPT/PPTX | ≤ 300 pages or 1M words; < 10 pages recommended | — | LinkedIn Marketing Solutions [18], 2026-10 |
| Company page logo | 400×400 recommended (268×268 min) | 1:1 | 3 MB, PNG/JPEG | — | — | LinkedIn Help [15], 2026-10 |
| Company page cover | 1512×256 (min and recommended) | ~5.9:1 | 3 MB, PNG/JPEG | — | Logo overlaps the lower-left on desktop [practice] | LinkedIn Help [15], 2026-10 |

- Document posts: flatten multi-layer PDFs and fit mixed page sizes to one size; animations display as static images [18].
- Older guides cite 1128×191 for the company cover; the current page says 1512×256 [15].

---

## 7. X (Twitter)

| Format | Dimensions | Aspect ratio | Max file size | Length limits | Safe zone | Source, verified |
|--------|-----------|--------------|---------------|---------------|-----------|------------------|
| Image in post | 1200×675 (16:9) common; 600×335 displayed | — | 5 MB | Up to 4 images per post [unverified] | Center crops on mobile | X API docs [20] (size limit); dimensions secondary [21] |
| Animated GIF | ≤ 1280×1080 recommended | — | 15 MB; ≤ 350 frames | — | — | X API docs [20] |
| Video | 1280×720, 720×1280, 720×720 recommended; between 32×32 and 1280×1024 for API upload | 1:3 to 3:1; 16:9 or 1:1 recommended | 8 GB (default), 16 GB (Premium) | 0.5 s–20 min default; up to 125 min Premium | — | X API docs [20], 2026-10 |
| Header | 1500×500 | 3:1 | [unverified] | — | Keep text central; mobile crops | Secondary [21] |
| Profile photo | 400×400 | 1:1, circle | 2 MB (secondary) | — | Centered | Secondary [21] |

- X help pages (help.x.com) returned HTTP 403 to direct fetches and HTTP 500 to a JavaScript-rendering fetch (2026-10-15); limits above come from X's developer documentation, which governs API uploads and generally mirrors the app. The API docs' 1280×1024 maximum applies to API uploads; app uploads accept 1080p and higher. [app limit unverified]

---

## 8. Pinterest

| Format | Dimensions | Aspect ratio | Max file size | Length limits | Safe zone | Source, verified |
|--------|-----------|--------------|---------------|---------------|-----------|------------------|
| Standard image Pin | 1000×1500 | 2:3 | 20 MB (desktop), 32 MB (app); PNG/JPEG | — | Pins taller than 2:3 "might get cut off" | Pinterest Help [22], 2026-10 |
| Video Pin | Not specified (export 1080×1920 or 1000×1500) | 1:1, 2:3, 4:5, 9:16 recommended; not wider than 1.91:1 or taller than 1:2 | 2 GB; MP4/MOV/M4V (H.264 or H.265) | 4 s–15 min; 6–15 s recommended (ads) | — | [22] |
| Carousel | — | 1:1 or 2:3 | 20 MB per image | 2–5 images (non-Sales) | — | [22] |
| Idea ads (successor format to Idea Pins) | 9:16 | 9:16 | 1 GB recommended, 2 GB max (apps) / 100 MB (web) | ≤ 5 min | — | [22] |

- Idea Pins as an organic format: the specs page covers only "Idea ads" and does not describe Idea Pins; treat the old Idea Pin format as discontinued/merged unless your account still shows it. [status unverified]

---

## 9. Snapchat, Threads, WhatsApp

| Platform | Format | Spec | Status |
|----------|--------|------|--------|
| Snapchat | Single image/video, Story, Collection (incl. Dynamic), Commercials | 1080×1920, 9:16. Safe zone: top 10% (192 px), bottom 35% (672 px), sides 6% (65 px), and the right 15% (162 px) kept clear across the bottom 45% (from y ≈ 1056), where the brand icon and action buttons sit. Snap advises keeping logos, taglines, disclaimers, and CTAs inside the zone and placing legal text well above the bottom buffer. Story ad tile images: 175 px top and 269 px bottom buffers; text only within a 300×128 px area | Official Snap Business Help [31][32], 2026-10-15. The older 150/330 px values in third-party guides [23] are superseded |
| Threads | Image/video | Up to 10 photos or videos per post ("Add from gallery") [33]. Pixel specs not published on the help page; design at 1080×1350 or 1080×1920 masters | Count official [33], 2026-10-15; dimensions [unverified] |
| WhatsApp Status | Image/video | Not verified this pass. Design at 1080×1920 with the vertical-video safe box below | [unverified] |

---

## 10. Cross-platform production rules

### 10.1 Masters

| Master | Size | Covers |
|--------|------|--------|
| Vertical video / story | 1080×1920 (9:16) | Reels, Stories, TikTok, Shorts, Snapchat, Pinterest video, LinkedIn/X vertical |
| Portrait feed | 1080×1350 (4:5); 1080×1440 (3:4) for organic Instagram | Instagram/Facebook feed and ads, LinkedIn 4:5, documents, Pinterest-safe crop; 3:4 is Instagram's tallest organic photo ratio [24] |
| Landscape | 1920×1080 (16:9) | YouTube, X, LinkedIn landscape video |
| Pin | 1000×1500 (2:3) | Pinterest |
| Hi-res ad variants | 1440×1800, 1440×2560 | Meta ads recommend these; downscale for organic |

**Procedure.** Build the 9:16 master first with all copy inside the universal safe box (below). Derive 4:5 by cropping 285 px off top and bottom (1920 − 1350 = 570), which removes the UI-heavy bands anyway. Derive 1:1 and 16:9 as recompositions, not crops.

### 10.2 Vertical-video safe zones per platform (1080×1920)

| Platform | Top | Bottom | Left | Right | Status |
|----------|-----|--------|------|-------|--------|
| Instagram Reels/Stories | 14% = 269 px | 35% = 672 px | 6% = 65 px | 6% = 65 px | Official, Meta ads [2][3] |
| Facebook Stories | ~14% (250 px) | ~20% (340 px) | not given | not given | Official, Meta ads [5] |
| TikTok | 240 px | 660 px | 120 px | 120 px + button column 180 px from y=840 | Secondary from TikTok template [8]; official zone varies with caption length [28] |
| YouTube Shorts | 288 px | 672 px | 48 px | 192 px | Official Google Ads overlay [27] |
| Snapchat | 10% = 192 px | 35% = 672 px | 6% = 65 px | 6% = 65 px; 15% = 162 px in the bottom 45% | Official Snap graphic [31] |
| **Universal safe box** | **288 px** | **672 px** | **120 px** | **192 px** | Union of the above |

The universal box is x 120–888, y 288–1248: a 768×960 area (4:5) in which text, logos, faces, and CTAs survive every listed platform. Backgrounds and motion still run full-bleed.

```css
/* Universal 9:16 safe box as percentages of a 1080×1920 frame */
.safe-box {
  position: absolute;
  top: 15%;        /* 288 / 1920 */
  bottom: 35%;     /* 672 / 1920 */
  left: 11.11%;    /* 120 / 1080 */
  right: 17.78%;   /* 192 / 1080 */
}
```

**Apply.** In Figma or After Effects, keep a locked guide layer with this box; check final frames against each platform's own overlay (TikTok template files, Meta and Google ad previews) before delivery.
**Limit.** Ad safe zones are the only published ones; organic UIs differ (longer captions push text higher). These numbers are a floor for safety, not a guarantee.

### 10.3 Text legibility on phones

There is no platform-published minimum for text inside social media. Derive one from the UI minimums in `digital-platforms.md` §3.1:
- A 1080 px wide frame is shown about 390 pt wide full-screen on a typical iPhone, so 1 pt ≈ 2.8 canvas px.
- iOS minimum text 11 pt [see `digital-platforms.md`] ≈ **30 px on canvas**; iOS body 17 pt ≈ **47 px**. Treat 48 px as the floor for any sentence a viewer must read, and 64–96 px for headlines.
- Feed posts are viewed smaller than full-screen, and grid tiles far smaller (a 3-column grid tile is about one-third of the width). Headlines that must read in the grid need roughly 3× the full-screen size, which usually means 6 words or fewer.
- Keep reading time in mind for video: hold on-screen text long enough to read it twice. [practice, E3]
- Use high contrast (4.5:1 for small text per WCAG; see `color` → `contrast-and-dark-mode.md`) and a scrim or outline on busy footage.

### 10.4 Captions

- Meta lists captions as optional but recommended for Reels and Stories ads [2][3]. Burned-in or platform captions also serve deaf and hard-of-hearing viewers and anyone watching muted (see `accessibility` → `motion-media-and-forms.md`) [E2].
- No sourced statistic on the share of muted viewing was verified in this pass; do not quote "85% watch without sound" style figures without a current primary source. [E3 if quoted]
- Place burned-in captions inside the universal safe box (upper part of the bottom band is not safe; aim for y ≈ 1000–1240 on 1080×1920).

### 10.5 Thumbnail and cover design rules

1. Design at the platform's full spec (YouTube 3840×2160 or 1280×720) and preview at 168×94 px, roughly a phone list thumbnail. If it does not read there, simplify.
2. One focal subject, one idea, three to five words at most. [practice, E2]
3. Leave the bottom-right corner free on YouTube (duration badge) and the bottom band on vertical covers (title and UI). [practice]
4. Consistent series structure (same type, position, color system) builds recognition across a channel grid. [practice, E3]
5. Do not misrepresent the content. YouTube requires thumbnails to follow its Community Guidelines [9], and bait thumbnails erode trust [E3]. See `cognitive-psychology` → `dark-patterns-and-ethics.md`.
6. Reels/TikTok covers: put the title inside the 3:4 center crop so it also survives the profile grid.

### 10.6 Export settings

| Setting | Recommendation | Source |
|---------|----------------|--------|
| Container | MP4 (MOV accepted by Meta, TikTok, Pinterest); moov atom at front ("Fast Start"), no edit lists | YouTube [11]; Meta [3] |
| Video codec | H.264 High Profile, progressive, 4:2:0, closed GOP (half the frame rate), CABAC | YouTube [11]; X [20] |
| HEVC (H.265) | Accepted by Pinterest [22]; use H.264 as the universal delivery codec unless a platform lists HEVC | [22] |
| Frame rate | Keep the recorded rate (24, 25, 30, 48, 50, 60); constant frame rate; ≤ 60 fps on X; 30 fps recommended on LinkedIn | [11][3][20][17] |
| Video bitrate (SDR) | YouTube: 1080p 8 Mbps (30 fps) / 12 Mbps (60 fps); 1440p 16/24; 2160p 35–45 / 53–68 Mbps. X: ≥ 5,000 kbps. TikTok ads: ≥ 516 kbps | [11][20][7] |
| Audio | AAC-LC, 48 kHz, stereo; YouTube recommends 384 kbps stereo; Meta ≥ 128 kbps; X: AAC LC, no HE-AAC | [11][2][20] |
| Color (video) | SDR in BT.709 (primaries, transfer, matrix); avoid RGB matrix; YouTube converts full range to limited | [11] |
| Color (stills) | sRGB, 8-bit JPEG or PNG; embed the profile. Platforms re-encode; P3 files can shift. [practice; see `color` → `color-spaces-and-management.md`] | — |
| Pixels | Square pixels, progressive scan | Meta [3] |

**Apply.** Deliver at the master resolution with headroom (YouTube bitrates above are a good ceiling for any platform); every platform re-encodes, so a clean high-bitrate source loses less in their pipeline.

---

## 11. Common mistakes

- Designing feed posts at 1:1 out of habit. Organic Instagram photos can be as tall as 3:4 [24], and Meta ads recommend 4:5 [1][4]; both fill more screen.
- Assuming the profile grid shows the full 4:5 post. Since 2025 it shows a narrower rectangular crop; keep key content centered [6].
- Using the old 4:5 limit as Instagram's maximum. Organic photos up to 3:4 (1080×1440) are kept uncropped [24].
- Putting captions, prices, or logos in the bottom third of a vertical video. Every platform's UI sits there (20–35% of height).
- Ignoring the right edge on TikTok and Shorts, where the like/comment/share column sits [8][27].
- Treating ad safe zones as organic truth or vice versa; check the in-app preview.
- Copying 2022-era specs: YouTube thumbnails "1280×720, 2 MB only" (now 3840×2160 recommended, 50 MB desktop) [9]; Shorts "60 s max" (3 min since 2024-10-15) [12]; LinkedIn cover "1128×191" (now 1512×256) [15]; Reels "90 s max" (3 min since 2025) [6].
- Uploading variable-frame-rate phone footage without conforming to a constant rate; Meta requires a fixed frame rate [3].
- Exporting P3 or untagged images and getting shifted color after the platform strips profiles.
- Exporting multi-layer PDFs for LinkedIn documents [18].
- Text at UI-body size scaled for a 1080 canvas: 17 px on a 1080 frame is about 6 pt on the phone. Use ≥ 48 px.
- Pinterest Pins taller than 2:3; they get truncated in the feed [22].

---

## Sources

[1] Meta. (n.d.). *Instagram Feed image ads: specs*. Meta Ads Guide. https://www.facebook.com/business/ads-guide/update/image/instagram-feed (accessed 2026-10; page served in Portuguese locale)
[2] Meta. (n.d.). *Instagram Reels video ads: specs*. Meta Ads Guide. https://www.facebook.com/business/ads-guide/update/video/instagram-reels (accessed 2026-10)
[3] Meta. (n.d.). *Instagram Stories video ads: specs*. Meta Ads Guide. https://www.facebook.com/business/ads-guide/update/video/instagram-story (accessed 2026-10)
[4] Meta. (n.d.). *Facebook Feed image ads: specs*. Meta Ads Guide. https://www.facebook.com/business/ads-guide/update/image/facebook-feed (accessed 2026-10)
[5] Meta. (n.d.). *Facebook Stories video ads: specs*. Meta Ads Guide. https://www.facebook.com/business/ads-guide/update/video/facebook-story (accessed 2026-10)
[6] Engadget. (2025, January 18). *Instagram swoops in with 3-minute Reels and rectangular profile grids as the TikTok ban gets real*. https://www.engadget.com/social-media/instagram-swoops-in-with-3-minute-reels-and-rectangular-profile-grids-as-the-tiktok-ban-gets-real-201316339.html (secondary source)
[7] TikTok. (2026, June). *Video ads specifications*. TikTok Ads Help Center. https://ads.tiktok.com/help/article/video-ads-specifications
[8] Socialync. (accessed 2026-10). *TikTok safe zone*. https://www.socialync.io/tools/safe-zones/tiktok (secondary source; values scaled from TikTok's in-feed ad template)
[9] YouTube. (n.d.). *Add video thumbnails*. YouTube Help. https://support.google.com/youtube/answer/72431 (accessed 2026-10)
[10] YouTube. (n.d.). *Manage your channel branding*. YouTube Help. https://support.google.com/youtube/answer/10456525 (accessed 2026-10)
[11] YouTube. (n.d.). *YouTube recommended upload encoding settings*. YouTube Help. https://support.google.com/youtube/answer/1722171 (accessed 2026-10)
[12] YouTube. (n.d.). *Understand three-minute YouTube Shorts*. YouTube Help. https://support.google.com/youtube/answer/15424877 (accessed 2026-10)
[13] YouTube. (n.d.). *Upload videos longer than 15 minutes*. YouTube Help. https://support.google.com/youtube/answer/71673 (accessed 2026-10)
[14] Socialync. (accessed 2026-10). *YouTube Shorts safe zone*. https://www.socialync.io/tools/safe-zones/youtube-shorts (secondary source; cites Google Ads vertical video safe-zone image)
[15] LinkedIn. (n.d.). *Company Page images: logo and cover specs*. LinkedIn Help. https://www.linkedin.com/help/linkedin/answer/a563309 (accessed 2026-10)
[16] LinkedIn. (n.d.). *Single image ads: specifications*. LinkedIn Marketing Solutions Help. https://www.linkedin.com/help/lms/answer/a426534 (accessed 2026-10)
[17] LinkedIn. (n.d.). *Video ads: specs*. LinkedIn Marketing Solutions. https://business.linkedin.com/advertise/ads/sponsored-content/video-ads/specs (accessed 2026-10)
[18] LinkedIn. (n.d.). *Document ads: specs*. LinkedIn Marketing Solutions. https://business.linkedin.com/advertise/ads/sponsored-content/document-ads/specs (accessed 2026-10)
[19] LinkedIn. (n.d.). *Image and media upload requirements*. LinkedIn Help. https://www.linkedin.com/help/linkedin/answer/a564109 (accessed 2026-10)
[20] X. (n.d.). *Media best practices*. X Developer Platform docs. https://docs.x.com/x-api/media/quickstart/best-practices (accessed 2026-10)
[21] Adobe. (n.d.). *X/Twitter image sizes*. Adobe Express. https://www.adobe.com/express/discover/sizes/twitter (secondary source; accessed 2026-10)
[22] Pinterest. (n.d.). *Pinterest product specs*. Pinterest Business Help. https://help.pinterest.com/en/business/article/pinterest-product-specs (accessed 2026-10)
[23] AdKit. (2026, updated 2026-09-10). *Snapchat ad safe zones*. https://adkit.so/tools/safe-zones/snapchat (secondary source; top/bottom attributed to Snap guidance, sides AdKit estimate)
[24] Instagram. (n.d.). *Image resolution of photos you share on Instagram*. Instagram Help Center. https://help.instagram.com/1631821640426723/ (accessed 2026-10-15 via JavaScript-rendering fetch)
[25] Instagram. (n.d.). *Reel size & aspect ratios on Instagram*. Instagram Help Center. https://help.instagram.com/1038071743007909 (accessed 2026-10-15)
[26] Instagram. (n.d.). *Share a post with multiple photos or videos on Instagram*. Instagram Help Center. https://help.instagram.com/269314186824048/ (accessed 2026-10-15)
[27] Google. (n.d.). *About video ad specs: Universal safe zones for video ads on YouTube*. Google Ads Help. https://support.google.com/google-ads/answer/13547298 (accessed 2026-10-15; pixel values read from the official 1080×1920 vertical overlay image linked on https://support.google.com/google-ads/answer/9128498)
[28] TikTok. (2025, July). *TikTok reservation in-feed ad specifications (including Reach & Frequency)*. TikTok Ads Help Center. https://ads.tiktok.com/resources/help/article/tiktok-reservation-in-feed-ads-reach-frequency?lang=en (accessed 2026-10-15)
[29] Facebook. (n.d.). *Facebook Page profile picture and cover photo dimensions*. Facebook Help Centre. https://www.facebook.com/help/125379114252045 (accessed 2026-10-15)
[30] TikTok. (n.d.). *TikTok Support FAQ (in-app editor: items per editing session)*. https://www.tiktok.com/support/faq_detail?id=7581820702974679608 (accessed 2026-10-15)
[31] Snap Inc. (n.d.). *Safe Zones for Ads on Snapchat*. Snapchat Business Help Center. https://businesshelp.snapchat.com/s/article/safe-zones?language=en_US (accessed 2026-10-15; percentages read from the official safe-zone graphic on the page)
[32] Snap Inc. (n.d.). *Story Ad Restrictions*. Snapchat Business Help Center. https://businesshelp.snapchat.com/s/article/story-ad-restrictions?language=en_US (accessed 2026-10-15)
[33] Instagram. (n.d.). *Start a new thread on Threads*. Instagram Help Center. https://help.instagram.com/1217144552251333/ (accessed 2026-10-15)
