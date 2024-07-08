import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

/**
 * The type of the Astro config object.
 */
type AstroConfig = typeof defineConfig extends (config: infer T) => any ? T : never;

/**
 * @type {AstroConfig['output']}
 */
const output = 'static';

/**
 * @type {AstroConfig['site']}
 */
const site = 'https://pmwells.github.io';

/**
 * @type {AstroConfig['base']}
 */
const base = 'lb-nonprofit-guide';

/**
 * The type of the Starlight config object.
 */
type StarlightConfig = typeof starlight extends (config: infer T) => any ? T : never;

/**
 * @type {StarlightConfig['title']}
 */
const title = 'Long Beach Nonprofit Guide';

/**
 * @type {StarlightConfig['description']}
 */
const description = 'A guide to starting and running a nonprofit in Long Beach, CA.';

/**
 * @type {StarlightConfig['social']}
 */
const social = {
	github: 'https://github.com/pmwells/lb-nonprofit-guide',
};

/**
 * @type {StarlightConfig['sidebar']}
 */
const sidebar = [
	{ label: 'Start', autogenerate: { directory: 'start' } },
	{ label: 'Guide', autogenerate: { directory: 'guide' } },
	{ slug: 'resources' }
];

/**
 * @type {StarlightConfig['head']}
 */
const head = [];

// Add Google Analytics script in production.
if (import.meta.env.PROD) {
	head.push({
		tag: 'script' as const,
		attrs: {
			src: 'https://www.googletagmanager.com/gtag/js?id=G-6M8JZNTXEL',
			async: true,
		},
	});
	head.push({
		tag: 'script' as const,
		content: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-6M8JZNTXEL');
		`,
	});
}

/**
 * Define the Astro config object.
 */
export default defineConfig({
	output,
	site,
	base,
	integrations: [ starlight({ title, description, social, sidebar, head, }) ],
});
