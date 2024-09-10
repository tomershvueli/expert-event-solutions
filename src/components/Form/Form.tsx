import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import submitButton from "../../images/submitbutton.svg";

export type FormValues = {
  description: string;
  agreeToTerms: boolean;
};

interface FormProps {
  submit: (data: FormValues) => void;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ submit, children }) => {
  const methods = useForm<FormValues>({
    mode: "onBlur",
  });

  const onSubmit = methods.handleSubmit((data) => {
    console.log("Form submitted with data:", data);
    submit(data);
    methods.reset(); // Reset form state after submission
    console.log("Form reset.");
  });

  return (
    <FormProvider {...methods}>
      <form
        className="bg-wheat p-[28px] pt-7 pb-10 rounded-[40px] max-w-[467px] w-full"
        onSubmit={onSubmit}
      >
        <div className="flex flex-col justify-center items-center">
          {children}
          {/* Mock submit button for testing purposes */}
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
