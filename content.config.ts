import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    snip: defineCollection({
      type: "page",
      source: "snip/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        author: z.string(),
        category: z.string(),
        tags: z.array(z.string()).default([]),
      }),
    }),
  },
});
