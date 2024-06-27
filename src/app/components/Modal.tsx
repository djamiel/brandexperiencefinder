// components/Modal.tsx
import React, { ReactNode } from "react";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <img
          className={styles.closeButton}
          onClick={onClose}
          src="/assets/close.svg"
        />
        {children}
        <div className={styles.addButton}>
          <img src="/assets/plus.svg" /> <p>Add to list</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
