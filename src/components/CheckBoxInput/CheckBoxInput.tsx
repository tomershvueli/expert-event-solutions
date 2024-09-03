import React from "react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import checkBox from "../../images/checkbox.svg";
import check from "../../images/check.svg";

// useFormContext is a hook from the react-hook-form library, which helps manage forms in React applications.
interface CheckboxInputProps {
  name: string;
  label: string;
  error?: { message: string };
  // error: an optional prop that represents an error object with a message property. The ? symbol indicates that this prop is optional.
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  label,
  error,
}) => {
  // React.FC stands for "Functional Component" and is a type that represents a functional component in React.
  // The component expects to receive the name, label, and error props, which are destructured from the props object.
  const [isClicked, setIsClicked] = useState(false);
  const { register } = useFormContext();
  // The useFormContext hook returns an object with a register property, which is used to register the checkbox input with the form.
  const handleisClicked = () => {
    setIsClicked(!isClicked);
  };
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
      {error && !isClicked ? (
        <span className="text-[#CF534D]">{error.message}</span>
      ) : null}
    </div>
  );
};

export default CheckboxInput;
