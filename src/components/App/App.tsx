import "./App.css";

import { Modal } from "../Modal/Modal";
import { useModal } from "../ModalContext/ModalHook";
function App() {
  const modalName = "modal"; // Unique identifier for the modal
  // import closeModal from useModal if you want a button to also close the modal
  const { isOpen, openModal } = useModal(modalName); // Use the hook to control the modal

  return (
    <div className="App">
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <Modal name={modalName}>
          <div></div>
        </Modal>
      )}
    </div>
  );
}

export default App;
