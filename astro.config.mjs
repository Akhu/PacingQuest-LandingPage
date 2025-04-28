import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://pemflow.app',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false,
      path: './tailwind.pacing.config.cjs'
    }
  }), sitemap()]
});