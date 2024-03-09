<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact me!" />
</svelte:head>

<section class="animate">
	<div class="py-8 lg:py-16 mx-auto max-w-screen-md">
		<h2 class="mb-4 text-4xl font-extrabold text-left text-teal-800">Contact Me</h2>
		<p class="mb-8 lg:mb-16 text-left text-gray-700 sm:text-xl">Want to hire me for some cool project? Let's go!</p>
		<form action="#" class="space-y-8">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
				<input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@flowbite.com" required>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Subject</label>
				<input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let us know how we can help you" required>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
				<textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Leave a comment..."></textarea>
			</div>
			<button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-teal-800 sm:w-fit hover:bg-teal-600 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
		</form>
	</div>
  </section>