import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import submitButton from "../../images/submitbutton.svg";
import CheckboxInput from "../CheckBoxInput/CheckBoxInput";
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
        className="bg-wheat p-[28px] pt-7 pb-10 rounded-[40px] max-w-[467px] w-full"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col justify-center items-center">
          <div className=" font-text text-form-text leading-tight ">
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
          </div>
          <button type="submit" className="mt-10">
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
