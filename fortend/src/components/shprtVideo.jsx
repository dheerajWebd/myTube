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
      <Card className="relative mx-2 w-45 h-70 ring-2 cursor-pointer  ring-offset-green-300 bg-transparent max-w-sm pt-0">
         <img
            src="https://i.ytimg.com/vi/t-f0aYdg8Hw/oar2.jpg?sqp=-oaymwEoCJUDENAFSFqQAgHyq4qpAxcIARUAAIhC2AEB4gEKCBgQAhgGOAFAAQ==&rs=AOn4CLBYquEK0IIKGFWDP4zFJuCcUvpJpA&usqp=CCk"
            alt="Event cover"
            className="absolute -z-20 inset-0 size-full bg-no-repeat object-cover grayscale-5"
         />
         <CardHeader className={"mt-55 "}>
            <CardTitle
               className={"line-clamp-2 text-white text-[1rem] w-45 "}
            >
               Design systems meetup usyfo hpjps ojdpsjdpjpsudspu ufpsopousf
            </CardTitle>
         </CardHeader>
      </Card>
   );
}

const ShprtVideo = () => {
   return (
      <div className="w-11/12 mt-3 m-auto rounded-sm overflow-x-scroll no-scrollbar  mask-r-from-98%">
         <div className="overflow-x-scroll no-scrollbar flex w-fit">
            <CardImageSort />
            <CardImageSort />
            <CardImageSort />
         </div>
      </div>
   );
};

export default ShprtVideo;
