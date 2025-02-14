import { getContentList } from "@src/utils/markdown";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projects = await getContentList("projects");
  const project = projects.find((p) => p.slug === params.slug);

  return {
    title: `${project?.frontmatter.title} | Projects`,
    description: project?.frontmatter.description,
  };
}

export default async function ProjectPost({ params }: Props) {
  const projects = await getContentList("projects");
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <div>Project not found</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      <header className="mb-8">
        {project.frontmatter.image && (
          <div className="relative h-64 w-full mb-8">
            <Image
              src={project.frontmatter.image}
              alt={project.frontmatter.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-4">{project.frontmatter.title}</h1>
        <div className="flex gap-4">
          {project.frontmatter.github && (
            <Link
              href={project.frontmatter.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              GitHub →
            </Link>
          )}
          {project.frontmatter.demo && (
            <Link
              href={project.frontmatter.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </header>
      <div
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </article>
  );
}
