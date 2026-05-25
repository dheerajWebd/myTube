import { Dot, LogOut, Video } from "lucide-react";
import React from "react";
import { BiLeftArrow } from "react-icons/bi";
import { TbPremiumRights } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import LogOutThunk from "../../context/registerThunk/logOut";
const DpDatial = () => {
   const LogInData = useSelector(state => state.register.authenticatedData);
   const LogInError = useSelector(state => state.register.registerError);
   const LogOutLoding = useSelector(state => state.register.LogOutLoding);
   const dispatch = useDispatch();
   const LogInDat = useSelector(state => state.theme.theme);
   console.log(LogInDat);
   return (
      <>
         <div className="w-11/12 flex items-center gap-3 mx-auto my-14 ">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-purple-600">
               <img
                  src={LogInData?.data.avatar.url}
                  className="bg-cover bg-center-center w-20 h-20 bg-no-repeat  "
                  alt="user iamge"
               />
            </div>
            <div className="flex flex-col gap-3">
               <div className="font-bold text-xl capitalize text-primary">
                  {LogInData?.data.fullName}
               </div>
               <div className="flex items-center -mt-4 text-muted-foreground">
                  <div className="font-semibold -mt-0.5 text-xs">
                     ChannelName
                  </div>
                  <Dot />
                  <Link
                     to="/logIn"
                     className="font-semibold flex items-center gap-0.5 -mt-0.5 text-xs"
                  >
                     view channel <BiLeftArrow className="mt-0.5" />
                  </Link>
               </div>
            </div>
         </div>

         <div className="w-11/12 mx-auto  ">
            <Link
               to="/"
               className="text-primary font-semibold flex items-center gap-4 my-5"
            >
               <Video />
               Your videos
            </Link>
            <Link
               to="/"
               className="text-primary font-semibold flex items-center gap-4 my-5"
            >
               <Video />
               Your videos
            </Link>
         </div>

         <div className="w-full border-t-muted-foreground border-[0.01px] bg-primary mx-auto  "></div>
         <div>
            <Link
               to="/"
               className="text-primary capitalize font-semibold flex items-center gap-4 my-5"
            >
               <TbPremiumRights className="text-2xl mx-2" />
               get myTube premium
            </Link>
            <Button
               onClick={e => {
                  console.log("skfldjflskjf");
                  
                  dispatch(LogOutThunk());
               }}
               className="text-destructive capitalize mx-3 bg-red-500/20 font-semibold flex items-center gap-4 my-5"
            >
               <LogOut className="text-2xl " />
               logout
            </Button>
         </div>
      </>
   );
};

export default DpDatial;
