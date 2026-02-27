import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css"; // Keep your existing styles

/**
 * Mounts the root React App to the DOM
 */
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("No root element found. Please add <div id='root'></div> in your index.html.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);