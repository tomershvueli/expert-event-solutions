import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Modal } from "./Modal";

export default {
  title: "components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<{ isOpen: boolean }> = ({ isOpen }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  // Effect to sync Storybook control with local state
  React.useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <BrowserRouter>
      <Modal
        name="modal"
        isOpen={modalOpen}
        onClose={() => (setModalOpen(false), console.log(modalOpen))} // Close modal on overlay click
        children={<div></div>}
      ></Modal>
    </BrowserRouter>
  );
};

export const ModalComponent = Template.bind({});

ModalComponent.args = {
  isOpen: false, // Default state is closed
};
