"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { HeroUIProvider } from "@heroui/react";

import type { ICommonRSC } from "@/types";
import type { ReactNode } from "react";

export default function ThemeProvider({ children }: ICommonRSC): ReactNode {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark">
      <HeroUIProvider>{children}</HeroUIProvider>
    </NextThemesProvider>
  );
}
