import type { IIcon } from "$lib/types/types";

export async function load() {
	try {
		const response = await fetch(
			"https://raw.githubusercontent.com/devicons/devicon/master/devicon.json",
		);

		if (!response.ok) {
			throw new Error(`Failed to fetch icons: ${response.statusText}`);
		}

		const icons: IIcon[] = await response.json();

		// Extract all available tags
		const availableTags = new Set();
		icons.forEach((icon) => {
			if (icon.tags && Array.isArray(icon.tags)) {
				icon.tags.forEach((tag) => availableTags.add(tag));
			}
		});

		return {
			icons,
			availableTags: Array.from(availableTags).sort(),
		};
	} catch (error: any) {
		console.error("Error fetching icons:", error);
		return {
			icons: [],
			availableTags: [],
			error: error.message,
		};
	}
}
