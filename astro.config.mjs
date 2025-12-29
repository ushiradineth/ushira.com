import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { h } from "hastscript";

const rehypeConfig = {
	syntaxHighlight: false,
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
		[
			rehypePrettyCode,
			{
				theme: {
					dark: "github-dark-dimmed",
					light: "github-light",
				},
				transformers: [
					transformerCopyButton({
						visibility: "hover",
						feedbackDuration: 2_500,
					}),
				],
			},
		],
	],
};

export default defineConfig({
	integrations: [tailwind(), sitemap(), robotsTxt(), icon(), mdx(rehypeConfig)],
	markdown: rehypeConfig,
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
