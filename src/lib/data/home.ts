export interface HomeLinkItem {
	name: string;
	href: string;
	description: string;
	previewUrl?: string;
}

export interface HomeLinkGroup {
	title: string;
	items: HomeLinkItem[];
}

export const homeMainStack = ["Kubernetes", "Go", "TypeScript", "Terraform", "Nix"];

export const homeAppGroups: HomeLinkGroup[] = [
	{
		title: "tooling",
		items: [
			{ name: "Neovim", href: "https://neovim.io", description: "editor" },
			{ name: "Ghostty", href: "https://ghostty.org", description: "terminal" },
			{ name: "Nix", href: "https://nixos.org", description: "reproducible environments" },
			{ name: "Lazygit", href: "https://github.com/jesseduffield/lazygit", description: "git workflow" },
			{ name: "OpenCode", href: "https://github.com/anomalyco/opencode", description: "coding agent" },
			{ name: "Tailscale", href: "https://tailscale.com", description: "networking" },
		],
	},
	{
		title: "productivity",
		items: [
			{ name: "Raycast", href: "https://raycast.com", description: "launcher" },
			{ name: "Obsidian", href: "https://obsidian.md", description: "notes and docs" },
			{ name: "Zen Browser", href: "https://github.com/zen-browser/desktop", description: "browser" },
			{ name: "Notion Calendar", href: "https://www.notion.com/product/calendar", description: "schedule" },
			{ name: "Bitwarden", href: "https://bitwarden.com", description: "password manager" },
		],
	},
];

export const homeLanguages = ["Go", "TypeScript", "Rust", "Elixir", "Nix"];
