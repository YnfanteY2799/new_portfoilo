import type { ReactNode } from "react";
import type { TNavOption } from "./index.ts";

export interface ICommonIconProps {
  name: string;
  size?: number;
  className?: string;
}

export interface ICommonLayoutProp {
  className?: string;
  children?: ReactNode;
}
export interface IFloatingMenuProps {
  sections?: Array<TNavOption>;
}

export interface IHeroSectionProps {
  cv?: string;
}
