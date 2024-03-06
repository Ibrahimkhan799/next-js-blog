import Image from "@/components/image";
import { getPostByProp } from "@/lib/acations";
import { urlFor } from "@/lib/sanity";
import { cn, formatDate } from "@/lib/utils";
import { PortableText } from "@portabletext/react";
import { GeistSans } from "geist/font/sans";
import React from "react";
export const revalidate = 0;
type Props = {
  params: {
    slug: string;
  };
};

const page = async (props: Props) => {
  const post: PostDataType = await getPostByProp({
    prop: "slug.current",
    value: props.params.slug,
  });

  return (
    <>
      {!post && (
        <div className="h-full w-full justify-center items-center">
          <span>Loading</span>
        </div>
      )}
      {post && (
        <div className="my-24 w-gutter">
          <div className="w-full flex flex-col gap-12 md:text-center justify-center items-center">
            <div className="flex flex-col justify-center md:items-center w-full gap-5">
              <span className="text-primary uppercase text-sm tracking-wide">
                {formatDate(post._createdAt, "D M Y")}
              </span>
              <h1
                className={cn(
                  "text-2xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tits",
                  GeistSans.variable
                )}
              >
                {post.title}
              </h1>
              <span className="text-sm md:text-base lg:text-lg text-foreground/60">
                {post.description}
              </span>
            </div>
            <Image
              className="w-full h-auto rounded-md border border-border/40"
              priority
              src={urlFor(post.thumbnail).url()}
              alt={post.slug}
              width={1500}
              height={1500}
            />
          </div>
          <div className="mt-10 w-full prose dark:prose-invert">
            {post.content && (
              <PortableText value={post.content} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default page;
