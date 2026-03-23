import { OGImageRoute } from "astro-og-canvas";
import { getCollection, type CollectionEntry } from "astro:content";
import { ogTheme } from "../../lib/data/ogTheme";

const pages = {
	index: {
		title: "me",
		description: "Ushira Dineth",
	},
	projects: {
		title: "projects",
		description: "Selected work and builds",
	},
	blog: {
		title: "blog",
		description: "Posts, notes, and logs",
	},
	notes: {
		title: "notes",
		description: "Preferences and principles",
	},
};

const blogPosts: CollectionEntry<"blog">[] = await getCollection("blog");
const notePosts: CollectionEntry<"notes">[] = await getCollection("notes");

const blogs = Object.fromEntries(blogPosts.map(({ id, data }) => [`blog/${id}`, { title: data.title, description: data.description }]));
const notes = Object.fromEntries(notePosts.map(({ id, data }) => [`notes/${id}`, { title: data.title, description: data.description }]));

export const { getStaticPaths, GET } = await OGImageRoute({
	param: "route",

	pages: {
		...pages,
		...blogs,
		...notes,
	},

	getImageOptions: (_, page) => ({
		title: page.title,
		description: page.description,
		bgImage: {
			path: ogTheme.backgroundImagePath,
		},
		fonts: [ogTheme.fontUrl],
		font: {
			title: {
				color: ogTheme.palette.foreground,
				families: [ogTheme.fontFamily],
				size: ogTheme.titleSize,
			},
			description: {
				color: ogTheme.palette.foreground,
				families: [ogTheme.fontFamily],
				size: ogTheme.descriptionSize,
			},
		},
	}),
});
