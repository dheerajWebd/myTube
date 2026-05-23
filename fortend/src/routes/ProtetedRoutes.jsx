import authenticateThunk from "@/context/registerThunk/authenticate";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const ProtetedRoutes = ({ children }) => {
   const navigator = useNavigate();
   const dispatch = useDispatch();
   const [SuspenseLoading, setSuspenseLoading] = useState(false);
   useEffect(() => {
      const checkAuth = async () => {
         setSuspenseLoading(true);
         try {
            await dispatch(authenticateThunk());
            const authenticated = sessionStorage.getItem("authenticated");
            console.log(authenticated);

            if (authenticated === "false") {
               navigator("/requesst-singin", { replace: false });
               setSuspenseLoading(false);
            }
         } catch (error) {
            navigator("/requesst-singin", { replace: false });
            setSuspenseLoading(false);
            console.log(error);
         } finally {
            const authenticated = await sessionStorage.getItem("authenticated");
            console.log(authenticated);
            setSuspenseLoading(false);
         }
      };
      checkAuth();
   }, [navigator, dispatch]);
   if (SuspenseLoading) {
      return <h1>... </h1>;
   }
   return children;
};

export default ProtetedRoutes;
