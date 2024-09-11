import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../Form/Form"; // Ensure this path is correct
import CheckboxInput from "../CheckboxInput/CheckboxInput"; // Ensure this path is correct
import TextAreaInput from "../TextAreaInput/TextAreaInput";
const App: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Routes>
        <Route
          path="/"
          element={
            <div className="w-full max-w-[467px] mx-auto">
              <Form
                submit={(data) =>
                  console.log("Form submitted with data:", data)
                }
              >
                <TextAreaInput
                  name="description"
                  placeholder="Give us some details about your event"
                />
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
