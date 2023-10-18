module.exports = {
  siteMetadata: {
    title: "Pebble Climbing Documentation",
    description: "Documentation for Pebble Climbing",
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        // Add these options.
        linkImagesToOriginal: false,
        backgroundColor: `transparent`,
        defaultQuality: 90,
      },
    },
    "gatsby-plugin-meta-redirect",
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-redirects",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
          },
          `gatsby-remark-slug`,
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "docs",
        name: "docs",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Manrope\:400,600`,
          `Open Sans\:400,700`,
          `Comfortaa`,
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
  ],
}
