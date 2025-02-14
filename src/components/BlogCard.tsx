import Link from "next/link";
import type { FrontMatter } from "@src/utils/markdown";

interface BlogCardProps {
  slug: string;
  frontmatter: FrontMatter;
}

export default function BlogCard({ slug, frontmatter }: BlogCardProps) {
  const { title, date, description, tags } = frontmatter;

  return (
    <Link
      href={`/blog/${slug}`}
      className="block p-6 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-colors"
    >
      <article>
        <div className="space-y-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          {date && (
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          )}
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}
