import BottomNav from "@/components/Navbar/BottomNav";
import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const BottomLayout = () => {
   return (
      <>
         <div className="flex flex-col   h-screen bg-size dark:gridlayout">
            <main className="max-h-fit -mb-6 ">
               <Outlet />
            </main>
            <BottomNav />
         </div>
      </>
   );
};

export default BottomLayout;
