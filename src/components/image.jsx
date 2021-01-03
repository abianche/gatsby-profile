import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

export default function Image() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.fluid) {
    return <div>Picture not found</div>
  }

  return (
    // <div class="max-w-2xl mx-auto">
    <Img
      className="max-w-xs mx-auto rounded-3xl"
      fluid={data.placeholderImage.childImageSharp.fluid}
      alt="profile"
    />
    /* </div> */
  )
}
