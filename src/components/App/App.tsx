import "./App.css";

import { Image } from "../image/image";
function App() {
  // import closeModal from useModal if you want a button to also close the modal

  return (
    <div className="App">
      <Image src="path/to/your/image.jpg" alt="Description of the image" />
    </div>
  );
}

export default App;
