export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/static/portfolio-posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const post = await resolver();
			const postPath = path.slice(24, -3);
			// @ts-ignore
			const metadata = post.metadata;	
			// @ts-ignore
			const content = post.default.render();
			
			return {
				meta: metadata,	
				body: content.html,
				path: postPath
			};
		})
	);

	return allPosts;
}; 