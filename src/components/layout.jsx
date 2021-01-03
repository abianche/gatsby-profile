/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Footer from "./footer"
import Header from "./header"

export default function Layout({ children, pageInfo }) {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header pageInfo={pageInfo} />
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
