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
	if (date.getTime() > now.getTime()) {
		return false;
	}
	const diffMs = now.getTime() - date.getTime();
	const threshold = days * 24 * 60 * 60 * 1000;
	return diffMs <= threshold;
}
