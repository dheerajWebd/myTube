import { createSlice, createUser } from "@/import.js"




const initialState = {
  userData: {},
  error: null,
  loding: false,
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
      state.loding = false
      state.error = null
      state.userData = action.payload
    }).addCase(createUser.pending, (state, action) => {
      state.loding = true
      state.error = null
      state.userData = null
      console.log("action.payload")
    }).addCase(createUser.rejected, (state, action) => {
      state.loding = false
      state.error = action.payload
      state.userData = null
    })
  }
})



export const register = registerSlice.reducer 