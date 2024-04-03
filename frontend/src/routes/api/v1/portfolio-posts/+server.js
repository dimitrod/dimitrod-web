import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

// define a GET method, since this API endpoint should only accept GET requests
export const GET = async () => {

	// use the helper function in lib/utils to fetch the markdown posts
	const allPosts = await fetchMarkdownPosts();

	// return all posts as a JSON-object
	return json(allPosts);
};