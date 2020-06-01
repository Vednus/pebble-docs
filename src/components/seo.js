import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

export default ({ title, description }) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const fullTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <link
        rel="icon"
        type="image/png"
        href="https://www.pebbleclimbing.com/favicon.png"
      />
      <meta
        name="description"
        content={description || siteMetadata.description}
      />
    </Helmet>
  )
}
