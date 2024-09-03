import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Image } from "./image";

export default {
  title: "components/image",
  component: Image,
} as Meta;
const Template: StoryFn = () => {
  return (
    <BrowserRouter>
      <Image src="path/to/image.jpg" alt="Description of the image" />
    </BrowserRouter>
  );
};

export const Default = Template.bind({});
Default.args = {};
