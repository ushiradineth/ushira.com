export type Project = {
	title: string;
	period: string;
	description: string;
	technologies: {
		name: string;
		icon: string;
		href: string;
	}[];
	links: {
		label: string;
		logo: string;
		href: string;
	}[];
};
