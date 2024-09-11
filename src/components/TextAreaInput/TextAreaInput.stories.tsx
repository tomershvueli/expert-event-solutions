import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import TextAreaInput from "./TextAreaInput";
import { FormValues } from "../../../../temp/Form/Form"; // Adjust the import path as necessary

export default {
  title: "Components/TextAreaInput",
  component: TextAreaInput,
} as Meta;

const Template: StoryFn = () => {
  const methods = useForm<FormValues>();

  return (
    <FormProvider {...methods}>
      <form>
        <TextAreaInput
          name="description"
          placeholder="Give us some details about your event"
        />
      </form>
    </FormProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "description",
  placeholder: "Enter your description here...",
};
