import { useEffect } from "react";
import { Modal } from "../Modal/Modal";
import { useModal } from "./ModalHook";
interface ModalTriggerArgs {
  name: string;
  children: React.ReactNode;
}

export const ModalTrigger = (args: ModalTriggerArgs) => {
  const { openModal } = useModal(args.name);
  useEffect(() => {
    openModal();
  });

  return <Modal {...args}></Modal>;
};
