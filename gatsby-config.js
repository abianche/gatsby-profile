module.exports = {
  siteMetadata: {
    title: `Alessio Bianchetti`,
    description: `Alessio Bianchetti's profile`,
    author: `@abianche`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alessio Bianchetti`,
        // short_name: `abianche`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#212121`,
        icon: `src/images/icon.png`,
        display: `browser`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
