import { Meta, StoryFn } from "@storybook/react/*";
import { BrowserRouter } from "react-router-dom";
import { Button } from "./Button";

export default {
  title: "components/Button",
  component: Button,
} as Meta;

const Template: StoryFn = (args) => {
  return (
    <BrowserRouter>
      <Button {...args} />
    </BrowserRouter>
  );
};

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
  buttonText: "Submit",
  submitButton: true,
};
