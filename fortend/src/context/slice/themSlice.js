import { createSlice } from "@reduxjs/toolkit";
import { json } from "zod";

const initialState = {
   theme: "dark",
};

const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      setTheme: (state, action) => {
         state.theme = state.theme === "dark" ? "" : "dark";

         if (state.theme === "dark") {
            localStorage.setItem("theme", "light");
            document.querySelector("html").classList.add("light");
            document.querySelector("html").classList.remove("dark");
         } else {
            localStorage.setItem("theme", "dark");
            document.querySelector("html").classList.add("dark");
            document.querySelector("html").classList.remove("light");
         }
      },
   },
});

export const { setTheme } = themeSlice.actions;

export const theme = themeSlice.reducer;
