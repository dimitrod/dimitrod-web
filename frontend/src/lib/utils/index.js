export const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/lib/portfolio-posts/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			// @ts-ignore
			const { metadata } = await resolver();
			const postPath = path.slice(25, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};