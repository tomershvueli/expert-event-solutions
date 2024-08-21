import "./Modal.css";

import React from "react";
import { useModal } from "../ModalContext/ModalHook";

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
    <div className="modal__overlay" onClick={closeModal}>
      <dialog className={`modal ${name}`}>{children}</dialog>
    </div>
  );
};
