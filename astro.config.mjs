import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	output: 'static',
	site: 'https://pmwells.github.io',
	base: 'lb-nonprofit-guide',
	integrations: [
		starlight({
			title: 'Long Beach Nonprofit Guide',
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
