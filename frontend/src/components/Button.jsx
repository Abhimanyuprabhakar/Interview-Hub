const variants = {
  primary:
    'border-transparent bg-[var(--color-primary)] text-[var(--color-bg)] shadow-[var(--shadow-subtle)] hover:brightness-110',
  secondary:
    'border-[var(--color-border-strong)] bg-transparent text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-strong)]',
  ghost:
    'border-transparent bg-transparent text-[var(--color-text-muted)] hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary-strong)]',
};

function Button({
  as: Component = 'button',
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}) {
  const componentProps = Component === 'button' ? { type } : {};

  return (
    <Component
      className={`inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border px-5 py-2.5 text-sm font-semibold outline-none transition focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)] ${variants[variant]} ${className}`}
      {...componentProps}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Button;
