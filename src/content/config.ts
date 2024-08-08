import { defineCollection, z } from "astro:content";

const thoughts = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

const dev = defineCollection({
    type: "content",
    // Type-check frontmatter using a schema
    schema: z.object({
        title: z.string(),
        description: z.string(),
        // Transform string to Date object
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
    }),
});

export const collections = { thoughts, dev };
