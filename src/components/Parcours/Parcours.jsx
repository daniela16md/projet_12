import React, { useState } from 'react';
import diplomes from '../../Data/diplome.json';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Parcours.css'; 

function Parcours() {
    const [currentIndex, setCurrentIndex] = useState(0); 
    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? diplomes.diplomes.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === diplomes.diplomes.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const diplome = diplomes.diplomes[currentIndex]; 
  
    return (
      <div className="carrousel-container">
        <h2>Mon Parcours de Diplômes</h2>
  
        <div className="carrousel">
          <div className="arrow left" onClick={handlePrev}>
            <FaArrowLeft size={30} />
          </div>
  
          <div className="carrousel-item">
            <h3>{diplome.name}</h3>
            <p><strong>Année :</strong> {diplome.year}</p>
          </div>
  
          <div className="arrow right" onClick={handleNext}>
            <FaArrowRight size={30} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Parcours;