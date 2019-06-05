module.exports = {
  siteMetadata: {
    title: `Docstar`,
    description: `Enterprise Content Management and AP Automation Solutions`,
    author: `Orchid`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/DocStar-Images/TopNAV-DOCSTAR-logo-white@2x.png`, // This path is relative to the root of the site.
      },
    },
  ]
}
