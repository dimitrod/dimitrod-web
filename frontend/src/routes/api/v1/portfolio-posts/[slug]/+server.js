import { fetchMarkdownPosts } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	const allPosts = await fetchMarkdownPosts();

    const post = allPosts.find((post) => post.path == params.slug)

	return json(post);
};