import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   theme: localStorage.getItem("theme") || "light",
};

const themeSlice = createSlice({
   name: "theme",
   initialState,
   reducers: {
      setTheme: (state, action) => {
         if (state.theme === "dark") {
            state.theme = "light";
            localStorage.setItem("theme", "light");
            document.querySelector("html").classList.add("light");
            document.querySelector("html").classList.remove("dark");
         } else {
            state.theme = "dark";
            localStorage.setItem("theme", "dark");
            document.querySelector("html").classList.add("dark");
            document.querySelector("html").classList.remove("light");
         }
      },
   },
});

export const { setTheme } = themeSlice.actions;

export const theme = themeSlice.reducer;
