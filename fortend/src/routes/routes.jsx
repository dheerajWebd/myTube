import App from "@/App";
import ForgetPassword from "@/components/forms/forgetPassword";
import RegisterForm from "@/components/forms/formUi";
import { LogIn, Register } from "@/import";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Baseroutes = () => {
   return (
      <BrowserRouter basename="/myTube">
         <Routes>
            <Route path="/" element={<App />} />
            <Route
               path="/register"
               element={<RegisterForm Component={Register} />}
            />
            <Route path="/login" element={<RegisterForm LogIn={LogIn} />} />
            <Route path="/forgetPassword" element={<RegisterForm ForgetPassword={ForgetPassword} />} />
            {/* <Route path="/home" element={<Home />} /> */}
         </Routes>
      </BrowserRouter>
   );
};

export default Baseroutes;
