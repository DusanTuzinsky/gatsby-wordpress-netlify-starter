import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const BlogIndex = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata;
  const page = props.data.wordpressPage;

  return (
    <Layout location={props.location} title={title}>
      <SEO title="Homepage" />
      <div
        dangerouslySetInnerHTML={{
          __html: page.content,
        }}
      />
      {}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        postPrefix
      }
    }
    wordpressPage(path: {eq: "/"}) {
      id
      status
      title
      content
    }
  }
`
