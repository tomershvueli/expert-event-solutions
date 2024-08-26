import "./Form.css";
import { useForm, FieldValues } from "react-hook-form";

interface FormProps {
  className?: string;
  children?: React.ReactNode;
  onSubmit: (data: FieldValues) => void;
}

export const Form = ({ className, children, ...rest }: FormProps) => {
  return (
    <form className={`form ${className}`} {...rest}>
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
        className={`form__input ${errors[type] ? "form__input--error" : ""}`}
        type={type}
        placeholder={placeholder}
        {...register(type, validationRules)}
        onKeyDown={handleEnter}
      />
      {errors[type] && (
        <span className="form__error">{errors[type]?.message?.toString()}</span>
      )}
    </>
  );
};

// export const FormComponent = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data: FieldValues) => {
//     console.log("Submitted data:", data);
//   };

//   const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") {
//       handleSubmit(onSubmit)();
//     }
//   };

//   interface TextInputProps {
//     placeholder?: string;
//     type: "email" | "tel";
//   }

//   const TextInput = ({ placeholder, type }: TextInputProps) => {
//     const validationRules = {
//       required:
//         type === "tel" ? "Phone number is required" : "Email is required",
//       pattern: {
//         value:
//           type === "tel"
//             ? /^[+]?[0-9\s\-().]{10,15}$/
//             : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
//         message:
//           type === "tel"
//             ? "Invalid phone number format"
//             : "Invalid email format",
//       },
//     };

//     return (
//       <>
//         <input
//           className={`form__input ${errors[type] ? "form__input--error" : ""}`}
//           type={type}
//           placeholder={placeholder}
//           {...register(type, validationRules)}
//           onKeyDown={handleEnter}
//         />
//         {errors[type] && (
//           <span className="form__error">
//             {errors[type]?.message?.toString()}
//           </span>
//         )}
//       </>
//     );
//   };

//   return (
//     <form className="form" onSubmit={handleSubmit(onSubmit)}>
//       <TextInput placeholder="Phone Number" type="tel" />
//     </form>
//   );
// };
