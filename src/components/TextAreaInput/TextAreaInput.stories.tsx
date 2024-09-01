import { Meta, StoryFn } from "@storybook/react";
import TextAreaInput from "./TextAreaInput";
import { FormProvider, useForm } from "react-hook-form";
export default {
  title: "TextAreaInput/TextAreaInput",
  component: TextAreaInput,
} as Meta;

export const Default: StoryFn = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <TextAreaInput
        name="terms"
        placeholder="Give us some details about your event"
      />
    </FormProvider>
  );
};
