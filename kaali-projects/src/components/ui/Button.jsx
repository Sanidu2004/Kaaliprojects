import './Button.css'

/**
 * Shared button/link component.
 * variant: 'primary' | 'ghost'
 * as: 'a' (external) | 'anchor' (page section) | 'button'
 */
export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  onClick,
  type = 'button',
}) {
  const className = `btn btn--${variant}`

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
