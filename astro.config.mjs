// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
	site: 'https://albarin.github.io',
	integrations: [mdx(), sitemap(), umami(
		{
			id: 'deeb9f1a-60c4-46fb-ba2d-a0473a6e0347',
			domains: ['crabinloan.com', 'www.crabinloan.com'],
		}
	)],
});