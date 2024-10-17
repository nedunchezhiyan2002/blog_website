import "./WorkCardStyles.css"
import WordCard from "./WordCard"
import ProjectCardData from "./WorkCardData"

import React from 'react'


const Work = () => {
  return (
    <section className="work-container" id="projects">
        <div className="divider">
          <h2 className="project-heading">Projects</h2>
          <p className="project-subheading">Check out some of my personal projects</p>
        </div>
        
        <div className="project-container"> 
            {ProjectCardData.map((val,ind) => {
                return (
                    <WordCard
                    key = {ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    />
                )
            })}
        </div>
    </section>
  )
}

export default Work