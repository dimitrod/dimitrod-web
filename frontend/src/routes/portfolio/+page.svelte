<script>
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
	import erdImage from '$lib/images/erdulator_game.png';

	export let data;
</script>

<svelte:head>
	<title>Portfolio - D. Dimitrov</title>
	<meta name="description" content="This is my portfolio" />
</svelte:head>
<section class="animate container m-auto max-w-screen-md">
	<div class="grid grid-cols-1 md:grid-cols-2 content-center gap-16 pb-24 pt-16">

	{#each data.posts as post}
	<a href="/portfolio/{post.path}" class="mt-8 mr-8 grid grid-cols-5 gap-0 small-card-parent rounded-lg w-[354px] overflow-hidden group relative ring-offset-black hover:ring-2 hover:ring-offset-2 hover:ring-pink-500 transition-all ease-out duration-300">
		<!--<span class="absolute z-30 right-0 w-8 h-48 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-30 rotate-12 group-hover:-translate-x-40 ease"></span>-->
		
		{#each Array(5) as _, j}
			<div class="col-span-1 w-auto m-0 p-0">
				{#each Array(5) as _, i}
				<div class="small-card">

					{#if i == 0}
						<div class="w-full small-card-inner small-card-inner-neg duration-150">
							<div class="overflow-hidden small-card-front cards-gradient">	
								<img alt="{post.meta.title}" class="absolute top-f{ i * 70 } left-f{ j * 70 } min-w-[355px] h-[355px]" src="/images/{ post.meta.image_small }" >
						</div>
						<div class="small-card-back small-card-back-neg bg-violet-950">
						</div>
					</div>
     				{:else if i == 1}
					 	<div class="w-full small-card-inner small-card-inner-neg duration-200">
							<div class="overflow-hidden small-card-front cards-gradient">	
								<img alt="{post.meta.title}" class="absolute top-f{ i * 70 } left-f{ j * 70 } min-w-[355px] h-[355px]" src="/images/{ post.meta.image_small }" >
						</div>
						<div class="small-card-back small-card-back-neg bg-violet-950">
						</div>
					</div>
					{:else if i == 2}
						<div class="w-full small-card-inner small-card-inner-neg duration-300">
							<div class="overflow-hidden small-card-front cards-gradient">	
								<img alt="{post.meta.title}" class="absolute top-f{ i * 70 } left-f{ j * 70 } min-w-[355px] h-[355px]" src="/images/{ post.meta.image_small }" >
						</div>
						<div class="small-card-back small-card-back-neg bg-violet-950">
						</div>
					</div>
					{:else if i == 3}
						<div class="w-full small-card-inner small-card-inner-neg duration-500">
							<div class="overflow-hidden small-card-front cards-gradient">	
								<img alt="{post.meta.title}" class="absolute top-f{ i * 70 } left-f{ j * 70 } min-w-[355px] h-[355px]" src="/images/{ post.meta.image_small }" >
						</div>
						<div class="small-card-back small-card-back-neg bg-violet-950">
						</div>
					</div>
					{:else}
						<div class="w-full small-card-inner small-card-inner-neg duration-700">
							<div class="overflow-hidden small-card-front cards-gradient">	
								<img alt="{post.meta.title}" class="absolute top-f{ i * 70 } left-f{ j * 70 } min-w-[355px] h-[355px]" src="/images/{ post.meta.image_small }" >
						</div>
						<div class="small-card-back small-card-back-neg bg-violet-950">
						</div>
					</div>
					{/if}



						
				</div>
				{/each}
				
			</div>
		{/each}
		<div class="absolute opacity-0 p-16 z-50 group-hover:opacity-100 ease duration-300 w-[354px] h-[354px] portfolio-back">
			<p class="title align-middle leading-tight text-center text-shadow text-white text-shadow">{post.meta.title}</p><br>
			<p class="text-center align-middle text-amber-400">{post.meta.blurb}</p>
							
		</div>


	</a>
 
	{/each}

	</div>
</section>

<style>


.top-f0 {
	top: 0
}

.top-f70 {
	top: -70px
}

.top-f140 {
	top: -140px
}

.top-f210 {
	top: -210px
}

.top-f280 {
	top: -280px
}

.top-f350 {
	top: -350px
}

.left-f0 {
	left: 0
}

.left-f70 {
	left: -70px
}

.left-f140 {
	left: -140px
}

.left-f210 {
	left: -210px
}

.left-f280 {
	left: -280px
}

.left-f350 {
	left: -350px
}


.duration-900 {
	transition-duration: 900s
}

.duration-1100 {
	transition-duration: 1100s
}


.small-card {
	background-color: transparent;
	width: 71px;
	height: 71px;
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
  
  .small-card-parent:hover .small-card-inner-pos {
	transform: rotateY(180deg);
  }

  .small-card-back-pos {
	transform: rotateY(180deg);
  }

  .small-card-parent:hover .small-card-inner-neg {
	transform: rotateY(-180deg);
  }

  .small-card-back-neg {
	transform: rotateY(-180deg);
  }
  
  .small-card-front, .small-card-back {
	position: absolute;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 105%;
	height: 100%;
	-webkit-backface-visibility: hidden;
	backface-visibility: hidden;
  }
  
  
 

  .cards-gradient {
	width: 71px;
	height: 71px;
	background-image:linear-gradient(45deg, red 0 10%, blue 80% 100%);
	background-attachment:fixed;
}













	.flip-card {
		background-color: transparent;
		width: 352px;
		height: 352px;
		perspective: 1000px;
		font-family: sans-serif;
	  }
	  
	  .title {
		font-size: 2em;
		font-family: 'Lato', sans-serif;
		font-weight: 800;
		text-align: center;
		margin: 0;
	  }
	  
	  .flip-card-inner {
		position: relative;
		width: 100%;
		height: 100%;
		text-align: center;
		transition: transform 0.6s;
		transform-style: preserve-3d;
	  }
	  
	  .flip-card:hover .flip-card-inner {
		transform: rotateY(180deg);
	  }
	  
	  .flip-card-front, .flip-card-back {
		box-shadow: 0 8px 14px 0 rgba(0,0,0,0.2);
		position: absolute;
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		backface-visibility: hidden;
	  }
	  
	  .flip-card-back {
		background: linear-gradient(120deg, red -100%, blue 200%);
		color: white;
		transform: rotateY(180deg);
	  }
</style>