import React, { useState } from 'react';
import './Header.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../comp/Logo_Big.png'; // Import the logo image

const Header = () => {
  const navigate = useNavigate(); // Getting the navigate function
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path); // Navigating to the specified path
    setIsMenuOpen(false); // Close the menu after navigation
  };

  return (
    <header className="header">
      {/* Use an <img> tag with the imported logo */}
      <img src={logo} alt="Scandish Logo" className="logo" />
      <span className="menu-toggle" onClick={toggleMenu}>
        ☰
      </span>
      <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li onClick={() => handleNavigation('/')} style={{ cursor: 'pointer' }}>Hjem</li>
          <li onClick={() => handleNavigation('/Visuell')} style={{ cursor: 'pointer' }}>Visuell Profil</li>
          <li onClick={() => handleNavigation('/Prosjekt')} style={{ cursor: 'pointer' }}>Prosjekt</li>
          <li onClick={() => handleNavigation('/LastNed')} style={{ cursor: 'pointer' }}> Last Ned  </li>
          <li onClick={() => handleNavigation('/Informasjon')} style={{ cursor: 'pointer' }}>Info</li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;
