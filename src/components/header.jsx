import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"

export default function Header({ siteTitle, pageInfo }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header>
      <nav className="flex justify-center p-4">
        <Link
          className="text-xl text-white hover:text-yellow-200 font-semibold font-heading"
          to="/"
        >
          {data.site.siteMetadata.title.toUpperCase()}
        </Link>
      </nav>
    </header>
  )
}
