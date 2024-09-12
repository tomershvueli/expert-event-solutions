import React from "react";
import { useModal } from "../ModalContext/ModalHook";
import { ModalOverlay } from "./ModalOverlay";

export interface ModalProps {
  children: React.ReactNode;
  name: string;
}

export const Modal = ({ children, name }: ModalProps) => {
  const { isOpen, closeModal } = useModal(name);

  // Return null if the modal isn't open
  if (!isOpen) {
    return null;
  }

  // Close the modal when clicking on the overlay, not the modal content
  return (
    <ModalOverlay
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={closeModal} // Close modal when overlay is clicked
    >
      <dialog
        className={`flex flex-col w-[467px] h-[582px] p-[28px] gap-[7.47px] rounded-[40px] bg-wheat animate-slide-up ${name}`}
        onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the dialog
      >
        {children}
      </dialog>
    </ModalOverlay>
  );
};
