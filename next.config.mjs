/** @type {import('next').NextConfig} */

import bundlerAnalizer from "@next/bundle-analyzer";
import withNextInt from "next-intl/plugin";

const withNextIntl = withNextInt();

const withBundleAnalyzer = bundlerAnalizer({ enabled: true });

const nextConfig = withBundleAnalyzer(
  withNextIntl({
    images: {
      remotePatterns: [
        { protocol: "https", hostname: "cdn.myanimelist.net" },
        { protocol: "https", hostname: "images.unsplash.com" },
      ],
    },
    redirects: async () => [
      {
        destination: "/en/Home",
        permanent: true,
        source: "/",
      },
      {
        destination: "/en/Home",
        permanent: true,
        source: "/Home",
      },
    ],
  })
);

export default nextConfig;
