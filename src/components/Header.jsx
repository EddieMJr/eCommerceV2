import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLogo from '/wuardoDecalBlanco.png';
import '../pages/shared.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="headLogo__a" onClick={closeMenu}>
          <img src={MainLogo} alt="Personal Logo" id="eddLogo__nav" />
        </Link>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <li className="nav__li">
            <Link to="/" className="nav__a" onClick={closeMenu}>Home!</Link>
          </li>
          <li className="nav__li">
            <Link to="/shop" className="nav__a" onClick={closeMenu}>Shop!</Link>
          </li>
          <li className="nav__li">
            <Link to="/contact" className="nav__a" onClick={closeMenu}>Contact!</Link>
          </li>
        </ul>

        <div
          className={`burger ${menuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
