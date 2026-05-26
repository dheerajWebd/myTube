import { ArrowLeft } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CreateChannelPage = () => {
   const nevigate = useNavigate();
   return (
      <div className="min-h-screen w-full dark:darkLayout text-primary">
         <header className="flex items-center gap-2 border-b-muted-foreground border-b shadow-md shadow-muted-foreground/30 w-full p-4">
            <button onClick={() => nevigate(-1)}>
               <ArrowLeft />
            </button>
            <span>Create Channel</span>
         </header>

         <div className="flex-center w-full h-full">
          
         </div>
      </div>
   );
};

export default CreateChannelPage;
