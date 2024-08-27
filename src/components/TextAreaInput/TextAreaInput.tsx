import "./TextAreaInput.css";
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
    <div className="text-area">
      <textarea
        className="text-area-input"
        {...register(name, { required: "This field is required" })}
        placeholder={placeholder}
      />
      {errorMessage && <p className="text-area-error">{errorMessage}</p>}
    </div>
  );
};

export default TextAreaInput;
