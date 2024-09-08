import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CheckboxInput from "./CheckboxInput";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: "Components/CheckboxInput",
  component: CheckboxInput,
} as Meta;

export const Default: StoryFn = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <CheckboxInput
        name="terms"
        label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply.
"
      />
    </FormProvider>
  );
};
