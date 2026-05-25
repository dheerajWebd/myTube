import base_API from "@/AxiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

const authenticateThunk = createAsyncThunk(
   "authenticate/user",
   async (payload, thunkApi) => {
      try {
         const response = await base_API.get("/user/api/v1/me");
         return thunkApi.fulfillWithValue(response.data);
      } catch (error) {
         console.log(error);
         const { response, status, message } = error;
         return thunkApi.rejectWithValue({
            data: response.data,
            status,
            message,
         });
      }
   }
);

export default authenticateThunk;
