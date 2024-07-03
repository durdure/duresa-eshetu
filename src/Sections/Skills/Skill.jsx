import React from 'react'
import styles from "./SkillStyle.module.css"
import checkMarkIconDark from "./../../assets/Images/checkmark-dark.svg"
import checkMarkIconLight from "./../../assets/Images/checkmark-light.svg"
import { useTheme } from '../../common/ThemeContext'
import SkillList from "./../../common/SkillList"


function Skill() {
  const {theme} = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark

  return (
    <section id='skills' className={styles.skillsContainer}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML"/>
          <SkillList src={checkMarkIcon} skill="CSS"/>
          <SkillList src={checkMarkIcon} skill="JavaScript"/>
          <SkillList src={checkMarkIcon} skill="TypeScript"/>
          <SkillList src={checkMarkIcon} skill="Node"/>
        </div>

        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML"/>
          <SkillList src={checkMarkIcon} skill="CSS"/>
          <SkillList src={checkMarkIcon} skill="JavaScript"/>
          <SkillList src={checkMarkIcon} skill="TypeScript"/>
          <SkillList src={checkMarkIcon} skill="Node"/>
        </div>

        <hr />

        <div className={styles.skillList}>
          <SkillList src={checkMarkIcon} skill="HTML"/>
          <SkillList src={checkMarkIcon} skill="CSS"/>
          <SkillList src={checkMarkIcon} skill="JavaScript"/>
          <SkillList src={checkMarkIcon} skill="TypeScript"/>
          <SkillList src={checkMarkIcon} skill="Node"/>
        </div>
    </section>
  )
}

export default Skill