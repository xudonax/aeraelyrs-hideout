import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    compressHTML: true,
    trailingSlash: 'always',
    base: '/the-network/',
    integrations: [
        starlight({
            title: 'The Network - A Pathfinder 2e Adventure',
            social: {
                github: 'https://github.com/xudonax/the-network',
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', link: '/guides/example/' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
});
