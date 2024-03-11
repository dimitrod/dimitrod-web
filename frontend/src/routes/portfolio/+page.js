export const load = async ({ fetch }) => {
	const response = await fetch(`/api/portfolio-posts`);
	const posts = await response.json();

	return {
		posts
	};
};
