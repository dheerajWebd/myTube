import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { BellIcon, Search, Settings } from "lucide-react";

const YouPage = () => {
   return (
      <main>
         <nav className="navLayout">
            <div className="flex w-full sticky inset-0   items-center justify-between  gap-4 bg-tran p-2 ">
               <Button className="grow max-w-41 font-normal bg-transparent/80 text-xl text-primary rounded-2xl ring-2 ring-primary/20  shadow-2xl shadow-primary/70">
                  Accounts
               </Button>

               <div className="flex-center w-1/4">
                  <Link to="" className="">
                     <BellIcon className="" />
                  </Link>
                  <Link to="/forgetPassword">
                     <Search />
                  </Link>
                  <Link to="/forgetPassword">
                     <Settings />
                  </Link>
               </div>
            </div>
         </nav>
      </main>
   );
};

export default YouPage;
