import { useModal } from "./ModalHook";
import { Modal } from "../Modal/Modal";
interface ModalTriggerArgs {
  name: string;
  children: React.ReactNode;
}

export const ModalTrigger = ({ name, children }: ModalTriggerArgs) => {
  const { openModal } = useModal(name);

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal onClose={() => {}} isOpen={false} name={name}>
        {children}
      </Modal>
    </>
  );
};
