import { OGImageRoute } from "astro-og-canvas";
import { getCollection, type CollectionEntry } from "astro:content";

const pages = {
	index: {
		title: "me",
	},
	projects: {
		title: "projects",
	},
	work: {
		title: "work",
	},
	blog: {
		title: "blog",
	},
	notes: {
		title: "notes",
	},
};

const blogPosts: CollectionEntry<"blog">[] = await getCollection("blog");
const notePosts: CollectionEntry<"notes">[] = await getCollection("notes");

const blogs = Object.fromEntries(blogPosts.map(({ slug, data }) => [`blog/${slug}`, { title: data.title, description: data.description }]));
const notes = Object.fromEntries(
	notePosts.map(({ slug, data }) => [`notes/${slug}`, { title: data.title, description: data.description }]),
);

export const { getStaticPaths, GET } = OGImageRoute({
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
			path: "./src/images/og-bg.png",
		},
		fonts: ["https://cdn.jsdelivr.net/fontsource/fonts/instrument-sans:vf@latest/latin-wght-normal.woff2"],
		font: {
			title: {
				color: [0, 0, 0],
				families: ["Instrument Sans Variable"],
				size: 80,
			},
			description: {
				color: [0, 0, 0],
				families: ["Instrument Sans Variable"],
				size: 30,
			},
		},
	}),
});
