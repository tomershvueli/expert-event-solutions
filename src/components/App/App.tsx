import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form"; // Ensure this path is correct
import CheckboxInput from "../CheckboxInput/CheckboxInput"; // Ensure this path is correct

const App: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full max-w-[467px] mx-auto">
              {/* Wrapper for Form: Centers the form with a max width */}
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
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
