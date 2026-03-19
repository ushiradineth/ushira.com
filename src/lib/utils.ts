export function formatDate(date: Date, opt?: Intl.DateTimeFormatOptions): string {
	const options: Intl.DateTimeFormatOptions = {
		day: opt?.day ?? "2-digit",
		month: opt?.month ?? "short",
		year: opt?.year ?? "numeric",
	};
	return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function isWithinDays(date: Date, days: number): boolean {
	const now = new Date();
	if (Number.isNaN(date.getTime())) {
		return false;
	}
	const diffMs = now.getTime() - date.getTime();

	const threshold = days * 24 * 60 * 60 * 1000;

	return Math.abs(diffMs) <= threshold;
}

export function fuzzyScore(query: string, target: string): number {
	const normalizedQuery = query.trim().toLowerCase();
	const normalizedTarget = target.trim().toLowerCase();

	if (!normalizedQuery) {
		return 1;
	}

	if (!normalizedTarget) {
		return -1;
	}

	let score = 0;
	let cursor = -1;
	let streak = 0;

	for (let i = 0; i < normalizedQuery.length; i++) {
		const char = normalizedQuery[i];
		const matchIndex = normalizedTarget.indexOf(char, cursor + 1);

		if (matchIndex === -1) {
			return -1;
		}

		const previousChar = normalizedTarget[matchIndex - 1];
		const isWordStart = matchIndex === 0 || previousChar === " " || previousChar === "/" || previousChar === "-";
		const isContiguous = matchIndex === cursor + 1;

		streak = isContiguous ? streak + 1 : 1;
		score += 8;
		score += Math.max(0, 5 - matchIndex);
		score += isWordStart ? 7 : 0;
		score += streak > 1 ? streak * 2 : 0;

		cursor = matchIndex;
	}

	if (normalizedTarget.includes(normalizedQuery)) {
		score += 20;
	}

	if (normalizedTarget.startsWith(normalizedQuery)) {
		score += 24;
	}

	return score;
}

export function rankCommands<T>(items: T[], query: string, getSearchText: (item: T) => string): T[] {
	const normalizedQuery = query.trim();
	if (!normalizedQuery) {
		return items;
	}

	return items
		.map((item) => ({
			item,
			score: fuzzyScore(normalizedQuery, getSearchText(item)),
		}))
		.filter((entry) => entry.score >= 0)
		.sort((a, b) => b.score - a.score)
		.map((entry) => entry.item);
}

export function isMacOS() {
	const nav = navigator as Navigator & {
		userAgentData?: { platform?: string };
	};

	if (nav.userAgentData?.platform) {
		return nav.userAgentData.platform === "macOS";
	}

	return /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
}
