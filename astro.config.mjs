import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.absmach.eu",
  output: "static",

  integrations: [
    tailwind(),
    sitemap({
      filenameBase: "sitemap",
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],

  adapter: cloudflare(),
});