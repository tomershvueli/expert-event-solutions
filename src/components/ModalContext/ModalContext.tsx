import React, { createContext, useState, ReactNode } from "react";

type ModalState = {
  [key: string]: boolean;
};
type ModalContextType = {
  modalState: ModalState;
  openModal: (name: string) => void;
  closeModal: (name: string) => void;
};

export const ModalContext = createContext<ModalContextType | undefined>(
  undefined,
);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modalState, setModalState] = useState<ModalState>({});
  const openModal = (name: string) => {
    setModalState((state) => ({ ...state, [name]: true }));
  };
  const closeModal = (name: string) => {
    setModalState((state) => ({ ...state, [name]: false }));
  };
  return (
    <ModalContext.Provider
      value={{
        modalState,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
