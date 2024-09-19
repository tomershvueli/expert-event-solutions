import { useForm, FieldValues } from "react-hook-form";
interface TextInputProps {
  placeholder?: string;
  type: "email" | "tel";
  register: ReturnType<typeof useForm>["register"];
  errors: ReturnType<typeof useForm>["formState"]["errors"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  onSubmit: (data: FieldValues) => void;
}

const TextInput = ({
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
    <div className="flex flex-col ">
      <input
        className={`w-[411.03px] h-[47.04px] p-[12.7px] bg-offwhite rounded-[12px] text-form-text bg-offWhite  ${
          errors[type]
            ? "border border-lightGingerFlower focus:outline-lightGingerFlower"
            : ""
        }`}
        type={type}
        placeholder={placeholder}
        {...register(type, validationRules)}
        onKeyDown={handleEnter}
      />
      {errors[type] && (
        <span className="text-red text-form-text mt-1 text-lightGingerFlower">
          {errors[type]?.message?.toString()}
        </span>
      )}
    </div>
  );
};
export default TextInput;
