import { CommonProviders, Navbar } from "@/components";
import { ArigatouGozaimasuFont } from "@/fonts";
import "@/css/globals.css";

import type { ICommonLayoutProp } from "@/types";
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "YJ | Portfolio",
  description: "Main Page of Yj Dev Portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "dark" },
  ],
};

export default function RootLayout({ children, params: { locale = "en" } }: Readonly<ICommonLayoutProp>): ReactNode {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${ArigatouGozaimasuFont.variable}`}>
        <CommonProviders>
          <Navbar />
          {children}
        </CommonProviders>
      </body>
    </html>
  );
}
