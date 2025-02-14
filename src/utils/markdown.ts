import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface FrontMatter {
  title: string;
  date?: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export interface ContentItem {
  slug: string;
  content: string;
  frontmatter: FrontMatter;
}

export async function getContentList(
  type: "blogs" | "projects"
): Promise<ContentItem[]> {
  const folder = path.join(process.cwd(), "src/content", type);
  const files = fs.readdirSync(folder);

  const items = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(".md", "");
      const filePath = path.join(folder, filename);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = matter(fileContent);

      const processedContent = await remark().use(html).process(content);

      return {
        slug,
        content: processedContent.toString(),
        frontmatter: data as FrontMatter,
      };
    })
  );

  return items.sort((a, b) => {
    if (a.frontmatter.date && b.frontmatter.date) {
      return (
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
      );
    }
    return 0;
  });
}
