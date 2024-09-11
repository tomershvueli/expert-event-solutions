import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";

import TextAreaInput from "../TextAreaInput/TextAreaInput"; // Import the new TextAreaInput component

const App: React.FC = () => {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div className="flex justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full max-w-[467px] mx-auto">
              {isDevelopment ? (
                <Form
                  submit={(data) =>
                    console.log("Form submitted with data:", data)
                  }
                >
                  <TextAreaInput
                    name="description"
                    placeholder="Enter your description here..."
                  />
                </Form>
              ) : (
                <TextAreaInput
                  name="description"
                  placeholder="Give us some details about your event"
                />
              )}
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
