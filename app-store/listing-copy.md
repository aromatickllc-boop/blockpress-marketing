# Shopify App Store — Listing Copy

All the text fields you'll paste into the Partners dashboard when submitting BlockPress for review.

Field character limits noted next to each section so you know what fits.

---

## App name
**Field max: 30 chars**

```
BlockPress
```

(10 chars)

---

## App developer
**Field max: 30 chars**

```
BlockPress
```

(Or your legal entity name if you have a registered LLC — Shopify shows this on the listing as the developer.)

---

## Tagline
**Field max: 100 chars. Shown directly under the app name in App Store search results.**

```
The AI-native blog editor for Shopify. Write SEO-ready posts in 20 minutes.
```

(75 chars)

### Alternates (A/B test these later via app listing experiments):

```
AI-powered Shopify blog editor with built-in SEO scoring and analytics.
```

```
Write better blog posts faster. AI drafting, SEO scoring, and a health dashboard for your catalog.
```

```
Stop writing blog posts the hard way. AI assistant + SEO scoring built for Shopify.
```

---

## Introduction
**Field max: 500 chars. The pitch shown above the screenshots on the App Store page.**

```
BlockPress is the AI-native blog editor for Shopify. Outline, draft, rewrite, and optimize articles with Claude built in — without leaving your Shopify Admin.

Real-time SEO + UX scoring as you write. AI internal-link suggestions that scan your entire blog catalog. A catalog-wide health dashboard. Autosave + version history. Live device preview. Built for merchants who want their blog to actually drive revenue.

Free plan available. Cancel anytime.
```

(485 chars)

---

## App details / detailed description
**Field max: ~2500 chars. The long-form pitch with sections and feature highlights.**

```
BlockPress is everything Bloggle and DropInBlog do, plus the AI they don't.

Built for Shopify merchants who treat their blog like a real growth channel — not a checkbox to tick.

━━━━━━━━━━━━━━━━━━━━━━

🤖 AI ASSISTANT (POWERED BY CLAUDE)

• Outline generator — Topic + focus keyword turns into a structured H2/H3 outline in seconds
• Full-draft writer — 1500-word articles in your brand voice, with SEO keyword density baked in
• Inline rewriter — Highlight any paragraph, get 5 tone variations
• SEO title suggestions — Two candidates per click, both in Google's 60-70 char display window
• Meta description generator
• AI alt-text from image (vision-powered)
• Internal-link suggestions that scan your entire blog catalog

━━━━━━━━━━━━━━━━━━━━━━

🎯 SEO + UX SCORING

• Real-time grading as you write — 15+ SEO checks, 10+ UX checks
• Focus keyword tracking across title, intro, H2s, density, slug, meta
• UX scorer covers readability, conversion opportunities, time-to-read affordances
• Article Health dashboard — catalog-wide audit with red/yellow/green status per article
• Performance analytics — pageviews, scroll depth, time on page, all tied back into the editor

━━━━━━━━━━━━━━━━━━━━━━

🧱 BLOCK EDITOR

• 20+ block types: paragraphs, headings, lists, quotes, images, galleries, video, tables, FAQs, TOCs, dividers, product cards, product sliders, author bios, Klaviyo signup, related posts, embedded code, social share, voice-over, and more
• Drag-drop reordering with bulk actions
• Structured comparison-table styling baked in
• FAQ block auto-injects FAQPage JSON-LD for rich-result eligibility
• Standalone author pages auto-created at /pages/author-{slug}

━━━━━━━━━━━━━━━━━━━━━━

⏱ WORKFLOW

• Autosave every 10 seconds + full version history
• Save any article layout as a reusable template
• Live device preview — desktop / tablet / mobile inside the editor
• Slug-change auto-redirect — 301s created automatically when you rename articles
• Social share preview — see FB / IG / X / LinkedIn cards as you type

━━━━━━━━━━━━━━━━━━━━━━

PRICING

• Free — 10 AI generations/mo, 3 articles published
• Growth — $19/mo, 100 AI gens, unlimited articles, internal-link AI, social preview, version history
• Pro — $49/mo, 400 AI gens, + Article Health dashboard, Performance analytics, Live Preview
• Agency — $129/mo, 2,000 AI gens, multi-author, API access, white-label

7-day trial on all paid plans. Cancel anytime.
```

---

## Feature highlights (bullet list)
**Shopify shows 4-6 highlight bullets on the listing. Pick the most differentiating.**

```
✨  AI-powered drafting, rewriting, and SEO optimization built on Claude
🎯  Real-time SEO + UX scoring as you write — actionable checklist, not just a number
🔗  AI internal-link suggestions that scan your entire blog catalog
🩺  Catalog-wide article health dashboard — prioritized to-do list for old posts
📊  On-page performance analytics with no setup — pageviews, scroll depth, time on page
⏱  Autosave every 10 seconds + full version history — never lose work
```

---

## Categories

Primary: **Marketing — Content marketing**
Secondary: **Productivity — Workflow automation**

---

## Search keywords / tags

(Shopify's listing search ranks on these — pick the queries you want to win.)

```
blog editor
ai blog writer
seo content
blog seo
content marketing
blog post generator
ai content
article writer
shopify blog
blog optimization
content audit
seo blog
ai writing
content scheduler
blog analytics
seo audit
```

---

## App pricing model

Public-distribution apps must list pricing accurately on the App Store. Fill these in under Partners → App setup → Pricing:

| Plan | Recurring | Trial | Notes |
|---|---|---|---|
| Free | $0 / month | n/a | "Block editor, 10 AI generations/mo, 3 articles" |
| Growth | $19 / month | 7 days | "Unlimited articles, 100 AI gens, social preview, internal-link AI, version history" |
| Pro | $49 / month | 7 days | "Everything in Growth + Article Health, Performance, Live Preview" |
| Agency | $129 / month | 14 days | "Everything in Pro + multi-author, API, white-label" |

Usage-based add-on (auto-billed per generation past included quota):
- **$0.05 / extra AI generation**, capped at **$50/mo** per shop

---

## Required URLs

| Field | URL |
|---|---|
| App URL | `https://app.blockpress.app` (after migration — currently `https://blockpress-beta.vercel.app`) |
| Privacy policy | `https://blockpress.app/privacy` |
| Terms of service | `https://blockpress.app/terms` |
| Support contact | `support@blockpress.app` (or web form on `/contact`) |
| Onboarding URL | (Shopify auto-handles via OAuth flow) |
| Pricing URL | `https://blockpress.app/pricing` |

---

## Support details

| Field | Value |
|---|---|
| Email | `support@blockpress.app` |
| Response SLA | 24 hours, Mon-Fri |
| FAQ / Docs | (Optional v1 — link to /features or build a /docs route later) |

---

## Languages supported

For v1: **English only.** Add additional locales as you translate.

---

## API access scopes used (must list explicitly on listing)

| Scope | Why we need it |
|---|---|
| `write_content` | Create / edit / publish blog articles, manage blogs, write article metafields |
| `write_files` | Upload images attached to articles via the editor |
| `read_products` | Render product picker for Product Card + Product Slider blocks |
| `read_themes` | Detect theme tokens for in-editor preview that approximates storefront styling |

---

## Mandatory compliance webhooks

Already implemented in the app at:

| Webhook | Route |
|---|---|
| `app/uninstalled` | `/webhooks/app/uninstalled` |
| `app/scopes_update` | `/webhooks/app/scopes_update` |
| `customers/data_request` | `/webhooks/customers/data_request` |
| `customers/redact` | `/webhooks/customers/redact` |
| `shop/redact` | `/webhooks/shop/redact` |
