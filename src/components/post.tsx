import React from "react"
import { graphql } from "gatsby"

import Layout from "./layout"

export default ({ data }) => {
  const post = data.markdownRemark

  return (
    <Layout>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <h5>{post.frontmatter.date}</h5>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`
