import Image from "next/image";
import Link from "next/link";
import type { FrontMatter } from "@src/utils/markdown";

interface ProjectCardProps {
  slug: string;
  frontmatter: FrontMatter;
}

export default function ProjectCard({ slug, frontmatter }: ProjectCardProps) {
  const { title, description, tags, github, demo, image } = frontmatter;

  return (
    <article className="rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
      {image && (
        <div className="relative h-48 w-full">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>
      )}

      <div className="p-6 space-y-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>

        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          {github && (
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >
              GitHub →
            </Link>
          )}
          {demo && (
            <Link
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300"
            >
              Live Demo →
            </Link>
          )}
          <Link
            href={`/projects/${slug}`}
            className="text-sm font-medium hover:text-gray-600 dark:hover:text-gray-300 ml-auto"
          >
            Read More →
          </Link>
        </div>
      </div>
    </article>
  );
}
