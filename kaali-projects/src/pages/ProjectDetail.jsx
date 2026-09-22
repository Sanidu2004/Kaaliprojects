import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects.js'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <section className="section">
        <div className="container">
          <p>Project not found. <Link to="/work">Back to Work</Link></p>
        </div>
      </section>
    )
  }

  return (
    <article className="section">
      <div className="container">
        <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{project.category}</span>
        <h1 style={{ fontSize: 'var(--fs-h1)', marginTop: '0.75rem' }}>{project.name}</h1>
        <p style={{ color: 'var(--color-text-muted)', marginTop: '1rem', maxWidth: 640 }}>
          {project.description}
        </p>
        <img
          src={project.cover}
          alt={project.name}
          style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginTop: '2.5rem' }}
        />
      </div>
    </article>
  )
}
