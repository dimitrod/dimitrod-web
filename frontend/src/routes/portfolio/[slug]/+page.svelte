<script>
   export let data;
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<svelte:head>
	<title>Erdulator</title>
	<meta name="description" content="A page about the erdulator.de project" />
</svelte:head>

<section
   class="animate py-8 lg:py-16 mx-auto max-w-screen-md"
   >
   <div class="mx-auto">
      <div class="flex flex-wrap items-center justify-between">
         <div class="w-full sm:w-2/3 relative">
            <div class="relative mr-0 sm:mr-12">
				   <h1 class="text-4xl font-extrabold { colorHeadings } pb-4">{data.title}</h1>
               <p class="mb-4 lg:mb-8 text-left { colorText } sm:text-xl">
                  <svelte:component this={data.content} /></p>  
            </div>
         </div>
         <div class="w-0 sm:w-1/3 invisible sm:visible">
               <div class="w-full pl-4">
                  <div class="">
                     <img
                        src="{ "../../src/lib/images/" + data.image_small}"
                        alt=""
                        class="w-full rounded-2xl"
                        />
               </div>
            </div>
         </div>
      </div>
      <img
         src="{ "../../src/lib/images/" + data.image_big}"
         alt=""
         class="w-full mt-8 rounded-2xl"
      />
   </div>
</section>

<style>
   a {
      font-weight: 800;
      font-size: 1.5rem;
   }
</style>
