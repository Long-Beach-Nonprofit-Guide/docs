import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import sitemap from "@astrojs/sitemap";

/**
 * The type of the Starlight config object.
 */
type StarlightConfig = typeof starlight extends (config: infer T) => unknown ? T : never;

/**
 * The Starlight config object.
 */
const starlightConfig: StarlightConfig = {
    /**
     * The title of the site.
     */
    title: "Long Beach Nonprofit Guide",

    /**
     * The description of the site.
     */
    description: "A guide to starting and running a nonprofit in Long Beach, CA.",

    /**
     * The favicon of the site.
     */
    favicon: "/favicon.png",

    /**
     * Any social media links that should be included in the header.
     */
    social: {
        github: "https://github.com/pmwells/lb-nonprofit-guide",
    },

    /**
     * The sidebar navigation configuration.
     */
    sidebar: [
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
    ],

    /**
     * Additional head elements to include in the document.
     */
    head: [
        {
            tag: "link",
            attrs: {
                rel: "sitemap",
                href: "/sitemap-index.xml",
            },
        },
    ],
};

/**
 * If the project is in production, add Google Analytics to the head elements.
 */
if (import.meta.env.PROD) {
    starlightConfig.head?.push({
        tag: "script",
        attrs: {
            src: "https://www.googletagmanager.com/gtag/js?id=G-6M8JZNTXEL",
            async: true,
        },
    });
    starlightConfig.head?.push({
        tag: "script",
        content: `
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());

			gtag('config', 'G-6M8JZNTXEL');
		`,
    });
}

/**
 * The type of the Astro config object.
 */
type AstroConfig = typeof defineConfig extends (config: infer T) => unknown ? T : never;

/**
 * The Astro config object.
 */
const astroConfig: AstroConfig = {

    /**
     * Specifies the output type for the project.
     */
    output: "static",

    /**
     * The URL of the site.
     */
    site: "https://www.lbnonprofitguide.org",

    /**
     * The integration plugins to use.
     */
    integrations: [
        sitemap(),
        starlight(starlightConfig),
    ],
};

/**
 * Define the Astro config object.
 */
export default defineConfig(astroConfig);
