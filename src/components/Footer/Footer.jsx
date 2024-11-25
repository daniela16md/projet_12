import React from 'react';
import Meteo from '../Meteo /Meteo';
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        &copy; {new Date().getFullYear()} Daniela Mattl. All rights reserved.
      </div>
      <div className="footer-meteo">
        <Meteo />
      </div>
    </footer>
  );
};

export default Footer;