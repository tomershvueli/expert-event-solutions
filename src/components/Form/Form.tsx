import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import submitButton from "../../images/submitbutton.svg";

export type FormValues = {
  description: string;
  agreeToTerms: boolean;
};

interface FormProps {
  children?: React.ReactNode;
  className?: string; // Add className for dynamic styling
  submit: (data: FormValues) => void;
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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Optional: Prevent default behavior if needed
      methods.handleSubmit((data) => {
        console.log("Form submitted with data:", data);
        submit(data);
        methods.reset(); // Reset form state after submission
        console.log("Form reset.");
      })(); // Trigger submit function
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        className={`flex flex-col gap-[7.47px] ${className}`}
        onSubmit={onSubmit}
        onKeyDown={handleKeyDown}
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
