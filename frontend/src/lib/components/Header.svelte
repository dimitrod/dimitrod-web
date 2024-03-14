<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/logo_small.png';
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<header class="sticky top-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 max-w-screen-md text-sm py-3 sm:py-0 container m-auto bg-pattern">
	<nav class="relative max-w-[60rem] w-full mx-auto sm:flex sm:items-center sm:justify-between">
	  <div class="flex flex-auto items-center justify-between">
		<a href="/"><img class="h-8 w-auto max-w-max" alt="Dimitar Dimitrov Logo" src={logo}></a>
	  </div>
	  <label class="flex sm:hidden relative z-40 cursor-pointer px-2 -mt-4 ml-16 flex-auto justify-end" for="mobile-menu">
		<input class="hidden peer" type="checkbox" id="mobile-menu" />
		<div
			class=	"relative z-50 block h-[2px] w-7 bg-fuchsia-400  bg-transparent content-[''] 
					before:absolute before:top-[-0.35rem] before:z-50 before:block before:h-full 
					before:w-full before:bg-rose-400  before:transition-all before:duration-200 
					before:ease-out before:content-[''] after:absolute after:right-0 
					after:bottom-[-0.35rem] after:block after:h-full after:w-full 
					after:bg-yellow-400  after:transition-all after:duration-200 after:ease-out 
					after:content-[''] peer-checked:bg-transparent before:peer-checked:top-0 
					before:peer-checked:w-full before:peer-checked:rotate-45 before:peer-checked:transform 
					after:peer-checked:bottom-0 after:peer-checked:w-full after:peer-checked:-rotate-45 
					after:peer-checked:transform"
		>
		</div>
		<div class="fixed top-0 right-0 z-40 h-full w-full -translate-y-full overflow-y-auto overscroll-y-none transition duration-500 peer-checked:translate-y-0">
			<div class="max-h-auto w-full bg-black/85 backdrop-blur px-6 pt-6 shadow-2xl">
				<div class="p-8 flex flex-col justify-center gap-y-8 gap-x-0">
					<a class="text-base ring-2 p-2 mx-8 ring-yellow-600 text-center hover:no-underline font-bold { colorText } { colorHover }" href="/portfolio">Portfolio</a>
					<a class="text-base ring-2 p-2 mx-8 ring-yellow-600 text-center hover:no-underline font-bold { colorText } { colorHover }" href="/about">About</a>
					<a class="text-base ring-2 p-2 mx-8 ring-yellow-600 text-center hover:no-underline font-bold { colorText } { colorHover }" href="/legal-notice">Legal Notice</a>
					<a class="group text-center { colorText } { colorHover }" href="/contact">	
						<button class="relative overflow-hidden py-2 px-5 text-base font-medium text-center text-white rounded-lg bg-fuchsia-800 sm:w-fit focus:outline-none">
							<span class="absolute right-0 top-0 z-30 w-48 h-16 transition-all duration-700 transform -translate-x-28 bg-yellow-500 group-hover:-translate-x-0 ease"></span>
							<span class="relative font-bold z-40 text-shadow">Contact</span>
						</button>
					</a>
				</div>
			</div>
		</div>
	</label>

	  <div class="overflow-hidden transition-all duration-300 basis-full grow hidden sm:block">
		<div class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
			<a class="hover:no-underline font-bold { colorText } { colorHover } sm:py-6" href="/portfolio">Portfolio</a>
			<a class="hover:no-underline font-bold { colorText } { colorHover } sm:py-6" href="/about">About</a>
			<a class="hover:no-underline font-bold { colorText } { colorHover } sm:py-6" href="/legal-notice">Legal Notice</a>
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