import ThemeToggle from "./components/theme-toggle"
import "./globals.css"
import Skills from "./components/skills"
import AboutMe from "./components/about-me"
import Projects from "./components/projects"
export default function Home() {
  return (
    <div className="flex-1 h-full overflow-x-hidden relative">
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  )
}
