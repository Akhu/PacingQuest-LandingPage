import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://pemflow.app',
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()]
  }
});
