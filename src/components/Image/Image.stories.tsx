import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Image } from "./Image";

export default {
  title: "components/image",
  component: Image,
} as Meta;

const ImageTemplate: StoryFn<typeof Image> = (args) => (
  <BrowserRouter>
    <Image {...args} />
  </BrowserRouter>
);

export const Default = ImageTemplate.bind({});
Default.args = {
  src: require("../../../assets/image-outdoor1.png"),
  alt: "Image of sunny outdoor event",
  width: 1179,
  height: 665,
};
