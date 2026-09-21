import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/skills', label: 'Skills' },
  { path: '/services', label: 'Services' },
  { path: '/projects', label: 'Projects' },
];

const linkBase = 'text-sm font-medium transition-colors duration-200';

function getLinkClass({ isActive }) {
  return isActive
    ? `${linkBase} text-pink-500`
    : `${linkBase} text-gray-600 hover:text-pink-500 dark:text-gray-300 dark:hover:text-pink-400`;
}

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="inline-flex items-center justify-center rounded-full p-2 text-gray-600 transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:text-gray-300 dark:hover:bg-slate-800"
    >
      {isDark ? (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        hasScrolled || isOpen
          ? 'border-gray-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90'
          : 'border-transparent bg-white/60 backdrop-blur-sm dark:bg-slate-900/60'
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"
          onClick={closeMenu}
        >
          <span className="text-pink-500">PINKY</span>GIFT
        </Link>

        <div className="hidden items-center space-x-8 md:flex">
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink key={path} to={path} end={path === '/'} className={getLinkClass}>
              {label}
            </NavLink>
          ))}
          <ThemeToggle />
          <Link
            to="/contact"
            className="rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-pink-600"
          >
            Contact Me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-500 dark:text-gray-300 dark:hover:bg-slate-800"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 border-t border-gray-100 dark:border-slate-800' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col space-y-1 px-4 py-3">
          {NAV_LINKS.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              end={path === '/'}
              className={({ isActive }) =>
                `${getLinkClass({ isActive })} rounded-md px-3 py-2 ${
                  isActive ? 'bg-pink-50 dark:bg-slate-800' : ''
                }`
              }
              onClick={closeMenu}
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-pink-500 px-5 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-pink-600"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;