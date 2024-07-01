import React from 'react'
import styles from "./SkillStyle.module.css"
import checkMarkIcon from "./../../assets/Images/checkmark-light.svg"

function Skill() {
  return (
    <section id='skills' className={styles.skillContainer}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
            <span>
                <img src={checkMarkIcon} alt="check mark" />
                <p>HTML</p>
            </span>
        </div>
    </section>
  )
}

export default Skill