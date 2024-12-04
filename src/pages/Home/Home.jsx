import React from 'react';
import PhotoWeb from '../../images/PhotoWeb.webp';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skllls';
import Parcours from '../../components/Parcours/Parcours';
import './Home.css';
import '../../components/Modal/Modal.css';

const Home = () => {
  

  return (
    <div className="home pagecontent">
      
      <div className='divhome'>
        <div className='divhomediv'>
          <h1 className='line'>Bonjour,</h1>
         
            <p className="line">Je m'appelle Daniela,</p>
            <p className="line">je suis développeuse web</p>
            <p className="line">passionnée par les technologies frontend.</p>
        
        </div>
        <img className="photoweb" src={PhotoWeb} alt="Daniela" />
      </div>
      <Projects />
      <Skills />
      <Parcours />

      
    </div>
  );
};

export default Home;
