<script>
	import logo from '$lib/images/logo_test.png';
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="animate container m-auto max-w-screen-md -mt-24">
	<div class="flex flex-wrap h-[80vh] justify-center items-center mt-24">
		<h1 class="{ colorHeadings } font-bold mb-2 flex-1 pb-20 text-right front-h1 mr-[35px] w-2/5">
			Hi! I'm
		</h1>
		<div class="flex-none animate_logo w-3/5 h-auto">
			<img class="w-auto h-auto" src={logo} alt="Dimitar Dimitrov Logo" />
		</div>
		<a href="/portfolio" class="animate_logo -mt-48 rounded px-5 py-2.5 overflow-hidden group bg-teal-800 relative hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
			<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
			<span class="relative">Show me your projects</span>
		</a>
	</div>	
</section>
