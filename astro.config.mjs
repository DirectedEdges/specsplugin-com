// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Specs Plugin',
      description:
        'Automate production of page and component design specifications in Figma.',
      tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
      customCss: ['./src/styles/global.css'],
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/EightShapes/specs-plugin/issues',
        },
      ],
      sidebar: [
        {
          label: 'Standard Features',
          items: [
            { label: 'Anatomy', slug: 'anatomy' },
            { label: 'Properties', slug: 'properties' },
            { label: 'Layout and Spacing', slug: 'layout-and-spacing' },
            { label: 'Data', slug: 'features/data' },
            { label: 'Styling Inventory', slug: 'features/styling-inventory' },
          ],
        },
        {
          label: 'Pro Features',
          items: [
            {
              label: 'Complete Anatomy and Layout',
              slug: 'features/complete-anatomy',
            },
            { label: 'Modes', slug: 'features/modes' },
            {
              label: 'Spec Nested Components',
              slug: 'features/spec-nested-components',
            },
            {
              label: 'Token Studio Tokens',
              slug: 'features/tokens-studio',
            },
            { label: 'Two Way Comparison', slug: 'features/two-way' },
            { label: 'Variables', slug: 'features/variables' },
          ],
        },
        {
          label: 'Pro Formatting',
          items: [
            { label: 'Color', slug: 'features/format-color' },
            { label: 'Dark Mode', slug: 'features/dark-mode' },
            {
              label: 'Multi-Column Layout',
              slug: 'features/multi-column-layout',
            },
            { label: 'Spacing', slug: 'features/format-spacing' },
            { label: 'Tabular Anatomy', slug: 'features/tabular-anatomy' },
            { label: 'Typography', slug: 'features/format-typography' },
            { label: 'Values', slug: 'features/format-values' },
          ],
        },
        {
          label: 'Support',
          items: [
            {
              label: 'Get Help (Slack)',
              link: 'https://join.slack.com/t/eightshapes-specs/shared_invite/zt-1w4k19pj7-viPHKW8045zak64u~lH4yA',
              attrs: { target: '_blank' },
            },
            {
              label: 'Submit Defect (GitHub)',
              link: 'https://github.com/EightShapes/specs-plugin/issues',
              attrs: { target: '_blank' },
            },
          ],
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
