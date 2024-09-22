import { useForm, FieldValues } from "react-hook-form";
interface TextInputProps {
  placeholder?: string;
  type: "email" | "tel";
  register: ReturnType<typeof useForm>["register"];
  errors: ReturnType<typeof useForm>["formState"]["errors"];
  handleSubmit: ReturnType<typeof useForm>["handleSubmit"];
  onSubmit: (data: FieldValues) => void;
  required?: boolean;
  requiredError?: string;
  error?: string;
  validationRules: object;
}

const TextInput = ({
  placeholder,
  type,
  register,
  errors,
  handleSubmit,
  onSubmit,

  validationRules,
}: TextInputProps) => {
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit(onSubmit)();
    }
  };

  return (
    <div className="w-[100%] w-[411.03px] flex flex-col ">
      <input
        className={` h-[47.04px] p-[12.7px] bg-offwhite rounded-[12px] text-form-text bg-offWhite outline-lightGrey  ${
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
