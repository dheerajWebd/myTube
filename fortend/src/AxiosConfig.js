import axios from "axios";

const base_API = axios.create({
   baseURL: "http://localhost:5000",
   // timeout: 10000,

});
export default base_API;
