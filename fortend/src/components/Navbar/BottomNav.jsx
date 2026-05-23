import usenavHideAndShow from "@/Alleffact/bottamBarEffact";
import { Home, Plus, Subscript, Sun } from "lucide-react";
import React, { useRef } from "react";
import { MdSubscriptions } from "react-icons/md";
import { PiVideoDuotone } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BottomNav = () => {
   const ref2 = useRef(null);
   usenavHideAndShow(ref2, false);
   const isLogin = useSelector(state => state.register.authenticated);

   return (
      <div
         ref={ref2}
         className={`slide w-full sticky z-10 bottom-0 bg-primary-foreground border-t-muted-foreground left-0 h-13 dark:darkLayout shadow-black/10   flex-center ${isLogin ? "justify-evenly" : "justify-between px-8"} `}
      >
         <Link
            to={"/"}
            className="flex font-medium  font-serif cursor-pointer text-xl mt-1  flex-col justify-center items-center "
         >
            <Home />
            <span className="text-xs ">Home</span>
         </Link>
         <Link className="flex font-medium  font-serif cursor-pointer text-2xl mt-1  flex-col  justify-center items-center ">
            <PiVideoDuotone />
            <span className="text-xs  ">short</span>
         </Link>
         {isLogin && (
            <>
               <Link className="flex font-medium  font-serif cursor-pointer text-6xl  flex-col justify-center items-center ">
                  <Plus />
                  <span className="text-xs  ">create</span>
               </Link>

               <Link className="flex font-medium  font-serif cursor-pointer text-xl  flex-col justify-center items-center ">
                  <MdSubscriptions />
                  <span className="text-xs  ">Subscription</span>
               </Link>
            </>
         )}

         <Link
            to={"/you"}
            className="flex font-medium  font-serif cursor-pointer text-6xl  flex-col justify-center items-center "
         >
            <Sun />
            <span className="text-xs  ">you</span>
         </Link>
      </div>
   );
};

export default BottomNav;
