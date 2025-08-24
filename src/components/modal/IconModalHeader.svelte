<script lang="ts">
export let title;
export let onClose;
</script>

<div class="mb-4 flex items-start justify-between">
  <h2 id="modal-title" class="text-xl font-bold dark:text-white">
    {title}
  </h2>
  <button
    class="cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
    on:click={onClose}
    aria-label="Close modal"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
</div>
