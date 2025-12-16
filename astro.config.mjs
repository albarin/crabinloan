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
			id: 'e1d13fe7-365c-4004-b028-c20c882ec651',
			hostUrl: 'https://umami-rouge-five.vercel.app',
			domains: ['crabinloan.com', 'www.crabinloan.com'],
		}
	)],
});