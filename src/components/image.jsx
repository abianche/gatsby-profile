import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export default function Image() {
  const data = useStaticQuery(graphql`
    {
      placeholderImage: file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `)

  if (!data?.placeholderImage?.childImageSharp?.gatsbyImageData) {
    return <div>Picture not found</div>
  }

  return (
    // <div class="max-w-2xl mx-auto">
    <GatsbyImage
      image={data.placeholderImage.childImageSharp.gatsbyImageData}
      className="max-w-xs mx-auto rounded-3xl"
      alt="profile"
    />
    /* </div> */
  )
}
