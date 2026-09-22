import { useState } from 'react'
import { brands } from '../../data/brands.js'
import './TrustedBrands.css'

export default function TrustedBrands() {
  return (
    <section className="trusted-brands section">
      <div className="container">
        <div className="trusted-brands__intro">
          <span className="trusted-brands__eyebrow">Selected collaborations</span>
          <h2 className="trusted-brands__heading">Trusted by Leading Brands</h2>
          <p>Ideas built to move ambitious brands forward.</p>
        </div>

        <div className="trusted-brands__grid">
          {brands.map((brand) => (
            <div key={brand.name} className="trusted-brands__item">
              <BrandLogo brand={brand} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BrandLogo({ brand }) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <span className="trusted-brands__fallback">{brand.name}</span>
  }

  return (
    <img
      src={brand.logo}
      alt={brand.name}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  )
}
