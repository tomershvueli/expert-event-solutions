import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import submitButton from "../../images/submitbutton.svg";
import checkBox from "../../images/checkbox.svg";
import check from "../../images/check.svg";
import { useState } from "react";
export type FormValues = {
  description: string;
  agreeToTerms: boolean;
};

interface FormProps {
  submit: (data: FormValues) => void;
  children?: React.ReactNode;
}

const Form: React.FC<FormProps> & {
  CheckboxInput: React.FC<CheckboxInputProps>;
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
        <div className="flex flex-col justify-center items-center">
          {children}
          {/* <div className=" font-text text-form-text leading-tight ">
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
          </div> */}
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

interface CheckboxInputProps {
  name: keyof FormValues; // Restrict name to keys of FormValues
  label: string;
  error?: { message: string };
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>(); // Use form context to access register
  const [isClicked, setIsClicked] = useState(false);
  const handleisClicked = () => {
    setIsClicked(!isClicked);
  };

  const hasError = errors[name]?.message;
  return (
    <div className="flex flex-col items-center">
      <label className="flex  gap-2.5">
        <img
          src={checkBox}
          onClick={handleisClicked}
          className="w-5 h-5 cursor-pointer"
          {...register(name, {
            required: "You must agree to the terms",
          })}
          // The "register" function is called with the "name" prop as an argument. The "register" function returns an object with a required property.
        />
        {isClicked && (
          <img
            className="absolute w-5 h-5 cursor-pointer"
            src={check}
            onClick={handleisClicked}
          />
        )}
        {label}
        {/* The "label" prop is passed as a child element of the "label" element. */}
      </label>
      {hasError && !isClicked ? (
        <span className="text-[#CF534D]">{hasError}</span>
      ) : null}
    </div>
  );
};
Form.CheckboxInput = CheckboxInput;

export default Form;
