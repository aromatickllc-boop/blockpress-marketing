// Daily-rebuild endpoint hit by Vercel Cron. Triggers a fresh production
// build of the marketing site so scheduled blog posts (those with
// pubDate <= today, see src/pages/blog/index.astro + [...slug].astro)
// become publicly accessible on their scheduled date without any manual
// intervention.
//
// One-time setup (do this in the Vercel dashboard):
//   1. Project → Settings → Git → Deploy Hooks → Create Hook
//   2. Name: "Daily rebuild", Branch: "main"
//   3. Copy the URL
//   4. Project → Settings → Environment Variables → Add
//      Name: DEPLOY_HOOK_URL, Value: (paste the URL), Environment: Production
//   5. Trigger one deploy so the env var loads
//
// After that the cron in vercel.json fires this every day at 00:00 UTC and
// the site rebuilds. The job is idempotent — if no posts have new pubDates,
// the rebuild produces the same output.

export default async function handler(req, res) {
  const hook = process.env.DEPLOY_HOOK_URL;
  if (!hook) {
    res.status(500).json({
      ok: false,
      error: "DEPLOY_HOOK_URL env var not set. See setup notes in api/rebuild.js.",
    });
    return;
  }

  try {
    const r = await fetch(hook, { method: "POST" });
    res.status(200).json({
      ok: true,
      triggered: r.ok,
      status: r.status,
      message: r.ok
        ? "Deploy triggered. Scheduled posts with pubDate <= today will publish on the next build."
        : "Deploy hook returned a non-OK status. Check Vercel's Deployments tab.",
    });
  } catch (e) {
    res.status(500).json({ ok: false, error: String(e) });
  }
}
