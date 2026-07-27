# AMAZINA Studios — Website

A single-page marketing site for AMAZINA Studios (amazinastudios.com), built as
plain HTML/CSS/JS — no framework, no build step, so it deploys on Vercel with
zero configuration.

```
amazina-site/
├── index.html      → all page content and structure
├── styles.css      → design system (colors, type, layout)
├── script.js       → nav toggle, footer year, newsletter form handler
├── assets/
│   ├── logo.png        (1024×1024 — full-res, kept for future use)
│   ├── logo-512.png     (hero badge)
│   ├── logo-256.png     (header + footer)
│   └── favicon.png      (64×64 browser tab icon)
└── README.md
```

## 1. Put it on GitHub

From this folder:

```bash
git init
git add .
git commit -m "Initial AMAZINA Studios site"
git branch -M main
git remote add origin https://github.com/<your-username>/amazina-studios.git
git push -u origin main
```

(Create the empty `amazina-studios` repo on GitHub first — no README/license
needed there, since this folder already has one.)

## 2. Connect Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import the
   `amazina-studios` GitHub repo.
2. Framework Preset: choose **Other** (or leave on Auto-detect — Vercel
   recognizes a plain static site automatically). No build command, no
   output directory override needed.
3. Click **Deploy**. You'll get a `*.vercel.app` URL within a minute.

## 3. Point amazinastudios.com at it

In the Vercel project → **Settings → Domains**, add `amazinastudios.com`
(and `www.amazinastudios.com`). Vercel will show you the DNS records to add
at your domain registrar:
- Usually an **A record** for the root domain pointing to `76.76.21.21`
- A **CNAME** for `www` pointing to `cname.vercel-dns.com`

DNS can take anywhere from a few minutes to a few hours to propagate.

## Before you launch — things to wire up

- **Newsletter form** (`#joinForm` in `script.js`): currently just logs to
  the console. Connect it to ConvertKit, Mailchimp, or a service like
  Formspree by pointing the form at their endpoint or API.
- **YouTube link / embed**: the "Now Screening" section and footer both link
  to a placeholder `youtube.com` — swap in your channel URL, and optionally
  replace the placeholder video frame with a real `<iframe>` embed of your
  latest short.
- **Instagram / Facebook links**: same placeholders in the footer.
- **Favicon**: generated from the logo at 64×64 — swap for a sharper custom
  favicon later if you want extra polish at that tiny size.

## Local preview

Any static file server works, e.g.:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
