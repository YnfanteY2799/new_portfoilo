import type { ReactNode } from "react";

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
