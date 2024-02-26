"use client";
import { ICommonLayoutProp } from "@/types";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export default function ThemeProvider({ children }: ICommonLayoutProp): ReactNode {
  return (
    <NextThemesProvider attribute="class" defaultTheme="black">
      {children}
    </NextThemesProvider>
  );
}
