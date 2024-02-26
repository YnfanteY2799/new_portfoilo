"use client";
import NavbarOptionIcon from "./NavbarOptionIcon.tsx";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { NavOptions } from "@/utils";
import { useState } from "react";
import Link from "next/link";

export default function NavBar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/Blog/")) pathname = "/Blog";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="border border-stone-800/90 p-[0.4rem] rounded-lg mb-12 sticky top-4 z-[100] bg-background backdrop-blur-md">
      <nav className="flex justify-between w-full z-[100]  rounded-lg">
        <div>a</div>
        <div className="flex gap-2 rounded-lg">
          {NavOptions.map(({ path, name }) => {
            const isActive = path === pathname;
            return (
              <Link
                key={path}
                className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                  isActive ? "text-zinc-100" : "text-zinc-400"
                }`}
                href={path}
                data-active={isActive}
                onMouseOver={() => setHoveredPath(path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <div className="flex justify-between gap-2">
                  <NavbarOptionIcon name={name} size={18} className="mt-1"/>
                  <span className="capitalize">{name}</span>
                </div>
                {path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-full bg-stone-800/80 rounded-md -z-10"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
