import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global/default.css";
import { StaffingServices } from "./components/StaffingServices/StaffingServices";

const client = new ApolloClient({
  uri: "http://localhost:8080/api/graphql",
  cache: new InMemoryCache(),
});

window.onload = async () => {
  try {
    await client.refetchQueries({
      updateCache: (cache) => cache.reset(),
      include: "all",
      onQueryUpdated: () => {
        return true;
      },
      optimistic: true,
    });
  } catch {
    console.log("failed to refetch");
  }
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home Route</div>} />
          <Route path="/staffing-services" element={<StaffingServices />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
