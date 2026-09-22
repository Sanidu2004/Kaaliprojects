import { projects } from '../data/projects.js'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ProjectCard from '../components/projects/ProjectCard.jsx'

export default function Projects() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Our Work"
          subtitle="A selection of projects we've delivered for clients across industries."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
