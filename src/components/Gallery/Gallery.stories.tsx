import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { Gallery } from "./Gallery";

export default {
  title: "components/gallery",
  component: Gallery,
} as Meta;

const GalleryTemplate: StoryFn<typeof Gallery> = (args) => {
  if (!args) {
    throw new Error("Gallery component expects props");
  }

  return (
    <BrowserRouter>
      <Gallery {...args} />
    </BrowserRouter>
  );
};

export const Default = GalleryTemplate.bind({});
