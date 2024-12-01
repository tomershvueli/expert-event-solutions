import { useModal } from "./ModalHook";
import { Modal } from "../Modal/Modal";

interface ModalTriggerArgs {
  name: string;
  children: React.ReactNode;
}

export const ModalTrigger = ({ name, children }: ModalTriggerArgs) => {
  const { isOpen, openModal, closeModal } = useModal(name); // Get modal state and actions

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={closeModal} name={name}>
        {children}
      </Modal>
    </>
  );
};
