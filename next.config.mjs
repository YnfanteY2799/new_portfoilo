/** @type {import('next').NextConfig} */

import withNextInt from "next-intl/plugin";

const withNextIntl = withNextInt();

const nextConfig = withNextIntl({
  images: {
    remotePatterns: [{ protocol: "https", hostname: "cdn.myanimelist.net" }],
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/en/Home",
      permanent: true,
    },
  ],
});

export default nextConfig;
