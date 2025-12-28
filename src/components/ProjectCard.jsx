import { motion } from 'framer-motion'

function ProjectCard({ title, description, tech, image }) {
  return (
    <motion.div
      className="project-card"
      whileHover={{ scale: 1.04 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <small>{tech}</small>
    </motion.div>
  )
}

export default ProjectCard
