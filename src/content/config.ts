import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	type: "content",
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		date: z.date(),
		tags: z.array(z.string()),
		image: image().optional(),
		imageAlt: z.string().optional(),
	}),
});

export const collections = {
	blog: blogCollection,
};
