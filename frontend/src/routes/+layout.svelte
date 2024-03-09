<script>
	import "../app.css";
	import Header from './Header.svelte';
	import './styles.css';
	import '../styles/fonts.css';
</script>

<div class="app px-4">
	<Header />

	<main class="">
		<slot />
	</main>
</div>

<style>

</style>
