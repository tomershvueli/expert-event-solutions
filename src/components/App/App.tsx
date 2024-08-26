import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<Form submit={() => console.log("Form submitted!")} />}
        />
      </Routes>
    </div>
  );
};
export default App;
