import { useState } from 'react'
import { brands } from '../../data/brands.js'
import './TrustedBrands.css'

const firstRowBrands = brands.slice(0, Math.ceil(brands.length / 2))
const secondRowBrands = brands.slice(Math.ceil(brands.length / 2))

export default function TrustedBrands() {
  return (
    <section className="trusted-brands section">
      <div className="container">
        <div className="trusted-brands__intro">
          <span className="trusted-brands__eyebrow">Selected collaborations</span>
          <h2 className="trusted-brands__heading">Trusted by Leading Brands</h2>
          <p>Ideas built to move ambitious brands forward.</p>
        </div>

        <div className="trusted-brands__marquees" aria-label="Trusted clients">
          <div className="trusted-brands__window">
            <div className="trusted-brands__track trusted-brands__track--forward">
              <BrandSet brands={firstRowBrands} />
              <BrandSet brands={firstRowBrands} aria-hidden="true" />
            </div>
          </div>
          <div className="trusted-brands__window">
            <div className="trusted-brands__track trusted-brands__track--reverse">
              <BrandSet brands={secondRowBrands} />
              <BrandSet brands={secondRowBrands} aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandSet({ brands: rowBrands, 'aria-hidden': ariaHidden }) {
  return (
    <div className="trusted-brands__set" aria-hidden={ariaHidden}>
      {rowBrands.map((brand, index) => (
        <div key={`${brand.name}-${index}`} className="trusted-brands__item">
          <BrandLogo brand={brand} />
        </div>
      ))}
    </div>
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
