<script>
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="This is my portfolio" />
</svelte:head>
<section class="animate container m-auto max-w-screen-md">

	<div class="grid grid-cols-1 md:grid-cols-2 content-center gap-16 pb-24 pt-12">
		
		<div class="flip-card m-auto ">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img class="w-full h-full object-cover rounded-lg " src="https://via.placeholder.com/352" alt="Placeholder" />
				</div>
				<div class="flip-card-back">
					<p class="title">Kochbuch der <br>Minimalistin</p><br>
					<p>Ein persönliches Projekt für meine Partnerin.</p>
				</div>
			</div>
		</div>
		<div class="flip-card m-auto ">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img class="w-full h-full object-cover rounded-lg " src="https://via.placeholder.com/352" alt="Placeholder" />
				</div>
				<div class="flip-card-back">
					<p class="title">Kochbuch der <br>Minimalistin</p><br>
					<p>Ein persönliches Projekt für meine Partnerin.</p>
				</div>
			</div>
		</div>
		<div class="flip-card m-auto ">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img class="w-full h-full object-cover rounded-lg " src="https://via.placeholder.com/352" alt="Placeholder" />
				</div>
				<div class="flip-card-back">
					<p class="title">Kochbuch der <br>Minimalistin</p><br>
					<p>Ein persönliches Projekt für meine Partnerin.</p>
				</div>
			</div>
		</div>
		<div class="flip-card m-auto ">
			<div class="flip-card-inner">
				<div class="flip-card-front">
					<img class="w-full h-full object-cover rounded-lg " src="https://via.placeholder.com/352" alt="Placeholder" />
				</div>
				<div class="flip-card-back">
					<p class="title">Kochbuch der <br>Minimalistin</p><br>
					<p>Ein persönliches Projekt für meine Partnerin.</p>
				</div>
			</div>
		</div>

	</div>
</section>

<stlye>

</stlye>