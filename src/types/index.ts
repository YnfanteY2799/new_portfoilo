export * from "./components.ts";

export type TNavOption = {
  id: number;
  path: string;
  routerPath: string;
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

export type TFloatingNavOptions = {
  id?: string;
  icon?: string;
  name?: string;
};
