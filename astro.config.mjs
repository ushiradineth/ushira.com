import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { h } from "hastscript";

const markdownConfig = {
	rehypePlugins: [
		rehypeSlug,
		[
			rehypeAutolinkHeadings,
			{
				behavior: "append",
				properties: {
					class:
						"anchor-link opacity-0 ml-2 group-hover:opacity-100 text-muted hover:text-primary transition focus:outline-none focus:opacity-100 focus-visible:ring focus-visible:ring-primary",
					ariaLabel: "Link to heading",
					tabIndex: 0,
				},
				content: h("span", { "data-heading-anchor": true }, "#"),
			},
		],
	],
	shikiConfig: {
		themes: {
			light: "github-light",
			dark: "github-dark-high-contrast",
		},
	},
};

export default defineConfig({
	integrations: [tailwind(), sitemap(), robotsTxt(), icon(), mdx(markdownConfig)],
	markdown: markdownConfig,
	output: "static",
	site: "https://ushira.com",
	adapter: vercel(),
	vite: {
		server: {
			watch: {
				ignored: ["**/.conform.*", "**/.conform.*.md"],
			},
		},
	},
});
