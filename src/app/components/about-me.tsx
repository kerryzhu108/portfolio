"use client"
import Clouds from "./cloud"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { useEffect, useState } from "react"

export default function AboutMe() {
  const [reveal, setReveal] = useState(false)
  const [windowHeight, setWindowHeight] = useState(800)

  useEffect(() => {
    setReveal(true) // Triggers animation after page loads
    setWindowHeight(window.innerHeight - 70)
  }, [])

  return (
    <div style={{ height: windowHeight }} className="flex flex-col justify-center">
      <div className="flex w-full xl:w-1/2 justify-center">
        <div className="flex justify-start">
          <div
            className="flex flex-col overflow-hidden text-nowrap -mt-32"
            style={{
              transition: "width 0.6s ease-in-out",
              width: reveal ? "100%" : "0",
            }}
          >
            <Clouds />
            <div className="text-3xl sm:text-6xl bg-opacity-60 z-20">
              <h1 className="font-semibold" style={{ fontWeight: 500 }}>
                Hi, I&apos;m Kerry Zhu
              </h1>
              <div className="h-3 md:h-5 w-full bg-[#f36925] -mt-4" />
              <div
                className="overflow-hidden"
                style={{
                  transition: "width 1s ease-in-out 1s",
                  width: reveal ? "100%" : "0",
                }}
              >
                <h1 className="text-2xl md:text-4xl">Software Engineer</h1>
                <div className="flex mt-5 text-2xl md:text-3xl">
                  <a href="https://github.com/kerryzhu108/" target="_">
                    {" "}
                    <FontAwesomeIcon icon={faGithub} size="lg" className="mr-4" />
                  </a>
                  <a href="https://www.linkedin.com/in/kerry-zhu-kz/" target="_">
                    {" "}
                    <FontAwesomeIcon icon={faLinkedin} size="lg" className="mr-4" />
                  </a>
                  <a href="mailto:kerrykz.zhu@gmail.com">
                    {" "}
                    <FontAwesomeIcon icon={faEnvelope} size="lg" className="mr-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
