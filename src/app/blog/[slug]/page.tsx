import { getContentList } from "@src/utils/markdown";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogs = await getContentList("blogs");
  const blog = blogs.find((b) => b.slug === params.slug);

  return {
    title: `${blog?.frontmatter.title} | Blog`,
    description: blog?.frontmatter.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const blogs = await getContentList("blogs");
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return <div>Blog not found</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{blog.frontmatter.title}</h1>
        {blog.frontmatter.date && (
          <time className="text-gray-600 dark:text-gray-400">
            {new Date(blog.frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        )}
      </header>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </article>
  );
}
