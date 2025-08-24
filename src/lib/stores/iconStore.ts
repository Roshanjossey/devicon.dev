import { writable, derived, type Writable, type Readable } from "svelte/store";
import type { IIcon } from "$lib/types/types";

export const icons: Writable<IIcon[]> = writable([]);
export const availableTags: Writable<string[]> = writable([]);
export const searchTerm: Writable<string> = writable("");
export const selectedTags: Writable<string[]> = writable([]);
export const isDarkMode: Writable<boolean> = writable(false);
export const selectedIcon: Writable<IIcon | null> = writable(null);
export const isModalOpen: Writable<boolean> = writable(false);

export function initializeStore(
	initialIcons: IIcon[],
	initialTags: string[],
): void {
	icons.set(initialIcons);
	availableTags.set(initialTags);

	// Check local storage for dark mode preference
	if (typeof window !== "undefined") {
		const storedDarkMode = localStorage.getItem("darkMode") === "true";
		isDarkMode.set(storedDarkMode);

		// Apply theme to document
		if (storedDarkMode) {
			document.documentElement.classList.add("dark");
		}
	}
}

export const filteredIcons: Readable<IIcon[]> = derived(
	[icons, searchTerm, selectedTags],
	([$icons, $searchTerm, $selectedTags]) => {
		return $icons.filter((icon) => {
			const matchesSearch =
				$searchTerm === "" ||
				icon.name.toLowerCase().includes($searchTerm.toLowerCase()) ||
        		icon.altnames.some(altname => altname.toLowerCase().includes($searchTerm.toLowerCase()));

			const matchesTags =
				$selectedTags.length === 0 ||
				(icon.tags && $selectedTags.every((tag) => icon.tags!.includes(tag)));

			return matchesSearch && matchesTags;
		});
	},
);

export const totalVersions: Readable<number> = derived([icons], ([$icons]) =>
	$icons.reduce(
		(acc, icon) =>
			acc +
			(icon?.versions?.font?.length ?? 0) +
			(icon?.versions?.svg?.length ?? 0),
		0,
	),
);

export function setSearchTerm(term: string): void {
	searchTerm.set(term);
}

export function setSelectedTags(tags: string[]): void {
	selectedTags.set(tags);
}

export function clearFilters(): void {
	searchTerm.set("");
	selectedTags.set([]);
}

export function toggleDarkMode(): void {
	isDarkMode.update((current) => {
		const newValue = !current;

		if (typeof window !== "undefined") {
			localStorage.setItem("darkMode", newValue.toString());

			if (newValue) {
				document.documentElement.classList.add("dark");
			} else {
				document.documentElement.classList.remove("dark");
			}
		}

		return newValue;
	});
}

export function openIconModal(icon: IIcon): void {
	selectedIcon.set(icon);
	isModalOpen.set(true);
}

export function closeIconModal(): void {
	isModalOpen.set(false);
}
