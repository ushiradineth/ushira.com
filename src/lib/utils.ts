export function border(index: number, length: number) {
	if (index !== length - 1) {
		return " border-b ";
	}

	return "";
}

export function getDurationFromDate(date: Date): string {
	// Current date
	const currentDate = new Date();

	// Calculate the difference in milliseconds
	const difference_ms = currentDate.getTime() - date.getTime();

	// Convert the difference to years and months
	const difference_years = Math.floor(difference_ms / (1000 * 60 * 60 * 24 * 365));
	const difference_months = Math.floor((difference_ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));

	// Format the result
	let result = "";
	if (difference_years !== 0) {
		result += `${difference_years} year`;
		if (difference_years !== 1) {
			result += "s";
		}
	}
	if (difference_months !== 0) {
		if (result !== "") {
			result += " and ";
		}
		result += `${difference_months} month`;
		if (difference_months !== 1) {
			result += "s";
		}
	}

	return result;
}

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
