// Astro content collections. Defines the schema for blog posts so each
// post's frontmatter is type-checked at build time and the rendered
// listing + detail pages can rely on shape. Add new collections (e.g.,
// case studies, docs) below the blog one.

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default("BlockPress Team"),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Drafts skip the public listing + are excluded from sitemaps/RSS.
    // Useful for staging a post before publish.
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
