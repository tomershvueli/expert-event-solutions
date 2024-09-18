import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Form from "./Form";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import { FormValues } from "./Form";
import TextAreaInput from "../TextAreaInput/TextAreaInput";

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
