import { useState, useEffect, useCallback } from "react";
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

  const handleClose = useCallback(
    () => updateArgs({ isOpen: false }),
    [updateArgs],
  );

  const handleOpen = () => updateArgs({ isOpen: true });

  // Effect to sync Storybook control with local state

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [modalOpen, handleClose]);

  return (
    <BrowserRouter>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={() => handleOpen()}
      >
        Open Modal
      </button>
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
