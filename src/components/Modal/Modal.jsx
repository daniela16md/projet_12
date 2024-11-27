import React from 'react';
import './Modal.css'; 

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; 

  const handleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose(); 
    }
  };

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-container">
        <button className="modal-close-btn" onClick={onClose}>X</button>
        {children} 
      </div>
    </div>
  );
};

export default Modal;
