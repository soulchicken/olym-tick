import { defineConfig } from "@pandacss/dev";
import { colorTokens } from "./tokens/colors";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        ...colorTokens,
        fonts: {
          headline: { value: "OlympicHeadline" },
          sans: { value: "ProductSans" },
        },
      },
    },
  },
  // The output directory for your css system
  outdir: "styled-system",
});
