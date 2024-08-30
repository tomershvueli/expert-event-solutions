// import { FormComponent } from "../Form/Form";
import { Form } from "../Form/Form";
import { useForm, FieldValues } from "react-hook-form";
function App() {
  // import closeModal from useModal if you want a button to also close the modal

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
