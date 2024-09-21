import { useFormContext } from "react-hook-form";
import TextInput from "./FormInput";

interface FormComponentProps {
  type: "tel" | "email";
  placeholder: string;
  requiredError: string;
  required?: boolean;
}

function FormComponent({
  type,
  placeholder,
  requiredError,
  required,
}: FormComponentProps) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useFormContext(); // Use context instead of useForm
  const validationRules = {
    required: required ? requiredError : false,
    pattern: {
      value:
        type === "tel"
          ? /^[+]?[0-9\s\-().]{10,15}$/ // Phone number pattern
          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email pattern
      message:
        type === "tel" ? "Invalid phone number format" : "Invalid email format",
    },
  };
  return (
    <TextInput
      type={type}
      placeholder={placeholder}
      register={register}
      errors={errors}
      required={required}
      requiredError={requiredError}
      handleSubmit={handleSubmit}
      onSubmit={() => console.log("Form submitted")}
      validationRules={validationRules}
    />
  );
}

export const FormPhoneInputComponent = () => (
  <FormComponent
    type="tel"
    placeholder="Phone Number"
    requiredError="Phone number is required"
    required={true}
  />
);

export const FormEmailInputComponent = () => (
  <FormComponent
    type="email"
    placeholder="Email"
    requiredError="Email is required"
    required={true}
  />
);
