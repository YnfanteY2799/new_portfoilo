import { House } from "@phosphor-icons/react";

import type { ReactNode } from "react";
import type { ICommonIconProps } from "@/types";

export default function NavbarOptionIcon({ name, size, className }: ICommonIconProps): ReactNode {
  switch (name.toLocaleLowerCase()) {
    case "home":
      return <House size={size} className={className} />;
    default:
      return <></>;
  }
}
