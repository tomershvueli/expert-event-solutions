import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Form from "./Form";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import { FormValues } from "./Form";

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
    <CheckboxInput
      name="agreeToTerms"
      label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
    />
  </Form>
);
