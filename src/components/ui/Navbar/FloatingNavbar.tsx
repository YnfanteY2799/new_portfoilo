"use client";
import { cn, floatingMenuClassName, floatingMenuItem } from "@/utils";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarIcons } from "@/components";

import type { IFloatingMenuProps } from "@/types";

export default function FloatingMenu({ sections = [] }: IFloatingMenuProps): ReactNode {
  // Hooks
  const pathname = usePathname();

  // State
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Ref's
  const floatingRef = useRef<HTMLElement>(null);

  // Functions
  function handleShowMenu(): void {
    setIsOpen(!isOpen);
  }

  function handleNavClick() {
    if (isOpen) return;
    handleShowMenu();
  }

  function checkIfClickedOutside({ target }: MouseEvent): void {
    if (isOpen && floatingRef.current && !floatingRef.current.contains(target as Node)) handleShowMenu();
  }

  // Effects
  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside, { passive: true });
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [isOpen]);

  function handleActive(id: string | undefined): string {
    return cn(floatingMenuItem, activeSection === id ? " text-primary" : "");
  }

  return (
    <nav ref={floatingRef} className={floatingMenuClassName} onClick={handleNavClick}>
      {isOpen ? (
        sections.map(({ id, icon, name }) => (
          <a key={id} href={`#${id}`} onClick={handleShowMenu} className={handleActive(id)}>
            <NavbarIcons size={25} name={icon} className="mt-1" />
            <small className="pt-[0.5px] text-xs font-medium text-center">{name}</small>
          </a>
        ))
      ) : (
        <button className="flex flex-col items-center justify-center text-primary">
          <NavbarIcons name="Menu" size={25} />
        </button>
      )}
    </nav>
  );
}
