<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo_small.png';
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<header class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 max-w-screen-md text-sm py-3 sm:py-0 container m-auto bg-pattern">
	<nav class="relative max-w-[60rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
	  <div class="flex items-center justify-between">
		<a href="/"><img class="h-8 w-auto max-w-max" alt="Dimitar Dimitrov Logo" src={logo}></a>
		<div class="sm:hidden">
		  <button type="button" class="size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-teal-900 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
			<svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
			<svg class="hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		  </button>
		</div>
	  </div>
	  <div class="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
		<div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
			<a class="hover:no-underline font-bold { colorText } { colorHover } sm:py-6" href="/portfolio">Portfolio</a>
			<a class="hover:no-underline font-bold { colorText } { colorHover } sm:py-6" href="/about">About</a>
			<a class="hover:no-underline font-bold { colorText } { colorHover } sm:py-6" href="/imprint">Imprint</a>
			<a class="group { colorText } { colorHover } sm:py-6" href="/contact">	
				<button class="relative overflow-hidden py-2 px-5 text-sm font-medium text-center text-white rounded-lg bg-fuchsia-800 sm:w-fit focus:outline-none">
					<span class="absolute right-0 top-0 z-30 w-48 h-16 transition-all duration-700 transform -translate-x-28 bg-yellow-500 group-hover:-translate-x-0 ease"></span>
					<span class="relative font-bold z-40 text-shadow">Contact</span>
				</button>
			</a>
		</div>
	  </div>
	</nav>
  </header>