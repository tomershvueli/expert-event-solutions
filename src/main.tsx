import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./global/default.css";
// import { HorizontalListImage } from "./components/HorizontalList/HorizontalListImage/HorizontalListImage";
import { HorizontalListHome } from "./components/HorizontalList/HorizontalListHome/HorizontalListHome";
// import { HorizontalListStaffing } from "./components/HorizontalList/HorizontalListStaffing/HorizontalListStaffing";

const client = new ApolloClient({
  uri: "http://localhost:8080/api/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        {/* <HorizontalListImage /> */}
        <HorizontalListHome />
        {/* <HorizontalListStaffing /> */}
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
);
