import { useState } from 'react';
import Button from './Button.jsx';
import ThemeToggle from './ThemeToggle.jsx';

const navigationLinks = ['Explore', 'Companies', 'Community', 'Resources', 'About'];

function SearchIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d="m21 21-4.35-4.35m1.35-5.4a6.75 6.75 0 1 1-13.5 0 6.75 6.75 0 0 1 13.5 0Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function MenuIcon({ isOpen }) {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      {isOpen ? (
        <path
          d="m6 6 12 12M18 6 6 18"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      ) : (
        <path
          d="M4 7h16M4 12h16M4 17h16"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      )}
    </svg>
  );
}

function Logo() {
  return (
    <a
      className="inline-flex items-center text-xl font-black tracking-tight text-[var(--color-text)] outline-none transition hover:text-[var(--color-primary-strong)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
      href="/"
    >
      Interview
      <span className="ml-0.5 rounded-md bg-[var(--color-accent)] px-1 text-[#09110d]">Hub</span>
    </a>
  );
}

function NavLinks({ className = '', onNavigate }) {
  return (
    <nav aria-label="Main navigation" className={className}>
      {navigationLinks.map((link) => (
        <a
          className="rounded-[var(--radius-sm)] px-3 py-2 text-sm font-semibold text-[var(--color-text-muted)] outline-none transition hover:bg-[var(--color-primary-soft)] hover:text-[var(--color-primary-strong)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
          href={`#${link.toLowerCase()}`}
          key={link}
          onClick={onNavigate}
        >
          {link}
        </a>
      ))}
    </nav>
  );
}

function SearchButton() {
  return (
    <button
      aria-label="Search"
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] shadow-[var(--shadow-subtle)] outline-none transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary-strong)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
      type="button"
    >
      <SearchIcon />
    </button>
  );
}

function Navbar({ isDarkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_90%,transparent)] shadow-[0_1px_0_rgb(255_255_255_/_0.03),0_18px_42px_rgb(0_0_0_/_0.16)] backdrop-blur">
      <div className="mx-auto flex min-h-20 w-full max-w-[var(--container-width)] items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />

        <NavLinks className="hidden items-center gap-1 lg:flex" />

        <div className="hidden items-center gap-3 md:flex">
          <SearchButton />
          <a
            className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] outline-none transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary-strong)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
            href="#login"
          >
            Log in
          </a>
          <Button as="a" href="#share-experience">
            Share experience
          </Button>
          <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)] outline-none transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary-strong)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)] md:hidden"
          onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          type="button"
        >
          <MenuIcon isOpen={isMenuOpen} />
        </button>
      </div>

      {isMenuOpen && (
        <div
          className="border-t border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-5 shadow-[var(--shadow-soft)] md:hidden"
          id="mobile-navigation"
        >
          <NavLinks className="grid gap-1" onNavigate={closeMenu} />
          <div className="mt-5 grid gap-3">
            <button
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] outline-none transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary-strong)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
              type="button"
            >
              <SearchIcon />
              Search
            </button>
            <a
              className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-strong)] px-5 py-2.5 text-sm font-semibold text-[var(--color-text)] outline-none transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary-strong)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
              href="#login"
              onClick={closeMenu}
            >
              Log in
            </a>
            <Button as="a" href="#share-experience" onClick={closeMenu}>
              Share experience
            </Button>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} />
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
