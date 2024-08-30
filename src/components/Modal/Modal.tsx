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
    <ModalOverlay
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <dialog
        className={`flex flex-col w-[467px] h-[582px] p-[28px] gap-[7.47px] rounded-[40px] bg-wheat animate-slide-up ${name}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </ModalOverlay>
  );
};
