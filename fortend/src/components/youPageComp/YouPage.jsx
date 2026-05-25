import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { BellIcon, Dot, Search, Settings } from "lucide-react";
import BottomNav from "../Navbar/BottomNav";
import RequestSingInPage from "../RequestSingInPage";
import { BiLeftArrow } from "react-icons/bi";
import { useSelector } from "react-redux";
import DpDatial from "./DpDatial";

const YouPage = () => {
   const LogInData = useSelector(state => state.register.authenticatedData);
   console.log(LogInData.data.avatar.url);

   return (
      <div className="min-h-screen">
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
         <div className="flex-center w-full bg-linear2 bg-size dark:gridlayout"></div>

         <div className="min-h-screen ">
            <DpDatial />
         </div>

         <BottomNav />
      </div>
   );
};

export default YouPage;
