import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import TextAreaInput from "../TextAreaInput/TextAreaInput";

type FormValues = {
  description: string;
  agreeToTerms: boolean;
};

interface FormProps {
  submit: (data: FormValues) => void;
}

const Form = ({ submit }: FormProps) => {
  const methods = useForm<FormValues>({
    mode: "onBlur", // This will trigger validation on blur
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Form submitted with data:", data);
    submit(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
        <TextAreaInput
          name="description"
          placeholder="Give us some details about your event"
        />
        <CheckboxInput
          name="agreeToTerms"
          label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
          error={methods.formState.errors.agreeToTerms}
        />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
