# Charcot Capital website revamp — working to-do list

Status as at 6 June 2026. Grouped by theme, numbered for tracking. Priority: P0 before launch, P1 shortly after, P2 polish.

---

## 0. Done in this pass (code-level, already applied to V3)

- [x] 0.1 Aligned the "Who we work with" card feet so the three "Discuss" links sit on one baseline (index.html).
- [x] 0.2 Removed the duplicated, off-theme bridge image on About; "What sets us apart" now uses the compass motif (about.html).
- [x] 0.3 Standardised About section vertical padding to a single 6.5rem rhythm (about.html).
- [x] 0.4 Gave Thorsten Jabas an "Areas of focus" block so all four team bios carry equal weight (team.html). Replace with real selected transactions when available.
- [x] 0.5 Added Open Graph / Twitter tags to privacy.html for head consistency.
- [x] 0.6 Confirmed the transaction figures now reconcile (56+ throughout; referral 70%); no "50 mandates" remaining.

---

## 1. Pre-launch blockers (P0)

1. Verify the contact form actually delivers. It posts to `https://formspree.io/info@charcotcapital.com`, the deprecated email-in-URL format that usually fails to the error fallback. Create a Formspree form (or a serverless endpoint), use the `/f/{id}` URL, and send one live end-to-end test.
2. State the regulatory position in the footer. The line currently shows company registration only. Add FCA status and FRN if authorised or an appointed representative, or confirm in writing that none is required.
3. Confirm office reality. The contact page shows London and Paris; the team narrative references a Singapore presence (2011, since relocated). Decide the current office list and make every page agree.

---

## 2. Conversion and trust (P1)

4. Add a clickable firm telephone number (contact page and footer). Senior clients expect a direct line; only a form phone field exists today.
5. Consider partner-level contact or a scheduling link, to match the "speak directly with the partners" promise.
6. Make the referral statistic more prominent near the primary calls to action.

---

## 3. Performance and build (P1)

7. Replace the Tailwind CDN runtime with a compiled static CSS file (build step). Removes the render-blocking script and the production warning.
8. Optimise all photography: convert to WebP/AVIF, resize to displayed dimensions, and compress. Priority offenders: About (~6 MB), office PNGs (~2 MB each), leadership portraits, decorative compass/bridge art, the 2.2 MB transactions map SVG.
9. Add width and height (or aspect-ratio) to all 104 images to remove layout shift.
10. Lazy-load below-the-fold images beyond the tombstones.
11. Use the Vercel image optimisation pipeline once images are rationalised.

---

## 4. Visual consistency (P1)

12. Unify the hero system across all pages: one architecture (e.g. left text, right motif), one fixed height, one eyebrow style. Today there are five different hero treatments (photographic, single-object, tinted, and two with no image at all on Contact and Careers).
13. Balance the Services capability sections: align the narrative column and the Scope list to a shared top baseline and even out the large vertical voids; apply one vertical spacing scale site-wide.
14. Normalise tombstone cards: uniform logo max-height, equal padding, single greyscale/opacity treatment, consistent card height, and no orphan cells in the final row of each group. (Asset-level: the logos are baked into the tombstone PNGs.)
15. Give Contact and Careers heroes a consistent visual motif so they do not read as bare next to the other pages.
16. Re-check all spacing fixes at tablet and mobile breakpoints.

---

## 5. Image language (P1/P2)

17. Commit to one coherent image system and one grade. Pull every photograph to a single cool, desaturated tone at consistent contrast and opacity; the greyscale partner portraits are the right reference.
18. Replace the AI/stock-looking sector tiles with a uniform duotone treatment or a more ownable motif.
19. Replace stock cityscapes (London, Paris) with real photography of the actual buildings; removes the iStock watermark dependency.
20. Remove remaining watermarked stock images before finalising (noted as in hand).
21. Re-theme or remove the remaining bridge image on About ("Why it matters") so the page is fully on the nautical/archival theme.

---

## 6. Proof and credibility (P2, competitive gap)

22. Launch a light Insights / News section (start with three or four pieces). Every credible peer (Rothschild, Lazard, Evercore, Houlihan Lokey, Perella Weinberg, Ondra) runs one; Charcot has none. Highest-value strategic addition.
23. Enrich the track record: add deal role and, where disclosable, value; add two or three short case studies.
24. Replace synthetic-looking imagery with authentic photography wherever trust matters (portraits already improved).
25. Add partner-level contact or LinkedIn links on the team page.

---

## 7. SEO and structured data (P2)

26. Add Organization / FinancialService and Person JSON-LD structured data.
27. Sharpen remaining page titles with geography and intent keywords where useful.
28. Keep robots.txt and sitemap.xml in sync as pages (e.g. Insights) are added.

---

## 8. Content accuracy (ongoing)

29. Lock one canonical set of figures (transactions, countries, continents, referral %) in a single source and reuse; re-check after any copy edit.
30. Keep the "independent advisory from 2002, firm co-founded 2008" wording consistent wherever dates appear.
