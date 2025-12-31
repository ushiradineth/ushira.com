import type { ImageMetadata } from "astro";

export type Project = {
	title: string;
	icon: ImageMetadata;
	period: string;
	designation: string;
	technologies: string[];
	description: string;
	links: {
		label: string;
		logo: string;
		href: string;
	}[];
};
