<script lang="ts">
import { onMount } from "svelte";
import { selectedIcon, closeIconModal } from "$lib/stores/iconStore";

import Modal from "./Modal.svelte";
import IconModalHeader from "./IconModalHeader.svelte";
import FontVersionSelector from "./IconSelector/FontVersionSelector.svelte";
import SvgVersionSelector from "./IconSelector/SVGVersionSelector.svelte";
import type { IconVersions, IIcon } from "$lib/types/types";

let svgVersions: IconVersions[] = [];
let selectedSvgVersion: IconVersions;

// Compute SVG versions and default selection reactively
$: if ($selectedIcon?.versions?.svg) {
	svgVersions = $selectedIcon.versions.svg;
	selectedSvgVersion = svgVersions.includes("original")
		? "original"
		: svgVersions[0];
}

function getIconUrl(icon: IIcon, version: IconVersions) {
	return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.name}/${icon.name}-${version}.svg`;
}

function handleKeydown(e: KeyboardEvent) {
	if (e.key === "Escape") closeIconModal();
}

onMount(() => {
	document.addEventListener("keydown", handleKeydown);
	return () => document.removeEventListener("keydown", handleKeydown);
});
</script>

<Modal isOpen={!!$selectedIcon} onClose={closeIconModal} title={$selectedIcon?.name}>
  <IconModalHeader title={$selectedIcon?.name} onClose={closeIconModal} />

  {#if $selectedIcon}
    <FontVersionSelector
      title="Font versions"
      versions={$selectedIcon.versions.font || []}
      selectedIcon={$selectedIcon}
    />

    <SvgVersionSelector
      title="SVG versions"
      versions={svgVersions}
      selectedIcon={$selectedIcon}
      {getIconUrl}
    />
  {/if}
</Modal>
