import Link from "next/link";
import { headers } from "next/headers";

const Navbar = async () => {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "/";

  const isActive = (path: string) => {
    return pathname === path
      ? "text-foreground"
      : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200";
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            Shreyas Bhujbal
          </Link>

          <div className="flex gap-8">
            <Link href="/" className={`${isActive("/")} transition-colors`}>
              Home
            </Link>
            <Link
              href="/blog"
              className={`${isActive("/blog")} transition-colors`}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className={`${isActive("/projects")} transition-colors`}
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
