import { graphql, useStaticQuery } from "gatsby"
import React from "react"

export default function Footer() {
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
    <footer className="p-4 px-6">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-auto lg:mr-auto text-center text-white lg:text-left">
          Made with <i className="fas fa-bolt text-yellow-200"></i> using{" "}
          <a
            aria-label="gatsby"
            rel="noreferrer"
            target="_blank"
            href="https://www.gatsbyjs.com/"
          >
            Gatsby
          </a>
        </div>
        <div className="w-full lg:w-auto text-center text-white lg:text-right">
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </div>
      </div>
    </footer>
  )
}
