import type { ImageMetadata } from "astro";

export type ImageCollection = {
	file: ImageMetadata;
	alt: string;
};

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

export type Job = {
	company: string;
	icon: ImageMetadata;
	href: string;
	designation: string;
	period: string;
	points: string[];
};

export type Social = {
	title: string;
	href: string;
	description: string;
	icon: string;
};
