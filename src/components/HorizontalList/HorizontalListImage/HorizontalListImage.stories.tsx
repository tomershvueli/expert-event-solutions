import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { HorizontalList } from "../HorizontalList";
import { HorizontalListImage } from "./HorizontalListImage";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
} as Meta<typeof HorizontalList>;

const Template: StoryFn<typeof HorizontalList> = () => (
  <BrowserRouter>
    <HorizontalListImage />
  </BrowserRouter>
);

export const AboutList = Template.bind({});
