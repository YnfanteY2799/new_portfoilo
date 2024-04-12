import { CommonProviders, Navbar } from "@/components";
import localFont from "next/font/local";
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

const currentFont = localFont({
  src: "../../fonts/ArigatouGozaimasu.otf",
  variable: "--font-local",
  preload: true,
});

export default function RootLayout({ children, params }: Readonly<ICommonLayoutProp>): ReactNode {
  // Prop destructuring
  const { locale = "en" } = params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${currentFont.variable}`}>
        <CommonProviders>
          <Navbar />
          {children}
        </CommonProviders>
      </body>
    </html>
  );
}
