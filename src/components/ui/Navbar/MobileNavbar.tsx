"use client";
import { Button } from "@nextui-org/react";
import { NavbarIcons } from "@/components";
import Link from "next/link";

import type { IMovileNavbarProps } from "@/types";
import type { ReactNode } from "react";

export default function MobileNavbar({ options = [] }: IMovileNavbarProps): ReactNode {
  return (
    <section className="md:hidden flex">
      <Button variant="flat" isIconOnly size="sm" color="primary">
        <NavbarIcons name="menu"/>
      </Button>

      <nav className="bg-white h-screen flex flex-col gap-5 p-2 w-full absolute top-14 left-0">
        <div className="flex items-center justify-between px-6 py-2">
          <div className="flex gap-5 items-center">
            <img
              className="w-[60px] h-[60px] rounded-full"
              src="https://tailwindcomponents.com/storage/avatars/uMR3f506SK0GdtIRAeZRVIBDOd5osmWeZ8Rvn2Oh.jpg"
              alt="profile picture"
            />
            <div>
              <div className="text-white font-bold text-2xl">Ardiansyah Putra</div>
              <div className="text-sm text-zinc-500 font-semibold">ardiansyahputra@gmail.com</div>
            </div>
          </div>

          <div className="text-white scale-125 relative cursor-pointer hover:ring hover:ring-white hover:bg-white hover:text-black rounded-full">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 bg-red-500 text-white font-semibold text-xs w-[14px] h-[14px] flex items-center justify-center rounded-full">
              4
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          {options.map(({ path }) => (
            <Link
              id={path}
              href={path}
              className="text-foreground bg-black flex items-center gap-2 hover:bg-white hover:text-black rounded-full px-6 py-4 text-xl font-medium transition duration-250"
            >
              {path}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
