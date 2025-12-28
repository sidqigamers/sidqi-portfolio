import ProjectCard from './ProjectCard'

import bookifyImg from '../assets/bookify/Home.jpeg'
import finwiseImg from '../assets/finwise/Home.jpg'
import sodikImg from '../assets/sodik/Home.png'
import bomberquest from '../assets/BomberQuest/BomberQuest.png'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-grid">
        <ProjectCard
          title="Bookify"
          description="Android book catalog application with Firebase Authentication, Firestore, and image upload."
          tech="Android (Kotlin), Firebase"
          image={bookifyImg}
        />

        <ProjectCard
          title="Finwise"
          description="Mobile application for personal finance and money management."
          tech="Android, Supabase"
          image={finwiseImg}
        />

        <ProjectCard
          title="SODIK JALAN-JALAN"
          description="Travel planning website built using ReactJS and public API."
          tech="ReactJS, Public API"
          image={sodikImg}
        />

        <ProjectCard
          title="Bomber Quest"
          description="A Bomberman-like game, 2 local player support"
          tech="ReactJS, Public API"
          image={bomberquest}
        />
      </div>
    </section>
  )
}

export default Projects
