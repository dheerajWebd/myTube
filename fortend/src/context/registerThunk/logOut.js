import base_API from "@/AxiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

const LogOut = createAsyncThunk("logOut/user", async (payload, thunkApi) => {
   try {
      const response = await base_API.post("/user/api/v1/logout");
      sessionStorage.removeItem("authenticated");
      return thunkApi.fulfillWithValue(response.data);
   } catch (error) {
      const { response, status, message } = error;
      return thunkApi.rejectWithValue({ data: response.data, status, message });
   }
});
export default LogOut;
