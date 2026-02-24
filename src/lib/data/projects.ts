import type { Project } from "../types";

export const projects: Project[] = [
	{
		title: "lazytf",
		period: "January 2026 – Present",
		description: "A lazygit-style terminal UI for Terraform with workspace-aware execution and plan-first workflows.",
		technologies: [
			{ name: "Go", icon: "simple-icons:go", href: "https://go.dev" },
			{ name: "Terraform", icon: "simple-icons:terraform", href: "https://www.terraform.io" },
			{ name: "Bubble Tea", icon: "mdi:tea-outline", href: "https://github.com/charmbracelet/bubbletea" },
			{ name: "Lip Gloss", icon: "mdi:palette-outline", href: "https://github.com/charmbracelet/lipgloss" },
			{ name: "Charm", icon: "mdi:creation", href: "https://charm.sh" },
		],
		links: [{ label: "GitHub - lazytf", logo: "mdi:github", href: "https://github.com/ushiradineth/lazytf" }],
	},
	{
		title: "kei",
		period: "Not started",
		description:
			"A modern, high-performance terminal UI for Kubernetes, built for operators and platform engineers who run real systems at scale.",
		technologies: [
			{ name: "Go", icon: "simple-icons:go", href: "https://go.dev" },
			{ name: "Kubernetes", icon: "simple-icons:kubernetes", href: "https://kubernetes.io" },
			{ name: "Bubble Tea", icon: "mdi:tea-outline", href: "https://github.com/charmbracelet/bubbletea" },
			{ name: "Lip Gloss", icon: "mdi:palette-outline", href: "https://github.com/charmbracelet/lipgloss" },
			{ name: "Charm", icon: "mdi:creation", href: "https://charm.sh" },
		],
		links: [{ label: "GitHub - kei", logo: "mdi:github", href: "https://github.com/ushiradineth/kei" }],
	},
	{
		title: "zeroh",
		period: "Not Started",
		description: "A zero trust peer-2-peer tunnel that just works",
		technologies: [
			{ name: "Rust", icon: "simple-icons:rust", href: "https://www.rust-lang.org" },
			{ name: "Iroh", icon: "mdi:network", href: "https://iroh.computer" },
		],
		links: [
			{
				label: "GitHub - zeroh",
				logo: "mdi:github",
				href: "https://github.com/ushiradineth/zeroh",
			},
		],
	},
	{
		title: "nix-config",
		period: "July 2024 – ∞",
		description: "Multi host/architecture nix configuration for NixOS, MacOS, Raspberry Pi 5 and other.",
		technologies: [
			{ name: "NixOS", icon: "simple-icons:nixos", href: "https://nixos.org" },
			{ name: "Traefik", icon: "simple-icons:traefikproxy", href: "https://traefik.io" },
			{ name: "Prometheus", icon: "simple-icons:prometheus", href: "https://prometheus.io" },
			{ name: "Grafana", icon: "simple-icons:grafana", href: "https://grafana.com" },
			{ name: "Cloudflare", icon: "simple-icons:cloudflare", href: "https://www.cloudflare.com" },
			{ name: "Raspberry Pi", icon: "simple-icons:raspberrypi", href: "https://www.raspberrypi.com" },
			{ name: "Tailscale", icon: "simple-icons:tailscale", href: "https://tailscale.com" },
		],
		links: [
			{
				label: "GitHub - nix-config",
				logo: "simple-icons:nixos",
				href: "https://github.com/ushiradineth/nix-config",
			},
		],
	},
	{
		title: "homelab",
		period: "July 2024 – January 2025",
		description: "Homelab with Terraform, Ansible, Docker, and Kubernetes (k3d). Superseded by Nix Config.",
		technologies: [
			{ name: "Terraform", icon: "simple-icons:terraform", href: "https://www.terraform.io" },
			{ name: "Ansible", icon: "simple-icons:ansible", href: "https://www.ansible.com" },
			{ name: "Kubernetes", icon: "simple-icons:kubernetes", href: "https://kubernetes.io" },
			{ name: "Prometheus", icon: "simple-icons:prometheus", href: "https://prometheus.io" },
			{ name: "Grafana", icon: "simple-icons:grafana", href: "https://grafana.com" },
		],
		links: [
			{
				label: "GitHub - homelab",
				logo: "mdi:github",
				href: "https://github.com/ushiradineth/homelab",
			},
			{
				label: "GitHub - ansible",
				logo: "simple-icons:ansible",
				href: "https://github.com/ushiradineth/homelab-ansible",
			},
		],
	},
];
