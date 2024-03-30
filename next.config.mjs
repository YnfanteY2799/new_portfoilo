/** @type {import('next').NextConfig} */

import withNextInt from "next-intl/plugin";

const withNextIntl = withNextInt("./src/configs/i18n.ts");

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.myanimelist.net" }],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "a",
      permanent: true,
    },
    {
      source: "/Home",
      destination: "/en/Home",
      permanent: true,
    },
  ],
});

export default nextConfig;
