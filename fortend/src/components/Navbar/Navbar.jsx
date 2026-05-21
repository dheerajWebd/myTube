import usenavHideAndShow from "@/Alleffact/bottamBarEffact";
import { BellIcon, Search } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () => {
   const ref = useRef(null);
   usenavHideAndShow(ref);
   return (
      <nav
         ref={ref}
         className="slide w-full relative z-10 top-0 left-0  text-white transition-top duration-1000 border-t-[#c1c1c1] dark:bg-linear-to-tr to-[#111821] via-[#080c10] from-[#10161f]  flex flex-col items-center justify-between shadow-black/10 "
      >
         <div className="flex w-full text-white sticky top-0 dark:bg-background justify-center items-center gap-4 bg-tran p-2">
            <Link to="/" className="grow text-white">
               MyTube
            </Link>
            <Link to="">
               <BellIcon className="text-white" />
            </Link>
            <Link to="/forgetPassword">
               <Search />
            </Link>
         </div>
         <div className="ml-1 w-[98%] h-10 flex bg-scroll no-scrollbar scroll-none scroll-smooth overflow-x-auto">
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#212121]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
            <Link to={""}>
               <Button className={` cursor-pointer btn bg-[#141414]`}>
                  All
               </Button>
            </Link>
         </div>
      </nav>
   );
};

export default Navbar;
