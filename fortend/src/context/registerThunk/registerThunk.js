import { base_API, createAsyncThunk } from "@/import.js"



export const createUser = createAsyncThunk("register/user", async (payload, thunkApi) => {
  try {
    const response = await base_API.post("/user/api/v1/register", payload)
    console.log(response.status)
    return response.data
  } catch (error) {
    console.log(error);
    const { response, status, message } = error
    return thunkApi.rejectWithValue({ data: response.data, status, message })
  }
}) 