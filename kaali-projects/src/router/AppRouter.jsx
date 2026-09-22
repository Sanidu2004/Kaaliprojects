import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Services from '../pages/Services.jsx'
import Projects from '../pages/Projects.jsx'
import ProjectDetail from '../pages/ProjectDetail.jsx'
import Contact from '../pages/Contact.jsx'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Projects />} />
      <Route path="/work/:slug" element={<ProjectDetail />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
