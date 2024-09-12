import { useModal } from "./ModalHook";
import { Modal } from "../Modal/Modal";
interface ModalTriggerArgs {
  name: string;
  children: React.ReactNode;
}

export const ModalTrigger = ({ name, children }: ModalTriggerArgs) => {
  const { openModal } = useModal(name);

  // Open the modal on button click instead of using useEffect
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal name={name}>{children}</Modal>
    </>
  );
};
