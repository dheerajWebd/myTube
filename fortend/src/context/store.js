// import { configureStore, register } from "@/import.js"

import { configureStore } from "@reduxjs/toolkit";
import { register } from "./slice/registerSlice";
import { theme } from "./slice/themSlice";

const store = configureStore({
   reducer: {
      register,
      theme,
   },
});
export default store;
