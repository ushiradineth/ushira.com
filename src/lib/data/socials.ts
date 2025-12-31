type SocialKey = "Twitter" | "LinkedIn" | "Github";

const socialEntries: ReadonlyArray<[SocialKey, string]> = [
	["Twitter", "https://www.twitter.com/ushiradineth"],
	["LinkedIn", "https://www.linkedin.com/in/ushiradineth"],
	["Github", "https://www.github.com/ushiradineth"],
];

export const SocialLinks = new Map<SocialKey, string>(socialEntries);

export function requireSocialLink(key: SocialKey): string {
	const href = SocialLinks.get(key);
	if (!href) {
		throw new Error(`Missing social link for ${key}`);
	}
	return href;
}
