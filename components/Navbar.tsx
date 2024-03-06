"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { cn } from "@/lib/utils";
import { GeistMono } from "geist/font/mono";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Navlink {
  name: string;
  where: string;
  className?: string;
}

interface NavProps {
  links: Array<Navlink>;
}

const Navbar = React.forwardRef<HTMLDivElement, NavProps>(
  ({links},ref) => {
    const pathName = usePathname();
    return (
      <React.Fragment>
      <div id="nav-bar" className="w-gutter py-2.5 border-border/40 border-b flex flex-row justify-between items-center">
        <div className="flex flex-row gap-5 items-center justify-center w-fit">
          <Link href={"/"}>
            <span
              className={cn(
                "text-lg font-bold text-primary",
                GeistMono.className
              )}
            >
              <span className="text-primary/60">{"<"}</span>
              Blog
              <span className="text-primary/60">{">"}</span>
            </span>
          </Link>
          {links &&
            links.map((link) => (
              <Link
                href={link.where}
                key={link.name}
                className={cn(
                  "text-primary/60 leading-tits hover:text-primary tracking-tighter text-sm font-medium",
                  link.where === pathName ? "text-primary" : "",
                  link.className
                )}
              >
                {link.name}
              </Link>
            ))}
        </div>
        <ModeToggle />
      </div>
    </React.Fragment>
    )
  }
)
Navbar.displayName = "Navbar";

export default Navbar;
