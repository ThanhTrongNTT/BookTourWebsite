import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./sagas/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Router>
      <App />
      <ToastContainer />
    </Router>
  </Provider>
);
