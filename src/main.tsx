import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form/Form";

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
                {/* Wrapper for Form: Centers the form with a max width */}
                <Form
                  submit={(data) =>
                    console.log("Form submitted with data:", data)
                  }
                ></Form>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
