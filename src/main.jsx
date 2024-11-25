import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const name = "Margit Tennosaar";
const first_page = 1998;

createRoot(document.getElementById("root")).render(
  <StrictMode><App/></StrictMode>
);