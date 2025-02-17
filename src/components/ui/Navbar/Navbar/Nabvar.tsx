"use client";
import { NavOptions, SpringNavbarAnimation, cn } from "@/utils";
import { NavbarIcons, DropdownSwitchers } from "@/components";
import { type ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileNavbar from "./MobileNavbar.tsx";
import { useTranslations } from "next-intl";
import { Divider } from "@heroui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NavBar(): ReactNode {
  // Hooks
  const pathname = usePathname();
  const t = useTranslations();

  // Functions
  function pathnameHandler(): string {
    return (pathname.split("/")[2] || pathname).toLowerCase();
  }

  // Constants
  const actualPath = pathnameHandler();

  // State
  const [hoveredPath, setHoveredPath] = useState<string>(actualPath);

  // Effect for delete ui clipping
  useEffect(() => setHoveredPath(() => actualPath), [actualPath]);

  return (
    <div className="p-[0.4rem] sticky z-[100] bg-transparent backdrop-blur-md border-b border-b-foreground dark:border-none">
      <nav className="w-full rounded-lg px-2">
        <div className="flex justify-between">
          <Link href="/" className="text-xl normal-case flex gap-1">
            <Image
              priority
              width={10}
              height={10}
              alt="Page Logo"
              className="object-fill w-10 h-10"
              src="/logos/logo-no-background.svg"
            />
            <span className="pt-[5px]">| DEV</span>
          </Link>
          <div className="md:flex gap-2 hidden">
            {NavOptions.map(({ path, routerPath }, idx) => (
              <Link
                key={idx}
                href={routerPath}
                data-active={path === actualPath}
                onMouseOver={() => setHoveredPath(path)}
                onMouseLeave={() => setHoveredPath(actualPath)}
                className={cn(
                  "transition-colors px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 hover:text-white light:hover:text-primary ease-in ",
                  path === actualPath ? "text-primary dark:text-zinc-200" : "text-primary",
                  path === hoveredPath ? "text-gray-900 dark:text-zinc-200" : "text-primary"
                )}
              >
                <div className="flex justify-between gap-2">
                  <NavbarIcons name={path} size={18} className="mt-1" />
                  <span className="capitalize">{t(path)}</span>
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
            <DropdownSwitchers className="mt-1" />
          </div>
          <MobileNavbar options={NavOptions} />
        </div>
      </nav>
    </div>
  );
}
