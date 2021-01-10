import { PageProps, graphql, Link } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home: React.FC<PageProps<any>> = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data

  return (
    <Layout>
      <SEO title="Home" description="My Personal Blog" lang="en" />
      {edges.map(edge => {
        const {
          frontmatter: { title, date },
          excerpt,
          fields: { slug },
          id,
        } = edge.node
        return (
          <div key={id} className="mb-10">
            <h2 className="m-0 mb-3 text-black">
              <Link to={slug} className="hover:underline">
                {title}
              </Link>
            </h2>
            <h5 className="m-0 mb-4 text-gray-400">{date}</h5>
            <p className="prose max-w-none">{excerpt}</p>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt(truncate: true, pruneLength: 50)
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Home
