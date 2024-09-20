import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { HorizontalList } from "../HorizontalList";
import { HorizontalListHome } from "./HorizontalListHome";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
} as Meta<typeof HorizontalList>;

const Template: StoryFn<typeof HorizontalList> = () => (
  <BrowserRouter>
    <HorizontalListHome />
  </BrowserRouter>
);

export const HomePageList = Template.bind({});
