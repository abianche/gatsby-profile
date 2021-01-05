import React from "react"
import Image from "../components/image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Social from "../components/socials"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="py-12 px-4 text-center">
      <Image />
      <div className="w-full max-w-2xl mx-auto">
        <h2 className=" mt-4 text-white text-5xl leading-tight font-semibold font-heading">
          Computer scientist
        </h2>
        <p className="mt-6 mb-8 text-gray-100 leading-relaxed">
          I've been a computer science enthusiast for as long as I can remember.
          I'm always trying to master whatever I am doing without losing focus.
          However, I also keep an eye open to what's new out there. I am an
          early adopter and a remote worker.
        </p>
      </div>
    </section>
    <Social />
  </Layout>
)

export default IndexPage
