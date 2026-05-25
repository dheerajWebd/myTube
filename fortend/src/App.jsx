import "./index.css";
import Baseroutes from "./routes/routes";
import { useDispatch } from "react-redux";
import authenticateThunk from "./context/registerThunk/authenticate";
import { useEffect } from "react";

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      const checkAuth = async () => {
         try {
             dispatch(authenticateThunk());
         } catch (error) {
            console.log(error);
         }
      };
      checkAuth();
   }, [dispatch]);
   return (
      <>
         <Baseroutes />
      </>
   );
};

export default App;
