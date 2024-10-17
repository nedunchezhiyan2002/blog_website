import "./AboutContentStyless.css"
import React from 'react'
import Resume from '../assets/resume.pdf';
import Image from "../assets/photo.jpeg"

const AboutContent = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }
  return (
    <section className="about container section" id="about">
            <div className="about-divider">
                <h2 className="about-heading">About me</h2>
            </div>

            <div className="about__container">
                <div className="img">
                    <img height="250px" width="250px" src={Image} alt="" className='about__img' />
                </div>
                

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                            Hello! I'm Nedunchezhiyan K, and I'm based in Tuticorin, India. I studied at Indian Institute of Technology, Madras, where I completed my bachelors in 2024.<br /><br />
                            Fastforward to today, and I can honestly say it's been a beautiful journery and I hope to grow even further to my goal of being a Software Developer. My current focus these days
                            is on expanding my portfolio by building more projects that I can add on here, as well as being a great team player at my current role.<br /><br />
                            Here are a few technologies I’ve been working with recently:
                        </p>
                        <ul className="about__list">
                            <li>JavaScript (ES6+)</li>
                            <li>React</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Python</li>
                            <li>SQL</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Download CV</button>
                    </div>

                </div>
            </div>

        </section>

  )
}

export default AboutContent
