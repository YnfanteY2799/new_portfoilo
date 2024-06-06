import createMiddleware from "next-intl/middleware";

export const locales = ["en", "es"];

const middleware = createMiddleware({
  locales,
  defaultLocale: "en",
});

export const config = { matcher: ["/", "/(es|en)/:page*"] };

export default middleware;
