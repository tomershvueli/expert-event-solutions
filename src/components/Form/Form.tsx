import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import submitButton from "../../images/submitbutton.svg";

export type FormValues = {
  description: string;
  agreeToTerms: boolean;
};

interface FormProps {
  submit: (data: FormValues) => void;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> & {
  TextAreaInput: React.FC<TextAreaInputProps>;
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

          <button type="submit" className="flex mt-4 justify-center">
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

interface TextAreaInputProps {
  name: keyof FormValues; // Restrict name to keys of FormValues
  placeholder?: string;
  error?: { message: string };
}
const TextAreaInput: React.FC<TextAreaInputProps> = ({ name, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  const errorMessage = errors[name]?.message as string | undefined;
  return (
    <div className="flex flex-col items-center">
      <textarea
        className="w-full h-[167px] rounded-[12px] p-3.5 bg-[#E9E8D5] mb-2.5 box-border 
      text-base font-roboto leading-[19.2px] resize-none"
        {...register(name, { required: "This field is required" })}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-red">{errorMessage}</p>}
    </div>
  );
};
Form.TextAreaInput = TextAreaInput;

export default Form;
