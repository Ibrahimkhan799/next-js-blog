import PostCard from "@/components/PostCard";
import { getData } from "@/lib/acations";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import React from "react";

export const revalidate = 0;

const page = async () => {
  const data: Array<PostDataType> = await getData();

  return (
    <div className="w-gutter my-24 flex flex-col gap-16 mb-8 justify-center items-center">
      <h1
        className={cn(
          "text-6xl font-bold tracking-tighter leading-tits",
          GeistSans.variable
        )}
      >
        Blog
      </h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data.map((post) => (
          <PostCard key={post.slug} post={post}/>
        ))}
      </div>
    </div>
  );
};

export default page;
