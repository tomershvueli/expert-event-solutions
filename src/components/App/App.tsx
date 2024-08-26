import "./App.css";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { Modal } from "../Modal/Modal";
import { useModal } from "../ModalContext/ModalHook";
// import { FormComponent } from "../Form/Form";
import { Form } from "../Form/Form";
import { useForm, FieldValues } from "react-hook-form";
function App() {
  const modalName = "modal"; // Unique identifier for the modal
  // import closeModal from useModal if you want a button to also close the modal
  const { isOpen, openModal } = useModal(modalName); // Use the hook to control the modal

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  return (
    <div className="App">
      <Header />
      <Footer />
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal name={modalName}>
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
        </Modal>
      )}
    </div>
  );
}

export default App;
