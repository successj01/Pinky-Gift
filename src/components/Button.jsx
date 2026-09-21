import { Link } from 'react-router-dom';

const VARIANTS = {
  primary:
    'bg-pink-500 text-white shadow-lg shadow-pink-500/30 hover:bg-pink-600',
  outline:
    'border-2 border-pink-500 text-pink-600 hover:bg-pink-50',
  ghost: 'text-pink-600 hover:bg-pink-50',
};

const SIZES = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-sm',
};

function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  type = 'button',
  className = '',
  onClick,
  disabled = false,
  ...rest
}) {
  const classes = [
    'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200',
    'hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;