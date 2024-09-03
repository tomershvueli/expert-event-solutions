import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from "./components/App/App";
import "./global/default.css";
import { Image } from "./components/image/image";

const client = new ApolloClient({
  uri: "http://localhost:8080/api/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Image src="" alt="" />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
