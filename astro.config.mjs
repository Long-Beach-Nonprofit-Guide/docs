import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	output: 'static',
	site: 'https://pmwells.github.io',
	base: 'lb-nonprofit-guide',
	integrations: [
		starlight({
			title: 'Long Beach Nonprofit Guide',
			head: [
				{
					tag: 'script',
					attributes: {
						src: 'https://www.googletagmanager.com/gtag/js?id=G-6M8JZNTXEL',
						async: true,
					},
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());

						gtag('config', 'G-6M8JZNTXEL');
					`,
				},
			],
			social: {
				github: 'https://github.com/pmwells/lb-nonprofit-guide',
			},
			sidebar: [
				{ label: 'Start', autogenerate: { directory: 'start' } },
				{ label: 'Guide', autogenerate: { directory: 'guide' } },
				{ slug: 'resources' }
			]
		}),
	],
});
