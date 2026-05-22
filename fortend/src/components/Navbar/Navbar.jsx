import usenavHideAndShow from "@/Alleffact/bottamBarEffact";
import { BellIcon, Search } from "lucide-react";
import React, { lazy, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { GiNightSky } from "react-icons/gi";
import { WiDaySunny } from "react-icons/wi";
import { useDispatch, useSelector } from "react-redux";
import { setTheme, theme } from "@/context/slice/themSlice";
import SortCutSerch from "../SortCutSerch";

const Navbar = () => {
   const dispatch = useDispatch();
   const state = useSelector(state => state.theme.theme);

   const heandleTheme = () => {
      dispatch(setTheme());
   };

   const ref = useRef(null);
   usenavHideAndShow(ref);
   return (
      <nav
         ref={ref}
         className="slide w-full fixed z-10 left-0  bg-secondary border-t-[#c1c1c1] bg-linear-to-tr flex-col flex-center top-0 dark:darkLayout"
      >
         <div className="flex w-full sticky inset-0  justify-center items-center gap-4 bg-tran p-2 ">
            <Link to="/" className="grow font-bold text-2xl">
               MyTube
            </Link>
            <Button
               onClick={heandleTheme}
               className="dark:bg-white dark:text-black"
            >
               {state === "dark" ? (
                  <WiDaySunny className="text-2xl" />
               ) : (
                  <GiNightSky className="text-2xl" />
               )}
            </Button>
            <Link to="">
               <BellIcon className="" />
            </Link>
            <Link to="/forgetPassword">
               <Search />
            </Link>
         </div>
         <SortCutSerch />

      </nav>
   );
};

export default Navbar;
