import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Projects = () => {
  return (
    <Layout>
      <SEO
        title="My Projects"
        description="List of my personal projects"
        lang="en"
      />
      <p className="prose max-w-none">This is list of my personal projects</p>
    </Layout>
  )
}

export default Projects
