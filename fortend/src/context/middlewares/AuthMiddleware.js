const authMiddleware = store => next => action => {
   if (action.type === "authenticate/user/fulfilled") {
      sessionStorage.setItem(
         "authenticated",
         JSON.stringify(true)
      );
   }

   if (action.type === "authenticate/user/rejected") {
      sessionStorage.setItem(
         "authenticated",
         JSON.stringify(false)
      );
   }

   return next(action);
};

export default authMiddleware;