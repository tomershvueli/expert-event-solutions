import React from "react";
import { useFormContext } from "react-hook-form";
import { FormValues } from "../Form/Form";

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
    <div className=" w-full flex flex-col items-center">
      <textarea
        className="w-full h-[167px] rounded-[12px] p-3.5 bg-offWhite mb-2.5 box-border 
        text-form-text font-roboto leading-[19.2px] resize-none outline-lightGrey"
        {...register(name, { required: "This field is required" })}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-gingerFlower">{errorMessage}</p>}
    </div>
  );
};

export default TextAreaInput;
