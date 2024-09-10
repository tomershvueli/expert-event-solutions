import React from "react";
import { useForm, FormProvider } from "react-hook-form";

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
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
