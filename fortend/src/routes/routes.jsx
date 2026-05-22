import React, { lazy } from "react";
import App from "@/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuspenseLoading from "@/components/loader/SuspenseLoading";
import FrontLayout from "./layout/layout";
// import ForgetPassword from "@/components/forms/forgetPassword";
// import RegisterForm from "@/components/forms/formUi";
// import HomePage from "@/components/HomePage";
// import LogIn from "@/components/forms/LogIn";
// import { LogIn, Register } from "@/import";
// import Register from "@/components/forms/register";
const HomePage = lazy(() => import("@/components/HomePage"));

const YouPage = lazy(() => import("@/components/YouPage"));

const RegisterForm = lazy(() => import("@/components/forms/formUi"));
const ForgetPassword = lazy(() => import("@/components/forms/forgetPassword"));
const LogIn = lazy(() => import("@/components/forms/LogIn"));
const Register = lazy(() => import("@/components/forms/register"));
const Baseroutes = () => {
   return (
      <BrowserRouter basename="/myTube">
         <Routes>
            <Route path="/" element={<FrontLayout />}>
               <Route path="/" element={<App />} />
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
                  <SuspenseLoading>
                     <YouPage />
                  </SuspenseLoading>
               }
            />
         </Routes>
      </BrowserRouter>
   );
};

export default Baseroutes;
