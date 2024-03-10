<script>
	import logo from '$lib/images/logo_test.png';
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';

	let cardColor = 'bg-red-600';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="animate container m-auto max-w-screen-md -mt-24">
	<div class="flex flex-wrap h-[80vh] justify-center items-center mt-24">
		<h1 class="{ colorHeadings } font-bold mb-2 flex-1 pb-20 text-right front-h1 mr-[35px] w-0 md:w-2/5 hidden md:inline-block">
			Hi! I'm
		</h1>
		<div class="flex-none animate_logo w-full md:w-3/5 h-auto">
			<img class="w-auto h-auto" src={logo} alt="Dimitar Dimitrov Logo" />
		</div>
		<a href="/portfolio" class="-mt-48 flex-none flex gap-0 small-card-parent animate_logo rounded-lg w-auto overflow-hidden group relative ring-offset-black hover:ring-2 hover:ring-offset-2 hover:ring-pink-500 transition-all ease-out duration-300">
			<div class="opacity-100 absolute flex justify-center items-center w-full h-full m-auto z-50 text-center align-middle text-white font-bold text-shadow text-xl transition-all ease-out duration-300 group-hover:opacity-0">Portfolio</div>
			<div class="opacity-0 absolute flex justify-center items-center w-full h-full m-auto z-50 text-center align-middle text-white text-shadow text-xl font-bold transition-all ease-out duration-300 group-hover:opacity-100">Show me!</div>
			<span class="absolute z-30 right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-30 rotate-12 group-hover:-translate-x-40 ease"></span>
			<div class="flex-none small-card m-auto">
				<div class="small-card-inner duration-200">
					<div class="small-card-front rounded-l-lg cards-gradient">
					</div>
					<div class="small-card-back bg-yellow-500 rounded-l-lg">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-300">
					<div class="small-card-front cards-gradient">
					</div>
					<div class="small-card-back bg-yellow-500">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-500">
					<div class="small-card-front cards-gradient">
					</div>
					<div class="small-card-back bg-yellow-500">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-700">
					<div class="small-card-front cards-gradient">
					</div>
					<div class="small-card-back bg-yellow-500">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-1000">
					<div class="small-card-front cards-gradient rounded-r-lg">
					</div>
					<div class="small-card-back bg-yellow-500 rounded-r-lg">
					</div>
				</div>
			</div>
			
		</a>
	</div>	
</section>

<style>
	
.small-card {
	background-color: transparent;
	width: 45px;
	height: 45px;
	perspective: 1000px;
	font-family: sans-serif;
  }
  
  .small-card-inner {
	position: relative;
	width: 100%;
	height: 100%;
	text-align: center;
	transform-style: preserve-3d;
  }
  
  .small-card-parent:hover .small-card-inner {
	transform: rotateY(180deg);
  }
  
  .small-card-front, .small-card-back {
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
  }
  
  .small-card-front {
  }
  
  .small-card-back {
	transform: rotateY(180deg);
  }

  .cards-gradient {
	width: 45px;
	height: 45px;
	background-image:linear-gradient(45deg, red 0 10%, blue 80% 100%);
	background-attachment:fixed;
}


</style>
