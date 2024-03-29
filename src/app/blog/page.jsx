import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/utils";
const page = () => {
  return (
    <section className="md:col-span-2">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Latest Blog Posts</h1>
        {blogPosts?.map((post, index) => (
          <BlogCard key={index} {...post} />
        ))}
      </div>
    </section>
  );
};

export default page;
