import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../components/Modal/Modal'
import PhotoWeb from '../../images/PhotoWeb.webp';
import './Home.css';
import '../../components/Modal/Modal.css';

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="home pagecontent">
      <div className='divhome'>
        <div className='divhomediv'>
          <h1>Bonjour,</h1>
          <p className="typing-animation">
            <span className="line">Je m'appelle Daniela,</span>
            <span className="line">je suis développeuse web</span>
            <span className="line">passionnée par les technologies frontend.</span>
          </p>
        </div>
        <img className="photoweb" src={PhotoWeb} alt="Daniela" />
      </div>

      <div className='divhomebuttons'>
        <button className="homebuttons" onClick={openModal}>À propos de moi</button>

        {/* Modal */}
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className='collapseHome'>
            <p className='homep'>
              Moi, c’est Daniela, développeuse web avec un petit twist : avant de coder, j’étais préparatrice en pharmacie.
              C’est un peu comme passer d’un monde où chaque détail compte à un autre où chaque ligne de code fait la différence.
              J’ai troqué les boîtes de médicaments pour des balises HTML, et les prescriptions de médicaments pour des requêtes
              API… un changement radical, mais un parcours qui m’a appris à résoudre des problèmes avec précision.
            </p>
            <p className='homep'>
              Aujourd’hui, je me spécialise dans HTML, CSS, JavaScript, et bien sûr, React et Redux. Pour moi, chaque projet
              est une nouvelle opportunité de mettre en œuvre mes compétences techniques tout en créant des expériences utilisateurs
              uniques et sans bug (pas de panique, je suis vaccinée contre les erreurs de code !).
            </p>
            <p className='homep'>
              Mon but ? Créer des sites web qui sont aussi efficaces qu’une bonne prescription, mais avec un peu plus de style
              et de fluidité. Je crois en un code propre, simple et accessible, tout comme une bonne explication de votre traitement.
            </p>
            <p className='homep'>
              Si vous cherchez une intégratrice web passionnée, prête à relever des défis et à donner vie à vos projets, 
              <Link to="/contact" className="buttoncontact">contactez-moi</Link> ! Je suis toujours prête à prescrire la solution web qu’il vous faut.
            </p>
          </div>
        </Modal>

     
        <Link to="/projets">
          <button className="homebuttons">Projets</button>
        </Link>

        <Link to="/softskills">
          <button className="homebuttons">Soft skills</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
