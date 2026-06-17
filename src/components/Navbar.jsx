import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Soundly
        </Link>

        {/* Desktop Menu */}
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/kesfet" className="nav-links">
              Keşfet
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hakkimizda" className="nav-links">
              Hakkımızda
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/giris-yap" className="nav-links nav-links-btn">
              Giriş Yap
            </Link>
          </li>
        </ul>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <X size={28} color="#fff" />
          ) : (
            <Menu size={28} color="#fff" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="nav-menu-mobile">
          <li className="nav-item-mobile">
            <Link to="/kesfet" className="nav-links-mobile" onClick={closeMenu}>
              Keşfet
            </Link>
          </li>
          <li className="nav-item-mobile">
            <Link to="/profilim" className="nav-links-mobile" onClick={closeMenu}>
              Profilim
            </Link>
          </li>
          <li className="nav-item-mobile">
            <Link to="/hakkimizda" className="nav-links-mobile" onClick={closeMenu}>
              Hakkımızda
            </Link>
          </li>
          <li className="nav-item-mobile">
            <Link
              to="/giris-yap"
              className="nav-links-mobile nav-links-mobile-btn"
              onClick={closeMenu}
            >
              Giriş Yap
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}