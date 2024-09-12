import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "../ModalContext/ModalContext";
import { ModalTrigger } from "../ModalContext/ModalTrigger";
import { Modal } from "./Modal";

export default {
  title: "components/Modal",
  component: Modal,
} as Meta;

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
