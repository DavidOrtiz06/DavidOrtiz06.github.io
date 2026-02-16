import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import siteConfig from 'https://DavidOrtiz06.github.io';

// https://astro.build/config
export default defineConfig({
    site: siteConfig.website,
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [mdx(), sitemap()]
});
