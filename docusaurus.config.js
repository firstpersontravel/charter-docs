module.exports = {
  title: 'Charter Documentation',
  tagline: 'Reference docs for Charter',
  url: 'https://charter-docs.firstperson.travel',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'firstpersontravel',
  projectName: 'charter-docs',
  themeConfig: {
    navbar: {
      title: 'Charter Documentation',
      logo: {
        alt: 'Charter Docs',
        src: 'img/logo.svg',
      },
      links: [{
        to: 'docs/reference/resources',
        activeBasePath: 'docs',
        label: 'Reference',
        position: 'left',
      }, {
        to: 'blog',
        label: 'Updates',
        position: 'left'
      }],
    },
    footer: {
      style: 'dark',
      links: [{
        title: 'Docs',
        items: [{
          label: 'Reference',
          to: 'docs/reference/resources',
        }],
      }, {
        title: 'Community',
        items: [{
          label: 'Stack Overflow',
          href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        }, {
          label: 'Discord',
          href: 'https://discordapp.com/invite/docusaurus',
        }, {
          label: 'Twitter',
          href: 'https://twitter.com/docusaurus',
        }],
      }, {
        title: 'More',
        items: [{
          label: 'Updates',
          to: 'blog',
        }, {
          label: 'GitHub',
          href: 'https://github.com/firstpersontravel/charter-docs',
        }],
      }],
      copyright: `Copyright © ${new Date().getFullYear()} First Person Travel`,
    },
  },
  presets: [
    ['@docusaurus/preset-classic', {
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        // Please change this to your repo.
        editUrl:
          'https://github.com/firstpersontravel/charter-docs/edit/master/website/',
      },
      blog: {
        showReadingTime: true,
        // Please change this to your repo.
        editUrl:
          'https://github.com/firstpersontravel/charter-docs/edit/master/website/blog/',
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }],
  ],
};
