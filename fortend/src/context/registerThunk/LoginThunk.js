import { base_API, createAsyncThunk } from "@/import.js"


const LoginThunk = createAsyncThunk(
  "Login/User", async (payload, thunkAPI) => {
    try {
      const response = await base_API.post("/user/api/v1/login", payload)
      return response.data

    } catch (error) {
      const { response, status, message } = error
      return thunkAPI.rejectWithValue({ data: response.data, status, message })
    }

  }
)
export default LoginThunk