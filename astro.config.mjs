import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [mdx(), react(), icon()],
  site: 'https://oldcow25.github.io',
  base: '/Group4_CSARCH2_Computer-Architecture-are-Forever',

  vite: {
    plugins: [tailwindcss()],
  },
});