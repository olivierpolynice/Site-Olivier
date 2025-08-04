import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css'; // 👈 Ajoute cette ligne tout en haut

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
