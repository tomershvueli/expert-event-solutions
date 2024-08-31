import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="form-wrapper">
              <Form submit={() => console.log("Form submitted!")} />
            </div>
          }
        />
      </Routes>
    </div>
  );
};
export default App;
