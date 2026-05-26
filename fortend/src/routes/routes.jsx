import React, { lazy } from "react";
import App from "@/App";
import {
   BrowserRouter,
   Navigate,
   Route,
   Routes,
   useNavigate,
} from "react-router-dom";
import SuspenseLoading from "@/components/loader/SuspenseLoading";
import FrontLayout from "./layout/layout";
import { useSelector } from "react-redux";
import ProtetedRoutes from "./ProtetedRoutes";
const HomePage = lazy(() => import("@/components/pages/HomePage"));
const YouPage = lazy(() => import("@/components/youPageComp/YouPage"));
const RegisterForm = lazy(() => import("@/components/forms/formUi"));
const ForgetPassword = lazy(() => import("@/components/forms/forgetPassword"));
const LogIn = lazy(() => import("@/components/forms/LogIn"));
const Register = lazy(() => import("@/components/forms/register"));
const RequestSingInPage = lazy(() => import("@/components/RequestSingInPage"));
const Baseroutes = () => {
   const isLogin = useSelector(state => state.register.authenticated);
   return (
      <BrowserRouter basename="/">
         <Routes>
            <Route path="/" element={<FrontLayout />}>
               <Route
                  index
                  element={
                     <SuspenseLoading>
                        <HomePage />
                     </SuspenseLoading>
                  }
               />
            </Route>

            <Route
               path="/you"
               element={
                  <ProtetedRoutes>
                     <SuspenseLoading>
                        <YouPage />
                     </SuspenseLoading>
                  </ProtetedRoutes>
               }
            />
            <Route
               path="/requesst-singin"
               element={
                  <SuspenseLoading>
                     <RequestSingInPage />
                  </SuspenseLoading>
               }
            />
            <Route
               path="/register"
               element={
                  <SuspenseLoading>
                     <RegisterForm Register={Register} />
                  </SuspenseLoading>
               }
            />

            <Route
               path="/login"
               element={
                  <SuspenseLoading>
                     <RegisterForm LogIn={LogIn} />
                  </SuspenseLoading>
               }
            />
            <Route
               path="/forgetPassword"
               element={
                  <SuspenseLoading>
                     <RegisterForm ForgetPassword={ForgetPassword} />
                  </SuspenseLoading>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default Baseroutes;
