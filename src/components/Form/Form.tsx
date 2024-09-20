import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../Button/Button";

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

        <Button />
      </form>
    </FormProvider>
  );
};

export default Form;
