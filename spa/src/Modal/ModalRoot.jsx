import React from 'react';
import { createPortal } from 'react-dom';
import './styles.css';

export const ModalRoot = ({ isOpened, onClose, children }) => {
  if (!isOpened) {
    return null;
  }

  return createPortal(
    <div className='modal-wrapper'>
      <div className='modal__overlay' onClick={onClose}></div>
      <div className='modal__container'>
        {children}
      </div>
    </div>,
    document.getElementById('modal')
  );
};
