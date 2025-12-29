import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./astro.config.mjs"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				text: "rgb(var(--text))",
				background: "rgb(var(--background))",
				primary: "rgb(var(--primary))",
				accent: {
					DEFAULT: "rgb(var(--accent))",
					contrast: "rgb(var(--accent-contrast))",
				},
				muted: "rgb(var(--muted))",
				border: "rgb(var(--border))",
			},
			fontFamily: {
				sans: ['"Instrument Sans Variable"', ...defaultTheme.fontFamily.sans],
				mono: ['"Geist Mono Variable"', ...defaultTheme.fontFamily.mono],
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						// Color system
						"--tw-prose-body": theme("colors.text"),
						"--tw-prose-headings": theme("colors.text"),
						"--tw-prose-links": theme("colors.primary"),
						"--tw-prose-bold": theme("colors.text"),
						"--tw-prose-counters": theme("colors.muted"),
						"--tw-prose-bullets": theme("colors.muted"),
						"--tw-prose-hr": theme("colors.border"),
						"--tw-prose-quotes": theme("colors.text"),
						"--tw-prose-quote-borders": theme("colors.border"),
						"--tw-prose-captions": theme("colors.muted"),
						"--tw-prose-code": theme("colors.text"),
						"--tw-prose-pre-code": theme("colors.text"),
						"--tw-prose-pre-bg": "transparent",
						"--tw-prose-th-borders": theme("colors.border"),
						"--tw-prose-td-borders": theme("colors.border"),

						// Font families
						fontFamily: theme("fontFamily.sans").join(", "),

						// Essential overrides only
						maxWidth: "none",

						// Remove all vertical margins - use gap instead
						"> *": {
							marginTop: "0",
							marginBottom: "0",
						},

						// Tighten spacing between intro paragraphs and their lists
						"p + ul, p + ol": {
							marginTop: "-0.75rem",
						},

						// Remove code backticks
						"code::before": { content: '""' },
						"code::after": { content: '""' },

						// Inline code styling
						":not(pre) > code": {
							fontFamily: theme("fontFamily.mono").join(", "),
							fontSize: "0.875em",
							fontWeight: "500",
							padding: "0.125rem 0.375rem",
							borderRadius: "0.25rem",
							backgroundColor: "rgb(var(--muted) / 0.5)",
							border: "1px solid rgb(var(--border) / 0.5)",
						},
					},
				},
			}),
		},
	},
	plugins: [typography],
};
