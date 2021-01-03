import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const PageNotFound = () => (
  <Layout>
    <SEO title="Page not found" />
    <section className="py-8 px-4 text-center">
      <h2 className="text-5xl font-semibold font-heading">Error 404</h2>
      <p className="text-gray-400">Page not found</p>
      <div>
        <Link className="px-4 text-indigo-600 hover:underline" to="/">
          Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default PageNotFound
