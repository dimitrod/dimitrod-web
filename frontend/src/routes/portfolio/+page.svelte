<script>
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';

	import erdulatorGame from '$lib/images/erdulator_game.png';
	import erdulatorTrailer from '$lib/images/erdulator_trailer.png';
	import kochbuch from '$lib/images/kochbuch.png';
	import hansHass from '$lib/images/hans_hass.png';
	import { _getMarkdownPosts } from './+page';

	const foo = _getMarkdownPosts();
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="This is my portfolio" />
</svelte:head>
<section class="animate container m-auto max-w-screen-md">

	<div class="grid grid-cols-1 md:grid-cols-2 content-center gap-16 pb-24 pt-12">
<!--
		{#each (async () => await _getMarkdownPosts()) as post}
			<a href="/portfolio/{post.postPath}">
				<div class="flip-card m-auto group">
					<div class="flip-card-inner">
						<div class="flip-card-front">
							<img class="w-full h-full object-cover rounded-lg " src="{ post.image_small }" alt="Placeholder" />
						</div>
						<div class="flip-card-back rounded-lg overflow-hidden">
							<span class="absolute z-30 w-full h-16 transition-all duration-1000 transform translate-y-48 bg-transparent opacity-100 group-hover:-translate-y-16 ease text-white">
								<p class="title leading-tight text-shadow text-amber-400">{post.title}</p><br>
								<p class="mx-8">{post.blurb}</p>
							
							</span>		
						</div>
					</div>
				</div>
			</a>
		{/each}
-->	
		<a href="/portfolio/erdulator">
			<div class="flip-card m-auto group">
				<div class="flip-card-inner">
					<div class="flip-card-front">
						<img class="w-full h-full object-cover rounded-lg " src="{ kochbuch }" alt="Placeholder" />
					</div>
					<div class="flip-card-back rounded-lg overflow-hidden">
						<span class="absolute z-30 w-full h-16 transition-all duration-1000 transform translate-y-48 bg-transparent opacity-100 group-hover:-translate-y-16 ease text-white">
							<p class="title leading-tight text-shadow text-amber-400">Kochbuch der <br>Minimalistin</p><br>
							<p class="mx-8">A personal project for my partner.</p>
						
						</span>		
					</div>
				</div>
			</div>
		</a>

		<a href="/portfolio/erdulator">
		<div class="flip-card m-auto group">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img class="w-full h-full object-cover rounded-lg " src="{ erdulatorTrailer }" alt="Placeholder" />
				</div>
				<div class="flip-card-back rounded-lg overflow-hidden">
					<span class="absolute z-30 w-full h-16 transition-all duration-1000 transform translate-y-48 bg-transparent opacity-100 group-hover:-translate-y-16 ease text-white">
						<p class="title leading-tight text-shadow text-amber-400">Erdulator Trailer</p><br>
						<p class="mx-8">A trailer for the newest version of erdulator.de</p>
					</span>
				</div>
			</div>
		</div>
	</a>
	<a href="/portfolio/erdulator">
		<div class="flip-card m-auto group">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img class="w-full h-full object-cover rounded-lg " src="{ erdulatorGame }" alt="Placeholder" />
				</div>
				<div class="flip-card-back rounded-lg overflow-hidden">
					<span class="absolute z-30 w-full h-16 transition-all duration-1000 transform translate-y-48 bg-transparent opacity-100 group-hover:-translate-y-16 ease text-white">
						<p class="title leading-tight text-shadow text-amber-400">Erdulator Website</p><br>
						<p class="mx-8">An educational climate change webgame, can you do better than our leaders?</p>
					</span>
				</div>
			</div>
		</div>
	</a>
	<a href="/portfolio/erdulator">
		<div class="flip-card m-auto group">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img class="w-full h-full object-cover rounded-lg" src="{ hansHass }" alt="Placeholder" />
				</div>
				<div class="flip-card-back rounded-lg overflow-hidden">
					<span class="absolute z-30 w-full h-16 transition-all duration-1000 transform translate-y-48 bg-transparent opacity-100 group-hover:-translate-y-16 ease text-white">
						<p class="title leading-tight text-shadow text-amber-400">An der Seite<br>von Hans Hass</p><br>
						<p class="mx-8">Birthday present for the<br>70th of a friend.</p>
					</span>
				</div>
			</div>
		</div>
	</a>

	</div>
</section>

<style>
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
	  
	  .flip-card-front {
	  }
	  
	  .flip-card-back {
		background: linear-gradient(120deg, red -100%, blue 200%);
		color: white;
		transform: rotateY(180deg);
	  }
</style>