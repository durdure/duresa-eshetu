import styles from './ProjectStyles.module.css'
import viber from "./../../assets/Images/viberr.png"

function Project() {
  return (
    <section id='project' className={styles.projectsContainer}>
      <h1 className="sectionTitle">
        Projects
      </h1>
      <div className={styles.projectContainer}>
        <a href="https://github.com/durdure/movieye.git">
          <img className='hoverImage' src={viber} alt="movieye logo" />
          <h3>Movieye</h3>
          <p>Streaning Web App</p>
        </a>
      </div>
    </section>
  )
}

export default Project