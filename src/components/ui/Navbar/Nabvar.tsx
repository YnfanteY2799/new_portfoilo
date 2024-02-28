"use client";
import { NavOptions, SpringNavbarAnimation } from "@/utils";
import ThemeSwitcher from "../Theme/ThemeSwitcher.tsx";
import NavbarOptionIcon from "./NavbarOptionIcon.tsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Divider } from "@nextui-org/react";

export default function NavBar() {
  // Hooks
  const pathname = usePathname();

  // State
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [actualOptions, setActualOptons] = useState<typeof NavOptions>(NavOptions);

  // Effect for delete ui clipping
  useEffect(() => {
    setHoveredPath(() => pathname);
    setActualOptons((old) => old);
  }, [pathname]);

  return (
    <div className="border-b border-foreground p-[0.4rem] sticky z-[100] bg-background backdrop-blur-md">
      <nav className="w-full z-[100] rounded-lg">
        <div className="flex justify-between">
          <div></div>
          <div className="flex gap-2">
            {actualOptions.map(({ path, name }, idx) => {
              const isActive = path === pathname;
              return (
                <Link
                  key={path}
                  className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 hover:text-white ease-in ${
                    isActive ? (hoveredPath === path ? "text-zinc-200" : "text-foreground") : "text-zinc-500"
                  }`}
                  href={path}
                  data-active={isActive}
                  onMouseOver={() => setHoveredPath(path)}
                  onMouseLeave={() => setHoveredPath(pathname)}
                >
                  <div className="flex justify-between gap-2">
                    <NavbarOptionIcon name={name} size={18} className="mt-1" />
                    <span className="capitalize">{name}</span>
                  </div>
                  {path === hoveredPath && (
                    <motion.div
                      layoutId="navbar"
                      aria-hidden="true"
                      transition={SpringNavbarAnimation}
                      className="absolute bottom-0 left-0 h-full w-full bg-stone-800/80 rounded-md -z-10"
                    />
                  )}
                </Link>
              );
            })}
            <Divider orientation="vertical" />
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
