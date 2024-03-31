"use client";
import { type ReactNode, Fragment, useEffect, useRef, useState } from "react";
import { selectedFloatingSection, nonSelectedFloatingSection } from "@/utils";
import { NavbarIcons } from "@/components";

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

  function handleSelectionClick(id: number) {
    setLastClicked(id);
    handleShowFloat();
  }

  function checkIfClickedOutside({ target }: MouseEvent) {
    if (isOpen && floatingRef.current && !floatingRef.current.contains(target as Node)) handleShowFloat();
  }

  // Effects
  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside, { passive: true });
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [isOpen]);

  return (
    <nav
      ref={floatingRef}
      className="hidden z-20 lg:flex shrink-0 grow-0 justify-around gap-4 border-t bg-transparent p-2.5 shadow-lg backdrop-blur-lg fixed top-2/4 -translate-y-2/4 left-4 min-h-[auto] min-w-[64px] flex-col rounded-lg border border-orange-600"
    >
      {isOpen ? (
        sections.map(({ id, path }, ind) => (
          <Fragment key={ind}>
            <a
              href={`#${id}`}
              onClick={() => handleSelectionClick(ind)}
              className={lastClicked === ind ? selectedFloatingSection : nonSelectedFloatingSection}
            >
              <NavbarIcons size={25} name={path} className="mt-1" />
              <small className="pt-1 text-xs font-medium text-center">{path}</small>
            </a>
            {ind !== sections.length - 1 && <hr className="border-orange-600" />}
          </Fragment>
        ))
      ) : (
        <button onClick={handleShowFloat} className="flex flex-col items-center justify-center text-orange-600">
          <NavbarIcons name="Menu" size={30} />
        </button>
      )}
    </nav>
  );
}
