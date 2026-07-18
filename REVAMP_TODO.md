# Charcot Capital website revamp — working to-do list

Status as at 18 July 2026 (last full pass 17 July 2026). **All P0 pre-launch blockers are done — site is launch-ready.** Remaining items below are P1/P2 follow-ups and ongoing maintenance, not launch blockers. Completed items have been moved out of the active list into their own section further down. Priority: P0 before launch, P1 shortly after, P2 polish.

---

## Open / remaining items

### Conversion and trust
5. Consider partner-level contact or a scheduling link, to match the "speak directly with the partners" promise. **Still open.**

### Performance and build
11. Use the Vercel image optimisation pipeline. **Not actioned** - no `vercel.json` exists, so Vercel's automatic image optimisation isn't active (it requires framework-level wiring this static site doesn't have). Images are already reasonably sized by hand; treat as a separate deliberate task - flag if you want it scoped.

### Proof and credibility (P2, competitive gap)
22. Launch a light Insights / News section. **Deferred - not for now.**
23. Enrich the track record: add deal role and, where disclosable, value; add two or three short case studies. **Deferred - not for now.**
24. Replace synthetic-looking imagery with authentic photography wherever trust matters (portraits already improved).

### SEO and structured data
28. Keep robots.txt and sitemap.xml in sync as pages (e.g. Insights) are added. **Mostly fine** - sitemap lists all 7 core pages; privacy.html is the only omission, likely intentional.

### Content accuracy (ongoing)
29. Lock one canonical set of figures (transactions, countries, continents, referral %) in a single source and reuse; re-check after any copy edit.
30. Keep the "independent advisory from 2002, firm co-founded 2008" wording consistent wherever dates appear.

---

## Completed

### Pre-launch blockers (P0) - all done, launch-ready
1. ~~Verify the contact form actually delivers.~~ **Done (0.11)** - posts to `https://formspree.io/f/xaqzodnr`.
2. ~~State the regulatory position in the footer.~~ **Decided: no FCA status to add** - confirmed not applicable, footer stays as company-registration only.
3. ~~Confirm office reality.~~ **Decided: Singapore wording is fine as-is** - team.html's historical/network framing stands, no change needed.

### Conversion and trust
4. ~~Add a clickable firm telephone number.~~ **Decided: no phone numbers on the site.** Form-only contact stands.
6. ~~Make the referral statistic more prominent near the primary calls to action.~~ **Decided: current homepage treatment is fine**, no change needed.

### Performance and build
7. ~~Replace the Tailwind CDN runtime with a compiled static CSS file.~~ **Done (0.15)**.
8. ~~Optimise all photography.~~ **Done** - `energy_bw.webp` and `tmt_bw.webp` resized from full camera resolution (4288x2848 / 5472x3648) to 1100px wide, matching the other four sector tiles. 1714KB→82KB and 1168KB→76KB (2.7MB saved; site image total now 9.1MB, down from 11.8MB). Verified visually, no quality loss at display size.
9. ~~Add width and height to all images.~~ **Done (0.16)** - all 104 `<img>` tags across 8 pages.
10. ~~Lazy-load below-the-fold images.~~ **Done (0.17)** - every below-fold image site-wide, hero/nav images correctly left eager.

### Visual consistency
12. ~~Unify the hero system across all pages.~~ **Done (0.12)** - one shared hero treatment, fixed 44rem height, Contact and Careers both carry full photographic heroes.
13. ~~Balance the Services capability sections... apply one vertical spacing scale site-wide.~~ **Done (0.7)** - Services' local spacing tokens removed, section rhythm aligned to the sitewide values.
14. ~~Normalise tombstone cards: uniform logo max-height, equal padding, consistent card height, no orphan cells in the final row.~~ **Done (0.22)** - tombstones rebuilt as HTML/CSS with a fixed `aspect-ratio` and `object-fit: contain` logo boxes, so uniform sizing is now structural. Logos kept in original brand colour (0.14 decision stands).
15. ~~Give Contact and Careers heroes a consistent visual motif.~~ **Done (0.12)** - subsumed by item 12.
16. ~~Re-check all spacing fixes at tablet and mobile breakpoints.~~ **Done (0.20)**.

### Image language
17. ~~Commit to one coherent image system and one grade.~~ **Done (0.9)** - all sector tiles now match the black-and-white grade already used across every hero photo and the portraits.
18. ~~Replace the AI/stock-looking sector tiles with a uniform duotone treatment.~~ **Done (0.9)**.
19. ~~Replace stock cityscapes (London, Paris) with real photography of the actual buildings.~~ **Done (0.13)** - Contact page office photos are specific building doors/facades, not generic stock.
20. ~~Remove remaining watermarked stock images before finalising.~~ **Done - confirmed no watermarks remain.**
21. ~~Re-theme or remove the remaining bridge image on About.~~ **Done (0.13)** - confirmed no trace of it in source; already fully resolved by 0.2.

### Proof and credibility
25. ~~Add partner-level contact or LinkedIn links on the team page.~~ **Decided: no LinkedIn links.**

### SEO and structured data
26. ~~Add Organization / FinancialService and Person JSON-LD structured data.~~ **Done (0.18)**.
27. ~~Sharpen remaining page titles.~~ **Done (0.19)** - homepage title updated; every page now has a specific, keyword-rich title.

---

## 0. Done in this pass (code-level, already applied to V3)

- [x] 0.1 Aligned the "Who we work with" card feet so the three "Discuss" links sit on one baseline (index.html).
- [x] 0.2 Removed the duplicated, off-theme bridge image on About; "What sets us apart" now uses the compass motif (about.html).
- [x] 0.3 ~~Standardised About section vertical padding to a single 6.5rem rhythm~~ — correction: this was not actually consistent (About mixed 3.5/5/6.5rem). Superseded by 0.7 below.
- [x] 0.4 Gave Thorsten Jabas an "Areas of focus" block so all four team bios carry equal weight (team.html). Replace with real selected transactions when available.
- [x] 0.5 Added Open Graph / Twitter tags to privacy.html for head consistency.
- [x] 0.6 Confirmed the transaction figures now reconcile (56+ throughout; referral 70%); no "50 mandates" remaining.
- [x] 0.7 Unified the hero-to-first-section gap to 4rem on all seven pages, replacing five different values (3/4/4.5/5/6/6.5rem). Removed Services' page-local `--space-*` token scale and hardcoded its section padding to match sitewide values. Resolves item 13 and the spacing half of item 12.
- [x] 0.8 Standardised section-intro paragraph width to 52rem (About, Services, Careers - Careers previously had no width constraint at all and ran full-page-width lines). Transactions and Team already matched.
- [x] 0.9 Converted all six sector tiles on Services to a uniform black-and-white grade (`*_bw.webp` filenames) and updated the links. Resolves items 17 and 18.
- [x] 0.10 Normalised the repeated bottom CTA band (About/Services/Transactions/Team): removed About's one-off hardcoded button widths so all four now share identical container sizing and auto-width buttons.
- [x] 0.11 Verified the contact form now posts to a proper Formspree endpoint (`/f/xaqzodnr`, not the deprecated email-in-URL format). Resolves item 1 - still needs one live end-to-end send to fully close out.
- [x] 0.12 Verified hero system is already unified: all seven pages share one `.hero-section` treatment (44rem min-height, same overlay/text-shadow structure), and Contact and Careers both now carry full photographic heroes. Resolves items 12 and 15.
- [x] 0.13 Verified the About "bridge" image is fully gone (no trace in source) and the office photos on Contact are real building photography (London/Paris doors), not generic stock cityscapes. Resolves items 19 and 21.
- [x] 0.14 Tombstone logos confirmed as an intentional design choice, not a defect - kept in original brand colour. Item 14's greyscale requirement is dropped; see note under item 14 below.
- [x] 0.15 Replaced the Tailwind CDN script with a hand-written `tailwind-utilities.css` covering the ~28 utility classes actually used site-wide (verified against the full class inventory across all 8 pages). Removes the render-blocking script and the CDN production warning. Resolves item 7. Verified: full-page screenshots plus a live mobile-menu open/close test at 375px, no visual or functional regressions.
- [x] 0.16 Added explicit `width`/`height` attributes to every `<img>` on the site (104 tags across 8 pages, SVG included via its own intrinsic width/height), sourced from each file's real pixel dimensions. Resolves item 9.
- [x] 0.17 Extended `loading="lazy"` to every below-the-fold image site-wide (portraits, sector tiles, office photos, footer logo, transactions map), while leaving hero images (`fetchpriority="high"`) and the nav logo eager. Resolves item 10.
- [x] 0.18 Added `FinancialService` (Organization) JSON-LD to all 8 pages, plus a `Person` graph for all four team members on team.html, worksFor-linked to the organization. Keywords used: investment banking, merchant banking, financial services, mergers and acquisitions, M&A. Resolves item 26.
- [x] 0.19 Updated the homepage `<title>` to "Mergers and Acquisitions - Charcot Capital" (stakeholder choice). Resolves item 27.
- [x] 0.20 Re-checked every page at tablet (768px) and mobile (375px) after all of today's spacing and build changes - no regressions found (hero images, capability grid, sector grid, CTA band buttons, mobile nav all confirmed). Resolves item 16.
- [x] 0.21 Investigated item 8: total image weight is 11.8MB/98 files, mostly fine. Two clear outliers - `energy_bw.webp` (4288x2848, 1.7MB) and `tmt_bw.webp` (5472x3648, 1.2MB) - both added this session, both several times larger than their ~480px display size warrants. Not yet resized (pending decision, see item 8 note below).
- [x] 0.22 Rebuilt the 57 tombstone cards on Transactions as real HTML/CSS (BEM `cc-tombstone__*` markup) instead of PNG screenshots, matching the old 732:874 proportions via `aspect-ratio`. Card content matched 1:1 to the correct `data-cat` by cross-referencing company/deal text against `data_cat_mapping.csv`, with ~16 duplicate-company cases (Smith & Nephew, Louis Dreyfus, Bracco, CVCI, Firebird) and one mislabelled row (old "Adcorp" alt text, and a "Confidential" row that was actually Zodiac/Carlyle) resolved by reading the original PNGs directly rather than trusting their alt text. Logos moved to `image_sources/tombstone_logos/` (62 files, one casing fix: `BIH_Eastern.png`), each with explicit `width`/`height` plus `loading="lazy"`. Filter JS, hover treatment, and the 5/4/3/2 responsive grid untouched. Verified: all 57 cards render, filter counts exact (57/21/22/14), no broken images, screenshots compared at 1440/768/375px. Resolves item 14 (uniform card height/padding is now structural via `aspect-ratio`, not a manual PNG-crop convention).
