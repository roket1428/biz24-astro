import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://biz24.tubit.org.tr",
  integrations: [tailwind(), react(), sitemap()],
  devToolbar: {
    enabled: false
  }
});