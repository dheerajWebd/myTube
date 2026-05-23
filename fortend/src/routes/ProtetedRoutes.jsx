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
            
            if (authenticated ) {
               console.log(authenticated);
               navigator("/requesst-singin", { replace: true });
               setSuspenseLoading(false);
            }
         } catch (error) {
            navigator("/requesst-singin", { replace: true });
            setSuspenseLoading(false);
            console.log(error);
         } finally {
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
