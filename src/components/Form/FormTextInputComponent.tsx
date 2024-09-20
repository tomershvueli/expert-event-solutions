import { useForm, FieldValues } from "react-hook-form";
import TextInput from "./FormInput";
function FormPhoneInputComponent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <TextInput
        type="tel"
        placeholder="Phone Number"
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={(data: FieldValues) => {
          console.log("Submitted data:", data);
        }}
      ></TextInput>
    </>
  );
}

function FormEmailInputComponent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <TextInput
        type="email"
        placeholder="Email"
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={(data: FieldValues) => {
          console.log("Submitted data:", data);
        }}
      ></TextInput>
    </>
  );
}

export { FormPhoneInputComponent, FormEmailInputComponent };
