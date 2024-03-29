"use client";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/utils";
import { useEffect, useState } from "react";

const page = ({ params }) => {
  const [data, setData] = useState("");
  useEffect(() => {
    blogPosts?.map((post) => {
      if (params.id == post.id) {
        return setData(post);
      }
    });
  }, []);

  return (
    <div className="md:col-span-2">
      <article className="shadow-lg rounded-lg bg-white">
        <Image
          priority="blur"
          src={data.image}
          alt={data.title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          <p className="text-gray-600 text-sm mb-4">
            Published on {data.date} by {data.author}
          </p>
          <div className="flex space-x-2 mb-4">
            {data.categories?.map((category) => (
              <span
                key={category}
                className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs"
              >
                {category}
              </span>
            ))}
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: data.content }}
            className="prose"
          />
        </div>
      </article>
    </div>
  );
};

export default page;
