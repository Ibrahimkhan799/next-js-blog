import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { urlFor } from "@/lib/sanity";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "@/components/image";

interface Props {
  post: PostDataType;
}

const PostCard = ({ post }: Props) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block h-full">
      <Card className="overflow-hidden flex flex-col justify-between duration-300 hover:-translate-y-2 transition-transform ease-in-out h-full">
        <Image
          src={urlFor(post.thumbnail).url()}
          priority
          width={500}
          height={500}
          alt={post.slug}
          className="h-auto w-full"
        />
        <CardContent className="mt-5 flex flex-col gap-2">
          <h1 className="text-primary text-lg font-semibold line-clamp-2">
            {post.title}
          </h1>
          <span className="text-primary/60 font-medium text-base line-clamp-3">
            {post.description}
          </span>
        </CardContent>
        <CardFooter className="text-sm">
          <span>Created At</span>
          &nbsp;{" : "}&nbsp;
          <span className="text-primary/60">{formatDate(post._createdAt,"dd/mm/yy")}</span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;
