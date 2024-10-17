import "./NavBarStyles.css"

import React, { useState } from 'react'
import {Link} from "react-router-dom"
import "./NavBarStyles.css"

import {FaBars,FaTimes,FaArrowRight} from "react-icons/fa";

const Navbar = () => {

    const  [click,setClick]= useState(false)
    const handleClick = () => setClick(!click);

    const [color,setColor] = useState(false)
    const changeColor = () =>{
        if (window.scrollY>=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll",changeColor)

  return (
    <div className={color? "header header-bg":"header" }>
        <Link to = "/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click?"nav-menu active":"nav-menu"}>
            <li><a href = "#about">About</a>
                </li>
            <li><a href = "#projects">Projects</a>
                </li>
            <li><a href = "#footer">Contact</a>
                </li>
            <li>
              <a
                class="nav-link btn btn-primary"
                href="https://drive.google.com/file/d/19145W3i6wD4pVlZEX6bNHDEenY62KOSt/view?usp=drive_link"
                >RESUME <FaArrowRight/></a>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <FaTimes size={20} style = {{color:"white"}}/> 
            ) : (
            <FaBars size={20} style = {{color:"white"}}/>)}
        </div>
    </div>

  )
}

export default Navbar
