import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./global/default.css";
import { Header } from "./components/Header/Header";
import { RentalEquipment } from "./components/RentalEquipment/RentalEquipment";

const client = new ApolloClient({
  uri: "http://localhost:8080/api/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Header />
        {/* <Routes>
          <Route path="/" element={<div>Home Route</div>} />
        </Routes> */}
        <RentalEquipment />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
