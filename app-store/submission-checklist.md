# App Store Submission Checklist

Work through these in order. Each one is a hard gate — if it's not green, the listing will bounce back from review.

## 1. Domain migration (one-time)

The App Store listing must point at your production domain, not the `*.vercel.app` preview URL. Two coordinated edits:

- [ ] **shopify.app.toml** — change `application_url` from `https://blockpress-beta.vercel.app` to `https://app.blockpress.app`
- [ ] **shopify.app.toml** — update the 3 entries in `redirect_urls`:
  - `https://app.blockpress.app/auth/callback`
  - `https://app.blockpress.app/auth/shopify/callback`
  - `https://app.blockpress.app/api/auth/callback`
- [ ] **Vercel env var (app project)** — set `SHOPIFY_APP_URL` to `https://app.blockpress.app`. Redeploy.
- [ ] **Locally:** run `shopify app deploy` to push the toml changes to Shopify. Confirm in Partners → App setup that the URLs now show the new domain.
- [ ] **Verify:** install the app on a fresh dev store and confirm the install flow completes successfully end-to-end on the new domain. If it fails here, the App Store review will catch it.

## 2. Webhook compliance

Run the Shopify CLI's webhook test against each route to confirm they 200 OK:

```bash
shopify app webhook trigger --topic=customers/data_request --address=https://app.blockpress.app/webhooks/customers/data_request
shopify app webhook trigger --topic=customers/redact --address=https://app.blockpress.app/webhooks/customers/redact
shopify app webhook trigger --topic=shop/redact --address=https://app.blockpress.app/webhooks/shop/redact
```

Each must respond `200`. Check the Vercel function logs to confirm the routes received them.

## 3. Billing (test mode first)

- [ ] In **Vercel env (app project)**, ensure `SHOPIFY_BILLING_TEST=true` is set on **Preview** but **NOT on Production**. Test billing keeps approval flows from charging real money during review.
- [ ] Open `/app/billing` on a fresh test install
- [ ] Click "Upgrade to Growth" → confirm at the Shopify approval page
- [ ] Land back on `/app/billing/callback` → green success banner appears
- [ ] Plan badge in the editor header reads `Growth · 0/100 AI`
- [ ] Run 1 AI generation → badge updates to `1/100`
- [ ] Downgrade to Free → confirm Shopify cancels the test sub, badge flips to `Free`

## 4. GDPR + data deletion

- [ ] `customers/data_request` route logs the request and returns 200
- [ ] `customers/redact` route logs and returns 200
- [ ] `shop/redact` route wipes the test shop's rows from every table:
  - Author, ArticleEvent, ArticleRevision, UserTemplate, AIUsageEvent, ShopPlan, Session
- [ ] Confirm in Postgres that the rows are gone

## 5. Listing assets ready

- [ ] App icon (1200×1200 PNG) — uploaded to Partners dashboard ✓
- [ ] App name, tagline, intro, detailed description, feature highlights — all from `listing-copy.md`
- [ ] 6-10 screenshots — captured per `screenshots-plan.md`
- [ ] Demo video — 2-3 min, uploaded to YouTube as unlisted, link copied
- [ ] Categories: Marketing → Content marketing (primary), Productivity (secondary)
- [ ] Search keywords filled in (from `listing-copy.md`)

## 6. Required URLs

- [ ] Privacy policy: `https://blockpress.app/privacy` — loads ✓
- [ ] Terms of service: `https://blockpress.app/terms` — loads ✓
- [ ] Support email: `support@blockpress.app` — forwarding configured ✓
- [ ] Pricing page: `https://blockpress.app/pricing` — loads ✓
- [ ] App URL: `https://app.blockpress.app` — loads (after migration step 1) ✓

## 7. Pricing entered in Partners

Under **Partners → App setup → Pricing → Add pricing plan**, add each of these as a recurring plan:

| Plan | Recurring USD | Trial | Description (≤120 chars) |
|---|---|---|---|
| Free | $0/mo | none | "Block editor, 10 AI generations/mo, 3 articles. No card required." |
| Growth | $19/mo | 7 days | "Unlimited articles, 100 AI gens, internal-link AI, social preview, version history." |
| Pro | $49/mo | 7 days | "Everything in Growth + Article Health, Performance analytics, Live device preview." |
| Agency | $129/mo | 14 days | "Everything in Pro + multi-author, API access, white-label option." |

Add the usage-based add-on:
- **Name:** "AI overage"
- **Pricing:** $0.05 per generation
- **Cap:** $50/mo

## 8. Last-mile QA

Do all of these against a fresh dev-store install on the production URL:

- [ ] Install completes, lands on `/app` (Posts dashboard)
- [ ] Create a new post via `/app/posts/new`, type something, see autosave green-tick at 10s
- [ ] AI Assistant modal opens, generates an outline successfully
- [ ] SEO score panel renders + updates as you type
- [ ] Social Share Preview tab shows 4 platform cards
- [ ] Internal Link Suggestions panel works (needs at least 2 existing articles for the catalog)
- [ ] Save the post → published article body includes the tracking pixel
- [ ] Open the published article on the storefront, scroll, close tab
- [ ] Within 60s, refresh `/app/analytics` → see at least 1 view + 1 exit event
- [ ] `/app/health` shows the new article in the catalog
- [ ] `/app/billing` shows the current plan + usage meter
- [ ] PlanBadge in editor header reflects current state

## 9. Submit

- [ ] Partners → BlockPress → **Submit for review**
- [ ] Address review feedback (expect 1-2 rounds, typically 2-4 weeks total)

## 10. Post-launch (first week)

- [ ] Announce on your personal social channels — LinkedIn, X
- [ ] Submit to relevant Shopify-app newsletters (e.g. AppNudger, Shopify App Store Daily)
- [ ] Encourage your first 5-10 installs to leave a review (no incentive — just ask)
- [ ] Watch the analytics + Article Health pages of your OWN Aromatick blog to dogfood
- [ ] Respond to every support ticket within 24h, even simple ones — review score depends on this
