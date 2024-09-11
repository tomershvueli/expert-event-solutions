import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form"; // Ensure this path is correct
import CheckboxInput from "../CheckboxInput/CheckboxInput"; // Ensure this path is correct

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
                  <CheckboxInput
                    name="agreeToTerms"
                    label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
                  />
                </Form>
              ) : (
                <CheckboxInput
                  name="agreeToTerms"
                  label="I agree to receive automated calls or text messages from Expert Event Solutions LLC in response to my inquiry. Msg & data rates may apply."
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
