import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const events = defineCollection({
  loader: glob({ base: "./src/content/events", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string().min(1),
    summary: z.string().min(1),
    locale: z.enum(["en", "id", "en-sg", "ms-my"]),
    translationKey: z.string().min(1),
    start: z.coerce.date().optional(),
    end: z.coerce.date().optional(),
    timezone: z.string().optional(),
    status: z.enum(["draft", "published", "cancelled"]).default("draft"),
    venue: z.string().optional(),
    online: z.boolean().default(false),
    accessInformation: z.array(z.string()).default([]),
    registrationUrl: z.string().url().optional(),
    publishedAt: z.coerce.date().optional(),
    sourceUrl: z.string().url().optional(),
    sourceReviewedAt: z.coerce.date().optional()
  })
});

export const collections = { events };
