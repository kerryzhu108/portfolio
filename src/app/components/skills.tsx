"use client"
import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import anime from "animejs"
import ThemeToggle from "./theme-toggle"

enum Skill {
  Frontend = "Front End",
  Backend = "Backend / Tools",
  Languages = "Languages",
}

const skills = {
  [Skill.Frontend]: [
    ["React", "/react.png"],
    ["Redux", "/redux.png"],
    ["Next", "/next.png"],
    ["Tailwind", "/tailwind.png"],
    ["HTML5", "/html.png"],
    ["CSS", "/css.png"],
    ["DevTools", "/Devtools.png"],
  ],
  [Skill.Backend]: [
    ["Git", "/git.png"],
    ["NodeJS", "/node.png"],
    ["MongoDB", "/mongo.png"],
    ["Datadog", "/datadog.png"],
    ["Heroku", "/heroku.jpeg"],
    ["AWS", "/aws.png"],
    ["Unleash", "/unleash.png"],
    ["Circle CI", "/circleci.png"],
    ["Docker", "/docker.png"],
    ["Redis", "/redis.png"],
  ],
  [Skill.Languages]: [
    ["TypeScript", "/typescript.png"],
    ["JavaScript", "/javascript.png"],
    ["Python", "/python.png"],
    ["SQL", "/sql.png"],
    ["Java", "/java.png"],
    ["C", "/c.png"],
    ["Go", "/go.png"],
    ["Kotlin", "/kotlin.png"],
    ["Swift", "/swift.png"],
  ],
}

export default function Skills() {
  const [selectedLayer, setSelectedLayer] = useState<Skill | "">("")
  const burgerSize = 330
  const logoSize = 50

  const renderSkills = (stack: Skill | "") => {
    if (!stack)
      return (
        <div className="text-center">
          <p className="text-2xl">I always love a good burger!</p>
          <p className="text-3xl">Select a layer to view stack skills</p>
          <p className="mt-3 text-lg"> - Design by Danny Berger</p>
        </div>
      )
    return (
      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center max-w-[500px]">
          {skills[stack].map((skill) => {
            return (
              <div key={skill[0]} className="skill opacity-30 mx-4 my-4 text-center items-center flex flex-col">
                <div className="flex justify-center items-center ">
                  <Image
                    src={skill[1]}
                    alt={skill[0]}
                    width={logoSize}
                    height={logoSize}
                    className="h-9 w-auto md:h-12  md:mb-3"
                  />
                </div>
                <p>{skill[0]}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  useEffect(() => {
    anime({
      targets: ".skill",
      translateY: { value: -10, duration: 500 },
      opacity: 1,
      duration: 500,
      easing: "linear",
    })
  }, [selectedLayer])

  const renderBurgerColor = (layer: Skill | "") => {
    if (layer == "") {
      return "/burgerBlank.png"
    }
    if (layer == Skill.Frontend) {
      return "/burgerTP.png"
    }
    if (layer == Skill.Backend) {
      return "/burgerMid.png"
    }
    return "/burgerBT.png"
  }

  return (
    <div className="lg:px-36 py-28 light">
      <div className="w-full text-center">
        <div className="inline-block">
          <h1 className="text-center text-4xl md:text-5xl font-semibold">Skills</h1>
          <div className="h-3 md:h-4 bg-[#f36925] -mt-4" />
        </div>
      </div>
      <div className="flex flex-col mt-16 items-center md:flex-row">
        <div className="flex justify-center relative w-full px-5 py-10">
          <div
            className="absolute"
            style={{ height: burgerSize / 3, width: burgerSize }}
            onMouseEnter={() => {
              setSelectedLayer(Skill.Frontend)
            }}
          />
          <div
            className="absolute"
            style={{ top: burgerSize / 3 + 25, height: burgerSize / 3, width: burgerSize }}
            onMouseEnter={() => {
              setSelectedLayer(Skill.Backend)
            }}
          />
          <div
            className="absolute"
            style={{ top: (burgerSize * 2) / 3, height: burgerSize / 3, width: burgerSize }}
            onMouseEnter={() => {
              setSelectedLayer(Skill.Languages)
            }}
          />
          <Image src={renderBurgerColor(selectedLayer)} alt="burger" width={burgerSize} height={burgerSize} />
        </div>
        <div className="w-full">
          <h1 className="text-5xl text-center my-5">{selectedLayer}</h1>
          {renderSkills(selectedLayer)}
        </div>
      </div>
    </div>
  )
}
