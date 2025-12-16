// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import yeskunallumami from '@yeskunall/astro-umami';

// https://astro.build/config
export default defineConfig({
    site: 'https://albarin.github.io',
    integrations: [mdx(), sitemap(), yeskunallumami()],
});