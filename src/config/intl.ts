export const port = process.env.PORT || 3000;
export const host = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${port}`;

export const defaultLocale = "en" as const;
export const locales = ["en", "es"] as const;

export const pathnames = {
  "/": "/Home",
  "/pathnames": {
    en: "/pathnames",
    es: "/pathnames",
  },
};

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
