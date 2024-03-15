<script>
// @ts-nocheck

	import { page } from '$app/stores';
</script>

<h1 class="text-white text-center text-shadow pt-16">{$page.status}: {$page.error.message}</h1>