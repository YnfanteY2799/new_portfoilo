export * from "./components.ts";

export type TNavOption = {
  id: number;
  path: string;
  name: string;
};

export type TCommonLinkIcon = { link: string; icon: string };

export type TCommonPlacements =
  | "top-start"
  | "top"
  | "top-end"
  | "bottom-start"
  | "bottom"
  | "bottom-end"
  | "left-start"
  | "left"
  | "left-end"
  | "right-start"
  | "right"
  | "right-end";
