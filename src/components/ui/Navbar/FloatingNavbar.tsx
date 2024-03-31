"use client";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { NavbarIcons } from "@/components";
import {
  selectedFloatingSection,
  floatingMenuOpenClassName,
  floatingMenuCloseClassName,
  nonSelectedFloatingSection,
} from "@/utils";

import type { IFloatingMenuProps } from "@/types";

export default function FloatingMenu({ sections = [] }: IFloatingMenuProps): ReactNode {
  // State
  const [lastClicked, setLastClicked] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Ref's
  const floatingRef = useRef<HTMLElement>(null);

  // Functions
  function handleShowFloat(): void {
    setIsOpen(!isOpen);
  }

  function handleSelectionClick(id: number): void {
    setLastClicked(id);
    handleShowFloat();
  }

  function checkIfClickedOutside({ target }: MouseEvent): void {
    if (isOpen && floatingRef.current && !floatingRef.current.contains(target as Node)) handleShowFloat();
  }

  // Effects
  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside, { passive: true });
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [isOpen]);

  return (
    <nav ref={floatingRef} className={isOpen ? floatingMenuOpenClassName : floatingMenuCloseClassName}>
      {isOpen ? (
        sections.map(({ id, icon = "", name }, idx) => (
          <a
            key={idx}
            href={`#${id}`}
            onClick={() => handleSelectionClick(idx)}
            className={lastClicked === idx ? selectedFloatingSection : nonSelectedFloatingSection}
          >
            <NavbarIcons size={25} name={icon} className="mt-1" />
            <small className="pt-[0.5px] text-xs font-medium text-center">{name}</small>
          </a>
        ))
      ) : (
        <button onClick={handleShowFloat} className="flex flex-col items-center justify-center text-primary">
          <NavbarIcons name="Menu" size={25} />
        </button>
      )}
    </nav>
  );
}
