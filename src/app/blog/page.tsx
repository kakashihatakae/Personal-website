import { getContentList } from "@src/utils/markdown";
import BlogCard from "@src/components/BlogCard";

export const metadata = {
  title: "Blog | Your Name",
  description: "Articles about web development, technology, and more",
};

export default async function BlogPage() {
  const blogs = await getContentList("blogs");

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} {...blog} />
        ))}
      </div>
    </main>
  );
}
