<script lang="ts">
import { onMount } from "svelte";
import IconGrid from "../components/iconGrid/IconGrid.svelte";

import IconModal from "../components/modal/IconModal.svelte";
import {
	initializeStore,
	filteredIcons,
	isModalOpen,
} from "$lib/stores/iconStore";
import FiltersBar from "../components/filters/FiltersBar.svelte";

export let data;

onMount(() => {
	const tags: string[] = Array.isArray(data.availableTags)
		? data.availableTags.map((tag) => String(tag))
		: [];

	initializeStore(data.icons, tags);
});
</script>

<main class="min-h-screen dark:bg-gray-900 dark:text-white">
  <div class="base-container">
    {#if data.error}
      <div class="rounded-lg bg-red-100 p-4 dark:bg-red-900">
        <p class="text-red-700 dark:text-red-300">Error: {data.error}</p>
      </div>
    {:else}
      <FiltersBar />
      <IconGrid icons={$filteredIcons} />
    {/if}
    {#if $isModalOpen}
      <IconModal />
    {/if}
  </div>
</main>
