import React from 'react'
import styles from "./HeroStyle.module.css"
import myImage from "../../assets/Images/myImage.jpg"
import themeIcon from "../../assets/Images/sun.svg"
import TwitterIcon from "../../assets/Images/twitter-light.svg"
import LinkedInIcon from "../../assets/Images/linkedin-light.svg"
import GithubIcon from "../../assets/Images/github-light.svg"
import resume from "../../assets/Files/Duresa-Eshetu.pdf"

function Hero() {
  return  <section id="hero" className={styles.container}>
   <div className={styles.colorModeContainet}>
      <img
        className={styles.hero} 
        src={myImage}
        alt='Profile picture of Duresa Eshetu'
      />
      <img
        className={styles.colorModeIcon}
        src={themeIcon} alt="Color mode Icon" />
   </div>
   <div className={styles.info}>
      <h1>
        Duresa 
        <br />
        Eshetu
      </h1>
      <h2>Frontend Developer</h2>
     <span>
      <a href="https://twitter.com/" target='_blank'>
      <img src={TwitterIcon} alt="twitter icon" />
      </a>

      <a href="https://linkedin.com/" target='_blank'>
      <img src={LinkedInIcon} alt="linkedin icon" />
      </a>

      <a href="https://github.com/" target='_blank'>
      <img src={GithubIcon} alt="github icon" />
      </a>
     </span>
     <p>
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
  
}

export default Hero