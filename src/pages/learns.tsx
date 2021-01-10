import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Learns = () => {
  return (
    <Layout>
      <SEO
        title="Today I Learned"
        description="List I learned today!"
        lang="en"
      />
      <p className="prose max-w-none">Today I learn about...</p>
    </Layout>
  )
}

export default Learns
