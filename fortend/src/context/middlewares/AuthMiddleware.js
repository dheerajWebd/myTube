const authMiddleware =  store => next => action => {
   console.log(action.type);
   
   if (!sessionStorage.getItem("authenticated")) {
      if (action.type === "authenticate/user/fulfilled") {
         sessionStorage.setItem(
            "authenticated", true
         );
         console.log(store.getState().register.authenticated)
      }
   }
   next(action);
};

export default authMiddleware;