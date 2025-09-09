<script lang="ts">
import HeaderSnippet from "./HeaderSnippet.svelte";
import { CURRENT_VERSION } from "$lib/types/types";
import HeaderStats from "./HeaderStats.svelte";
import ContactLinks from "../widgets/contact/ContactLinks.svelte";
</script>

<header
  class="bg-base-300 border-b border-gray-200 bg-white py-6 dark:border-gray-600 dark:bg-gray-800 dark:text-white"
>
  <div class="base-container align-center flex flex-col gap-6">
    <div class="flex flex-col justify-between sm:flex-row">
      <div class="font-damion flex flex-row gap-2 text-4xl text-green-500">
        <i class="devicon-devicon-plain colored"></i>
        Devicon
        <span class=" block sm:mt-auto sm:inline">{CURRENT_VERSION}</span>
      </div>

      <ContactLinks />
    </div>

    <div class="flex flex-col gap-4 py-12 sm:w-1/2">
      <HeaderStats />

      <p class="text-4xl font-bold dark:text-white">
        Icons about programming languages, software development, and graphic design tools.
      </p>
    </div>

    <HeaderSnippet />
  </div>
</header>

<style>
  .font-damion {
    font-family: 'Damion', Times, serif;
  }
</style>
