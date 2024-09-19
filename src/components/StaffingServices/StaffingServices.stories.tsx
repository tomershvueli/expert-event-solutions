import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { StaffingServices } from "./StaffingServices";

export default {
  title: "Components/StaffingServices",
  component: StaffingServices,
} as Meta;

export const Default: StoryFn = () => (
  <BrowserRouter>
    <StaffingServices />
  </BrowserRouter>
);
