"use client";
import { useState, type ReactNode } from "react";
import { Button, Divider } from "@nextui-org/react";
import { ButtonThemeSwitcher, NavbarIcons } from "@/components";
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
    <section className="md:hidden flex gap-2">
      <div className="mt-[2px]">
        <ButtonThemeSwitcher />
      </div>
      <Divider orientation="vertical" />
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
              className="text-foreground bg-background flex items-center gap-2 hover:bg-foreground hover:text-primary rounded-full px-6 py-4 text-xl font-medium transition-color duration-250"
            >
              {path}
            </Link>
          ))}
        </div>
      </nav>
    </section>
  );
}
