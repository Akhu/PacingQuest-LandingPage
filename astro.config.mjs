import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://pacing.quest',
  integrations: [sitemap()],
  // Small site: inlining the CSS removes the only render-blocking request
  build: {
    inlineStylesheets: 'always',
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
