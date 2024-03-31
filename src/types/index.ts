export * from "./components.ts";

export type TNavOption = {
  id: number;
  path: string;
};

export type TCommonLinkIcon = {
  link: string;
  icon: string;
};

export type CommonAnimationProps = {
  type: any;
  delay: number;
  duration: any;
  direction: string;
};

export type TCommonDirections = "top" | "bottom" | "left" | "right";
