# NorthPaw marketing site (static)

Landing page for **northpaw.nextstepsbeyond.online**: validation, email capture, and a short survey. Pure HTML / CSS / JS, ready for **Cloudflare Pages**.

## Deploy on Cloudflare Pages

1. In [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → Connect your Git repository.
2. **Root directory / build settings:**
   - If the Git repo root is this monorepo: set **Root directory** (or **Build output directory**, depending on UI) to `northpaw_subdomain`, **Framework preset**: None, **Build command**: leave empty.
   - If the Pages project is **only** this folder (subtree or separate repo): **Build command**: empty, **Build output directory**: `/` or `.`
3. **Custom domain:** add `northpaw.nextstepsbeyond.online` in Pages → Custom domains and follow DNS (usually CNAME to `*.pages.dev`).
4. After first deploy, confirm `https://northpaw.nextstepsbeyond.online/` loads and that `robots.txt` and `sitemap.xml` are reachable.

## Where to edit copy

- All page copy lives in [`index.html`](index.html). Search for `<!-- ==========` section comments to jump between blocks.

## Where to drop real screenshots

- **Hero:** [`index.html`](index.html): the hero uses `assets/hero-app.png` inside `.hero-mock`; swap the `src` (and dimensions) when you update the screenshot.
- **Product preview:** three `.preview-shot` blocks with images under [`assets/`](assets/).
- See [`assets/README.md`](assets/README.md) for a file checklist.

## Where to wire forms later

1. **Waitlist:** [`index.html`](index.html) `<form id="waitlist-form">`. Today: `action="#"`.  
   - **Formspree / Getform:** set `action="https://formspree.io/f/YOUR_ID"` and `method="POST"`. Align `name="email"` / `name="first_name"` with their docs.
   - **MailerLite / ConvertKit / Beehiiv:** often a hosted form URL or embed; you may POST to their endpoint or use their generated HTML snippet inside the section.
   - **Cloudflare Worker:** `action` pointing to your worker, or keep `action="#"` and use `fetch()` in [`script.js`](script.js) (remove `preventDefault` once wired).

2. **Survey:** Hosted on [Tally](https://tally.so/r/lb7Mxp). All survey CTAs in [`index.html`](index.html) use `target="_blank"` and `rel="noopener noreferrer"`; search for `tally.so/r/lb7Mxp` to update the link everywhere.

3. **Client-side:** [`script.js`](script.js) only smooth-scrolls in-page `#` links.

## How to change metadata

- Open [`index.html`](index.html) `<head>`: `<title>`, `<meta name="description">`, `<link rel="canonical">`, Open Graph (`og:*`), Twitter (`twitter:*`).
- **OG image:** replace [`assets/og-northpaw.png`](assets/og-northpaw.png) with a branded **1200×630** image; keep the same filename or update `og:image` / `twitter:image` URLs to match.

## Favicon

- Favicons: PNGs under [`assets/`](assets/) plus [`favicon.ico`](favicon.ico) next to [`index.html`](index.html) (PNG bytes for default favicon requests). [`index.html`](index.html) uses **paths relative to the HTML file** (`assets/...`, `favicon.ico`) so images and icons work when you open the file locally (`file://`) and when deployed. Bump `?v=` in those links when the art changes (favicon caching). Regenerate sizes from [`assets/brand/northpaw-mark-transparent.png`](assets/brand/northpaw-mark-transparent.png) with `sips`, then `cp assets/favicon.png favicon.ico` if you replace the mark.

## Swapping survey / email provider (notes)

- **CORS:** browser `fetch()` to a third-party API may be blocked; hosted form `action` POSTs or a same-origin Worker proxy are common fixes.
- **Spam:** add honeypot or Turnstile later if needed (out of scope for this static MVP).
- **GDPR / privacy:** update footer Privacy link when you publish a policy.

## Local preview

From this directory:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.
