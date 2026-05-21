import React, { Children, Suspense } from "react";

const SuspenseLoading = ({children}) => {
   return <Suspense fallback={<h1>... </h1>}>
    
    {children}
    
    </Suspense>;
};

export default SuspenseLoading;
