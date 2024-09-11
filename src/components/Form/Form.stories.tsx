import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Form from "./Form";
import TextAreaInput from "../TextAreaInput/TextAreaInput";
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
    <TextAreaInput
      name="description"
      placeholder="Give us some details about your event"
    />
  </Form>
);
