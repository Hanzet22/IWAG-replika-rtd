import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import pandacss from "@pandacss/vite";
import stylex from "@stylexjs/unplugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  integrations: [vue()],
  vite: {
    plugins: [
      stylex.vite({
        useCSSLayers: {\n          before: ["reset", "theme", "base", "tokens", "recipes", "components"],\n          after: ["utilities"],\n          prefix: "stylex"\n        },
        dev: process.env.NODE_ENV === "development",
        runtimeInjection: false
      }),
      pandacss({ transform: true }),
      tailwindcss()
    ]
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "id", "en-sg", "ms-my"],
    routing: {
      prefixDefaultLocale: true
    }
  },
  build: {
    format: "directory"
  }
});
