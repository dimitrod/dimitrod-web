<script>
	import "../app.css";
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/styles.css';
	import '$lib/styles/fonts.css';
</script>

<div class="app px-4">
	<Header />

	<main class="">
		<slot />
	</main>
</div>