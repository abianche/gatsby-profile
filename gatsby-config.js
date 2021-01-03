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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-offline`,
  ],
}
