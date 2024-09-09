import React from "react";
import { useForm, FormProvider } from "react-hook-form";
// import submitButton from "../../images/submitbutton.svg";

export type FormValues = {
  description: string;
  agreeToTerms: boolean;
};

interface FormProps {
  submit: (data: FormValues) => void;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> & {
  // TextAreaInput: React.FC<TextAreaInputProps>;
} = ({ submit, children }) => {
  const methods = useForm<FormValues>({
    mode: "onBlur", // Triggers validation on blur
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
        <div className="flex flex-col justify-center ">
          {children}

          {/* <button type="submit" className="flex mt-[42px] justify-center">
            <img
              className="w-[253px] h-[71px] opacity-100 hover:opacity-80 transition-opacity duration-300"
              src={submitButton}
              alt="Submit button"
            />
          </button> */}
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
