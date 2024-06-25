import type { ButtonProps, TooltipPlacement } from "@nextui-org/react";
import type { TFloatingNavOptions, TNavOption } from "./index.ts";
import type { MotionValue, Variants } from "framer-motion";
import type { ReactNode } from "react";

export interface ICommonIconProps {
  name?: string;
  size?: number;
  className?: string;
}

export interface ICommonLayoutProp {
  children: ReactNode;
  params: { locale: string };
}

export interface ICommonRSC {
  className?: string;
  children?: ReactNode;
}
export interface IFloatingMenuProps {
  sections?: Array<TFloatingNavOptions>;
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
  isLoading?: boolean;
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

export interface IMovileNavbarProps {
  options?: Array<TNavOption>;
}

export interface IEverVaultCardProps {
  text?: string;
  className?: string;
}

export interface ICardPatternProps {
  randomString?: string;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export interface ICommonIntlProviderProps {
  messageId: string;
  children?: ReactNode;
}

export interface ISectionTextProps {
  className?: string;
  variants?: Variants;
  children?: ReactNode;
}

/** * ICDS => Interface Configurations Dropdown Switches */
export interface ICDSProps {
  className?: string;
}

export interface ISecuentialTextProps {
  words?: string;
  duration?: number;
}

export interface IAboutSectProps {
  mainText?: string;
  isLoading?: boolean;
  categories?: Array<any>;
}

export interface IMeteorsBGProps {
  number?: number;
  className?: string;
}

export interface IServiceCardProps {
  idx: number;
  icon: string;
  title: string;
  click: Function;
}

export interface InterviewedBaseDivProps {
  children?: ReactNode;
}
