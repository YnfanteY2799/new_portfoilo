import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

export default getRequestConfig(async ({ locale }) => {
  if (!["en", "es"].includes(locale as any)) notFound();
  return { messages: (await import(`../Intl/${locale}.json`)).default };
});
