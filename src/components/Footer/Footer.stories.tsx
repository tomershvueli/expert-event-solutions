import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./Footer";

export default {
  title: "components/Footer",
  component: Footer,
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <BrowserRouter>
      <Footer {...args} />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {};
