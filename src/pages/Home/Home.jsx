import React, { useState, useEffect } from 'react'; 
import PhotoWeb from '../../images/PhotoWeb.webp';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skllls';
import Parcours from '../../components/Parcours/Parcours';
import Loader from '../../components/Loader/Loader';
import Certificates from '../../components/Certifcats/Certificats';
import './Home.css';
import '../../components/Modal/Modal.css';

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); 
  }, []); 
  useEffect(() => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="home pagecontent">
      {loading && <Loader />} 
      <div className='divhome'>
        <div className='divhomediv'>
          <h1 className='line'>Bonjour,</h1>
          <p className="line">Je m'appelle Daniela,</p>
          <p className="line">je suis développeuse web</p>
          <p className="line">passionnée par les technologies frontend.</p>
        </div>
        <img className="photoweb" src={PhotoWeb} alt="Daniela" />
      </div>
      <div id="projets">
        <Projects />
      </div>
      <div id="skills">
        <Skills />
      </div>

      <Parcours />
      <div id="certificats">
        <Certificates />
      </div>
    </div>
  );
};

export default Home;
