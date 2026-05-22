import React, { useRef } from "react";
import Navbar from "./Navbar/Navbar";
import BottomNav from "./Navbar/BottomNav";

import {
   Card,
   CardAction,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { PiVideo } from "react-icons/pi";
import { Menu } from "lucide-react";
import ShprtVideo, { CardImageSort } from "./shprtVideo";
import SortCutSerch from "./SortCutSerch";

export function CardImage() {
   return (
      <Card className="relative mx-auto my-5 w-11/12 ring-2 cursor-pointer ring-offset-green-300 max-w-sm pt-0">
         <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
         <img
            src="https://tympanus.net/Tutorials/CustomCursors/img/05/b4.jpg"
            alt="Event cover"
            className="relative z-20 aspect-video w-full object-cover   dark:brightness-90"
         />
         <CardHeader>
            <div className="w-9">
               <CardAction
                  className={
                     "absolute left-1 w-10  rounded-full bg-red-200 h-10"
                  }
               >
                  {" "}
               </CardAction>
            </div>
            <div className="mr-2">
               <CardTitle className={"line-clamp-2"}>
                  Design systems meetup usyfohpjpsojdpsjdpjpsudspu ufpsopousf
               </CardTitle>
               <CardDescription className={"w-11/12 flex-center"}>
                  <div>channel name.</div>
                  <div>Views.</div>
                  <div>created At.</div>
               </CardDescription>
            </div>
         </CardHeader>
      </Card>
   );
}

const HomePage = () => {
   return (
      <>
         <div className="min-h-screen m-auto  transform-[translateY(5rem)] mb-25  dark:gridlayout bg-linear2 bg-size">
            <div className="w-11/12 m-auto mt-5 flex-center">
               <div className="flex-center w-25 font-medium">
                  <PiVideo className="text-red-500 font-extrabold text-3xl" />
                  <span className="text-2xl "> Short </span>
               </div>
               <Menu className="text-green" />
            </div>

            <ShprtVideo />

            <div className=" grid  md:grid-cols-2 lg:grid-cols-3 ">
               <CardImage />
               <CardImage />
               <CardImage />
               <CardImage />
               <CardImage />
            </div>
         </div>

      </>
   );
};

export default HomePage;
