import Button from './Button.jsx';

function ThemeToggle({ isDarkMode, onToggle }) {
  return (
    <Button aria-pressed={isDarkMode} onClick={onToggle} variant="secondary">
      {isDarkMode ? 'Light mode' : 'Dark mode'}
    </Button>
  );
}

export default ThemeToggle;
