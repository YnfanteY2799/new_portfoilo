import type { ReactNode } from "react";
import type { ButtonProps } from "@nextui-org/react";
import type { TCommonPlacements, TNavOption } from "./index.ts";

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

export interface IGenericIconSvg {
  size?: number;
  className?: string;
}

export interface ITooltipButton extends ButtonProps {
  link?: string;
  name?: string;
  position?: TCommonPlacements;
}
