import React from "react";

import {
   Card,
   CardAction,
   CardDescription,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

export function CardImageSort() {
   return (
      <Card className="relative mx-2 w-45 h-70 ring-2 cursor-pointer  ring-offset-green-300 max-w-sm pt-0">
         <div className="absolute inset-0 h-2/3 z-30  bg-black/35" />
         <img
            src="https://avatar.vercel.sh/shadcn1"
            alt="Event cover"
            className="relative z-20 h-1/2 w-full object-cover brightness-60 grayscale  dark:brightness-40"
         />
         <CardHeader className={"mt-15"}>
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
               <CardTitle className={"line-clamp-1 w-30"}>
                  Design systems meetup usyfohpjpsojdpsjdpjpsudspu ufpsopousf
               </CardTitle>
               <CardDescription className={"w-11/12 flex-center"}>
                  <div>channel name.</div>
               </CardDescription>
            </div>
         </CardHeader>
      </Card>
   );
}


const ShprtVideo = () => {
   return (
      <div className="w-11/12 mt-3 overflow-x-scroll no-scrollbar  mask-r-from-98%" >
         <div className="overflow-x-scroll no-scrollbar flex w-fit">
            <CardImageSort />
            <CardImageSort />
            <CardImageSort />
         </div>
      </div>
   );
};

export default ShprtVideo;
