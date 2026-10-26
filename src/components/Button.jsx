import { Link } from 'react-router-dom'

function Button({ children, to, href, variant = 'primary', className = '', onClick, type = 'button', ...props }) {
  const classes = ['button', `button--${variant}`, className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  )
}

export default Button
