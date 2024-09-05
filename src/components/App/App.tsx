import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form";

const App: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full max-w-[467px] mx-auto">
              {/* Wrapper for Form: The inner div ("w-full max-w-[467px] mx-auto") sets the maximum width and centers the form within that constrained width.*/}
              <Form
                submit={(data) =>
                  console.log("Form submitted with data:", data)
                }
              >
                {/* <Form.TextAreaInput
                  name="agreeToTerms"
                  placeholder="Give us some details about your event"
                /> */}
              </Form>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
