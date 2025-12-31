import eslintPluginAstro from "eslint-plugin-astro";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
	// Ignore patterns
	{
		ignores: ["dist/**", ".astro/**", "node_modules/**", ".vercel/**", ".conform.*", "*.config.mjs", "*.config.ts"],
	},

	// JavaScript and TypeScript files
	{
		files: ["**/*.{js,mjs,cjs,ts,tsx}"],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: "latest",
				sourceType: "module",
			},
		},
		plugins: {
			"@typescript-eslint": tseslint,
		},
		rules: {
			...tseslint.configs.recommended.rules,
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"@typescript-eslint/triple-slash-reference": "off",
		},
	},

	// Astro files
	...eslintPluginAstro.configs.recommended,
	...eslintPluginAstro.configs["jsx-a11y-recommended"],

	// JSX accessibility
	{
		files: ["**/*.{astro,tsx,jsx}"],
		plugins: {
			"jsx-a11y": jsxA11y,
		},
		rules: {
			...jsxA11y.configs.recommended.rules,
		},
	},
];
