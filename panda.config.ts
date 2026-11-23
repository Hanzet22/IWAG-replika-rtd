import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  preflight: false,
  strictTokens: true,
  include: ["./src/**/*.{astro,vue,ts,tsx,js,jsx}"],
  exclude: ["./src/content/**"],
  outdir: "styled-system"
});
