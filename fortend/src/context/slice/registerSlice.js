// import { createSlice, createUser, LoginThunk } from "@/import.js"

import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../registerThunk/registerThunk";
import LoginThunk from "../registerThunk/LoginThunk";
import authenticateThunk from "../registerThunk/authenticate";
import LogOut from "../registerThunk/logOut";

const initialState = {
   userData: {},
   LogInData: {},
   authenticated: null,
   authenticatedData: {},

   registerError: null,
   LogOutError: null,
   LoginError: null,
   authenticatedError: null,

   registerLoding: true,
   LoginLoding: false,
   LogOutLoding: false,
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
            state.authenticatedData = action.payload;
         })
         .addCase(authenticateThunk.pending, (state, action) => {
            state.authenticateThunkLoding = true;
            state.authenticatedError = null;
            state.authenticated = false;
         })
         .addCase(authenticateThunk.rejected, (state, action) => {
            state.authenticateThunkLoding = false;
            state.authenticatedError = action.payload;
            state.authenticated = false;
         })
         .addCase(LogOut.fulfilled, (state, action) => {
            state.authenticateThunkLoding = false;
            state.authenticatedError = null;
            state.authenticated = false;
            state.authenticatedData = null;
            state.userData = null;
            state.LogInData = null;
            state.LogOutError = null;
            state.LogOutLoding = false;
         })
         .addCase(LogOut.rejected, (state, action) => {
            state.LogOutError = action.payload;
            state.LogOutError = null;
            state.LogOutLoding = false;
         })
         .addCase(LogOut.pending, (state, action) => {
            state.LogOutError = null;
            state.LogInData = null;
         });
   },
});

export const register = registerSlice.reducer;
