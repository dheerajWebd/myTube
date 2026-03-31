import { configureStore, register } from "@/import.js"


const store = configureStore({
   reducer: {
      register
   },
});
export default store