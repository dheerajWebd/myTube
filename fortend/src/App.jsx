import "./index.css";
import { Link } from "react-router-dom";
import RegisterForm from "./components/forms/formUi.jsx";
const App = () => {
   return (
      <>
         <Link to="/register">register</Link>
         <Link to="/login">login</Link>
         <Link to="/forgetPassword">forgetPassword</Link>
      </>
   );
};

export default App;
