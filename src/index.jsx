import React from "react";
import ReactDOM from "react-dom/client";
import aos from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/main.css";
import App from "./App.jsx";

aos.init();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
