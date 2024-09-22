import React, { useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Button } from "../Button/Button";

export type FormValues = {
  description: string;
  agreeToTerms: boolean;
  phone: string;
  email: string;
};

interface FormProps {
  submit: (data: FormValues) => void;
  children?: React.ReactNode;
  className?: string;
}

const Form: React.FC<FormProps> = ({ submit, children, className }) => {
  const methods = useForm<FormValues>({
    defaultValues: {
      agreeToTerms: false,
      phone: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = methods.handleSubmit((data) => {
    submit(data);
    methods.reset();
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        const activeElement = document.activeElement;
        // Check if the active element is not an input or textarea
        if (
          activeElement &&
          !["INPUT", "TEXTAREA"].includes(activeElement.tagName)
        ) {
          e.preventDefault();
          onSubmit();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onSubmit]);

  return (
    <FormProvider {...methods}>
      <form
        className={`flex items-center flex-col gap-[7.47px] ${className}`}
        onSubmit={onSubmit}
      >
        {children}
        <Button buttonText="Submit" submitButton={true} />
      </form>
    </FormProvider>
  );
};

export default Form;
