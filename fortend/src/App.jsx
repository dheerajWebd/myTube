import "./index.css";
import { Link } from "react-router-dom";
import RegisterForm from "./components/forms/formUi.jsx";

import { lazy } from "react";
import SuspenseLoading from "./components/loader/SuspenseLoading";
import FrontLayout from "./routes/layout/layout";

const HomePage = lazy(() => import("@/components/HomePage"));

const App = () => {
   return (
      <>
         <SuspenseLoading>
            <HomePage />
         </SuspenseLoading>
      </>
   );
};

export default App;
