import React, { useState, useEffect, useRef } from "react";
import { ModalOverlay } from "./ModalOverlay";

export interface ModalProps {
  children: React.ReactNode;
  name: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, name, isOpen, onClose }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false); // Track if the animation is running
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Handle the animation end to control when to hide the modal
  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false); // Stop rendering the modal after the animation finishes
    }
  };

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true); // Start the animation when modal opens
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose?.(); // Call onClose if Escape key is pressed and modal is open
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  // Handle keyboard events

  return (
    <ModalOverlay
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen || isAnimating ? "visible" : "invisible"
      }`} // Keep it visible if open or animating
      onClick={onClose}
    >
      <dialog
        ref={dialogRef}
        className={`flex flex-col w-[467px] h-[582px] p-[28px] gap-[7.47px] rounded-[40px] bg-wheat ${
          isOpen ? "animate-slide-up" : "animate-slide-down"
        } ${name}`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd} // Hide after animation ends
      >
        {children}
      </dialog>
    </ModalOverlay>
  );
};
