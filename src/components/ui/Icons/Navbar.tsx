import {
  X,
  List,
  Code,
  Info,
  Cake,
  House,
  Circuitry,
  CaretRight,
  AddressBook,
  NewspaperClipping,
} from "@phosphor-icons/react/dist/ssr";

import type { ReactNode } from "react";
import type { ICommonIconProps } from "@/types";

export default function NavbarIcons({ name = "", size, className }: ICommonIconProps): ReactNode {
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
    case "arrow_r":
      return <CaretRight size={size} className={className} />;
    case "close":
      return <X size={size} className={className} />;
    default:
      return <></>;
  }
}
