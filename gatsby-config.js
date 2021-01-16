module.exports = {
  siteMetadata: {
    title: 'raízes',
    description: 'o Brasil dos jovens para os jovens',
    author: '@brasilraizes',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `poppins\:300,300i,400,400i,600`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `raízes`,
        short_name: `raízes`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/icon.png`,
      },
    },
    'gatsby-plugin-offline',
  ],
}
