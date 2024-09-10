import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import checkBox from "../../images/checkbox.svg";
import check from "../../images/check.svg";
import { FormValues } from "../Form/Form";

interface CheckboxInputProps {
  name: keyof FormValues;
  label: string;
  error?: { message: string };
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, label }) => {
  const {
    register,
    formState: { errors, isSubmitted },
    setValue,
    getValues,
  } = useFormContext<FormValues>();
  const [isClicked, setIsClicked] = useState(getValues(name) || false);

  // Handle checkbox click
  const handleIsClicked = () => {
    const newValue = !isClicked;
    setIsClicked(newValue);
    setValue(name, newValue); // Update the form state
  };

  // Sync local state with form state on value change
  useEffect(() => {
    setIsClicked(getValues(name));
  }, [getValues, name, isSubmitted]);

  // Reset checkbox state if form is submitted
  useEffect(() => {
    if (isSubmitted) {
      setIsClicked(false);
    }
  }, [isSubmitted]);

  const hasError = errors[name]?.message;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-start gap-2.5">
        <div
          className="relative cursor-pointer"
          onClick={handleIsClicked}
          style={{ width: "20px", height: "20px" }}
        >
          <input
            type="checkbox"
            {...register(name, {
              required: "You must agree to the terms",
            })}
            className="hidden"
          />
          <img src={checkBox} className="max-w-none h-[20px]" alt="checkbox" />
          {isClicked && (
            <img
              src={check}
              className="absolute top-0 left-0 max-w-none h-[20px]"
              alt="checked"
            />
          )}
        </div>
        <span>{label}</span>
      </div>
      {hasError && !isClicked && <span className="text-red">{hasError}</span>}
    </div>
  );
};

export default CheckboxInput;
