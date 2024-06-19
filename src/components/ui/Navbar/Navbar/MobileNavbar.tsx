"use client";
import { ButtonThemeSwitcher, NavbarIcons } from "@/components";
import { Button, Divider } from "@nextui-org/react";
import { useState, type ReactNode } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";

import type { IMovileNavbarProps } from "@/types";

export default function MobileNavbar({ options = [] }: IMovileNavbarProps): ReactNode {
  // Hooks
  const t = useTranslations();

  // State
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Sugary Functions
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

      {isOpen && (
        <motion.nav
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.65 }}
          className="bg-background flex h-screen flex-col gap-5 p-2 w-screen absolute top-14 left-0 overflow-hidden"
        >
          <div className="flex flex-col gap-2">
            {options.map(({ path, routerPath }) => {
              return (
                <Link
                  id={path}
                  key={path}
                  href={routerPath}
                  onClick={handleOpen}
                  className="text-foreground bg-background flex justify-between items-center gap-2 hover:bg-foreground hover:text-primary rounded-full px-6 py-4 text-xl font-medium transition-color duration-250"
                >
                  <div className="flex gap-2 text-xl">
                    <NavbarIcons name={path} className="mt-[6px]" size={20} />
                    {t(path)}
                  </div>
                  <NavbarIcons name="arrow_r" size={20} />
                </Link>
              );
            })}
          </div>
        </motion.nav>
      )}
    </section>
  );
}
