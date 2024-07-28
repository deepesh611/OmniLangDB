// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OmniLangDB',
  tagline: 'Unified Database Solutions for Every Language',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://deepesh611.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'deepesh611',   // Usually your GitHub org/user name.
  projectName: 'OmniLangDB',        // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },

        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'OmniLangDB',
        logo: {
          alt: 'OmniLangDB Logo',
          src: 'img/OmniLangDB.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'Sidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'},
          {
            href: 'https://github.com/deepesh611/OmniLangDB',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'C++',
                to: '/docs/C++/intro',
              },
              {
                label: 'Shell',
                to: '/docs/Shell/intro',
              },
              {
                label: 'Java',
                to: '/docs/Java/intro',
              },
              {
                label: 'Python',
                to: '/docs/Python/intro',
              },
              {
                label: "JavaScript",
                to: '/docs/JavaScript/intro',
              }
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/deepesh611/omnilangdb',
              }, 
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Docs',
                to: '/docs',
              },
              {
                label: 'Contributors',
                to: '/contributors',
              },
            ],
          },
        ],
        copyright: `<b>Copyright © ${new Date().getFullYear()} OmniLangDB.</b>`,
      },
      
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
