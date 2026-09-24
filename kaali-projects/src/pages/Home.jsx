import Hero from '../components/sections/Hero.jsx'
import StatsBar from '../components/sections/StatsBar.jsx'
import ValuePropCards from '../components/sections/ValuePropCards.jsx'
import WhyChooseUs from '../components/sections/WhyChooseUs.jsx'
import ServicesShowcase from '../components/sections/ServicesShowcase.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import TrustedBrands from '../components/sections/TrustedBrands.jsx'
import ContactCTA from '../components/sections/ContactCTA.jsx'
import SocialCTA from '../components/sections/SocialCTA.jsx'

export default function Home() {
  return (
    <>
      <div id="home"><Hero /></div>
      <StatsBar />
      <div id="about">
        <ValuePropCards />
        <WhyChooseUs />
      </div>
      <div id="services"><ServicesShowcase /></div>
      <div id="work">
        <Testimonials />
        <TrustedBrands />
      </div>
      <div id="contact"><ContactCTA /></div>
      <SocialCTA />
    </>
  )
}
