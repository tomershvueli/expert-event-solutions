import React, { useState, useEffect, useCallback } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import ContactForm from "./ContactForm";

export default {
  title: "Components/ContactForm",
  component: ContactForm,
} as Meta;

const Template: StoryFn<{ isOpen: boolean }> = ({ isOpen }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  // Use useArgs to interact with Storybook controls
  const [, updateArgs] = useArgs();

  // Handle opening the modal
  const handleOpen = () => updateArgs({ isOpen: true });

  // Handle closing the modal
  const handleClose = useCallback(
    () => updateArgs({ isOpen: false }),
    [updateArgs],
  );

  // Sync Storybook args with the modal state
  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleOpen}
      >
        Open Contact Form
      </button>
      <ContactForm isOpen={modalOpen} onClose={handleClose} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false, // Storybook control for the modal open state
};
