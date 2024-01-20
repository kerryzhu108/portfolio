import Project from "./project"

export default function Projects() {
  return (
    <div className="light pt-36">
      <h1 className="text-center font-semibold text-4xl md:text-5xl mb-20">Projects</h1>
      <Project
        title="Next Vacation"
        logo="/travelWhere.png"
        tools={["NextJS", "TypeScript", "Tailwind", "MongoDB", "OpenAI", "Google Auth", "Stripe"]}
        descroption={
          "An AI based travel advisor that helps users plan their next vacation. \n\n" +
          "It can generate a curated list of recommendations based on preferences submitted in a short questionnaire."
        }
        website={"https://my-next-vacation.vercel.app/"}
        sourceCode={"https://github.com/kerryzhu108/travel-where"}
        video={"https://www.youtube.com/embed/_k1U4kvbaMk?si=5Zpv5soBgOjX1mta"}
      />
      <Project
        title="Klear"
        logo="/klear.png"
        tools={["React Native", "TypeScript", "Node", "Express", "MySQL", "Python", "Open CV"]}
        descroption={
          "A mobile app that helps daycare works better monitor their kids using computer vision. \n\n" +
          "Led a group of 3 business and 4 computer science students as part of a Capstone Design Project."
        }
        sourceCode={"https://github.com/kerryzhu108/Klear"}
        video={"https://www.youtube.com/embed/51fuRhXCC8c?si=PEPNOfy37c3lX6uj"}
      />
      <Project
        title="Blocky"
        logo="/blocky.png"
        tools={[
          "Python",
          "Pygame",
          "Linked Lists",
          "Divide and Conqer",
          "Greedy algorithm",
          "Dijkstra's algorithm",
          "Tree traversal",
        ]}
        descroption={
          "Blocky is a grid-based strategy game where the player competes with an AI for objective points. " +
          "This project was for a school assignment with the graphics and rendering already provided. \n\n" +
          "I implemented the data structures and recursive algorithms necessary to manipualte the grid and for " +
          "the AI to find the best move.\n\nHappy to share source code on request"
        }
        video={"https://www.youtube.com/embed/n3I3gV9d2J4?si=XC2YAmNmyLp0Rodn"}
      />
    </div>
  )
}
