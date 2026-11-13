import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  devToolbar: { enabled: false },
  site: "https://lulgabc.github.io",
  base: "/LoveClassicGuitar",
  trailingSlash: "always",
  integrations: [sitemap({ filter: (page) => !page.includes("/404") && !page.includes("/print/") })],
  build: {
    format: "directory",
  },
});
