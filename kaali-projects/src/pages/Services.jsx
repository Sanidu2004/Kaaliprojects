import { services } from '../data/services.js'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import ServiceCard from '../components/services/ServiceCard.jsx'

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          title="Services"
          subtitle="What we do, in plain terms — each service links through to more detail."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
