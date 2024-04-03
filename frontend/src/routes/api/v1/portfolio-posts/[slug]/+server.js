import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';


// define a GET method, since this API endpoint should only accept GET requests
export const GET = async ({ params }) => {

	// use the helper function in lib/utils to fetch the markdown posts
	const allPosts = await fetchMarkdownPosts();

	// now check if the URL-slug fits any of the post paths

    const post = allPosts.find((post) => post.path == params.slug)

	// if it exists, return the post - else, return a 404 error

	if(post){

		return json(post);

	} else {

		error(404, 'Not found');
	}
	
};