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
      <div className="flex flex-col items-center text-center text-gray-500">
        <div>
          Made with{" "}
          <i
            className="fas fa-bolt text-yellow-200 mx-1"
            title="Lightning speed"
          ></i>{" "}
          using
          <a
            aria-label="gatsby"
            rel="noreferrer"
            target="_blank"
            href="https://www.gatsbyjs.com/"
            className="mx-1 underline"
          >
            Gatsby
          </a>
          and
          <a
            aria-label="tailwindcss"
            rel="noreferrer"
            target="_blank"
            href="https://tailwindcss.com/"
            className="mx-1 underline"
          >
            Tailwind CSS
          </a>
        </div>
        <div>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </div>
        <div>All rights reserved</div>
      </div>
    </footer>
  )
}
