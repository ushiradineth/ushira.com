export type BackRoute = {
	href: string;
	label: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname) return "/";
	if (pathname === "/") return pathname;
	return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
}

export function getBackRoute(pathname: string): BackRoute | null {
	const normalized = normalizePathname(pathname);
	if (normalized === "/") return null;

	const segments = normalized.split("/").filter(Boolean);
	if (segments.length === 0) return null;
	if (segments.length === 1) {
		return {
			href: "/",
			label: "Back home",
		};
	}

	const section = segments[0];
	return {
		href: `/${section}/`,
		label: `Back to ${section}`,
	};
}
