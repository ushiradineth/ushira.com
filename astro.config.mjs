import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import { transformerCopyButton } from "@rehype-pretty/transformers";

const rehypeConfig = {
	syntaxHighlight: false,
	rehypePlugins: [
		rehypeSlug,
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
	integrations: [tailwind(), sitemap(), robotsTxt(), icon()],
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
