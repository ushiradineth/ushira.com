import { getCollection } from "astro:content";
import type { APIRoute } from "astro";

export const prerender = true;

const BLOG_TITLE = "Ushira Dineth Blog";
const BLOG_DESCRIPTION = "Updates on software engineering, infrastructure, and DevOps from Ushira Dineth.";

function escapeXml(value: string): string {
	return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

export const GET: APIRoute = async ({ site }) => {
	const siteUrl = site ?? new URL("https://ushira.com");
	const blogPosts = (await getCollection("blog"))
		.filter((post) => post.data.date && post.data.date.getTime() <= Date.now())
		.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

	const items = blogPosts
		.map((post) => {
			const postUrl = new URL(`/blog/${post.slug}/`, siteUrl).toString();
			const pubDate = post.data.date.toUTCString();
			const categories = post.data.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("");
			const description = post.data.description ? `<![CDATA[${post.data.description}]]>` : "";

			return `<item>
<title>${escapeXml(post.data.title)}</title>
<link>${postUrl}</link>
<guid>${postUrl}</guid>
<pubDate>${pubDate}</pubDate>
${categories}
<description>${description}</description>
</item>`;
		})
		.join("\n");

	const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
<channel>
<title>${BLOG_TITLE}</title>
<link>${new URL("/blog/", siteUrl).toString()}</link>
<description>${BLOG_DESCRIPTION}</description>
<language>en-US</language>
${items}
</channel>
</rss>`;

	return new Response(rssFeed, {
		status: 200,
		headers: {
			"Content-Type": "application/rss+xml; charset=utf-8",
			"Content-Disposition": "inline",
			"Cache-Control": "public, max-age=900",
		},
	});
};
