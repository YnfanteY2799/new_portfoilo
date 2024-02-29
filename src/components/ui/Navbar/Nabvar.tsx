"use client";
import { NavOptions, SpringNavbarAnimation } from "@/utils";
import ThemeSwitcher from "../Theme/ThemeSwitcher.tsx";
import NavbarOptionIcon from "../Icons/Navbar.tsx";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Divider } from "@nextui-org/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  // Hooks
  const pathname = usePathname();

  // State
  const [hoveredPath, setHoveredPath] = useState(pathname);

  // Effect for delete ui clipping
  useEffect(() => setHoveredPath(() => pathname), [pathname]);

  return (
    <div className="p-[0.4rem] sticky z-[100] bg-transparent backdrop-blur-md">
      <nav className="w-full z-[100] rounded-lg">
        <div className="flex justify-between">
          <Link href="/" className="text-xl normal-case flex gap-1">
            <Image
              width={10}
              height={10}
              alt="Page Logo"
              src="/logo-no-background.svg"
              className="object-fill w-10 h-10"
            />
            <span className="pt-[5px]">| DEV</span>
          </Link>
          <div className="flex gap-2">
            {NavOptions.map(({ path, name }) => (
              <Link
                key={path}
                className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 hover:text-white ease-in ${
                  path === pathname
                    ? hoveredPath === path
                      ? "text-zinc-200"
                      : "text-primary"
                    : "text-zinc-500"
                }`}
                href={path}
                data-active={path === pathname}
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
                    className="absolute bottom-0 left-0 h-full w-full bg-default rounded-md -z-10"
                  />
                )}
              </Link>
            ))}
            <Divider orientation="vertical" />
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </div>
  );
}
