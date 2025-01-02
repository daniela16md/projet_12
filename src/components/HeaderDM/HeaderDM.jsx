import React, { useState } from 'react';
import './HeaderDM.css';
import PhotoName from '../../images/PhotoName.webp';
import { Link } from 'react-router-dom'; 
import '../../pages/HomePage/Home.css'

function HeaderDM() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="headerDM">
      <div className="headerDMleft">
        <img className="logoHeader" src={PhotoName} alt="logo" />
        <div className="pheader-container">
          <p className="pheader">DM</p>
        </div>
      </div>
      
      <div className={`divhomebuttons ${menuOpen ? 'open' : ''}`}>
        <Link to="/apropos" onClick={closeMenu}>
          <button className="homebuttons">Apropos</button>
        </Link>
        <Link to="/#projets" onClick={closeMenu}>
          <button className="homebuttons">Projets</button>
        </Link>
        <Link to="/#skills" onClick={closeMenu}>
          <button className="homebuttons">Skills</button>
        </Link>
        <Link to="/#certificats" onClick={closeMenu}>
          <button className="homebuttons">Certificats</button>
        </Link>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
      </div>
    </header>
  );
}

export default HeaderDM;
