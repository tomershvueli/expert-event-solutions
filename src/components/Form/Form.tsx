import "./Form.css";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import CheckboxInput from "../CheckboxInput/CheckboxInput";
import TextAreaInput from "../TextAreaInput/TextAreaInput";

export type FormValues = {
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
  //The useForm hook returns a methods object that contains the formState property.

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Form submitted with data:", data);
    submit(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form className="form" onSubmit={onSubmit}>
        <div className="form__contents">
          <div className="textarea-input-container">
            <TextAreaInput
              name="description"
              placeholder="Give us some details about your event"
            />
          </div>
          <CheckboxInput
            name="agreeToTerms"
            label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
            error={{
              message: methods.formState.errors.agreeToTerms?.message ?? "",
            }}
            //formState property contains the errors object, which contains validation errors for each form field.
            //CheckboxInput component, the error prop is used to display an error message if the agreeToTerms checkbox input is not checked.
            // message property that contains the error message.
            //methods.formState.errors.agreeToTerms?.message expression checks if the agreeToTerms field has a validation error. If it does, the error message is displayed.
            //?? "" operator is used to provide a default value of an empty string if the message property is undefined
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
