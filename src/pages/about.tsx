import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => {
  return (
    <Layout>
      <SEO title="About Me" lang="en" description="Everything about creator!" />
      <p className="prose max-w-none">
        Hello, my name is Dwiferdio Seagal Putra
      </p>
    </Layout>
  )
}

export default About
