import { PageProps } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Home: React.FC<PageProps<{}>> = () => {
  return (
    <Layout>
      <SEO title="Home" description="My Personal Blog" lang="en" />
      <div className="prose max-w-none">This site is under construction!</div>
    </Layout>
  )
}

export default Home
