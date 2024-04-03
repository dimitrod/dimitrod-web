// fetch the posts from the API endpoint

export const load = async ({ fetch }) => {
	const response = await fetch(`/api/v1/portfolio-posts`);
	const posts = await response.json();

	return {
		posts
	};
};
