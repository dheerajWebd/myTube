// import { configureStore, register } from "@/import.js"

import { configureStore } from "@reduxjs/toolkit";
import { register } from "./slice/registerSlice";


const store = configureStore({
   reducer: {
      register
   },
});
export default store