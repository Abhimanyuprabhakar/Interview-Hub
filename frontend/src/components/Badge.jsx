const variants = {
  neutral: 'border-[var(--color-border)] bg-[var(--color-bg-soft)] text-[var(--color-text-muted)]',
  primary: 'border-transparent bg-[var(--color-primary-soft)] text-[var(--color-primary-strong)]',
  accent: 'border-transparent bg-[var(--color-accent-soft)] text-[var(--color-text)]',
};

function Badge({ children, className = '', variant = 'neutral' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;
