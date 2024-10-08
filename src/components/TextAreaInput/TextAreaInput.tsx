import React from "react";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../Form/Form";

interface TextAreaInputProps {
  name: keyof FormValues; // Restrict name to keys of FormValues
  placeholder?: string;
  required?: boolean;
  requiredError?: string;
  error?: { message: string };
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({
  name,
  placeholder,
  required = false,
  requiredError = "This field is required",
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();

  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className=" w-[100%] w-[411.03px] flex flex-col ">
      <textarea
        className={` h-[167px] rounded-[12px] p-3.5 bg-offWhite mb-2.5 box-border 
        text-form-text font-roboto leading-[19.2px] resize-none outline-lightGrey  ${
          errorMessage
            ? "border border-lightGingerFlower focus:outline-lightGingerFlower"
            : ""
        }`}
        {...register(name, { required: required ? requiredError : false })}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-gingerFlower">{errorMessage}</p>}
    </div>
  );
};

export default TextAreaInput;
