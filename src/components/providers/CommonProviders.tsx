"use client";

import { NextUIProvider } from "@nextui-org/react";

import type { ICommonLayoutProp } from "@/types";
import type { ReactNode } from "react";

export default function Providers({ children }: ICommonLayoutProp): ReactNode {
  return <NextUIProvider>{children}</NextUIProvider>;
}
