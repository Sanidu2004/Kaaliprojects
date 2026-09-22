import { Link } from 'react-router-dom'
import './ProjectCard.css'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <div className="project-card__image">
        <img src={project.cover} alt={project.name} loading="lazy" />
      </div>
      <div className="project-card__body">
        <span className="project-card__category">{project.category}</span>
        <h3>{project.name}</h3>
        <p>{project.location}</p>
      </div>
    </Link>
  )
}
