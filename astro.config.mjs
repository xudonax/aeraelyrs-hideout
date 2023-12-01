import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    base: '/aeraelyrs-hideout/',
    site: 'https://www.xudonax.eu',

    compressHTML: true,
    trailingSlash: 'always',
    integrations: [
        starlight({
            title: 'Aeraelyr\'s Hideout',
            defaultLocale: 'en',
            social: {
                github: 'https://github.com/xudonax/the-network',
            },
            sidebar: [
                {
                    label: 'Aeraelyr\'s Hideout',
                    collapsed: true,
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Getting Started', link: '/guides/aeraelyrs-hideout/' },
                        { 
                            label: 'Towns',
                            items: [
                                { label: 'Laughing Cavern', link: 'guides/aeraelyrs-hideout/towns/laughing-cavern/' },
                                { label: 'Golden Oasis', link: 'guides/aeraelyrs-hideout/towns/golden-oasis/' },
                                { label: 'Sandstorm', link: 'guides/aeraelyrs-hideout/towns/sandstorm/' },
                                { label: 'Sunfire', link: 'guides/aeraelyrs-hideout/towns/sunfire/' },
                                { label: 'Brassscale', link: 'guides/aeraelyrs-hideout/towns/brassscale/' }
                            ]
                        }
                    ],
                },
                {
                    label: 'Player\'s Guide',
                    items: [
                        { label: 'Introduction', link: '/guides/aeraelyrs-hideout-players-guide/' },
                    ]
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});
