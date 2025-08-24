<script lang="ts">
import { icons, totalVersions } from "$lib/stores/iconStore";
</script>

<div class="flex flex-row gap-4">
  <div class="stat-value dark:text-gray-400">
    <span class="mr-1 font-bold text-green-500">{$icons.length}</span>Icons
  </div>
  <svg viewBox="0 0 2 2" aria-hidden="true" class="w-0.5 fill-current"
    ><circle cx="1" cy="1" r="1"></circle></svg
  >
  <div class="stat-value dark:text-gray-400">
    <span class="mr-1 font-bold text-green-500">{$totalVersions}</span>Variants
  </div>
  <svg viewBox="0 0 2 2" aria-hidden="true" class="w-0.5 fill-current"
    ><circle cx="1" cy="1" r="1"></circle></svg
  >
  <div class="stat-value dark:text-gray-400">
    <span class="mr-1 font-bold text-green-500">MIT</span>License
  </div>
  <svg viewBox="0 0 2 2" aria-hidden="true" class="w-0.5 fill-current"
    ><circle cx="1" cy="1" r="1"></circle></svg
  >
  <div class="stat-value dark:text-gray-400">
    <span class="mr-1 font-bold text-green-500">10k+</span>Github Stars
  </div>
</div>
