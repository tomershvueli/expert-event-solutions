import "./CheckboxInput.css";
import React from "react";
import { useFormContext } from "react-hook-form";

interface CheckboxInputProps {
  name: string;
  label: string;
}
//interface CheckboxInputProps defines expected props for this component: "name" and "label"(label displayed next to checkbox)
const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  //useFormContext(): hook is used to access form's context, including "register" fxn to register checkbox w/in the form and "errors" to handle validation errors
  return (
    <div className="checkbox-input">
      <label>
        <input type="checkbox" {...register(name, { required: true })} />
        {label}
      </label>
      {errors[name] && (
        <span className="checkbox-error">This field is required</span>
      )}
    </div>
  );
};
export default CheckboxInput;
