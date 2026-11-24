import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  presets: ["@pandacss/preset-base", "@pandacss/preset-panda"],
  preflight: false,
  strictTokens: true,
  theme: {
    extend: {
      tokens: {
        colors: {
          paper: { value: "#f4f6f7" },
          white: { value: "#ffffff" },
          ink: { value: "#14232e" },
          slate: { value: "#536471" },
          line: { value: "#d5dfe5" },
          ocean: { value: "#135d78" },
          oceanDark: { value: "#0d4053" },
          amber: { value: "#f2b84b" },
          focusRust: { value: "#b5472b" },
          night: { value: "#101820" },
          nightSurface: { value: "#192832" },
          nightText: { value: "#f2f6f8" },
          nightMuted: { value: "#bac7ce" },
          nightLine: { value: "#4b5b65" },
          ice: { value: "#8bd0e2" },
          warmFocus: { value: "#ffd18a" }
        }
      },
      semanticTokens: {
        colors: {
          canvas: { value: { base: "{colors.paper}", _dark: "{colors.night}" } },
          surface: { value: { base: "{colors.white}", _dark: "{colors.nightSurface}" } },
          text: { value: { base: "{colors.ink}", _dark: "{colors.nightText}" } },
          muted: { value: { base: "{colors.slate}", _dark: "{colors.nightMuted}" } },
          border: { value: { base: "{colors.line}", _dark: "{colors.nightLine}" } },
          accent: { value: { base: "{colors.ocean}", _dark: "{colors.ice}" } },
          accentContrast: { value: { base: "{colors.white}", _dark: "{colors.night}" } },
          focus: { value: { base: "{colors.focusRust}", _dark: "{colors.warmFocus}" } },
          notice: { value: { base: "#eaf1f4", _dark: "#1c3440" } }
        }
      }
    }
  },
  include: ["./src/**/*.{astro,vue,ts,tsx,js,jsx}"],
  exclude: ["./src/content/**"],
  outdir: "styled-system"
});
