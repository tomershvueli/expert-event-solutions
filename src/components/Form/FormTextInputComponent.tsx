import { Form } from "./Form";
import { useForm, FieldValues } from "react-hook-form";

function FormTextInputComponent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  return (
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
  );
}

export { FormTextInputComponent };
