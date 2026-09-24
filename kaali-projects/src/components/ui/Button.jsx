import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Shared button/link component.
 * variant: 'primary' | 'ghost'
 * as: 'link' (internal route) | 'a' (external) | 'anchor' (page section) | 'button'
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  to,
  href,
  onClick,
  type = 'button',
}) {
  const className = `btn btn--${variant}`

  if (as === 'link') {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (as === 'a') {
    return (
      <a href={href} className={className} target="_blank" rel="noreferrer">
        {children}
      </a>
    )
  }

  if (as === 'anchor') {
    return <a href={href} className={className}>{children}</a>
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  )
}
