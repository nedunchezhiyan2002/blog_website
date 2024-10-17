import "./WorkCardStyles.css"

import React from 'react'
import { NavLink } from "react-router-dom"

const WordCard = (props) => {
  return (
    <div className="work-container">
        <h1 className="project-title">{props.title}</h1>
        <div className="projects"> 
            <div className="project-card">
                <img height="170px" width="275px" src = {props.imgsrc} alt="img" />
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns"> 
                        <NavLink to= {props.view} className= "btn">View</NavLink>
                        <NavLink to= "url.com" className= "btn">Source</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WordCard