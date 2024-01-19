"use client"
import Clouds from "./cloud"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope"
import { useEffect, useState } from "react"

export default function AboutMe() {
  const [reveal, setReveal] = useState(false)

  useEffect(() => {
    // Trigger the reveal after the component is mounted
    setReveal(true)
  }, [])
  return (
    <div className="w-full sm:w-1/2 flex justify-center mt-48">
      <div className="flex justify-start">
        <div
          className="flex flex-col items-start overflow-hidden text-nowrap"
          style={{
            transition: "width 0.6s ease-in-out",
            width: reveal ? "100%" : "0",
          }}
        >
          <Clouds />
          <div className="text-3xl md:text-4xl bg-opacity-60">
            <h1 className="font-semibold">Hi, I&apos;m Kerry</h1>
            <div
              className="overflow-hidden"
              style={{
                transition: "height 1s ease-in-out 0.7s",
                height: reveal ? "100%" : "0",
              }}
            >
              <h1 className="text-3xl">Full stack developer</h1>
              <div className="flex mt-5">
                <a href="https://github.com/kerryzhu108/">
                  {" "}
                  <FontAwesomeIcon icon={faGithub} size="lg" className="mr-4" />
                </a>
                <a href="https://www.linkedin.com/in/kerry-zhu-kz/">
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
  )
}
