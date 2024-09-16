import { useState, useEffect } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Modal } from "./Modal";
import { useArgs } from "@storybook/client-api";

export default {
  title: "components/Modal",
  component: Modal,
} as Meta;

const Template: StoryFn<{ isOpen: boolean }> = ({ isOpen }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  const [, updateArgs] = useArgs();

  const handleClose = () => updateArgs({ isOpen: !isOpen });

  // Effect to sync Storybook control with local state

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <BrowserRouter>
      <Modal
        name="modal"
        isOpen={modalOpen}
        onClose={() => handleClose()} // Close modal on overlay click
        children={<div></div>}
      ></Modal>
    </BrowserRouter>
  );
};

export const ModalComponent = Template.bind({});

ModalComponent.args = {
  // story book controls
  isOpen: false, // Default state is closed
};
