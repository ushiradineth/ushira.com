/**
 * Wakapi API integration for fetching coding statistics
 * Uses authenticated API endpoints for detailed stats
 * Data is fetched at build time from https://wakapi.ushira.com
 */

const WAKAPI_BASE_URL = "https://wakapi.ushira.com";
const WAKAPI_USERNAME = "ushiradineth";

interface WakapiLanguage {
	name: string;
	total: number;
	percent: number;
	digital: string;
	text: string;
	hours: number;
	minutes: number;
}

interface WakapiStats {
	data: {
		total_seconds: number;
		daily_average: number;
		languages: WakapiLanguage[];
	};
}

/**
 * Fetch detailed stats from Wakapi API
 */
async function fetchStats(range: string): Promise<WakapiStats | null> {
	try {
		const response = await fetch(`${WAKAPI_BASE_URL}/api/compat/wakatime/v1/users/${WAKAPI_USERNAME}/stats/${range}`, {
			headers: {
				Accept: "application/json",
			},
		});

		if (!response.ok) {
			console.error(`Failed to fetch Wakapi stats for ${range}:`, response.status, response.statusText);
			return null;
		}

		return await response.json();
	} catch (error) {
		console.error(`Error fetching Wakapi stats for ${range}:`, error);
		return null;
	}
}

/**
 * Get coding statistics for last 7 days
 */
export async function getLast7DaysStats() {
	return await fetchStats("last_7_days");
}

/**
 * Get coding statistics for last year
 */
export async function getLastYearStats() {
	return await fetchStats("last_year");
}

/**
 * Get all-time coding statistics
 */
export async function getAllTimeStats() {
	return await fetchStats("all_time");
}

/**
 * Fetch the Wakapi activity chart SVG and make it responsive
 */
export async function getActivityChartSvg(): Promise<string | null> {
	try {
		const response = await fetch(`${WAKAPI_BASE_URL}/api/activity/chart/${WAKAPI_USERNAME}.svg`);

		if (!response.ok) {
			console.error("Failed to fetch Wakapi activity chart:", response.statusText);
			return null;
		}

		let svg = await response.text();

		// 1. Extract width & height
		const widthMatch = svg.match(/width="([\d.]+)"/);
		const heightMatch = svg.match(/height="([\d.]+)"/);

		if (widthMatch && heightMatch) {
			const width = widthMatch[1];
			const height = heightMatch[1];

			// 2. Remove fixed width/height
			svg = svg.replace(/width="[\d.]+"/, "").replace(/height="[\d.]+"/, "");

			// 3. Inject viewBox + responsive style
			svg = svg.replace(
				"<svg",
				`<svg class="wakapi-chart" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet"`,
			);
		}

		return svg;
	} catch (error) {
		console.error("Error fetching Wakapi activity chart:", error);
		return null;
	}
}

/**
 * Format seconds into a human-readable time string
 */
export function formatTime(seconds: number): string {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);

	if (hours === 0) {
		return `${minutes} min${minutes !== 1 ? "s" : ""}`;
	}

	if (minutes === 0) {
		return `${hours} hr${hours !== 1 ? "s" : ""}`;
	}

	return `${hours} hr${hours !== 1 ? "s" : ""} ${minutes} min${minutes !== 1 ? "s" : ""}`;
}
