import React, { useState, useEffect } from "react";
import { ModalOverlay } from "./ModalOverlay";

export interface ModalProps {
  children: React.ReactNode;
  name: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, name, isOpen, onClose }: ModalProps) => {
  const [isVisible, setIsVisible] = useState(isOpen); // Track when the modal should be visible

  useEffect(() => {
    if (isOpen) {
      // When isOpen changes to true, make the modal visible
      setIsVisible(true);
    } else {
      // When isOpen changes to false, wait for the closing animation, then hide the modal
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 700); // Match with your closing animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible) {
    return null; // If not visible, don't render the modal
  }

  return (
    <ModalOverlay
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <dialog
        className={`flex flex-col w-[467px] h-[582px] p-[28px] gap-[7.47px] rounded-[40px] bg-wheat ${
          isOpen ? "animate-slide-up" : "animate-slide-down"
        } ${name}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </dialog>
    </ModalOverlay>
  );
};
