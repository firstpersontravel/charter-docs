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
      items: [{
        to: 'docs/concepts/overview',
        activeBasePath: 'docs/concepts',
        label: 'Concepts',
        position: 'left',
      }, {
        to: 'docs/tutorials/starter',
        activeBasePath: 'docs/tutorials',
        label: 'Tutorials',
        position: 'left',
      }, {
        to: 'docs/reference/resources',
        activeBasePath: 'docs/reference',
        label: 'Reference',
        position: 'left',
      }, {
        to: 'blog',
        label: 'Updates',
        position: 'left'
      }, {
        href: 'https://charter.firstperson.travel',
        label: 'Back to Charter',
        position: 'right'
      }],
    },
    footer: {
      style: 'dark',
      links: [{
        title: 'Charter Docs',
        items: [{
          label: 'Tutorials',
          to: 'docs/tutorials/starter',
        }, {
          label: 'Reference',
          to: 'docs/reference/resources',
        }],
      }, {
        title: 'More Resources',
        items: [{
          label: 'Use Charter',
          href: 'http://charter.firstperson.travel/',
        }, {
          label: 'Github Repo',
          href: 'https://github.com/firstpersontravel/charter',
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
        sidebarPath: require.resolve('./sidebars.js')
      },
      blog: {
        showReadingTime: true
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }],
  ],
  scripts: [
    '/js/analytics.js'
  ],
  stylesheets: [
    '/css/fonts.css'
  ]
};
