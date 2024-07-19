import React from 'react'
import viber from "./../assets/Images/viberr.png"


function ProjectCard() {
  return (
    <>
     <a href="https://github.com/durdure/movieye.git">
        <img className='hoverImage' src={viber} alt="movieye logo" />
        <h3>Movieye</h3>
        <p>Streaning Web App</p>
    
      </a>

      <a href="https://github.com/durdure/AASTU_focus">
        <img className='hoverImage' src={viber} alt="movieye logo" />
        <h3>aastuFocus</h3>
        <p>aastu fellowship web app</p>
      </a>
    </>
   

  
  )
}

export default ProjectCard