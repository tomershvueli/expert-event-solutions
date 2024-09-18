import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import check from "../../images/check.svg";
import { FormValues } from "../Form/Form";

interface CheckboxInputProps {
  name: keyof FormValues;
  label: string;
  required?: boolean; // Optional prop for making the checkbox required
  requiredError?: string; // Custom error message for the required validation
  error?: { message: string };
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({
  name,
  label,
  required = false, // Default is not required
  requiredError = "You must agree to the terms", // Default error message
}) => {
  const {
    register,
    formState: { errors, isSubmitted },
    setValue,
    getValues,
  } = useFormContext<FormValues>();

  const [isClicked, setIsClicked] = useState(getValues(name) || false);

  const handleIsClicked = () => {
    const newValue = !isClicked;
    setIsClicked(newValue);
    setValue(name, newValue);
    console.log("Checkbox state updated:", newValue);
  };

  useEffect(() => {
    setIsClicked(getValues(name)); // Sync the checkbox state with the form values
  }, [getValues, name, isSubmitted]);

  useEffect(() => {
    if (isSubmitted) {
      setIsClicked(false); // Reset checkbox state after submission
    }
  }, [isSubmitted]);

  const hasError = errors[name]?.message;

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-start gap-2.5">
        <div
          className="relative cursor-pointer min-h-[27px] h-[27px] min-w-[27px]"
          onClick={handleIsClicked}
        >
          <input
            type="checkbox"
            {...register(name, {
              required: required ? requiredError : false,
            })}
            className="hidden" // Hide the native checkbox
          />
          <div className="absolute inset-0 bg-offWhite rounded-[4px]">
            {isClicked && (
              <img
                src={check}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[22px] w-[23px]"
                alt="checked"
              />
            )}
          </div>
        </div>
        <span>{label}</span>
      </div>
      {hasError && !isClicked && (
        <span className="text-gingerFlower">{hasError}</span>
      )}
    </div>
  );
};

export default CheckboxInput;
