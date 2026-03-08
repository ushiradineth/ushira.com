import { getCollection } from "astro:content";

export interface CommandItem {
	id: string;
	title: string;
	description: string;
	href: string;
	group: "Pages" | "Blog" | "Notes";
	keywords: string[];
}

const staticCommands: CommandItem[] = [
	{
		id: "page-home",
		title: "Home",
		description: "Main page and quick links",
		href: "/",
		group: "Pages",
		keywords: ["start", "landing", "index"],
	},
	{
		id: "page-blog",
		title: "Blog",
		description: "Posts, notes, and logs",
		href: "/blog/",
		group: "Pages",
		keywords: ["articles", "writing", "posts"],
	},
	{
		id: "page-notes",
		title: "Notes",
		description: "Personal preferences and principles",
		href: "/notes/",
		group: "Pages",
		keywords: ["thoughts", "principles"],
	},
	{
		id: "page-projects",
		title: "Projects",
		description: "Selected work and builds",
		href: "/projects/",
		group: "Pages",
		keywords: ["portfolio", "work"],
	},
	{
		id: "page-resume",
		title: "Resume",
		description: "Career summary and downloadable CV",
		href: "/resume/",
		group: "Pages",
		keywords: ["cv", "experience", "profile"],
	},
];

export async function getCommandIndex(): Promise<CommandItem[]> {
	const [blogEntries, noteEntries] = await Promise.all([getCollection("blog"), getCollection("notes")]);

	const blogCommands: CommandItem[] = blogEntries.map((entry) => ({
		id: `blog-${entry.slug}`,
		title: entry.data.title,
		description: entry.data.description,
		href: `/blog/${entry.slug}/`,
		group: "Blog",
		keywords: ["blog", ...(entry.data.tags ?? [])],
	}));

	const noteCommands: CommandItem[] = noteEntries.map((entry) => ({
		id: `note-${entry.slug}`,
		title: entry.data.title,
		description: entry.data.description,
		href: `/notes/${entry.slug}/`,
		group: "Notes",
		keywords: ["note"],
	}));

	return [...staticCommands, ...blogCommands, ...noteCommands];
}
