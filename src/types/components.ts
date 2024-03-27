import type { ButtonProps, TooltipPlacement } from "@nextui-org/react";
import type { TNavOption } from "./index.ts";
import type { ReactNode } from "react";

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
  position?: TooltipPlacement;
  tooltipColor?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "foreground";
}

export interface ICommonSectionWrapperProps {
  id?: string;
  children?: ReactNode;
}

export interface ISectionHeadProps {
  head?: string;
  subHead?: string;
  moreDetails?: string;
}

export interface ICommonSectionProps {
  text?: string;
}

export interface IDACard {
  imageUrl: string;
  children?: ReactNode;
  classNames?: {
    className?: string;
    imageClassName?: string;
    childrenClassName?: string;
  };
}
