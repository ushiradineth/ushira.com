import typography from "@tailwindcss/typography";
import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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
				roboto: ['"Roboto Mono Variable"', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [typography],
};
