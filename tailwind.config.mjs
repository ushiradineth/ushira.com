import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", "./astro.config.mjs"],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				foreground: "var(--foreground)",
				background: "var(--background)",
				card: {
					DEFAULT: "var(--card)",
					foreground: "var(--card-foreground)",
				},
				popover: {
					DEFAULT: "var(--popover)",
					foreground: "var(--popover-foreground)",
				},
				primary: {
					DEFAULT: "var(--primary)",
					foreground: "var(--primary-foreground)",
				},
				secondary: {
					DEFAULT: "var(--secondary)",
					foreground: "var(--secondary-foreground)",
				},
				muted: {
					DEFAULT: "var(--muted)",
					foreground: "var(--muted-foreground)",
				},
				accent: {
					DEFAULT: "var(--accent)",
					foreground: "var(--accent-foreground)",
				},
				destructive: {
					DEFAULT: "var(--destructive)",
					foreground: "var(--destructive-foreground)",
				},
				border: "var(--border)",
				input: "var(--input)",
				ring: "var(--ring)",
				chart: {
					1: "var(--chart-1)",
					2: "var(--chart-2)",
					3: "var(--chart-3)",
					4: "var(--chart-4)",
					5: "var(--chart-5)",
				},
				sidebar: {
					DEFAULT: "var(--sidebar)",
					foreground: "var(--sidebar-foreground)",
					primary: "var(--sidebar-primary)",
					"primary-foreground": "var(--sidebar-primary-foreground)",
					accent: "var(--sidebar-accent)",
					"accent-foreground": "var(--sidebar-accent-foreground)",
					border: "var(--sidebar-border)",
					ring: "var(--sidebar-ring)",
				},
			},
			fontFamily: {
				sans: ['"Instrument Sans Variable"', ...defaultTheme.fontFamily.sans],
				mono: ['"Geist Mono Variable"', ...defaultTheme.fontFamily.mono],
			},
			fontSize: {
				body: "1rem",
				h1: "2.25rem",
				h2: "1.875rem",
				h3: "1.5rem",
				h4: "1.25rem",
				code: "0.875rem",
				table: "0.9375rem",
				icon: "1.5rem",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
				xl: "calc(var(--radius) + 4px)",
				code: "0.25rem",
			},
			borderWidth: {
				quote: "3px",
			},
			boxShadow: {
				"2xs": "var(--shadow-2xs)",
				xs: "var(--shadow-xs)",
				sm: "var(--shadow-sm)",
				DEFAULT: "var(--shadow)",
				md: "var(--shadow-md)",
				lg: "var(--shadow-lg)",
				xl: "var(--shadow-xl)",
				"2xl": "var(--shadow-2xl)",
			},
			letterSpacing: {
				tighter: "calc(var(--tracking-normal) - 0.05em)",
				tight: "calc(var(--tracking-normal) - 0.025em)",
				normal: "var(--tracking-normal)",
				wide: "calc(var(--tracking-normal) + 0.025em)",
				wider: "calc(var(--tracking-normal) + 0.05em)",
				widest: "calc(var(--tracking-normal) + 0.1em)",
				heading: "-0.015em",
			},
			lineHeight: {
				reading: "1.75",
				code: "1.6",
				h1: "1.2",
				h2: "1.3",
				h3: "1.4",
				h4: "1.5",
			},
			spacing: {
				base: "var(--spacing)",
				"header-offset": "5rem",
				"underline-offset": "0.125rem",
				"code-y": "0.15rem",
				"code-x": "0.4rem",
				"code-gap": "0.15rem",
				"blockquote-pl": "1.25rem",
				"list-pl": "1.5rem",
				"li-my": "0.25rem",
				"tight-list": "-0.5rem",
				"pre-padding": "1rem",
				"th-py": "0.75rem",
				"td-py": "0.625rem",
			},
			maxWidth: {
				prose: "70ch",
				content: "1080px",
			},
			minWidth: {
				half: "50%",
			},
			backgroundSize: {
				"underline-off": "0% 0px",
				"underline-on": "100% 2px",
			},
			typography: ({ theme }) => ({
				DEFAULT: {
					css: {
						// Color system
						"--tw-prose-body": theme("colors.foreground"),
						"--tw-prose-headings": theme("colors.foreground"),
						"--tw-prose-links": theme("colors.primary.DEFAULT"),
						"--tw-prose-bold": theme("colors.foreground"),
						"--tw-prose-counters": theme("colors.muted.foreground"),
						"--tw-prose-bullets": theme("colors.muted.foreground"),
						"--tw-prose-hr": theme("colors.border"),
						"--tw-prose-quotes": theme("colors.foreground"),
						"--tw-prose-quote-borders": theme("colors.border"),
						"--tw-prose-captions": theme("colors.muted.foreground"),
						"--tw-prose-code": theme("colors.foreground"),
						"--tw-prose-pre-code": theme("colors.foreground"),
						"--tw-prose-pre-bg": "transparent",
						"--tw-prose-th-borders": theme("colors.border"),
						"--tw-prose-td-borders": theme("colors.border"),

						// Font families
						fontFamily: theme("fontFamily.sans").join(", "),

						// Readability improvements
						maxWidth: theme("maxWidth.prose"), // Optimal line length for reading
						lineHeight: theme("lineHeight.reading"), // Better readability
						fontSize: theme("fontSize.body"),

						// Remove all vertical margins - use gap instead
						"> *": {
							marginTop: "0",
							marginBottom: "0",
						},

						// Paragraph styling
						p: {
							lineHeight: theme("lineHeight.reading"),
							fontSize: theme("fontSize.body"),
						},

						// Heading hierarchy with better sizing and weight
						h1: {
							fontSize: theme("fontSize.h1"),
							fontWeight: "700",
							lineHeight: theme("lineHeight.h1"),
							letterSpacing: theme("letterSpacing.tight"),
						},
						h2: {
							fontSize: theme("fontSize.h2"),
							fontWeight: "700",
							lineHeight: theme("lineHeight.h2"),
							letterSpacing: theme("letterSpacing.tight"),
						},
						h3: {
							fontSize: theme("fontSize.h3"),
							fontWeight: "600",
							lineHeight: theme("lineHeight.h3"),
							letterSpacing: theme("letterSpacing.heading"),
						},
						h4: {
							fontSize: theme("fontSize.h4"),
							fontWeight: "600",
							lineHeight: theme("lineHeight.h4"),
						},

						// Better link styling
						a: {
							fontWeight: "500",
							textDecoration: "underline",
							textDecorationColor: "color-mix(in oklch, var(--primary) 30%, transparent)",
							textUnderlineOffset: theme("spacing.underline-offset"),
							transitionProperty: "all",
							transitionDuration: theme("transitionDuration.150"),
							transitionTimingFunction: theme("transitionTimingFunction.DEFAULT"),
							"&:hover": {
								textDecorationColor: "var(--primary)",
							},
						},

						// Strong and emphasis
						strong: {
							fontWeight: "600",
						},

						// Blockquotes
						blockquote: {
							fontStyle: "italic",
							borderLeftWidth: theme("borderWidth.quote"),
							borderLeftColor: "color-mix(in oklch, var(--primary) 30%, transparent)",
							paddingLeft: theme("spacing.blockquote-pl"),
						},

						// Lists
						"ul, ol": {
							paddingLeft: theme("spacing.list-pl"),
						},
						li: {
							marginTop: theme("spacing.li-my"),
							marginBottom: theme("spacing.li-my"),
						},

						// Tighten spacing between intro paragraphs and their lists
						"p + ul, p + ol": {
							marginTop: theme("spacing.tight-list"),
						},

						// Remove code backticks
						"code::before": { content: '""' },
						"code::after": { content: '""' },

						// Inline code styling with better contrast
						":not(pre) > code": {
							fontFamily: theme("fontFamily.mono").join(", "),
							fontSize: theme("fontSize.code"),
							fontWeight: "500",
							padding: `${theme("spacing.code-y")} ${theme("spacing.code-x")}`,
							marginLeft: theme("spacing.code-gap"),
							marginRight: theme("spacing.code-gap"),
							borderRadius: theme("borderRadius.code"),
							backgroundColor: "var(--secondary)",
							borderWidth: theme("borderWidth.DEFAULT"),
							borderStyle: "solid",
							borderColor: "var(--border)",
							color: "var(--foreground)",
						},

						// Code block improvements
						pre: {
							padding: theme("spacing.pre-padding"),
							lineHeight: theme("lineHeight.code"),
							fontFamily: theme("fontFamily.mono").join(", "),
						},
						"pre code": {
							fontSize: theme("fontSize.code"),
							fontWeight: "400",
							fontFamily: theme("fontFamily.mono").join(", "),
						},

						// Tables
						table: {
							fontSize: theme("fontSize.table"),
						},
						th: {
							fontWeight: "600",
							paddingTop: theme("spacing.th-py"),
							paddingBottom: theme("spacing.th-py"),
						},
						td: {
							paddingTop: theme("spacing.td-py"),
							paddingBottom: theme("spacing.td-py"),
						},
					},
				},
			}),
		},
	},
	plugins: [
		typography,
		({ addBase, theme }) => {
				addBase({
				// Smooth scrolling with offset for fixed header
				html: {
					scrollBehavior: "smooth",
					scrollPaddingTop: theme("spacing.header-offset"),
					letterSpacing: "var(--tracking-normal)",
				},
				// Dark mode color-scheme for form controls/scrollbars
				".dark": {
					colorScheme: "dark",
				},
					// Blog heading styles for anchor links
					"article h2, article h3, article h4, article h5, article h6": {
						position: "relative",
						scrollMarginTop: theme("spacing.header-offset"),
					},
				// Group hover effect for heading anchor links
				"article h2:hover .anchor-link, article h3:hover .anchor-link, article h4:hover .anchor-link, article h5:hover .anchor-link, article h6:hover .anchor-link":
					{
						opacity: "1",
					},
				// HR styling
				hr: {
					borderColor: "var(--border) !important",
				},
				// Image caption styling
				"p:has(img):has(em) img": {
					marginBottom: "0 !important",
				},
				"p:has(img):has(em)": {
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
				},
				// Astro Icon Configuration
				"[data-icon]": {
					fontSize: theme("fontSize.icon"),
					color: "var(--foreground)",
				},
				// Wakapi chart sizing
				".wakapi-chart": {
					width: "100%",
					height: "auto",
					display: "block",
				},
				// Hide scrollbar utility
				".hide-scrollbar::-webkit-scrollbar": {
					display: "none",
				},
				".hide-scrollbar": {
					"-ms-overflow-style": "none",
					scrollbarWidth: "none",
				},
			});
		},
	],
};
