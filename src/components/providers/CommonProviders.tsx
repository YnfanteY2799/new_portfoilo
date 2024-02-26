"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { NextUIProvider } from "@nextui-org/react";

import type { ICommonLayoutProp } from "@/types";
import type { ReactNode } from "react";

export default function Providers({ children }: ICommonLayoutProp): ReactNode {
  return (
    <NextThemesProvider attribute="class" defaultTheme="black">
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}
