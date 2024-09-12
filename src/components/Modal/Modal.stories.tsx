import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "../ModalContext/ModalContext";
import { useModal } from "../ModalContext/ModalHook";
import { Modal } from "./Modal";

export default {
  title: "components/Modal",
  component: Modal,
} as Meta;

interface ModalTriggerArgs {
  name: string;
  children: React.ReactNode;
}

const ModalTrigger = (args: ModalTriggerArgs) => {
  const { openModal } = useModal(args.name);
  React.useEffect(() => {
    openModal();
  });

  return <Modal {...args}></Modal>;
};

const Template: StoryFn = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <ModalTrigger name="modal" children={<div></div>} />
      </ModalProvider>
    </BrowserRouter>
  );
};

export const ModalComponent = Template.bind({});
ModalComponent.args = {
  name: "modal",
  children: <div></div>,
};
