import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="w-gutter mt-24 flex flex-col gap-8 justify-center items-center">
      <div className="flex flex-col gap-4 justify-center items-center w-full text-center">
        <h1
          className={cn(
            "text-3xl md:text-4xl lg:text-6xl font-bold tracking-tighter leading-tits",
            GeistSans.variable
          )}
        >
          See what&apos;s happening in the world with blog&apos;s new features.
        </h1>
        <span className="text-sm md:text-base lg:text-lg w-2/4 text-foreground/60">
          Explore our new blog features and get the top knowledge of the world
          and get in the game.
        </span>
      </div>
      <Button asChild className="w-fit">
        <Link href={"/blog"}>Explore</Link>
      </Button>
    </div>
  );
}
