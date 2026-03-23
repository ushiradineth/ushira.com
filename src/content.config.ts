import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogCollection = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/blog",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		tags: z.array(z.string()),
	}),
});

const notesCollection = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/notes",
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		icon: z.string(),
		order: z.number(),
	}),
});

export const collections = {
	blog: blogCollection,
	notes: notesCollection,
};
