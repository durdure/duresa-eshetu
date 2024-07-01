import React from 'react'
import styles from "./HeroStyle.module.css"
import myImage from "../../assets/Images/myImage.jpg" 
import moon from "../../assets/Images/moon.svg"
import sun from '../../assets/Images/sun.svg'
import twitterLight from "../../assets/Images/twitter-light.svg"
import twitterDark from "../../assets/Images/twitter-dark.svg"
import githubLight from "../../assets/Images/github-light.svg"
import githubDark from "../../assets/Images/github-dark.svg"
import linkedinLight from "../../assets/Images/linkedin-light.svg"
import linkedinDark from "../../assets/Images/linkedin-dark.svg"

import resume from "../../assets/Files/Duresa-Eshetu.pdf"

import { useTheme } from "../../common/ThemeContext"


function Hero() {
  const { theme, toggleTheme } = useTheme()

  const themeIcon = theme === "light" ? moon : sun
  const twitterIcon = theme === "light" ? twitterLight : twitterDark
  const githubIcon = theme === "light" ? githubLight : githubDark
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark
 


  return (
  <section id="hero" className={styles.container}>
   <div className={styles.colorModeContainer}>
      <img
        className={styles.hero} 
        src={myImage}
        alt='Profile picture of Duresa Eshetu'
      />
      <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
      />
   </div>

   <div className={styles.info}>
      <h1>
        Duresa 
        <br />
        Eshetu
      </h1>
      <h2>Frontend Developer</h2>
      <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
     <p className={styles.description }>
      I am a Frontend Developer based in Addis Ababa, Ethiopia. 
      I specialize in building websites and web applications using modern technologies.
     </p>
      <a href={resume} download>
        <button className='hover'>
          Resume 
        </button>
      </a>
   </div>
  </section>
  )
}

export default Hero