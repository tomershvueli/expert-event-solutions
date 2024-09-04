import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Form from "./Form";
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
  />
);
