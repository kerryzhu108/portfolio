import Image from "next/image"
import React, { useState } from "react"

export default function Project({
  title,
  logo,
  tools,
  descroption,
  website,
  sourceCode,
  video,
}: {
  title: string
  logo: string
  tools: string[]
  descroption: string
  website?: string
  sourceCode?: string
  video: string
}) {
  return (
    <div className="flex-1 justify-center mt-32 px-10 md:px-32 pb-16">
      <div className="md:flex justify-center">
        <div className="flex flex-1 items-center justify-center bg-gray-300s">
          <div className="max-w-[400px]">
            <div className="flex items-center">
              <Image src={logo} alt={"Travel Where"} width={20} height={20} className="w-9" />
              <h2 className="text-3xl md:text-5xl ml-2">{title}</h2>
            </div>
            <div className="flex flex-wrap mt-2">
              {tools.map((toolName) => {
                return (
                  <div key={toolName} className="bg-blue-950 rounded-sm mr-2 my-2 px-3 py-1 text-white text-nowrap">
                    {toolName}
                  </div>
                )
              })}
            </div>
            <div className="mt-3 text-xl whitespace-pre-wrap">{descroption}</div>
            <div className="flex my-4 text-nowrap text-white font-semibold">
              {website && (
                <a href={website} target="_" className={`bg-teal-600 rounded-sm px-5 py-3 w-full mr-2 text-center`}>
                  Visit Wesbite
                </a>
              )}
              {sourceCode && (
                <a href={sourceCode} target="_" className={`bg-[#f36925] rounded-sm px-5 py-3 w-full text-center`}>
                  Source Code
                </a>
              )}
            </div>
          </div>
        </div>
        <iframe
          className="w-full flex-1 border border-black"
          height="360"
          src={video}
          title="Video demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ maxWidth: "620px" }}
        />
      </div>
    </div>
  )
}
