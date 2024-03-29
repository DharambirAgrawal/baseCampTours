import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ id, image, title, introduction, categories, date }) => {
  return (
    <article className="rounded overflow-hidden shadow-lg mx-auto bg-white mb-2">
      <Image
        className="w-full h-56 object-cover"
        src={image}
        alt="Blog Post"
        height={100}
        width={100}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-600 text-sm mb-3 line-clamp-6">
          {introduction}
        </p>
        <div className="flex space-x-2 text-gray-500 text-xs">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          {date}
        </span>
        <Link
          href={`/blog/${id}`}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white rounded-full px-3 py-1 text-sm font-semibold"
        >
          Read more
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;
