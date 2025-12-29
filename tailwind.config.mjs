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
						fontFamily: theme("fontFamily.sans").join(", "),
						maxWidth: "none",
						lineHeight: "1.75",
						fontSize: "1rem",
						a: {
							fontWeight: "500",
							textDecoration: "underline",
							textUnderlineOffset: "2px",
							"&:hover": {
								color: theme("colors.primary"),
							},
						},
						h1: {
							fontWeight: "700",
							fontSize: "2.5rem",
							lineHeight: "1.2",
							marginTop: "0",
							marginBottom: "1rem",
						},
						h2: {
							fontWeight: "700",
							fontSize: "1.875rem",
							lineHeight: "1.3",
							marginTop: "2rem",
							marginBottom: "1rem",
						},
						h3: {
							fontWeight: "600",
							fontSize: "1.5rem",
							lineHeight: "1.4",
							marginTop: "1.75rem",
							marginBottom: "0.75rem",
						},
						h4: {
							fontWeight: "600",
							fontSize: "1.25rem",
							lineHeight: "1.5",
							marginTop: "1.5rem",
							marginBottom: "0.5rem",
						},
						p: {
							marginTop: "1.25rem",
							marginBottom: "1.25rem",
						},
						code: {
							fontFamily: theme("fontFamily.mono").join(", "),
							fontWeight: "400",
							fontSize: "0.875rem",
						},
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
						pre: {
							fontFamily: theme("fontFamily.mono").join(", "),
							fontSize: "0.875rem",
							lineHeight: "1.7",
							borderRadius: theme("borderRadius.lg"),
							padding: "1rem",
						},
						blockquote: {
							fontWeight: "400",
							fontStyle: "italic",
							borderLeftWidth: "4px",
							borderLeftColor: theme("colors.border"),
							paddingLeft: "1rem",
						},
						ul: {
							listStyleType: "disc",
							paddingLeft: "1.5rem",
						},
						ol: {
							listStyleType: "decimal",
							paddingLeft: "1.5rem",
						},
						li: {
							marginTop: "0.5rem",
							marginBottom: "0.5rem",
						},
					},
				},
			}),
		},
	},
	plugins: [typography],
};
