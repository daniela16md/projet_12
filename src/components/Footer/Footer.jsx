import React from 'react';
import { FaGithub, FaEnvelope } from 'react-icons/fa'; 
import './Footer.css';  

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        &copy; {new Date().getFullYear()} Daniela Mattl. All rights reserved.
      </div>
      <div className="social-links">
          <a href="https://github.com/daniela16md?tab=repositories" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="social-icon" />
          </a>
          
          <a href="mailto:danamattl@yahoo.com">
            <FaEnvelope size={30} className="social-icon" />
          </a>
        </div>
    </footer>
  );
};

export default Footer;