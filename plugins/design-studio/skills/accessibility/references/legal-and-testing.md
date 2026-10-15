# Accessibility Law and Testing

> **Scope:** Where digital accessibility is legally required (EU, US, UK, Canada, Brazil, Japan) as of October 2026, what automated tools can and can't catch, how to test manually and with disabled users, the design-stage handoff checklist, and accessibility statements and VPAT/ACR reports.
> **Last verified:** 2026-10 (oldest volatile items: UK public-sector guidance page updated 30 September 2024; W3C policy listings updated January 2025 and 2019; eMAG 3.1 dated 2014)
> **Used by:** accessibility-specialist, design-system-architect, ui-designer, design-engineer, creative-director, design-critic

---

> **This is orientation, not legal advice.** Laws, deadlines, and enforcement change. Scope depends on the organization, sector, and country. Before any compliance decision, confirm with counsel and the primary legal text. Every date below carries its verification month.

## How to use this file

1. **Design to WCAG 2.2 AA by default.** It meets or exceeds the technical standard in every law below, which reference WCAG 2.0 AA, 2.1 AA, or 2.2 AA, or EN 301 549, which incorporates WCAG (§2).
2. Use §1 to answer "does a law apply, and when?" Escalate the answer to legal.
3. Use §3–§6 to plan testing: automated plus manual plus users. No single method is enough [11][12][27].
4. Use §7 as the definition of done for design handoff.

---

## 1. Legal landscape (verified 2026-10)

### 1.1 Summary table

| Jurisdiction | Law or policy | Who it covers | Technical standard | Key dates |
|---|---|---|---|---|
| **EU** | European Accessibility Act, Directive (EU) 2019/882 | Private and public providers of listed products and services: computers and OSs, smartphones, self-service terminals (ATMs, ticketing, check-in), e-commerce, banking, e-books, passenger transport, telephony, audiovisual media access [1] | Harmonised standard **EN 301 549**. V3.2.1 is the cited version today. V4.1.1 (WCAG 2.2 AA) was published September 2026, with Official Journal citation pending [3] | Transposition by 28 June 2022 [1]. Applies to newly marketed products and services from **28 June 2025** [2] |
| **EU** (public sector) | Web Accessibility Directive (EU) 2016/2102 | Public-sector websites and apps | WCAG 2.1 via EN 301 549 (per W3C listing) [4] | In force |
| **US** (state and local government) | ADA Title II web and mobile app rule (2024) | State and local governments: websites and mobile apps | **WCAG 2.1 AA** [5] | **Extended in April 2026:** **26 April 2027** for population ≥ 50,000. **26 April 2028** for under 50,000 and special districts [5][6] |
| **US** (businesses open to the public) | ADA Title III | Places of public accommodation, including many websites, via case law | No DOJ technical rule. Courts and settlements usually reference WCAG 2.x AA | Litigation-driven (§1.4) |
| **US** (federal) | Section 508, Rehabilitation Act (revised standards) | Federal agencies' ICT: websites, software, documents | **WCAG 2.0 A and AA**, applied to web, documents, and software [7] | Final rule 18 January 2017. "Existing ICT" threshold 18 January 2018 [7] |
| **UK** | Equality Act 2010, plus the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 | All service providers (reasonable adjustments). Public bodies (the regulations) | **WCAG 2.2 AA** for public sector. Accessibility statement required [8] | Regulations applied from 23 September 2018 [8] |
| **Canada** (federal) | Accessible Canada Act (S.C. 2019, c. 10) | Federal government, Crown corporations, federally regulated private sector (banking, telecom, broadcasting, interprovincial transport, and more) [9] | **CAN/ASC-EN 301 549:2024**, an identical adoption of EN 301 549:2021, voluntary unless a regulation references it [10] | Royal assent 21 June 2019. Goal: barrier-free Canada "on or before January 1, 2040" [9] |
| **Brazil** | Lei Brasileira de Inclusão, Lei 13.146/2015, art. 63 | Websites of companies headquartered or represented in Brazil, and government bodies [13] | "Internationally adopted" best practices [13]. **ABNT NBR 17225** (2025) [14]. **eMAG 3.1** for federal government [15] | Law dated 6 July 2015, in force 180 days after publication [13]. NBR 17225 launched 11 March 2025 [14] |
| **Japan** | Act for Eliminating Discrimination against Persons with Disabilities (Act No. 65 of 2013) | Public bodies and private businesses (reasonable accommodation) | **JIS X 8341-3:2016** (voluntary) [16]. Public sector follows guidelines based on it | Enforced 1 April 2016 [16]. Reasonable accommodation became mandatory for private businesses from **1 April 2024** [18] |
| **International** | ISO/IEC 40500:2025 = WCAG 2.2 | Reference standard countries can adopt | WCAG 2.2 | Announced by W3C on 21 October 2025 [19] |

