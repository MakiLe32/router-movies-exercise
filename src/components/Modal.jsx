import React from "react";
import classes from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={classes.modaloverlay}>
      <div className={classes.modalcontent}>
        <button className={classes.modalclose} onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;