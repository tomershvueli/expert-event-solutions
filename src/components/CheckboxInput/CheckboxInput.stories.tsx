import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CheckboxInput from "./CheckboxInput";
import { FormProvider, useForm } from "react-hook-form";
type FormData = {
  agreeToTerms: boolean;
};
export default {
  title: "Components/CheckboxInput",
  component: CheckboxInput,
} as Meta;

export const Default: StoryFn = () => {
  const methods = useForm<FormData>();

  // Define a form method to handle form submission (if needed)
  const onSubmit = (data: FormData) => {
    data;
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CheckboxInput
          name="agreeToTerms"
          label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
          required={true}
          requiredError="You must agree to the terms"
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
