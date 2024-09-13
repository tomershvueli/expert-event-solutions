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
  className?: string; // Add className for dynamic styling
}

const Form: React.FC<FormProps> = ({ submit, children, className }) => {
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
        className={`flex flex-col gap-[7.47px] ${className}`}
        onSubmit={onSubmit}
      >
        {children}
        {/* Mock submit button for testing purposes */}

        <button type="submit" className="mt-10 flex justify-center">
          <img
            className="w-[253px] h-[71px] opacity-100 hover:opacity-80 transition-opacity duration-300"
            src={submitButton}
            alt="Submit button"
          />
        </button>
      </form>
    </FormProvider>
  );
};

export default Form;
