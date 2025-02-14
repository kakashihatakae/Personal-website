import { getContentList } from "@src/utils/markdown";
import ProjectCard from "@src/components/ProjectCard";

export const metadata = {
  title: "Projects | Your Name",
  description: "Showcase of my personal and professional projects",
};

export default async function ProjectsPage() {
  const projects = await getContentList("projects");

  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
    </main>
  );
}
