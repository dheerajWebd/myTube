import authenticateThunk from "@/context/registerThunk/authenticate";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const ProtetedRoutes = ({ children }) => {
   const navigator = useNavigate();
   const authenticateThunkLoding = useSelector(
      state => state.register.authenticateThunkLoding
   );
   const authenticate = useSelector(state => state.register.authenticated);
   
  if (authenticateThunkLoding) {
      return <h1>... </h1>;
   }

  if (authenticate === false ) {
   return <Navigate to="/requesst-singin" replace />
   
  }

 
   return children;
};

export default ProtetedRoutes;
