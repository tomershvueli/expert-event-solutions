import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form/Form";
import TextAreaInput from "./components/TextAreaInput/TextAreaInput";
import CheckboxInput from "./components/CheckboxInput/CheckboxInput";
import "./global/default.css";

const client = new ApolloClient({
  uri: "http://localhost:8080/api/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
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
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