### 1.2 European Union: EAA details

- **Directive (EU) 2019/882**, dated 17 April 2019 [2] (secondary source). Member states had to transpose it by June 2022 [1].
- **Application:** from **28 June 2025**, newly marketed products and services in scope must be accessible [2] (secondary source).
- **Microenterprise exemption:** in-scope *services* provided by microenterprises (fewer than 10 persons, and annual turnover or balance sheet not over €2 million) are exempt [2] (secondary source). Microenterprises selling in-scope *products* aren't exempt by that rule [unverified: confirm in the Directive text].
- **Transition periods:** services may keep using products lawfully used before 28 June 2025 until 28 June 2030, and self-service terminals may stay in use for up to 20 years [unverified: EUR-Lex text couldn't be retrieved in this pass; confirm in Article 32].
- **EN 301 549 versions (verified 2026-10):**
  - **V3.2.1** (2021) is the version cited in the Official Journal, so it currently gives presumption of conformity. Its web clauses align with WCAG 2.1 AA.
  - **V4.1.1** was published **2 September 2026**, adopts **WCAG 2.2 Level AA**, and adds annexes mapping it to the EAA. Until it's cited in the Official Journal, it "does not carry presumption of conformity." Deque reports it is on track for citation around **30 November 2026** [3]. **Recheck this after December 2026.**
- **Design takeaway:** designing to WCAG 2.2 AA now covers both V3.2.1 and V4.1.1 for web content. EN 301 549 also covers non-web documents, software, hardware, and real-time communication, which matters for apps and kiosks.

### 1.3 United States: ADA Title II

- The 2024 rule requires state and local government web content and mobile apps to meet **WCAG 2.1 Level AA** [5].
- On **20 April 2026**, DOJ published an **interim final rule** (Federal Register document 2026-07663) extending the compliance dates by one year [6]. Current dates [5][6]:
  - Population **≥ 50,000:** **26 April 2027**.
  - Population **< 50,000 and special district governments:** **26 April 2028**.
- The original 2024 dates were 24 April 2026 and 26 April 2027 [original dates as widely reported; not re-verified against the 2024 Federal Register text in this pass].
- Reed Smith reports the IFR "does not revise any other aspect of the regulations," and that DOJ may issue a further proposed rule [6]. **Watch for changes.**

### 1.4 United States: ADA Title III litigation context

- Title III has no DOJ technical regulation for private websites. Exposure comes through lawsuits and demand letters.
- Seyfarth Shaw's count, as reported by Level Access: **2,452** federal website accessibility lawsuits in 2024 and **3,117** in 2025, a 27% increase and the highest since 2022. Website cases were **36%** of all federal Title III filings in 2025, up from 28% [20] (secondary report of Seyfarth data; verified 2026-10).
- California's Unruh Civil Rights Act lets plaintiffs seek damages on top of federal remedies [20].
- **Design takeaway:** the failures most often cited in practice are the WebAIM top six (§4): contrast, alt text, form labels, empty links and buttons, document language. They are all design-preventable.

### 1.5 United Kingdom

- **Equality Act 2010:** organizations must make "reasonable adjustments" for disabled people. In Northern Ireland, the Disability Discrimination Act 1995 applies instead [8].
- **Public Sector Bodies Accessibility Regulations 2018:** public bodies must meet **WCAG 2.2 AA** and **publish an accessibility statement** that they review regularly [8].
- **Monitoring:** GDS samples sites and apps each year. **Enforcement:** EHRC (Great Britain) and ECNI (Northern Ireland) [8].

### 1.6 Canada

- The **Accessible Canada Act** aims for "a Canada without barriers, on or before January 1, 2040" [9].
- **CAN/ASC-EN 301 549:2024** (May 2024) is an identical adoption of EN 301 549:2021, free in English and French, and "developed as a reference document for voluntary use." It becomes mandatory only where a law or regulation references it [10].
- Provinces have their own laws, such as Ontario's AODA [not verified in this pass; check provincial requirements separately].

### 1.7 Brazil

- **Lei 13.146/2015, art. 63** (quoted from the law):
  > "É obrigatória a acessibilidade nos sítios da internet mantidos por empresas com sede ou representação comercial no País ou por órgãos de governo, para uso da pessoa com deficiência, garantindo-lhe acesso às informações disponíveis, conforme as melhores práticas e diretrizes de acessibilidade adotadas internacionalmente." [13]

  In English: accessibility is mandatory on websites maintained by companies headquartered or commercially represented in Brazil, or by government bodies, following internationally adopted best practices and accessibility guidelines.
  - **§1:** sites must display the **accessibility symbol** prominently [13].
- **ABNT NBR 17225** (web content and applications accessibility), launched **11 March 2025**. It has **146 guidelines** split into requirements and recommendations, was drafted by a group of 178 specialists led by Ceweb.br (NIC.br), and went through national public consultation. It is positioned as the technical reference for applying art. 63 [14]. Its alignment with WCAG 2.2 AA for "regular" conformance appears in Ceweb.br material [unverified: seen only in a search summary].
- **eMAG 3.1** (April 2014), the e-government accessibility model, is a WCAG-derived model that keeps all WCAG good practices. Portaria nº 3 of 7 May 2007 made it mandatory on federal government sites and portals [15].

### 1.8 Japan

- **JIS X 8341-3:2016** (web content part of the "Guidelines for older persons and persons with disabilities" series) was drafted by WAIC, and "compliance with the standard is voluntary" [16]. The Ministry of Internal Affairs and Communications recommends that the public sector follow guidelines based on it [16].
- **Revision:** in January 2025, WAIC was preparing a revision aligned with ISO/IEC 40500, which is now WCAG 2.2. It estimated about a year once a drafting committee was set up [17]. **Status of a new JIS edition as of 2026-10: not confirmed** [unverified].
- **Act No. 65 of 2013** was enforced on 1 April 2016 [16]. Its amendment made **reasonable accommodation mandatory for private businesses from 1 April 2024** [18]. A 2025 commentary notes that Japanese law doesn't require WCAG-based web accessibility as such [17].

---

## 2. Which standard to design to

| If the project must meet… | Then WCAG 2.2 AA… |
|---|---|
| Section 508 (WCAG 2.0 AA) | Covers it. Also report 4.1.1 Parsing if the contract asks, since 2.2 removed it (see `wcag-22-in-practice.md`). |
| ADA Title II (WCAG 2.1 AA) | Covers it. |
| EN 301 549 V3.2.1 (web ≈ WCAG 2.1 AA) / V4.1.1 (WCAG 2.2 AA) | Covers the web clauses. Check the non-web clauses for apps, documents, hardware, and real-time communication. |
| UK public sector (WCAG 2.2 AA) | Matches it. Also publish an accessibility statement. |
| Brazil (art. 63, NBR 17225, eMAG) | Good baseline. Check NBR 17225 and eMAG-specific items, such as the accessibility symbol in art. 63 §1. |
| Japan (JIS X 8341-3:2016, WCAG 2.0-based) | Covers it. |

---

## 3. What automated tools catch

### 3.1 Two numbers that measure different things

| Study | Method | Result |
|---|---|---|
| **GDS (UK), 2017** [11] | Built a test page with **143 known failures** in 19 categories, then ran **10 tools** (including aXe, WAVE, Tenon, SortSite, HTML CodeSniffer, Asqatasun). | Individual tools found **17% to 41%** of the barriers. The best was Asqatasun at 41% when manual-inspection prompts were counted, or Tenon at 37% counting errors and warnings only. All tools combined found about 71%. **29% (42 barriers) were found by no tool**, including links identified by color alone and long italic text. |
| **Deque, 2021** [12] | Analyzed **2,000+ audits**, **13,000+ pages**, and **nearly 300,000 issues** from first-time assessments using axe. | Automated testing found **57% of issues by volume**. Deque contrasts this with the common belief of 20–30%. |

**Why they differ** [11][12]:
- **Per barrier type or success criterion** (GDS, and the usual 20–30% claim): many success criteria can't be machine-tested at all. Is the alt text *accurate*? Is the focus order *logical*? Are headings *descriptive*?
- **Per issue occurrence** (Deque): the issues that are most frequent in real pages, such as contrast, missing labels, and empty links, are the ones tools detect well. So by volume, the automated share is higher.
- Deque's figure is vendor data from its own tool [12]. GDS used a synthetic page with one instance of each barrier [11]. **[E2]** for both, with these caveats.

**Apply:** Run automated checks continuously (design plugins, CI, browser extensions). They are cheap and catch the most frequent errors. Never report a clean scan as "accessible" or "WCAG compliant." Budget manual testing for the rest.

**Limit:** Tools also produce false positives and miss context-dependent failures. Treat results as leads to investigate.

---

## 4. The state of the web: WebAIM Million 2026

WebAIM's annual automated scan of the top **1,000,000 home pages**, February 2026 data, page updated 30 March 2026 [21] (verified 2026-10):

| Metric | 2026 | 2025 |
|---|---|---|
| Home pages with detected WCAG 2 failures | **95.9%** | 94.8% |
| Average detected errors per page | **56.1** | 51 |

| Most common failure | % of home pages (2026) | 2025 | Designer prevents it by… |
|---|---|---|---|
| Low-contrast text | **83.9%** | 79.1% | Passing palette pairs as tokens (→ `color` → `contrast-and-dark-mode.md`) |
| Missing alt text | **53.1%** | 55.5% | Alt text in the spec or content model (`motion-media-and-forms.md` §3) |
| Missing form input labels | **51%** | 48.2% | Visible labels in every form component |
| Empty links | **46.3%** | 45.4% | Names for icon-only links (logo, social icons) |
| Empty buttons | **30.6%** | 29.6% | Names for icon-only buttons |
| Missing document language | **13.5%** | 15.8% | `lang` in the template spec |

These are **automated, detectable** errors only (§3), so real failure rates are higher. WebAIM notes that "addressing just these few types of issues would significantly improve accessibility across the web" [21].

---

## 5. Manual test checklist

Run on every key flow (not just pages) before release. **[E2]** (derived from WCAG 2.2 success criteria [22] and the Understanding docs cited.)

### 5.1 Keyboard (no mouse)

- [ ] Tab through the flow: every interactive element is reachable, in a logical order (2.1.1, 2.4.3).
- [ ] Focus is always visible, 3:1, never covered by sticky elements (2.4.7, 1.4.11, 2.4.11).
- [ ] The skip link appears on the first Tab and works (2.4.1).
- [ ] Modals: focus moves in, stays in, Esc closes, focus returns to the trigger.
- [ ] No traps in embeds or widgets (2.1.2).
- [ ] Custom widgets respond to the expected keys (arrows, Enter, Space, Esc).

### 5.2 Zoom, reflow, spacing

- [ ] **200% browser text zoom:** no clipped or overlapping text, no lost functions (1.4.4).
- [ ] **400% zoom on a 1280 px window (≈ 320 CSS px):** single column, no horizontal scrolling except data tables, maps, and similar (1.4.10). Real viewports come out slightly smaller because of scrollbars, about 318 px [23].
- [ ] **Text spacing override** (line height 1.5, paragraph spacing 2×, letter spacing 0.12em, word spacing 0.16em): nothing clipped (1.4.12).
- [ ] Mobile: both orientations work (1.3.4). Pinch zoom isn't disabled.

### 5.3 Screen readers

Test with at least one desktop and one mobile pairing that matches your audience:

| Screen reader | Platform | Typical pairing |
|---|---|---|
| VoiceOver | macOS, iOS, iPadOS (built in) | Safari |
| NVDA | Windows (free, open source) | Chrome, Firefox, or Edge |
| TalkBack | Android (built in) | Chrome |

Check:
- [ ] The page title announces correctly (2.4.2). The language is right (3.1.1).
- [ ] The headings list makes sense as an outline (1.3.1, 2.4.6).
- [ ] The landmarks list shows the expected regions.
- [ ] Every control announces name, role, and state (4.1.2), and the name matches the visible label (2.5.3).
- [ ] Images: informative ones described, decorative ones silent (1.1.1).
- [ ] Form errors are announced. Status messages (toasts, "added to cart") are announced without moving focus (3.3.1, 4.1.3).
- [ ] Reading order matches the visual order (1.3.2).

### 5.4 Visual and sensory

- [ ] Contrast checked for text, components, focus, and charts in **light and dark modes** and on images (1.4.3, 1.4.11).
- [ ] Grayscale view: no information lost (1.4.1).
- [ ] **Reduced motion on** (OS setting): parallax, zoom, and slide effects stop. State feedback remains (2.3.3).
- [ ] Auto-moving content has a pause control (2.2.2). Nothing flashes more than 3 times per second (2.3.1).
- [ ] **Forced colors / Windows contrast themes on:** focus rings, borders, icons, and selected states remain visible. Anything drawn only with `box-shadow` or background images disappears [24].
- [ ] Media: captions accurate and synchronized, transcripts linked, audio description where visuals carry meaning (1.2.x).

### 5.5 Pointer, touch, cognition

- [ ] Targets ≥ 24×24 CSS px or spaced (2.5.8). Primary touch targets about 44 px.
- [ ] Every drag and gesture has a button alternative (2.5.7, 2.5.1).
- [ ] Hover tooltips can be dismissed and hovered, and they persist (1.4.13).
- [ ] Login works with a password manager and paste (3.3.8). No re-entry within the process (3.3.7).
- [ ] Help is in the same place across pages (3.2.6).
- [ ] Timeouts warn the user and can be extended (2.2.1).

---

## 6. Testing with disabled users

W3C guidance [27]:
- **Involve users throughout development**, not only at the end: "Conducting informal evaluations throughout development is more effective than only formal usability testing at the end of a project."
- **Do an expert review first** so sessions aren't spent on obvious barriers.
- **Recruit a range** of disabilities and assistive-technology skill levels that matches the audience. Specialist recruiters exist. "Avoid assuming that input from one person with a disability applies to all people with disabilities."
- **Small studies aren't generalizable.** Report scope and participant characteristics.
- **User testing complements conformance evaluation. It doesn't replace it.** "Combine user involvement with evaluating conformance to WCAG."
- Plan compensation and accessible logistics (formats, AT setup, remote options).

**Apply:** For each major release, run at least a few sessions with screen-reader users, keyboard or switch users, low-vision users (magnification), and people with cognitive disabilities, weighted toward the audience. Prototype tests are fine early. Test interactive builds for AT behavior.

**Limit:** A sample of three blind participants says nothing about cognitive or motor access. Say so in the report [27].

---

## 7. Design-stage checklist for Figma handoff

Definition of done for every screen or flow handed to engineering. Annotation kits are listed in `motion-media-and-forms.md` §7.3.

**Visual**
- [ ] All text and component colors use tokens that pass 1.4.3 and 1.4.11 in every theme.
- [ ] No information conveyed by color alone (1.4.1).
- [ ] Focus state designed for every interactive component, ≥ 2 px and 3:1 (2.4.7, 2.4.13).
- [ ] Hover, focus, active, disabled, error, selected, expanded, and loading states drawn.
- [ ] Targets ≥ 24 px (2.5.8). Touch primary ≥ 44 px.
- [ ] Layouts provided or specified for 320 px width and 200% text (1.4.10, 1.4.4).
- [ ] Reduced-motion variant specified for every animation (2.3.3).

**Structure annotations**
- [ ] Page title pattern and `lang` (2.4.2, 3.1.1).
- [ ] Heading levels (1.3.1).
- [ ] Landmarks (1.3.1, 2.4.1). Skip link design.
- [ ] Reading order and focus order where they aren't obvious (1.3.2, 2.4.3).
- [ ] Accessible names for icon-only controls and repeated links (4.1.2, 2.4.4).
- [ ] Roles and states for custom components (4.1.2).
- [ ] Keyboard behavior for custom widgets (2.1.1).
- [ ] Status messages and their announcements (4.1.3).

**Content**
- [ ] Alt text or "decorative" for every image. Long descriptions or data tables for charts (1.1.1).
- [ ] Labels, hints, required markers, and error messages written for every field (3.3.1–3.3.3).
- [ ] `autocomplete` tokens for personal-data fields (1.3.5).
- [ ] Captions, transcripts, and description plan for media (1.2.x).
- [ ] Link text meaningful in context (2.4.4).

**Flows**
- [ ] Non-drag and non-gesture alternatives (2.5.7, 2.5.1).
- [ ] Review or undo for payments, legal commitments, and deletions (3.3.4).
- [ ] No data re-entry. Login without memory or transcription (3.3.7, 3.3.8).
- [ ] Consistent help location (3.2.6). Timeout handling (2.2.1).

---

## 8. Accessibility statements and VPAT/ACR

### 8.1 Accessibility statement

W3C says a statement "should contain at least" [25]:
1. A **commitment** to accessibility for people with disabilities.
2. The **standard** applied (such as WCAG 2.2 AA).
3. **Contact information** for reporting problems.

Advisable additions [25]: **known limitations** with workarounds, measures taken, technical prerequisites (supported browsers and AT), environments tested, and the applicable laws. W3C provides a **statement generator**. Statements "are not technical assessments or declarations of conformity," but they should ideally reference one [25].

UK public-sector bodies **must** publish one and review it regularly [8].

**Apply:** Design it as a real page linked from the footer of every page. Write it in plain language, date it, and give a response time for feedback.

### 8.2 VPAT and ACR

- The **VPAT** (Voluntary Product Accessibility Template) is ITI's free template for documenting conformance. **A completed VPAT for a specific product is an Accessibility Conformance Report (ACR).** There is no submission or certification process [26].
- **Current version: VPAT 2.5Rev (April 2025)**, in four editions: **508** (Revised Section 508), **EU** (EN 301 549), **WCAG**, and **INT** (all three) [26] (verified 2026-10).
- Conformance levels per criterion: **Supports, Partially Supports, Does Not Support, Not Applicable** [26].
- Procurement teams in the US public sector and many enterprises ask vendors for an ACR.

**Apply:** Base the ACR on a real audit (manual plus automated). Write remarks for every "Partially Supports," naming what fails and the workaround. Update it with each major release.

**Limit:** An ACR is a self-declaration. Buyers increasingly verify claims, and an inflated ACR becomes a liability.

---

## Common mistakes

- **"Our scan is clean, so we're compliant."** Tools find a minority of barrier types (§3).
- **Citing WCAG 2.1 because "that's what the law says"** and missing 2.2's cheap wins. Target 2.2 AA, which covers the 2.1 laws.
- **Assuming the EAA doesn't apply** because the company is outside the EU. It applies to products and services placed on the EU market [1][2].
- **Using the original ADA Title II dates** (April 2026). They were extended to April 2027 and 2028 [5][6].
- **Treating EN 301 549 V4.1.1 as already giving presumption of conformity.** It doesn't until it's cited in the Official Journal [3].
- **Testing only with a screen reader** and skipping keyboard, zoom, reflow, motion, forced colors, and cognitive checks.
- **One-off audits** with no regression testing. Accessibility decays with every release.
- **Accessibility overlays or widgets as a compliance strategy.** They don't fix the underlying code or design. [Practitioner consensus; not evaluated in this pass.]
- **Accessibility statements that claim "fully compliant"** without an audit, or with no contact route.
- **An ACR marked "Supports" across the board** with no remarks.

---

## Sources

[1] European Commission. (n.d.). *European Accessibility Act*. https://commission.europa.eu/strategy-and-policy/policies/justice-and-fundamental-rights/disability/union-equality-strategy-rights-persons-disabilities-2021-2030/european-accessibility-act_en (accessed 2026-10)
[2] Wikipedia contributors. (n.d.). *European Accessibility Act*. Wikipedia. https://en.wikipedia.org/wiki/European_Accessibility_Act (secondary source; accessed 2026-10)
[3] Luken, M., & Sims, G. (2026, September 8). *EN 301 549 v4.1.1 is final! What changed, what it means, and what you should do*. Deque Systems. https://www.deque.com/blog/en-301-549-v4-1-1-is-final-what-changed-what-it-means-and-what-you-should-do/
[4] W3C WAI. (2025, January 13 update). *Web Accessibility Laws & Policies*. https://www.w3.org/WAI/policies/
[5] US Department of Justice. (n.d.). *State and local government web and mobile app accessibility rule: first steps* (resource page). ADA.gov. https://www.ada.gov/resources/web-rule-first-steps/ (accessed 2026-10)
[6] Reed Smith. (2026). *DOJ extends digital accessibility compliance dates under Title II of the ADA*. https://www.reedsmith.com/articles/doj-extends-digital-accessibility-compliance-dates-under-title-ii-of-the-ada/
[7] US Access Board. (n.d.). *Information and Communication Technology: Revised 508 Standards and 255 Guidelines*. https://www.access-board.gov/ict/ (accessed 2026-10)
[8] UK Government. (2024, September 30 update). *Understanding accessibility requirements for public sector bodies*. GOV.UK. https://www.gov.uk/guidance/accessibility-requirements-for-public-sector-websites-and-apps
[9] Government of Canada. (2019). *Accessible Canada Act* (S.C. 2019, c. 10). Justice Laws Website. https://laws-lois.justice.gc.ca/eng/acts/A-0.6/page-1.html
[10] Accessibility Standards Canada. (2024, May). *CAN/ASC - EN 301 549:2024 Accessibility requirements for ICT products and services*. https://accessible.canada.ca/en-301-549-accessibility-requirements-ict-products-and-services
[11] Government Digital Service. (2017, February 24). *What we found when we tested tools on the world's least-accessible webpage*. GOV.UK Accessibility blog. https://accessibility.blog.gov.uk/2017/02/24/what-we-found-when-we-tested-tools-on-the-worlds-least-accessible-webpage/
[12] Deque Systems. (2021, March 10). *Automated Testing Study Identifies 57 Percent of Digital Accessibility Issues*. https://www.deque.com/blog/automated-testing-study-identifies-57-percent-of-digital-accessibility-issues/
[13] Brasil. (2015). *Lei nº 13.146, de 6 de julho de 2015 (Lei Brasileira de Inclusão da Pessoa com Deficiência)*. Planalto. https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm
[14] Teletime. (2025, March 11). *ABNT lança norma para aprimorar a acessibilidade de sites*. https://teletime.com.br/11/03/2025/abnt-lanca-norma-para-aprimorar-a-acessibilidade-de-sites/
[15] Governo Federal do Brasil. (2014). *eMAG – Modelo de Acessibilidade em Governo Eletrônico, versão 3.1*. https://emag.governoeletronico.gov.br/
[16] W3C WAI. (2019, September 27 update). *Web Accessibility Laws & Policies: Japan*. https://www.w3.org/WAI/policies/japan/
[17] Nakamura, N. (2025, January 7). *Web accessibility prospect 2025* (in Japanese). gihyo.jp. https://gihyo.jp/article/2025/01/web-accessibility-prospect
[18] Ministry of Health, Labour and Welfare (Japan), via DINF. (2023, March). *Reasonable accommodation under the Act to Eliminate Discrimination against Persons with Disabilities shall apply to private business operators from April 1, 2024*. Disability Welfare News No. 60. https://www.dinf.ne.jp/english/dinf_news/no60/no6001/
[19] W3C WAI. (2025, October 21). *WCAG 2.2 Approved as an ISO Standard*. https://www.w3.org/WAI/news/2025-10-21/wcag22-iso
[20] Level Access. (2026, May 22). *Title III lawsuits: 10 big companies sued over website accessibility* (reporting Seyfarth Shaw data). https://levelaccess.com/blog/title-iii-lawsuits-10-big-companies-sued-over-website-accessibility/
[21] WebAIM. (2026, March 30 update). *The WebAIM Million: The 2026 report on the accessibility of the top 1,000,000 home pages*. https://webaim.org/projects/million/
[22] W3C. (2024). *Web Content Accessibility Guidelines (WCAG) 2.2*. W3C Recommendation, 12 December 2024 edition. https://www.w3.org/TR/WCAG22/
[23] W3C WAI. (2023). *Understanding SC 1.4.10 Reflow*. https://www.w3.org/WAI/WCAG22/Understanding/reflow.html
[24] MDN Web Docs. (n.d.). *forced-colors*. Mozilla. https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors (accessed 2026-10)
[25] W3C WAI. (n.d.). *Developing an Accessibility Statement*. https://www.w3.org/WAI/planning/statements/ (accessed 2026-10)
[26] Information Technology Industry Council. (2025). *VPAT*. https://www.itic.org/policy/accessibility/vpat (accessed 2026-10)
[27] W3C WAI. (n.d.). *Involving Users in Evaluating Web Accessibility*. https://www.w3.org/WAI/test-evaluate/involving-users/ (accessed 2026-10)
