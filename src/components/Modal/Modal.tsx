import "./Modal.css";

import React from "react";
import { useModal } from "../ModalContext/ModalHook";
import { ModalOverlay } from "./ModalOverlay";

export interface ModalProps {
  children: React.ReactNode;
  name: string;
}
export const Modal = ({ children, name }: ModalProps) => {
  const { isOpen, closeModal } = useModal(name);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay className="modal__overlay" onClick={closeModal}>
      <dialog className={`modal ${name}`} onClick={(e) => e.stopPropagation()}>
        {children}
      </dialog>
    </ModalOverlay>
  );
};
