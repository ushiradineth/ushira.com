import type { Social } from "../types";

type SocialKey = "Twitter" | "LinkedIn" | "Github" | "Instagram";

const socialEntries: ReadonlyArray<[SocialKey, string]> = [
	["Twitter", "https://www.twitter.com/ushiradineth"],
	["LinkedIn", "https://www.linkedin.com/in/ushiradineth"],
	["Github", "https://www.github.com/ushiradineth"],
	["Instagram", "https://www.instagram.com/ushiradineth"],
];

export const SocialLinks = new Map<SocialKey, string>(socialEntries);

export function requireSocialLink(key: SocialKey): string {
	const href = SocialLinks.get(key);
	if (!href) {
		throw new Error(`Missing social link for ${key}`);
	}
	return href;
}

export const socials: Social[] = [
	{
		title: "Twitter",
		description: "Occasional thoughts, links, and ramblings.",
		href: requireSocialLink("Twitter"),
		icon: "mdi:twitter",
	},
	{
		title: "LinkedIn",
		description: "Professional updates and work history.",
		href: requireSocialLink("LinkedIn"),
		icon: "mdi:linkedin",
	},
];
