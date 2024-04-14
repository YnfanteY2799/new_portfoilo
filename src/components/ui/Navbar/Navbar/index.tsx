import { type AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";
import NavBar from "./Nabvar";

import type { ReactNode } from "react";

export default function TranslatedNavbar(): ReactNode {
  // Hooks
  const { Navbar } = useMessages();

  return (
    <NextIntlClientProvider messages={Navbar as AbstractIntlMessages}>
      <NavBar />
    </NextIntlClientProvider>
  );
}
