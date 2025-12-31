import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		tags: z.array(z.string()),
	}),
});

const notesCollection = defineCollection({
	type: "content",
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
