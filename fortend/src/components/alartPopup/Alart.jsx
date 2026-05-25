import { CheckCircle2Icon, InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { BiCut } from "react-icons/bi";
import { GiCancel } from "react-icons/gi";
import { useState } from "react";

export function AlertPopup({ mess, dis = "" ,open2=false}) {
   const [open, setOpen] = useState(true);
   return (
      open && open2 && (
         <div className="grid relative animate-slide-up z-50  w-full max-w-md items-start gap-4">
            <Alert className={" bg-[#00ff33]/30    text-white"}>
               <button
                  onClick={() => {
                    setOpen(!open)
                    console.log(open,"dljsfl");
                    
                    }}
                  className=" absolute right-2 cursor-pointer z-70 top-2 "
               >
                  <GiCancel className="text-2xl " />
               </button>
               <AlertTitle>{mess}</AlertTitle>
               <AlertDescription>{dis}</AlertDescription>
            </Alert>
         </div>
      )
   );
}
