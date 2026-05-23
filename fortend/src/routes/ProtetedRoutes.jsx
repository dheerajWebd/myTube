import authenticateThunk from "@/context/registerThunk/authenticate";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtetedRoutes = ({ Children }) => {
   const navigator = useNavigate();
   const dispatch = useDispatch();
   dispatch(authenticateThunk());
   useEffect(() => {
      const authenticated = sessionStorage.getItem("authenticated");
      if (!authenticated) {
         navigator("/requesst-singin", { replace: false });
      }
   }, []);
   return <>{Children}</>;
};

export default ProtetedRoutes;
