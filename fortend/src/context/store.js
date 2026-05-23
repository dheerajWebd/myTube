// import { configureStore, register } from "@/import.js"

import { configureStore } from "@reduxjs/toolkit";
import { register } from "./slice/registerSlice";
import { theme } from "./slice/themSlice";
import authMiddleware from "./middlewares/AuthMiddleware";

const store = configureStore({
   reducer: {
      register,
      theme,
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(authMiddleware),
});
export default store;
