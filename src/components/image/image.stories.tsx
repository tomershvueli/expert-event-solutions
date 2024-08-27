import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Image } from "./image";

export default {
  title: "components/image",
  component: Image,
} as Meta;
const Template: StoryFn = (args) => {
  return (
    <BrowserRouter>
      <Image {...args} placeholder="some" type="email" />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {};
