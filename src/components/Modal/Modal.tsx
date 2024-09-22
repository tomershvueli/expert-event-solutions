import React, { useState, useEffect, useRef } from "react";
import { ModalOverlay } from "./ModalOverlay";

export interface ModalProps {
  children: React.ReactNode;
  name: string;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal = ({ children, name, isOpen, onClose }: ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleAnimationEnd = () => {
    if (!isOpen) {
      setIsAnimating(false);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <ModalOverlay
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen || isAnimating ? "visible" : "invisible"
      }`}
      onClick={onClose}
    >
      <dialog
        ref={dialogRef}
        className={`flex flex-col w-full max-w-[467px] h-auto max-h-[90vh] p-[28px] gap-[7.47px] rounded-[40px] bg-wheat ${
          isOpen ? "animate-slide-up" : "animate-slide-down"
        } ${name} overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
        onAnimationEnd={handleAnimationEnd}
      >
        {children}
      </dialog>
    </ModalOverlay>
  );
};
