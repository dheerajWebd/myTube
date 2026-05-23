import React from "react";
import { BsPeople } from "react-icons/bs";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import BottomNav from "./Navbar/BottomNav";

const RequestSingInPage = () => {
   return (
      <div className="w-full h-screen overflow-hidden relative  dark:bg-secondary text-secondary-foreground">
         <div className=" flex-center w-full dark:bg-card  ">
            <div className="flex-center gap-4">
               <div className="w-10 h-10 border-2 border-secondary-foreground flex-center justify-center rounded-full cursor-pointer ">
                  <BsPeople className="text-2xl" />
               </div>
               <span>Sign in</span>
            </div>
         </div>

         <img
            src="https://m.youtube.com/static/sign_in_promo.png"
            alt="logOut img "
            className=" w-120"
         />

         <div className="w-[90%] flex m-auto text-center justify-center text-2xl font-semibold">
            Enjoy your favorite videos
         </div>
         <div className="w-[90%] flex m-auto mt-2 text-center justify-center text-xs font-semibold">
            Sign in to access videos that you’ve liked or saved
         </div>

         <div className="w-[90%]  flex m-auto  text-center justify-center text-xs font-semibold">
            <Link to="/logIn" className="">
               <Button className="w-25 cursor-pointer m-auto bg-blue-500 text-black rounded-full mt-4">
                  <BsPeople className="text-2xl " /> <span>Sign in</span>
               </Button>
            </Link>
         </div>
<div className="w-[90%] h-60 flex m-auto mt-2 text-center justify-center text-xs font-semibold"></div>
         <BottomNav />
      </div>
   );
};

export default RequestSingInPage;
