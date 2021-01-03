import React from "react"

export default function Social() {
  return (
    <section>
      <div className="flex justify-center space-x-5">
        <a
          className="fas fa-envelope fa-2x text-white"
          aria-label="email"
          rel="noreferrer"
          target="_blank"
          href="mailto:alessio.bianchetti@gmail.com"
        ></a>
        <a
          className="fab fa-github fa-2x text-white"
          aria-label="github"
          rel="noreferrer"
          target="_blank"
          href="https://github.com/abianche"
        ></a>
        <a
          className="fab fa-linkedin fa-2x text-white"
          aria-label="linkedin"
          rel="noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/alessio-bianchetti"
        ></a>
      </div>
    </section>
  )
}
