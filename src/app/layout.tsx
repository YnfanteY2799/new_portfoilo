import { BeamsBackground, CommonProviders, Navbr } from "@/components";
import "@/css/globals.css";

import type { ICommonLayoutProp } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "YJ | Portfolio",
  description: "Main Page of Yj Dev Portfolio",
};

export default function RootLayout({ children }: Readonly<ICommonLayoutProp>) {
  return (
    <html lang="en" className="dark">
      <body>
        <Navbr />
        <CommonProviders>{children}</CommonProviders>
        <BeamsBackground />
      </body>
    </html>
  );
}
