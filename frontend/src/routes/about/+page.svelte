<script>
	import aboutImage from '$lib/images/about_02.png';
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<!-- ====== About Section Start -->
<section
   class="animate py-8 lg:py-16 mx-auto max-w-screen-md"
   >
   <div class="container mx-auto">
      <div class="flex flex-wrap items-center justify-between">
         <div class="w-1/3">
            <div class="flex items-center">
               <div class="w-full pr-4 -mt-8">
                  <div class="">
                     <img
                        src="{aboutImage}"
                        alt=""
                        class="w-full rounded-2xl"
                        />
                  </div>
               </div>
            </div>
         </div>
         <div class="w-2/3">
            <div class="ml-12">
				<h1 class="text-4xl font-extrabold { colorHeadings } pb-4">About me</h1>
               	<p class="mb-4 lg:mb-8 text-left { colorText } sm:text-xl">
                    Born in Bulgaria, raised in Germany, 
                    I have a bachelor's degree in Intermedia Design 
                    and am currently enrolled at the HWR Berlin for 
                    a second bachelor's degree in Computer Science.
               </p>
               <p class="mb-8 lg:mb-16 text-left { colorText } sm:text-xl">
                  I'm a jack-of-all-trades, currently interested in
                  web and software development. Other stuff I like: 
                  analog photography, board games, cooking and bouldering.
                  Ask me about my RPG books collection!
               </p>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- ====== About Section End -->