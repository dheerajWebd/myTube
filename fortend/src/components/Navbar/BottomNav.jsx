import usenavHideAndShow from "@/Alleffact/bottamBarEffact";
import { Home, Plus, Subscript, Sun } from "lucide-react";
import React, { useRef } from "react";
import { MdSubscriptions } from "react-icons/md";
import { PiVideoDuotone } from "react-icons/pi";
import { Link } from "react-router-dom";

const BottomNav = () => {
   const ref2 = useRef(null);
   usenavHideAndShow(ref2, false);

   return (
      <div
         ref={ref2}
         className="slide w-full sticky z-10 bottom-0 left-0 h-13 text-white  border-t-[#c1c1c1] bg-linear-to-tr to-[#111821] via-[#080c10] from-[#10161f] flex items-center justify-evenly "
      >
         <Link className="flex font-medium  font-serif cursor-pointer text-xl mt-1  flex-col justify-center items-center ">
            <Home />
            <span className="text-xs ">Home</span>
         </Link>
         <Link className="flex font-medium  font-serif cursor-pointer text-2xl mt-1  flex-col  justify-center items-center ">
            <PiVideoDuotone />
            <span className="text-xs  ">short</span>
         </Link>
         <Link className="flex font-medium  font-serif cursor-pointer text-6xl  flex-col justify-center items-center ">
            <Plus />
            <span className="text-xs  ">create</span>
         </Link>
         <Link className="flex font-medium  font-serif cursor-pointer text-xl  flex-col justify-center items-center ">
            <MdSubscriptions />
            <span className="text-xs  ">Subscription</span>
         </Link>
         <Link className="flex font-medium  font-serif cursor-pointer text-6xl  flex-col justify-center items-center ">
            <Sun />
            <span className="text-xs  ">you</span>
         </Link>
      </div>
   );
};

export default BottomNav;
