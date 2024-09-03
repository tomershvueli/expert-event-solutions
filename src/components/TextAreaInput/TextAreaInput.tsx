import React from "react";
import { useFormContext } from "react-hook-form";

interface TextAreaInputProps {
  name: string;
  placeholder?: string;
}

const TextAreaInput: React.FC<TextAreaInputProps> = ({ name, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col items-center">
      <textarea
        className="w-full h-[167px] rounded-[12px] p-3.5 bg-[#E9E8D5] mb-2.5 box-border 
        text-base font-roboto leading-[19.2px] resize-none"
        {...register(name, { required: "This field is required" })}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-[#CF534D]">{errorMessage}</p>}
    </div>
  );
};

export default TextAreaInput;
