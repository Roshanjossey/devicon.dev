<script>
  import { icons, totalVersions } from "$lib/stores/iconStore";

  const copyToClipboard = async (text) => {
      if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      }
  }
</script>

<header
  class="flex flex-col justify-center items-center py-8 px-4 bg-base-300 bg-white dark:bg-gray-800 dark:text-white"
>
  <div
    id="title"
    class="mb-2 text-center text-8xl sm:text-9xl font-damion text-green-500"
  >
    Devicon
    <span class="block text-5xl -mt-6 sm:text-6xl sm:inline sm:mt-auto">
      v2.15.1
    </span>
  </div>
  <p class="mt-4 text-xl text-center sm:mt-auto dark:text-gray-400">
    Icons about programming languages, software development, and graphic design
    tools.
  </p>
  <div class="flex flex-row my-2 text-black dark:text-gray-400">
    <p class="flex flex-row items-center mr-2">
      <i class="devicon-github-original text-2xl mr-1"></i>
      <a href="https://github.com/devicons/devicon/" target="_blank">
        Github
      </a>
    </p>
    <p class="flex flex-row items-center ml-2">
      <svg
        viewBox="0 0 200 100"
        width="37"
        height="25"
        class="-mr-2 fill-current"
      >
        <path
          d="M108.357 8.20656C100.199 4.4081 91.4506 1.60956 82.3035 0.0067237C82.1369 -0.0242106 81.9705 0.0530959 81.8847 0.207712C80.7595 2.23831 79.5132 4.88739 78.6405 6.96955C68.8022 5.47498 59.0143 5.47498 49.3777 6.96955C48.5048 4.84111 47.2133 2.23831 46.0831 0.207712C45.9973 0.0582546 45.8308 -0.0190518 45.6643 0.0067237C36.5222 1.60444 27.7737 4.40298 19.6103 8.20656C19.5396 8.23748 19.4791 8.28906 19.4389 8.35602C2.84476 33.5121 -1.70107 58.0499 0.528961 82.2835C0.539051 82.402 0.604639 82.5154 0.695456 82.5875C11.6438 90.746 22.2491 95.699 32.6575 98.982C32.8241 99.0335 33.0006 98.9717 33.1066 98.8325C35.5687 95.4208 37.7634 91.8233 39.6452 88.0403C39.7563 87.8187 39.6503 87.5558 39.4233 87.4682C35.942 86.1282 32.6272 84.4944 29.4386 82.6391C29.1863 82.4896 29.1662 82.1236 29.3982 81.9483C30.0692 81.4381 30.7404 80.9073 31.3811 80.3713C31.497 80.2734 31.6585 80.2527 31.7948 80.3146C52.7429 90.0194 75.4216 90.0194 96.1224 80.3146C96.2587 80.2476 96.4202 80.2683 96.5412 80.3661C97.1821 80.9021 97.8531 81.4381 98.5292 81.9483C98.7612 82.1236 98.7461 82.4896 98.4938 82.6391C95.3052 84.5305 91.9904 86.1282 88.5041 87.4631C88.2771 87.5507 88.1761 87.8187 88.2872 88.0403C90.2094 91.818 92.4041 95.4155 94.8208 98.8274C94.9217 98.9717 95.1033 99.0335 95.2699 98.982C105.729 95.699 116.334 90.746 127.282 82.5875C127.378 82.5154 127.439 82.4071 127.449 82.2886C130.118 54.2719 122.979 29.9354 108.524 8.36114C108.488 8.28906 108.428 8.23748 108.357 8.20656ZM42.7735 67.5278C36.4667 67.5278 31.27 61.6524 31.27 54.4369C31.27 47.2214 36.3659 41.3461 42.7735 41.3461C49.2313 41.3461 54.3776 47.273 54.2767 54.4369C54.2767 61.6524 49.1808 67.5278 42.7735 67.5278ZM85.3053 67.5278C78.9987 67.5278 73.8021 61.6524 73.8021 54.4369C73.8021 47.2214 78.8978 41.3461 85.3053 41.3461C91.7634 41.3461 96.9095 47.273 96.8087 54.4369C96.8087 61.6524 91.7634 67.5278 85.3053 67.5278Z"
          fill="#A6ADBB"
        ></path>
      </svg>
      <a href="https://discord.com/invite/hScy8KWACQ" target="_blank">Discord</a
      >
    </p>
  </div>
  <div class="stats mt-2 mb-8 flex rounded-2xl bg-gray-200 dark:bg-gray-700">
    <div
      class="stat place-items-center p-4 border-r border-gray-50 dark:border-gray-600"
    >
      <div class="stat-title dark:text-gray-400">Total Icons</div>
      <div class="stat-value text-4xl font-bold text-green-500">
        {$icons.length}
      </div>
    </div>
    <div class="stat place-items-center p-4">
      <div class="stat-title dark:text-gray-400">Total Versions</div>
      <div class="stat-value text-4xl font-bold text-green-500">
        {$totalVersions}
      </div>
    </div>
  </div>
  <p class="text-center dark:text-gray-400">
    For CSS usage, paste the code in the &lt;head&gt; of your HTML
  </p>
  <div
    class="code-snippet relative rounded-md w-auto p-4 pr-10 mt-4 dark:text-gray-400 bg-gray-200 dark:bg-gray-900"
  >
    <div class="tooltip absolute right-2 top-4 w-7">
      <button
        class="material-symbols-outlined copy rounded-full text-xl hover:cursor-pointer hover:hover-text-color"
        on:click={() => copyToClipboard('<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />')}
      >
        content_copy
      </button>
    </div>
    <code class="break-all">
      &lt;link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"&gt;
    </code>
  </div>
</header>

<style>
  .font-damion {
    font-family: "Damion", Times, serif;
  }
</style>
