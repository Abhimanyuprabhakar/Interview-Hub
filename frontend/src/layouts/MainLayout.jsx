import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import useTheme from '../hooks/useTheme.js';

function MainLayout() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <Navbar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
