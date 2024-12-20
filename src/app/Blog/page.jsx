import Image from "next/image";
import React from "react";
import BrentPrice from "../_components/(global)/BrentPrice";
import { blogs } from "../lib/blog";
import Link from "next/link";

const BlogPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 px-20">
      <div className="text-center h-[70vh] flex flex-col justify-center items-center space-y-4">
        <div className="bg-white flex flex-col p-20 w-full h-[90%] rounded-2xl justify-center items-center">
          <h1 className="text-7xl font-semibold text-center">
            Our Blogs & Articles
          </h1>
          <BrentPrice />
          <p className="w-2/4 text-xl">
            Our blog showcases a blend of visual appeal and practical design
            across diverse platforms.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-lg py-10">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-lg overflow-hidden">
            <Image
              src={"/image/values.jpg"}
              alt="blog"
              width={800}
              height={800}
              className="object-fill rounded-lg"
            />
            <div className="py-6 flex flex-col">
              <h2 className="text-2xl font-semibold">{blog.title}</h2>
              <p className="text-gray-700">{blog.description}</p>
              <Link href={`/Blog/${blog.id}`}>Read more &rarr;</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
