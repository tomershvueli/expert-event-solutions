import React from "react";
import { useForm, FormProvider } from "react-hook-form";

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
    submit(data);
    methods.reset(); // Reset form state after submission
  });

  return (
    <FormProvider {...methods}>
      <form
        className={`flex flex-col gap-[7.47px] ${className}`}
        onSubmit={onSubmit}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
