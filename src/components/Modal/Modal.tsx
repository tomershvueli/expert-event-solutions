import React from "react";
import { ModalOverlay } from "./ModalOverlay";

export interface ModalProps {
  children: React.ReactNode;
  name: string;
  isOpen: boolean; // Added prop
  onClose?: () => void; // Added prop
}

// const onClose = () => {
//   return { isOpen: false };
// };

export const Modal = ({ children, name, isOpen, onClose }: ModalProps) => {
  // Early return if the modal isn't open
  if (!isOpen) {
    return null;
  }

  return (
    <ModalOverlay
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose} // Close modal when overlay is clicked
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
