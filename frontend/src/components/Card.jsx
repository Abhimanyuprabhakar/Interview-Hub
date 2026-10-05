function Card({ children, className = '' }) {
  return (
    <article
      className={`rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-soft)] ${className}`}
    >
      {children}
    </article>
  );
}

export default Card;
