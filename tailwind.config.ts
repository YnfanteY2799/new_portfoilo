import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";
import { nextui } from "@nextui-org/react";

import type { Config } from "tailwindcss";

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        local: [`var(--font-local)`],
      },
    },
  },
  darkMode: "class",
  plugins: [
    addVariablesForColors,
    require("@tailwindcss/aspect-ratio"),
    nextui({
      addCommonColors: true,
      themes: {
        light: {
          colors: {
            background: "#e7e7e7",
          },
        },
      },
    }),
  ],
};
export default config;
