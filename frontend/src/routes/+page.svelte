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
		<!--<a href="/portfolio" class="animate_logo -mt-48 rounded px-5 py-2.5 overflow-hidden group bg-teal-800 relative hover:bg-gradient-to-r hover:from-teal-800 hover:to-teal-600 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 transition-all ease-out duration-300">
			<span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
			<span class="relative">Show me your projects</span>
		</a> -->
		<div class="flex-none flex gap-0 small-card-parent animate_logo w-auto">
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-200">
					<div class="small-card-front">
					</div>
					<div class="small-card-back">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-300">
					<div class="small-card-front">
					</div>
					<div class="small-card-back">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-500">
					<div class="small-card-front">
					</div>
					<div class="small-card-back">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-700">
					<div class="small-card-front">
					</div>
					<div class="small-card-back">
					</div>
				</div>
			</div>
			<div class="flex-none small-card m-auto ">
				<div class="small-card-inner duration-1000">
					<div class="small-card-front">
					</div>
					<div class="small-card-back">
					</div>
				</div>
			</div>
			
		</div>
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
	box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
	border: 1px solid teal;
	border-radius: 0.5rem;
  }
  
  .small-card-front {
	color: #134e4a;
  }
  
  .small-card-back {
	background: linear-gradient(120deg, #134e4a 30%, #0f766e 88%,
	#2dd4bf 40%, #134e4a 78%);
	color: white;
	transform: rotateY(180deg);
  }
</style>
