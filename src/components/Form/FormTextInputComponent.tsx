import { useFormContext } from "react-hook-form";
import TextInput from "./FormInput";

interface FormComponentProps {
  type: "tel" | "email" | "name";
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
          : type === "email"
          ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Email pattern
          : undefined, // No pattern for "name" type
      message:
        type === "tel"
          ? "Invalid phone number format"
          : type === "email"
          ? "Invalid email format"
          : undefined, // No error message for "name" type
    },
  };
  return (
    <TextInput
      type={type as "tel" | "email"}
      placeholder={placeholder}
      register={register}
      errors={errors}
      required={required}
      requiredError={requiredError}
      handleSubmit={handleSubmit}
      onSubmit={() => {}}
      validationRules={validationRules}
    />
  );
}

export const FormNameComponent = () => (
  <FormComponent
    type="name"
    placeholder="First and last name"
    requiredError="First and last name is required"
    required={true}
  />
);
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
