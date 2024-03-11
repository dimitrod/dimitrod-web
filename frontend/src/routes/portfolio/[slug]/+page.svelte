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

<section class="animate py-16 mx-auto max-w-screen-md">
   <div class="mx-auto">
      <div class="grid grid-cols-3 gap-4">
         <div class="w-full col-span-3 sm:col-span-2 relative">
            <div class="relative mr-0 sm:mr-12">
				   <h1 class="text-4xl font-extrabold { colorHeadings } pb-4">{data.title}</h1>
               <p class="mb-4 lg:mb-8 text-left { colorText } sm:text-xl">
                  <svelte:component this={data.content} /></p>  
            </div>
         </div>
         <div class="col-span-0 sm:col-span-1 hidden sm:inline-block">
            <img
               src="{ "../../src/lib/images/" + data.image_small}"
               alt=""
               class="w-full rounded-2xl"
               />
         </div>
      </div>
      {#if data.type == "image"}
         <img
            src="{ "../../src/lib/images/" + data.big}"
            alt=""
            class="w-full mt-8 rounded-2xl"
         />
      {:else if data.type == "video"}
         <video class="w-full rounded-2xl cursor-pointer h-[393px] object-cover" poster="{ "../../src/lib/images/" + data.image_small}" controls>
            <source src="{ "../../src/lib/video/" + data.big}" type="video/mp4">
            Your browser does not support the video tag.
            <track kind="captions" />
         </video>
      {:else if data.type == "gallery"}
         <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            <div>
                  <img class="h-auto max-w-full rounded-2xl" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="">
            </div>
         </div>
      {/if}
   </div>
</section>

<style>
   a {
      font-weight: 800;
      font-size: 1.5rem;
   }
</style>
