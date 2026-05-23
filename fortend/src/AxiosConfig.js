import axios from "axios";

const base_API = axios.create({
   baseURL: "https://mytube-backend-beta-v.onrender.com",
   // timeout: 10000,
});
export default base_API;
