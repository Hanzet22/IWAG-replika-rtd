import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
  integrations: [vue()],
  vite: {
    plugins: [tailwindcss()]
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
