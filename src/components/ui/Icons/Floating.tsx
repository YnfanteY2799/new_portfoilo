import { List, Code, House, Info, NewspaperClipping, Cake, Circuitry, AddressBook } from "@phosphor-icons/react/dist/ssr";

import type { ReactNode } from "react";
import type { ICommonIconProps } from "@/types";

export default function FloatingIcons({ name = "", size, className }: ICommonIconProps): ReactNode {
  switch (name.toLocaleLowerCase()) {
    case "home":
      return <House size={size} className={className} />;
    case "about":
      return <Info size={size} className={className} />;
    case "projects":
      return <Code size={size} className={className} />;
    case "blog":
      return <NewspaperClipping size={size} className={className} />;
    case "tech":
      return <Circuitry size={size} className={className} />;
    case "experience":
      return <Cake size={size} className={className} />;
    case "menu":
      return <List size={size} className={className} />;
    case "contact_me":
      return <AddressBook size={size} className={className} />;
    default:
      return <></>;
  }
}
