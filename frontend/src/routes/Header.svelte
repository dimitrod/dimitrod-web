<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo.png';
</script>

<header class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-gray-50 text-sm py-3 sm:py-0 shadow-md">
	<nav class="relative max-w-[60rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
	  <div class="flex items-center justify-between">
		<a href="#"><img class="m-2 h-24 w-auto max-w-max" alt="Dimitar Dimitrov Logo" src={logo}></a>
		<div class="sm:hidden">
		  <button type="button" class="hs-collapse-toggle size-9 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-white/20 text-teal-900 hover:border-white/40 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation">
			<svg class="hs-collapse-open:hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
			<svg class="hs-collapse-open:block hidden flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
		  </button>
		</div>
	  </div>
	  <div id="navbar-collapse-with-animation" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
		<div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
		  <a class="hover:no-underline font-bold text-teal-900 sm:py-6" href="#">Portfolio</a>
		  <a class="hover:no-underline font-bold text-teal-900/[.8] hover:text-teal-600 sm:py-6" href="#">About</a>
		  <a class="hover:no-underline font-bold text-teal-900/[.8] hover:text-teal-600 sm:py-6" href="#">Contact</a>
		  <a class="hover:no-underline font-bold text-teal-900/[.8] hover:text-teal-600 sm:py-6" href="#">Imprint</a>
		</div>
	  </div>
	</nav>
  </header>