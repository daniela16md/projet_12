import React, { useState } from 'react';
import './HeaderDM.css';
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
        <div className="pheader-container">
          <p className="pheader">DM</p>
        </div>
      </div>
      
      <nav className={`divhomebuttons ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <Link to="/apropos" onClick={closeMenu} className="nav-link" activeClassName="active">Apropos</Link>
          </li>
          <li>
            <Link to="/#projets" onClick={closeMenu} className="nav-link" activeClassName="active">Projets</Link>
          </li>
          <li>
            <Link to="/#skills" onClick={closeMenu} className="nav-link" activeClassName="active">Skills</Link>
          </li>
          <li>
            <Link to="/#certificats" onClick={closeMenu} className="nav-link" activeClassName="active">Certificats</Link>
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
        <div className="hamburgerline"></div>
      </div>
    </header>
  );
}

export default HeaderDM;
