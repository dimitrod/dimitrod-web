<script>
	import smallImage from '$lib/images/erdulator_game.png';
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<svelte:head>
	<title>Erdulator</title>
	<meta name="description" content="A page about the erdulator.de project" />
</svelte:head>

<!-- ====== About Section Start -->
<section
   class="animate py-8 lg:py-16 mx-auto max-w-screen-md"
   >
   <div class="mx-auto">
      <div class="flex flex-wrap items-center justify-between">
         <div class="w-full sm:w-2/3 relative">
            <div class="relative mr-0 sm:mr-12">
				   <h1 class="text-4xl font-extrabold { colorHeadings } pb-4">Erdulator.de</h1>
               <p class="mb-4 lg:mb-8 text-left { colorText } sm:text-xl">
                  A climate change educational game. <br>
                  Created as a third and fourth semester 
                  project in LAMP stack, built together 
                  with four other students. I was mainly responsible for layout, (game-)design and graphics. </p>
                  <a class="font-extrabold text-2xl" href="https://erdulator.de/">Play now - https://erdulator.de/</a>      
            </div>
         </div>
         <div class="w-0 sm:w-1/3 invisible sm:visible">
               <div class="w-full pl-4">
                  <div class="">
                     <img
                        src="{smallImage}"
                        alt=""
                        class="w-full rounded-2xl"
                        />
               </div>
            </div>
         </div>
      </div>
      <img
         src="https://placehold.co/768x432"
         alt=""
         class="w-full mt-8 rounded-2xl"
      />
   </div>
</section>
<!-- ====== About Section End -->