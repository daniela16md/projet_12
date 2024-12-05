import React from 'react';
import './HeaderDM.css';
import PhotoName from '../../images/PhotoName.webp';
import { Link } from 'react-router-dom'; 
import '../../pages/Home/Home.css'

function HeaderDM() {
  return (
    <header className="headerDM">
      <div className="headerDMleft">
        <img className="logoHeader" src={PhotoName} alt="logo" />
        <div className="pheader-container">
          <p className="pheader">DM</p>
        </div>
      </div>
      <div className="divhomebuttons">
        <Link to="/apropos">
          <button className="homebuttons">Apropos</button>
        </Link>
        <Link to="/#projets">
          <button className="homebuttons">Projets</button>
        </Link>
        <Link to="/#skills">
          <button className="homebuttons">Skills</button>
        </Link>
        <Link to="/#certificats">
          <button className="homebuttons">Certificats</button>
        </Link>
      </div>
    </header>
  );
}

export default HeaderDM;
