import SectionHeading from '../components/ui/SectionHeading.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import TrustedBrands from '../components/sections/TrustedBrands.jsx'

export default function About() {
  return (
    <>
      <section className="section">
        <div className="container">
          <SectionHeading
            title={<>Who <span className="gradient-text">We</span> Are</>}
            subtitle="A short, honest introduction to who we are and how we work — replace with the company's real story."
          />
        </div>
      </section>
      <WhyChooseUs />
      <TrustedBrands />
    </>
  )
}
