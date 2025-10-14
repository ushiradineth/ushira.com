import type { Blog } from "../types";

export const blogs: Blog[] = [
	// {
	// 	title: "The art of committing secrets to Git",
	// 	link: "/blog/the-art-of-committing-secrets-to-git/",
	// 	date: new Date(2023, 11 - 1, 1),
	// 	tags: ["Git", "Secrets", "Agenix", "Sealed Secrets"],
	// },
	{
		title: "Declarative Infrastructure with Nix",
		// link: "/blog/declarative-infrastructure-with-nix/",
		// date: new Date(2023, 11 - 1, 1),
		tags: ["Nix", "NixOS", "Home Manager", "Nix Darwin", "Colmena", "NixOS Anywhere"],
	},
	{
		title: "Hub-and-Spoke Architecture with Zero Trust Networking",
		link: "/blog/hub-and-spoke/",
		date: new Date(2025, 10 - 1, 14),
		tags: ["Cloud Architecture", "Zero Trust", "Networking", "Security"],
	},
	{
		title: "GitOps for Kubernetes with ArgoCD",
		link: "/blog/gitops-with-argocd/",
		date: new Date(2024, 2 - 1, 20),
		tags: ["GitOps", "ArgoCD", "Terrafrom", "Kubernetes", "CI/CD"],
	},
	{
		title: "Automated Semantic Versioning with CI",
		link: "/blog/automated-semantic-versioning-with-ci/",
		date: new Date(2024, 2 - 1, 3),
		tags: ["GitFlow", "Git", "Semantic Versioning", "Bash", "CI/CD"],
	},
];
