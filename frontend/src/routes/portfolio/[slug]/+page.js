export async function load({ params }) {
	const post = await import(`../../../lib/portfolio-posts/${params.slug}.md`);
	const { title, image_small, big, type, blurb } = post.metadata;
	const content = post.default;

	return {
		content,
		title,
		blurb,
        image_small,
        big,
		type
		
	};
}