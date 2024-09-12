import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { FormPhoneInputComponent } from "./FormTextInputComponent";
import { FormEmailInputComponent } from "./FormTextInputComponent";
export default {
  title: "components/Form",
  components: { FormPhoneInputComponent, FormEmailInputComponent },
  args: {},
} as Meta;

const PhoneInputTemplate: StoryFn = () => {
  return (
    <BrowserRouter>
      <FormPhoneInputComponent />
    </BrowserRouter>
  );
};

const EmailInputTemplate: StoryFn = () => {
  return (
    <BrowserRouter>
      <FormEmailInputComponent />
    </BrowserRouter>
  );
};

export const FormPhoneInput = PhoneInputTemplate.bind({});
FormPhoneInput.args = {};

export const FormEmailInput = EmailInputTemplate.bind({});
FormEmailInput.args = {};
