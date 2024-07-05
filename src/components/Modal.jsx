import React from 'react';

const Modal = ({ isOpen, onClose, imgSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>&times;</span>
        <img src={imgSrc} alt="Enlarged view" className="modal-image" />
      </div>
    </div>
  );
};

export default Modal;