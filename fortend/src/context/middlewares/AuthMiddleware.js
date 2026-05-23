const authMiddleware = store => next => action => {
   console.log(action.type);
   
   if (!sessionStorage.getItem("authenticated")) {
      if (action === "authenticate/user") {
         sessionStorage.setItem(
            "authenticated",
            store.getState().sessionStorage.authenticated
         );
      }
   }
   next(action);
};

export default authMiddleware;