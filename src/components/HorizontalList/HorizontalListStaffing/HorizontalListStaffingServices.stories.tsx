import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { HorizontalList } from "../HorizontalList";
import { HorizontalListStaffing } from "./HorizontalListStaffing";

export default {
  title: "Components/HorizontalList",
  component: HorizontalList,
} as Meta<typeof HorizontalList>;

const Template: StoryFn<typeof HorizontalList> = () => (
  <BrowserRouter>
    <HorizontalListStaffing />
  </BrowserRouter>
);

export const StaffingServicesList = Template.bind({});

StaffingServicesList.args = {};
