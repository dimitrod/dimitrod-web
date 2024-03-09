<script>
	import kochbuch_01 from '$lib/images/kochbuch_01.png';
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
                        src="https://via.placeholder.com/240x360"
                        alt=""
                        class="w-full rounded-2xl"
                        />
                  </div>
               </div>
            </div>
         </div>
         <div class="w-2/3">
            <div class="ml-12">
				<h1 class="text-4xl font-extrabold text-teal-800 pb-4">About me</h1>
               	<p class="mb-4 lg:mb-8 text-left text-gray-900 sm:text-xl">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less.
               </p>
               <p class="mb-8 lg:mb-16 text-left text-gray-900 sm:text-xl">
                  A domain name is one of the first steps to establishing your
                  brand. Secure a consistent brand image with a domain name that
                  matches your business.
               </p>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- ====== About Section End -->