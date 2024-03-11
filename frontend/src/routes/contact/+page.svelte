<script>
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';
</script>

<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact me!" />
</svelte:head>

<section class="animate">
	<div class="py-16 mx-auto max-w-screen-md">
		<h2 class="mb-4 text-4xl font-extrabold text-left { colorHeadings }">Contact Me</h2>
		<p class="mb-8 lg:mb-8 text-left { colorText } sm:text-xl">Want to hire me for some cool project? Let's go!</p>
		<form action="#" class="space-y-8">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium { colorText }">Your email</label>
				<input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 { colorText } text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium { colorText }">Subject</label>
				<input type="text" id="subject" class="block p-3 w-full text-sm { colorText } bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium { colorText }">Your message</label>
				<textarea id="message" rows="6" class="block p-2.5 w-full text-sm { colorText } bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
			</div>
			<button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-800 sm:w-fit hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
		</form>
	</div>
  </section>