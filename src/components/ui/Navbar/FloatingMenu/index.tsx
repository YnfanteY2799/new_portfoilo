import { type AbstractIntlMessages, NextIntlClientProvider, useMessages } from "next-intl";
import FloatingMenu from "./FloatingNavbar";

import type { IFloatingMenuProps } from "@/types";
import type { ReactNode } from "react";

export default function TranslatedFloatingMenu({ sections = [] }: IFloatingMenuProps): ReactNode {
  // Hooks
  const { Home_FM } = useMessages();

  return (
    <NextIntlClientProvider messages={Home_FM as AbstractIntlMessages}>
      <FloatingMenu sections={sections} />
    </NextIntlClientProvider>
  );
}
