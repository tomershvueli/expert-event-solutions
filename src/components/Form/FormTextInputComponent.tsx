import Form from "./Form";
import { useForm, FieldValues } from "react-hook-form";

function FormPhoneInputComponent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
    <>
      <Form.TextInput
        type="tel"
        placeholder="Phone Number"
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={(data: FieldValues) => {
          console.log("Submitted data:", data);
        }}
      ></Form.TextInput>
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
      <Form.TextInput
        type="email"
        placeholder="Email"
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        onSubmit={(data: FieldValues) => {
          console.log("Submitted data:", data);
        }}
      ></Form.TextInput>
    </>
  );
}

export { FormPhoneInputComponent, FormEmailInputComponent };
