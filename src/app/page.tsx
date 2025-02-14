import Image from "next/image";
import SocialIcons from "@src/components/SocialIcons";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-20 space-y-16">
      <section className="">
        <div className="flex items-center gap-8">
          <Image
            src="https://shreyas-bhujbal-blog.nyc3.cdn.digitaloceanspaces.com/Blog/IMG_9739.JPG"
            alt="Profile picture"
            width={120}
            height={50}
            className="rounded-full"
          />
          <div>
            <h1 className="text-4xl font-bold">Shreyas Bhujbal</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
              Dreamer, Adventurer, and Creator. Desire to be more than just a
              number !
            </p>
            <SocialIcons className="mt-4" />
          </div>
        </div>
        <div className="mt-8 space-y-4">
          <p className="text-lg leading-relaxed mt-5">
            Hi, I’m Shreyas—a tech enthusiast, AI innovator, and entrepreneur.
            With experience in full-stack development and project leadership at
            Vanguard and TikTok and now at BlackRock. I specialize in building
            intelligent, scalable solutions.
          </p>
          <p className="text-lg">
            Beyond tech, I’m a singer fluent in three languages, a guitarist,
            and a motorcycle lover. I’m also passionate about dogs and learning
            Mandarin. Let’s connect and create something amazing! 🚀
          </p>
        </div>
      </section>
    </main>
  );
}
