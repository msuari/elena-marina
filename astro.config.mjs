// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Replace with your GitHub username and repository name
  site: 'https://msuari.github.io',
  base: '/elena-marina',
  vite: {
    plugins: [tailwindcss()]
  },
});