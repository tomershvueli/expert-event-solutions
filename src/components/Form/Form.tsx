import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import submitButton from "../../images/submitbutton.svg";
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

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Form submitted with data:", data);
    submit(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form
        className="bg-formBackground p-[28px] pt-7 pb-10 rounded-[40px] max-w-[467px] w-full"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-full mb-4">
            <TextAreaInput
              name="description"
              placeholder="Give us some details about your event"
            />
          </div>

          <button type="submit" className="mt-4">
            <img
              className="w-[253px] h-[71px] opacity-100 hover:opacity-80 transition-opacity duration-300"
              src={submitButton}
              alt="Submit button"
            />
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
