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
        defaultQuality: 80,
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
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Comfortaa`,
            variants: [`500`],
          },
          {
            family: `Open Sans`,
          },
          {
            family: `Nunito Sans`,
            variants: [`300`, `400`, `600`],
          },
        ],
      },
    },
  ],
}
