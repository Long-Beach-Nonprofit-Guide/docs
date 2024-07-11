import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

/**
 * The type of the Astro config object.
 */
import sitemap from "@astrojs/sitemap";
type AstroConfig = typeof defineConfig extends (config: infer T) => unknown ? T : never;

/**
 * @type {AstroConfig['output']}
 */
const output: AstroConfig["output"] = "static";

/**
 * @type {AstroConfig['site']}
 */
const site: AstroConfig["site"] = "https://www.lbnonprofitguide.org";

/**
 * The type of the Starlight config object.
 */
type StarlightConfig = typeof starlight extends (config: infer T) => unknown ? T : never;

/**
 * @type {StarlightConfig['title']}
 */
const title: StarlightConfig["title"] = "Long Beach Nonprofit Guide";

/**
 * @type {StarlightConfig['description']}
 */
const description: StarlightConfig["description"] = "A guide to starting and running a nonprofit in Long Beach, CA.";

/**
 * @type {StarlightConfig['favicon']}
 */
const favicon: StarlightConfig["favicon"] = "/favicon.png";

/**
 * @type {StarlightConfig['social']}
 */
const social: StarlightConfig["social"] = {
    github: "https://github.com/pmwells/lb-nonprofit-guide",
};

/**
 * @type {StarlightConfig['sidebar']}
 */
const sidebar: StarlightConfig["sidebar"] = [
    {
        slug: "overview",
    },
    {
        slug: "scope",
    },
    {
        label: "Steps",
        autogenerate: {
            directory: "steps",
        },
    },
    {
        slug: "timeline",
    },
    {
        slug: "budget",
    },
    {
        slug: "appendix",
    },
];

/**
 * @type {StarlightConfig['head']}
 */
const head: StarlightConfig["head"] = [
    {
        tag: "link" as const,
        attrs: {
            rel: "sitemap",
            href: "/sitemap-index.xml",
        },
    },
];

// Add Google Analytics script in production.
if (import.meta.env.PROD) {
    head.push({
        tag: ("script" as const),
        attrs: {
            src: "https://www.googletagmanager.com/gtag/js?id=G-6M8JZNTXEL",
            async: true,
        },
    });
    head.push({
        tag: ("script" as const),
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

// https://astro.build/config
export default defineConfig({
    output,
    site,
    integrations: [
        sitemap(),
        starlight({
            title,
            description,
            favicon,
            social,
            sidebar,
            head,
        }),
    ],
});
