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

						// Readability improvements
						maxWidth: "70ch", // Optimal line length for reading
						lineHeight: "1.75", // Better readability
						fontSize: "1rem",

						// Remove all vertical margins - use gap instead
						"> *": {
							marginTop: "0",
							marginBottom: "0",
						},

						// Paragraph styling
						p: {
							lineHeight: "1.75",
							fontSize: "1rem",
						},

						// Heading hierarchy with better sizing and weight
						h1: {
							fontSize: "2.25rem",
							fontWeight: "700",
							lineHeight: "1.2",
							letterSpacing: "-0.025em",
						},
						h2: {
							fontSize: "1.875rem",
							fontWeight: "700",
							lineHeight: "1.3",
							letterSpacing: "-0.025em",
						},
						h3: {
							fontSize: "1.5rem",
							fontWeight: "600",
							lineHeight: "1.4",
							letterSpacing: "-0.015em",
						},
						h4: {
							fontSize: "1.25rem",
							fontWeight: "600",
							lineHeight: "1.5",
						},

						// Better link styling
						a: {
							fontWeight: "500",
							textDecoration: "underline",
							textDecorationColor: "rgb(var(--primary) / 0.3)",
							textUnderlineOffset: "2px",
							transition: "all 150ms ease",
							"&:hover": {
								textDecorationColor: "rgb(var(--primary))",
							},
						},

						// Strong and emphasis
						strong: {
							fontWeight: "600",
						},

						// Blockquotes
						blockquote: {
							fontStyle: "italic",
							borderLeftWidth: "3px",
							borderLeftColor: "rgb(var(--primary) / 0.3)",
							paddingLeft: "1.25rem",
						},

						// Lists
						"ul, ol": {
							paddingLeft: "1.5rem",
						},
						li: {
							marginTop: "0.25rem",
							marginBottom: "0.25rem",
						},

						// Tighten spacing between intro paragraphs and their lists
						"p + ul, p + ol": {
							marginTop: "-0.5rem",
						},

						// Remove code backticks
						"code::before": { content: '""' },
						"code::after": { content: '""' },

						// Inline code styling with better contrast
						":not(pre) > code": {
							fontFamily: theme("fontFamily.mono").join(", "),
							fontSize: "0.9em",
							fontWeight: "500",
							padding: "0.15rem 0.4rem",
							marginLeft: "0.15rem",
							marginRight: "0.15rem",
							borderRadius: "0.25rem",
							backgroundColor: "rgb(var(--code-bg))",
							border: "1px solid rgb(var(--code-border))",
							color: "rgb(var(--text))",
						},

						// Code block improvements
						pre: {
							borderRadius: "0.5rem",
							padding: "1rem",
							border: "1px solid rgb(var(--border))",
							lineHeight: "1.6",
						},
						"pre code": {
							fontSize: "0.875rem",
							fontWeight: "400",
						},

						// Tables
						table: {
							fontSize: "0.9375rem",
						},
						th: {
							fontWeight: "600",
							paddingTop: "0.75rem",
							paddingBottom: "0.75rem",
						},
						td: {
							paddingTop: "0.625rem",
							paddingBottom: "0.625rem",
						},
					},
				},
			}),
		},
	},
	plugins: [typography],
};
