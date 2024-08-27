import "./CheckboxInput.css";
import React from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxInputProps {
  name: string;
  label: string;
  error?: { message: string };
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  label,
  error,
}) => {
  const { register } = useFormContext();

  return (
    <div className="checkbox-input">
      <label>
        <input
          type="checkbox"
          {...register(name, {
            required: "You must agree to the terms",
          })}
        />
        {label}
      </label>
      {error && <span className="checkbox-error">{error.message}</span>}
    </div>
  );
};

export default CheckboxInput;
