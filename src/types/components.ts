import type { ReactNode } from "react";
import type { TNavOption } from "./index.ts";

export interface ICommonIconProps {
  name: string;
  size: number;
  className?: string;
}

export interface ICommonLayoutProp {
  children: ReactNode;
}

export interface IClassNameComponent {
  className?: string;
}

export interface IFloatingMenuProps {
  sections?: Array<TNavOption>;
}
