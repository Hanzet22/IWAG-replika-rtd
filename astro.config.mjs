import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  trailingSlash: "always",
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
