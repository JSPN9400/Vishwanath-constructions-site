# Vishwanath Construction Website

Static website for **Vishwanath Construction (Patna, Bihar)**.

## Pages
- `index.html`: Main website (English/Hindi toggle, offers/projects/reviews loaded from localStorage).
- `quotation/index.html`: Quotation generator tool.
- `admin.html`: Homepage admin panel (saves content to browser localStorage). This page is `noindex`.
- `blog/index.html`: Blog article for local SEO.

## SEO Setup (implemented)
- Canonical URLs point to `https://www.vishwanathconstruction.in/`
- `robots.txt` + `sitemap.xml` included at repo root
- JSON-LD Schema (`Organization`, `LocalBusiness`, `WebSite`, `WebPage`) in `index.html`
- Google reviews buttons (See all / Add review) configurable via `admin.html`

## How to update content
Open `admin.html` in the browser and update:
- Hero text, office details, WhatsApp, map embed
- Social links (Instagram/Facebook/etc.)
- Google review links (See all / Add)
- Offers / Projects / Reviews cards

Changes are stored in **this browser’s localStorage**.

