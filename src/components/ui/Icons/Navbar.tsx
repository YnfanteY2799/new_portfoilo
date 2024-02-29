"use client";
import { Code, House, Info, NewspaperClipping } from "@phosphor-icons/react";

import type { ReactNode } from "react";
import type { ICommonIconProps } from "@/types";

export default function NavbarIcons({ name, size, className }: ICommonIconProps): ReactNode {
  switch (name.toLocaleLowerCase()) {
    case "home":
      return <House size={size} className={className} />;
    case "about":
      return <Info size={size} className={className} />;
    case "projects":
      return <Code size={size} className={className} />;
    case "blog":
      return <NewspaperClipping size={size} className={className} />;
    default:
      return <></>;
  }
}
