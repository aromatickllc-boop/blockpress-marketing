// One-shot script: download 4 Higgsfield-generated hero images, convert to
// WebP at 85% quality, save into public/blog/. Standalone — run via
// `node scripts/fetch-blog-heroes.mjs`. The remote URLs are baked in below
// because they're one-time generation links; re-running with the same URLs
// is idempotent (just overwrites the local files).
//
// Resolution note: source PNGs are 1376x768. We resize to 1920x1080 on
// download since hero images render up to the full content width on desktop.

import { mkdir, writeFile } from "node:fs/promises";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, "..", "public", "blog");

const ASSETS = [
  {
    name: "seo-checklist-hero.webp",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3BIzwlnmZsDYPtVr6rJ9Vz4b7by/hf_20260524_034429_a87d75e8-de29-4c7f-a5ab-606971a23ba9.png",
  },
  {
    name: "walkthrough-hero.webp",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3BIzwlnmZsDYPtVr6rJ9Vz4b7by/hf_20260524_034431_31f9349a-589b-4e99-8c8e-df113a2ed200.png",
  },
  {
    name: "em-dashes-hero.webp",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3BIzwlnmZsDYPtVr6rJ9Vz4b7by/hf_20260524_034435_1a89c149-ac4d-455a-90f5-309fc0b76dc4.png",
  },
  {
    name: "internal-linking-hero.webp",
    url: "https://d8j0ntlcm91z4.cloudfront.net/user_3BIzwlnmZsDYPtVr6rJ9Vz4b7by/hf_20260524_034439_4c543ff4-5eb9-440c-a0f7-044cb194bbfd.png",
  },
];

await mkdir(OUT_DIR, { recursive: true });

for (const a of ASSETS) {
  const res = await fetch(a.url);
  if (!res.ok) {
    console.error(`[fetch] ${a.name}: HTTP ${res.status}`);
    process.exit(1);
  }
  const buf = Buffer.from(await res.arrayBuffer());
  const out = resolve(OUT_DIR, a.name);
  await sharp(buf)
    .resize({ width: 1920, height: 1080, fit: "cover" })
    .webp({ quality: 85 })
    .toFile(out);
  const stat = await sharp(out).metadata();
  console.log(`[ok] ${a.name} (${stat.width}x${stat.height}, ${(buf.byteLength / 1024).toFixed(0)} KiB src)`);
}

console.log(`\nAll heroes saved to: ${OUT_DIR}`);
