export async function load({ params }) {
	const post = await import(`../../../lib/portfolio-posts/${params.slug}.md`);
	const { title, image_small, image_big } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
        image_small,
        image_big
		
	};
}