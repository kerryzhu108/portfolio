import ThemeToggle from "./components/theme-toggle"
import "./globals.css"
import Skills from "./components/skills"
import Projects from "./components/projects"
import AboutMe from "./components/about-me"

export default function Home() {
  return (
    <div className="flex-1 h-full overflow-hidden relative">
      <ThemeToggle />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}
