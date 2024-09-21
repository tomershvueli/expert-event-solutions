import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import ContactForm from "./ContactForm";

export default {
  title: "Components/ContactForm",
  component: ContactForm,
} as Meta;

const Template: StoryFn<{ isOpen: boolean }> = ({ isOpen }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Open Contact Form</button>
      <ContactForm isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};
