import { defineConfig } from 'astro/config';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  site: 'https://thygrrr.github.io',
  base: '/unity-fee-calculator',  
});

