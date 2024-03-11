export * from "./components.ts";

export type TNavOption = {
  id: number;
  path: string;
  name: string;
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
