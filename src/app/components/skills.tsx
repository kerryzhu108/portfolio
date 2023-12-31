import React, { useEffect, useState } from "react";
import Image from "next/image";
import anime from "animejs";

enum Skill{
  Frontend = 'Front End',
  Tools = 'Tools',
  Backend = 'Back End',
}

const skills = {
  [Skill.Frontend]: [
    ['React', '/react.png'],
    ['Redux', '/redux.png'],
    ['Tailwind', '/tailwind.png'],
    ['TypeScript', '/typescript.png'],
    ['HTML', '/html.png'],
    ['CSS', '/css.png'],
    ['JavaScript', '/javascript.png'],
  ],
  [Skill.Tools]: [
    ['Git', '/git.png'],
    ['Circle CI', '/circleci.png'],
    ['Heroku', '/heroku.jpeg'],
    ['AWS', '/aws.png'],
    ['Unleash', '/unleash.png'],
    ['DevTools', '/devtools.png'],
    ['VSCode', '/vscode.png'],
  ],
  [Skill.Backend]: [
    ['NodeJS', '/node.png'],
    ['SQL', '/sql.png'],
    ['MongoDB', '/mongo.png'],
    ['Redis', '/redis.png'],
    ['Docker', '/docker.png'],
    ['Kafka', '/kafka.png'],
    ['Spark', '/spark.jpeg'],

  ]
}

export default function Skills() {
  const [selectedLayer, setSelectedLayer] = useState<Skill | ''>('')
  const burgerSize = 330
  const logoSize = 50
  
  const renderSkills = (stack: Skill | '') => {
    if (!stack) return null
    return <div className="flex flex-wrap justify-center">{
      skills[stack].map((skill)=>{
          return <div key={skill[0]} className="skill opacity-30 mx-4 my-4 text-center items-center flex flex-col">
            <div style={{width: logoSize, height: logoSize}} className="flex items-center mb-1">
              <Image src={skill[1]} alt={skill[0]} width={logoSize} height={logoSize}/>
            </div>
            <p>{skill[0]}</p>
          </div>
      })}
    </div>
  }

  useEffect(()=>{
    anime({
      targets: '.skill',
      translateY: { value: -20, duration: 500 },
      opacity: 1,
      duration: 500,
      easing: 'linear'
    });
  }, [selectedLayer])

  const renderBurgerColor = (layer: Skill | '') => {
    if (layer == '') {
      return '/burgerBlank.png'
    } if (layer == Skill.Frontend) {
      return '/burgerTP.png'
    } else if (layer == Skill.Tools) {
      return '/burgerMid.png'
    }
    return '/burgerBT.png'    
  }

  return <div className="mt-96">
    <h1 className="text-center text-4xl md:text-5xl font-semibold">Skills</h1>
    <div className="pb-16 ml-16 flex justify-center mt-16">
    <div className="inline-block mr-20 relative">
      <div 
        className="absolute" 
        style={{height: burgerSize/3, width: burgerSize}}
        onMouseEnter={()=>{setSelectedLayer(Skill.Frontend)}} 
      />
       <div 
        className="absolute" 
        style={{top: burgerSize/3, height: burgerSize/3, width: burgerSize}}
        onMouseEnter={()=>{setSelectedLayer(Skill.Tools)}} 
      />
       <div 
        className="absolute" 
        style={{top: burgerSize*2/3, height: burgerSize/3, width: burgerSize}}
        onMouseEnter={()=>{setSelectedLayer(Skill.Backend)}} 
      />
      <Image 
        src={renderBurgerColor(selectedLayer)} 
        alt='burger' 
        width={burgerSize} 
        height={burgerSize} 
      />
    </div>
    <div className="w-4/12 ml-28" >
      <h1 className="text-5xl text-center mb-5">{selectedLayer}</h1>
      {selectedLayer == '' && <p className="pl-10 text-xl">
      Select a layer on the burger to view stack skills<br/><br/>
      - Design from Danny Berger<br/><br/>
      
      </p>}
      {renderSkills(selectedLayer)}
    </div>

  </div>
  </div>
}
