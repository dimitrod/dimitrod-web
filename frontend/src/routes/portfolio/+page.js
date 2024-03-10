export const _getMarkdownPosts = async () => {
        const allPostFiles = import.meta.glob("../../lib/portfolio-posts/*.md")
        const iterablePostFiles = Object.entries(allPostFiles)
    
        const allPosts = await Promise.all(
            iterablePostFiles.map(async ([path]) => {
                    const postPath = path.split('/').at(-1)?.replace('.md', '')
                    const post = await import(path);
                    const { title, blurb, image_small} = post.metadata;

                return {
                    postPath,
                    title,
                    blurb,
                    image_small
                }
            })
        )
    
        return allPosts
    }
