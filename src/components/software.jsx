import React from "react"

export default function Software() {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[array[i], array[j]] = [array[j], array[i]]
    }
  }

  const languages = [
    "JavaScript",
    "TypeScript",
    "Java",
    "ReactJS",
    "Test Automation",
    "Microsoft Azure",
    "Git",
    "Dart",
    "Flutter",
    "Unity",
    "ArchLinux",
    "Spring",
    "Apache",
    "REST",
    "Fullstack",
  ]

  shuffleArray(languages)

  return (
    <section>
      <div className="text-gray-500 text-center my-4 absolute text-6xl">
        {languages.join(" · ")}
      </div>
    </section>
  )
}
