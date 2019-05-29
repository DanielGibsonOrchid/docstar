module.exports = {
  siteMetadata: {
    title: `DocStar`,
    description: `Enterprise Content Management and AP Automation Solutions`,
    author: `Orchid NZ`,
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
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`300`,`400`,`500`,`700`,`900`],
    //       },
    //       {
    //         family: `Montserrat`,
    //         variants: [`300`,`400`,`500`,`600`,`700`,`800`,`900`]
    //       },
    //     ],
    //   },
    // }, 
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-source-googlemaps-geocoding',
    //   options: {
    //     key: 'AIzaSyA0odzl9yIvPlw7QnLKt20ekgU2Nijoiyc',
    //     address: '6 Cebel Place, Rosedale, Auckland 0632'
    //   },
    // }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
