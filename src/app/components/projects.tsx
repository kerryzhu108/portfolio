import Image from "next/image"
import React, { useState } from "react"

const tools = ["NextJS", "TypeScript", "TailWind", "OpenAI", "MongoDB", "Google Auth", "Stripe"]

export default function Projects() {
  return (
    <div className="flex-1 justify-center mt-36 mx-3 pb-16">
      <h1 className="text-center font-semibold text-4xl md:text-5xl mb-20">Projects</h1>
      <div className="md:flex">
        <div className="flex flex-col w-full items-center">
          <div className="flex items-center">
            <Image src={"/travelWhere.png"} alt={"Travel Where"} width={20} height={20} className="w-9" />
            <h2 className="text-xl md:text-3xl ml-2">Next Vacation</h2>
          </div>
          <div className="flex flex-wrap justify-center mt-3">
            {tools.map((toolName) => {
              return (
                <div key={toolName} className="bg-white mr-2 my-2 px-3 text-black text-nowrap">
                  {toolName}
                </div>
              )
            })}
          </div>

          <div className="mt-3 text-xl text-center">An AI travel advisor that generates curated </div>
          <div className="flex my-3 text-nowrap text-white">
            <div className="bg-orange-400 rounded-sm px-5 py-2 w-full mr-2">View Live Project</div>
            <div className="bg-blue-800 rounded-sm px-5 py-2 w-full">Source Code</div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <iframe
            className="w-full"
            height="360"
            src="https://www.youtube.com/embed/butOAcKCOw0?si=nrHVNNzIQWuDcfDq"
            title="Video demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ maxWidth: "600px" }}
          />
        </div>
      </div>
    </div>
  )
}
