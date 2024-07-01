import styles from './ProjectStyles.module.css'

import ProjectCard from '../../common/ProjectCard'

function Project() {
  return (
    <section id='project' className={styles.projectsContainer}>
      <h1 className="sectionTitle">
        Projects
      </h1>
      <div className={styles.projectContainer}>
        <ProjectCard/>
      </div>
    </section>
  )
}

export default Project