import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

export default {
  title: "components/Header",
  component: Header,
  argTypes: {
    screenWidth: {
      control: {
        type: "select",
        options: ["mobile", "desktop"],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <BrowserRouter>
      <Header {...args} />
    </BrowserRouter>
  );
};

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {
  screenWidth: "desktop",
};
