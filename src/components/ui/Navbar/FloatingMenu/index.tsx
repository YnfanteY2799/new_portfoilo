import { NextIntlClientProvider } from "next-intl";
import FloatingMenu from "./FloatingNavbar";

import type { IFloatingMenuProps } from "@/types";
import type { ReactNode } from "react";

export default function TranslatedFloatingMenu({ sections = [] }: IFloatingMenuProps): ReactNode {
  return (
    <NextIntlClientProvider messages={{}}>
      <FloatingMenu sections={sections} />
    </NextIntlClientProvider>
  );
}
