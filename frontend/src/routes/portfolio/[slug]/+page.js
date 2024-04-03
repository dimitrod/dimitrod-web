// fetch the post with the correct slug from the API endpoint

export const load = async ({ fetch, params }) => {
	const response = await fetch('/api/v1/portfolio-posts/' + params.slug);
	const post = await response.json();

	const { title, image_small, big, type, blurb } = post.meta;
	const content = post.body;
	const slug = post.path;

	return {
		content,
		title,
		blurb,
        image_small,
        big,
		type,
		slug
		
	};
}; 
