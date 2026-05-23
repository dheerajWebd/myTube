// import { createSlice, createUser, LoginThunk } from "@/import.js"

import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../registerThunk/registerThunk";
import LoginThunk from "../registerThunk/LoginThunk";
import authenticateThunk from "../registerThunk/authenticate";

const initialState = {
   userData: {},
   LogInData: {},
   authenticated: false,

   registerError: null,
   LoginError: null,
   authenticatedError: null,

   registerLoding: false,
   LoginLoding: false,
   authenticateThunkLoding: false,
};
// userName: "",
// fullName: "",
// email: "",
// password: "",
// avatar: "",
// coverImg: "",

const registerSlice = createSlice({
   name: "register",
   initialState,
   extraReducers: builder => {
      builder
         // register builder
         .addCase(createUser.fulfilled, (state, action) => {
            // register builder
            state.registerLoding = false;
            state.registerError = null;
            state.userData = action.payload;
         })
         .addCase(createUser.pending, (state, action) => {
            state.registerLoding = true;
            state.registerError = null;
            state.userData = null;
            console.log("action.payload");
         })
         .addCase(createUser.rejected, (state, action) => {
            state.registerLoding = false;
            state.registerError = action.payload;
            state.userData = null;
         })
         // Login builder
         .addCase(LoginThunk.fulfilled, (state, action) => {
            state.LoginLoding = false;
            state.LoginError = null;
            state.LogInData = action.payload;
         })
         .addCase(LoginThunk.pending, (state, action) => {
            state.LoginLoding = true;
            state.LoginError = null;
            state.LogInData = null;
            console.log("action.payload");
         })
         .addCase(LoginThunk.rejected, (state, action) => {
            state.LoginLoding = false;
            state.LoginError = action.payload;
            state.LogInData = null;
         })
         //  authenticate builder
         .addCase(authenticateThunk.fulfilled, (state, action) => {
            state.authenticateThunkLoding = false;
            state.authenticatedError = null;
            state.authenticated = true;
         })
         .addCase(authenticateThunk.pending, (state, action) => {
            state.authenticateThunkLoding = true;
            state.authenticatedError = null;
            state.authenticated = false;
            console.log("action.payload");
         })
         .addCase(authenticateThunk.rejected, (state, action) => {
            state.authenticateThunkLoding = false;
            state.authenticatedError = action.payload;
            state.authenticated = false;
         });
   },
});

export const register = registerSlice.reducer;
