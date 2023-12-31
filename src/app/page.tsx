'use client'
import Clouds from "./components/cloud";
import ThemeToggle from "./components/theme-toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'
import { useTheme } from 'next-themes'
import './globals.css'
import { oppositeTheme } from "./utils/themeToggle";
import Image from "next/image";
import { useState } from "react";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {

  const { theme } = useTheme()

  return (
    <div className="flex-1 h-full overflow-hidden mb-20">
      <ThemeToggle/>
      <div className="ml-6 md:ml-12"> 
        <Clouds/>
        <h1 className="text-3xl mt-48 font-semibold md:text-6xl">Hi, I&apos;m Kerry</h1>
        <h1 className="text-2xl">Full stack developer</h1>
        <div className="flex mt-5">
          <a href="https://github.com/kerryzhu108/"> <FontAwesomeIcon icon={faGithub} size='2xl' className="mr-4"/></a>          
          <a href="https://www.linkedin.com/in/kerry-zhu-kz/"> <FontAwesomeIcon icon={faLinkedin} size='2xl' className="mr-4"/></a>
          <a href="mailto:kerrykz.zhu@gmail.com"> <FontAwesomeIcon icon={faEnvelope} size='2xl' className="mr-4"/></a>
        </div>
      </div>
      <Skills/>
      <Projects/>
      
    </div>
  )
}
