import React, { useState } from "react";


const tools = ['React', 'NodeJS', 'ExpressJS', 'TailWind', 'OpenAI', 'MongoDB', 'Stripe']

export default function Projects() {

  return <div className="pb-16 ml-16 flex-1 justify-center mt-16 ">
    <h1 className="text-center mt-36 text-4xl md:text-5xl">Projects</h1>
    <h2 className="ml-20 mt-20 mb-5 text-xl">Travel Guide</h2>
    {tools.map((toolName)=>{
      return <div key={toolName} className="bg-white inline-block mx-1 px-1 text-black">{toolName}</div>
    })}
    <p className="mt-3">A travel advisor helping you decide where to travel next.</p>
    <div className="bg-white inline-block text-black px-5 py-2 mt-5 mr-3">View Live Project</div>
    <div className="bg-white inline-block text-black px-5 py-2 mt-5">Source Code</div>

  </div>
}
