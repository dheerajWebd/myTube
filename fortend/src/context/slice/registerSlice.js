import { createSlice, createUser, LoginThunk } from "@/import.js"




const initialState = {
  userData: {},
  LogInData: {},


  registerError: null,
  LoginError: null,


  registerLoding: false,
  LoginLoding: false,
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
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {

      // register builder
      state.registerLoding = false
      state.registerError = null
      state.userData = action.payload
    }).addCase(createUser.pending, (state, action) => {
      state.registerLoding = true
      state.registerError = null
      state.userData = null
      console.log("action.payload")
    }).addCase(createUser.rejected, (state, action) => {
      state.registerLoding = false
      state.registerError = action.payload
      state.userData = null
    })
      // Login builder
      .addCase(LoginThunk.fulfilled, (state, action) => {
        state.LoginLoding = false
        state.LoginError = null
        state.LogInData = action.payload
      }).addCase(LoginThunk.pending, (state, action) => {
        state.LoginLoding = true
        state.LoginError = null
        state.LogInData = null
        console.log("action.payload")
      }).addCase(LoginThunk.rejected, (state, action) => {
        state.LoginLoding = false
        state.LoginError = action.payload
        state.LogInData = null
      })
  }
})



export const register = registerSlice.reducer 