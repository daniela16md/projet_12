import React, { useState } from 'react';
import certificates from '../../Data/certificats.json'; 
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css';
import Modal from 'react-modal';
import './Certificates.css';

Modal.setAppElement('#root');

function Certificates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentCertificat, setCurrentCertificat] = useState(null);

  const openModal = (certificat) => {
    setCurrentCertificat(certificat);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentCertificat(null);
  };

  return (
    <div className="certificats-container">
      <h2>Mes Certificats</h2>

      <Swiper
        spaceBetween={30} 
        slidesPerView={3} 
        loop={true}
        autoplay={{
          delay: 2000, 
          disableOnInteraction: false,
        }}
        speed={500} 
        breakpoints={{
          100: { slidesPerView: 1 },
          640: { slidesPerView: 1 },  
          768: { slidesPerView: 2 },  
          1024: { slidesPerView: 3 }, 
        }}
      >
        {certificates.certificats.map((certificat) => (
          <SwiperSlide key={certificat.id} onClick={() => openModal(certificat)}>
            <div className="certificat-card">
              <img 
                src={certificat.image} 
                alt={certificat.tittle || 'Certificat'}
                className="certificat-image" 
              />
              {certificat.tittle && <p className="certificat-title">{certificat.tittle}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Certificat Détail"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {currentCertificat && (
          <div className="modal-body">
            <button className="close-modal" onClick={closeModal}>Fermer</button>
            <img 
              src={currentCertificat.image} 
              alt={currentCertificat.tittle || 'Certificat'}
              className="modal-certificat-image" 
            />
            <h3>{currentCertificat.tittle}</h3>
            <p>{currentCertificat.description || 'Certifficat obtenu en cours de formation Openclassrooms.'}</p>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Certificates;
