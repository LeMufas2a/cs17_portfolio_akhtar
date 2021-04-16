import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App/App";
import "./sass/style.sass";
import "bootstrap/dist/js/bootstrap";
import "@fortawesome/fontawesome-free/css/all.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
