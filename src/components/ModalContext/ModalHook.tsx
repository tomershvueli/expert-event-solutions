import { useContext } from "react";
import { ModalContext } from "../ModalContext/ModalContext";

export const useModal = (name: string) => {
  const modalContext = useContext(ModalContext);

  if (!modalContext) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  const { modalState, openModal, closeModal } = modalContext;

  const isOpen = modalState[name] || false;

  return {
    isOpen,
    openModal: () => openModal(name),
    closeModal: () => closeModal(name),
  };
};
