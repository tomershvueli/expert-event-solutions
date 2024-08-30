import { useForm, FieldValues } from "react-hook-form";

interface FormProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
}

export const Form = ({ className, children, ...rest }: FormProps) => {
  return (
    <form className={`flex flex-col gap-[7.47px] ${className}`} {...rest}>
      {children}
    </form>
  );
};

interface TextInputProps {
  placeholder?: string;
  type: "email" | "tel";
  register: ReturnType<typeof useForm>["register"];
  errors: ReturnType<typeof useForm>["formState"]["errors"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  onSubmit: (data: FieldValues) => void;
}

Form.TextInput = ({
  placeholder,
  type,
  register,
  errors,
  handleSubmit,
  onSubmit,
}: TextInputProps) => {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  const validationRules = {
    required: type === "tel" ? "Phone number is required" : "Email is required",
    pattern: {
      value:
        type === "tel"
          ? /^[+]?[0-9\s\-().]{10,15}$/
          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message:
        type === "tel" ? "Invalid phone number format" : "Invalid email format",
    },
  };
  return (
    <>
      <input
        className={`w-[411.03px] h-[47.04px] p-[12.7px] bg-offwhite rounded-[12px]  ${
          errors[type] ? "border border-red-500" : ""
        }`}
        type={type}
        placeholder={placeholder}
        {...register(type, validationRules)}
        onKeyDown={handleEnter}
      />
      {errors[type] && (
        <span className="ftext-red-600 text-sm mt-1">
          {errors[type]?.message?.toString()}
        </span>
      )}
    </>
  );
};
