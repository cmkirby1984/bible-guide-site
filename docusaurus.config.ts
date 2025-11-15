import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Bible Guide',
  tagline: 'A comprehensive study guide for all 66 books of the Bible',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://cmkirby1984.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/bible-guide-site/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'cmkirby1984', // Usually your GitHub org/user name.
  projectName: 'bible-guide-site', // Usually your repo name.

  onBrokenLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // PWA configuration
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'manifest',
        href: '/bible-guide-site/manifest.json',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#000000',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: '/bible-guide-site/img/icon-512.png',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve docs at the root
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/cmkirby1984/bible-guide-site/tree/main/',
        },
        blog: false, // Disable blog
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Bible Guide',
      logo: {
        alt: 'Bible Guide Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: '/old-testament',
          label: 'Old Testament',
          position: 'left',
        },
        {
          to: '/new-testament',
          label: 'New Testament',
          position: 'left',
        },
        {
          to: '/resources',
          label: 'Resources',
          position: 'left',
        },
        {
          href: 'https://github.com/cmkirby1984/bibleinfocollection',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Scripture',
          items: [
            {
              label: 'Old Testament',
              to: '/old-testament',
            },
            {
              label: 'New Testament',
              to: '/new-testament',
            },
          ],
        },
        {
          title: 'Study Resources',
          items: [
            {
              label: 'Resources',
              to: '/resources',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub Repository',
              href: 'https://github.com/cmkirby1984/bibleinfocollection',
            },
          ],
        },
      ],
      copyright: `Free Bible Study Resource • Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
