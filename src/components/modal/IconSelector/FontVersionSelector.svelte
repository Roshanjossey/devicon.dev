<script lang="ts">
import type { IconVersions, IIcon } from "$lib/types/types";
import { copyToClipboard } from "$lib/common/copyToClipboard";
import Tooltip from "../../widgets/tooltip/Tooltip.svelte";

export let title: string;
export let versions: IconVersions[];
export let selectedIcon: IIcon;

let selectedVersion: IconVersions = versions.includes("plain")
	? "plain"
	: versions[0];

$: codeSnippet = `<i class="devicon-${selectedIcon.name}-${selectedVersion}"></i>`;

const selectVersion = (version: IconVersions) => (selectedVersion = version);
</script>

<h3 class="mb-2">{title}</h3>

{#if versions.length > 0}
  <div class="mb-4 flex w-full flex-wrap rounded-lg bg-gray-100 p-4 dark:bg-gray-700">
    {#each versions as version}
      <button
        type="button"
        class="cursor-pointer p-4 transition-all
          {selectedVersion === version
          ? 'rounded-lg ring-2 ring-green-500'
          : 'text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100'}"
        on:click={() => selectVersion(version)}
        aria-label={`Select ${version} version`}
      >
        <i class="text-4xl sm:text-6xl devicon-{selectedIcon.name}-{version}"></i>
      </button>
    {/each}
  </div>

  <div
    class="code-snippet relative mt-4 w-full rounded-md bg-gray-100 p-4 dark:bg-gray-900 dark:text-gray-400 flex align-center justify-between"
  >
    <code class="break-all">{codeSnippet}</code>
      <Tooltip content="Copy to clipboard" flashMessage="Copied!">
      <button
        type="button"
        class="rounded-full text-xl hover:cursor-pointer"
        on:click={() => copyToClipboard(codeSnippet)}
        aria-label="Copy code snippet"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
          />
        </svg>
      </button>
    </Tooltip>
  </div>
{:else}
  <p class="text-gray-500 dark:text-gray-400">No font versions available</p>
{/if}
