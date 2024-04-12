"use client";
import { useState, type ReactNode } from "react";
import { Button } from "@nextui-org/react";
import { NavbarIcons } from "@/components";
import Link from "next/link";
import { cn } from "@/utils";

import type { IMovileNavbarProps } from "@/types";

export default function MobileNavbar({ options = [] }: IMovileNavbarProps): ReactNode {
  // State
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleOpen(): void {
    setIsOpen((old) => !old);
  }

  return (
    <section className="md:hidden flex">
      <Button variant="flat" isIconOnly size="md" color="primary" className="mt-[2px]" onPress={handleOpen}>
        <NavbarIcons name="menu" size={21} />
      </Button>
      <nav
        className={cn(
          "bg-background h-screen flex-col gap-5 p-2 w-screen absolute top-14 left-0 overflow-hidden",
          isOpen ? "flex" : "hidden"
        )}
      >
        <div className="flex flex-col gap-2">
          {options.map(({ path }) => (
            <Link
              id={path}
              key={path}
              href={path}
              onClick={handleOpen}
              className="text-foreground bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition-color duration-250"
            >
              {path}
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex gap-5 items-center">
            <img
              src="https://tailwindcomponents.com/storage/avatars/uMR3f506SK0GdtIRAeZRVIBDOd5osmWeZ8Rvn2Oh.jpg"
              className="w-[60px] h-[60px] rounded-full"
              alt="profile picture"
            />
            <div>
              <p className="text-foreground font-bold text-2xl">Ardiansyah Putra</p>
              <p className="text-sm text-zinc-500 font-semibold">ardiansyahputra@gmail.com</p>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}
