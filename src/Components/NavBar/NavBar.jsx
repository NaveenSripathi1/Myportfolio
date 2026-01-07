import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Link } from 'react-scroll';

const NavBar = ({ theme, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="NavbarContainer">
      <div className="NavbarLogo">
        <span>M</span>y <span>P</span>ortfolio
      </div>

      <div className={`NavbarLinks ${menuOpen ? 'open' : ''}`}>
        <Link to="home" smooth duration={500} onClick={() => setMenuOpen(false)}>
          Home
        </Link>
        <Link to="skills" smooth duration={500} onClick={() => setMenuOpen(false)}>
          Skills
        </Link>
        <Link to="projects" smooth duration={500} onClick={() => setMenuOpen(false)}>
          Projects
        </Link>
        <Link to="contact" smooth duration={500} onClick={() => setMenuOpen(false)}>
          Contact
        </Link>
      </div>

      <div className="NavbarActions">
        <button className="ThemeBtn" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* HAMBURGER ICON (SVG) */}
        <button className="HamburgerBtn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
