"use client"
import React from "react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme == "dark" ? "light" : "dark")
  }

  return (
    <button className="flex float-end mr-8 p-3 items-center" onClick={handleClick}>
      <div className={`rounded-xl w-5 h-5 align-middle mr-2 ${theme == "light" ? "bg-black" : "bg-white"}`} />
      <p>Toggle Light Mode</p>
    </button>
  )
}
