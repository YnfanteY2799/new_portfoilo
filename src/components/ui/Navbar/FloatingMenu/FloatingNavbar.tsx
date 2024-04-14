"use client";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn, floatingMenuItem, useGetUrlHash } from "@/utils";
import { FloatingIcons } from "@/components";
import { useTranslations } from "next-intl";

import type { IFloatingMenuProps } from "@/types";

export default function FloatingMenu({ sections = [] }: IFloatingMenuProps): ReactNode {
  // Hooks
  const pathash = useGetUrlHash();
  const t = useTranslations();

  // State
  const [activeSection, setActiveSection] = useState<string | undefined>(undefined);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Ref's
  const floatingRef = useRef<HTMLElement>(null);

  // Functions
  function handleShowMenu(): void {
    setIsOpen(!isOpen);
  }

  function handleNavClick(): void {
    !isOpen && handleShowMenu();
  }

  function checkIfClickedOutside({ target }: MouseEvent): void {
    if (isOpen && floatingRef.current && !floatingRef.current.contains(target as Node)) handleShowMenu();
  }

  // Effects
  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside, { passive: true });
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [isOpen]);

  // Hash changes reflect effect
  useEffect(() => setActiveSection(pathash), [pathash]);

  return (
    <nav
      ref={floatingRef}
      onClick={handleNavClick}
      className="hidden z-20 lg:flex shrink-0 grow-0 justify-around gap-4 border-t bg-transparent p-2.5 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 left-4 min-h-[auto] min-w-[54px] flex-col rounded-lg border border-primary transition-all"
    >
      {isOpen ? (
        sections.map(({ id, icon, name }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={handleShowMenu}
            className={cn(floatingMenuItem, activeSection === id ? " text-primary" : " hover:text-orange-500")}
          >
            <FloatingIcons size={20} name={icon} className="mt-1" />
            <small className="text-xs font-medium text-center">{t(name)}</small>
          </a>
        ))
      ) : (
        <button className="flex flex-col items-center justify-center text-primary">
          <FloatingIcons name="menu" size={20} />
        </button>
      )}
    </nav>
  );
}
