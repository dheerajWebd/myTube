import axios from "axios";
"http://localhost:3000/myTube/requesst-singin"

const base_API = axios.create({
   baseURL: "http://localhost:5000",
   // timeout: 10000,
   withCredentials: true,
});
export default base_API;
