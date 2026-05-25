import React from "react";
import { AlertPopup } from "./Alart";

const ShowAlertpopup = () => {
   sessionStorage.getItem("authenticated");
   return (
      <div>
         {sessionStorage.getItem("authenticated") && (
            <AlertPopup
               mess={"logIn successfully "}
               open2={sessionStorage.getItem("authenticated")}
            />
         )}
      </div>
   );
};

export default ShowAlertpopup;
