import { featuredBlogPosts } from "@/utils";
import Image from "next/image";
import Link from "next/link";

export default function BlogLayout({ children }) {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 px-24">
      {children}
      <aside className="md:col-span-1 flex flex-col gap-2">
        <h1 className="text-3xl font-bold mb-4">Featured Blog Posts</h1>
        {featuredBlogPosts.map((post, index) => (
          <Link key={index} className="relative" href="/">
            <Image
              className="w-full rounded-lg h-auto"
              src={post.image}
              alt={post.title}
            />
            <div className="absolute bottom-0 text-center p-1">
              <h2 className="text-lg font-semibold mt-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 mt-1 line-clamp-2">
                {post.introduction}
              </p>
            </div>
          </Link>
        ))}
      </aside>
    </main>
  );
}
