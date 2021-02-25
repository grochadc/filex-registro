import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.min.css";

const ServerUri =
  process.env.NODE_ENV === "production"
    ? "https://filex-database.herokuapp.com/"
    : "http://localhost:5000/";

const client = new ApolloClient({
  uri: ServerUri,
  cache: new InMemoryCache({ addTypename: false }),
  connectToDevtools: true,
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
