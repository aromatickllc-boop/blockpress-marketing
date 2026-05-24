---
title: "Why we banned em dashes from BlockPress's AI"
description: "Em dashes are a fingerprint of AI-written content. Here's why we banned them from BlockPress's draft generation, and the small thing it changed."
pubDate: 2026-06-07
author: "Rodney Gallagher"
tags: ["product", "ai", "writing"]
heroImage: "/blog/em-dashes-hero.webp"
---

There's a punctuation mark that has become a tell. When readers see it, even ones who can't articulate what they're noticing, they often think "this was written by AI."

That punctuation mark is the em dash. The long dash that interrupts a sentence, like this one, to add a parenthetical thought.

A few weeks after we launched BlockPress, we noticed that nearly every AI-generated draft was peppered with them. Three or four per paragraph. Sometimes more. Always in roughly the same construction: "The recipe (which is surprisingly simple) calls for..." but rendered with em dashes around the parenthetical clause.

We didn't notice at first because the writing read well in isolation. The em dashes are grammatically fine. But in volume, across hundreds of articles, they form a pattern. A pattern that screams AI.

So we banned them. This is the story of that small change.

## The pattern

Large language models, including the ones behind BlockPress's draft generation, are trained on a vast corpus of writing. That corpus includes a lot of professional writing where the em dash is used skillfully for emphasis and pause.

But LLMs don't just learn the use of em dashes. They learn that em dashes are a marker of sophisticated, edited prose. So when they're asked to write "in a professional tone" or "with depth," they over-apply the pattern. Every other sentence gets one. Multiple per paragraph. Way more than any human writer would naturally use.

The result is a fingerprint. Once you've seen it a few times, you can't unsee it. And readers who have been reading AI-generated content for the past few years have absorbed the pattern subconsciously, even if they can't name it.

This matters for Shopify blog posts specifically because trust is the entire conversion lever. A blog post on a Shopify store is doing two jobs: ranking on Google and convincing the reader that the brand behind the product knows what it's talking about. If the writing reads as AI-generated, the trust drops. The reader assumes the brand cut corners. The reader doesn't buy.

## The intervention

The fix has two parts:

**Part 1: Tell the AI not to use em dashes in the prompt.** We added an explicit rule to the draft-generation prompt that says, in essence, "Do not use em dashes anywhere in the output. Use commas, periods, parentheses, or colons instead. Restructure sentences if needed to avoid them."

This works most of the time. But LLMs have a strong gravitational pull toward patterns they've learned. Sometimes the model will simply ignore the instruction, especially when it's deep into generating a long article and the prompt has scrolled out of attention.

**Part 2: Post-process the output to strip any em dashes that slipped through.** After the AI returns the draft, we run a small replacement step:

- Em dash surrounded by spaces (the common construction): replaced with a comma plus space
- Bare em dash without surrounding spaces (rare): replaced with a hyphen

The result: even if the model emits an em dash, the reader never sees it.

## What we lost

Some sentences read marginally worse after the substitution. An em dash can do something a comma can't: it creates a longer, more emphatic pause. A really skilled human writer can use it to add rhythm.

But across hundreds of articles, that loss is invisible. What's visible is the gain: drafts that don't read as obviously AI-written. Readers stay longer. They trust the content more. They click the embedded product cards more.

We could have built a more sophisticated solution. Maybe a classifier that decided when an em dash was "earned" by the sentence structure. But for v1, the brute-force ban gave us 90% of the benefit at 5% of the engineering cost. And in writing infrastructure, that's almost always the right tradeoff.

## What this means for AI writing more generally

Em dashes are one fingerprint. There are others.

- Overuse of "delve" and "delving" (LLMs love these words)
- "It's important to note that..." as a transition
- "Furthermore" and "moreover" as paragraph openers
- Lists of three items that escalate ("not just X, not just Y, but Z")
- Excessive use of "essentially" and "fundamentally"
- Sentences that hedge constantly ("can often be," "may potentially")

Each one is a small tell. Together they're a strong signal.

If you're using AI to draft Shopify blog content (whether via [BlockPress](/blog/blockpress-walkthrough-20-minutes) or another tool) and you're not editing aggressively for these patterns, your reader engagement metrics will reflect it. Time on page will be shorter. Bounce rate will be higher. Conversions will lag.

The good news: a 5-minute editing pass that removes the obvious AI tells can take a draft from "obvious AI" to "indistinguishable from a thoughtful human writer." The editor matters more than the model.

## The brand voice question

Some BlockPress users will read this and ask: "What if I LIKE em dashes? What if they're part of my brand voice?"

For now, the ban is hard-coded. We're considering a per-shop setting to enable them for brands that have an editorial voice that earns them. If that matters to you, [send us a note](https://blockpress.app/contact) and we'll prioritize it.

In the meantime, if you really want em dashes in a specific post, you can always add them manually in the editor after the AI draft inserts. The ban is on AI generation, not on you.

## The point

Most of the work of building good AI writing infrastructure isn't choosing a better model. It's noticing the small patterns that signal "this is AI" and engineering them out, one at a time.

The em dash was one. There will be more.

If you're curious what BlockPress does to make AI drafts feel less like AI drafts, the [introducing post](/blog/introducing-blockpress) covers the product philosophy in detail. The em dash story is just the most concrete example.
