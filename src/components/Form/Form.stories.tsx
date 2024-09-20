// import { Meta, StoryFn } from "@storybook/react";
// import { BrowserRouter } from "react-router-dom";
// import { FormPhoneInputComponent } from "./FormTextInputComponent";

// import { FormEmailInputComponent } from "./FormTextInputComponent";

// export default {
//   title: "components/Form",
//   components: { FormPhoneInputComponent, FormEmailInputComponent },
//   args: {},
// } as Meta;

// const PhoneInputTemplate: StoryFn = () => {
//   return (
//     <BrowserRouter>
//       <FormPhoneInputComponent />
//     </BrowserRouter>
//   );
// };

// const EmailInputTemplate: StoryFn = () => {
//   return (
//     <BrowserRouter>
//       <FormEmailInputComponent />
//     </BrowserRouter>
//   );
// };

// export const FormPhoneInput = PhoneInputTemplate.bind({});
// FormPhoneInput.args = {};

// export const FormEmailInput = EmailInputTemplate.bind({});
// FormEmailInput.args = {};
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Form from "./Form";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import { FormValues } from "./Form";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
import {
  FormEmailInputComponent,
  FormPhoneInputComponent,
} from "./FormTextInputComponent";

export default {
  title: "Components/Form",
  component: Form,
} as Meta;

export const Default: StoryFn = () => (
  <Form
    submit={(data: FormValues) =>
      console.log("Form submitted with data:", data)
    }
  >
    <FormPhoneInputComponent />
    <FormEmailInputComponent />
    <TextAreaInput
      name="description"
      placeholder="Give us some details about your event"
      required={true}
      requiredError="This field is required"
    />
    <CheckboxInput
      name="agreeToTerms"
      label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
      required={true}
      requiredError="You must agree to the terms"
    />
  </Form>
);
