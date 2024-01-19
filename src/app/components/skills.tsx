"use client"
import React, { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import anime from "animejs"

enum Skill {
  Frontend = "Front End",
  Tools = "Tools",
  Backend = "Back End",
}

const skills = {
  [Skill.Frontend]: [
    ["React", "/react.png"],
    ["Redux", "/redux.png"],
    ["Next", "/next.png"],
    ["Tailwind", "/tailwind.png"],
    ["TypeScript", "/typescript.png"],
    ["HTML", "/html.png"],
    ["CSS", "/css.png"],
    ["JavaScript", "/javascript.png"],
  ],
  [Skill.Tools]: [
    ["Git", "/git.png"],
    ["Circle CI", "/circleci.png"],
    ["Heroku", "/heroku.jpeg"],
    ["AWS", "/aws.png"],
    ["Unleash", "/unleash.png"],
    ["DevTools", "/devtools.png"],
    ["VSCode", "/vscode.png"],
  ],
  [Skill.Backend]: [
    ["NodeJS", "/node.png"],
    ["SQL", "/sql.png"],
    ["MongoDB", "/mongo.png"],
    ["Redis", "/redis.png"],
    ["Docker", "/docker.png"],
    ["Kafka", "/kafka.png"],
    ["Spark", "/spark.jpeg"],
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
          <p className="text-xl">Select a layer on the burger to view stack skills</p>
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
      translateY: { value: -15, duration: 500 },
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
    if (layer == Skill.Tools) {
      return "/burgerMid.png"
    }
    return "/burgerBT.png"
  }

  return (
    <div className="mt-96 lg:mx-36">
      <h1 className="text-center text-4xl md:text-5xl font-semibold">Skills</h1>
      <div className="flex flex-col items-center md:flex-row pb-16 mt-16">
        <div className="flex justify-center relative w-full px-8">
          <div
            className="absolute"
            style={{ height: burgerSize / 3, width: burgerSize }}
            onMouseEnter={() => {
              setSelectedLayer(Skill.Frontend)
            }}
          />
          <div
            className="absolute"
            style={{ top: burgerSize / 3, height: burgerSize / 3, width: burgerSize }}
            onMouseEnter={() => {
              setSelectedLayer(Skill.Tools)
            }}
          />
          <div
            className="absolute"
            style={{ top: (burgerSize * 2) / 3, height: burgerSize / 3, width: burgerSize }}
            onMouseEnter={() => {
              setSelectedLayer(Skill.Backend)
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
