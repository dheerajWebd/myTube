import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./context/store.js";
import Baseroutes from "./routes/routes";

document.querySelector("html").classList.add(localStorage.getItem("theme"));

createRoot(document.getElementById("root")).render(
   <Provider store={store}>
      <Baseroutes />
   </Provider>
);
