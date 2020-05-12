module.exports = {
  title: 'Using Charter',
  tagline: 'Reference Docs for Charter',
  url: 'https://charter-docs.firstperson.travel',
  baseUrl: '/',
  favicon: 'img/feather.png',
  organizationName: 'firstpersontravel',
  projectName: 'charter-docs',
  themeConfig: {
    navbar: {
      title: 'Using Charter',
      logo: {
        alt: 'Charter Docs',
        src: 'img/feather.png',
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
        title: 'Charter Docs',
        items: [{
          label: 'Tutorials',
          to: 'docs/tutorials',
        }, {
          label: 'Reference',
          to: 'docs/reference/resources',
        }],
      }, {
        title: 'More Resources',
        items: [{
          label: 'About Charter',
          href: 'http://about.firstperson.travel/',
        }, {
          label: 'Updates',
          to: 'blog',
        }],
      }, {
        title: 'First Person Travel',
        items: [{
          label: 'Our Trips',
          href: 'http://www.firstperson.travel/',
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
  stylesheets: [
    '/css/fonts.css'
  ]
};