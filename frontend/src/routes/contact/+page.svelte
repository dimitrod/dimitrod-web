<script>
	import {colorText} from '$lib/colors.svelte';
	import {colorHover} from '$lib/colors.svelte';
	import {colorHeadings} from '$lib/colors.svelte';

	let email = ''
	let subject = ''
	let message = ''

	async function sendMail () {

    const res = await fetch('https://dimitrod.com/api/contact/?email=' + email + '&subject=' + subject + '&message=' + message, {
        method: 'POST',
        headers:{
            'Content-Type':'x-www-form-urlencoded',
			},
		})	

		let button = /** @type {HTMLButtonElement} */ (document.getElementById("send"));

		if(res.ok && button) {

				button.disabled = true;
				button.classList.remove("bg-purple-800");
				button.classList.remove("hover:bg-violet-700");
				button.classList.add("bg-green-600");
				button.innerHTML = "Message sent!";


			
		} else {

				button.disabled = true;
				button.classList.remove("bg-purple-800");
				button.classList.remove("hover:bg-violet-700");
				button.classList.add("bg-red-600");
				button.innerHTML = "Something went wrong!";
			
		}

	}

	function formValidty () {
		let form = /** @type {HTMLInputElement} */ (document.getElementById("contact-form"));

		if (form.checkValidity() == true) {
			sendMail ();

		}
	}

</script>

<svelte:head>
	<title>Contact me - D. Dimitrov</title>
	<meta name="description" content="Contact me!" />
</svelte:head>

<section class="animate">
	<div class="py-16 mx-auto max-w-screen-md">
		<h2 class="mb-4 text-4xl font-extrabold text-left { colorHeadings }">Contact Me</h2>
		<p class="mb-8 lg:mb-8 text-left { colorText } sm:text-xl">Want to hire me for some cool project? Let's go!</p>
		<form id="contact-form" class="space-y-8">
			<div>
				<label for="email" class="block mb-2 text-sm font-medium { colorText }">Your email</label>
				<input bind:value={email} id="email" type="email" class="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 " placeholder="name@email.com" required>
			</div>
			<div>
				<label for="subject" class="block mb-2 text-sm font-medium { colorText }">Subject</label>
				<input bind:value={subject} id="subject" type="text" class="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="What is this about?" required>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block mb-2 text-sm font-medium { colorText }">Your message</label>
				<textarea bind:value={message} id="message" rows="6" class="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 " placeholder="Tell me something cool!"></textarea>
			</div>
			<button id="send" on:click={formValidty} class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-800 sm:w-fit hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
		</form>
	</div>
  </section>